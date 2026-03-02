---
title: G882 Magnetometer Depth/Altimeter Calibration Sheet
category: reference
tags: [g882, magnetometer, depth, altimeter, calibration, scale factor, bias, reference table]
equipment: [G882 Magnetometer, Depth Sensor, Altimeter]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: reference_table
---

# :material-calculator-variant: G882 Magnetometer Depth/Altimeter Calibration Sheet

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Reference</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Calibration Sheet</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Reference calibration worksheet for determining depth and altimeter scale factors and biases for a G882 magnetometer system. The calibration uses raw sensor values at known depths to calculate linear scale/bias corrections.

---

## :material-clipboard-text: Calibration Parameters

Record the following before calibration:

- Magnetometer serial number
- Altimeter serial number
- Calibration date
- Site water depth

---

## :material-table: Calibration Data Table

Data is recorded at multiple known sensor depths. For each depth, record the raw depth value and raw altitude value, then calculate the corrected values using scale/bias coefficients.

| Sensor Depth (m) | RAW Value (depth) | RAW Value (altitude) | Sensor Alt. (m) |
|---|---|---|---|
| 0 | (record) | (record) | (site water depth) |
| 1 | (record) | (record) | (site water depth - 1) |
| 2 | (record) | (record) | (site water depth - 2) |
| ... | ... | ... | ... |
| 8 | (record) | (record) | (site water depth - 8) |

---

## :material-function-variant: Calculated Coefficients

The calibration produces four coefficients:

- **Depth scale factor** -- multiplier applied to raw depth value
- **Depth bias** -- offset added after scaling
- **Altimeter scale factor** -- multiplier applied to raw altitude value
- **Altimeter bias** -- offset added after scaling

**Corrected depth** = (RAW depth value x depth scale factor) + depth bias

**Corrected altitude** = (RAW altitude value x altimeter scale factor) + altimeter bias

---

!!! success "Verification"
    After applying scale/bias corrections:

    - [x] Calibration error at each depth point should approach zero
    - [x] Average error across all depth points should be effectively zero
    - [x] Verify corrections at intermediate depths not used in calibration if possible

---

??? info "Notes"
    - Site water depth must be accurately known for altitude calculations
    - Calibrate across the expected operating depth range
    - Record all raw values before applying corrections
    - Keep the calibration sheet with the equipment records

---

## :material-tape-measure: Physical Calibration Method

The calibration is performed by lowering the G882 magnetometer to **known depths** using a marked wire or rope:

### Equipment Needed

- G882 magnetometer with depth sensor and altimeter
- Marked wire or rope (measured at 1 m intervals using a steel tape measure)
- Clump weight to keep the wire taut and vertical
- Known water depth at the calibration site (measured independently, e.g., echo sounder corrected for tide)

### Procedure

1. Deploy the G882 over the side of the vessel in a sheltered area with known water depth
2. Lower to the **surface** (0 m depth) and record the raw depth and altitude values
3. Lower in **1 m increments** using the marked wire, pausing at each depth for 10-15 seconds
4. At each depth point, record the raw depth sensor value and the raw altimeter value
5. Continue lowering until at least **5 depth points** have been recorded, evenly spaced across the expected operating range
6. Recover the magnetometer and enter data into the calibration spreadsheet

!!! warning "Minimum Data Points"
    A minimum of **5 depth points** evenly spaced across the operating range is required for a reliable linear fit. More points (7-10) are preferred to improve the statistical confidence of the scale factor and bias.

---

## :material-calculator: Worked Calibration Example

The following is a sample calibration for the depth sensor at a site with 10 m water depth:

### Raw Data

| True Depth (m) | RAW Depth Value | True Altitude (m) | RAW Altitude Value |
|:-:|:-:|:-:|:-:|
| 0.0 | 0.15 | 10.0 | 9.72 |
| 2.0 | 2.08 | 8.0 | 7.78 |
| 4.0 | 4.02 | 6.0 | 5.83 |
| 6.0 | 5.94 | 4.0 | 3.90 |
| 8.0 | 7.89 | 2.0 | 1.95 |

### Linear Regression (Depth Sensor)

Using the formula: **Corrected Depth = (RAW x Scale Factor) + Bias**

