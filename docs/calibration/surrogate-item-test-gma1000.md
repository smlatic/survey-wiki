---
title: Surrogate Item Test Using GMA1000 Gradiometer
category: calibration
tags: [gradiometer, gma1000, surrogate item test, SIT, magnetic, detection, ROV, altitude, threshold]
equipment: [GMA1000 Gradiometer, ROV, MBES, Surrogate Targets]
date_added: 2026-03-01
last_reviewed: 2026-03-01
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

## :material-calendar-check: When to Use

- **Before each magnetometer survey** as an acceptance test for detection capability
- Every mobilisation when the GMA1000 is part of the equipment spread
- After sensor reinstallation, cable replacement, or ROV reconfiguration
- When project requirements change (different target size, different altitude)

---

## :material-information-outline: Surrogate Target Specifications

The surrogate target must be representative of the minimum detectable object specified by the project scope. Typical requirements:

| Parameter | Minimum Specification |
|---|---|
| Target mass | 50 kg ferrous material |
| Target diameter | 0.5 m |
| Material | Steel or iron (high magnetic permeability) |
| Separation between targets | Minimum 20 m (to prevent signal overlap) |

### Noise Floor Measurement

Before deploying surrogate targets, run at least two lines over the cleared test area at operational altitude to establish the **ambient noise floor**. This baseline measurement quantifies the magnetic background in the test area. Record the peak-to-peak noise value in nT -- this becomes the reference against which target detections are measured.

### Detection Signature

A valid "hit" on a surrogate target in the gradiometer data appears as a **dipolar anomaly** -- a characteristic positive-then-negative (or negative-then-positive) deflection as the sensor passes over the target. Key characteristics of a valid detection:

- **Shape**: Bipolar (two-lobed) signature, not a single-sided spike
- **Amplitude**: Clearly above the noise floor (minimum 3x the noise floor amplitude)
- **Width**: Proportional to the altitude -- wider signatures at higher altitudes
- **Repeatability**: Appears at the same position on reciprocal lines

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

---

## :material-check-decagram: Acceptance Criteria

| Parameter | Pass | Fail |
|---|---|---|
| Surrogate detection at operational altitude | Clear dipolar anomaly visible on all passes | No detection or ambiguous signature |
| Signal-to-noise ratio (SNR) | > 3:1 (target amplitude vs noise floor) | < 3:1 |
| Position agreement (reciprocal lines) | Target position consistent within 2 m | > 2 m offset between runs |
| Noise floor (cleared area) | Stable, no unexplained anomalies | Erratic or excessive background noise |
| Repeatability | Consistent detection across all altitudes tested up to operational limit | Inconsistent detection at the same altitude |

!!! warning "Failure Actions"
    If the surrogate item is not detected at the required operational altitude, do not proceed with the survey. Investigate root cause, resolve, and re-test before commencing operations.

---

## :material-wrench: Troubleshooting

| Problem | Possible Causes | Actions |
|---|---|---|
| No detection of surrogate target | Altitude too high for the target size, sensor malfunction, target not ferrous enough, incorrect sensor mode | Reduce altitude and re-run, verify sensor diagnostics, confirm target material is ferrous, check GMA1000 configuration |
| Detection at low altitude but not at operational altitude | Target mass insufficient for the required range, sensor sensitivity degraded | Use a larger surrogate target, check sensor calibration, reduce operational altitude if project allows |
| False positives (detections where no target exists) | Vessel magnetic noise, cable crosstalk, ROV thruster interference, seabed debris in test area | Increase sensor standoff from ROV, inspect cable routing, re-survey the test area to confirm it is clear |
| Inconsistent position between reciprocal lines | Navigation offset, ROV positioning error, current pushing ROV off track | Verify USBL/LBL calibration, check ROV navigation solution, account for current drift |
| High noise floor in test area | Area not magnetically quiet, nearby infrastructure, geological magnetic anomalies | Relocate to a different test area, perform a wider clearance survey, consult Marine Geologist |
| Asymmetric dipolar signature | Sensor orientation error, one sensor element degraded | Re-check sensor alignment, run diagnostics on individual sensor elements |

---

## :material-link-variant: Related Articles

- [Magnetometer/TVG Acceptance Test](../calibration/magnetometer-tvg-acceptance-test.md) -- towed magnetometer acceptance test with reciprocal line comparison
- [Dynamic GNSS Intersystem Check](../positioning/dynamic-gnss-intersystem-check.md) -- verify positioning systems supporting the survey
