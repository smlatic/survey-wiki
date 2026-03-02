---
title: LBL Acoustic Positioning Fundamentals
category: positioning
tags: [lbl, long-baseline, acoustic, transponder, positioning, metrology, calibration, array, trilateration]
equipment: [Sonardyne Compatt, Sonardyne Fusion, Kongsberg cNODE, iXblue Canopus, Acoustic Transceiver]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: original
---

# :material-access-point-network: LBL Acoustic Positioning Fundamentals

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Positioning</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Reference Guide</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Comprehensive reference covering Long Baseline (LBL) acoustic positioning principles, array geometry and design, transponder types, interrogation modes, array calibration methods, position computation, sound velocity dependence, achievable accuracies, and common applications in offshore survey. LBL positioning provides the highest subsea positioning accuracy available and is the foundation for metrology, construction positioning, and DP reference operations.

---

## :material-calendar-check: When to Use

Refer to this article:

- When planning an LBL array deployment for metrology or construction
- When designing array geometry for optimal positioning accuracy
- When calibrating a seabed transponder array
- When troubleshooting LBL position quality issues
- When comparing positioning methods (LBL vs USBL vs combined approaches)
- When planning frequency allocation for multi-array environments

---

## :material-information-outline: Overview

Long Baseline (LBL) positioning determines the position of a subsea vehicle or target by measuring ranges from the vehicle to multiple fixed transponders on the seabed. The transponder positions are established by calibration, and the vehicle position is computed by range-range intersection (trilateration). LBL achieves the highest subsea positioning accuracy of any acoustic method (centimetre-level in good conditions) because it uses long baselines (tens to hundreds of metres) between reference points, compared to the sub-metre baselines of USBL systems. The cost is more complex deployment and calibration, longer setup time, and the need for seabed infrastructure.

---

## :material-book-open-variant: Theory and Principles

### Acoustic Positioning Comparison

| Parameter | LBL | USBL | SBL |
|:--|:-:|:-:|:-:|
| Accuracy (typical) | 0.01-0.10 m | 0.1-1.0% of slant range | 0.1-1.0 m |
| Seabed units required | 3-6+ transponders | 1 transponder/responder | 3+ hydrophones |
| Setup complexity | High (deploy, calibrate) | Low (calibrate offsets) | Medium (deploy hydrophones) |
| Operating range | Limited to array extent | 100-5000+ m | Limited to hydrophone spread |
| Depth sensitivity | Low (works to any depth) | High (accuracy degrades with depth) | Low |
| Update rate | 0.5-5 Hz | 0.5-2 Hz | 1-10 Hz |
| Typical applications | Metrology, construction, DP ref | ROV tracking, survey, construction | Short-range tracking |

### How LBL Works

The fundamental measurement is acoustic range. The mobile unit (ROV, vessel hull transceiver, or other platform) measures the distance to each seabed transponder. With three or more range measurements and known transponder positions, the mobile unit's position is computed by trilateration.

**Range from travel time:**

**Range = (Travel time x Sound velocity) / 2** (for two-way ranging)

**Range = Travel time x Sound velocity** (for one-way ranging with synchronised clocks)

The accuracy of the position depends on:

1. **Range measurement accuracy** (timing precision, SV accuracy, turn-around delay knowledge)
2. **Transponder position accuracy** (quality of the array calibration)
3. **Array geometry** (DOP, or dilution of precision)
4. **Number of observations** (redundancy for least-squares adjustment)

### Array Geometry and Design

The geometry of the transponder array directly determines the achievable position accuracy. The concepts from GNSS DOP (Dilution of Precision) apply directly to LBL.

**Design principles:**

- **Baseline length**: should be comparable to the water depth for optimal vertical geometry. In deep water (1000+ m), baselines of 500-2000 m are typical. In shallow water (< 100 m), baselines of 100-500 m.
- **Minimum transponders**: 3 for 2D position (horizontal only), 4 for 3D position with redundancy. In practice, 4-6 transponders are typical to provide redundancy and detect outliers.
- **Geometry**: regular shapes (equilateral triangle, square, pentagon) provide uniform accuracy within the array. Elongated or irregular shapes degrade accuracy in one direction.
- **DOP effect**: position uncertainty = range uncertainty x DOP. Poor geometry (all transponders on one side, or all at similar range) amplifies range errors into large position errors.

!!! tip "Array Design for Metrology"
    For metrology operations (measuring distances between subsea hubs), the transponders should be placed to give good geometry at the measurement targets, not just at the array centre. Each hub should have good "view" of at least 3 transponders with reasonable geometry. Run a pre-deployment DOP analysis using the planned transponder positions and target locations.

### Transponder Types

