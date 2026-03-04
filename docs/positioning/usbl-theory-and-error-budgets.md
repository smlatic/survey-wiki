---
title: USBL Theory and Error Budgets
category: calibration
tags: [usbl, acoustics, error budget, calibration, transducer alignment, positioning, GUSBL, transponder, verification]
equipment: [Kongsberg HiPAP, Sonardyne Ranger, Exail GAPS, APOS, CASIUS]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: converted_procedure
---

# :material-access-point-network: USBL Theory and Error Budgets

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Calibration</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Reference Guide</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Comprehensive reference covering USBL operating principles, Gyro-Aided USBL (GUSBL) systems, calibration software scenarios, error budget breakdown, portable installation guidance, MRU interfacing requirements, transponder selection, calibration methods for DP and non-DP vessels, and verification techniques including spin checks, transit lines, and position comparisons.

---

## :material-calendar-check: When to Use

- **USBL calibration**: At mobilisation, after any change to transceiver installation (pole re-deployment, bolt tightening), after sensor swap, or when verification indicates degraded performance
- **Error budget review**: Before every project to confirm the system can meet the required positioning specification at the working depth
- **Verification (spin/transit)**: After calibration, at project start, after any equipment change, and periodically during long-duration projects

---

## :material-sine-wave: How USBL Works

USBL (Ultra-Short Baseline) systems determine the absolute position of a subsea transponder using observations made relative to a vessel-mounted transceiver. The transceiver contains multiple transmit and receive elements (transducers) housed in a single unit. The baseline between pairs of transducer elements measures **phase differences** in the incoming acoustic signal, allowing the relative phase angle of the signal to be computed.

A minimum of three transducer elements arranged with at least two orthogonal baselines enables measurement of acoustic phase angles in two planes. This yields two angles relative to the transceiver reference frame, which is directly related to the vessel axes.

To determine the absolute position of a transponder, the following measurements are required:

- [x] **Two-Way Travel Time (TWTT)** -- converted to slant range using the sound velocity profile
- [x] **Two acoustic angles** -- horizontal and vertical direction of the incoming signal
- [x] **Vessel heading** -- from gyrocompass
- [x] **Vessel pitch and roll** -- from motion reference unit (MRU)
- [x] **Transceiver position** -- derived from GNSS antenna position and measured offsets

The TWTT is converted to slant range using the loaded sound velocity profile. When operating in **responder mode** (transponder wired through the subsea vehicle), travel time is measured in one direction only, eliminating potential timing errors in half the equation. Responder mode is always preferable when practical.

The topside interface outputs a data string to the navigation software each interrogation cycle. If the transponder is detected, data is output as dX, dY, dZ distances (vessel-relative Cartesian coordinates) corrected for pitch and roll in the ship's frame of reference.

??? example "Example Datagram ($PSIMSSB)"
    ```
    $PSIMSSB,102449.231,M23,A,,C,H,M,-100.10,50.50,200.20,1.436,N,,
    ```
    - **C** = Cartesian X/Y (vessel-relative coordinates)
    - **A** = Accepted fix
    - X, Y values in metres; depth in metres

---

## :material-compass: Gyro-Aided USBL (GUSBL)

Gyro-Aided USBL systems incorporate an **Attitude and Heading Reference System (AHRS)** directly into the transceiver head. They operate on the same principles as standard USBL but are effectively pre-calibrated -- the manufacturer measures any misalignment between the AHRS and the transceiver in a controlled environment.

### Transceiver Position Feed

A GUSBL system requires a positional feed for the transceiver head. There are two methods:

| Method | Description | Pros | Cons |
|--------|-------------|------|------|
| **Navigation software feed** | Transceiver X/Y/Z offsets entered in nav software; computed transceiver position ($GPGGA) sent to GUSBL topside. No lever-arm offsets from antenna to transceiver in the GUSBL. | Simpler to implement | Lower update rate for transceiver position computation |
| **Direct GNSS feed** | $GPGGA from GNSS receiver fed directly to GUSBL topside; lever-arms from antenna to transceiver entered in GUSBL in the transceiver's frame of reference | Higher update rate (antenna position is attitude-corrected by the internal AHRS) | Requires calculating offsets in the transceiver's reference frame; generally limited to small vessel applications |

### GUSBL Output Datagrams

