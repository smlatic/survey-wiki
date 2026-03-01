---
title: INS/DVL Calibration Guide
category: calibration
tags: [ins, dvl, calibration, verification, rovins, phins, sprint, sprint-nav, delphinss, janus, inertial navigation, doppler velocity log, ROV, alignment]
equipment: [INS/IMU, DVL, USBL System, ROV, DelphINS Software, Janus Software]
date_added: 2026-03-01
source_type: converted_procedure
---

# :material-tune-vertical: INS/DVL Calibration Guide

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Calibration</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Calibration Guide</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Comprehensive guide for the calibration and verification of INS/DVL systems used in offshore survey operations. Covers planning, execution, processing for both Exail and Sonardyne platforms, and the critical principle that verification must always be performed on independent data.

---

## :material-alert-outline: Why DVL Calibration Matters

Without DVL aiding, a standard offshore INS drifts approximately **12 m in 4 minutes**. Extrapolated, this means roughly **900 m of error in 20 minutes** of free inertial navigation. The DVL is the single most important aiding sensor for subsea INS operations, reducing drift to **0.02%-0.06% of distance travelled**.

This makes the DVL-to-INS alignment calibration one of the most critical calibration activities in the survey spread. When dynamic, INS drift is primarily affected by DVL misalignment -- the calibration directly controls the quality of the aided solution.

!!! danger "Pre-Calibrated Systems Preferred"
    Unless unavailable in the market, an INS/DVL system should **always be supplied as a mechanically coupled and pre-calibrated system**. Calibration offshore is inevitably less accurate than what a supplier can achieve near shore using RTK GNSS on a pole-mounted deployment in shallow water.

    **Factory calibration values take precedence** unless proven otherwise through a properly executed verification.

---

## :material-clipboard-check-outline: Planning and Preparation

### When Calibration Is Required

A full DVL calibration should only be attempted in these specific circumstances:

- The unit is **not pre-calibrated** or has been supplied as a separate INS and DVL
- A coupled unit has been **de-coupled** (or has loose bolts) and needs re-calibration before use
- A verification has indicated that a previous alignment is **no longer valid**
- The client prescribes a calibration against standard advice, and this requirement is clearly documented

!!! info "In All Other Cases"
    Sufficient accuracy can usually be achieved with approximate or default values, tweaked by a regular **verification procedure**. For demanding scopes of work, post-processing (forward and backward calculation) offers better accuracy than calibration using USBL.

### Calibration Line Planning

The calibration is done by moving at constant speed over a predetermined distance.

| Factor | Requirement |
|---|---|
| **Minimum distance** | At least **1000 times** the expected positioning error of the reference positioning system |
| **Trajectory** | Travelling along one straight line is recommended but not mandatory |
| **Alternative patterns** | A figure-of-8 pattern is possible, but ensure every turn is travelled with the same rate of turn |
| **Seabed** | Limited topography, infrastructure, or artefacts along the route |
| **Speed** | Constant speed, maintained throughout the run |
| **Altitude** | Constant, short distance to the seabed |
| **USBL calibration** | If USBL is the reference system, calibrate in reasonably shallow water where USBL is most accurate |

!!! warning
    A USBL system is unlikely to achieve accuracy comparable to the combined INS/DVL accuracy. USBL-based calibration should only be attempted in the specific circumstances listed above.

### Pre-Calibration Checks

Before starting any calibration run:

!!! success "Pre-Calibration Checklist"
    - [x] Gross heading alignment entered in the system (e.g. angular offset for mounting orientation)
    - [x] All offsets and alignments of the INS system properly applied
    - [x] INS fine alignment **completed** with heading SD converged to recommended value or better
    - [x] SVS sensor operational and interfaced into DVL
    - [x] Depth sensor operational
    - [x] Post-processing data output from INS set at minimum **50 Hz** and being recorded
    - [x] DVL has bottom-track lock throughout the planned trajectory

!!! tip "Invest in Fine Alignment"
    A good fine alignment is essential for quality calibration. Extra time invested in the fine alignment pays back directly in calibration quality.

---

## :material-run: Calibration Operations

### ROV Manoeuvre Requirements

The calibration run includes the following requirements:

1. **Static start**: Log a minimum of **5 minutes** of static data at the starting point before beginning the calibration run
2. **Target speed**: At least **2 knots**, but faster (5-6 knots) is recommended as this improves the scale factor estimate
3. **Constant speed**: Speed should be as constant as possible during the run
4. **Constant altitude**: Maintain a constant distance to the seabed to optimise the scale factor estimate
5. **Monitor DVL**: Ensure the DVL is tracking bottom throughout the run

### Convergence Monitoring

The calibration software will start in a short coarse alignment phase and then switch to a fine alignment phase. The software will inform when **scale, pitch, and heading** have converged within specification (e.g. by values changing colour to indicate convergence on Exail systems).

- Once converged, the calibration can be concluded, but **continuing the run will further improve quality**
- It is recommended to continue up to the planned end point

!!! warning "Troubleshooting Non-Convergence"
    If calibration values or their standard deviations do not start to converge, or seem excessive, in the first few hundred metres of the calibration line, this may indicate a setup problem. **Stop the calibration run** and review the setup (such as positioning system offsets).

---

## :material-cog-outline: Exail Systems (ROVINS / PHINS)

### DelphINS Processing

For Exail systems, the post-processing output is logged in the manufacturer's proprietary MultiLogger and processed in **DelphINS** software.

### Minimum Distance Requirements by Depth

| Depth (m) | Minimum Distance (ROV) | Minimum Distance (ROTV) |
|---|---|---|
| 0-500 | 1 km | 2 km |
| 1000 | 2 km | -- |
| 2000 | 4 km | -- |

