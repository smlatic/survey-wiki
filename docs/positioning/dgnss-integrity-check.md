---
title: Alongside DGNSS Integrity Check
category: positioning
tags: [dgnss, gnss, integrity, antenna health, total station, positioning, verification, ESP]
equipment: [DGNSS System, Total Station, Reflector Prism, NaviPac/Qinsy]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: converted_procedure
---

# :material-satellite-variant: Alongside DGNSS Integrity Check

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Positioning</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Integrity Check</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Verify the overall health and accuracy of DGNSS positioning systems by comparing logged DGNSS antenna positions against independently measured positions derived from total station observations. Often called an "antenna health check", this procedure uses an External Service Provider (ESP) to measure DGNSS system positions using land survey techniques.

---

## :material-calendar-check: When to Use

- **Alongside before every survey** as part of the mobilisation checks
- When changing correction services or correction service providers
- After any antenna reinstallation, cable replacement, or receiver swap
- When DGNSS system firmware is updated
- After any event that may have affected antenna position (crane operations, structural work near antenna mast)

---

## :material-information-outline: Vessel Motion Limits

For the integrity check results to be meaningful, vessel motion must be minimal during the observation period.

| Parameter | Limit |
|---|---|
| Heave during check | < 0.5 m |
| Vessel displacement | Vessel must remain alongside with minimal surge/sway |
| Mooring condition | Securely moored with adequate fender arrangement |

!!! warning "High Heave Conditions"
    If heave exceeds 0.5 m during the observation period, the comparison between total station and DGNSS positions will be contaminated by unresolved vertical motion. Wait for calmer conditions or note the heave conditions in the report and apply wider tolerances.

### Failure Decision Tree

When the DGNSS and total station positions disagree beyond tolerance, follow this decision sequence:

1. **Check correction age** -- if correction age > 10 s, the correction link may be intermittent. Investigate the correction uplink before re-testing.
2. **Check datum and projection** -- confirm the DGNSS and ESP are using the same geodetic datum and map projection. A datum mismatch can introduce metre-level offsets.
3. **Check antenna offsets** -- verify the antenna offset values in the navigation software match the physical measurements. A transposed or sign-reversed offset is a common error.
4. **Check for multipath** -- review PDOP, number of satellites, and signal-to-noise values. If the antenna has a poor sky view (e.g., blocked by crane or mast), multipath may degrade the solution.
5. **Re-observe** -- if none of the above resolves the disagreement, request the ESP to re-observe. Consider moving the reflector prism to a different known point to rule out ESP setup errors.

---

## :material-tools: Equipment Required

| Equipment | Role |
|---|---|
| DGNSS positioning system(s) | System under test |
| Total station (operated by ESP) | Independent reference measurement |
| Reflector prism | Target for total station observations |
| Navigation/acquisition software (NaviPac or Qinsy) | Data logging |
| Known control points on the quayside | Survey reference network |

---

!!! info "Prerequisites"
    - Vessel alongside
    - ESP contracted and available
    - Known control points available or to be established on the quayside
    - All lifting operations suspended during the calibration period

---

## :material-list-status: Procedure

### Step 1: Establish Control Points

The ESP establishes temporary control points on the quayside using either RTK GNSS or post-processed raw DGNSS observations. A total station is set up from these known control points.

### Step 2: Configure DGNSS

Configure the DGNSS with a 10 degree elevation mask and no height aiding.

### Step 3: Total Station Observations

The ESP takes total station observations every 30 seconds for a period of one hour to a reflector prism attached at a defined location on the antenna mast.

### Step 4: Simultaneous GNSS Logging

Set the navigation system to log output from all positioning systems at 1 second intervals for one hour during the total station observations. Log the following to the same text file:

- Position data (Easting, Northing, Height)
- PDOP, HDOP
- Solution status
- Number of satellites

**Logging format (comma delimited):**

| Field | Date | Time | GNSS1 CRP Easting | GNSS1 CRP Northing | GNSS1 CRP Height | Date | Time | GNSS2 CRP Easting | GNSS2 CRP Northing | GNSS2 CRP Height |
|---|---|---|---|---|---|---|---|---|---|---|
| Format | yyyy-mm-dd | hh:mm:ss.sss | n.nn | n.nn | n.nn | yyyy-mm-dd | hh:mm:ss.sss | n.nn | n.nn | n.nn |
| Example | 2023-02-27 | 14:39:54.231 | 670811.01 | 6397125.92 | 55.68 | 2023-02-27 | 14:39:54.231 | 670811.21 | 6397125.67 | 55.45 |

### Step 5: Compare Results

Compare the DGNSS positions to those derived from the total station observations to verify overall system health. The ESP procedure will guide the specific comparison methodology.

---

!!! note "Reporting"
    The verification report must include:

    - Introduction
    - Table of equipment
    - Sequence of events
    - Tabular and graphical representations of results
    - Statistical analysis

    Save as PDF with associated log files.

---

!!! success "Quality Checks"
    - [x] DGNSS positions should agree with total station-derived positions within expected system tolerances
    - [x] PDOP and HDOP values within acceptable limits throughout the logging period
    - [x] Solution status remains stable during observations
    - [x] No crane operations or other interference during the test period

---

## :material-check-decagram: Acceptance Criteria

| Parameter | Pass | Marginal | Fail |
|---|---|---|---|
| Horizontal position agreement (DGNSS vs total station) | Within 0.30 m | 0.30 -- 0.50 m | > 0.50 m |
| Correction age | < 10 s | 10 -- 15 s | > 15 s |
| PDOP | < 3.0 | 3.0 -- 5.0 | > 5.0 |
| HDOP | < 2.0 | 2.0 -- 3.0 | > 3.0 |
| Solution status | Fixed solution maintained throughout | Occasional float, returns to fixed | Persistent float or no solution |
| Heave during observation | < 0.5 m | 0.5 -- 1.0 m (note in report) | > 1.0 m (re-test required) |

!!! warning "Marginal Results"
    If results fall in the marginal range, document the conditions and consult the Client Representative. A re-test under better conditions may be required.

---

## :material-wrench: Troubleshooting

| Problem | Possible Causes | Actions |
|---|---|---|
| Large horizontal disagreement (> 0.5 m) | Different correction types between systems, wrong datum or projection in navigation software, antenna offset error | Verify correction type is the same, confirm datum/projection settings, re-measure and re-enter antenna offsets |
| Intermittent position jumps | Correction link dropout, multipath from vessel structures, satellite constellation change | Check correction uplink stability, review antenna sky view, examine satellite count and PDOP time series |
| Consistent bias in one axis only | Antenna offset sign error or transposition (e.g., Easting/Northing swapped), ESP control point error | Double-check antenna offset entry (signs and axes), request ESP to verify their control point coordinates |
| Height disagreement | Geoid model mismatch, height aiding enabled or disabled, tide correction applied differently | Confirm geoid model on both systems, check height aiding settings, verify tide correction application |
| PDOP spikes during observation | Satellite obstruction (mast, crane boom in stowed position), constellation gaps | Review sky plot for obstructions, schedule observation during better constellation geometry |
| ESP and DGNSS agree but different from chart | Chart datum differs from survey datum, outdated chart coordinates | Confirm the chart datum, apply appropriate transformations |

---

## :material-link-variant: Related Articles

- [Dynamic GNSS Intersystem Check](dynamic-gnss-intersystem-check.md) -- dynamic follow-up check to perform after this static integrity check passes
- [Video Camera and DVR Quality Verification](../sensors/video-camera-dvr-verification.md) -- equipment verification that depends on accurate positioning