| Type | Principle | Advantages | Limitations |
|:--|:--|:--|:--|
| Narrowband (tone burst) | Fixed-frequency pulse, sequential interrogation | Long range, simple, proven | Slow update (sequential), frequency conflicts |
| Wideband (chirp/broadband) | Coded acoustic pulse, simultaneous interrogation | Fast update (all units at once), better multipath rejection | Shorter range, more complex |
| Hybrid/Fusion | Wideband with multiple operating modes | Flexible, multiple roles (LBL, USBL, telemetry) | Higher cost |

**Common transponder systems:**

- Sonardyne Compatt 6/6+ (wideband, LBL/USBL/telemetry)
- Sonardyne Fusion (combined LBL/INS aiding)
- Kongsberg cNODE (wideband, LBL/USBL)
- iXblue Canopus (wideband, LBL/USBL)

### Interrogation Modes

#### Two-Way Ranging (Interrogate-Reply)

The mobile unit sends an acoustic pulse (interrogation). The transponder detects it and replies after a fixed turn-around delay. The range is:

**Range = ((TWTT - Turn_around_delay) x SV) / 2**

Advantages: simple, no clock synchronisation needed.
Limitations: slower (must wait for reply), turn-around delay uncertainty adds range error.

#### One-Way Ranging (Common Clock / Synchronised)

Transponders transmit at precisely known times, synchronised to a common clock (typically acoustic clock sync from a master unit or internal atomic clock). The mobile unit measures the one-way travel time.

**Range = Travel_time x SV**

Advantages: faster update rate (all transponders transmit simultaneously or in rapid sequence), no turn-around delay error.
Limitations: requires precise clock synchronisation (typically better than 10 microseconds for centimetre accuracy). Clock drift must be monitored and corrected.

### Array Calibration

Array calibration determines the precise position of each seabed transponder. This is the most critical step in LBL operations. The position accuracy of everything downstream depends on the quality of this calibration.

#### Surface Calibration (Vessel Circle Method)

1. Deploy transponders at planned locations
2. The vessel circles the array with GNSS providing the vessel position
3. The vessel's hull-mounted transceiver interrogates each transponder at multiple positions around the array
4. Using the GNSS positions and the measured ranges, compute transponder positions by least-squares adjustment
5. Multiple circuits at different headings improve the solution

!!! info "Calibration Quality Indicators"
    - Position residuals (observed - computed ranges): should be < 0.10 m RMS
    - Baseline length consistency: inter-transponder distances should agree between calibrations within 0.05 m
    - Position standard deviation from least-squares: horizontal < 0.50 m for surface calibration (depends on depth and USBL quality)

#### Subsea Calibration (Direct Baseline Measurement)

1. An ROV visits pairs of transponders, measuring the direct range between them
2. This gives the inter-transponder baseline lengths with high accuracy (the measurement is horizontal, short range, and not affected by surface conditions)
3. Combined with approximate transponder positions (from deployment coordinates or surface calibration), the direct baselines constrain the array geometry
4. Used when surface calibration is impractical (very deep water) or when higher accuracy is needed

#### Calibration with INS Aiding

Modern approaches use an INS-equipped ROV to calibrate the array:

1. The ROV flies through the array while collecting LBL ranges and INS data
2. Post-processing simultaneously estimates the ROV trajectory and transponder positions (SLAM approach)
3. This method is faster than traditional methods and can achieve comparable or better accuracy

### Position Computation

With calibrated transponder positions and range measurements, the mobile unit's position is computed by:

1. **Range-range intersection**: the intersection of spheres centred on each transponder with radius equal to the measured range. With 3 ranges in 2D, two possible solutions exist (above and below the array plane); the correct one is selected based on a priori knowledge.

2. **Least-squares adjustment**: with more than the minimum number of ranges (redundancy), a least-squares adjustment finds the position that best fits all measurements. Ranges are weighted by their expected quality (closer ranges get higher weight). Observations that deviate by more than a threshold (typically 3 sigma) are rejected as outliers.

The least-squares residuals provide a real-time quality indicator. Large residuals indicate a problem (SV error, transponder failure, multipath, clock drift).

### Sound Velocity Dependence

!!! danger "LBL Is More SV-Sensitive Than USBL"
    LBL acoustic paths are longer and more horizontal than USBL paths. A horizontal path crosses the thermocline at a shallow angle, spending more distance in the SV gradient zone. This makes LBL more sensitive to SV errors than USBL, which has a primarily vertical path.

Sound velocity effects on LBL:

- A 1 m/s SV error over a 500 m path produces a 0.33 m range error (500 / 1500 = 0.33 m per m/s)
- Ray bending causes the acoustic path to curve, so the straight-line range is not the same as the acoustic range
- Proper ray-tracing through the full water column SVP is essential for accurate range computation
- SVPs must be current (taken within hours, not days) and representative of the survey area

### Achievable Accuracies

