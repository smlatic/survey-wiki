---
title: Heave, MRU Theory and Verification
category: equipment
tags: [heave, mru, motion, pitch, roll, attitude, motion-sensor, settlement, squat, lever-arm, filter]
equipment: [Kongsberg Seatex MRU5+, iXblue Octans, iXblue PHINS, Teledyne TSS DMS-05, SMC IMU-007, Applanix POS MV]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: original
---

# :material-sine-wave: Heave, MRU Theory and Verification

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Equipment</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Reference Guide</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Comprehensive reference covering heave measurement principles, Motion Reference Unit (MRU) theory, heave filter behaviour, lever-arm-induced heave, settlement and squat effects, MRU installation requirements, and verification methods. Understanding heave is essential for bathymetric survey accuracy, as heave errors propagate directly into sounding depths.

---

## :material-calendar-check: When to Use

Refer to this article:

- When installing or relocating an MRU on a vessel or ROV
- When configuring heave filter settings for a new project area
- When investigating systematic depth errors in MBES data
- When verifying heave performance against GNSS-derived heave or tide gauge
- When assessing settlement and squat effects for a survey vessel
- During mobilisation to verify MRU configuration and lever arm entries

---

## :material-information-outline: Overview

Heave is the vertical displacement of the transducer from its mean water level position. It is not simply "up and down motion" of the vessel. Accurate heave measurement and application is critical for bathymetric survey because any uncompensated heave appears directly as depth error in the soundings. An MRU measures accelerations and angular rates, from which heave, pitch, and roll are derived. The accuracy of heave at the transducer depends on the MRU measurement quality, the correctness of lever arm values, the heave filter configuration relative to sea conditions, and proper accounting for vessel settlement and squat at survey speed.

---

## :material-book-open-variant: Theory and Principles

### What Heave Is

Heave is the instantaneous vertical displacement of a point on the vessel (specifically the transducer) from its mean vertical position. It is the difference between where the transducer is right now and where it would be if the sea surface were perfectly flat.

Key distinctions:

- Heave is measured at, or computed for, a specific point on the vessel. Heave at the bow is different from heave at the stern.
- Heave at the MRU location is not the same as heave at the transducer unless they are co-located.
- Heave is a relative measurement (displacement from mean), not an absolute measurement (distance from seabed or chart datum). Tidal reduction handles the absolute vertical reference.

### Heave Measurement Methods

#### Double Integration of Accelerations (Traditional MRU)

The MRU contains accelerometers that measure vertical acceleration. Heave is obtained by integrating acceleration twice:

**Acceleration → Velocity → Displacement**

1. Subtract gravity from the measured vertical acceleration to get the dynamic component
2. Integrate once to get vertical velocity
3. Integrate again to get vertical displacement (heave)

The problem with double integration is drift. Any small bias in the accelerometer accumulates through integration and produces a steadily growing position error. This drift is removed by applying a high-pass filter that blocks frequencies below a cutoff, effectively removing the slow drift while passing the wave-frequency heave signal.

#### GNSS-Derived Heave

High-rate GNSS vertical position (typically 10-20 Hz RTK or PPP) can be used as a heave source. The GNSS height is filtered to separate the wave-frequency component from the tidal and mean sea level component.

Advantages: No integration drift, works for any wave period, not affected by lever arms.
Limitations: Noisier than MRU for short-period waves, requires continuous GNSS lock, vertical accuracy is 2-3x worse than horizontal.

#### Hybrid Heave (INS/GNSS Blended)

Modern systems (Applanix TrueHeave, Kongsberg Seapath) combine MRU accelerations with GNSS height observations in a Kalman filter. The MRU provides good short-period heave response while GNSS constrains the long-period component that the MRU high-pass filter would otherwise remove.

This is the best approach when available, as it preserves accuracy across all wave periods.

### The Heave Filter Period

!!! danger "This Is the Most Common Heave Configuration Error"
    The heave high-pass filter period is the single most important MRU setting for bathymetric survey. Getting it wrong causes systematic depth errors that are very difficult to detect.

The high-pass filter removes low-frequency drift from the double integration process. It is defined by a cutoff period (in seconds). Any real heave signal with a period longer than the filter cutoff will be attenuated or removed entirely.

**The rule: the filter period must exceed the dominant swell period by at least 20%.**

| Dominant Swell Period | Minimum Filter Period Setting |
|:-:|:-:|
| 6 seconds | 8 seconds |
| 8 seconds | 10 seconds |
| 10 seconds | 12 seconds |
| 12 seconds | 15 seconds |
| 15 seconds | 18 seconds |
| 18+ seconds | 22+ seconds (or use GNSS-aided heave) |

