---
title: Video Camera and DVR Quality Verification
category: equipment
tags: [video, camera, dvr, quality, verification, ROV, overlay, positioning, line laser]
equipment: [ROV Video Camera System, DVR Recording System, Line Laser, Qinsy]
date_added: 2026-03-01
last_reviewed: 2026-03-01
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

## :material-calendar-check: When to Use

- **Every mobilisation** as part of equipment verification
- After camera reinstallation or replacement
- After DVR system reconfiguration or software update
- When video quality appears degraded during operations
- After ROV maintenance that affects camera or cable routing

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

---

## :material-check-decagram: Acceptance Criteria

| Parameter | Pass | Fail |
|---|---|---|
| Video resolution | Minimum 1080p (1920x1080) | Below 1080p |
| Timestamp accuracy | Within 1 second of UTC | > 1 second offset from UTC |
| Recording playback | Recorded video plays back correctly on both topside and onshore systems | Playback fails, corrupted, or missing frames |
| Overlay information | All required fields present, correctly positioned, readable | Missing fields, incorrect data, or unreadable text |
| Image clarity | Objects clearly discernible at operational range, good focus and exposure | Blurry, overexposed, underexposed, or unusable image quality |
| Line laser visibility | Laser lines visible and parallel in the camera field of view (if applicable) | Laser not visible or misaligned |
| Position consistency | Feature positions agree within 1 m between reciprocal heading runs | > 1 m disagreement between runs |

---

## :material-wrench: Troubleshooting

| Problem | Possible Causes | Actions |
|---|---|---|
| Poor image quality (blurry) | Camera out of focus, dirty lens port, water turbidity | Adjust focus settings, clean lens port (may require ROV recovery), check water visibility conditions |
| Poor image quality (dark or overexposed) | Incorrect lighting settings, lights at wrong angle, backscatter from particles | Adjust light intensity and angle, reduce lights if backscatter is excessive, adjust camera exposure/iris settings |
| Dirty or obscured lens | Marine growth, sediment, grease on lens port | Clean lens port, recover ROV if cleaning cannot be done subsea |
| DVR timestamp incorrect | DVR system clock not synchronised, NTP server unreachable, incorrect time zone setting | Synchronise DVR clock to UTC via NTP, verify time zone is set to UTC, manually set time and note offset |
| Recording fails or drops frames | Insufficient disk space, DVR hardware fault, network bandwidth too low for onshore recording | Check available disk space, restart DVR system, verify network bandwidth for onshore transmission |
| Overlay information missing or incorrect | Navigation data feed interrupted, overlay configuration error, serial/network port misconfigured | Check data feed from navigation system, verify overlay template configuration, confirm correct port and baud rate settings |
| Line laser not visible | Laser powered off, laser misaligned, laser intensity too low for conditions | Verify laser power, adjust laser alignment, increase laser power if available |
| Video quality degrades during operations | Cable degradation, connector water ingress, camera overheating | Inspect cable and connectors for damage, check for water ingress indicators, allow camera to cool if overheating |

---

## :material-link-variant: Related Articles

- [Alongside DGNSS Integrity Check](../positioning/dgnss-integrity-check.md) -- positioning accuracy verification that supports the overlay data
- [Dynamic GNSS Intersystem Check](../positioning/dynamic-gnss-intersystem-check.md) -- dynamic positioning check relevant to position overlay accuracy
