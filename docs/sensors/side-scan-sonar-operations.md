---
title: Side Scan Sonar Theory and Operations
category: equipment
tags: [side-scan-sonar, sss, acoustic, backscatter, towfish, mosaic, target-detection, line-planning, geophysical]
equipment: [Side Scan Sonar, Towfish, Navigation Software]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: original
---

# :material-sonar: Side Scan Sonar Theory and Operations

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Equipment</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Reference Guide</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Comprehensive reference covering side scan sonar operating principles, frequency selection, line planning, altitude management, slant range correction, towfish layback calculation, target detection and classification, mosaic generation, and common artifacts. This article covers the theory and operational knowledge needed to plan and execute a side scan sonar survey, from deployment through data acquisition to initial quality assessment.

---

## :material-calendar-check: When to Use

Refer to this article:

- When planning a side scan sonar survey (route survey, pre-lay, debris clearance, search and salvage)
- When selecting frequency and range settings for a specific task
- When calculating line spacing for coverage requirements
- When deploying and operating a towfish, hull-mounted, or ROV-mounted SSS
- When interpreting sonar imagery and identifying targets
- When troubleshooting data quality issues

---

## :material-information-outline: Overview

Side scan sonar produces acoustic images of the seabed by transmitting fan-shaped sound pulses to either side of the sonar transducer and recording the intensity of the backscattered return. The resulting image shows variations in seabed texture, topography, and the presence of objects on or above the seabed. Side scan is the primary tool for seabed feature detection in pipeline route surveys, debris clearance, search operations, and environmental surveys. Understanding beam geometry, frequency trade-offs, and proper line planning is essential for achieving the required coverage and detection capability.

---

## :material-book-open-variant: Theory and Principles

### How Side Scan Sonar Works

The sonar transducer (mounted in a towfish, on a hull, or on an ROV) emits a short acoustic pulse that is narrow in the along-track direction (typically 0.2-1.0 deg) and wide in the across-track direction (typically 30-50 deg below horizontal on each side). As the pulse travels outward along the seabed, acoustic energy is scattered back from the seabed surface and from any objects on it. The strength of the return depends on the angle of incidence, the seabed material, and the surface roughness.

The sonar records the returned signal intensity as a function of time (which corresponds to distance from the transducer). Each ping produces one line of the sonar image. As the platform moves forward, successive ping lines are assembled side by side to build a continuous image of the seabed.

Key characteristics of the acoustic image:

- **Bright returns** indicate strong backscatter (rough surfaces, hard materials, objects facing the sonar)
- **Dark areas (shadows)** indicate no return (areas blocked from the acoustic beam by objects or seabed relief)
- **Nadir gap** is the area directly below the transducer where no useful imagery is produced (the beam hits the seabed at near-vertical incidence, producing a strong but non-diagnostic return)

### Frequency Selection

Side scan sonars operate across a range of frequencies. The fundamental trade-off is range versus resolution.

| Frequency | Typical Range | Along-Track Resolution | Applications |
|:-:|:-:|:-:|:--|
| 100 kHz | 200-500 m per side | 0.5-1.0 m | Large-area reconnaissance, route survey, search |
| 300 kHz | 75-150 m per side | 0.15-0.30 m | General survey, pipeline route, pre-lay |
| 500 kHz | 50-100 m per side | 0.08-0.15 m | Detailed survey, small target detection |
| 900 kHz | 25-50 m per side | 0.03-0.08 m | High-resolution inspection, archaeology |

Higher frequency provides better resolution but attenuates faster in water, limiting range. Most modern systems are dual-frequency, operating at two frequencies simultaneously (e.g., 100/500 kHz or 300/900 kHz). This allows simultaneous wide-area coverage and detailed imagery.

!!! tip "Frequency Selection in Practice"
    For pipeline route survey and debris clearance, 300/500 kHz dual-frequency is the typical choice. The lower frequency provides the required coverage width while the higher frequency provides the resolution needed for target classification. For search operations over very large areas, 100 kHz may be needed for practical line spacing. For detailed inspection (e.g., archaeological survey, UXO classification), 900 kHz at short range.

### Altitude Management

The sonar altitude above the seabed determines coverage width, image quality, and the size of the nadir gap.

