---
title: Static AHRS Intersystem Check
category: calibration
tags: [ahrs, intersystem, heading, pitch, roll, static, comparison, verification, gyro, mru]
equipment: [Primary AHRS System, Secondary AHRS System, NaviPac/Qinsy]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: converted_procedure
---

# :material-compare-horizontal: Static AHRS Intersystem Check

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Calibration</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Intersystem Check</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Quantify the agreement between all heading and attitude systems in the survey spread by logging them simultaneously while the vessel is static alongside. This test confirms that offsets from the dimensional control survey are correctly applied, that all systems reference the same heading convention, and that no sensor has drifted or developed a fault since last use.

---

## :material-calendar-check: When to Use

Perform this check:

- **Every mobilisation**, before sailing
- **Minimum once per project**, even on long-duration campaigns
- After any sensor re-installation, cable change, or bracket modification
- After any change to boresight or offset values in the navigation software
- When switching between heading reference sources (e.g. gyro swap)
- After a suspected gyro failure or anomalous attitude readings during operations

---

## :material-book-open-variant: Theory and Principles

All heading and attitude systems on the vessel should output the same values when properly installed and configured. In practice, small systematic biases exist due to installation tolerances, boresight residuals, and sensor-specific errors. The intersystem check quantifies these biases under controlled static conditions, isolating sensor performance from vessel motion effects.

Key considerations:

- **Heading reference**: All systems must output the same heading convention. True heading is standard for survey operations. Magnetic or grid heading will produce systematic offsets if mixed.
- **Settling time**: Gyrocompasses require time to settle after power-on. FOG and RLG gyros settle within minutes. Mechanical gyros (Anschutz, Sperry) can take 4 to 6 hours. MRUs with GNSS-aided heading converge depending on baseline length and satellite geometry.
- **Vessel motion**: Even alongside, swell and passing traffic cause vessel motion. The test captures mean values over a sufficient duration to average out this motion.
- **Statistical comparison**: Mean heading, pitch, and roll values from each system are compared pairwise. The standard deviation of each system's output indicates its noise level. The difference of means indicates the systematic bias between systems.

---

## :material-tools: Equipment Required

| Equipment | Role |
|-----------|------|
| Primary heading/attitude system (e.g. Seapath, PHINS, gyro) | Primary reference |
| Secondary heading/attitude system (e.g. Octans, MRU, second gyro) | Comparison system |
| All additional heading/attitude systems in the spread | Include every system that will be used operationally |
| Navigation/acquisition software (NaviPac, Qinsy, or SurveyTool) | Simultaneous data logging |

---

!!! info "Prerequisites"

    - Vessel securely moored alongside. No crane operations, ballast transfers, or cargo handling during the test.
    - All heading and attitude systems powered on and **fully settled** before recording begins. Allow minimum 30 minutes warm-up for FOG/RLG systems, 4+ hours for mechanical gyros.
    - Dimensional control survey completed and all sensor offsets entered in navigation software.
    - Confirm all systems are outputting **true heading** (not magnetic, not grid).
    - Navigation software configured to receive and log all systems simultaneously.

---

## :material-list-status: Procedure

### Step 1: Verify System Configuration

Before logging, confirm for each system:

| Check | Detail |
|-------|--------|
| Heading reference | True heading (confirm in sensor setup or output telegram) |
| Boresight/offset values | Match the dimensional control survey report |
| Output rate | Minimum 1 Hz |
| Data telegram | Correct message type being parsed (e.g. $HEHDT for heading, $PASHR for attitude) |
| Settling status | System reports aligned/settled (check sensor diagnostic page) |

### Step 2: Configure Logging

Set up the navigation software to log heading, pitch, and roll from **all** heading and attitude systems simultaneously.

**Logging format (comma delimited):**

| Field | Date | Time | System ID | Heading | Pitch | Roll |
|-------|------|------|-----------|---------|-------|------|
| Format | yyyy-mm-dd | hh:mm:ss.sss | text | n.nnn | n.nnn | n.nnn |
| Example | 2026-03-01 | 09:15:32.100 | Seapath380 | 142.356 | 0.127 | -0.892 |

