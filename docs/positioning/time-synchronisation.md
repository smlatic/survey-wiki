---
title: Time Synchronisation in Survey Systems
category: reference
tags: [time-sync, pps, 1pps, ntp, ptp, gps-time, utc, leap-seconds, latency, timing, zda, eiva-attu, qinsy, mobilisation]
equipment: [EIVA ATTU, QPS QINSy Time Sync Adapter, Trimble GNSS, Applanix POS MV]
date_added: 2026-03-04
last_reviewed: 2026-03-04
source_type: original
---

# :material-clock-check-outline: Time Synchronisation in Survey Systems

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Reference</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Reference Guide</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-04</strong></span>
</div>

!!! abstract "Purpose"
    Reference covering time synchronisation principles, methods, equipment, and verification for offshore survey systems. Explains why precise timing is critical for multibeam bathymetry and acoustic positioning, how the various timing methods compare in accuracy, how to distribute and verify timing across the survey spread, and how timing errors manifest in the final data. Poor time synchronisation produces position-dependent depth errors that are easily mistaken for other calibration problems, making this one of the most important and most overlooked aspects of survey system mobilisation.

---

## :material-calendar-check: When to Use

Refer to this article:

- When mobilising survey equipment and configuring time synchronisation
- When investigating systematic depth errors that vary with vessel speed or heading
- When setting up PPS distribution across multiple survey PCs
- When deciding between timing methods (PPS, NTP, ZDA) for a survey spread
- When performing latency tests during mobilisation
- When auditing time sync health during acquisition
- During survey readiness reviews and system acceptance checks

---

## :material-information-outline: Overview

Every sensor in a survey system -- GNSS, multibeam sonar, motion sensor, heading sensor, sound velocity probe -- generates data at its own rate and with its own processing delay. The survey software must combine all of these data streams into a single coherent picture: the correct depth, at the correct position, at the correct instant. This is only possible if every piece of data carries an accurate timestamp referenced to a common time base.

Without proper synchronisation, a depth sounding gets paired with a position or attitude measurement from slightly the wrong moment. The result is a systematic error that depends on the vessel's speed and motion at that instant. A vessel moving at 4 knots covers about 2 metres per second. A 10 ms timing error therefore produces a 2 cm position offset. At higher speeds, rougher seas, or with greater timing errors, the resulting depth and position errors become significant.

The difficulty is that timing errors produce effects that look like other calibration problems. A timing error between the GNSS and the multibeam sonar mimics a pitch bias in the patch test. A timing error between the motion sensor and the sonar mimics a heave phase error. Diagnosing timing as the root cause requires understanding how these errors present in the data.

---

## :material-book-open-variant: Theory and Principles

### GPS Time vs UTC

All survey timing ultimately references GNSS (GPS) atomic clocks, but there is an important distinction between GPS time and UTC.

**GPS time** was set equal to UTC on 6 January 1980 and has run continuously since then without adjustment. GPS atomic clocks are accurate to approximately 14 nanoseconds (theoretical) and 100 nanoseconds in practice.

**UTC** is periodically adjusted by inserting leap seconds to keep it aligned with the Earth's rotation. As of 2025, UTC is 18 seconds behind GPS time (GPS time = UTC + 18 seconds).

!!! warning "Leap Second Handling"
    Survey software and GNSS receivers handle the GPS-to-UTC conversion internally, but the surveyor must be aware of this offset. If a system outputs GPS time and another system outputs UTC, and the software does not account for the 18-second difference, every timestamp will be offset by 18 seconds. This is catastrophic for data quality. Always verify that all systems are configured to output the same time reference (usually UTC), or that the software is applying the correct leap second correction.

### Sensor Latency

Every sensor has a processing delay between the instant a measurement is made and the instant the data arrives at the survey software. This delay is called latency.

Typical sensor latencies:

| Sensor | Typical Latency |
|:--|:-:|
| GNSS position fix | 200-400 ms |
| Multibeam sonar | Varies by system |
| Motion sensor (serial interface) | 5-50 ms |
| Motion sensor (Ethernet interface) | 1-10 ms |
| Heading sensor | 10-30 ms |