**Rule of thumb: operate at 10-15% of the range setting.**

For a 100 m range setting, the altitude should be 10-15 m.

| Issue | Too High | Too Low |
|:--|:--|:--|
| Coverage | Maximum coverage width | Reduced coverage width |
| Nadir gap | Wide nadir gap, reduced near-field imagery | Narrow nadir gap |
| Image quality | Weak returns at long range, reduced shadow contrast | Risk of seabed contact, acoustic shadow from minor topography |
| Target detection | Longer shadows aid height estimation | Short shadows, harder to detect low-profile targets |

!!! danger "Seabed Contact Risk"
    Flying a towfish too close to the seabed risks mechanical damage and data loss. Maintain a safe altitude margin above the maximum expected seabed relief. In areas with unknown topography, fly a reconnaissance line at higher altitude first.

### Line Planning and Coverage

The usable swath width on each side extends from just beyond the nadir gap to the maximum effective range. The nadir gap width is approximately equal to the altitude (in slant range terms, slightly more due to geometry).

**Usable width per side = Range setting - Nadir gap width**

For 100% coverage (every point on the seabed is ensonified at least once):

**Line spacing = 2 x (Range - Nadir gap)**

For 200% coverage (every point ensonified from two different directions, required for reliable target detection):

**Line spacing = Range - Nadir gap**

!!! info "Worked Example: 100% Coverage"
    - Range setting: 75 m per side
    - Altitude: 10 m (nadir gap approximately 12 m allowing for geometry)
    - Usable width per side: 75 - 12 = 63 m
    - Usable total width: 126 m
    - Line spacing for 100% coverage: 126 m
    - Line spacing for 200% coverage: 63 m

    For a 500 m wide corridor survey at 100% coverage: 500 / 126 = 4 lines minimum (round up, add extra for run-in/run-out).

### Ground Range vs Slant Range

The raw sonar image is plotted in slant range (the direct distance from the transducer to the return point). This is not the same as ground range (the horizontal distance along the seabed). Near the nadir, slant range and ground range differ significantly because the acoustic path is steep.

The correction is:

**Ground range = sqrt(slant_range^2 - altitude^2)**

At long range where the beam is nearly horizontal, slant range and ground range are nearly equal. Near the nadir, the distortion is severe. Most sonar processing software applies this correction automatically (called "slant range correction" or "ground range projection"), but the operator must verify it is applied and that the altitude input is correct.

!!! warning "Incorrect Altitude = Incorrect Ground Range"
    If the altitude value used for slant range correction is wrong, all across-track distances in the mosaic are incorrect. This affects target positioning accuracy. Verify the altitude source (altimeter) is working and correctly configured.

### Towfish Layback Calculation

For towed systems, the position of the towfish must be calculated from the vessel position and the tow cable geometry. The horizontal distance behind the vessel (layback) depends on:

- Cable length paid out
- Cable angle at the stern (if measured by a cable angle sensor)
- Water depth and towfish depth
- Vessel speed and cable catenary

**Simple layback estimate:**

**Layback = sqrt(cable_out^2 - towfish_depth^2)**

This assumes a straight cable with no catenary, which is a reasonable approximation when the cable is taut and the towfish is deep. For more accurate layback, use a cable angle sensor at the stern sheave or an acoustic tracking system (USBL on the towfish).

!!! tip "Reducing Layback Uncertainty"
    The layback calculation is the largest positioning error source for towed SSS. To minimise it:

    1. Use a USBL transponder on the towfish (best method, eliminates layback calculation entirely)
    2. Use a cable angle sensor at the sheave (good method, reduces error to a few metres)
    3. Keep the cable scope ratio low (shorter cable for a given depth = less catenary)
    4. Maintain constant speed (speed changes alter the cable catenary)

### Target Detection and Classification

Targets appear in the sonar image as a combination of a bright return (from the target face) and an acoustic shadow (behind the target relative to the sonar). The shadow is often more diagnostic than the direct return.

**Target height estimation from shadow length:**

**Target height = (shadow_length x altitude) / (slant_range_to_shadow_end - slant_range_to_target)**

Where:

- shadow_length is measured in the sonar image (in ground range)
- altitude is the towfish altitude
- The denominator is the distance from the target to the far edge of the shadow

**Target classification categories:**

| Category | Description | Examples |
|:--|:--|:--|
| Point target | Isolated object, distinct shadow | Rock, debris, anchor, mine-like object |
| Linear target | Extended feature in one direction | Pipeline, cable, chain, ridge |
| Area target | Extended feature in two dimensions | Seabed type change, scour patch, sand wave field |

!!! info "Detection vs Classification vs Identification"
    Detection is knowing something is there. Classification is determining what category it falls into (e.g., "rock" vs "man-made"). Identification is determining exactly what it is (e.g., "anchor"). SSS can detect and classify, but positive identification usually requires ROV visual inspection or very high-frequency sonar (900 kHz+).

### Common Artifacts

| Artifact | Appearance | Cause | Solution |
|:--|:--|:--|:--|
| Nadir gap | Bright/featureless stripe in centre of image | Near-vertical beam incidence below transducer | Normal. Ensure line spacing provides overlap from adjacent lines |
| Layover | Bright feature appearing displaced toward nadir | Strong reflector at steep angle | Normal for raised features. Compare with reciprocal lines |
| Surface return | Bright horizontal band at the range corresponding to the surface | Acoustic energy reaching the sea surface and reflecting back | Increase altitude, reduce power, or mask in processing |
| Crosstalk | Ghost image or pattern from opposite channel | Acoustic leakage between port and starboard transducers | Check transducer isolation, reduce power, contact manufacturer |
| Water column targets | Bright returns at ranges less than altitude | Fish, bubbles, thermocline reflections | Identified by their position above the seabed. Usually obvious |
| Speed lines | Along-track banding or stretching | Incorrect speed-over-ground input or speed variations | Verify SOG input. Maintain constant speed |

---

## :material-clipboard-check-outline: Prerequisites

- [x] Side scan sonar system tested and operational (shore test with known target if possible)
- [x] Towfish/sonar deployed and at correct altitude
- [x] Positioning system operational (USBL on towfish preferred, or cable angle + cable counter)
- [x] Navigation software configured with correct cable/layback parameters
- [x] Line plan loaded with correct spacing for coverage requirements
- [x] Sound velocity at transducer depth entered (for range accuracy)

---

## :material-list-status: Procedure

### Step 1: Pre-Deployment Checks

1. Inspect the towfish for physical damage, fouled transducers, loose hardware
2. Verify cable continuity (electrical test)
3. Test transmit and receive on deck (listen for the ping, confirm data acquisition in the recording system)
4. Check altimeter function
5. Confirm heading source is available and configured (internal compass or external feed)

### Step 2: Deployment

1. Deploy the towfish with the vessel at slow speed (2-3 knots) or stationary
2. Pay out cable to achieve the target altitude
3. Monitor the altimeter reading as the towfish descends to the operating depth
4. Once at altitude, increase to survey speed (typically 3-5 knots for towed systems, 0.5-2 knots for ROV-mounted)
5. Confirm stable imagery on both channels before beginning survey lines

### Step 3: Data Acquisition

1. Run survey lines according to the line plan
2. Monitor in real-time:
    - Altitude (should remain within 10-15% of range setting)
    - Image quality on both channels (even backscatter, consistent contrast)
    - Towfish heading (should track the vessel heading, not yaw excessively)
    - Cable out and layback
    - Speed over ground (maintain within 10% of planned speed)
3. Mark any targets of interest in the navigation software with a waypoint
4. For towed systems, adjust cable out to maintain altitude over seabed depth changes

### Step 4: Line Turns

1. For towed systems, line turns require extra cable management:
    - Slow down before the turn
    - The towfish will cut the corner (shorter turn radius than the vessel)
    - Resume speed on the new heading and verify stable imagery before recording the next line
2. Allow adequate run-in distance (typically 2-3 times the layback) before the start of the survey corridor to stabilise the towfish

### Step 5: Real-Time QC

