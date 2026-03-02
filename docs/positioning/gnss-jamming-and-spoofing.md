---
title: GNSS Jamming and Spoofing
category: positioning
tags: [gnss, jamming, spoofing, grit, anti-jam, crpa, scintillation, solar-cycle, interference, resilience, mitigation]
equipment: [GNSS Receiver, Anti-Jam Antenna, CRPA Antenna, L-Band Demodulator]
date_added: 2026-03-01
source_type: converted_procedure
last_reviewed: 2026-03-01
---

# :material-shield-alert: GNSS Jamming and Spoofing

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Positioning</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Reference Guide</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Reference guide covering GNSS jamming and spoofing threats, their mechanisms, and recommended mitigation strategies including anti-jam antennas, resilient PPP services, and GNSS integrity technology. Also covers Solar Cycle 25 effects on GNSS positioning and practical steps to mitigate ionospheric scintillation.

---

## :material-signal-off: Why GNSS Is Vulnerable

Two fundamental characteristics make GNSS signals vulnerable to interference:

1. **Fixed, known frequencies** -- GNSS signal bands are globally regulated to fixed frequencies, making them predictable targets
2. **Extremely weak at reception** -- by the time GNSS signals reach the antenna, they are at very low power levels, making them easy to overpower with stronger signals on the same frequency

---

## :material-signal-off: Jamming

Jamming is the deliberate or accidental transmission of radio frequency energy on GNSS frequencies at a power level sufficient to overwhelm the authentic signals.

!!! danger "Effect"
    Jamming shows up as a **complete loss of GNSS signal** when the authentic signals are overwhelmed by the stronger jamming signal.

---

## :material-incognito: Spoofing

Spoofing is a more sophisticated form of interference where the receiver is tricked into reporting an **incorrect position**.

### Types of Spoofing

| Type | Description | Sophistication |
|---|---|---|
| **Non-overlapped** | Code and carrier phase of the spoofing signals are **not synchronized** with authentic GNSS signals | Lower |
| **Overlapped** | Code phase and Doppler frequency of the spoofing signals are **synchronized** with the authentic GNSS signals. The spoofer must know the current time, observable satellites, location, and parameters of the target receiver | Higher |

### Two-Step Spoofing Process

Spoofing is often executed in two stages:

1. **Jam** -- disrupt the receiver from tracking authentic GNSS signals
2. **Transmit** -- send false signals to the target receiver, either from a signal generator or by rebroadcasting recorded GNSS signals

---

## :material-map-marker-alert: Known Hotspots

Jamming and spoofing incidents are concentrated in specific regions. Surveyors mobilising to these areas should plan for GNSS degradation and ensure mitigation equipment is available.

| Region | Threat Type | Notes |
|---|---|---|
| **Eastern Mediterranean** | Spoofing and jamming | Persistent and widespread; vessels frequently report false positions |
| **Black Sea** | Spoofing | Well-documented spoofing events displacing vessels to incorrect locations |
| **Baltic Sea** | Jamming and spoofing | Increasing incidents, particularly near areas of geopolitical tension |
| **Southeast Asia** (Strait of Malacca, South China Sea) | Jamming | Intermittent jamming; often associated with illegal fishing or territorial disputes |
| **Persian Gulf / Red Sea** | Jamming | Related to regional military activity |

!!! warning "Situational Awareness"
    Check current GNSS interference reports (e.g. from the US Coast Guard NAVCEN, EUROCONTROL, or commercial maritime alerting services) before mobilising to any of these regions.

---

## :material-magnify: Detection Methods

### Automatic Gain Control (AGC) Monitoring

AGC is a key indicator of GNSS interference. The AGC circuit in a GNSS receiver automatically adjusts the signal gain to maintain optimal signal levels. Under normal conditions, AGC values remain stable.

- **Elevated AGC** indicates the receiver is reducing gain because an abnormally strong signal is present -- this is a hallmark of **jamming**
- **Fluctuating AGC** suggests intermittent interference
- Most modern survey-grade receivers expose AGC values through their status outputs; these should be monitored in the QC software

!!! tip "AGC as an Early Warning"
    AGC changes can appear **before** the position solution degrades, making it one of the earliest indicators of GNSS interference. Include AGC monitoring in the standard QC display alongside DOP, satellite count, and error ellipse.

### Other Indicators

- Sudden drop in tracked satellite count
- Unexpected jump in position or velocity
- GRIT / spoofing status flags on compatible receivers
- Position disagreement between independent GNSS systems
- C/N0 (carrier-to-noise ratio) anomalies

---

## :material-shield-check: Mitigation Strategies

### GNSS Resilience and Integrity Technology (GRIT)