| Scenario | Water Depth | Array Baseline | Achievable Horizontal Accuracy |
|:-:|:-:|:-:|:-:|
| Shallow water, good geometry | < 100 m | 100-300 m | 0.01-0.03 m |
| Moderate depth, standard array | 100-500 m | 300-1000 m | 0.02-0.05 m |
| Deep water, good SV control | 500-2000 m | 500-2000 m | 0.03-0.10 m |
| Very deep water, challenging SV | > 2000 m | 1000-3000 m | 0.05-0.15 m |

!!! note "Accuracy vs Precision"
    The figures above represent precision (repeatability) of the LBL system. Absolute accuracy depends additionally on the accuracy of the array calibration, which is bounded by the GNSS/USBL accuracy used during calibration. An array calibrated with a USBL system accurate to 0.50 m will have transponder positions accurate to approximately 0.50 m, even though the LBL positions relative to the array are accurate to centimetres.

### Sparse LBL and INS-Aided LBL

Traditional LBL uses a dense array (4-6+ transponders) surrounding the work area. Modern approaches reduce the infrastructure:

**Sparse LBL**: uses 1-3 transponders with INS aiding. The INS provides short-term position accuracy (seconds to minutes), while periodic LBL range measurements correct INS drift. This works because the INS fills in between LBL updates, and the LBL prevents long-term drift.

**SLAM/INS-aided positioning**: the INS trajectory and transponder positions are estimated simultaneously. This allows the system to operate with fewer transponders and to be more tolerant of initial transponder position uncertainty.

Both approaches trade infrastructure complexity for system complexity (high-grade INS required). See the [INS-Based Metrology (SLAM)](../rov/ins-based-metrology.md) article for details.

### Common Applications

| Application | Typical Array | Accuracy Requirement |
|:--|:--|:-:|
| Subsea metrology (hub-to-hub) | 4-6 transponders around work area | 0.01-0.05 m |
| DP reference | 3-4 transponders, wide spread | 0.50-2.0 m |
| Construction positioning | 4-6 transponders, optimised for target | 0.05-0.20 m |
| Pipeline tie-in | 4-6 transponders near tie-in location | 0.02-0.10 m |
| Mooring installation | 3-4 transponders per mooring cluster | 0.50-1.0 m |

### Frequency Management

In environments with multiple LBL arrays operating simultaneously (e.g., multiple construction activities), acoustic frequency management is critical.

- Each transponder needs its own frequency or time slot to avoid interference
- Guard bands between frequencies prevent cross-triggering
- Plan channel allocation before deployment and document it
- Common frequency bands: 19-36 kHz (deep water, long range), 35-55 kHz (moderate depth), 50-110 kHz (shallow water, high update rate)
- Wideband systems use coded pulses and can share bandwidth more efficiently than narrowband systems

---

## :material-clipboard-check-outline: Prerequisites

- [x] Transponders charged/powered and functionally tested before deployment
- [x] Array geometry designed and DOP analysis completed
- [x] Frequency/channel allocation planned (especially in multi-array environments)
- [x] Deployment positions planned with consideration for seabed conditions and acoustic shadowing
- [x] SVP taken within 4 hours of calibration, covering full water column
- [x] Vessel GNSS and USBL operational (for surface calibration)
- [x] Navigation software configured for LBL operations

---

## :material-list-status: Procedure

### Step 1: Transponder Preparation and Deployment

1. Test each transponder on deck: verify acoustic reply, telemetry, battery status, clock
2. Record serial numbers, firmware versions, and channel/frequency allocations
3. Deploy transponders at planned positions using ROV placement (preferred for accuracy) or free-fall deployment (acceptable for initial placement)
4. After deployment, verify each transponder is responding to interrogation
5. Measure approximate positions (USBL position of each transponder after deployment) as seed positions for calibration

### Step 2: Array Calibration

1. Take a fresh SVP covering the full water column
2. Load the SVP into the navigation software and LBL processing software
3. Perform surface calibration: vessel circles the array at slow speed (2-4 knots), collecting GNSS positions and LBL ranges for minimum 3 complete circuits at different vessel headings
4. Process the calibration data: compute transponder positions by least-squares adjustment
5. Check residuals: should be < 0.10 m RMS for each transponder
6. Check inter-transponder baseline lengths against expected values from the deployment positions
7. If subsea calibration is required, fly the ROV between transponder pairs and measure direct baselines

### Step 3: Verification

1. After calibration, position the ROV or vessel at a known location (e.g., on a calibrated USBL position or a previously surveyed target)
2. Compare the LBL position against the independent reference
3. Agreement should be within the array's expected accuracy plus the reference system's accuracy
4. Run the ROV through the array and monitor position residuals for consistency

### Step 4: Operational Use