If the filter period is set to 10 seconds but the actual swell period is 12 seconds, the MRU will attenuate the real heave signal. The result is soundings that are systematically too deep in the trough and too shallow on the crest, with the error magnitude proportional to how much signal is being filtered out.

!!! tip "How to Check"
    Compare the heave filter period against the observed swell period. On most vessels, the bridge weather station or the MRU's own spectral output will report the dominant wave period. If you are in a long-period swell environment (Southern Ocean, West Africa, exposed Atlantic), increase the filter period before starting survey.

### Lever-Arm-Induced Heave

If the MRU is not at the transducer location, the vessel's pitch and roll create additional vertical motion at the transducer that is not measured by the MRU. This is called lever-arm-induced heave.

The formula:

**Induced heave = Lx * sin(pitch) + Ly * sin(roll)**

Where:

- **Lx** is the longitudinal lever arm (fore-aft distance from MRU to transducer)
- **Ly** is the transverse lever arm (port-starboard distance from MRU to transducer)

| Lever Arm | Pitch/Roll Angle | Induced Heave |
|:-:|:-:|:-:|
| 5 m | 1 deg | 0.09 m |
| 5 m | 3 deg | 0.26 m |
| 10 m | 1 deg | 0.17 m |
| 10 m | 3 deg | 0.52 m |
| 20 m | 1 deg | 0.35 m |
| 20 m | 3 deg | 1.05 m |

!!! warning "Lever Arm Errors"
    If the lever arm values entered in the navigation software are wrong (from a DC survey error or a data entry mistake), the computed lever-arm-induced heave will be wrong by a proportional amount. A 1 m error in a 10 m lever arm combined with 3 deg of pitch produces approximately 0.05 m of systematic heave error. This is difficult to detect because it correlates with vessel motion and looks like real heave variation.

The navigation software computes total heave at the transducer as:

**Heave_transducer = Heave_MRU + Lx * sin(pitch) + Ly * sin(roll)**

### Pitch and Roll Effect on Outer Beam Bathymetry

Even small attitude errors cause significant depth errors at the outer beams of a multibeam swath. The depth error from an attitude error is:

**Depth error = slant_range * sin(attitude_error)**

| Beam Angle | Water Depth | Slant Range | Depth Error at 0.1 deg Attitude Error |
|:-:|:-:|:-:|:-:|
| 30 deg | 50 m | 58 m | 0.10 m |
| 45 deg | 50 m | 71 m | 0.12 m |
| 60 deg | 50 m | 100 m | 0.17 m |
| 65 deg | 50 m | 118 m | 0.21 m |

At the swath edges (60-65 deg beam angle), a 0.1 deg attitude error produces 0.17-0.21 m of depth error in 50 m of water. This is why MRU accuracy matters more for wide-swath operations and why outer beam data quality degrades faster than nadir data.

### Settlement and Squat

When a vessel moves through the water, it sinks (settlement) and changes trim (squat). These effects change the effective draft of the transducer and must be accounted for in depth computations.

- **Settlement**: The vessel sinks bodily due to increased water flow velocity under the hull (Bernoulli effect). Proportional to speed squared.
- **Squat**: The vessel trims bow-down or stern-down depending on hull form and loading. Also speed-dependent.

Typical values for survey vessels at survey speed (4-6 knots): 0.05 to 0.30 m combined settlement and squat. Large vessels or higher speeds can exceed 0.50 m.

Settlement and squat must be measured or modelled for each vessel at the survey speed. Methods:

1. **Speed runs over known depth**: Survey a flat area at multiple speeds and compare depths. The difference from the static depth is the settlement/squat.
2. **GNSS height comparison**: Compare GNSS antenna height at different speeds against the static height. The difference (corrected for heave and attitude) gives settlement/squat.
3. **Manufacturer model**: Some vessel operators provide settlement/squat tables based on hull design and displacement.

### Common MRU Systems

| System | Type | Typical Accuracy (Pitch/Roll) | Heave Accuracy | Notes |
|--------|------|:----:|:----:|-------|
| Kongsberg Seatex MRU5+ | MRU | 0.01 deg | 5 cm or 5% (whichever greater) | Industry standard for vessel MBES |
| iXblue Octans | FOG gyro + MRU | 0.01 deg | 5 cm or 5% | Also provides heading |
| iXblue PHINS | FOG INS | 0.01 deg | 5 cm or 5% | Full INS with DVL/GNSS aiding |
| Teledyne TSS DMS-05 | MRU | 0.02 deg | 5 cm or 5% | Compact, ROV-suitable |
| SMC IMU-007/108 | MEMS MRU | 0.05 deg | 10 cm or 10% | Lower cost, lower accuracy |
| Applanix POS MV | GNSS/INS | 0.01 deg | 5 cm or 5% | TrueHeave post-processing |

