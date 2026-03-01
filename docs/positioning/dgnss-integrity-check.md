---
title: Alongside DGNSS Integrity Check
category: positioning
tags: [dgnss, gnss, integrity, antenna health, total station, positioning, verification, ESP]
equipment: [DGNSS System, Total Station, Reflector Prism, NaviPac/Qinsy]
date_added: 2026-03-01
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
