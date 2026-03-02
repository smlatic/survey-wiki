---
title: Pipeline and Umbilical Survey Operations
category: rov
tags: [pipeline, umbilical, as-laid, as-built, inspection, touchdown, pre-lay, ROTV, OOS, free span, burial, pipetracker]
equipment: [MBES, DHSS, Pipetracker, SSS, DVL, INS, USBL, Digiquartz, VisualWorks]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: converted_procedure
---

# :material-pipe: Pipeline and Umbilical Survey Operations

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>ROV Operations</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Reference Guide</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Comprehensive reference covering the various types of pipeline, umbilical, and cable surveys -- from pre-lay route surveys through to inspection. Covers equipment requirements, horizontal and vertical control methods, data acquisition principles, online eventing, and reporting for each survey phase.

---

## :material-book-open-variant: Key Definitions

Throughout pipeline survey operations, the term **product** refers to pipelines, umbilicals, or cables.

### Depth and Profile Measurements

| Term | Definition | Formula |
|------|-----------|---------|
| **DOC** | Depth of Cover | TOP Depth - Seabed Level above pipeline |
| **DOL** | Depth of Lowering | TOP Depth - Mean Seabed Level (MSBL) |
| **DOT** | Depth of Trench | Seabed Level above pipeline - MSBL |
| **MSBL** | Mean Seabed Level | Local reference to seabed along the product |

!!! warning "MSBL vs Vertical Datum"
    MSBL is a **local** reference to the seabed along the product. It is NOT the vertical datum (LAT, MSL, etc.). Do not confuse the two.

### Common Abbreviations

| Abbreviation | Meaning |
|-------------|---------|
| KP | Kilometre Post |
| STA | Station Point |
| DCC | Distance Cross Course |
| A&R | Abandonment and Recovery |
| CP | Cathodic Protection |
| TOP | Top of Pipe |

---

## :material-view-list: Survey Types Overview

Pipeline and umbilical work involves several distinct survey types, each with specific objectives and requirements:

| Survey Type | Phase | Primary Objective |
|------------|-------|-------------------|
| ROTV / Tow-fish Route | Pre-installation | Rapid observation of proposed lay route |
| Pre-Lay | Pre-installation | Verify route clear of obstructions |
| Touchdown Monitoring | During installation | Verify product laid within corridor |
| As-Laid / Pre-Trench | Post-installation | Determine position, profile, and condition |
| As-Trenched | Post-trenching | Determine DOC, DOL, DOT |
| Out of Straightness (OOS) | Post-installation | Measure lateral displacement |
| As-Built | Post-tie-in | Provide final as-built status |
| Inspection | Ongoing | Monitor condition over time |

---

## :material-submarine: ROTV / Tow-fish Route Surveys

Rapid observation surveys using a towed vehicle for reconnaissance of a proposed lay route or existing pipeline.

### Objectives

- [x] Obtain horizontal and vertical position of ROTV in project datum
- [x] Position, orient, and dimension incidental features relative to proposed route
- [x] Determine distances from route to existing pipelines and infrastructure
- [x] Produce field reports and maintain online logbook

### Equipment

Typically a towed vehicle fitted with:

- Side scan sonar (SSS)
- Sub-bottom profiler
- USBL transponder
- Pitch and roll sensor

### Operating Parameters

| Parameter | Pipeline Survey | Pre-Lay Survey |
|-----------|:--------------:|:--------------:|
| SSS Range | ~50 m | 100-200 m |
| Strike Angle (surface-laid) | 10° - 20° | -- |
| Strike Angle (trenched) | 20° - 40° | -- |
| Flying Height | ~10% of operating range | ~10% of range |
| Minimum Speed | 2 m/s | 2 m/s |

### Horizontal Control

Combined DGPS/USBL solution. For deeper waters, integrate with an inertial system.

!!! tip "Relative vs Absolute"
    Frequent, good quality, low-noise **relative** positioning is more important than absolute position accuracy for towed vehicle surveys.

### Best Practices

- [x] Run adjacent lines in **opposite directions** for better positioning accuracy
- [x] Start with a **wing line** to ensure opposite directions are achieved
- [x] Side scan range should exceed line spacing by **25% minimum** for 50% overlap
- [x] Make course alterations gradually to avoid instability
- [x] Lower frequency SSS = greater range but lower resolution; higher frequency = vice versa

---

