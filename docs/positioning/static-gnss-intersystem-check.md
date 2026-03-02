---
title: Static GNSS Intersystem Check
category: positioning
tags: [gnss, intersystem, static, comparison, positioning, verification, dgnss, ppp, alongside, multipath]
equipment: [Primary GNSS System, Secondary GNSS System, Heading and Attitude System, NaviPac/Qinsy]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: converted_procedure
---

# :material-satellite-variant: Static GNSS Intersystem Check

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Positioning</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Intersystem Check</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Quantify the agreement between primary and secondary GNSS positioning systems by logging both simultaneously while the vessel is static alongside. This test confirms that antenna offsets are correctly applied, that correction services are functioning, and that both systems produce positions within specification before sailing for survey operations.

---

## :material-calendar-check: When to Use

Perform this check:

- **Every mobilisation**, alongside before sailing
- After any GNSS antenna re-installation, cable change, or bracket modification
- After changes to antenna offset values in the navigation software
- When switching correction service provider or type (e.g. from Fugro to Veripos, or DGNSS to PPP)
- After a suspected GNSS fault or anomalous position data during operations
- When a new GNSS receiver is added to the spread

---

## :material-book-open-variant: Theory and Principles

### Why Static First

A static alongside check isolates GNSS performance from vessel dynamics, heading errors, and lever arm computation effects. If positions disagree when the vessel is stationary, they will disagree worse when moving. The static test provides a clean baseline for system comparison.

### Correction Service Types

The acceptance criteria depend on the correction service in use:

| Service Type | Typical Horizontal Accuracy (95%) | Convergence Time |
|-------------|:---------------------------------:|:----------------:|
| **DGNSS** (e.g. Fugro Seastar, Veripos Standard) | 1.0 to 2.0 m | Immediate |
| **PPP** (e.g. Veripos Ultra, Fugro Starfix HP, TerraStar-C) | 0.10 to 0.30 m | 20 to 40 minutes |
| **RTK** (shore-based or vessel-to-vessel) | 0.02 to 0.05 m | Seconds (with fix) |

!!! info "PPP Convergence"
    PPP services require convergence time before achieving full accuracy. Do not start the comparison logging until both PPP receivers report a converged solution. Most receivers indicate this via a position quality indicator or HDOP/PDOP value stabilisation.

### Multipath in Port

Port environments are harsh for GNSS. Cranes, container stacks, vessel superstructure, and buildings cause signal reflections (multipath). This degrades position accuracy and increases scatter. Multipath effects are a fact of port operations, not necessarily a system fault.

!!! warning "Port Multipath Awareness"
    Expect higher scatter alongside than in open water. Compare the **pattern** of scatter between systems rather than absolute accuracy. Both systems should show similar scatter characteristics. Do not fail a system solely because of port multipath if the scatter pattern is consistent between receivers and the mean positions agree.

---

## :material-tools: Equipment Required

| Equipment | Role |
|-----------|------|
| Primary GNSS receiver and antenna | Primary position source |
| Secondary GNSS receiver and antenna | Comparison position source |
| Correction service (DGNSS, PPP, or RTK) | Position corrections |
| Heading and attitude system | For CRP computation from antenna positions |
| Navigation/acquisition software (NaviPac, Qinsy, or SurveyTool) | Simultaneous data logging at CRP |

---

!!! info "Prerequisites"

    - Vessel securely moored alongside. No significant vessel movement (avoid logging during large cargo or ballast operations).
    - Both GNSS receivers powered on and tracking satellites with active correction service.
    - PPP receivers **fully converged** before logging begins (check receiver diagnostics).
    - Antenna offsets from the dimensional control survey entered in the navigation software. Both systems computing position at the **same Common Reference Point (CRP)**.
    - Same correction service type on both receivers if possible. If different services must be used (e.g. primary on PPP, secondary on DGNSS), document this and apply the appropriate tolerance for each.
    - No crane operations directly above or adjacent to the GNSS antennas during logging.

---

## :material-list-status: Procedure

### Step 1: Verify System Configuration

Before logging, confirm for each GNSS system:

| Check | Detail |
|-------|--------|
| Antenna offsets | Match the dimensional control survey report (X, Y, Z from CRP) |
| Correction service | Active, receiving corrections, correction age < 10 sec |
| Coordinate reference | Both systems outputting in the same datum and projection |
| Output rate | 1 Hz minimum |
| Satellite count | Minimum 6 satellites tracked on each receiver |
| HDOP | Below 3.0 on each receiver |
| PPP convergence | Confirmed converged (if using PPP) |

### Step 2: Configure Logging

Set up the navigation software to log CRP position from both GNSS systems simultaneously, along with quality indicators.

**Logging parameters (1 Hz):**

| Parameter | Record |
|-----------|--------|
| Date and time (UTC) | yyyy-mm-dd hh:mm:ss.sss |
| GNSS 1: Easting, Northing, Height | Grid coordinates at CRP |
| GNSS 1: Latitude, Longitude | Geographic coordinates |
| GNSS 1: HDOP, satellites, correction age, correction service | Quality indicators |
| GNSS 2: Easting, Northing, Height | Grid coordinates at CRP |
| GNSS 2: Latitude, Longitude | Geographic coordinates |
| GNSS 2: HDOP, satellites, correction age, correction service | Quality indicators |