1. Verify coverage by overlaying completed lines on the chart
2. Check for gaps between lines (particularly where altitude varied)
3. Check nadir gap coverage (each line's nadir should fall within the imagery of adjacent lines)
4. If a line has data quality issues (altitude excursion, heading instability, equipment malfunction), rerun the line

---

## :material-check-decagram: Acceptance Criteria

| Parameter | Requirement |
|:--|:--|
| Coverage | 100% minimum (200% for target detection surveys) |
| Nadir gap | Fully covered by adjacent line imagery |
| Altitude stability | Within +/- 20% of target altitude for > 90% of the line |
| Image quality | Both channels producing consistent, interpretable imagery |
| Position accuracy (with USBL) | < 5 m (2D RMS) for towfish/transducer position |
| Position accuracy (layback only) | < 10 m (2D RMS), speed and cable-dependent |
| Minimum detectable target size | Per project specification (typically 0.5-2.0 m depending on frequency) |
| Speed consistency | Within 10% of planned speed |
| Line overlap | Minimum 10% overlap between adjacent line edges |

---

## :material-wrench: Troubleshooting

### Poor Image Quality (Low Contrast, Weak Returns)

**Possible causes**:

1. Altitude too high for the range setting (reduce altitude or reduce range)
2. Transmit power too low (increase power if available)
3. Gain settings too low (increase receiver gain)
4. Fouled transducer face (recover and clean)
5. SV at transducer depth incorrect (check and update)
6. Seabed is genuinely featureless (soft mud gives weak, uniform backscatter)

### Loss of Bottom Track (Altimeter)

**Symptom**: Altitude reading drops out or gives erratic values.

**Action**:

1. Check if the sonar is too high above the seabed (reduce cable out for towed systems)
2. Check for gas in the water column (seeps, vessel propeller wash)
3. Verify altimeter is configured for the correct frequency
4. If altimeter is lost, maintain depth based on cable out and estimated seabed depth. Recover and redeploy if persistent.

### Towfish Yaw and Instability

**Symptom**: Image shows along-track distortion, heading changes, or inconsistent coverage width.

**Action**:

1. Increase cable out slightly (more cable = more stable towfish)
2. Reduce speed (less hydrodynamic drag)
3. Check for current (cross-current causes towfish offset and yaw)
4. Check towfish fins and depressors for damage
5. If persistent, the towfish may be trimmed incorrectly (check ballast and fin settings)

### Layback Errors

**Symptom**: Targets on reciprocal lines do not align. Features are shifted along-track.

**Action**:

1. Compare target positions from reciprocal lines. The average position is the best estimate; the difference divided by 2 is the layback error.
2. Check cable counter calibration (mark the cable at a known length and verify the counter reading)
3. Check cable angle sensor calibration (if used)
4. If using USBL on the towfish, verify USBL offsets are correctly entered

### Crosstalk Between Channels

**Symptom**: Ghost image of one channel's data appearing on the other channel.

**Action**:

1. Reduce transmit power
2. Check transducer housing for damage or water ingress
3. Check cable for damage or splicing issues
4. Contact the manufacturer if crosstalk persists after power reduction

---

## :material-link-variant: Related Articles

- [SSS Positioning Verification](side-scan-sonar-verification.md)
- [Sub-Bottom Profiler Operations](sub-bottom-profiler-operations.md)
- [Magnetometer/TVG Acceptance Test](magnetometer-tvg-acceptance-test.md)
- [Surrogate Item Test (GMA1000)](surrogate-item-test-gma1000.md)

---

## :material-table: Quick Reference

| Parameter | Typical Value |
|:--|:-:|
| Altitude | 10-15% of range setting |
| Survey speed (towed) | 3-5 knots |
| Survey speed (ROV) | 0.5-2 knots |
| Line spacing (100% coverage) | 2 x (range - nadir gap) |
| Line spacing (200% coverage) | range - nadir gap |
| Nadir gap width | Approximately equal to altitude |
| Ground range correction | sqrt(slant^2 - alt^2) |
| Target height from shadow | (shadow x alt) / (range_shadow - range_target) |
| Minimum run-in distance (towed) | 2-3 x layback |
| Layback estimate | sqrt(cable_out^2 - depth^2) |

---

!!! quote "References"
    - IHO S-44, Edition 6.1.0, Standards for Hydrographic Surveys
    - IMCA S 024, Guidelines for Side Scan Sonar Operations
    - Equipment manufacturer documentation