### MRU Installation Requirements

- **Centre of rotation**: Mount the MRU as close as possible to the vessel's centre of gravity / centre of rotation. This minimises the lever-arm-induced heave computation and its associated errors.
- **Rigid mounting**: The MRU must be bolted to a rigid structural member. Never mount on floating floors, removable deck plates, or structures that flex with vessel motion.
- **Axes alignment**: Align the MRU axes to the vessel reference frame (typically X-forward, Y-starboard, Z-down). Small misalignments are corrected by the DC survey and AHRS calibration, but gross misalignment (e.g., axes swapped) causes incorrect pitch/roll application.
- **Vibration isolation**: Mount away from engines, generators, and thrusters. High-frequency vibration aliases into the acceleration measurements and degrades heave quality.
- **Cable routing**: Secure cables to prevent mechanical strain and water ingress. Label connectors clearly for demobilisation.

### Latency Effects

MRU attitude data has a time delay between measurement and output. If this latency is not correctly entered in the navigation software, dynamic attitude corrections are applied with a timing offset, causing motion-correlated depth errors.

Typical MRU latency: 10-30 ms. At 1 deg/sec vessel roll rate (moderate sea state), a 20 ms latency error produces approximately 0.02 deg of roll error, which at 60 deg beam angle in 50 m depth gives approximately 0.03 m depth error.

---

## :material-clipboard-check-outline: Prerequisites

- [x] MRU installed on rigid mounting, aligned to vessel axes
- [x] Dimensional control survey completed with lever arms to all transducers measured
- [x] Lever arm values entered in navigation software and verified
- [x] Heave filter period set appropriately for expected sea conditions
- [x] MRU powered on and output verified in navigation software
- [x] GNSS system operational (for GNSS-aided heave or GNSS heave comparison)

---

## :material-list-status: Procedure

### Heave Verification by GNSS Comparison

1. Configure the GNSS system to output high-rate vertical position (10 Hz minimum, RTK or PPP)
2. Filter the GNSS height to extract the wave-frequency component (most navigation software does this automatically when configured for "GNSS heave")
3. Log simultaneously: MRU heave and GNSS-derived heave at the same point (apply lever arm corrections to bring both to the same location)
4. Log for minimum 30 minutes in conditions with measurable swell (> 0.3 m heave amplitude)
5. Compare the two heave signals: overlay time series, compute RMS difference
6. Check for: amplitude agreement, phase agreement (timing), and any systematic offset

### Heave Verification by Tide Gauge (Shallow Water)

1. Deploy a bottom-mounted pressure gauge or use a nearby tide gauge with known datum
2. Survey a flat area in shallow water (< 20 m) with MBES at very slow speed (< 2 knots) over multiple tidal cycles
3. Compare the observed depth variations (after heave correction) against the independent tide record
4. If heave is working correctly, the depth residuals after tidal correction should show no correlation with wave motion

### Settlement and Squat Measurement

1. Select a flat, featureless survey area in moderate water depth (20-50 m)
2. Survey the area at the lowest practical speed (1-2 knots) to establish a reference depth surface
3. Survey the same area at the planned survey speed
4. Survey again at 2 knots above and below the planned survey speed
5. Compare mean depths at each speed. The difference from the low-speed reference is the settlement/squat value at that speed
6. Plot speed vs settlement/squat. The relationship should be approximately quadratic.
7. Enter the speed-dependent correction in the navigation software or apply in post-processing

### Heave Filter Period Verification

1. Record the dominant swell period from the vessel weather station or by observing the MRU heave spectral output
2. Confirm the MRU heave filter period exceeds the swell period by at least 20%
3. If GNSS heave is available, compare MRU heave against GNSS heave at different filter settings:
    - At the correct setting, MRU and GNSS heave amplitudes should match
    - If the MRU heave amplitude is less than GNSS heave, the filter is attenuating real signal (filter period too short)

---

## :material-check-decagram: Acceptance Criteria

