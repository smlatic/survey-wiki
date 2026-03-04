---
title: Subsea Metrology Overview
category: rov
tags: [metrology, LBL, acoustic, spool, jumper, hub, COMPATT, gyro, depth loop, error budget, baseline]
equipment: [Sonardyne COMPATT, Sonardyne Fusion, Octans, GyroCOMPATT, Valeport SVX2, Digiquartz]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: converted_procedure
---

# :material-tape-measure: Subsea Metrology Overview

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>ROV Operations</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Reference Guide</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Comprehensive reference covering subsea acoustic metrology -- the process of making precise relative measurements between subsea structures for spool and jumper fabrication. Covers tolerances, error budgets, equipment, mechanical interfaces, depth loops, heading observations, LBL baseline collection, array adjustment, and orientation methods.

---

## :material-information-outline: What Is Metrology

Metrology is a **relative measurement** between two reference points on subsea structures. These reference points relate to the jumper or spool connection points (hubs or flanges) by dimensional control offsets in XYZ, Pitch, Roll, and Heading.

The measurements are used to **design and fabricate** spools or jumpers that connect subsea structures such as manifolds, PLETs, and christmas trees.

Spools and jumpers connect to structures through **connectors** and **hubs**:

| Connector Type | Description | Key Characteristic |
|----------------|-------------|-------------------|
| **Vertical** | Connects to a vertical hub | Heading tolerance may be relaxed |
| **Horizontal** | Connects to a horizontal hub | Roll may not be required (e.g., swivel flange) |

The seabed profile along the proposed spool route must also be surveyed -- this is critical for fabrication of gooseneck sections and ensuring adequate clearance between the seabed and the bottom of the spool.

---

## :material-ruler: Measurements Required for Fabrication

For a typical vertical or horizontal metrology, the following parameters are required:

- [x] **Hub-to-hub relative position** (DX, DY, DZ)
- [x] **Heading** at each structure hub
- [x] **Pitch and Roll** at each structure hub
- [x] **Seabed profile** between hubs (for gooseneck clearance)
- [x] **Depth** at each hub and along the spool route

!!! tip "Connector Type Matters"
    The connector type determines which measurements are critical. A horizontal metrology with a swivel flange may not require roll. A vertical connector may have a relaxed heading tolerance. Always check the project-specific requirements.

---

## :material-target: Metrology Tolerances and Error Budget

### Typical Acoustic Metrology Tolerances

Tolerances are at **2 sigma (95% confidence, 2D error circle)**:

| Measurement | Overall Tolerance | Per-Hub Tolerance |
|-------------|-------------------|-------------------|
| Horizontal Translation (Dx) | ±100 mm | ±70.7 mm |
| Lateral Translation (Dy) | ±100 mm | ±70.7 mm |
| Depth Translation (Dz) | ±100 mm | ±70.7 mm |
| Pitch (Rx) | ±0.5° | ±0.35° |
| Roll (Ry) | ±0.5° | ±0.35° |
| Heading (Rz) | ±0.707° | ±0.5° |

??? example "Calculating Per-Hub Tolerance"
    The overall tolerance is the RSS (Root Sum of Squares) of the tolerance at each hub:

    $$\text{Overall} = \sqrt{\text{Hub1}^2 + \text{Hub2}^2}$$

    Where Hub1 = Hub2:

    $$100\,\text{mm} = \sqrt{Dx_1^2 + Dx_2^2}$$

    $$Dx = \sqrt{\frac{100^2}{2}} = 70.711\,\text{mm}$$

    This formula applies to all translation and rotation values.

### Error Budget Factors

The achievable accuracy depends on:

- [x] Distance between spool connection points
- [x] Accuracy of the attitude sensor (gyro)
- [x] Accuracy of the depth sensor (Digiquartz)
- [x] Slop in the stab/receptacle mechanical interface
- [x] Alignment between stab and instrument
- [x] Accuracy of the acoustic array calibration

