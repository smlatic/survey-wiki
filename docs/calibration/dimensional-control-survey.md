---
title: Dimensional Control Survey
category: calibration
tags: [dimensional control, lever arm, offsets, total station, photogrammetry, vessel survey, Spatial Analyzer, USMN, prism, target, structure survey]
equipment: [Total Station, Calibrated Steel Tape, Photogrammetry System, Spatial Analyzer, Spike Prism, Peanut Prism, Hidden Point Pole]
date_added: 2026-03-01
source_type: converted_procedure
---

# :material-ruler-square-compass: Dimensional Control Survey

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Calibration</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Procedure</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Comprehensive guide for dimensional control surveys on vessels and subsea structures. Covers site procedures, total station methodology, target types, observation techniques, Spatial Analyzer (SA) processing, USMN network adjustment, and offset/attitude computations. Applies to both vessel sensor surveys and structure surveys for subsea metrology.

---

## :material-target-account: Survey Accuracies and Tolerances

Achievable accuracy depends on environmental conditions:

| Condition | Typical Accuracy |
|-----------|:----------------:|
| Small area, stable structure, enclosed climate-controlled building | < ±2 mm |
| Outdoor yard, reasonable conditions | ±2-3 mm |
| Worst case (vessel deck, weather exposure) | +3 / -5 mm |

!!! tip "Always Strive for Millimetre Accuracy"
    Regardless of conditions, the survey crew should always aim for millimetre accuracy. Client-defined tolerances take precedence -- confirm these before mobilisation.

---

## :material-tools: Equipment Required

| Equipment | Role |
|-----------|------|
| Total station with valid calibration certificate | Primary measurement instrument |
| Calibrated steel tape | Distance verification |
| Coded targets and scalebars | Photogrammetry reference points |
| Photogrammetry system (if applicable) | 3D position measurement |
| Spike prism, peanut prism, hidden point pole | Feature measurement (see Target Types) |
| Tape targets, magnetic targets, metal targets | Control network and feature marking |
| All instruments must have valid calibration certificates | Quality assurance |

---

!!! info "Prerequisites"
    - Scope of work defined
    - Vessel/structure drawings available (top view, side view, survey item drawings), preferably in DWG format
    - Specific procedures to be followed identified
    - Metrology data from previous surveys (if available)
    - Surveyor must have minimum 2 years relevant experience with industrial surveying and sensor calibration

---

## :material-eye: Survey Reconnaissance

Before any other steps, the survey crew must perform a reconnaissance:

- [x] **Assess health and safety risks** -- traffic, other work in progress, safe access, total station setup locations
- [x] **Identify total station positions** with clear line of sight to all relevant features
- [x] **Record identifying marks** on the structure (name, serial number, hub labels)
- [x] **Create a field sketch** of the structure with all features to be surveyed labelled

---

## :material-list-status: Vessel Survey Procedure

### Step 1: Site Arrival and Safety

- Report to vessel contact person upon arrival
- Inform the bridge about planned survey activity
- Complete safety briefing and Safe Job Analysis
- Check rules for working at heights and PPE requirements
- Get acceptance for using electrical sources and battery-powered instruments
- Get approval for entering the site area

### Step 2: Vessel Inspection

- Verify that all equipment to be surveyed is installed
- Plan the survey process and access routes
- Get approval for any necessary fencing off to secure instruments
- Obtain permits to work as needed

### Step 3: Establish Coordinate Reference System

- **Reference plane:** Best fit plane through draft marks (drydock) or multiple points on main deck (afloat)
- **CRP (X=0, Y=0, Z=0):** Centreline for X-axis, aft perpendicular (AP) for Y-axis, baseline for Z-axis
- **Orientation:** Aft centreline to forward centreline
- **Positive X-axis:** Starboard
- **Positive Y-axis:** Forward
- **Positive Z-axis:** Upwards

### Step 4: Survey Items

**In the vessel:**

| Item | Measurements |
|---|---|
| GNSS antennas (all systems) | Position (and Yaw for dual-antenna systems) |
| Wind sensor | Position |
| MRU / Motion sensors | Position, Pitch, Roll, Yaw |
| Gyrocompass | Position, Pitch, Roll, Yaw |
| INS / IMU | Position, Pitch, Roll, Yaw |
| HiPAP transducer | Position, Pitch, Roll |
| ROV beams | Yaw |
| Moonpool | Position |
| Reference points for future use | Position |

**Under the vessel's hull:**

| Item | Measurements |
|---|---|
| Multibeam echosounder | Position, Pitch, Roll, Yaw |
| Single beam echosounder | Position, Yaw |
| Far sounder | Position |
| Speed log | Position |
| HiPAP (extended) | Position, Pitch, Roll |