| Manufacturer | Datagram | Coordinate System |
|-------------|----------|-------------------|
| Kongsberg / Sonardyne | $PSIMSSB | dX/dY/dZ in vessel-relative Cartesian metres |
| Exail (iXblue) GAPS | $PTSAG | UTM Lat/Long in WGS84 (degrees and minutes to 5 decimal places) |

---

## :material-cog-sync: Calibration Software Scenarios

On construction vessels, most permanent-fit USBL systems will have calibration values derived independently from survey operations. Two common barriers to calibrating directly in the USBL software are:

1. The high-accuracy survey sensors are often not interfaced directly to the USBL system
2. Vessel policy may not allow subcontractors to update calibration values (due to DP certification requirements)

!!! warning "Double Correction"
    The surveyor must be aware of gyro and MRU calibration values entered in **both** the USBL system and navigation software to avoid applying corrections twice (double correcting the C-Os).

### Scenario 1: Vessel-Fit USBL with Sensor Access

The USBL system is vessel-fit (part of the DP system). External sensors (DGNSS, gyro, MRU) are not common to both the USBL and navigation package, but can be calibrated, and vessel policy allows entering C-Os directly into the USBL system.

**Use the manufacturer's software to calibrate.** Vessel-fit systems will have secondary and tertiary attitude/heading sensors which must all be aligned with C-Os applied within the USBL topside (sensor switching is common and may occur without notice).

When the USBL software is used:

- [x] All attitude corrections (heading, pitch, roll) entered in USBL system -- navigation package corrections set to **zero (0)**
- [x] Scale correction entered in USBL system -- navigation software scale set to **one (1)**
- [x] GNSS antenna offsets entered relative to the USBL reference in USBL software, and relative to the CRP in navigation software (ideally these two points should be coincident)

### Scenario 2: Own USBL System

The USBL system is installed by the survey team or used exclusively for survey operations. All external sensors are common to both the USBL software and navigation package.

**Use the manufacturer's software for calibration.**

### Scenario 3: Vessel-Fit USBL without Sensor Access

The USBL system is vessel-fit. External sensors are not common to both systems, and vessel policy does **not** allow C-Os to be entered into the USBL system.

**Use the navigation software to perform the calibration.** C-Os are entered only in the navigation software and should be small if the USBL system is in good order.

---

## :material-chart-bell-curve: Error Budget Breakdown

The achievable accuracy of a USBL system depends on the combined contribution of each component. An error budget should contain accurate information about equipment accuracy and calibration quality.

### Primary Error Sources

| Error Source | Effect | Behaviour with Depth/Distance |
|-------------|--------|-------------------------------|
| **USBL transceiver accuracy** | Angular measurement precision | Horizontal error increases with depth |
| **DGNSS system** | Surface position of vessel | Constant -- not affected by water depth |
| **Heading sensor** | Bearing to transponder | Error increases with **horizontal distance** from vessel; less impact when target is below the vessel |
| **Pitch and Roll sensor** | Vertical angle correction | Error increases with **water depth** -- most critical for deep water operations |
| **Speed of Sound** | Range calculation (slant range from TWTT) | Error increases with depth and horizontal distance (ray bending from thermoclines) |
| **Offset measurement accuracy** | Transceiver-to-CRP geometry | Constant -- not affected by water depth |
| **Quality of calibrations** | Residual alignment errors | Amplified with depth (angular) or constant (offset) |
| **Noise levels** | Signal-to-noise ratio degradation | Increases with depth, horizontal distance, and ambient noise |
| **USBL pole stability** | Dynamic errors from pole flex/movement | Nearly impossible to quantify; avoid unstable poles for high-spec work |

### How Errors Manifest

!!! info "Depth-Dependent vs Constant Errors"
    - **DGNSS and offset measurement errors** are constant and not affected by water depth. A vessel spin in shallow water will reveal offset errors clearly, but in deep water any apparent transponder movement may be hard to distinguish from pitch/roll error.
    - **Pitch and roll errors** increase with water depth and are the most critical aspect for deep water operations. A spin check is the preferred method for validating pitch/roll corrections, though it cannot differentiate between pitch, roll, and offset errors individually.
    - **Heading errors** increase with horizontal distance from the vessel, making them most significant when positioning towed sensors or ROVs at touchdown deployed from a pipelay vessel. Heading errors do not increase with water depth.
    - **Speed of sound errors** are more apparent in deeper water. In areas with rapidly changing conditions (e.g., nearshore mixing of fresh river water and saltwater), sound velocity data may need to be collected much more frequently.

