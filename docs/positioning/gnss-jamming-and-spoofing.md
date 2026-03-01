---
title: GNSS Jamming and Spoofing
category: positioning
tags: [gnss, jamming, spoofing, grit, anti-jam, crpa, scintillation, solar-cycle, interference, resilience, mitigation]
equipment: [GNSS Receiver, Anti-Jam Antenna, CRPA Antenna, L-Band Demodulator]
date_added: 2026-03-01
source_type: converted_procedure
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
- Expected peak: **July 2025** (early indications suggest the actual peak may be higher than predicted)

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

## :material-book-open-variant: Further Reading

- IMCA S015 Rev. 1.1 / IOGP 373-19 (June 2024) -- Guidelines for GNSS Positioning in the Oil and Gas Industry
- IMCA S 024 -- Guidance on Satellite-Based Positioning Systems for Offshore Applications
- [GNSS Fundamentals](gnss-fundamentals.md) -- constellations, errors, augmentation systems