!!! warning "Assess Before Mobilisation"
    The error budget must be completed onshore before mobilisation to confirm the requested tolerances can be met. Discuss with the client if there are concerns.

---

## :material-cog: Metrology Interfaces (Stab and Receptacle)

The mechanical interface is one of the most critical parts of any metrology. A **male stab** bolts to the bottom of the instrument and a **female receptacle** is bolted to the structure.

### Manufactured Tolerances

When precision machined:

| Error Source | Typical Value |
|-------------|---------------|
| Alignment error (stab/receptacle) | \(\sin^{-1}(0.074 / 65.1) = 0.065°\) |
| Total alignment with propagation | **0.09°** |
| Surface flatness tolerance | 0.00254 mm (concave) |
| Pitch/Roll error from flatness | **Negligible** |

!!! warning "Client-Supplied Interfaces"
    Client-supplied interfaces may not meet these precision tolerances. Additionally, adapter plates, instrument housing misalignment, contamination with dirt, or physical damage can all increase errors beyond calculated values.

### Interface QC Checks (Onshore)

**Slop Test:**

1. Mount gyro and stab to a dummy receptacle aligned to a known baseline
2. Enter local latitude, allow 1 hour to settle
3. Nudge counter-clockwise, log 5 headings
4. Nudge clockwise, log 5 headings
5. Average each set, compare

!!! danger "Excessive Slop"
    If the difference between CW and CCW averages exceeds **0.3°**, there is excessive slop. Test additional stabs/receptacles. If consistent, all offshore observations must include CW and CCW nudge readings.

**Alignment Test:**

Compare gyro heading against the known baseline. Check pitch and roll for levelness.

---

## :material-axis-arrow: Reference Frames and Conventions

### Three Reference Frame Options

| Frame | Origin (0,0,0) | Offsets Applied To |
|-------|---------------|-------------------|
| **Receptacle CRP** | Receptacle (level) | Hub |
| **Structure CRP** | Structure (level) | Both hub and receptacle |
| **Hub CRP** | Hub (level) | Receptacle |

### Coordinate Axes

- **Z-axis:** Vertical, positive Up
- **Y-axis:** Forward (structure north), positive Forward
- **X-axis:** Starboard, positive Starboard

### Attitude Convention

- **Pitch:** Rotation about X-axis
- **Roll:** Rotation about Y-axis
- **Heading:** Rotation about Z-axis, **positive = clockwise**

!!! warning "Check DimCon Conventions"
    Dimensional control reports may use different sign conventions. Some use counter-clockwise positive for heading (RZ). Always verify conventions before applying offsets.

---

## :material-earth: Geodetics, Convergence, and Vertical Datum

### Scale Factor

For metrology, the scale factor **must be set to 1**. Acoustic ranges are true distances and must not be scaled.

!!! tip "Tape Measure Analogy"
    If you measured the distance between hubs with a tape measure, you would not apply scale factors. The measurement is the measurement.

### Convergence

Grid North deviates from True North depending on position:

```
Grid Heading = True Heading - (±Convergence)
```

### Vertical Datum

Metrology is a relative exercise -- vertical datum is not strictly required. However, as good practice:

- Apply a single tidal correction from the first reference depth as a block shift
- Spread tidal loop misclosure pro-rata over time

!!! danger "Tidal Cycle Timing"
    Depth measurements for metrology must **NOT** be made during the peak or trough of the tidal cycle. Collect observations only during increasing or decreasing tide.

    **Rationale:** At the peak and trough of the tidal cycle, the rate of change of tide is near zero, making it difficult to determine the exact tidal correction to apply. During rising or falling tide, the rate of change is more linear and predictable, allowing more accurate interpolation of tidal corrections between observations. This reduces the uncertainty in the depth loop closures.

---

## :material-arrow-down-bold: Pressure to Depth Conversion

Observed pressure (PSI) is converted to depth (metres) using **mean seawater density**:

1. Collect CTD data (conductivity, temperature, pressure) during ROV descent from surface to seabed
2. Derive mean seawater density
3. Convert using the formula in FlowIT software