### Achievable Accuracy

!!! success "Target Accuracy"
    Positional accuracy better than **0.3% of slant range** (plus the absolute accuracy at 2-sigma/95% of the vessel surface positioning system) should be achievable for modern USBL systems.

---

## :material-wrench: Portable Installation Checklist

When installing a temporary or portable USBL system using an over-the-side pole:

- [x] Pole must be rigid enough for the vessel to manoeuvre at up to **3 knots**
- [x] Transceiver must be at least **3 m below the vessel** in the deployed position
- [x] Use **stops and stays** to ensure the pole returns to the same point when deployed
- [x] Fit a short adaptor pipe between the pole flange and the transceiver head
- [x] Use a **non-conductive spacer and nylon bolt covers** -- no metal-to-metal contact between transceiver head and pole
- [x] Verify all bolts, washers, adaptors, and spacers are present and in good condition before installation
- [x] Support the transceiver head independently (e.g., with a choke strop) when attaching to the pole
- [x] Plan deployment and recovery in clear, manageable steps -- use a small davit and winch where possible
- [x] Transducer head must be recoverable to deck or safe height above waterline before vessel transit
- [x] Secure all bolts with **sprung washers and Loctite**

!!! tip "Quick Test"
    After installation, lower a transponder over the side and interrogate it (ensure sufficient water depth for the pole). The returns should highlight any gross offset or alignment errors, since the beacon's position relative to the transceiver should be roughly known based on where it was lowered.

---

## :material-pulse: MRU Interfacing

Latency in pitch and roll data fed to the USBL system is a common cause of positioning errors. Possible causes include insufficient MRU output rate and using an incorrect output format at high data rates (more bits per second than the baud rate can handle).

### Minimum Requirements

| Parameter | Kongsberg HiPAP | Sonardyne |
|-----------|----------------|-----------|
| **Angular resolution** | 0.01 deg | 0.01 deg |
| **Minimum output rate** | 25 Hz (preferably 100 Hz) | 10 Hz |

!!! info "String Selection"
    The output string type matters for timing accuracy. For example, when using an Octans to provide heading, pitch, and roll to a HiPAP system, the EM3000 binary string is recommended -- it includes heading, pitch, and roll and is much more efficient with bit count than ASCII alternatives.

After interfacing the MRU, review trend plots in the USBL software to confirm attitude data is being received correctly and at the expected rate.

---

## :material-access-point: Transponder Selection

### Wideband vs Legacy

Always use **wideband transponders** in preference over legacy tone-based transponders with modern systems:

| System | Wideband Type |
|--------|--------------|
| Sonardyne | WB2 or WB2+ |
| Kongsberg HiPAP | CYMBAL transponder (M-Codes) |

### Omni-Directional vs Directional

| Transponder Type (Beam Width) | Recommended Use |
|-------------------------------|-----------------|
| Omni-directional (180 deg) | Water depths less than 1800 m (not recommended beyond 1800 m) |
| Directional (30 deg or 40 deg) | Water depths greater than 1800 m |

When using a directional transponder, ensure the vessel's transceiver remains within the optimal part of the beam. The maximum horizontal offset can be calculated:

!!! example "Beam Width Formula"
    $$\tan(0.5 \times \text{BeamWidth}) \times \text{WD} = \text{Maximum Horizontal Offset}$$

    Example with 30 deg transponder in 850 m WD:

    \(\tan(0.5 \times 30) \times 850 = 228\) m

    In this case, limit cardinal points to ~200 m offset. However, 200 m offset in 850 m depth provides poor geometry -- an omni-directional transponder allowing 500 m offset would be more effective.

    In 1865 m WD with the same 30 deg transponder:

    \(\tan(0.5 \times 30) \times 1865 = 500\) m

    This is why directional transponders are only recommended for calibration in water depths greater than 1800 m -- it is only at these depths that a 500 m horizontal offset fits within the beam.

!!! note
    Directional transponders can still be used in shallower water for positioning operations directly below or close to the surface vessel, and will yield higher signal-to-noise ratios when used directly below the vessel. Choose the optimum balance between geometry and signal-to-noise ratio for your specific situation.

---

## :material-rotate-360: Calibration Methods