| Parameter | Pass | Investigate |
|:--|:-:|:-:|
| MRU heave vs GNSS heave (RMS difference) | < 0.05 m or < 5% of heave amplitude | > 0.10 m or > 10% |
| Heave phase agreement (MRU vs GNSS) | No visible timing offset | Consistent lead/lag in time series |
| Heave filter period vs swell period | Filter period > 1.2 x swell period | Filter period < swell period |
| Pitch/roll accuracy (MRU spec) | Within manufacturer specification | Exceeds spec |
| Settlement/squat repeatability | Consistent to within 0.03 m at same speed | Varies by > 0.05 m |
| Lever arm entry verification | Matches DC survey to 0.01 m | Any discrepancy |

---

## :material-wrench: Troubleshooting

### Heave Spikes in Data

**Symptom**: Sudden, large heave excursions (> 1 m) that do not correlate with observed sea state.

**Cause**: Usually electrical noise, vibration aliasing, or sensor saturation.

**Action**:

1. Check for nearby vibration sources (running engines, thrusters) and relocate MRU if possible
2. Check cable connections for intermittent contact
3. Check if the spikes correlate with specific vessel operations (thruster use, crane operations)
4. If persistent, apply a despiking filter in post-processing, but investigate and resolve the root cause

### Systematic Depth Error Correlated with Swell

**Symptom**: Soundings show a consistent pattern of too-shallow crests and too-deep troughs relative to a flat seabed.

**Cause**: Heave filter period is shorter than the dominant swell period.

**Action**:

1. Check the current filter period setting
2. Compare against the observed swell period
3. Increase the filter period to at least 1.2x the swell period
4. Re-acquire data and confirm the pattern resolves

### Depth Error Increases at Higher Survey Speed

**Symptom**: Mean depth changes with vessel speed over the same area.

**Cause**: Settlement and squat not accounted for, or incorrectly modelled.

**Action**:

1. Perform a settlement/squat speed run (see Procedure section)
2. Apply the measured correction
3. Verify by re-surveying at different speeds and confirming depth agreement

### Outer Beam Depth Scatter Worse Than Expected

**Symptom**: Cross-profile shows increasing depth noise toward the swath edges, beyond what refraction alone would explain.

**Cause**: MRU attitude accuracy is insufficient for the swath width, or MRU latency is incorrect.

**Action**:

1. Check MRU specifications against the required attitude accuracy for the swath width and depth
2. Verify MRU latency is correctly entered in navigation software
3. If latency is suspect, run reciprocal survey lines and compare outer beam depths. A latency error will show speed-dependent and heading-dependent patterns.
4. Reduce swath width if the MRU accuracy cannot support the full swath

### Lever Arm Values Incorrect

**Symptom**: Heave performance degrades in higher sea states but is acceptable in calm conditions.

**Cause**: When the sea is calm, lever-arm-induced heave is small, so errors in lever arm values have little effect. As sea state increases, pitch and roll amplitudes increase, and lever arm errors produce increasingly large heave errors.

**Action**:

1. Re-verify lever arm values against the DC survey
2. Check for data entry errors (swapped X/Y, wrong sign, metres vs millimetres)
3. If the DC survey is suspect, re-measure the MRU-to-transducer lever arms

---

## :material-link-variant: Related Articles

- [AHRS Calibration](../calibration/ahrs-calibration.md)
- [MBES Calibration (Patch Test)](../calibration/mbes-calibration.md)
- [MBES Operations and Settings](mbes-operations-and-settings.md)
- [Dimensional Control Survey](../calibration/dimensional-control-survey.md)
- [Tidal Theory and Reduction Methods](../positioning/tidal-reduction-methods.md)
- [TPU and Error Budgets](../reference/tpu-error-budgets.md)

---

## :material-table: Quick Reference

| Parameter | Value |
|:--|:-:|
| MRU heave filter period | > 1.2 x dominant swell period |
| Typical survey vessel heave filter | 10-20 seconds |
| MRU heave accuracy (survey grade) | 5 cm or 5% of amplitude |
| Induced heave (10 m lever arm, 3 deg pitch) | ~0.52 m |
| Typical settlement/squat at survey speed | 0.05-0.30 m |
| MRU pitch/roll accuracy (survey grade) | 0.01-0.02 deg |
| Depth error from 0.1 deg roll at 60 deg beam, 50 m depth | ~0.17 m |
| Typical MRU latency | 10-30 ms |
| MRU heave vs GNSS heave acceptance | < 0.05 m RMS |
| Min heave verification logging | 30 minutes |

---

!!! quote "References"
    - IHO S-44, Edition 6.1.0, Standards for Hydrographic Surveys
    - IMCA S 015, Guidelines for the use of Multibeam Echosounders
    - Equipment manufacturer specifications (Kongsberg, iXblue, Teledyne, Applanix)