**The problem**: A GNSS position reported at time T was actually measured at time T minus 200-400 ms. If the survey software stamps it at arrival time rather than measurement time, the position is associated with the wrong moment. At 4 knots, 400 ms of latency means the position is from 0.8 m behind where the vessel is now.

Accurate time synchronisation allows the software to correctly account for these latencies. The timestamp tells the software when the measurement was taken, not when it arrived. Latency values are then configured in the software to shift each data stream to the correct moment in time.

---

## :material-sort-descending: The Timing Hierarchy

Timing methods differ significantly in accuracy. Choosing the right method depends on the survey type, equipment available, and accuracy requirements.

### Tier 1: Dedicated Time-Tagging Hardware (< 50 microseconds)

The most accurate approach uses purpose-built hardware that timestamps all incoming sensor data at the point of arrival using a GPS-disciplined clock.

**EIVA ATTU**

- 1U rack-mounted unit with 24-port RS-232 input
- Timestamps each byte of incoming serial data using an internal GPS-disciplined clock
- Accuracy: better than 50 microseconds
- Converts all serial sensor feeds into a single UDP/IP output with unified time format
- Can serve as NTP server for the survey network
- Eliminates the timing uncertainty of PC serial port handling entirely
- Cost: approximately EUR 8,075

The advantage of dedicated hardware is that the survey PC's operating system is removed from the timing chain. Windows and Linux are not real-time operating systems. They cannot guarantee when a serial port interrupt will be serviced, introducing variable delays of 1-30 ms. A hardware time-tagger bypasses this entirely by timestamping the data before it reaches the PC.

### Tier 2: PPS / 1PPS (1-5 ms)

A Pulse Per Second (PPS) signal is an electrical pulse with a sharply rising edge that repeats exactly once per second, synchronised to GPS atomic clocks. The rising edge of each pulse is aligned to the GPS second boundary.

**How it works:**

1. The GNSS receiver outputs a 1PPS signal on a dedicated connector (typically BNC or serial pin)
2. The PPS signal is connected to the survey PC via a serial port (COM port) or dedicated adapter
3. The survey software detects the rising edge and uses it to discipline its internal clock
4. Between PPS pulses, the PC's internal clock interpolates sub-second timing

**Accuracy**: 1-5 ms in typical survey configurations. The PPS pulse itself is accurate to sub-microsecond, but the PC's ability to detect and act on the pulse edge is limited by the operating system's interrupt handling.

**QINSy Time Synchronization Adapter**: QPS manufactures a dedicated adapter that achieves better than 0.5 ms accuracy using a TTL-level 1PPS signal. This is the recommended method for QINSy installations.

**Cable considerations:**

- PPS is typically a TTL-level signal (0-5V) or RS-232 level
- Keep cable runs short (under 10 m) to preserve signal integrity
- Use shielded cable to prevent interference
- BNC connectors are common; some receivers output PPS on a serial port pin (DCD or DSR)
- If distributing PPS to multiple PCs, use a dedicated PPS distribution amplifier or splitter, not a passive Y-cable (which degrades the signal edge)

### Tier 3: NTP / PTP (Millisecond Level)

**NTP (Network Time Protocol)** distributes accurate time over an Ethernet network.

**Typical setup:**

1. A GNSS receiver with NTP output is connected to the survey network (this is the Stratum-0 source)
2. The PC directly connected to the receiver becomes a Stratum-1 NTP server
3. Other PCs on the network synchronise to this server as Stratum-2 clients
4. Each hop away from the source adds a small amount of uncertainty

**Accuracy**: Millisecond level on a well-configured local network. Adequate for most survey operations. QPS documentation rates NTP as the second-best option after dedicated hardware.

**PTP (Precision Time Protocol, IEEE 1588)** is a higher-precision variant of NTP designed for industrial networks. PTP can achieve sub-microsecond accuracy with hardware timestamping support on network switches and interfaces. Increasingly used in modern survey systems but requires PTP-aware network infrastructure.

!!! tip "NTP Best Practice"
    On the survey network, use a local GNSS-disciplined NTP server, not an internet NTP source. Internet NTP introduces variable latency from the VSAT link (500-750 ms round trip to geostationary satellites) and is unsuitable for survey timing. Configure the survey PCs to use only the local GPS NTP server, and disable any internet NTP sources (e.g., time.windows.com).

