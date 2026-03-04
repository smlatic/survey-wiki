---
title: AHRS Heading, Pitch and Roll Calibration
category: calibration
tags: [ahrs, heading, pitch, roll, gyro, motion sensor, gnss compass, calibration, mru, seapath, phins, heave, attitude]
equipment: [Multi-antenna GNSS System, Gyrocompass, Motion Reference Unit, Navigation Software]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: converted_procedure
---

# :material-compass: AHRS Heading, Pitch and Roll Calibration

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Calibration</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Calibration Procedure</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Verify that all vessel heading and attitude systems are correctly aligned, that offsets from the dimensional control survey are properly implemented, and that sensor outputs agree within specification. This is achieved by time-matching GNSS-derived attitude data (heading, pitch, roll) against the vessel's gyrocompasses and motion sensors, then computing C-O (Calculated minus Observed) values and standard deviations through least squares analysis. The procedure detects systematic biases, drift, and configuration errors before survey operations begin.

---

## :material-calendar-check: When to Use

Perform this calibration:

- **Every mobilisation**, before survey operations commence
- After any change to GNSS antenna positions (re-installation, bracket modification, antenna swap)
- After any change to MRU mounting or relocation
- After gyrocompass replacement, re-installation, or firmware update
- When C-O values change significantly from the previous calibration (investigate root cause before applying new values)
- After a vessel dry-dock or significant structural work that may affect sensor mounting points
- When the client specification or project SOW requires it

---

## :material-information-outline: Overview

AHRS calibration establishes the relationship between an independent GNSS-derived attitude reference and the vessel's installed heading and motion sensors. A multi-antenna GNSS system provides heading, pitch, and roll by computing baseline vectors between antennas with known positions in the vessel grid. By comparing this reference against the vessel's gyrocompasses and MRUs over both static and dynamic logging periods, systematic offsets (C-O values) are determined and verified. The resulting corrections are applied in the navigation software to bring all systems into agreement. Without this calibration, errors in heading propagate directly into multibeam sounding positions, USBL acoustic positions, and pipeline survey coordinates.

---

## :material-book-open-variant: Theory and Principles

### Multi-Antenna GNSS Attitude Determination

A multi-antenna GNSS system determines attitude by resolving the 3D baseline vectors between antennas whose positions are known in the vessel's local coordinate frame. The receiver tracks carrier phase observations on each antenna and computes the vector differences. The critical step is integer ambiguity resolution: each carrier phase measurement contains an unknown integer number of wavelengths (approximately 19 cm for L1). The receiver must resolve these integers correctly to achieve centimetre-level baseline accuracy. Once the ambiguities are fixed, the baseline vectors are compared against the known antenna geometry to derive heading, pitch, and roll.

The receiver runs two processes in parallel:

- **Fast process**: Computes position and baseline solutions at high rate (up to 1 kHz on some receivers)
- **Slow process**: Performs integer ambiguity resolution, typically updating every 1-10 seconds

### Heading Accuracy and Baseline Length

Heading accuracy from a GNSS compass is fundamentally limited by the ratio of carrier phase measurement noise to baseline length. The theoretical relationship is:

$$\text{Heading accuracy (deg)} = \arctan\left(\frac{\sigma}{L}\right) \approx \frac{\sigma}{L} \text{ (in radians)} \approx \frac{0.229}{L} \text{ (in degrees)}$$

Where:

- **sigma** is the carrier phase positioning noise (approximately 4 mm for a quality dual-frequency receiver in good conditions)
- **L** is the baseline length in metres between the primary heading antennas

| Baseline Length | Theoretical Heading Accuracy |
|:-:|:-:|
| 1 m | 0.23 deg |
| 2 m | 0.11 deg |
| 4 m | 0.06 deg |
| 10 m | 0.02 deg |
| 20 m | 0.01 deg |

!!! warning "Theoretical vs Achievable"
    The formula above represents theoretical resolution under ideal conditions. Achievable accuracy in the field depends on satellite geometry (PDOP), multipath environment, signal-to-noise ratio, and ambiguity resolution quality. In port with cranes and buildings nearby, expect degraded performance. A 4 m baseline that should give 0.06 deg may only achieve 0.1-0.2 deg in a cluttered multipath environment.

### Roll and Pitch from GNSS

Roll and pitch accuracy follows the same principle but uses the vertical component of the baseline vectors. The formula is:

$$\text{Pitch/Roll accuracy (deg)} \approx \frac{0.372}{L}$$