### Suggested Horizontal Offsets

| Water Depth (m) | Kongsberg HiPAP Offset (m) | Sonardyne CASIUS Offset (m) |
|-----------------|---------------------------|----------------------------|
| 150 | 150 | 75 |
| 400 | 400 | 200 |
| 500 | 500 | 250 |
| 750 | 500 | 375 |
| 1000 | 500 | 500 |
| 2000+ | 500 | 500 |

Recommended calibration depth range is **200-2000 m**. The ideal depth is approximately 500 m for a good balance of geometry and signal-to-noise ratio. Maximum lateral offset from the seabed beacon should be limited to 500 m.

---

### Cardinal Point Method (DP Vessels)

The preferred calibration routine for DP vessels. The vessel navigates to each of four cardinal points around a seabed transponder and collects data on singular or reciprocal headings.

- Each dataset should contain **100-200 fixes** per heading per point
- With tight data clustering, 100 points is sufficient; with larger spread, collect 200+ (many will be thinned in post-processing)
- Reciprocal headings provide 100% data redundancy and are generally preferable

**Data logged during calibration:**

- [x] Transceiver position (derived from GNSS, gyro, and attitude sensors)
- [x] USBL angles and ranges (X, Y, Z values) to the transponder
- [x] Heading, pitch, and roll values

!!! warning "Pre-Calibration Setup"
    - Record any previous calibration values in the online log before removing them
    - If a gear correction is very large (e.g., transceiver mounted ~90 deg out), set an approximate value before starting
    - Configure the USBL topside to output a raw data string to the navigation software
    - On vessels with two transceivers, plan data acquisition for both in advance to minimise vessel moves

**QC Checks on Results:**

1. The **2DRMS** of the transponder horizontal position should fall inside the total system error budget (2DRMS represents the 98.2% confidence level)
2. The **scale factor** should be close to 1.0 -- deviation may indicate a sound velocity or offset (usually depth) problem

---

### Non-DP Vessel Method (6-Line Box Pattern)

When the vessel does not have DP capability, the calibration uses a designed line pattern of **six lines run in reciprocal directions**:

- Four outer lines form a square around the transponder position, with the furthest point at the appropriate horizontal offset (max 500 m)
- Two inner lines run perpendicular to each other, crossing directly over the transponder location

**Best practices for non-DP calibration:**

- [x] Choose a heading **45 degrees to the prevailing weather** -- never sail beam-on to weather
- [x] Maintain **constant vessel speed** throughout each line
- [x] Switch logging on and off at the **same location** along each line to ensure consistent fix counts
- [x] If the recording system rejects a data file, re-run that line

---

## :material-check-decagram: Verification Procedures

After processing calibration data and entering corrections into the appropriate location, verification confirms the system is performing within specification.

### Spin Check (Pitch/Roll Verification)

The spin check identifies residual pitch, roll, and offset errors by manoeuvring the vessel through 360 degrees of rotation directly above the transponder.

!!! info "Static Spin, Not Continuous"
    This is a **static spin** -- the vessel is held stationary at four distinct headings separated by 90 degrees. After each rotation, allow the vessel to settle fully and gyros to stabilize before logging.

**Procedure:**

- [x] Position USBL transceiver directly above the transponder, using the transceiver as the centre of rotation
- [x] Record a sound velocity profile at the verification site and enter into USBL software
- [x] Log 100 observations per heading on four headings separated by 90 degrees (minimum 400 total)
- [x] Verify USBL-to-GNSS antenna offsets are accurately defined

**Acceptance Criteria:**

- 95% of points within **0.3% of slant range + surface positioning error** from the known point or mean position
- Mean position on any individual heading within **0.2% of slant range** from the overall mean position
- No significant artefacts (circular "doughnut" pattern indicates residual pitch/roll/offset error)

!!! tip "Distinguishing Offset from Angular Errors"
    Test in a different water depth. An offset error produces a doughnut that does **not** change proportional to depth. An angular error produces a larger doughnut in deeper water and a smaller one in shallower water.

---

### Transit Check (Heading/Pitch/Roll Verification)

Transit lines are run with consistent vessel heading, passing directly over the transponder at the intersection point. The vessel's long axis aligns with one line (longitudinal) and 90 degrees opposed for the second (lateral).

- **Longitudinal line** reveals residual **pitch** errors
- **Lateral line** reveals residual **roll** errors

