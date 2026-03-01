---
title: Voyis FDI Observer Pro 3 Camera Array Verification
category: equipment
tags: [voyis, fdi, camera, stills, imaging, ROV, verification, positioning, metadata]
equipment: [Voyis Observer Pro 3 FDI System, ROV, SPRINT INS]
date_added: 2026-03-01
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
    - All cameras time-synchronised
    - Each camera interfaced with the ROV's navigation system for real-time position and timing data
    - Survey line planned (500 m length) over a suitable subsea feature

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

!!! success "Quality Checks"
    - [x] Images clear with no significant artefacts
    - [x] Position metadata consistent across all three cameras
    - [x] Feature positions consistent between reciprocal line runs
    - [x] Positional accuracy within project specifications
    - [x] All cameras time-synchronised throughout the test
