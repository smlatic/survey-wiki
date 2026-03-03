---
title: Voyis FDI Observer Pro 3 Camera Array Verification
category: equipment
tags: [voyis, fdi, camera, stills, imaging, ROV, verification, positioning, metadata]
equipment: [Voyis Observer Pro 3 FDI System, ROV, SPRINT INS]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: converted_procedure
---

# :material-camera: Voyis FDI Observer Pro 3 Camera Array Verification

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Equipment</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Verification</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Ensure the accuracy and functionality of the Voyis FDI (Fast Digital Imaging) system in providing high-quality underwater images along with precise position and timing metadata. The verification validates the system's ability to capture images with accurate positioning.

---

## :material-tools: Equipment Required

| Equipment | Role |
|---|---|
| Voyis Observer Pro 3 FDI system (three cameras) | System under test |
| ROV with navigation system | Deployment platform |
| INS system (typically SPRINT INS with LNAV output at centre camera location) | Position and orientation reference |
| Navigation/acquisition software (NaviPac or equivalent) | Data logging |

---

!!! info "Prerequisites"
    - FDI system correctly mounted on the ROV
    - All cameras time-synchronised (verified by clock comparison -- see Clock Sync section below)
    - Each camera interfaced with the ROV's navigation system for real-time position and timing data
    - Survey line planned (500 m length) over a suitable subsea feature

---

## :material-camera-burst: Three-Camera Geometry

The Voyis Observer Pro 3 is a **three-camera array** designed to provide wide swath coverage of the seabed:

| Camera | Position | Orientation | Coverage |
|--------|----------|-------------|----------|
| **Centre (nadir)** | Centre of array | Pointing straight down | Direct footprint beneath ROV |
| **Port** | Left of centre | Angled outward (typically 15-30 deg from nadir) | Extends coverage to port side |
| **Starboard** | Right of centre | Angled outward (typically 15-30 deg from nadir) | Extends coverage to starboard side |

The three cameras capture overlapping images that, when mosaicked, provide a continuous swath wider than a single camera could cover. The centre camera provides the primary position reference, while the port and starboard cameras extend lateral coverage.

!!! info "INS Position Reference"
    The SPRINT INS LNAV output is typically configured to output position at the **centre camera location**. This position is then used as the reference for all three cameras, with offsets applied for port and starboard cameras based on the dimensional control measurements.

---

## :material-image-multiple: Overlap Requirements

Adequate overlap between consecutive image frames is essential for mosaicking and feature identification:

| Direction | Minimum Overlap | Recommended Overlap |
|-----------|:--------------:|:------------------:|
| **Forward (along-track)** | 60% | 60-80% |
| **Lateral (between cameras)** | Built into array geometry | Verified during installation |

!!! tip "Achieving Forward Overlap"
    Forward overlap is controlled by the combination of **frame rate**, **ROV speed**, and **altitude**. The image footprint increases with altitude, so:

    - At **higher altitude**, a lower frame rate can still achieve 60-80% overlap
    - At **lower altitude**, a higher frame rate is needed to maintain overlap
    - If the ROV accelerates unexpectedly, overlap will decrease -- monitor speed during acquisition

---

## :material-altimeter: Altitude and Speed Guidance

| Parameter | Guidance |
|-----------|----------|
| **Altitude** | Typically **2-4 m** above seabed for pipeline inspection; **3-6 m** for general seabed imaging. Higher altitude = wider swath but lower resolution. |
| **Speed** | **0.2-0.5 knots** (0.1-0.25 m/s) for high-resolution imaging. Faster speeds require higher frame rates and shorter exposure times to avoid motion blur. |
| **Exposure time** | Keep below **4.5 ms** to minimise motion blur at survey speed. At speeds above 0.3 m/s, consider reducing to **1-2 ms**. |
| **LED intensity** | Run at **100%** to allow shorter exposure times, which reduces blur. |

!!! warning "Altitude Stability"
    Altitude variations during a survey line cause changes in image footprint size and overlap. The ROV pilot should maintain stable altitude throughout each line. If the ROV is altitude-hold capable, use that mode during FDI acquisition.

---

## :material-list-status: Procedure

### Step 1: System Setup

- Ensure the Voyis FDI system is correctly mounted on the ROV
- Ensure all cameras are time-synchronised
- Interface each camera with the ROV's navigation system to capture real-time position and timing data

### Step 2: Plan Test Lines

Plan a line on the seabed, 500 metres in length. The line should ideally be over a linear subsea asset (pipeline, umbilical) or a flat seabed area with distinct features, boulders, or debris. Export the survey line to vessel and ROV systems as applicable.

### Step 3: Image Capture and Data Logging

Navigate the ROV along the designated line while capturing images using all three cameras. The line must be run in opposite directions. During capture:

- Set capture frame rate per project requirements
- Record navigation data (position and timing) and corresponding images in real-time
- Use separate NaviPac navigation files for each camera
- Generate a separate log file for each line run