Transit distance: +/-50% of water depth or +/-250 m, whichever is greater, at maximum **2 knots**.

#### Transit Check Error Diagnosis

| Line | Error Type | Symptom |
|------|-----------|---------|
| Longitudinal | Pitch | Transponder depth change (increasing or decreasing along the line) |
| Longitudinal | Heading | Transponder lateral movement (across-track error) |
| Longitudinal | Sound Velocity | Transponder fore/aft movement (and possible "smile" in depth profile) |
| Lateral | Roll | Transponder depth change |
| Lateral | Heading | Transponder longitudinal movement |
| Lateral | Sound Velocity | Transponder port/starboard movement (and possible "smile" in depth profile) |

**Depth Profile Interpretation:**

- Constantly **increasing or decreasing** depth along a line indicates a **pitch or roll bias**
- **"Smile" or "frown"** shapes indicate **scale (sound velocity) issues**
- Depths should ideally vary around a constant value

**Acceptance Criteria:**

- 95% of points within **0.3% of maximum slant range + surface positioning error** from the known point or mean position
- Mean position of each transit dataset within **0.2% of slant range** from the spin verification mean
- An elongated spread in the position plot suggests a heading or scale error

---

### Position Verification

Conducted on a known structure by deploying an ROV to a published reference point or installing a transponder at a known location. Log a cumulative position fix, then turn to the reciprocal heading and repeat.

**Acceptance Criteria:**

- Each reciprocal fix's mean distance from the overall dataset mean shall be within **0.25% of slant range**
- If the range between positions exceeds the error budget, investigate possible causes (consider the original positioning method and associated calibration data for the structure)

!!! danger "Critical Rule"
    **Never average the positions collected at reciprocal vessel headings.** This defeats the intent of the exercise, which is to highlight the achievable accuracy of a USBL fix on any particular heading.

---

## :material-timer-sand: Transponder Tracking Operations

### Update Rate

The update rate should match the achievable rate for the water depth. Overloading the system with an unreasonably fast rate provides no benefit.

!!! example "TWTT Calculation Example"
    With an average sound velocity of 1500 m/s and a depth of 1000 m:

    **TWTT = (2 x 1000) / 1500 = ~1.3 seconds**

    Adding transponder turnaround time, a tracking interval faster than ~1.5 seconds is unreasonable for this scenario.

### Multi-Transponder Considerations

- Most USBL systems interrogate transponders **sequentially** -- tracking intervals may need to increase to accommodate multiple returns
- **Prioritise** the most critical transponders (e.g., ROV may need ~3 second updates; a crane hook may be fine at 10+ seconds)
- Transponders on **battery power** have a limited number of replies -- factor this into update rate and power settings

### Tracking Quality

- Use **two beacons** on the tracked vehicle where possible: one powered through the vehicle (responder) and one spare on battery (transponder)
- Mount transponders with the face raised as high as possible above the vehicle buoyancy without interfering with the tether
- Ensure clear line of sight between transceiver and transponder
- If tracking is inconsistent, adjust gain, detection threshold, and detection validate settings
- On DP vessels, vessel heading relative to the transponder is the most common cause of tracking issues -- adjust heading if needed

---

## :material-radio-tower: Frequency Management

Acoustic frequency management prevents interference between vessels operating in the same field. A **Frequency Management Plan (FMP)** is typically issued by the client for the work area.

Key principles:

- Each vessel in the field is allocated specific acoustic channels -- **only** those channels are to be used
- No vessel uses frequencies not specifically allocated to it
- If additional or different requirements arise, contact the FMP issuer for a revision

---

## :material-reflect-horizontal: Multipath Effects

Multipath occurs when the acoustic signal reaches the transceiver via an indirect path (reflected off a surface) in addition to the direct path. The system cannot distinguish between them, resulting in corrupted angle measurements and degraded positioning.

### Common Multipath Sources

| Source | Situation |
|--------|-----------|
| **Jacket legs / risers** | Working near fixed structures -- signal reflects off steel members |
| **Moonpool edges** | Transceiver deployed through moonpool -- signal bounces off internal walls |
| **Vessel hull** | Shallow water or high beam angles -- signal reflects off the hull |
| **Seabed** | Very shallow water -- strong seabed reflection arrives close in time to the direct signal |
| **Thermoclines** | Strong temperature gradients can refract and reflect acoustic energy |