## :material-map-marker-path: Pre-Lay Surveys

Carried out prior to product installation.

### Objectives

- [x] Verify lay route is clear of obstructions
- [x] Confirm position of known seabed architecture along the route
- [x] Install aids to lay (if required)

### Horizontal Control

DGPS/USBL solution. For deeper waters, integrate with DVL, inertial navigation system, or LBL array.

### Vertical Control

| Sensor | Purpose |
|--------|---------|
| High precision Digiquartz depth sensor | Primary depth measurement |
| Pitch and roll sensor | Correct vertical offsets |
| DHSS or MBES | Seabed cross profiles |

### Aids to Lay

May include:

- **LBL arrays** (4-6 transponders) for start-up and lay-down target boxes
- **Initiation piles or clump weights** for anchorage at start of lay
- **Mattress supports** and crossing protection structures

---

## :material-arrow-down-circle: Touchdown Monitoring

Takes place during product installation.

### Objectives

- [x] Verify product laid within the lay corridor
- [x] Avoid immovable obstacles
- [x] Ensure crossings at correct locations
- [x] Confirm end position within tolerance

### Three Phases

#### 1. Initiation

Positioning the initiation head in a fixed target box:

| Water Depth | Method |
|-------------|--------|
| **Deep water** (or small target box) | LBL array + fixed COMPATT on initiation head |
| **Shallow water** (standard accuracy sufficient) | USBL positioning only |

#### 2. Standard Pipe-Lay Monitoring

Continuous monitoring of touchdown point position, ensuring the pipeline stays within the lay corridor. Key data:

- ROV position (KP, DCC, depth, altitude)
- Pipeline position relative to corridor
- Field joint numbers and piggyback clock positions
- Video recording with overlay

#### 3. Lay-Down

Final positioning of the lay-down head. Specific field report documenting:

- Position of lay-down head
- Relationship with target box
- Pipeline heading

### Cut-to-Length (CTL) Calculations

For rigid pipe, the length to lay-down must be calculated precisely:

1. Deploy **2 CTL transponders** 100 m apart, slightly off route
2. Calculate along-line distance from reference field joint to target
3. Account for:
    - Catenary layback
    - Weld-to-flange distances of end assemblies
    - Loss over ground
    - Pipe contraction/expansion due to water temperature

!!! tip "Refining the CTL Factor"
    Compare cumulative length of pipe laid against along-line distance to the CTL reference field joint. This derived factor improves CTL accuracy throughout the lay.

### Abandonment and Recovery (A&R)

During abandonment:

- [x] Monitor TD point during A&R head lowering
- [x] Position fix A&R head on seabed (minimum 10 position fixes)
- [x] Conduct GVI of A&R head
- [x] Document relationship, configuration, and status

---

## :material-pipe-wrench: As-Laid / Pre-Trench Surveys

Carried out after installation (as-laid) or before trenching (pre-trench).

### Objectives

- [x] Determine position, KP/STA, seabed and product profile
- [x] Create longitudinal profile
- [x] Assess condition including events, anomalies, and debris
- [x] Pre-trench: identify obstacles to trenching

!!! warning "High Accuracy Required"
    High accuracy is critical for two reasons:

    1. **Imperfections masked by noisy data** -- relatively small amplitude imperfections may have significant impacts on pipeline operating temperature
    2. **Noisy data = larger rock dump volumes** -- higher uncertainty in the pipeline profile leads to larger (and more costly) rock dumping operations

### Top-of-Pipe Measurement Methods

| Method | Technique | Pros | Cons |
|--------|-----------|------|------|
| **Contact** | Sprung Digiquartz undercarriage maintains contact with pipeline | Direct measurement, high accuracy | Physical contact with product |
| **Non-contact** | ROV flies over pipeline using DHSS + Pipetracker combination | No contact with product | Relies on sensor integration |

Both methods require integration of DHSS or MBES for DOL and DOC information relative to mean seabed.

---

## :material-chart-line: Out of Straightness (OOS) Surveys

Determine pipeline lateral displacement from a straight line between defined points.

Uses a combination of:

- [x] MBES/DHSS for seabed cross profiles
- [x] Pipetracker/scanner for top-of-pipe detection
- [x] INS for high-accuracy positioning

---

## :material-shovel: As-Trenched Surveys

Carried out after trenching. Same general approach as as-laid surveys, but focused on determining:

- [x] **Depth of Cover (DOC)** -- is the product adequately buried?
- [x] **Depth of Lowering (DOL)** -- how far below mean seabed?
- [x] **Depth of Trench (DOT)** -- trench depth relative to surrounding seabed

---

## :material-check-decagram: As-Built Surveys

Carried out on completion of installation and tie-in.

### Objectives

- [x] Provide the **as-built status** of the product
- [x] Confirm final position, profile, and condition
- [x] Document all engineering features, connections, and tie-in points

May be carried out concurrently with as-laid, as-trenched, or OOS surveys.

---

## :material-magnify: Inspection Surveys

Regular or interval-based monitoring of existing product.

### Objectives

- [x] Detect movement or displacement
- [x] Identify damage, free spans, or exposure changes
- [x] Monitor burial status
- [x] Assess anode wastage and cathodic protection levels
- [x] Document debris and seabed changes

---

## :material-video: Data Acquisition Principles

### Pre-Survey Checks

Complete a pre-survey sensor checklist before every survey.

### Digital Video Recording

Preferred system: **VisualWorks** -- records and time-tags video and data, allowing event-driven or parameter-driven review.

!!! warning "Avoid Video Overlay"
    Avoid feeding data overlay onto digital video for the following reasons:

    1. Recalculated KP/STA and depth values will NOT be reflected on the overlay (shows raw data only)
    2. More correctly tagged information is available through review software than can fit on the overlay
    3. Signal routing through overlay hardware may degrade video quality

### Camera Arrangement

For buried or trenched product:

- **Forward-looking** camera for navigation
- **Downward-looking** camera for pipe tracking
- **Side-mounted** camera for inspection detail

---

## :material-bell-alert: Online Eventing

Events are recorded in real-time during surveys using event logging software.

### Event Types

| Event | Description | Key Notes |
|-------|-------------|-----------|
| **Field Joints** | Weld points between pipe joints | Metal sheet with banding straps, bitumen protection, numbered |
| **Anodes** | Cathodic protection elements | Sacrificial, deteriorate over time |
| **CP Measurements** | Cathodic protection readings | Taken during inspection surveys |
| **Free Spans** | Pipeline unsupported sections | Start/end defined by camera or processed data |
| **Burial** | Product covered by seabed material | Crown exposed but dust-covered = NOT buried |
| **Engineering Features** | Design items (not product) | Initiation assemblies, tee-pieces, end flanges |
| **Debris / Litter** | Foreign objects near product | Position, size, and description logged |
| **Boulders** | Seabed features | Position and dimensions logged |

!!! tip "Free Span Reporting"
    Reportable free spans (length and height criteria) should be defined in the project plan or agreed with the client **before** the survey starts.

!!! info "Survey Speed"
    If event frequency increases, reduce survey speed to ensure all events are correctly and accurately logged.

---

## :material-compass: Horizontal Control Summary

| Survey Type | Primary Method | Deep Water Enhancement |
|------------|----------------|----------------------|
| ROTV / Tow-fish | DGPS + USBL | Inertial system |
| Pre-Lay | DGPS + USBL | DVL, INS, or LBL |
| Touchdown | USBL (+ LBL for initiation) | LBL array |
| As-Laid / Pre-Trench | USBL | INS integration |
| OOS | USBL + INS | LBL as needed |
| As-Built | USBL | INS integration |
| Inspection | USBL | INS as needed |

---

## :material-arrow-expand-vertical: Vertical Control Summary

| Sensor | Primary Role |
|--------|-------------|
| **Digiquartz depth sensor** | High-precision depth measurement |
| **Pitch and roll sensor** | Correct vertical offsets between sensors |
| **DHSS / MBES** | Seabed cross profiles, DOL/DOC |
| **Pipetracker** | Top-of-pipe detection |
| **Scanning sonar** | Cross profiles (alternative to DHSS/MBES) |

!!! warning "Offset Accuracy Critical"
    Horizontal and vertical offsets between sensors must be measured accurately so that the effects of pitch and roll are applied properly.

---

## :material-monitor-eye: Data QC

The online surveyor continuously monitors all survey sensors including:

- Navigation systems
- Video quality
- Sonar systems
- Depth and altitude
- All other logged sensors

!!! danger "Quality Gate"
    If data quality falls below acceptable levels, the survey **must be halted**. The survey only continues when:

    1. Data quality is restored to acceptable levels, **OR**
    2. The Party Chief instructs continuation after client consultation