GRIT provides built-in resilience against jamming and spoofing when used with compatible GNSS receivers and QC software. It gives the best chance of reliable, continuous positioning in contested RF environments.

### Firmware Updates

Ensure all GNSS receivers are operating with the **latest firmware**. Recent firmware updates for modern receivers include enhanced spoofing and jamming status indicators that improve situational awareness and response capabilities.

!!! note
    GRIT must be enabled and calibrated on the receiver for the indicators to function.

### Resilient PPP Service

Use the most robust PPP service available, with:

- **Multi-constellation support** (GPS, GLONASS, Galileo, BeiDou)
- **Faster reconvergence times** after signal disruption
- Improved resilience through constellation diversity

---

## :material-antenna: Anti-Jamming Antennas

### CRPA (Controlled Reception Pattern Antenna)

CRPA-type antennas (e.g., GAJT -- GPS Anti-Jam Technology) mitigate interference by **creating nulls in the antenna gain pattern** in the direction of the jammers. This provides significant anti-jam protection by steering antenna reception away from interference sources.

| Characteristic | Detail |
|---|---|
| Method | Adaptive beam forming with directional nulls |
| Protection | High -- steers nulls toward jammer direction |
| Cost | Higher |
| Export controls | May be subject to export restrictions |
| Lead time | Can be long |

### Standard Anti-Jam Antenna (LEANA)

Low Elevation Angle Nulling Antenna (LEANA) type, such as the Calian AJ977XF, provides wideband suppression of ground-level interference.

| Characteristic | Detail |
|---|---|
| Method | Suppression of signals below ~15 degrees elevation |
| Suppression | **20 dB typical** for all GNSS band signals from 0 to ~15 degrees |
| Rationale | To date, all GNSS jamming signals have originated at ground level |
| Cost | Lower |
| Export controls | Not subject to export restrictions |
| Lead time | Up to six weeks |

!!! tip "Field Experience"
    Standard anti-jam antennas have been effectively used to counter jamming in high-risk areas, particularly in the Middle East.

---

## :material-puzzle: Recommended Combination

The recommended approach for contested environments combines three elements:

- [x] **Modern GNSS receiver** with latest firmware and GRIT enabled
- [x] **Anti-jam antenna** (standard LEANA type or CRPA depending on threat level)
- [x] **Resilient PPP service** with multi-constellation support and fast reconvergence

This combination mitigates jamming while leveraging multiple satellite constellations for greater resilience and faster recovery after disruption.

---

## :material-white-balance-sunny: Solar Cycle 25 and GNSS

### Solar Cycle Background

The solar cycle is a nearly periodic **11-year fluctuation** in solar activity measured by sunspot numbers. Over each cycle, solar radiation, solar flares, coronal mass ejections, and sunspot counts rise from a minimum to a maximum and back.

- **Solar Cycle 25** started in **December 2019** and will continue to approximately 2030
- Solar Cycle 25 **peaked in late 2024 / early 2025**, with activity exceeding initial predictions. The cycle remains elevated and GNSS disruption risk continues through the declining phase

### Effects on GNSS Positioning

Increased solar activity amplifies ionospheric variability, producing two distinct effects:

#### 1. Ionospheric Bias

Increased ionospheric activity can introduce **errors up to 15 metres** into single-frequency DGNSS due to the failure of the differential process to cancel the ionospheric delay between the reference station and the user.

!!! info "Dual-Frequency"
    Dual or multi-frequency GNSS systems **measure** (rather than model) the ionospheric error and can largely mitigate this bias. However, dual-frequency does not guarantee that DGNSS will not drop out during extreme events.

#### 2. Ionospheric Scintillation

Scintillation is the **rapid fluctuation in amplitude and phase** of GNSS signals as they pass through a disturbed ionosphere. Effects include:

- Fluctuations in carrier-phase amplitude and phase, introducing noise
- **Loss of lock** to individual satellites
- Reduced number of usable GNSS satellites
- Intermittent reception of L-band correction data (reduced link strength)
- In extreme cases, **total loss of GNSS positioning**

!!! warning "Timing"
    Scintillation effects are normally seen in a **window of approximately 6 hours after sundown**, mainly along the geomagnetic equator. They are not easily predictable.

---

## :material-strategy: Scintillation Mitigation

### 6 Mitigation Strategies

