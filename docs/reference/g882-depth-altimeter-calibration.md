---
title: G882 Magnetometer Depth/Altimeter Calibration Sheet
category: reference
tags: [g882, magnetometer, depth, altimeter, calibration, scale factor, bias, reference table]
equipment: [G882 Magnetometer, Depth Sensor, Altimeter]
date_added: 2026-03-01
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