This is inherently worse than heading because GNSS vertical positioning is less precise than horizontal (VDOP is typically 1.5-2x HDOP). To get good pitch and roll from GNSS, you need either a long baseline in the relevant axis or, more commonly, an antenna mounted at a significantly different height (e.g. on the superstructure versus the helideck).

### Common AHRS Systems in Offshore Survey

Different systems have different alignment requirements and integration approaches:

| System | Type | Typical Application | Key Alignment Requirement |
|--------|------|---------------------|---------------------------|
| Kongsberg Seapath 300/330/380 | GNSS/INS | Vessel primary attitude | GNSS antenna lever arms, MRU alignment, vessel frame definition |
| Kongsberg MRU 5/H | MRU only | Vessel motion reference | Mounting alignment to vessel axes, lever arms to transducers |
| iXblue PHINS | FOG INS | Vessel/ROV primary | DVL aiding, GNSS input, alignment procedure in software |
| iXblue Octans | FOG gyrocompass | Heading reference | Latitude input, settle time, mounting alignment |
| Teledyne TSS 440/DMS-05 | MRU | Motion reference | Mounting alignment, lever arm entry |
| SMC IMU-007/108 | MRU | Motion reference | Axes alignment, zero-point calibration |
| Applanix POS MV | GNSS/INS | Vessel primary attitude | GAMS calibration, IMU-antenna lever arms |

!!! info "System-Specific Procedures"
    Each manufacturer has its own alignment and calibration workflow. This article covers the general GNSS-versus-vessel-sensor comparison that applies regardless of the system. Always consult the manufacturer's manual for system-specific steps (e.g. Seapath's GNSS/INS alignment wizard, PHINS alignment mode, POS MV GAMS calibration).

### MRU: Pitch and Roll Offsets

