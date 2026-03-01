---
title: Surrogate Item Test Using GMA1000 Gradiometer
category: calibration
tags: [gradiometer, gma1000, surrogate item test, SIT, magnetic, detection, ROV, altitude, threshold]
equipment: [GMA1000 Gradiometer, ROV, MBES, Surrogate Targets]
date_added: 2026-03-01
source_type: converted_procedure
---

# :material-magnet-on: Surrogate Item Test Using GMA1000 Gradiometer

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Calibration</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Surrogate Item Test</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Evaluate the operational capabilities of the GMA1000 gradiometer by determining its effective altitude and horizontal range, noise tolerance, and target detection thresholds using a surrogate item test (SIT). A metal object is used as a stand-in for actual objects of interest to evaluate system performance.

---

## :material-tools: Equipment Required

| Equipment | Role |
|---|---|
| GMA1000 gradiometer system | Magnetic gradient measurement |
| ROV | Sensor deployment platform |
| Multibeam echosounder (MBES) | Position verification |
| Surrogate metal targets | Test objects for detection evaluation |
| Navigation and acquisition software | Data acquisition and positioning |

---

!!! info "Prerequisites"
    - Magnetically quiet area identified for testing
    - Marine Geologist available for area suitability confirmation and data quality review
    - MBES system operational for position verification

---

## :material-list-status: Procedure

### Step 1: Trial Area Selection

Select a magnetically quiet area, preferably 30 m wide and 150 m long. Perform a clearance survey with 10 m line spacing to ensure no magnetic disturbances could affect the test results.

### Step 2: Area Suitability Confirmation

Have a Marine Geologist confirm the suitability of the selected area for the SIT.

### Step 3: Surrogate Target Deployment

Deploy surrogate targets at a minimum distance of 20 m apart to prevent magnetic signal overlap.

### Step 4: Position Verification

Conduct a single MBES line over the deployed surrogate targets to verify their positions.

### Step 5: Data Collection

Run two opposing survey lines over the targets in reciprocal headings at various altitudes:

- 1 m altitude
- 2 m altitude
- 3 m altitude
- 4 m altitude

### Step 6: Data Quality Confirmation

The Marine Geologist will confirm data quality, accuracy of positions, and ensure sufficient data has been collected to determine the altitude limit and detection threshold.

### Step 7: Operational Limit Determination

Based on the collected data, establish the operable limits of the system:

- Maximum effective altitude
- Horizontal detection range
- Noise level tolerances
- Target detection thresholds

---

!!! success "Quality Checks"
    - [x] Trial area confirmed magnetically quiet by clearance survey
    - [x] Surrogate targets separated by minimum 20 m
    - [x] Target positions verified by MBES
    - [x] Reciprocal lines show consistent target detection
    - [x] Altitude limits and detection thresholds clearly determined
    - [x] Data quality confirmed by Marine Geologist

---

!!! note "Reporting"
    Present the methodology and results in the MAC report for review and validation.
