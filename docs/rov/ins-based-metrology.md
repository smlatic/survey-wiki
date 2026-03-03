---
title: INS-Based Metrology (SLAM)
category: rov
tags: [slam, ins-metrology, metrology, inertial, positioning, navigation-grade, sparse-lbl]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: original
---

# :material-navigation-variant: INS-Based Metrology (SLAM)

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>ROV Operations</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Reference Guide</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Comprehensive guide to INS-based subsea metrology using Simultaneous Localisation and Mapping (SLAM) techniques. Covers the principles of INS-aided metrology, comparison with traditional LBL methods, system requirements, survey pattern design, data processing, achievable accuracies, QC metrics, and guidance on when to use SLAM vs traditional approaches.

---

## :material-calendar-check: When to Use

Refer to this article:

- When planning a subsea metrology campaign using INS-based methods
- When deciding between SLAM and traditional LBL metrology
- When designing survey patterns for INS-based metrology
- When assessing achievable accuracy for a specific metrology scope
- When processing and validating SLAM metrology results

---

## :material-information-outline: Overview

INS-based metrology (commonly called SLAM) uses a high-grade inertial navigation system on an ROV to determine the relative positions of subsea structures by navigating between them. Instead of relying on fixed seabed transponder arrays (traditional LBL), SLAM uses the INS trajectory -- aided by DVL, USBL, and/or sparse acoustic ranges -- to transfer position between measurement points. The INS provides continuous, high-rate, smooth positioning between acoustic observations, while acoustic aiding constrains the INS drift.

The key advantage is speed: a SLAM metrology survey can be completed in hours rather than the days required for traditional LBL array deployment, calibration, and observation. The trade-off is that SLAM accuracy depends heavily on INS grade, aiding quality, and survey pattern design.

---

## :material-book-open-variant: Theory and Principles

### How SLAM Metrology Works

1. The ROV carries a navigation-grade INS (with DVL for velocity aiding) and approaches each metrology hub or target
2. At each target, the ROV performs acoustic ranges and/or visual observations to determine the offset between the INS reference point and the metrology target
3. The INS trajectory between targets provides the vector connecting them
4. Post-processing uses a Kalman filter or equivalent estimator to simultaneously solve for the INS trajectory and the target positions, constraining INS drift using all available aiding data

The "simultaneous" in SLAM means the target positions and the vehicle trajectory are estimated together. Revisiting targets from different directions provides redundancy and improves the solution.

### Comparison with Traditional LBL Metrology

| Aspect | Traditional LBL | INS-Based (SLAM) |
|:--|:--|:--|
| Array deployment | Required (4-6 transponders per baseline) | Not required (or minimal -- sparse LBL) |
| Calibration time | 4-8 hours per array | No array calibration needed |
| Observation time | 2-4 hours per baseline (tidal cycle) | 1-2 hours per baseline |
| Total time per baseline | 12-24 hours | 2-6 hours |
| Accuracy (typical) | 0.01-0.03 m | 0.02-0.05 m |
| Accuracy (best case) | < 0.01 m | < 0.02 m |
| SV sensitivity | High (long ray paths) | Lower (shorter ranges, INS bridges gaps) |
| Water depth limit | Transponder range limit (~5000 m) | INS drift becomes critical at depth |
| Redundancy | Multiple independent observations | Revisits and crossing trajectories |
| Equipment cost | Transponder array + deck unit | Navigation-grade INS (high cost) |

### INS Drift and Aiding

An unaided INS drifts over time. The drift rate depends on the INS grade:

| INS Grade | Typical Drift Rate | Examples |
|:--|:--|:--|
| Navigation grade | 0.005-0.02 m/min | Kongsberg HAIN, iXblue PHINS, Sonardyne SPRINT |
| Tactical grade | 0.1-1.0 m/min | Lower-cost FOG-based systems |
| MEMS | > 1.0 m/min | Not suitable for metrology |

!!! danger "INS Grade is Critical"
    SLAM metrology requires a navigation-grade INS. Tactical-grade or MEMS systems drift too fast to maintain the inter-target accuracy needed for metrology. Do not attempt SLAM metrology with a system that is not rated for this application.

Aiding sources that constrain INS drift:

