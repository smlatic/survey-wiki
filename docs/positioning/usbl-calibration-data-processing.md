---
title: USBL Calibration Data Processing
category: calibration
tags: [usbl, calibration, data processing, QINSy, CASIUS, least squares, spin check, sign convention]
equipment: [Kongsberg HiPAP, Sonardyne Ranger, QINSy, CASIUS]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: converted_procedure
---

# :material-chart-scatter-plot: USBL Calibration Data Processing

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Calibration</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Processing Guide</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Step-by-step guide for processing USBL calibration data in QINSy (USBL Calibration Utility) and CASIUS. Covers data import, noise cleaning, least squares calibration, spin check verification, Z-check, and the critical sign convention rules for entering results into USBL software.

---

## :material-calendar-check: When to Use

- After completing a USBL calibration data acquisition
- When reprocessing calibration data with updated SVP or revised lever arms
- When comparing QINSy and CASIUS processing results
- When investigating unexpected calibration results or high residuals

---

## :material-database-import: Step 1 -- Import Calibration Data (QINSy)

An independent database file must be recorded per location and heading during the calibration.

- [x] Open the **USBL Calibration Utility** in QINSy (located in the Main Console)
- [x] Browse and import all database files to be used for computing results
- [x] After importing, the vessel's tracking and transponder positions will be displayed on screen

---

## :material-eraser: Step 2 -- Clean Noise and Spiky Data

The USBL Calibration Utility allows cleaning of spikes in transponder positions before computation, preventing false data from affecting the final results.

### Polygon Selection

- From the **Edit** menu (or the icon button), data can be selected or de-selected
- Draw a **polygon** around data points to be removed from calculations
- Excluded points will not affect the calibration results

### Color-Coded Display

- Click the **Show Color** button to display the transponder track for each database in a different color
- This allows identification of bad or noisy datasets that may need to be reacquired

!!! tip "Dataset Assessment"
    Use the color-coded display to compare datasets. If one dataset shows significantly more scatter or offset than the others, it may need to be re-acquired rather than just cleaned.

---

## :material-calculator-variant: Step 3 -- Least Squares Calibration

- [x] Select **Least Squares Calibration** from the Calibrations menu (or use the toolbar button)
- [x] Click "Use the following alignment corrections" and select **No Corrections**
- [x] At "Solve for the following alignment corrections", select: **"Scale, Angle, 3D Transponder Position"**

### Line Selection

In the left panel, all loaded databases are displayed. Here you control which lines are included in the computation:

- [x] **Deselect** any spin check lines that have been loaded -- these must not be included in the calibration computation
- [x] Select only the calibration transit/cardinal point lines

The values are calculated automatically. Click **Apply** to apply the results to the selected databases, then **Close**.

---

## :material-rotate-3d-variant: Step 4 -- Spin Check Verification

The spin check verifies the mounting offsets of the transducer after the calibration has been computed.

- [x] Ensure **only the spin check lines** are enabled in the top-left pane (deselect all calibration lines)
- [x] Select **Spin Check** from the Calibrations menu (or use the toolbar button)
- [x] At "Use the following alignment corrections", select **USBL Calibration Results**
- [x] Values are calculated automatically -- click **Apply**, then **Close**

### Assessing Spin Check Results

!!! warning "SD vs Results Assessment"
    If the **Standard Deviation (SD) values are bigger than the results**, a deeper assessment of the calibration is needed along with analysis of each individual dataset. This indicates the results may not be reliable and the data quality should be investigated before proceeding.

---

## :material-arrow-expand-vertical: Step 5 -- Z-Check

The Z-Check confirms the Z offset of the USBL transducer on the vessel by comparing USBL-derived Z values with depth readings from the echo sounder. Use the same data acquired during the spin check manoeuvre.

- [x] Select **Z-Check** from the Calibrate menu (or the toolbar icon)
- [x] Ensure only the lines needed for the Z-Check are enabled (top-left panel or Z-Check menu)
- [x] At "Use the following alignment corrections", select **USBL Calibration Results**
- [x] Enter a **Transponder Height** value
- [x] Values are calculated automatically -- click **Apply**, then **Close**

After performing every check, the calibration report is generated or updated. Review the report by clicking the report icon in the main display. The report contains several sections that all need to be reviewed.

---

## :material-chart-timeline-variant: Step 6 -- CASIUS Processing Workflow

CASIUS is the calibration processing module integrated into Sonardyne systems (also available as a standalone module).

### Load Data

- [x] After completing a CASIUS calibration, a dialogue appears containing the recorded lines (CSV format)
- [x] If additional datasets exist, load them via **File > Load CSV Data**

### Select/Deselect Lines

- [x] Once all data is loaded, individual lines can be selected or deselected to assess different calibration results

### Settings Tab

- [x] Click the **Settings** tab and verify that all displayed parameters are correct
- [x] When processing immediately after data collection, most settings are extracted from the project automatically
- [x] When post-processing later using the standalone CASIUS module, values must be entered manually (unless CASIUS settings were saved)

### Process Data

- [x] Select **Data > Process Data** -- CASIUS performs the least squares adjustment and displays results

??? note "Tuning Results"
    Calibration results can be slightly altered by modifying parameters in the Settings tab. Refer to the CASIUS Operating Manual to determine which values best suit the specific USBL conditions.