!!! warning
    The distance must not be less than **1000 times** the accuracy of the USBL aiding system.

### DVL Configuration Notes

- The newer **PD6** output format is recommended for improved accuracy
- Different formats may have different sign conventions -- switching between formats may require changing the signs of heading, pitch, and roll alignment values on certain legacy systems
- DVL data is improved by sound velocity correction; ensure the SVS is interfaced into the INS system

### Alignment and Calibration Monitoring

- The Exail calibration utility will show when scale, pitch, and heading converge within specification (values turning from orange to blue)
- Ensure heading SD has converged to the recommended value before starting the calibration

---

## :material-lan: Sonardyne Systems (SPRINT-Nav / SPRINT-Nav Mini)

### Pre-Calibrated Units

All Sonardyne SPRINT-Nav and SPRINT-Nav Mini systems come **pre-calibrated**. The calibration values are already loaded into the units, and a **.CCL file** containing these values is supplied for reload if the unit is ever reset.

A stand-alone SPRINT unit co-located with a Syrinx DVL using a mounting plate also usually comes pre-calibrated.

### Janus Processing

If a stand-alone SPRINT INS needs a DVL calibrated offshore, the process is:

1. Fly the ROV over the seabed at approximately **5 m altitude** for a distance of **500 m**
2. Perform manoeuvres including:
    - Acceleration along various axes including up and down
    - Heading changes of approximately **90 degrees** (sideways movement maintained for a few minutes)
    - Random dynamic manoeuvres
3. A total position change of approximately **800 m** should be sufficient
4. The **.bin files** automatically saved in the topside software are loaded into **Janus** post-processing software
5. Janus computes the DVL misalignment values, which are then entered into the topside software

!!! warning "Beam Aiding Limitation"
    If DVL calibration is performed offshore (rather than by the supplier), it is **not suitably accurate** to allow for DVL beam aiding (tightly coupled). The body-aided (loosely coupled) option would need to be selected instead.

### SPRINT Verification Methodology

The verification process for Sonardyne systems uses the SPRINT statistics window and diagnostic windows to monitor the quality of the INS solution. The topside software guides the user through the verification and provides an estimate of system accuracy results.

---

## :material-check-decagram: Verification

### When to Verify

Verification should be performed regularly, but at a minimum:

!!! success "Verification Triggers"
    - [x] After running a calibration
    - [x] After mobilisation onto a vehicle if the unit was pre-calibrated by the supplier
    - [x] When a previous calibration was invalidated by physical disconnection of INS and DVL
    - [x] When there are otherwise doubts about the performance of the system
    - [x] At the start of a project as per client requirements
    - [x] Every **8 weeks** while a system is being operated on an ROV

### Verification Procedure

The verification procedure is largely the same as the calibration procedure, but with all INS aiding methods employed:

| Parameter | Requirement |
|---|---|
| **Minimum run length** | 800 m |
| **Coarse alignment** | Completed to specification SD or better |
| **Fine alignment** | Completed to specification SD or better |
| **All aiding systems** | DVL, USBL, depth -- all operational and used by the INS |
| **SVS sensor** | Operational and used by the DVL |
| **Track monitoring** | Configure a track plot on the navigation system to monitor INS trajectory vs USBL positions |

The INS software will guide the user through the verification and provide an estimate of system accuracy.

---

## :material-shield-check-outline: Critical Principles

!!! danger "Never Verify on the Calibration Dataset"
    Calibration performance must **always** be verified on a **separate part of the data** or a different dataset (e.g. the return leg). Never solely compare performance against the data used for calibration.

!!! warning "Factory Values Take Precedence"
    Factory calibration values take precedence **unless proven otherwise** through a properly executed verification with clearly documented results showing the factory values are no longer valid.

!!! info "Pre-Calibrated Coupled Systems"
    Pre-calibrated, mechanically coupled INS/DVL systems are always preferred because:

    - Suppliers calibrate near-shore using **RTK GNSS** positioning on a pole-mounted deployment in shallow water
    - This achieves significantly better results than what is possible on an ROV offshore
    - LBL positioning can be used offshore as a reference, but USBL is unlikely to match INS/DVL accuracy
    - Any pre-calibrated system comes with documented calibration values and reports (Exail) or calibration files (Sonardyne .CCL)

---

## :material-file-document-outline: Recording and Reporting

Any offsets or corrections must be recorded in the logbook and entered in the appropriate software.

!!! note "Reporting Requirements"
    Present the methodology and results in the calibration report, including:

    - Calibration values calculated (heading, pitch, scale factor)
    - Comparison with factory-derived alignment results
    - Any discrepancies identified and investigated
    - Verification results on independent data
    - Environmental conditions during calibration (water depth, USBL performance, DVL bottom-track quality)

---

## :material-format-list-checks: Quick Reference Summary

| Parameter | Value |
|---|---|
| Free inertial drift (unaided) | ~12 m in 4 min, ~900 m in 20 min |
| DVL-aided drift | 0.02%-0.06% distance travelled |
| Minimum calibration distance | 1000x reference positioning error |
| Minimum verification distance | 800 m |
| Recommended speed | 2 kts minimum, 5-6 kts preferred |
| Static data before run | Minimum 5 minutes |
| Post-processing output rate | Minimum 50 Hz |
| Verification interval | Every 8 weeks (minimum) |
| Pre-cal validity | Typically 1 year |
| Exail min. distance (0-500 m depth) | 1 km (ROV), 2 km (ROTV) |
| Sonardyne offshore cal distance | ~500 m at 5 m altitude |
| Sonardyne total position change | ~800 m |