### Step 3: Record Data

| Parameter | Requirement |
|-----------|-------------|
| **Duration** | Minimum 30 minutes. 1 hour preferred. |
| **Sampling rate** | 1 Hz (1 second interval) |
| **Vessel state** | Static alongside, no crane ops |
| **Environmental conditions** | Record wind speed/direction, sea state, any passing vessel traffic |

!!! tip "Record Environmental Conditions"
    Note the weather, sea state, and any significant events (passing vessels, crane operations on adjacent berth) in the log. These help explain any anomalies during analysis.

### Step 4: Analyse Results

For each system, compute:

1. **Mean** heading, pitch, and roll over the full recording period
2. **Standard deviation** of heading, pitch, and roll
3. **Min/Max** values to identify any spikes or outliers

Then compute pairwise differences:

| Comparison | Mean Heading Diff | Mean Pitch Diff | Mean Roll Diff |
|------------|:-----------------:|:---------------:|:--------------:|
| System A vs System B | A_hdg - B_hdg | A_ptc - B_ptc | A_rll - B_rll |
| System A vs System C | ... | ... | ... |
| System B vs System C | ... | ... | ... |

Plot time series of all systems overlaid to visually check for drift, steps, or oscillations.

### Step 5: Document and Report

Compile results into a test report including:

- Equipment table (make, model, serial number, calibration date)
- Environmental conditions during test
- Tabular results: mean, SD, min, max for each system
- Pairwise comparison table with differences
- Time series plots (heading, pitch, roll) for all systems overlaid
- Pass/fail statement against acceptance criteria

---

## :material-check-decagram: Acceptance Criteria

!!! success "Pass Criteria (per IMCA S 017)"

    | Parameter | Tolerance Between Any Two Systems |
    |-----------|:---------------------------------:|
    | **Heading** | &le; 0.5 deg |
    | **Pitch** | &le; 0.1 deg |
    | **Roll** | &le; 0.1 deg |
    | **Heading SD** (individual system) | &le; 0.1 deg |
    | **Pitch/Roll SD** (individual system) | &le; 0.05 deg |

!!! warning "Diagnostic Patterns"
    - **Heading disagrees but pitch/roll agree**: Heading-specific issue. Check gyro settling, heading source selection, boresight heading value, or magnetic interference.
    - **All three disagree**: Suspect mounting offset error, wrong reference frame definition, or incorrect boresight values from dimensional control.
    - **One system oscillating**: Check if that system is still settling, or if it has a noisy input (e.g. degraded GNSS heading baseline).
    - **Drift visible over time**: Mechanical gyro drift (normal for older units). FOG/RLG systems should not drift.

---

## :material-wrench: Troubleshooting

| Symptom | Likely Cause | Action |
|---------|-------------|--------|
| Heading offset > 0.5 deg | Gyro not settled, wrong boresight, magnetic interference | Allow more settling time. Verify boresight values match DC survey. Check for magnetic sources near sensor. |
| Pitch/roll offset > 0.1 deg | Wrong offset values, MRU axes orientation incorrect | Re-check dimensional control values. Confirm MRU X/Y/Z axis orientation matches software configuration. |
| Large SD on one system | System still aligning, noisy input, faulty sensor | Check alignment status. If GNSS-aided, check satellite count and HDOP. Consider sensor replacement if persistent. |
| Heading jumps or steps | GNSS heading baseline issues, heading source switching | Check for automatic heading source switching in navigation software. Verify GNSS heading baseline length and quality. |
| True vs magnetic heading mismatch | One system outputting magnetic heading | Confirm all systems set to true heading output. Apply magnetic variation correction if needed. |
| Grid vs true heading offset | One system applying grid convergence | Check projection settings. True heading is standard for intersystem checks. |

---

## :material-link-variant: Related Articles

- [AHRS Calibration](ahrs-calibration.md)
- [Gyro Types and Calibration](gyro-types-and-calibration.md)
- [Dimensional Control Survey](dimensional-control-survey.md)

---

!!! quote "References"
    - IMCA S 017, Guidelines for Position Reference Systems
    - Equipment manufacturer specifications for heading and attitude accuracy