### Tier 4: NMEA ZDA Telegrams (20-30 ms)

The NMEA ZDA message provides date and time information over a serial connection:

```
$GPZDA,hhmmss.ss,dd,mm,yyyy,xx,yy*CC
```

The GNSS receiver sends this telegram once per second, and the survey software reads the time from the message content.

**Accuracy**: 20-30 ms. The limitation is the serial transmission itself. At 9600 baud, a 40-character message takes about 40 ms to transmit. The time in the message refers to the moment the GNSS receiver began composing it, but the software cannot read it until the full message has been received. This introduces a variable delay depending on baud rate, message length, and serial port buffering.

Trimble receivers output a proprietary UTC telegram that follows the same principle but may differ in format. EIVA NaviPac supports both NMEA ZDA and Trimble UTC telegrams.

!!! warning "ZDA Is Not Sufficient for Multibeam"
    20-30 ms timing uncertainty is acceptable for single-beam echosounders operating at low vessel speeds, where the spatial error is within acceptable limits. For multibeam bathymetry, where the swath geometry amplifies timing errors at the outer beams, this level of accuracy is insufficient. Always use PPS or NTP as the primary timing source and treat ZDA as a backup or time-of-day reference only.

### Summary Comparison

| Method | Accuracy | Interface | Cost | Notes |
|:--|:-:|:--|:-:|:--|
| EIVA ATTU | < 50 us | Serial in, UDP out | ~EUR 8,075 | Best. Removes OS from timing chain. |
| QINSy Time Sync Adapter | < 0.5 ms | TTL PPS + serial | Moderate | Best option for QINSy. |
| PPS to serial port | 1-5 ms | Serial (DCD/DSR pin) | Low | Widely supported. Cable length matters. |
| NTP (local GPS server) | ~1 ms | Ethernet | Low | Second-best per QPS. Scalable to all PCs. |
| PTP (IEEE 1588) | < 1 us | Ethernet (hardware) | Moderate-High | Requires PTP-capable switches. |
| NMEA ZDA telegram | 20-30 ms | Serial | Lowest | Adequate for single-beam only. |

---

## :material-cog-outline: Practical Setup

### Step 1: Establish the Time Source

The primary time source is always a GNSS receiver with a valid satellite fix. Configure the receiver to output:

- **1PPS signal** on BNC or serial pin (for hardware or serial PPS synchronisation)
- **NMEA ZDA or Trimble UTC telegram** on a serial port (for time-of-day reference)
- **NTP service** if the receiver supports it directly, or connect PPS + serial time to a dedicated NTP server appliance

### Step 2: Distribute Time to Survey PCs

For a multi-PC survey spread:

1. **Primary survey PC**: Connect PPS directly (serial port or QINSy adapter). This PC handles the primary acquisition.
2. **Secondary PCs**: Synchronise via NTP from a local GPS-disciplined NTP server on the survey network. The EIVA ATTU can serve as this NTP server.
3. **Standalone sensors with Ethernet**: Many modern sensors (Kongsberg EM series, Applanix POS MV) accept NTP or PTP for internal time synchronisation. Configure them to use the survey network's NTP server.

### Step 3: Configure Latency Values

After time synchronisation is established, each sensor's latency must be measured and entered into the survey software:

- Run latency test lines (reciprocal lines over a steep feature at multiple speeds)
- Compute the latency from the observed positional shift between opposing lines
- Enter the measured latency into the driver configuration for each sensor
- Run multiple latency tests and average the results. Do not rely on a single test.

### Step 4: Verify During Acquisition

Both QINSy and NaviPac provide real-time time synchronisation monitoring displays. Check these during acquisition to verify that:

- The PPS signal is being received and the time offset is within tolerance
- NTP clients are synchronised with low offset and jitter
- No sensor data streams show time jumps or discontinuities

---

## :material-alert-decagram: How Timing Errors Manifest in Data

Timing errors do not produce random noise. They produce systematic, motion-correlated errors that follow predictable patterns. Recognising these patterns is the key to diagnosing timing as the root cause.

### Position-Dependent Depth Errors in MBES