1. Monitor range residuals in real-time. Rising residuals indicate SV change, clock drift, or transponder issues
2. Take regular SVPs (every 6-12 hours, or more frequently if conditions change)
3. Monitor transponder battery levels via telemetry
4. If a transponder stops responding, assess the impact on geometry (DOP) and decide whether to continue or redeploy
5. Re-calibrate if SVP conditions change significantly or if inter-baseline lengths drift

---

## :material-check-decagram: Acceptance Criteria

| Parameter | Pass | Investigate |
|:--|:-:|:-:|
| Calibration range residuals (RMS) | < 0.10 m | > 0.20 m |
| Inter-transponder baseline repeatability | Within 0.05 m between calibrations | Difference > 0.10 m |
| Position residuals during operations | < 0.15 m RMS | > 0.30 m |
| LBL vs independent reference (USBL or known target) | Within combined accuracy budget | Exceeds 2x expected accuracy |
| DOP at work site | < 2.0 | > 3.0 |
| SVP age during operations | < 6 hours | > 12 hours |
| Transponder battery remaining | > 30% | < 15% |

---

## :material-wrench: Troubleshooting

### Rising Range Residuals

**Symptom**: LBL range residuals gradually increase over time.

**Cause**: Sound velocity profile has changed (temperature, salinity, current). The SV used for range computation no longer matches the water column.

**Action**:

1. Take a new SVP
2. Load it into the processing software
3. Residuals should drop back to normal
4. If they do not, check for clock drift (one-way ranging systems) or transponder movement

### Position Jumps or Outliers

**Symptom**: LBL position occasionally jumps by several metres then returns.

**Cause**: Acoustic multipath (reflection from vessel hull, seabed structures, or thermocline), or interference from another acoustic source.

**Action**:

1. Check for nearby acoustic sources (other USBL systems, echosounders, sub-bottom profilers)
2. Check if jumps correlate with ROV proximity to structures (multipath)
3. Increase the outlier rejection threshold or tighten the gate window
4. If multipath is from structures, consider repositioning the affected transponder

### Transponder Not Responding

**Symptom**: One transponder stops replying to interrogation.

**Action**:

1. Check battery status (last known telemetry reading)
2. Try interrogating at different power levels
3. Check for acoustic shadowing (is the ROV or vessel in a position where the path to the transponder is blocked by seabed topography?)
4. Verify the channel/frequency allocation has not been changed
5. If the transponder is confirmed dead, assess DOP impact and continue with remaining transponders or deploy a replacement

### Poor Geometry (High DOP)

**Symptom**: Position uncertainty is larger than expected despite good individual range measurements.

**Cause**: Array geometry is poor for the current operating position (all transponders on one side, or at similar range).

**Action**:

1. Move the operation to a location within the array with better geometry
2. If possible, deploy an additional transponder to improve geometry at the work location
3. Accept the degraded accuracy if it still meets the project specification

### Baseline Length Drift

**Symptom**: Computed inter-transponder distances change over time (by more than 0.05 m).

**Cause**: Transponder has moved (scour, current, trawl impact), or systematic SV error.

**Action**:

1. Take a new SVP and re-compute baselines
2. If baselines still disagree with calibration values, suspect physical transponder movement
3. Re-calibrate the affected transponder position
4. If movement is ongoing (scour), consider re-deploying the transponder on a more stable location

---

## :material-link-variant: Related Articles

- [USBL Theory and Error Budgets](../calibration/usbl-theory-and-error-budgets.md)
- [Subsea Metrology Overview](../rov/metrology-overview.md)
- [INS-Based Metrology (SLAM)](../rov/ins-based-metrology.md)
- [Sound Velocity Operations](../calibration/sound-velocity-operations.md)
- [Coordinate Systems and Datums](../reference/coordinate-systems-datums.md)

---

## :material-table: Quick Reference

| Parameter | Typical Value |
|:--|:-:|
| Minimum transponders for 2D position | 3 |
| Recommended transponders for operations | 4-6 |
| Baseline length vs water depth ratio | 0.5-2.0x |
| Achievable accuracy (good conditions) | 0.01-0.10 m |
| Calibration residuals (pass) | < 0.10 m RMS |
| Baseline repeatability (pass) | < 0.05 m |
| SVP refresh interval | Every 6-12 hours |
| Maximum DOP at work site | < 2.0 |
| Range error per 1 m/s SV error per 500 m path | ~0.33 m |
| Turn-around delay (typical transponder) | 2-50 ms |

---

!!! quote "References"
    - IMCA S 017, Guidelines for Positioning Systems
    - IMCA S 015, Guidelines for USBL Systems (includes LBL comparison)
    - Sonardyne, Kongsberg, iXblue system documentation
    - IHO S-44, Edition 6.1.0, Standards for Hydrographic Surveys