The density derivation uses observations from the sound velocity probe during descent.

---

## :material-sine-wave: Sound Velocity for Baselines

Sound velocity is **absolutely critical** to LBL metrology -- it converts two-way travel times to ranges in metres.

### For Baseline Measurements

| Priority | Source | Notes |
|----------|--------|-------|
| **Primary** | SV sensors fitted in COMPATTs | Ideal: all COMPATTs have SV sensors |
| **Minimum** | SV sensors on COMPATTs nearest each structure | At least 2 sensors required |
| **Monitor** | Direct-read ROV-mounted SV sensor | Real-time monitoring during collection |

!!! info "Typical Accuracy Impact"
    2 x Standard Deviation is typically ±0.25 m/s, which equates to a baseline error of **±0.008 m over a 50 m range**.

### For Water Column (USBL)

A separate full water column SVP is required for the USBL system:

- Deploy SVX2 (combined CTD and velocimeter) via ROV
- Observe velocity directly and check against derived velocity
- Use **Chen & Millero** formula for depths **< 1000 m**
- Use **Del Grosso** formula for depths **> 1000 m**

!!! warning "Different SV for Different Purposes"
    The water column SVP is for USBL tracking. The seabed SV sensors in COMPATTs are for baseline measurements. Do not confuse the two.

### Instrument Accuracies

| Sensor | Parameter | Accuracy |
|--------|-----------|----------|
| Valeport SVX2 | Sound Velocity | ±0.02 m/s |
| Valeport SVX2 | Temperature | ±0.01°C |
| Valeport SVX2 | Conductivity | ±0.01 mS/cm |
| Valeport SVX2 | Pressure | ±0.01% FS |

---

## :material-toolbox: Metrology Equipment

### Typical LBL Metrology Equipment List

| Equipment | Operational | Spare |
|-----------|:-----------:|:-----:|
| Sonardyne Fusion system (computer + software) | 1 | 1 |
| ROVNAV with High Precision Strain Gauge | 2 | 1 |
| 6G COMPATTs | 4 | 2+ |
| GyroCOMPATTs or Octans gyros | 2 | 1 |
| Metrology stabs and adapter plates | Per job | Spares |
| Seabed tripods/stands | 2 | 1 |
| Digiquartz depth sensors (manipulator-held) | 2 | 1 |
| Valeport SVX2 sound velocity probe | 1 | 1 |

---

## :material-clipboard-check: Deck Preparation Checklist

Before deployment of metrology equipment:

- [x] Charge GyroCOMPATTs (if battery-powered)
- [x] Enter worksite latitude into gyrocompasses
- [x] Set family/channel per frequency management plan (avoid conflict with other users)
- [x] Deck test all COMPATTs -- confirm functioning correctly
- [x] Label all COMPATTs with programmed addresses
- [x] Install gyro handles perpendicular to forward mark; mark forward with paint or coloured tape
- [x] Consult ROV personnel on equipment rigging for subsea handling
- [x] Fit male metrology stabs to GyroCOMPATTs/Octans
- [x] Confirm zero-verticality offset between COMPATT and interface tool
- [x] Measure and record transducer height offset (stab face to acoustic centre)
- [x] Fit seabed stand COMPATTs with centralising collars
- [x] Measure offsets to Digiquartz observation points on tripods
- [x] Prepare manipulator-held Digiquartz (remove sharp edges, add Nylon/Delrin to prevent hub damage)
- [x] Measure offset from handle plate to pressure sensor

---

## :material-waves-arrow-down: Deployment Sequence

1. Set vessel up at safe overboarding zone
2. Deploy ROV and workbasket to 50 m depth
3. ROV inspects workbasket (check nothing broke loose in splash zone)
4. Acoustically test all COMPATTs
5. Lower workbasket to ~10 m off bottom, move vessel to deployment location, lower to seabed
6. ROV unhooks crane wire, crane recovers to deck
7. ROV touches bottom to complete SVP/CTD collection
8. Process SVP data, input into APOS/Fusion
9. ROV places seabed stands in predetermined positions (guided by LBL/USBL)
10. Check COMPATT depths against bathymetry (gross error check)