### Step 3: Record Data

| Parameter | Requirement |
|-----------|-------------|
| **Duration** | Minimum 30 minutes. 1 hour preferred. |
| **Sampling rate** | 1 Hz |
| **Vessel state** | Static alongside, no crane ops above antennas |
| **Environmental conditions** | Record weather, note any obstructions to sky view |

!!! tip "Longer is Better for PPP"
    For PPP systems, a longer recording period (1 hour or more) provides a better characterisation of the converged solution and helps identify any re-convergence events.

### Step 4: Analyse Results

For each GNSS system, compute:

1. **Mean** Easting, Northing, and Height
2. **Standard deviation** of Easting, Northing, and Height
3. **2D RMS** position scatter: 2DRMS = 2 x sqrt(SD_E^2 + SD_N^2)
4. **Mean HDOP**, **mean correction age**, **mean satellite count**

Then compute the intersystem comparison:

| Parameter | GNSS 1 Mean | GNSS 2 Mean | Difference | Tolerance | Pass/Fail |
|-----------|:-----------:|:-----------:|:----------:|:---------:|:---------:|
| Easting (m) | 670811.05 | 670811.18 | 0.13 | See criteria | |
| Northing (m) | 6397125.88 | 6397125.72 | 0.16 | See criteria | |
| **2D Horizontal** | | | **0.21** | See criteria | |
| Height (m) | 55.62 | 55.48 | 0.14 | See criteria | |

Plot:

- Time series of Easting and Northing for both systems overlaid
- Scatter plot (Easting vs Northing) for both systems
- Time series of HDOP and correction age for both systems

### Step 5: Document and Report

Compile a test report including:

- Equipment table (receiver make/model, serial number, antenna type, correction service)
- Antenna offset values applied
- Environmental conditions and sky view assessment
- Statistical summary table
- Time series and scatter plots
- Pass/fail statement against acceptance criteria
- Any multipath observations or anomalies explained

---

## :material-check-decagram: Acceptance Criteria

!!! success "Pass Criteria"

    **Horizontal position agreement between systems:**

    | Correction Service | 2D Horizontal Tolerance | Height Tolerance |
    |-------------------|:----------------------:|:----------------:|
    | **DGNSS** | &le; 1.0 m (2D RMS) | &le; 1.5 m |
    | **PPP** (converged) | &le; 0.30 m (2D RMS) | &le; 0.50 m |
    | **RTK** (fixed) | &le; 0.10 m (2D RMS) | &le; 0.15 m |

    **Quality indicator thresholds (each system individually):**

    | Parameter | Threshold |
    |-----------|:---------:|
    | **HDOP** | &le; 3.0 throughout recording |
    | **Correction age** | &le; 10 seconds throughout recording |
    | **Satellite count** | &ge; 6 throughout recording |
    | **Position SD** (individual system) | Consistent with correction service specification |

!!! warning "Mixed Correction Services"
    If the two systems use different correction services (e.g. primary on PPP, secondary on DGNSS), the comparison tolerance is governed by the **less accurate** service. A PPP vs DGNSS comparison should use the DGNSS tolerance of 1.0 m horizontal.

---

## :material-wrench: Troubleshooting

| Symptom | Likely Cause | Action |
|---------|-------------|--------|
| Horizontal offset > tolerance | Wrong antenna offsets in navigation software, or different datums/projections | Verify offsets match DC survey. Confirm both systems use the same datum and projection. |
| Height disagreement but horizontal OK | Different geoid model, antenna height offset error, or one system on different vertical reference | Check vertical reference and geoid model settings on both receivers. |
| Large scatter on one system, not the other | Antenna cable fault, correction service dropout, or antenna partially obstructed | Check cable connections. Verify correction service is active. Check for overhead obstructions near that antenna. |
| Both systems show high scatter | Port multipath (normal alongside), or both correction services degraded | Compare scatter patterns. If both show similar scatter, likely multipath. Note in report and compare mean positions. |
| Correction age > 10 sec on one system | Correction data link fault, receiver not decoding corrections | Check correction input (serial, network). Verify receiver is configured for the correct correction format. |
| HDOP spikes during recording | Satellites dropping out due to obstructions | Identify the time of spikes and correlate with vessel operations (crane movement, etc.). Exclude affected periods from the mean calculation if necessary. |
| PPP positions drifting | Receiver has not fully converged, or re-convergence event | Allow more convergence time. Check for correction service interruptions that would trigger re-convergence. |
| Systematic offset in one direction | Antenna offset sign error (e.g. port/starboard reversed) | Common error. Check X/Y sign convention in the navigation software. |

---

## :material-link-variant: Related Articles

- [GNSS Fundamentals](gnss-fundamentals.md)
- [Dynamic GNSS Intersystem Check](dynamic-gnss-intersystem-check.md)
- [DGNSS Integrity Check](dgnss-integrity-check.md)

---

!!! quote "References"
    - IMCA S 017, Guidelines for Position Reference Systems
    - Correction service specifications (Fugro, Veripos, Trimble)
    - GNSS receiver manufacturer documentation