- **DVL**: provides velocity aiding (velocity error typically < 0.1% of distance travelled). DVL bottom lock is essential -- if bottom lock is lost, the INS drifts freely.
- **USBL**: provides absolute position updates (accuracy 0.1-1% of slant range). Less accurate than LBL but available continuously.
- **Sparse LBL**: 1-3 seabed transponders providing range observations. Much fewer than a traditional array but enough to constrain INS drift in the survey area.
- **Pressure sensor**: constrains vertical drift.

### Key Accuracy Drivers

1. **INS grade**: determines the free-drift rate between aiding updates
2. **DVL quality**: velocity error propagates directly into position error over time
3. **Acoustic aiding frequency**: more frequent USBL/LBL updates = less INS drift accumulation
4. **Survey pattern**: revisiting targets from multiple headings provides geometric strength
5. **Dwell time at targets**: longer dwell = more acoustic observations = better target position
6. **SV accuracy**: affects acoustic range accuracy (though less critical than for traditional LBL)

---

## :material-clipboard-check-outline: Prerequisites

- [x] Navigation-grade INS installed on ROV, aligned, and DVL bottom-locked
- [x] DVL calibrated (scale factor verified, misalignment < 2 deg)
- [x] USBL calibrated and operational (or sparse LBL array deployed)
- [x] Metrology targets (hubs, COMPATTs, or equivalent) installed on structures
- [x] Current SVP available for acoustic range corrections
- [x] Survey pattern designed with adequate revisits and geometry
- [x] Processing software available (manufacturer-specific or third-party)

---

## :material-list-status: Procedure

### Step 1: Planning

1. Identify all metrology targets (hubs, connection points, padeyes)
2. Design a survey pattern that visits each target a minimum of 3 times from different headings (4-6 visits preferred)
3. Plan approach headings at each target to maximise geometric diversity (e.g., N, E, S, W approaches)
4. Define dwell time at each target (minimum 2 minutes for acoustic observations, 5 minutes preferred)
5. Plan total survey duration to stay within INS drift budget

!!! tip "Pattern Design"
    The best SLAM patterns are figure-8 or clover-leaf shapes that repeatedly cross the baseline. Each crossing provides a constraint that ties the forward and return trajectories together. A simple out-and-back pattern provides the weakest geometry.

### Step 2: INS Alignment and Verification

1. Verify INS alignment is complete (check manufacturer alignment status)
2. Verify DVL has stable bottom lock (4-beam lock preferred)
3. Verify USBL/LBL is providing position updates at expected rate
4. Check INS health indicators (Kalman filter convergence, position SD)
5. Perform a short verification run to confirm INS performance before starting metrology

### Step 3: Data Acquisition

1. Begin logging all sensor data (INS, DVL, USBL/LBL, pressure, acoustic ranges to targets)
2. Navigate to first target along planned route
3. At each target:
    - Approach slowly (< 0.3 knots) and stabilise position
    - Dwell for the planned observation time
    - Record acoustic ranges / baseline observations
    - Note any environmental conditions (current, visibility)
4. Transit between targets at moderate speed (0.5-1.5 knots), maintaining DVL bottom lock
5. Revisit targets per the survey pattern
6. Monitor INS drift indicators throughout (position SD should not grow excessively between aiding updates)

!!! warning "DVL Bottom Lock"
    If DVL bottom lock is lost during transit between targets, the INS position degrades rapidly. If bottom lock is lost for more than 30 seconds, the metrology observation should be treated with caution. Consider repeating the affected segment.

### Step 4: Data Processing

1. Export all sensor data to the metrology processing software
2. Run the SLAM/Kalman filter solution:
    - Forward filter pass
    - Backward smoother pass (uses data from after each epoch to improve earlier estimates)
    - Combined smoothed solution
3. Review the trajectory quality:
    - Position SD should decrease after each target revisit
    - Forward and backward solutions should agree within the stated uncertainty
4. Extract target positions from the smoothed solution
5. Compute baselines between targets
6. Assess baseline uncertainties from the filter covariance

### Step 5: Quality Assessment

