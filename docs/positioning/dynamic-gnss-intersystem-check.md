---
title: Dynamic GNSS Intersystem Check
category: positioning
tags: [gnss, intersystem, dynamic, comparison, positioning, verification, offshore, transit]
equipment: [Primary GNSS System, Secondary GNSS System, Heading and Attitude System, NaviPac/Qinsy]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: converted_procedure
---

# :material-satellite-uplink: Dynamic GNSS Intersystem Check

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Positioning</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Dynamic Check</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Ensure accuracy and consistency between primary and secondary GNSS positioning systems whilst the vessel is moving. By comparing system outputs during a dynamic box pattern, discrepancies are identified and deviation between them is quantified.

---

## :material-calendar-check: When to Use

- **Every mobilisation**, typically during transit to the work location
- After the static DGNSS integrity check has passed (this is the dynamic follow-up)
- After any change to GNSS antenna installation, cable routing, or correction service configuration
- When switching between correction service providers

---

## :material-information-outline: Why Cardinal Headings Matter

The box pattern covering all four cardinal headings (N, E, S, W) is not arbitrary. It is specifically designed to **expose heading-dependent offset errors** that would not be visible during a static check or a single-heading transit.

Common sources of heading-dependent errors include:

- **Antenna position offset errors**: If the antenna position in the vessel frame is slightly wrong, the CRP position will shift differently depending on heading. For example, a 0.5 m error in the fore-aft antenna offset produces a 0.5 m north-south position error that reverses when the vessel turns 180 degrees.
- **Cable delay errors**: Signal timing offsets in the heading system cable can introduce a systematic angular error in the heading output, which translates into a position offset at the CRP that rotates with vessel heading.
- **Heading sensor misalignment**: If the heading sensor is not perfectly aligned with the vessel's longitudinal axis, position offsets at sensors distant from the CRP will vary with heading.

By sailing all four cardinal headings and comparing the two GNSS systems on each leg, heading-dependent biases become visible as a systematic pattern in the residuals.

---

## :material-tools: Equipment Required

| Equipment | Role |
|---|---|
| Primary GNSS positioning system | Primary position source |
| Secondary GNSS positioning system | Secondary position source for comparison |
| Heading and attitude system | Supporting orientation reference |
| Navigation/acquisition software (NaviPac or Qinsy) | Data logging |

---

!!! info "Prerequisites"
    - Performed offshore after project mobilisation
    - Correction service active with good signal continuity
    - Vessel capable of maintaining controlled headings

---

## :material-list-status: Procedure

### Step 1: Plan Box Pattern

The vessel shall sail four legs in a box-like pattern covering all four cardinal headings (North, East, South, West).

**Speed and distance per leg:**

| Vessel Type | Speed | Leg Length |
|---|---|---|
| DP operation vessel | 2 knots | ~500 m |
| Towing operation vessel | 5 knots | ~1500 m |

### Step 2: Configure Logging

Set up the navigation software to log grid position of the vessel CRP using both primary and secondary GNSS systems and supporting heading and attitude system.

**Logging format (comma delimited):**

| Field | Date | Time | GNSS1 CRP Easting | GNSS1 CRP Northing | GNSS1 CRP Height | Date | Time | GNSS2 CRP Easting | GNSS2 CRP Northing | GNSS2 CRP Height |
|---|---|---|---|---|---|---|---|---|---|---|
| Format | yyyy-mm-dd | hh:mm:ss.sss | n.nn | n.nn | n.nn | yyyy-mm-dd | hh:mm:ss.sss | n.nn | n.nn | n.nn |
| Example | 2023-02-27 | 14:39:54.231 | 670811.01 | 6397125.92 | 55.68 | 2023-02-27 | 14:39:54.231 | 670811.21 | 6397125.67 | 55.45 |

### Step 3: Record Data

| Item | Record | Duration | Sampling | Location | Speed | Heading |
|---|---|---|---|---|---|---|
| Recording 1, 2, 3, 4 | Grid position of Vessel CRP using Primary and Secondary GNSS and heading/attitude system | ~10 minutes per leg | 1 second | Offshore | 2 kn (DP) / 5 kn (towing) | North, East, South, West |

### Step 4: Analyse Results

Compare primary and secondary system outputs across all four headings to quantify deviations in easting, northing, and height.

---

!!! note "Reporting"
    The verification report must include:

    - Introduction
    - Table of equipment
    - Sequence of events
    - Tabular and graphical representations of results
    - Statistical analysis

    Save as PDF and append to the project-specific MAC report. Submit with associated log files.

---

!!! success "Quality Checks"
    - [x] Both systems should agree within their combined specification tolerances across all headings
    - [x] No heading-dependent biases visible between systems
    - [x] Statistical analysis confirms consistency between systems during dynamic conditions

---

## :material-check-decagram: Acceptance Criteria

| Parameter | DGNSS Pass | PPP Pass | Fail |
|---|---|---|---|
| Horizontal position agreement (Easting/Northing) | Within 1.5 m | Within 0.5 m | Exceeds applicable threshold |
| Height agreement | Within 2.0 m | Within 1.0 m | Exceeds applicable threshold |
| Heading-dependent bias | No systematic pattern across cardinal headings | No systematic pattern across cardinal headings | Consistent offset that changes with heading |
| Solution status | Both systems maintain fixed/converged solution | Both systems maintain fixed/converged solution | Frequent solution drops or float states |

!!! info "Interpreting Results by Heading"
    If the two systems agree well on N/S headings but disagree on E/W headings (or vice versa), this strongly indicates an **antenna offset error** in the affected axis. The magnitude of the disagreement equals approximately twice the offset error.

---

## :material-wrench: Troubleshooting

| Problem | Possible Causes | Actions |
|---|---|---|
| Systems disagree on specific headings only | Antenna position offset error in the vessel frame, heading sensor misalignment | Re-measure antenna offsets, verify heading sensor alignment, check vessel offset file in navigation software |
| General disagreement on all headings | Different correction service types (e.g., DGNSS vs PPP), wrong datum or projection, correction service outage | Confirm both systems use the same correction type and datum, check correction age and service status |
| Large height disagreement | Different geoid models, height aiding enabled on one system only | Verify both systems use the same geoid model, check height aiding settings |
| Intermittent large offsets | Multipath from vessel superstructure, signal masking during turns, temporary loss of corrections | Check antenna sky view on each heading, review satellite count and PDOP during turns, verify correction uplink stability |
| One system drops out during turns | Antenna cable issue exposed by vessel motion, marginal signal reception | Inspect antenna cable routing, check cable connections, review signal strength logs |

---

## :material-link-variant: Related Articles

- [Alongside DGNSS Integrity Check](dgnss-integrity-check.md) -- static check that should be completed before this dynamic check
- [Magnetometer/TVG Acceptance Test](../sensors/magnetometer-tvg-acceptance-test.md) -- relies on positioning accuracy verified by this check