A timing offset between the GNSS position fix and the sonar ping causes the sonar data to be applied at the wrong position. Because the vessel is moving, the soundings are shifted along-track. Over a flat seabed, this is invisible. Over a sloped seabed, the shift produces a depth error proportional to the slope gradient and the vessel speed.

**The signature**: Depth disagreement between reciprocal survey lines over sloping features. One direction reads deeper than the other. This looks identical to a pitch offset in the patch test. If the patch test pitch value changes significantly between mobilisations or seems unreasonably large, suspect timing rather than a genuine angular offset.

!!! info "Distinguishing Timing from Pitch"
    A true pitch offset produces a constant angular error regardless of vessel speed. A timing error produces an error that scales linearly with vessel speed. Run patch test lines at two different speeds. If the computed pitch offset changes with speed, the error is timing, not pitch.

### Attitude-Correlated Depth Errors

A timing offset between the motion sensor and the sonar causes attitude corrections to be applied at the wrong phase of the vessel's roll and pitch cycle. The result is a depth ripple correlated with vessel motion.

**The signature**: Depth errors that oscillate with the roll or pitch period. More pronounced in rough seas than calm conditions. May appear as a sinusoidal pattern in cross-track depth profiles.

### Across-Track Position Shift

A timing error between heading and position causes the entire swath to be shifted across-track in a direction that depends on the vessel's heading. Adjacent swaths surveyed on reciprocal headings will show a systematic offset between them.

**The signature**: Swath-to-swath offsets that reverse direction with heading changes. Looks like a heading bias but changes magnitude with vessel speed.

### Quantifying the Effect

The magnitude of timing-induced errors depends on vessel speed, motion dynamics, and the timing offset:

| Timing Error | Vessel Speed | Along-Track Position Error |
|:-:|:-:|:-:|
| 5 ms | 3 knots (1.5 m/s) | 0.008 m |
| 10 ms | 3 knots (1.5 m/s) | 0.015 m |
| 10 ms | 6 knots (3.1 m/s) | 0.031 m |
| 50 ms | 4 knots (2.1 m/s) | 0.103 m |
| 100 ms | 4 knots (2.1 m/s) | 0.206 m |

For attitude timing errors, the effect depends on the angular rate. At a roll rate of 8 deg/s, a 1 ms timing error produces approximately 0.008 degrees of roll error, which at 30 m depth and 45-degree beam angle results in a depth error of approximately 4 mm. At 10 ms, this grows to approximately 4 cm.

---

## :material-clipboard-check-outline: Mobilisation Checklist: Time Synchronisation Verification

Use this checklist during mobilisation to verify that time synchronisation is correctly established.

### Time Source

- [ ] GNSS receiver has valid satellite fix (minimum 5 satellites)
- [ ] GNSS receiver is outputting 1PPS signal (verified with oscilloscope or LED indicator)
- [ ] GNSS receiver is outputting ZDA or UTC telegram at correct baud rate
- [ ] GPS-to-UTC leap second offset is correctly configured (currently 18 seconds)

### PPS Distribution

- [ ] PPS cable connected to survey PC serial port or time sync adapter
- [ ] PPS cable is shielded, under 10 m, with secure connectors
- [ ] If distributing to multiple PCs: active PPS splitter/amplifier is used (not passive Y-cable)
- [ ] Survey software confirms PPS reception (check time sync display)
- [ ] PC clock offset from PPS is within tolerance (typically < 5 ms)

### NTP Configuration

- [ ] Local NTP server is running and disciplined to GPS PPS
- [ ] All survey PCs are configured to use the local NTP server only
- [ ] Internet NTP sources (time.windows.com, pool.ntp.org) are disabled on survey PCs
- [ ] NTP offset and jitter are acceptable (offset < 5 ms, jitter < 2 ms)
- [ ] Standalone Ethernet sensors are configured to use the local NTP server

### Software Configuration

- [ ] Survey software time source is set correctly (PPS, NTP, or hardware time-tagger)
- [ ] Time synchronisation display is active and showing valid status
- [ ] All sensor drivers have correct latency values entered
- [ ] Timestamp format (GPS vs UTC) is consistent across all systems

### Latency Testing