All significant operational difficulties must be documented for historical reference and to assist data processing.

---

## :material-file-document: Reporting Requirements

Each survey type requires:

- [x] Field reports or memos as specified
- [x] Online logbook (vessel movements, position fixes, events, times)
- [x] Video with overlay (date, time, ROV position, KP, DCC, depth, altitude, dive number, task)
- [x] Real-time data transmission to lay vessel (during TD monitoring)
- [x] Commentary in English using common offshore terminology

---

## :material-magnet: Pipetracker Theory and Operation

The pipetracker (e.g., HydroPACT 440/660, TSS 440/660) detects metallic pipelines and umbilicals using **electromagnetic (EM) induction**.

### Operating Principle

The system transmits a low-frequency EM field from a set of coils mounted on the ROV. When this field encounters a metallic conductor (pipe wall, armour wires), it induces **eddy currents** in the metal. These eddy currents generate a secondary EM field that is detected by the receiver coils. The relative strength and phase of the received signal across multiple coils allows the system to determine:

- **Lateral offset** (cross-track distance to the pipe centreline)
- **Vertical range to target (VRT)** (distance from the sensor to the pipe)

### Key Factors Affecting Detection

| Factor | Effect |
|--------|--------|
| Pipe material | Ferrous metals (steel) produce the strongest response; non-metallic pipes are invisible |
| Pipe diameter and wall thickness | Larger diameter and thicker walls increase detection range |
| Burial depth | Detection range decreases with burial depth; signal attenuates through seabed material |
| Seabed conductivity | Conductive seabeds (clay) attenuate the signal more than resistive seabeds (sand) |
| Survey altitude | Must be within the VRT for reliable detection |
| ROV speed | Excessive speed reduces signal-to-noise ratio |

!!! info "Limitation"
    Pipetracker cannot detect non-metallic products (e.g., plastic-lined flowlines without armour wires, concrete-coated pipes with no metallic component). Verify pipe construction before relying on pipetracker data.

---

## :material-cog-transfer: Processing Workflow Overview

A typical pipeline survey data processing workflow follows these steps:

1. **Import raw data** -- Navigation, depth, altitude, pipetracker, MBES/DHSS cross profiles, events
2. **QC navigation** -- Check for jumps, gaps, and outlier positions; smooth or interpolate as needed
3. **Apply tidal corrections** -- Convert depth data to the project vertical datum
4. **Calculate KP/STA** -- Assign along-line distance to each data point (see KP Calculation below)
5. **Generate profiles** -- Longitudinal profile (depth/altitude vs KP), cross profiles at regular intervals
6. **Calculate DOC/DOL/DOT** -- From cross profiles and pipetracker data relative to MSBL
7. **Event reconciliation** -- Cross-check logged events against processed positions and video
8. **Generate deliverables** -- Charts, profiles, event tables, statistics, and final report

---

## :material-road: Pipeline Crossings

When the product being surveyed crosses an existing pipeline or cable:

### Pre-Crossing

- Identify all crossing locations from route plans and existing as-built data
- Confirm crossing protection (mattresses, rock dump, grout bags) has been installed if required
- Plan approach speed and sensor configuration for the crossing zone

### During Crossing

- **Reduce speed** to ensure accurate data capture at the crossing
- Record the crossing event with precise position (KP, Easting, Northing, depth)
- Capture **video evidence** of crossing condition, protection, and separation
- If multiple products cross, identify each product by type, diameter, and owner

### Post-Crossing

- Verify separation between products meets design requirements
- Document any anomalies (inadequate protection, contact between products, damage)
- Include crossing details in the field report with video frame references

---

## :material-crane: Stinger Monitoring

During pipe-lay operations, the **stinger** (the curved ramp extending from the lay vessel stern through which the pipe passes into the water) may require survey monitoring:

- Monitor the pipe departure angle from the stinger tip
- Confirm the pipe catenary is within design parameters
- Position the stinger tip relative to the vessel reference point
- Report any anomalies in pipe curvature or stinger configuration

!!! warning
    Stinger monitoring is a safety-critical activity. Any departure from the design envelope must be reported immediately to the pipe-lay superintendent.

---

## :material-map-marker-distance: KP Calculation Methods

