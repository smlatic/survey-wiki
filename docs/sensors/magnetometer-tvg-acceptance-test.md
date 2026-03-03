---
title: Magnetometer/TVG Acceptance Test
category: calibration
tags: [magnetometer, tvg, transverse gradiometer, acceptance test, magnetic, pipeline, cable, towed]
equipment: [Magnetometer/TVG System, Towed Vehicle/ROTV, MBES (for reference)]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: converted_procedure
---

# :material-magnet: Magnetometer/TVG Acceptance Test

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Calibration</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Acceptance Test</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Confirm the position accuracy and data quality of a magnetometer or transverse gradiometer (TVG) system by performing an acceptance test over a suitable magnetic contact.

---

## :material-calendar-check: When to Use

- **Every mobilisation** when a magnetometer is in the equipment spread
- After sensor reinstallation or cable replacement
- After any physical disturbance to the towed vehicle or sensor mounting
- When changing from one magnetometer system to another

---

## :material-information-outline: TVG vs Total Field Roles

Understanding the distinction between TVG and total field magnetometer modes is essential for correct deployment:

| Mode | Measures | Primary Use |
|---|---|---|
| **TVG (transverse gradiometer)** | Magnetic gradient between two closely spaced sensors | Detection of small, near-surface ferrous targets (debris, anchors, UXO) |
| **Total field** | Absolute magnetic field intensity | Background field mapping, large-scale anomaly detection (pipelines, geological features) |

The TVG mode cancels out regional field variations and diurnal drift, making it more sensitive to small, localised ferrous objects. Total field mode captures the broader magnetic environment and is used for regional mapping.

### Heading Compensation

Magnetometer sensors are sensitive to the heading of the tow platform. The acceptance test uses reciprocal run lines (opposite headings) specifically to expose any heading-dependent bias in the data. If a consistent offset appears between reciprocal lines, heading compensation may need to be applied or the sensor orientation re-checked.

### Diurnal Variation

The Earth's magnetic field varies throughout the day due to solar activity. For surveys longer than a few hours, diurnal variation monitoring (using a base station magnetometer or repeat lines) should be considered. Acceptance tests are short enough that diurnal effects are typically negligible, but awareness is important for operational planning.

### Line Spacing for Coverage

For operational survey work following the acceptance test, line spacing should be approximately **3x the sensor altitude** to achieve adequate lateral coverage. This ensures overlapping detection envelopes between adjacent lines.

---

## :material-tools: Equipment Required

| Equipment | Role |
|---|---|
| Magnetometer/TVG system | Magnetic field measurement |
| Towed vehicle, ROTV, or ROV | Sensor deployment platform |
| CSAZ software | Sensor orientation verification |
| Navigation and acquisition software | Data acquisition and positioning |

---

!!! info "Prerequisites"
    - Suitable magnetic contact/target identified (pipeline, cable, or wreck)
    - If testing simultaneously with side scan sonar (SSS), avoid using a steel wreck as the target
    - Vehicle pre-dive check completed

---

## :material-list-status: Procedure

### Step 1: Pre-Dive Check

Perform a pre-dive check before launching the vehicle.

### Step 2: Verify Sensor Orientation

Use CSAZ to verify sensor orientation.

### Step 3: Select Target

Choose a suitable magnetic contact/target for the verification test. Options include pipeline, cable, or wreck. If the test is performed simultaneously with a side scan sonar test, avoid using a steel wreck.

### Step 4: Run Lines

Sail the same run line back and forth in opposite directions at a constant speed and heading to confirm whether any deviation in position and magnetic reading exists.

### Step 5: Data Review

Data quality and position shall be confirmed by a Marine Geologist.

---

!!! danger "Safety -- Surrogate Targets"
    If surrogate targets are used with a surface marker buoy:

    - Do not attach the marker buoy directly to the surrogate target
    - Attach the buoy to an offset weight 100-200 m away from the target
    - Use a lead line to connect the target and the offset weight
    - Do not conduct tests with marker buoys in darkness or strong currents
    - Take caution to avoid entanglement of the towed magnetometer with the marker buoy line

---

!!! success "Quality Checks"
    - [x] Target position consistent between reciprocal run lines
    - [x] Magnetic readings consistent between opposite directions
    - [x] No unexplained deviations in position or signal
    - [x] Sensor orientation verified via CSAZ

---

!!! note "Reporting"
    Methodology and results shall be presented in the MAC report, including:

    - Run line plots showing target position from both directions
    - Magnetic readings comparison between reciprocal lines
    - Confirmation of data quality by Marine Geologist

---

## :material-check-decagram: Acceptance Criteria

| Parameter | Pass | Marginal | Fail |
|---|---|---|---|
| Noise floor (TVG mode) | < 1 nT | 1 -- 3 nT | > 3 nT |
| Noise floor (total field) | < 1 nT | 1 -- 3 nT | > 3 nT |
| Surrogate item detection | Clear detection at operational altitude | Detectable but weak signature | No detection at operational altitude |
| Position agreement (reciprocal lines) | Target position consistent within 2 m | 2 -- 5 m offset | > 5 m offset |
| Heading-dependent offset | No systematic offset between headings | Minor offset, within tolerance after compensation | Large offset that cannot be compensated |

!!! warning "Marginal Results"
    If any parameter falls in the marginal range, consult the Client Representative and Marine Geologist before proceeding. Document the decision in the MAC report.

---

## :material-wrench: Troubleshooting

| Problem | Possible Causes | Actions |
|---|---|---|
| High noise floor | Vessel magnetic interference, nearby running equipment, damaged tow cable, sensor too close to vehicle | Increase layback distance, shut down non-essential equipment during test, inspect cable for damage, check sensor-to-vehicle separation |
| No detection of surrogate target | Altitude too high, wrong sensor mode selected, sensor malfunction, target too small | Reduce altitude and re-run, verify TVG/total field mode selection, check sensor diagnostics, use a larger surrogate target |
| Heading-dependent noise or offset | Sensor orientation error, cable twist, vehicle magnetic signature | Re-verify sensor orientation via CSAZ, inspect cable for twists, demagnetise or increase sensor standoff from vehicle |
| Inconsistent position between reciprocal lines | Navigation offset, layback error, cable length incorrect | Verify layback measurement, check cable counter calibration, confirm navigation system configuration |
| Intermittent signal dropout | Cable connection issue, water ingress, power supply instability | Check cable terminations, inspect for water ingress at connectors, verify power supply voltage |

---

## :material-link-variant: Related Articles

- [Surrogate Item Test Using GMA1000 Gradiometer](surrogate-item-test-gma1000.md) -- ROV-mounted gradiometer acceptance test procedure
- [Dynamic GNSS Intersystem Check](../positioning/dynamic-gnss-intersystem-check.md) -- verify positioning systems used for magnetometer line navigation