### Step 5: Demobilization

- Ensure no hazard area is created
- Clean up any garbage or spill
- Remove fencing and markers
- Inform site responsible and bridge before leaving

---

## :material-crosshairs-gps: Control Points

Control points serve two critical purposes:

### 1. Position Checks Within a Setup

Observe a control point **before and after** each total station setup.

!!! danger "2 mm Rule"
    If the difference between the opening and closing observation to a control point is **≥ 2 mm**, all observations from that setup must be **re-observed**.

### 2. Relating Multiple Setups

When surveying from multiple total station positions:

- [x] Minimum **5 common control points** must be visible from each setup
- [x] Observe all visible control points before making any other measurements
- [x] Perform a rough fit check between setups in SA: **Instrument >> Locate (Transform to Part) >> Best-Fit**
- [x] If overall error exceeds **2 mm** (even after excluding one point), discard and re-observe

For surveys with **3 or more setups**, run an additional check:

**Analysis >> Coordinate Uncertainty >> USMN** (see Post-Processing section below)

### Control Point Placement

- Place on stable surfaces that won't be disturbed during the survey
- Spread points to give good geometry (avoid clustering)
- Use numbered tape targets for permanent points
- Mark around magnetic target bases with a marker to detect movement

---

## :material-cog-outline: Observation Methodology

### Instrument Setup

1. **Temperature equilibration** -- open instrument case early to equalise with ambient air temperature
2. **Record conditions** -- temperature, barometric pressure, weather (or note if survey is indoors)
3. **Enter atmospheric corrections** into the instrument
4. **Check electronic bubble level** -- confirm instrument is level
5. **Set correct prism constant** for the target type being used
6. **Set EDM to average minimum 5 readings** (reduces random noise)
7. **Set output units** to **metres** and **DMS** (degrees, minutes, seconds)

!!! danger "Units Must Be Correct"
    The instrument must output distances in metres and angles in DMS. Failure to set this correctly will cause errors in SA data recording, rendering all gathered data **unusable**.

!!! warning "Reflectorless EDM"
    Never use reflectorless EDM unless the feature is impossible to safely access by survey personnel. Always prefer prism-based measurements.

### Tilt Compensator

| Environment | Compensator Setting | Reason |
|-------------|:-------------------:|--------|
| **Dynamic** (vessel deck) | **OFF** | Corrections depend on where in pitch/roll cycle the observation is made, introducing random error |
| **Stable** (yard, building) | **ON** | Corrects for minor instrument levelling errors |

---

## :material-bullseye-arrow: Target Types

### Tape Targets

Adhesive-backed, individually numbered panels. Used for:

- Control networks
- GNSS antenna position verification
- Gyrocompass calibration baselines
- Any clean, stable surface

### Magnetic Targets

Mounted on magnets with 2 degrees of freedom rotation, raised above the surface.

| Pros | Cons |
|------|------|
| Greater visibility area due to rotation and height | Easily disturbed (magnetic attachment only) |
| Quick to place | More visible to passersby (risk of interference) |
| | No individual numbers -- easy to misname |

!!! tip "Movement Detection"
    Trace around the base of each magnetic target with a marker. If the target moves, it will be obvious. Write a number near each target for identification.

### Spike Prism

Mini-prism mounted on a scribe or metal spike with a point tip.

- Set the correct prism constant in the instrument (should be written on the spike)
- Place tip on the point of interest
- Tilt prism towards the instrument for measurement

### Peanut Prism

Elevated prism with extensions available for additional height.

- Built-in level bubble -- **must be level** before any observations
- Measurements reference a vertical offset parallel to gravity direction
- **Requires tilt compensator ON** in the instrument

!!! danger "Dynamic Environments"
    The peanut prism **cannot be used** when the tilt compensator must be switched off (e.g., on a vessel deck in motion).

### Hidden Point Pole

For features that cannot be directly observed from any instrument position.

1. Place tip on the feature and brace the pole securely
2. Observe the target furthest from the tip (Point A)
3. Observe a second point along the pole (Point B)
4. Process in SA: **Construct >> Point(s) >> Hidden Point Bar**

### Metal Targets

Rigid metal with engraved crosshair target, attached using magnets. Where the centreline intersects the lower edge = measurement point.

**Hang-off variant:** Arms rest on top of the feature, lip steadies against the side. Same measurement methodology.

---

## :material-shape-outline: Observation of Features

### Circles