The MRU (Motion Reference Unit) provides pitch, roll, and heave independently of the heading system. MRU pitch and roll offsets are determined during the dimensional control survey (the physical alignment of the MRU axes relative to the vessel's reference frame) and verified during MBES patch test calibration. The MRU is a separate subsystem from the heading reference. Do not conflate the two.

Key points:

- MRU pitch and roll C-O values should remain stable between mobilisations if the unit has not been moved
- If the MRU C-O values change significantly, suspect a physical disturbance to the mounting or a DC survey error
- The MRU does not provide heading. Some integrated systems (Seapath, PHINS) combine an MRU with a heading source internally, but the MRU component itself only measures angular rates and accelerations

### Magnetic Heading

Magnetic heading is not used as a primary heading reference on offshore vessels. Steel hull construction creates unpredictable magnetic deviation that cannot be reliably compensated in dynamic offshore conditions. However, some ROV gyrocompasses (particularly lower-cost units) use magnetic north-seeking as a heading source. Be aware that these require magnetic deviation modelling and are only suitable where specification tolerances allow it (typically > 1 deg heading uncertainty).

### Sensor Latency

Every sensor has a time delay between measuring a value and outputting it. This latency matters during dynamic operations. If the heading system has 50 ms of latency and the vessel is turning at 1 deg/sec, the heading error from latency alone is 0.05 deg. Navigation software compensates for latency by time-stamping data and applying offsets, but the latency value must be correctly entered.

Typical latencies:

| Sensor Type | Typical Latency |
|:-:|:-:|
| GNSS compass (heading) | 20-100 ms |
| FOG gyrocompass | 10-50 ms |
| MRU (pitch/roll) | 10-30 ms |
| Spinning mass gyrocompass | 100-500 ms |

!!! tip "Detecting Latency Errors"
    If C-O values are stable during static logging but show a heading-dependent sinusoidal pattern during dynamic logging (especially during turns), suspect a latency mismatch between the reference and the vessel sensor.

### Heave Considerations

Heave is the vertical displacement measured at the transducer location, not at the MRU. If the MRU is not co-located with the transducer, the pitch and roll of the vessel combined with the lever arm between MRU and transducer induce additional vertical motion that must be accounted for. This is called lever-arm-induced heave.

Key points:

- The navigation software computes heave at the transducer using: MRU heave + lever arm contribution from pitch and roll
- Incorrect lever arms (from DC survey errors) cause systematic heave errors that are very difficult to detect in the field
- The MRU heave high-pass filter period must exceed the dominant swell period. If the filter period is 10 seconds but the swell period is 12 seconds, the filter will attenuate real heave signal. Typical default is 10 seconds; increase to 15-20 seconds in long-period swell
- For survey-grade heave (e.g. MBES), the MRU should be mounted as close to the centre of rotation as possible, and ideally close to the transducer, to minimise lever-arm-induced errors

---

## :material-clipboard-check-outline: Prerequisites

Before starting the AHRS calibration, confirm the following:

- [x] GNSS antennas surveyed into the vessel grid (dimensional control survey completed, offsets verified)
- [x] All antenna coordinates entered into the GNSS receiver or navigation software
- [x] Clear sky view at the antenna locations (no cranes overhead, no container stacks, no mast obstructions). Request crane stowage if needed
- [x] All heading and attitude systems powered on and fully aligned

!!! info "Minimum Alignment Times by Sensor Type"
    Allow adequate settling time before beginning any logging:

    | Sensor Type | Minimum Settling Time |
    |:-:|:-:|
    | Spinning mass gyrocompass | 4-6 hours from cold start |
    | Fibre optic gyrocompass (FOG) | 20-30 minutes |
    | Ring laser gyrocompass (RLG) | Near-instant (< 5 minutes) |
    | GNSS compass (ambiguity resolution) | 5-15 minutes (longer in poor sky view) |
    | Integrated GNSS/INS (Seapath, POS MV) | 15-30 minutes for full alignment |

- [x] Navigation software configured to log all heading and attitude sources simultaneously with time-stamps
- [x] Previous calibration results available for comparison (if not first mobilisation)
- [x] Vessel mooring lines tightened (request from marine crew to reduce vessel movement alongside)
- [x] No concurrent crane operations during static alongside logging

---

## :material-list-status: Procedure

### Step 1: Antenna Installation

Mount the GNSS antennas in an area with maximum sky visibility:

- **Three antennas on one level** (helideck area is typical, providing both long baselines and open sky)
- **One antenna at a different height** (superstructure top, mast platform) to provide vertical geometry for pitch and roll determination

!!! tip "Antenna Placement Priorities"
    1. Maximise the heading baseline length (the distance between the two antennas most separated along the vessel's fore-aft axis). Longer baseline = better heading accuracy.
    2. Place at least one antenna well above or below the primary plane to give good pitch/roll geometry.
    3. Avoid locations near radar scanners, satellite communication domes, or exhaust stacks (multipath and thermal interference).
    4. Pre-connect cables in a dry location. Moisture in antenna connectors degrades signal quality and can prevent ambiguity resolution.

### Step 2: GNSS Receiver Configuration

1. Enter the surveyed antenna coordinates (from DC survey) into the GNSS receiver or the navigation system that drives the multi-antenna solution
2. Verify the antenna separation distances reported by the receiver match the DC survey values within **0.025 m**. If they do not match, the entered coordinates are wrong or an antenna is connected to the wrong port
3. Configure the receiver to output heading, pitch, and roll at the required rate (1 Hz minimum, 10 Hz preferred for dynamic logging)
4. Monitor the receiver status: confirm integer ambiguities are resolved (fixed solution) before logging
5. If using a Seapath, POS MV, or similar integrated system, run the manufacturer's alignment/calibration wizard to establish the GNSS/INS coupling before proceeding to the comparison logging

### Step 3: Static Logging (Alongside)

!!! danger "Critical"
    Remove all existing C-O corrections from the vessel's heading and attitude systems before logging. You are measuring the raw offsets. If old corrections are left in place, the results will include the previous correction, making it impossible to determine the true offset.

1. Confirm the vessel is alongside, mooring lines tight, no crane operations
2. Begin simultaneous logging of:
    - GNSS-derived heading, pitch, and roll (the reference)
    - All vessel gyrocompasses (heading)
    - All vessel MRUs (pitch, roll, heave)
3. Log for a **minimum of 1 hour**. Longer logging (2-4 hours) improves confidence in drift detection
4. During logging, monitor the GNSS receiver status for any loss of ambiguity resolution. Periods with float solutions must be flagged and excluded from processing

### Step 4: Dynamic Logging (In Transit)

Dynamic logging is performed during vessel transit. This is essential because some errors (particularly latency mismatches and heading-dependent biases) are only visible when the vessel is moving and changing heading.

1. Steam a box pattern on the four cardinal headings (North, East, South, West)
2. Hold each heading for a **minimum of 15 minutes** at steady speed (8-12 knots typical)
3. Include the turns between headings in the log (turns reveal latency issues)
4. Log all the same sensors as during static logging

!!! note "If Dynamic Logging Is Not Possible"
    Some mobilisations do not include a transit before operations (vessel already on location). In this case, static logging alone must suffice. Note this limitation in the calibration report. If C-O values from static logging match previous dynamic calibration values, this provides reasonable confidence.

### Step 5: ROV Gyro Procedure (If Applicable)

1. Place the ROV on the quayside, stabilised and level
2. Survey the ROV main skid reference points to determine centreline and reference plane orientation relative to the vessel grid (or use a known azimuth from the DC survey)
3. Log GNSS reference and ROV gyrocompass data for **1 hour**
4. Calculate C-O values for heading, pitch, and roll
5. Rotate the ROV **180 degrees** on the quayside
6. Log for another **1 hour** as a verification set
7. The C-O values from both orientations must agree within the acceptance criteria. If they do not, there is a systematic error in the ROV heading system or the reference setup

### Step 6: Data Processing

Process the logged data using the attitude sensor verification software (e.g. ASVS, QPS Qinsy sensor comparison, or equivalent):

1. **Time-match** the GNSS reference data with each vessel sensor
2. Compute **C-O values** (GNSS reference minus vessel sensor) for heading, pitch, and roll
3. Compute **standard deviations** via least squares adjustment
4. Generate **time-series plots** showing the C-O for each sensor over the full logging period
5. Review the plots for:
    - Drift (gradual change in C-O over time)
    - Jumps (sudden step changes, indicating ambiguity resolution failures or sensor resets)
    - Heading-dependent patterns (sinusoidal C-O on dynamic data, indicating latency or alignment errors)

### Step 7: Quality Checks During Processing

Apply the following data snooping thresholds before accepting results:

| Check | Threshold |
|:--|:-:|
| Antenna separation consistency (computed vs DC survey) | Within 0.025 m |
| Maximum HDOP during logging | 3.0 |
| Maximum VDOP during logging | 3.0 |
| Heading C-O stability (SD) | < 0.10 deg |
| Pitch C-O stability (SD) | < 0.05 deg |
| Roll C-O stability (SD) | < 0.05 deg |
| Minimum epochs for valid solution | 80% of logging period |

!!! warning "Data Rejection"
    Reject any logging epoch where the GNSS solution drops to float (non-fixed ambiguities), where HDOP or VDOP exceeds the threshold, or where the antenna separation deviates from the surveyed value. Do not include rejected data in the C-O computation.

---

## :material-check-decagram: Acceptance Criteria

| Parameter | Acceptance Criterion |
|:--|:-:|
| Heading: GNSS reference vs vessel gyrocompass | Within **0.5 deg** |
| Heading: GNSS reference vs GNSS/INS system | Within **0.3 deg** |
| Pitch: GNSS reference vs vessel MRU | Within **0.1 deg** |
| Roll: GNSS reference vs vessel MRU | Within **0.1 deg** |
| C-O consistency: static vs dynamic logging | Within **0.15 deg** for heading, **0.05 deg** for pitch/roll |
| Time-series drift | No visible trend exceeding **0.1 deg** over 1 hour |
| ROV heading: 0 deg vs 180 deg orientations | C-O agreement within **0.3 deg** |

!!! danger "When Results Exceed Tolerance"
    If the GNSS compass and vessel gyro disagree by more than **1.0 deg**, do not average the values and apply a correction. Investigate the root cause. Possibilities include: wrong antenna coordinates, wrong gyro latitude setting, convergence error (True vs Grid), gyro malfunction, or DC survey error. Resolve the discrepancy before proceeding to survey operations.

!!! success "Documenting Results"
    The calibration report must include:

    - Table of all equipment (serial numbers, firmware versions)
    - Antenna positions from DC survey
    - Static and dynamic logging periods (start/end times, duration)
    - Tabular C-O results with standard deviations for all sensor combinations
    - Time-series plots for each sensor comparison
    - GNSS receiver status (ambiguity resolution, HDOP/VDOP) over the logging period
    - Comparison with previous calibration results (if available)
    - Statement of acceptance or rejection with justification

---

## :material-wrench: Troubleshooting

### GNSS Heading Jumps by Exact Integer Degrees

**Symptom**: Heading from the GNSS compass suddenly shifts by exactly 1, 2, or more whole degrees, then jumps back.

**Cause**: Integer ambiguity resolution failure. The receiver has resolved the wrong integer on one or more satellites. This produces a baseline vector error that translates to a discrete heading offset.

**Action**:

1. Check the GNSS receiver status log for loss of fixed solution at the time of the jump
2. Identify the cause: usually multipath from nearby structures (cranes, buildings, containers) or satellite geometry change (satellite rise/set)
3. If in port, wait for a better satellite window or request crane stowage
4. If persistent, check antenna cables and connectors for damage or moisture
5. Exclude affected epochs from C-O computation

### Heading Disagreement Between Gyro and GNSS Compass

**Symptom**: Consistent offset between gyrocompass heading and GNSS heading that does not match previous calibration.

**Action**:

1. Confirm convergence is correctly applied (True North vs Grid North). This is the most common cause
2. Verify the correct latitude is entered into the gyrocompass (spinning mass and FOG types are latitude-dependent)
3. Verify the gyrocompass speed input is set to zero (if alongside) or matches the vessel speed (if in transit)
4. Check that the GNSS antenna coordinates match the DC survey values
5. Confirm no residual C-O correction is still applied from a previous calibration
6. If the gyro has been recently installed or moved, allow additional settling time and re-log

### Large Pitch or Roll C-O Values

**Symptom**: Pitch or roll C-O exceeds 0.5 deg.

**Cause**: Almost always a DC survey error in the MRU mounting alignment, or the MRU has been physically disturbed since the DC survey.

**Action**:

1. Re-check the DC survey report for the MRU mounting angles
2. Physically inspect the MRU mounting. Confirm it has not shifted, and the mounting surface is rigid (not a floating floor)
3. Verify the correct MRU axes orientation is entered in the navigation software (X-forward, Y-starboard, Z-down is the most common convention, but varies by manufacturer)
4. If the MRU is on a known rigid mount and the DC values are confirmed correct, suspect a software configuration error (axes swapped or sign convention wrong)

### Multipath in Port

**Symptom**: GNSS heading noise and standard deviations are significantly worse alongside than expected. Frequent loss of fixed ambiguity resolution.

**Action**:

1. Request crane stowage and removal of any overhead obstructions
2. Check the elevation mask in the GNSS receiver (10-15 deg is typical; increasing to 20 deg may help reject low-angle multipath)
3. Review the skyplot for satellites at low elevation near the direction of quay walls or buildings
4. If possible, move the vessel to a different berth or orient the vessel to place obstructions behind the antenna ground plane
5. Accept that in-port results will have higher noise and plan to verify with dynamic logging in open water

### Sensor Drift Over Time

**Symptom**: C-O value changes gradually during the logging period, visible as a trend in the time-series plot.

**Cause**: The heading sensor has not fully settled (spinning mass gyros are the most common offender), or there is a temperature-dependent bias in the gyro electronics.

**Action**:

1. For spinning mass gyrocompasses, confirm they have been running for at least 4-6 hours from cold start
2. For FOG/RLG, confirm the operating temperature has stabilised (check the gyro's internal temperature log if available)
3. If drift is present, extend the logging period and compute the C-O from the stable portion of the data only
4. If drift persists after adequate settling, suspect a hardware problem. Bench test the gyro against a known reference

---

## :material-link-variant: Related Articles

- [Gyro Types and Calibration](gyro-types-and-calibration.md)
- [Static AHRS Intersystem Check](static-ahrs-intersystem-check.md)
- [MBES Calibration (Patch Test)](../sensors/mbes-calibration.md)
- [Dimensional Control Survey](dimensional-control-survey.md)
- [Heave, MRU Theory and Verification](heave-mru-theory.md)

---

## :material-table: Quick Reference

| Parameter | Threshold |
|:--|:-:|
| Heading: GNSS ref vs gyro | **< 0.5 deg** |
| Heading: GNSS ref vs GNSS/INS | **< 0.3 deg** |
| Pitch: GNSS ref vs MRU | **< 0.1 deg** |
| Roll: GNSS ref vs MRU | **< 0.1 deg** |
| Heading C-O SD | **< 0.10 deg** |
| Pitch/Roll C-O SD | **< 0.05 deg** |
| Antenna separation consistency | **< 0.025 m** |
| Max HDOP | **3.0** |
| Max VDOP | **3.0** |
| Static vs dynamic C-O agreement (heading) | **< 0.15 deg** |
| Static vs dynamic C-O agreement (pitch/roll) | **< 0.05 deg** |
| Min static logging duration | **1 hour** |
| Min dynamic logging per heading | **15 min** |
| GNSS heading accuracy (per metre baseline) | **~0.229 deg / L** |

---

!!! quote "References"
    - IHO S-44, Edition 6.1.0 - Standards for Hydrographic Surveys
    - IMCA S 017 - Guidelines for the use of USBL systems
    - IMCA S 015 - Guidelines for the use of Multibeam Echosounders
    - Equipment manufacturer calibration and installation guidelines (Kongsberg, iXblue, Applanix, Teledyne)