### Step 4: Verify Results

- Images must have clear visuals with no significant artefacts
- Identify features from FDI images and assess positional accuracy
- Extract positions from metadata and tabulate across cameras and from opposite navigation lines
- Positional accuracy of detected features must meet project requirements

---

## :material-tune: Recommended Camera Settings

| Parameter | Value |
|---|---|
| Frame rate | 3-5 FPS (speed dependent) |
| Exposure time | 1-4.5 ms (recommended; higher values may cause blur on fast vehicles) |
| LED Intensity | 100% ON (recommended; maximise light, reduce exposure to reduce blur) |
| Enable Undistortion | Disabled (recommended) |
| Save image as 8-bit | No Conversion |
| Processed image format | JPEG |
| Still Image Levelling | Realistic (recommended) |

---

!!! note "Reporting"
    The verification results (included in the MAC report) must include:

    - Introduction to the FDI system verification
    - Details of the FDI equipment
    - Sequence of events (test line setup, image capture, data logging)
    - Tabular and graphical representations of results showing position data alignment and image quality
    - Statistical analysis of position accuracy

---

---

## :material-clock-check: Clock Synchronisation Between Cameras and INS

All three cameras and the INS must be on the **same time base**. Clock drift between systems causes position errors in the image metadata.

### Verification Procedure

1. Before deployment, compare the **internal clock of each camera** against the INS time output (typically PPS + NMEA ZDA)
2. All clocks should agree to within **< 20 ms**
3. If any camera clock is drifting, resynchronise before the survey
4. After recovery, repeat the clock comparison to quantify any drift during the dive

!!! warning "Drift Over Time"
    Camera clocks can drift several hundred milliseconds over a long dive (8+ hours). At 0.25 m/s survey speed, a 200 ms clock error produces a **0.05 m** position error -- generally acceptable, but at higher speeds the error scales proportionally. Always check post-dive drift.

---

## :material-file-image: EXIF Metadata Verification

After the verification test, inspect the EXIF metadata of captured images to confirm:

- [x] **Timestamp** is present and consistent with the navigation log
- [x] **GPS coordinates** (if embedded) match the navigation system output for the same time
- [x] **Camera serial number** or identifier is embedded (to distinguish port/centre/starboard images)
- [x] **Exposure settings** match the configured values (exposure time, ISO, aperture)

!!! tip "Quick EXIF Check"
    Use any EXIF viewer tool (e.g., ExifTool, IrfanView, or the Voyis software's built-in metadata display) to spot-check 3-5 images per camera after the test. Verify that timestamps increment logically and that position data is present.

---

!!! success "Quality Checks"
    - [x] Images clear with no significant artefacts
    - [x] Position metadata consistent across all three cameras
    - [x] Feature positions consistent between reciprocal line runs
    - [x] Positional accuracy within project specifications
    - [x] All cameras time-synchronised throughout the test
    - [x] EXIF metadata present and correct in sample images
    - [x] Forward overlap meets 60-80% requirement

---

## :material-calendar-check: When to Use

Perform Voyis FDI verification:

- At the **start of every project** before production FDI surveys
- After any change to the camera mounting, ROV configuration, or INS setup
- After firmware updates to the Voyis system
- When switching between different ROV platforms
- After any physical impact or suspected damage to the camera array

---

## :material-check-decagram: Acceptance Criteria

| Parameter | Criterion |
|-----------|-----------|
| Image quality | Clear, no significant artefacts, correct exposure |
| Position consistency across cameras | Feature positions agree within **0.5 m** between all three cameras |
| Position consistency between reciprocal runs | Feature positions agree within **1.0 m** |
| Forward overlap | **60-80%** achieved at planned speed and altitude |
| Clock sync (pre-dive) | All cameras within **20 ms** of INS time |
| Clock drift (post-dive) | < **500 ms** total drift over the dive duration |
| EXIF metadata | Present and correct in all images |

---

## :material-wrench: Troubleshooting

| Symptom | Likely Cause | Action |
|---------|-------------|--------|
| Images blurred | Exposure time too long for survey speed; LED intensity too low | Reduce exposure time to < 2 ms; increase LED to 100% |
| Forward overlap insufficient | Speed too high for frame rate; altitude too low | Reduce speed; increase frame rate; increase altitude |
| Position offset between cameras | Offsets from dimensional control incorrect; INS output not at centre camera | Verify offsets; confirm LNAV output location |
| Position offset between reciprocal runs | Heading error; latency between INS and camera trigger | Check heading source; investigate trigger latency |
| No EXIF metadata in images | Camera not receiving navigation feed; interface cable fault | Check cable connections; verify NaviPac is sending position to all cameras |
| Timestamps not incrementing correctly | Camera clock not synced; PPS signal not reaching camera | Resync clocks; check PPS cable; verify ZDA sentence on time port |

---

## :material-link-variant: Related Articles

- [Pipeline and Umbilical Survey Operations](../rov/pipeline-survey-operations.md)