### Generate Report

- [x] Scale (zoom in) and rotate individual images so data is clear and concise -- these images will appear in the survey report
- [x] Close the results window and select **File > Save PDF Report**
- [x] Save the CASIUS merged data file via **File > Save CASIUS File**

---

## :material-alert-decagram: Sign Convention -- CRITICAL

!!! danger "QINSy Sign Inversion Required"
    When entering calibration results from a **QINSy report** into the USBL software, the **sign of every value must be inverted**. Failure to do this will double the misalignment error instead of correcting it.

### Sign Convention Table

| Misalignment | QINSy Report Value | Value to Enter in USBL Software |
|-------------|-------------------|-------------------------------|
| **Pitch** | -2.3 | **+2.3** |
| **Roll** | +0.52 | **-0.52** |
| **Heading** | -1.63 | **+1.63** |

!!! success "CASIUS Reports -- No Sign Change"
    If the accepted calibration results are from the **CASIUS / USBL system report**, no sign changes are needed. Enter the values exactly as reported.

### Where to Apply Corrections

- Misalignment corrections should be applied in the **USBL software** (preferred)
- Only enter corrections in QINSy/navigation software if introducing the data in the USBL system is not possible
- **Never enter corrections in both systems** -- this will apply them twice

---

## :material-check-circle: Post-Calibration Verification

!!! warning "Mandatory Verification"
    After entering calibration results into the USBL system, verification checks **must** be performed to confirm the misalignments have been correctly applied. This typically includes a spin check and transit lines with the new corrections active. Refer to the USBL verification procedure for the full method.

---

## :material-list-box: Processing Workflow Summary

``` mermaid
graph TD
    A[Import database files into QINSy USBL Calibration Utility] --> B[Clean noise with polygon selection]
    B --> C[Run Least Squares: Scale, Angle, 3D Transponder Position]
    C --> D[Spin Check: enable only spin lines]
    D --> E{SD < Results?}
    E -->|Yes| F[Z-Check: compare USBL Z with echo sounder]
    E -->|No| G[Investigate data quality / reacquire]
    G --> B
    F --> H[Enter corrections into USBL software]
    H --> I[Perform verification checks]
```

| Step | QINSy | CASIUS |
|------|-------|--------|
| **1. Import data** | USBL Calibration Utility > Browse/Import databases | File > Load CSV Data |
| **2. Clean data** | Polygon selection via Edit menu | Select/deselect lines |
| **3. Compute** | Least Squares > "Scale, Angle, 3D Transponder Position" | Data > Process Data |
| **4. Spin check** | Enable spin lines only, use USBL Calibration Results | N/A (assessed via separate verification) |
| **5. Z-check** | Calibrate > Z-Check with echo sounder comparison | N/A |
| **6. Apply results** | Invert signs when entering into USBL software | Enter values directly (no sign change) |
| **7. Verify** | Run spin check and transit lines with corrections applied | Run spin check and transit lines with corrections applied |

---

## :material-check-decagram: Acceptance Criteria

| Parameter | Pass | Marginal | Fail |
|:--|:-:|:-:|:-:|
| Heading misalignment | < 2.0 deg | 2.0-5.0 deg | > 5.0 deg |
| Pitch misalignment | < 2.0 deg | 2.0-5.0 deg | > 5.0 deg |
| Roll misalignment | < 2.0 deg | 2.0-5.0 deg | > 5.0 deg |
| Scale factor | 0.95-1.05 | 0.90-0.95 or 1.05-1.10 | < 0.90 or > 1.10 |
| Spin check SD vs results | SD < results | SD = results | SD > results |
| Z-check agreement | < 0.5 m | 0.5-1.0 m | > 1.0 m |

!!! warning "Heading Misalignment > 2 deg"
    A heading misalignment greater than 2 deg is suspicious and warrants investigation. It suggests either the transducer was installed significantly rotated from the vessel axis, or there is an error in the heading sensor offset. Check the physical installation and the DC survey values before accepting a large heading correction.

---

## :material-wrench: Troubleshooting

### SD Larger Than Results (Spin Check Fails)

**Action**:

1. Review individual datasets for outliers or noise
2. Check if one dataset has significantly more scatter (remove and reprocess)
3. Verify SVP is correct and representative
4. Check if vessel motion was excessive during data acquisition
5. If the problem persists, the calibration data may need to be reacquired

### Scale Factor Outside Normal Range

**Possible causes**:

1. SVP error is the most common cause. A wrong SVP produces a systematic range error that manifests as a scale factor.
2. Lever arm errors (wrong GNSS-to-USBL offset) also affect scale
3. Timing error between GNSS and USBL data streams

### Z-Check Shows Large Offset

**Possible causes**:

1. Wrong transponder height entered
2. Draft or waterline offset error in the USBL or echosounder system
3. Tide correction applied to one system but not the other
4. USBL transducer depth offset incorrect in DC survey

---

## :material-link-variant: Related Articles

- [HiPAP USBL Calibration](hipap-usbl-calibration.md)
- [HiPAP Verification (Spin & Transit)](hipap-hpr-verification.md)
- [USBL Theory and Error Budgets](usbl-theory-and-error-budgets.md)
- [USBL Responder Latency Check](usbl-responder-latency-check.md)