---

## :material-arrow-expand-vertical: Depth Determination -- Level Loops

Depth loops establish the vertical relationship between all metrology points.

### Loop Structure

| Loop | Route | Purpose |
|------|-------|---------|
| **01 & 02** | Receptacle A → Receptacle B → Receptacle A | Hub-to-hub DZ (primary result) |
| **03** | Receptacle A → Tripod A → Receptacle B → Tripod B → Receptacle A | COMPATT transducer depths for array adjustment |
| **04** | Receptacle A → Seabed observations → Receptacle B → Receptacle A | Seabed profile for jumper route and gooseneck dimensions |

### Data Collection Parameters

- **Duration per point:** Minimum 30 seconds, maximum 1 minute
- **Logging rate:** 4 Hz
- **Data format:** PSI, converted to metres using relative density
- **Repeat criterion:** Repeat loops until correlation **< 1.5 cm** between loops

!!! tip "Seabed Profile Intervals"
    For Loop 04, observe at maximum 5 m intervals along the seabed. Include salient locations such as seabed directly below each hub and points where the jumper gooseneck is expected to touch down.

---

## :material-compass: Heading and Inclination Observations

### Gyro Selection

| Sensor | Pros | Cons |
|--------|------|------|
| **GyroCOMPATT** | Detached from ROV; no thruster wash interference | Limited battery life |
| **Octans** | No battery limit (direct interface) | ROV must hold position; cable management; thruster vibration |

!!! warning "COMPATT Battery Management"
    GyroCOMPATTs have limited battery life (typically 24-72 hours depending on model and interrogation rate). Plan the metrology sequence to minimise time with COMPATTs powered on but not collecting data. Key practices:

    - **Charge fully** before deployment (verify on deck with status check)
    - **Minimise idle time** -- do not power on COMPATTs until ready to begin observations
    - **Monitor battery status** via Fusion during collection
    - **Have spare charged COMPATTs** in the workbasket in case of battery depletion mid-job
    - If a GyroCOMPATT battery drops below the manufacturer's recommended threshold, **replace it before continuing** -- low battery can affect gyro accuracy

!!! info "Thermal Effects on Gyro Settling"
    Gyro settling time is affected by **temperature differential**. When a gyro is deployed from a warm deck into cold seawater, the internal temperature takes time to stabilise. Until thermal equilibrium is reached, heading readings may drift.

    - Allow a minimum of **30 minutes** settling time after insertion into the receptacle (longer in deep, cold water)
    - If the gyro was stored in a heated container on deck and deployed into water below 5C, consider extending settling time to **45-60 minutes**
    - Monitor heading output during settling -- a stable heading (variation < 0.05 deg over 5 minutes) indicates the gyro has settled

### Observation Procedure

1. Insert GyroCOMPATT/Octans into receptacle, aligned to structure north
2. Screenshot to confirm correct mating and alignment
3. Allow minimum **30 minutes** stabilisation (spec says < 5 min, but allow 30 min)
4. Log **5 heading and inclination observations**
5. Rotate **90° clockwise**, log 5 more
6. Repeat at 90° increments through **full 360°** (5 sets total)
7. **Sets 1-4** used for calculation; **Set 5** used for QC only

!!! info "Data Processing"
    Each data set is entered into the metrology calculator. Data is checked for quality and outliers removed. Average heading, pitch, and roll derived from the first 4 sets. Structure attitude is confirmed by combining observations with receptacle-to-structure-north C-Os.