1. **Internal consistency**: compare baseline estimates from different revisit pairs. Spread should be within the stated uncertainty.
2. **Forward-backward agreement**: compare forward-only and backward-only baseline estimates. Difference should be < 2x stated uncertainty.
3. **Repeatability**: if the survey is repeated (recommended for critical measurements), baselines should agree within combined uncertainty.
4. **Comparison with acoustic checks**: if independent acoustic ranges were measured (e.g., hub-to-hub transponder baseline), compare with SLAM result.
5. **Residuals**: check acoustic measurement residuals in the filter. Large residuals indicate outliers or systematic errors.

---

## :material-check-decagram: Acceptance Criteria

| Parameter | Requirement |
|:--|:--|
| INS grade | Navigation-grade (drift < 0.02 m/min) |
| DVL bottom lock | Maintained for > 95% of survey |
| Minimum target revisits | 3 per target (4-6 preferred) |
| Approach headings per target | Minimum 3 distinct headings (> 60 deg separation) |
| Dwell time per target | Minimum 2 minutes (5 minutes preferred) |
| Forward-backward baseline agreement | < 0.03 m for baselines < 100 m |
| Baseline repeatability (if repeated) | < 0.03 m |
| Position SD from filter | < 0.02 m at target dwell periods |
| Acoustic residuals | < 0.05 m RMS |
| Baseline uncertainty (1-sigma) | < 0.02 m for baselines < 100 m |

!!! info "Client-Specific Requirements"
    Many metrology campaigns have client-specified accuracy requirements (e.g., baseline accuracy < 20 mm at 95% confidence). Verify these requirements are achievable before mobilisation based on INS grade, water depth, and planned survey geometry.

---

## :material-wrench: Troubleshooting

### Baseline Estimates Not Converging

**Possible causes**:

1. Insufficient revisits (add more target visits)
2. Poor heading diversity at targets (approach from different directions)
3. INS drift rate too high (check INS health, DVL aiding)
4. Acoustic outliers corrupting the solution (check residuals, reject outliers)

### Forward-Backward Solutions Disagree

**Possible causes**:

1. DVL bottom lock lost during transit (check DVL log for lock status)
2. Sudden current change affecting dead reckoning between aiding updates
3. USBL multipath near structures (common around jacket legs and risers)
4. INS alignment degraded (thermal effects, vibration)

**Action**: identify the time period of disagreement, check sensor logs for anomalies, consider reprocessing with that segment excluded or downweighted.

### USBL Multipath Near Structures

**Symptoms**: USBL position jumps or scatter when ROV is near vertical steelwork.

**Action**:

1. Increase USBL rejection threshold during close-approach periods
2. Rely more heavily on INS + DVL during structure approaches
3. If using sparse LBL, position the transponders with clear acoustic paths (away from structural reflectors)
4. Process with USBL observations near structures downweighted

### High Acoustic Residuals at Specific Targets

**Possible causes**:

1. Target partially obscured (silt, marine growth, incorrect reflector orientation)
2. SV error at target depth (check SVP validity)
3. Target has moved since installation (subsidence, scour)
4. Wrong target identity (transponder address mismatch)

---

## :material-link-variant: Related Articles

- [Subsea Metrology Overview](metrology-overview.md)
- [LBL Acoustic Positioning Fundamentals](../positioning/lbl-fundamentals.md)
- [INS/DVL Calibration Guide](../positioning/ins-dvl-calibration-guide.md)
- [INS Theory and Principles](../positioning/ins-theory-and-principles.md)
- [USBL Theory and Error Budgets](../positioning/usbl-theory-and-error-budgets.md)
- [Construction Support Survey](construction-support-survey.md)

---

## :material-table: Quick Reference

| Parameter | Typical Value |
|:--|:-:|
| INS drift rate (nav grade) | 0.005-0.02 m/min |
| Minimum target revisits | 3 (4-6 preferred) |
| Minimum approach headings | 3 per target |
| Dwell time per target | 2-5 minutes |
| Transit speed between targets | 0.5-1.5 knots |
| Achievable baseline accuracy | 0.02-0.05 m |
| DVL bottom lock requirement | > 95% of survey |
| Baseline forward-backward check | < 0.03 m |

---

!!! quote "References"
    - IMCA S 017, Guidelines for Positioning Systems
    - Manufacturer documentation for navigation-grade INS metrology processing
    - Project-specific metrology specification