```
Least squares fit of True Depth vs RAW Depth:

Scale Factor = 1.033
Bias = -0.12 m

Verification:
  RAW = 0.15  -> Corrected = (0.15 x 1.033) + (-0.12) = 0.03 m  (True: 0.0, Error: 0.03 m)
  RAW = 2.08  -> Corrected = (2.08 x 1.033) + (-0.12) = 2.03 m  (True: 2.0, Error: 0.03 m)
  RAW = 4.02  -> Corrected = (4.02 x 1.033) + (-0.12) = 4.03 m  (True: 4.0, Error: 0.03 m)
  RAW = 5.94  -> Corrected = (5.94 x 1.033) + (-0.12) = 6.02 m  (True: 6.0, Error: 0.02 m)
  RAW = 7.89  -> Corrected = (7.89 x 1.033) + (-0.12) = 8.03 m  (True: 8.0, Error: 0.03 m)

Average error: 0.03 m -- acceptable
```

### Expected Coefficient Values

| Coefficient | Expected Range | Flag If |
|-------------|:-------------:|---------|
| **Scale factor (depth)** | **0.95 to 1.05** (near 1.0) | Outside this range indicates sensor hardware issue |
| **Bias (depth)** | **< 0.5 m** (absolute value) | Greater than 0.5 m suggests sensor offset or installation error |
| **Scale factor (altitude)** | **0.95 to 1.05** (near 1.0) | Outside this range indicates sensor hardware issue |
| **Bias (altitude)** | **< 0.5 m** (absolute value) | Greater than 0.5 m suggests sensor offset or installation error |

!!! danger "Out-of-Range Coefficients"
    If the scale factor deviates significantly from 1.0 (outside 0.95-1.05) or the bias exceeds 0.5 m, do **not** simply apply the correction and proceed. Investigate the cause -- the sensor may be damaged, improperly installed, or have a hardware fault. Replace the sensor if the issue cannot be resolved.

---

## :material-calendar-sync: Recalibration Schedule

| Trigger | Action |
|---------|--------|
| **Annually** | Recalibrate as part of routine maintenance |
| **After mechanical shock** | Impact, drop, or collision -- recalibrate immediately |
| **After sensor replacement** | Any depth sensor or altimeter swap requires recalibration |
| **Start of project** | Verify calibration is current; recalibrate if > 12 months old or if operating conditions differ significantly |
| **If data QC shows systematic errors** | Recalibrate to determine if calibration has drifted |

---

## :material-calendar-check: When to Use

This calibration sheet is used:

- When performing depth/altimeter calibration on a G882 magnetometer system
- At the **start of a project** to verify or update existing calibration coefficients
- After any event that may have affected the depth sensor or altimeter (shock, repair, replacement)
- As a reference for expected coefficient values and acceptable error thresholds

---

## :material-check-decagram: Acceptance Criteria

| Parameter | Criterion |
|-----------|-----------|
| Minimum calibration points | **5** depth points, evenly spaced across operating range |
| Average calibration error | Effectively **zero** after applying scale/bias correction |
| Maximum residual at any single point | < **0.1 m** |
| Depth scale factor | Within **0.95 to 1.05** (near 1.0) |
| Depth bias | < **0.5 m** (absolute value) |
| Altimeter scale factor | Within **0.95 to 1.05** (near 1.0) |
| Altimeter bias | < **0.5 m** (absolute value) |

---

## :material-wrench: Troubleshooting

| Symptom | Likely Cause | Action |
|---------|-------------|--------|
| Scale factor far from 1.0 | Sensor hardware fault; incorrect units in raw data | Check sensor health; verify raw data units match expected (metres vs feet, PSI vs bar) |
| Bias exceeds 0.5 m | Sensor zero offset; pressure reference drift | Re-zero the sensor; check for trapped air in the pressure port |
| Large scatter in calibration points | Sensor noise; wire not vertical; vessel heave | Repeat in calmer conditions; add clump weight; allow longer settling time at each depth |
| Altitude values incorrect but depth is fine | Altimeter transducer fouled; incorrect site depth entered | Clean transducer face; verify site water depth independently |
| Calibration does not produce a linear fit | Sensor non-linearity; data entry error | Plot data graphically; check for outliers; if non-linear behaviour is confirmed, the sensor may need replacement |

---

## :material-link-variant: Related Articles

- [Pipeline and Umbilical Survey Operations](../rov/pipeline-survey-operations.md)