1. **Multi-constellation, multi-frequency GNSS** -- increase the number of observations available to the position solution (effective in the majority of situations, though not all)
2. **Multi-beam L-band reception** -- use at least two independent downlink satellites so corrections can still be received if lock to one is lost
3. **Diverse hardware and services** -- select GNSS receivers and services from different providers to benefit from any temporary improvement associated with differences in hardware, firmware, or software
4. **GNSS + INS integration** -- minimise impact on the position solution if satellite tracking is disrupted (note: INS solutions are time-dependent and will degrade until the DGNSS signal is restored)
5. **Non-GNSS positioning references** -- deploy additional acoustic, optical, radar, or inertial reference systems to mitigate potential loss of GNSS during risk periods
6. **Increased vigilance** -- online surveyors should monitor for scintillation effects with heightened awareness, especially after sunset

### Planning Considerations

- Factor the potential for ionospheric disruption and loss of GNSS/L-band communications into **risk assessments** when planning critical offshore activities
- Online ionospheric activity forecast tools (e.g., Veripos ionospheric activity forecast maps) can help predict when scintillation might affect the work area
- QC software can show real-time indicators of whether the system is being affected by scintillation

---

## :material-file-document-alert: Reporting Guidance

When GNSS jamming or spoofing is encountered, it should be formally reported. Accurate reporting helps build awareness and supports industry-wide mitigation efforts.

### Who to Report To

| Authority | When |
|---|---|
| **Vessel flag state** | All incidents -- required under maritime safety regulations |
| **IMCA** | Report via the IMCA Safety Flash or incident reporting mechanism to alert the offshore survey community |
| **Client / project management** | Immediately upon detection -- include impact on operations and mitigation measures taken |
| **US Coast Guard NAVCEN** | If operating in or near US waters; accepts voluntary reports from all vessels |
| **Local maritime authority** | Port state or coastal state authority for the area of operations |

### What to Include

- Date, time (UTC), and vessel position at onset
- Duration of the event
- Type of interference (jamming, spoofing, or suspected)
- Affected systems and constellations
- Impact on operations (position loss, degraded accuracy, etc.)
- Mitigation measures deployed and their effectiveness
- Any corroborating evidence (screenshots, logged data, AGC plots)

---

## :material-calendar-check: When to Use

- **Pre-mobilisation risk assessment** -- evaluate GNSS interference risk for the project area
- **Equipment planning** -- determine whether anti-jam antennas or GRIT-enabled receivers are needed
- **During operations** -- reference for identifying and responding to jamming or spoofing events
- **Post-incident** -- guide for reporting interference events to the appropriate authorities
- **Solar maximum periods** -- heightened awareness and planning for ionospheric scintillation effects

---

## :material-check-decagram: Acceptance Criteria

| Parameter | Threshold |
|---|---|
| Position continuity | No unexplained jumps > 5 m in horizontal position |
| Satellite count recovery | >= 8 satellites tracked within 5 minutes of interference cessation |
| PPP reconvergence | < 30 minutes to return to specified accuracy after disruption |
| AGC deviation from baseline | Flag for investigation if AGC deviates > 3 dB from steady-state |
| System comparison agreement during event | All independent GNSS systems within 2 m of each other, or event flagged |
| Position solution availability | > 99.5% over 24-hour period (excluding planned outages) |

---

## :material-wrench: Troubleshooting

| Symptom | Likely Cause | Action |
|---|---|---|
| Total loss of GNSS signal | Jamming | Check AGC levels; switch to anti-jam antenna if available; revert to INS-aided navigation |
| Position slowly drifting to wrong location | Spoofing | Compare independent GNSS systems; check GRIT status flags; cross-check against radar/visual references |
| Elevated AGC but position appears normal | Low-level interference or nearby radio source | Monitor closely; log the event; check for new radio equipment operating near GNSS frequencies |
| L-band corrections lost | Scintillation or jamming affecting L-band | Switch to backup L-band beam; use internet-based corrections (NTRIP) if available |
| Intermittent satellite dropouts after sunset | Ionospheric scintillation (Solar Cycle 25) | Enable multi-constellation tracking; increase L-band beam diversity; monitor scintillation forecasts |
| One GNSS system affected, others normal | Receiver-specific fault or localised multipath | Check antenna and cable; swap receivers if possible; investigate antenna environment |

---

## :material-link-variant: Related Articles

- [GNSS Fundamentals](gnss-fundamentals.md) -- constellations, error sources, augmentation systems
- [GNSS Accurate Height Check](gnss-accurate-height-check.md) -- vertical accuracy verification

---

## :material-book-open-variant: Further Reading

- IMCA S015 Rev. 1.1 / IOGP 373-19 (June 2024) -- Guidelines for GNSS Positioning in the Oil and Gas Industry
- IMCA S 024 -- Guidance on Satellite-Based Positioning Systems for Offshore Applications
- [GNSS Fundamentals](gnss-fundamentals.md) -- constellations, errors, augmentation systems
