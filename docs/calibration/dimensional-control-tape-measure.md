---
title: Dimensional Control Survey Using Tape Measure
category: calibration
tags: [dimensional control, tape measure, offsets, lever arm, hand tools, ROV, sign convention, sensor offsets]
equipment: [Measuring Tape (steel, 5 m minimum), Spirit Level, Notebook/Tablet, Camera]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: converted_procedure
---

# :material-tape-measure: Dimensional Control Survey Using Tape Measure

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Calibration</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Procedure</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Determine sensor offset vectors (lever arms) on ROVs and small platforms using tape measure methods when a total station is not available. This procedure covers reference point identification, sign convention, measurement technique, and photographic documentation to produce offsets accurate enough for subsea INS, DVL, USBL, and MBES operations.

---

## :material-calendar-check: When to Use

Perform tape measure dimensional control when:

- Measuring sensor offsets on an **ROV or small subsea platform** where total station access is impractical
- A sensor has been **added, moved, or replaced** offshore and a total station is not mobilised
- Verifying or updating existing offsets after maintenance or mechanical work on the platform
- Distances between sensors are **less than 5 m** (beyond 5 m, use a total station)
- Quick-check of total station results on accessible sensors

---

## :material-book-open-variant: Theory and Principles

### Sign Convention

Every platform has a defined body-frame coordinate system with an origin and three orthogonal axes. The sign convention must be established before any measurement. A common convention for ROV and subsea platforms is:

| Axis | Positive Direction | Negative Direction |
|------|-------------------|-------------------|
| **X** (longitudinal) | Forward | Aft |
| **Y** (transverse) | Starboard | Port |
| **Z** (vertical) | Down | Up |

!!! danger "Always Confirm the Project Convention"
    Sign conventions vary between manufacturers, software packages, and project specifications. Some systems use positive-up for Z, some use positive-port for Y. **Check the project-specific convention before measuring.** Getting the sign wrong is the single most common tape measure DC error.

### Worked Example

An ROV has an INS at the body-frame origin. The DVL is located 0.35 m forward of the INS reference point, 0.12 m to port, and 0.08 m below.

Using the convention above (forward/starboard/down positive):

| Offset | Value | Reasoning |
|--------|:-----:|-----------|
| X (longitudinal) | **+0.35** | DVL is forward of INS, forward is positive |
| Y (transverse) | **-0.12** | DVL is to port, starboard is positive, so port is negative |
| Z (vertical) | **+0.08** | DVL is below INS, down is positive |

The offset vector entered in the navigation software would be: **X = +0.35, Y = -0.12, Z = +0.08**.

### Reference Points

Each sensor has a defined reference point. This is the point from which offsets are measured. Common reference points:

| Sensor | Reference Point |
|--------|----------------|
| INS/IMU | Inertial measurement centre (marked on housing or defined in datasheet) |
| DVL | Acoustic centre of the transducer face |
| USBL transponder | Acoustic centre (phase centre for HPR types) |
| MBES | Transducer acoustic centre |
| Camera | Lens centre |
| Altimeter | Transducer face centre |

!!! warning "Reference Point vs Housing Edge"
    Never measure to the edge of a housing or a mounting bolt. Always identify the actual reference point from the manufacturer's documentation. If the reference point is internal, measure to the nearest accessible surface and add the documented internal offset.

---

## :material-tools: Equipment Required

| Equipment | Role |
|-----------|------|
| Steel measuring tape (minimum 5 m, graduated to 1 mm) | Primary measurement tool |
| Spirit level (300 mm minimum) | Establishing horizontal reference planes for Z measurements |
| Straight edge or rigid bar | Transferring measurements around obstructions |
| Notebook or tablet | Recording measurements |
| Camera | Photographic documentation of reference points and measurement paths |
| Manufacturer datasheets | Reference point locations for each sensor |

---

!!! info "Prerequisites"

    - Platform coordinate system defined: origin, axes, and sign convention confirmed with the project surveyor
    - Manufacturer datasheets available for all sensors to identify reference points
    - Platform accessible and stable (on deck, in workshop, or in water but stationary)
    - All sensors installed in their operational positions

---

## :material-list-status: Procedure

### Step 1: Define and Mark the Reference Frame

1. Identify the **origin** of the platform body frame. This is normally the INS reference point or a defined structural reference.
2. Mark the platform axes on the frame with tape or marker pen if not already marked.
3. Photograph the origin point with a scale reference visible.
4. Confirm the sign convention with the project surveyor and record it in the measurement notes.

### Step 2: Identify Sensor Reference Points

For each sensor to be measured:

1. Consult the manufacturer datasheet to locate the exact reference point.
2. Mark the reference point on the sensor or adjacent structure if not externally visible.
3. Photograph each marked reference point.

!!! tip "Internal Reference Points"
    Many INS units have their measurement centre inside the housing. The datasheet will give the offset from an external marking (usually a scribed line or label). Measure to the external marking and apply the documented internal offset.

### Step 3: Measure X, Y Offsets