### Mitigation

- Position the vessel so the transponder is as close to directly below the transceiver as operationally feasible
- When working near structures, keep the transponder clear of structural members in the acoustic path
- Use wideband signals (correlation-based detection is more resistant to multipath than tone-based)
- If multipath is suspected, compare USBL positions from different vessel headings -- multipath effects are heading-dependent
- In moonpool installations, ensure the transceiver is lowered well below the hull to clear the moonpool walls

---

## :material-volume-off: Acoustic Interference Diagnosis

Acoustic interference occurs when other active acoustic systems operate on overlapping or harmonic frequencies, degrading USBL signal detection.

### Symptoms

- Sudden increase in rejected fixes or dropped tracking cycles
- Fix scatter increases without any change in environmental conditions
- Intermittent tracking loss that correlates with other system activity (e.g., MBES pinging, vessel DP USBL, nearby vessel operations)

### Common Conflict Sources

| System | Typical Frequency Range |
|--------|------------------------|
| MBES (shallow) | 200 - 400 kHz |
| MBES (deep) | 12 - 30 kHz |
| SBES / Altimeter | 200 kHz typical |
| USBL (MF) | 19 - 34 kHz |
| USBL (HF) | 35 - 55 kHz |
| LBL transponders | Various, per FMP |
| Sub-bottom profiler | 2 - 16 kHz |

### Diagnosis Steps

1. **Disable other acoustic systems one at a time** and observe whether USBL tracking improves
2. **Check the Frequency Management Plan (FMP)** for channel allocations -- confirm no overlap
3. **Review the USBL signal-to-noise display** for periodic noise spikes that correlate with other system ping rates
4. **Contact nearby vessels** to check if they have changed acoustic channels or power settings
5. If the conflict cannot be resolved by channel separation, coordinate transmit timing (time-division) between systems where the USBL software supports it

---

## :material-check-decagram: Acceptance Criteria

| Parameter | Threshold |
|-----------|-----------|
| Spin check -- 95% of points | Within **0.3% of slant range** + surface positioning error from known/mean position |
| Spin check -- mean per heading | Within **0.2% of slant range** from overall mean |
| Transit check -- 95% of points | Within **0.3% of max slant range** + surface positioning error |
| Transit check -- mean per dataset | Within **0.2% of slant range** from spin verification mean |
| Position verification -- reciprocal means | Within **0.25% of slant range** from overall dataset mean |
| Scale factor | Close to **1.0** (deviation indicates SV or depth offset error) |
| Overall system accuracy | Better than **0.3% of slant range** + surface positioning accuracy (2-sigma) |

---

## :material-wrench: Troubleshooting

| Problem | Likely Cause | Action |
|---------|-------------|--------|
| Circular "doughnut" pattern on spin check | Residual pitch/roll or offset error | Re-calibrate pitch and roll; verify offsets. Test at different depth to distinguish offset from angular error |
| Transponder depth changes along transit line | Pitch or roll bias | Apply correction in appropriate plane; re-run transit to verify |
| "Smile" or "frown" in depth profile | Sound velocity error / scale factor issue | Take fresh SVP; check SV profile is loaded correctly |
| Elongated scatter on position plot | Heading or scale error | Review gyro calibration; check SV profile |
| Tracking dropouts near structures | Multipath / acoustic shadowing | Reposition vessel; change heading to clear acoustic path |
| Sudden increase in fix scatter | Acoustic interference | Disable other acoustic systems one by one; check FMP |
| Large C-Os (> 2 deg) | Gross installation error or sensor misidentification | Re-measure offsets; verify correct gyro/MRU is interfaced |
| Fixes biased consistently in one direction | Offset error or uncorrected lever arm | Re-verify GNSS-to-transceiver offsets |

---

## :material-link-variant: Related Articles

- [INS/DVL Calibration Guide](ins-dvl-calibration-guide.md) -- DVL calibration using USBL as reference system
- [Sound Velocity Operations](../sensors/sound-velocity-operations.md) -- SVP requirements for accurate USBL range calculation
- [Dimensional Control Survey](../mobilisation/dimensional-control-survey.md) -- measuring transceiver offsets and lever arms

---

## :material-book-open-variant: References

- IMCA S017 -- Guidance on Vessel USBL Systems for Use in Offshore Survey, Positioning and DP Operations