- Use a **shallow viewing angle** to the face (EDM error > angular error at short distances)
- Minimum **5 points** evenly spaced around the circumference
- For larger circles, observe more points
- Minimum coverage: **half the circumference** if full access is not possible

### Planes

- Minimum **15 points** spread over the entire surface
- Target residual RMS: **< 0.5 mm**
- If residuals are too high, re-observe or add more observations

### Cylinders

- Minimum **10 points**: one ring of 5 at each end
- Plus **2 additional points** along the length for orientation
- For larger radius cylinders, add more circumference points
- Check cylinder fit quality -- discard and re-observe if residuals are too high

### Lines

- Minimum **5 points** along the full visible length
- For longer lines, add more points to capture any deviations

---

## :material-notebook-edit: Field Notes Best Practices

### First Page

- [x] What is being surveyed
- [x] Client name
- [x] Job number
- [x] Date
- [x] Names of all survey crew
- [x] Yard/location name and address
- [x] Weather conditions, temperature, barometric pressure
- [x] SA filename

### Subsequent Pages

| Left-hand Side | Right-hand Side |
|---------------|----------------|
| Prism constants and heights | Structure sketches with feature labels |
| Notes during survey | Additional sketches as needed |
| Calculation results | Rough calculations |

!!! tip "SA File Naming"
    Name the file descriptively followed by `_original` (e.g., `manifold_A_original.sa`). This indicates raw field observations. Keep this file separate from the processing file.

    For multiple structures surveyed simultaneously, use different **Collections** in SA with structure names.

---

## :material-calculator: Post-Processing in Spatial Analyzer

### USMN (United Spatial Metrology Network)

For surveys with 3+ setups, use USMN to check the overall network quality:

**Analysis >> Coordinate Uncertainty >> United Spatial Metrology Network**

1. Exclude all points that are not control points (including check shots)
2. Check for points with only one observation (could indicate mislabelled points)
3. Use **Best-fit Only** option -- check Max Error for egregious errors (order of metres = mislabelled point)

!!! warning "Outlier Detection"
    Use the **Max Err** column for outlier detection, **NOT** the Ranking column. Ranking uses a 3-sigma confidence interval which is unreliable with the small number of observations typical in DC surveys.

    **Do NOT use Trim Outliers** -- it uses Ranking as the basis for exclusion.

### Hidden Point Pole Processing

1. Open **Hidden-Point Bar Database** in the options menu
2. Enter distances between the two observed points and between one point and the tip
3. **Construct >> Point(s) >> Hidden Point Bar**
4. Point A = furthest from tip, Point B = other point

!!! warning "Auto-Compute Limitation"
    SA has an auto-compute utility using a naming convention, but the computed point is **not linked to any instrument**. If the instrument position is later adjusted, the auto-computed point will not update. Manually compute the point instead.

### Offset Computations

1. **Query >> Points To >> Single Point** -- select reference point, then all points of interest
2. Creates a **Vector Group** in the SA TreeBar
3. Open properties >> **Report** for a table of offsets
4. **Excel Export** for spreadsheet output

!!! tip "Auto-Recompute"
    If working units or frame orientation change, the offsets in the Report table automatically recompute to reflect the changes.

### Pitch and Roll Computation

From a best-fit circle or plane, with the working frame set to the structure frame:

```
pitch = -arctan(dY / dZ)
roll  =  arctan(dX / dZ)
```

Where dX, dY, dZ are the offset components between the feature centre point and its point on the normal vector.

- **Positive pitch:** counter-clockwise rotation about X-axis (plane tilts forward)
- **Positive roll:** counter-clockwise rotation about Y-axis (plane tilts to starboard)

---

## :material-list-status: Reference Points (Legacy Procedure)

Leave at least 5 well-spread reference points in each key location. Every point must be punch-marked with a detail photo showing offsets and an overview photo.

Recommended locations:

- Superstructure
- Back deck
- Helideck
- MRU/IMU room
- ROV hangar
- HiPAP hatch

---

!!! note "Reporting"
    The report shall include:

    - Project and structure identification
    - Surveyor names, place, and time
    - Scope of work
    - Survey results with accuracy documentation (general, detail, instrument, and total determination accuracy)
    - Clear description of coordinate reference system (axes, reference plane, CRP)
    - Non-conformance or out-of-tolerance situations
    - Overview sketches with axes, CRP, and reference plane
    - Detail photos with positions of all survey items
    - Design drawings as references

---

!!! quote "References"
    - ISO 19901-7 (Metocean and positioning)
    - IMCA S 015 (Guidance on vessel surveys)
    - Spatial Analyzer documentation (New River Kinematics)