1. Measure the **straight-line distance** along each axis from the origin to the sensor reference point.
2. Measure along the platform structure, keeping the tape parallel to the axis being measured.
3. If a straight path is obstructed, measure in segments and sum the lengths, or use the diagonal method (see below).
4. Take each measurement **twice**. If the two readings differ by more than the acceptance tolerance, take a third measurement and use the mean of the two closest.
5. Record the **sign** based on the agreed convention.

### Step 4: Measure Z Offsets

Z (vertical) measurements are the most error-prone with tape methods. Use one of these approaches:

**Method A: Spirit Level and Direct Measurement**

1. Place a spirit level on the reference point of the origin sensor (or the surface immediately adjacent).
2. Use the spirit level to project a horizontal plane to the region of the target sensor.
3. Measure the vertical distance from this horizontal plane to the target sensor reference point.

**Method B: Diagonal and Compute**

When direct vertical measurement is not possible:

1. Measure the straight-line diagonal distance (D) from origin to sensor reference point.
2. Measure the horizontal distance (H) along the X-Y plane between the two points.
3. Compute the vertical offset: **Z = sqrt(D^2 - H^2)**

!!! tip "Diagonal Worked Example"
    Measured diagonal from INS to DVL: D = 0.42 m. Measured horizontal distance: H = 0.37 m.
    Z = sqrt(0.42^2 - 0.37^2) = sqrt(0.1764 - 0.1369) = sqrt(0.0395) = 0.199 m, round to **0.20 m**.

### Step 5: Record All Measurements

Use a structured measurement table. Complete one row per sensor.

| Sensor | Ref Point | X (m) | Y (m) | Z (m) | Method | Measured By | Date |
|--------|-----------|:-----:|:-----:|:-----:|--------|------------|------|
| DVL | Acoustic centre | +0.35 | -0.12 | +0.08 | Direct tape | E. Smlatic | 2026-03-01 |
| USBL Transponder | Phase centre | -0.18 | +0.05 | +0.22 | Diagonal | E. Smlatic | 2026-03-01 |
| MBES | Transducer centre | +0.52 | +0.00 | +0.15 | Direct tape | E. Smlatic | 2026-03-01 |
| Altimeter | Transducer face | +0.10 | -0.08 | +0.30 | Spirit level | E. Smlatic | 2026-03-01 |

### Step 6: Photographic Documentation

Photograph:

- The origin point with axis labels visible
- Each sensor reference point (close-up with scale)
- The measurement path for each offset (showing tape route)
- Any obstructions or unusual measurement paths
- Overview photo of the full platform showing all sensor locations

### Step 7: Verify and Cross-Check

1. Where possible, measure between two non-origin sensors and verify the result matches the difference of their individual offsets from the origin.
2. Compare measured values with any previous DC survey results or manufacturer drawings.
3. If any measurement exceeds tolerance, re-measure and investigate.

---

## :material-check-decagram: Acceptance Criteria

!!! success "Measurement Accuracy Tolerances"

    | Distance Range | Required Accuracy | Notes |
    |:--------------:|:-----------------:|-------|
    | < 1 m | &le; 0.01 m (10 mm) | Achievable with careful tape work |
    | 1 to 3 m | &le; 0.05 m (50 mm) | Tape sag and path errors increase |
    | 3 to 5 m | &le; 0.10 m (100 mm) | Limit of reliable tape measurement |
    | > 5 m | **Use a total station** | Tape methods not suitable |

    Repeat measurements must agree within the tolerance for the distance range. If they do not, re-measure until two readings agree.

---

## :material-wrench: Troubleshooting

| Problem | Cause | Solution |
|---------|-------|----------|
| Repeat measurements disagree beyond tolerance | Tape not following straight path, sag, or different measurement path each time | Use a rigid straight edge to guide the tape. Measure in shorter segments. |
| Z offset seems too large or too small | Measured to wrong surface, spirit level not truly horizontal | Re-check the reference point location. Re-level the spirit level. Use diagonal method as cross-check. |
| Sign convention confusion | Positive/negative direction unclear for the platform | Draw a sketch with arrows showing positive direction for each axis. Confirm with project surveyor before entering values. |
| Cannot reach sensor reference point directly | Physical obstruction between origin and sensor | Measure in segments. Use diagonal method. Document the measurement path with photos. |
| Tape sag on longer measurements | Tape not supported, gravity pulling tape below true line | Support the tape at intermediate points. For horizontal measurements, apply light tension. For accuracy-critical measurements over 3 m, use a total station instead. |
| Wrong reference point used | Measured to housing edge instead of acoustic/measurement centre | Always consult manufacturer datasheet. Reference points are rarely at the physical edge of a sensor. |

---

## :material-link-variant: Related Articles

- [Dimensional Control Survey](dimensional-control-survey.md)
- [INS/DVL Calibration Guide](ins-dvl-calibration-guide.md)

---

!!! quote "References"
    - IMCA S 017, Guidelines for Position Reference Systems
    - Sensor manufacturer datasheets for reference point definitions
