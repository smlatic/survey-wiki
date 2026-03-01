---
title: Video Camera and DVR Quality Verification
category: equipment
tags: [video, camera, dvr, quality, verification, ROV, overlay, positioning, line laser]
equipment: [ROV Video Camera System, DVR Recording System, Line Laser, Qinsy]
date_added: 2026-03-01
source_type: converted_procedure
---

# :material-video: Video Camera and DVR Quality Verification

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Equipment</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Verification</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Validate the operability of the DVR system, the quality of images captured by the camera, confirm accurate recording of images, and ensure correct positioning in the overlay of navigation information.

---

## :material-tools: Equipment Required

| Equipment | Role |
|---|---|
| ROV video camera system | Image capture |
| DVR recording system (topside and onshore) | Video recording |
| Line laser (if applicable) | Scale reference |
| Navigation/acquisition software (Qinsy or equivalent) | Positioning and overlay |

---

!!! info "Prerequisites"
    - ROV deployed and operational
    - DVR systems configured and connected
    - Object of interest identified for investigation

---

## :material-list-status: Procedure

### Step 1: Position ROV

Position the ROV over an object for investigation.

### Step 2: Assess Image Quality

Assess image and video quality based on lighting, resolution, and clarity. Adjust camera settings as required. Recover the ROV if lighting needs physical adjustment.

### Step 3: DVR Recording (Topside)

- Ensure video feed decoded on the topside system is of acceptable quality
- Ensure the topside DVR system is set up with necessary camera and overlay inputs
- Verify correct overlay information and layout

### Step 4: DVR Recording (Onshore/Control)

- Check that the system is outputting video to the onshore recording system
- Ensure video feed decoded onshore is of acceptable quality
- Ensure the onshore DVR system is set up with necessary camera and overlay inputs
- Verify correct overlay information and layout

### Step 5: Line Laser Offset

Verify that the line laser offset is set in Qinsy (if applicable).

### Step 6: Positioning Verification

- Conduct reciprocal heading tests over the object under investigation
- Compile a list of features by analysing the video
- Compare the position between the two runs

### Step 7: Final Adjustments

Perform any final adjustments if needed.

---

!!! note "Reporting"
    The verification results (included in the MAC report) must include:

    - Introduction
    - Screenshot of measured laser separation on deck with tape measure (if applicable)
    - Screenshots of video quality with line laser in view over target on reciprocal headings with DVR overlay

---

!!! success "Quality Checks"
    - [x] Image quality acceptable (lighting, resolution, clarity)
    - [x] DVR recording working on both topside and onshore systems
    - [x] Overlay information correct and properly positioned
    - [x] Feature positions consistent between reciprocal heading runs
    - [x] Line laser offset correctly configured (if applicable)