KP (Kilometre Post) can be calculated in two ways, and it is important to understand which is being used:

| Method | Description | When Used |
|--------|-------------|-----------|
| **Along-centreline KP** | Distance measured along the actual pipeline centreline as it curves and bends on the seabed | Standard for as-laid, as-built, inspection surveys |
| **Straight-line KP** | Distance measured along a straight line between two defined points | Sometimes used in pre-lay planning |

!!! warning "KP Discrepancy"
    Along-centreline KP will always be **equal to or greater than** straight-line KP because the pipe route is never perfectly straight. The difference increases with lateral displacement and route curvature. Always clarify with the client which KP method is required for reporting. Using the wrong method can cause misalignment between survey KP and pipe tally KP.

---

## :material-speedometer: Speed Effects on Sensor Data Quality

Survey speed directly impacts the quality of all sensor data. Excessive speed degrades results:

| Sensor | Effect of Excessive Speed |
|--------|--------------------------|
| **MBES/DHSS** | Increased noise, gaps in coverage, poor cross-profile resolution |
| **Pipetracker** | Reduced signal-to-noise ratio, potential loss of pipe detection |
| **Camera/video** | Motion blur, inability to log events accurately |
| **Digiquartz depth** | Sensor response lag causes smoothing of profile features |
| **INS** | Generally robust to speed changes, but DVL bottom-lock may degrade at very high speeds or high altitudes |

!!! tip "Recommended Practice"
    Typical pipeline survey speeds are **0.3 to 0.5 knots** (0.15 to 0.25 m/s) for as-laid and inspection surveys. Higher speeds (up to 1.0 knot) may be acceptable for pre-lay and ROTV surveys where event density is low. If event frequency increases (e.g., approaching a crossing, area of damage, or congested infrastructure), **reduce speed** to ensure all events are captured.

---

## :material-calendar-check: When to Use

This article is a **reference guide** for pipeline and umbilical survey operations. Consult it:

- When planning any pipeline survey (pre-lay, touchdown, as-laid, as-trenched, inspection)
- When setting up ROV sensors for pipeline tracking
- When clarifying KP calculation methods or DOC/DOL/DOT definitions
- When preparing field reports for pipeline survey activities
- When troubleshooting data quality issues during pipeline surveys

---

## :material-check-decagram: Acceptance Criteria

Acceptance criteria are project-specific and should be defined in the ITP. Typical values:

| Parameter | Criterion |
|-----------|-----------|
| Horizontal position accuracy (ROV) | **< 2 m** (shallow water USBL); **< 5 m** (deep water with INS aiding) |
| Depth accuracy | **< 0.1 m** (Digiquartz-derived) |
| DOC accuracy | **< 0.1 m** |
| KP accuracy | **< 0.5 m** along-centreline |
| Free span height measurement | **< 0.05 m** |
| Free span length measurement | **< 0.5 m** |
| Lateral displacement (OOS) | Per project design curve |
| Event positioning | Within **2 m** of true position |

---

## :material-wrench: Troubleshooting

| Symptom | Likely Cause | Action |
|---------|-------------|--------|
| Pipetracker loses pipe detection intermittently | Altitude too high; pipe burial too deep; seabed conductivity high | Reduce altitude; check VRT against survey altitude; check seabed type |
| KP does not match pipe tally | Wrong KP method (straight-line vs along-centreline); accumulated error | Clarify KP method with client; recalculate using correct method; tie KP to known field joints |
| Depth profile shows unrealistic spikes | Digiquartz sensor noise; thruster wash; loose mounting | Check sensor mounting; filter spikes in processing; reduce ROV speed |
| Cross-track offset between reciprocal runs | Heading error; latency; INS misalignment | Check heading source; run latency test; recalibrate INS |
| Events not aligning with video | Time sync drift between navigation and video | Verify time sync; apply time offset correction in processing |

---

## :material-link-variant: Related Articles

- [Pipe Tracker (HydroPACT 440/660) Verification](../equipment/pipetracker-hydropact-verification.md)
- [Side Scan Sonar Positioning and Quality Verification](../equipment/side-scan-sonar-verification.md)

---

!!! quote "References"
    - DNV-OS-F101 (Submarine Pipeline Systems)
    - DNV-RP-F109 (On-Bottom Stability)
    - IMCA S 014/S 015 (Survey guidance)
    - IHO S-44 (Hydrographic Survey Standards)