??? tip "Diagnosing Gyro Drift During Nudge Sets"
    If the heading values from Set 5 (QC set, same orientation as Set 1) differ from Set 1 by more than the expected slop, **gyro drift** is the likely cause. To diagnose:

    1. **Compare Set 1 vs Set 5** -- these are at the same orientation. Difference should be < 0.1 deg for a healthy, settled gyro.
    2. **Plot all 5 sets sequentially** -- a linear trend across sets indicates drift rather than slop.
    3. **Check if drift is consistent in direction** -- true gyro drift tends to be monotonic (always increasing or always decreasing), while slop produces random scatter.
    4. **If drift is confirmed:** The gyro has not settled or is malfunctioning. Allow additional settling time and repeat all 5 sets. If drift persists, swap the gyro.

---

## :material-access-point-network: Acoustic Baseline Measurements (LBL Array)

### Array Configuration

A typical metrology uses a **braced quadrilateral** LBL array:

- **2 hub transponders** -- mounted in structure receptacles
- **2 seabed transponders** -- mounted in tripods on the seabed

Seabed transponders are placed:

- Equidistant from the hub-to-hub baseline
- Approximately **half the baseline length** away from that baseline
- Adjusted to suit circumstances while maintaining array integrity

### Baseline Collection

1. Take speed of sound measurement at seabed, enter into Fusion
2. ROV clears the array and shuts down hydraulics (if possible)
3. Initialise LBL ranging in Fusion
4. Collect minimum **10 good reciprocal baselines** between each pair of transponders
5. Process data in Fusion on completion

### Array Adjustment

| Step | Method | Purpose |
|------|--------|---------|
| **1. Initial 3D adjustment** | Least squares | Confirm baseline and depth data resolves. Check for gross errors (no major depth/baseline shifts) |
| **2. Final 2D adjustment** | Least squares, depths held fixed | Digiquartz depth accuracy (~0.005 m) is far superior to acoustics for vertical measurement |

!!! danger "Process Before Recovery"
    All baseline data **must** be processed and checked before recovering COMPATTs from the seabed. If data validity is in doubt and cannot be resolved by QC, consult the client and take additional measurements.

!!! warning "Acoustic Multipath from Structures"
    In congested subsea environments (manifolds, christmas trees, PLETs close together), acoustic signals can reflect off nearby structures before reaching the receiving COMPATT. This **multipath** produces erroneously long travel times and inflated ranges.

    Signs of multipath:

    - Individual baselines that are consistently longer than expected
    - High residuals on specific transponder pairs in the array adjustment
    - Baseline scatter that does not improve with additional observations

    Mitigation:

    - Position seabed COMPATTs away from large reflective structures where possible
    - Use the **reject filter** in Fusion to remove outlier ranges
    - If a specific transponder pair is badly affected, consider repositioning one of the seabed stands
    - Collect additional baselines and use statistical filtering to remove multipath-contaminated observations

---

## :material-compass-rose: Array Orientation Methods

The LBL array must be referenced to Grid North for spool design and fabrication.

| Method | Description | When to Use |
|--------|-------------|-------------|
| **Existing LBL arrays** | Use nearby existing calibrated arrays | Arrays available in area |
| **Additional COMPATT** | Deploy extra COMPATT in vacant receptacle for orientation | Spare receptacle available |
| **As-built positions** | Use known as-built coordinates of structures as initial positions; compare pre/post adjustment bearings | As-built data available |
| **Box-ins** | Box in 2 COMPATTs using vessel USBL to constrain positions | Shallower water (< 500 m) |

---

## :material-check-all: Data QC Summary

Before accepting a metrology as complete:

- [x] All depth loops close within tolerance (< 1.5 cm)
- [x] All gyro observations within expected ranges
- [x] CW/CCW slop checks acceptable
- [x] Minimum 10 good reciprocal baselines per transponder pair
- [x] 3D adjustment shows no gross errors
- [x] 2D adjustment residuals within tolerance
- [x] Array orientation confirmed
- [x] Sound velocity data consistent

---

## :material-lightbulb-outline: Alternative Metrology Methods

While acoustic LBL metrology is the standard approach, alternative methods include:

| Method | Description | Status |
|--------|-------------|--------|
| **INS-based metrology (SLAM)** | Uses inertial navigation to measure relative positions between structures by flying the ROV between hubs | Increasingly common; faster than acoustic |
| **Taut wire** | Physical wire measurement between structures | Legacy method; limited application |
| **Photogrammetry** | Optical measurement using cameras | Emerging technology; limited by visibility |

### INS-Based Metrology and SLAM

INS-based metrology (sometimes called SLAM -- Simultaneous Localisation and Mapping) uses the ROV's inertial navigation system to measure the relative vector between two structure hubs by **flying the ROV directly from one hub to the other**. The INS integrates accelerometer and gyroscope data to track the relative displacement without requiring an acoustic array.

**Key advantages over acoustic LBL:**

- Significantly faster (no COMPATT deployment, baseline collection, or array adjustment)
- Fewer subsea assets required
- No acoustic multipath concerns
- Works in congested environments where LBL geometry is poor

**Key limitations:**

- Accuracy degrades with distance and time due to INS drift
- Requires high-grade INS (e.g., iXblue Phins, Sonardyne SPRINT)
- DVL bottom-lock is critical -- loss of DVL aiding causes rapid position degradation
- Multiple runs required for statistical confidence

For a detailed treatment of INS-based metrology techniques and SLAM workflows, see the dedicated article: **[INS-Based Metrology](ins-based-metrology.md)**.

---

## :material-calendar-check: When to Use

This article is a **reference guide** for subsea acoustic metrology. Consult it:

- When planning a metrology campaign (error budgets, equipment lists, procedures)
- When preparing metrology equipment on deck (checklists, QC procedures)
- When performing metrology observations offshore (gyro procedures, depth loops, baseline collection)
- When troubleshooting metrology data quality issues
- When comparing acoustic LBL metrology against INS-based alternatives

---

## :material-check-decagram: Acceptance Criteria

| Parameter | Criterion |
|-----------|-----------|
| Depth loop closure | < **1.5 cm** between repeated loops |
| Gyro slop (CW vs CCW) | < **0.3 deg** difference between nudge set averages |
| Gyro drift (Set 1 vs Set 5) | < **0.1 deg** |
| Minimum reciprocal baselines | **10** good baselines per transponder pair |
| Array adjustment residuals | Per project specification (typically < **0.02 m** RMS) |
| Overall hub-to-hub accuracy | Within ±**100 mm** 2D at 95% confidence (2 sigma) |
| Heading accuracy | Within ±**0.707 deg** overall (2 sigma) |
| Pitch/Roll accuracy | Within ±**0.5 deg** overall (2 sigma) |

---

## :material-wrench: Troubleshooting

| Symptom | Likely Cause | Action |
|---------|-------------|--------|
| Depth loops do not close within 1.5 cm | Tidal variation during observations; Digiquartz drift; ROV thruster wash | Repeat loops during linear tidal phase; check Digiquartz zero offset; ensure ROV hydraulics off during observation |
| Gyro heading drift between Set 1 and Set 5 | Gyro not settled; thermal instability | Allow additional settling time (45-60 min); check ambient temperature differential |
| Excessive slop (CW vs CCW > 0.3 deg) | Worn stab/receptacle interface; contamination | Clean interface; try alternate stab; measure slop on all available stabs |
| High residuals on specific baselines | Multipath from nearby structures; SV error | Reposition affected COMPATT; update SV; filter outlier ranges |
| Array adjustment does not converge | Gross error in one or more baselines or depths | Check individual baselines for outliers; verify COMPATT depths against bathymetry; remove suspect data and re-adjust |
| Baseline scatter does not reduce with more observations | SV changing during collection (thermocline movement) | Take fresh SV reading; collect baselines in shorter bursts with SV updates |

---

## :material-link-variant: Related Articles

- [INS-Based Metrology](ins-based-metrology.md)

---

!!! quote "References"
    - IMCA S 017 (Metrology standard)
    - Sonardyne Fusion user documentation
    - Valeport SVX2 specifications
    - Chen & Millero / Del Grosso sound velocity formulas