- [ ] Latency test lines acquired over a suitable feature (steep slope, > 10-degree gradient)
- [ ] Multiple speed runs performed (minimum 2 speeds, forward and reverse on each)
- [ ] Latency computed and compared against expected values for each sensor
- [ ] Latency values entered into survey software
- [ ] If computed latency differs significantly from previous mobilisations, investigate before accepting

### Ongoing Monitoring

- [ ] Time sync display is checked at the start of each survey shift
- [ ] Any time jumps or sync warnings are investigated immediately
- [ ] If GNSS fix is lost and re-acquired, time sync status is re-verified
- [ ] Time sync status is logged in the daily survey report

---

## :material-frequently-asked-questions: Common Issues and Solutions

| Problem | Likely Cause | Solution |
|:--|:--|:--|
| PC clock drifts > 50 ms within hours | PPS not connected or not detected | Check PPS cable, verify serial port DCD/DSR interrupt is enabled in OS |
| Large time offset on secondary PCs | NTP misconfigured or using internet source | Point NTP client to local GPS server, disable internet sources |
| Latency test gives inconsistent results | Timing jitter from OS serial port handling | Use hardware time-tagger (EIVA ATTU) or switch sensor to Ethernet interface |
| Patch test pitch value changes with speed | Timing error, not pitch offset | Measure and correct system latency. Re-run patch test after correction. |
| Depth ripple correlated with roll period | Motion sensor timing offset | Check motion sensor latency value. Switch from serial to Ethernet if available. |
| 18-second time offset on one sensor | GPS vs UTC mismatch | Verify all systems output the same time reference. Apply leap second correction. |
| Time jumps in logged data | GNSS fix loss/re-acquisition | Check GNSS signal quality. Investigate antenna cable, obstruction, or interference. |

---

## :material-link-variant: Related Articles

- [Total Propagated Uncertainty and Error Budgets](../reference/tpu-error-budgets.md)
- [Heave, MRU Theory and Verification](../mobilisation/heave-mru-theory.md)
- [MBES Calibration (Patch Test)](../sensors/mbes-calibration.md)
- [Mobilisation Checklist](../mobilisation/mobilisation-checklist.md)
- [Acceptance Criteria Reference](../reference/acceptance-criteria-reference.md)

---

## :material-table: Quick Reference

| Parameter | Value |
|:--|:-:|
| GPS-UTC leap second offset (2025) | 18 seconds |
| GPS clock accuracy (theoretical) | ~14 nanoseconds |
| GPS clock accuracy (practical) | ~100 nanoseconds |
| EIVA ATTU accuracy | < 50 microseconds |
| QINSy Time Sync Adapter accuracy | < 0.5 ms |
| PPS to serial port accuracy | 1-5 ms |
| NTP on local network accuracy | ~1 ms |
| NMEA ZDA accuracy | 20-30 ms |
| Position error per 10 ms at 4 kn | ~0.021 m |
| Roll error per 1 ms at 8 deg/s | ~0.008 deg |

---

!!! quote "Sources"
    - [Deepak Kaira, PPS -- Simple as That (LinkedIn)](https://www.linkedin.com/pulse/pps-pulse-per-second-simple-deepak-kaira)
    - [EIVA ATTU Time Tagging Units](https://www.eiva.com/products/hardware/attu-time-tagging-units/attu)
    - [QPS QINSy Time Synchronization](https://confluence.qps.nl/qinsy/8.0/en/how-to-time-synchronization-display-182619335.html)
    - [EIVA NaviPac Timing Principles](https://manualzz.com/doc/6871741/timing-principles-in-navipac)
    - [Wikipedia - Pulse-per-second signal](https://en.wikipedia.org/wiki/Pulse-per-second_signal)
    - [Hydro International - Motion Sensor Performance](https://www.hydro-international.com/content/article/motion-sensor-performance)
    - [SBG Systems - Ship Motion Measurements](https://support.sbg-systems.com/sc/kb/latest/integrated-motion-navigation-sensors/ship-motion-measurements)
    - IHO S-44, Edition 6.1.0, Standards for Hydrographic Surveys
    - IMCA S 015, Guidelines for the use of Multibeam Echosounders
    - IEEE 1588, Standard for a Precision Clock Synchronization Protocol
