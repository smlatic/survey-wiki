---
title: Vessel Motion Effects on Survey Data
category: reference
tags: [vessel motion, heave, roll, pitch, yaw, surge, sway, six degrees of freedom, motion artifacts, mbes, usbl, sss, delayed heave, latency, data quality]
equipment: [Applanix POS MV, Kongsberg Seapath, CodaOctopus F180, iXblue Octans, Teledyne TSS Marinus, Multibeam Echosounder, USBL, Side Scan Sonar]
date_added: 2026-03-04
source_type: reference_table
---

# :material-ship-wheel: Vessel Motion Effects on Survey Data

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Reference</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Reference Guide</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-04</strong></span>
</div>

!!! abstract "Purpose"
    Reference guide covering how each of the six degrees of vessel freedom creates specific errors and artifacts in survey data. Focuses on the data quality consequences of vessel motion rather than sensor theory or measurement principles. Includes motion sensor performance comparison data, real-time versus delayed heave considerations, interface latency effects, and practical guidance for monitoring data quality during acquisition.

!!! info "Related Article"
    This article complements [Heave, MRU Theory and Verification](../mobilisation/heave-mru-theory.md), which covers heave measurement principles, MRU installation, filter configuration, lever arms, and verification procedures. Read that article for sensor theory and setup. Read this article for understanding what happens to your data when motion compensation breaks down.

---

## :material-information-outline: Six Degrees of Freedom

A vessel floating at sea moves in six independent ways. Three are translational (linear displacement) and three are rotational (angular displacement). Each one affects survey data differently, and they all happen simultaneously.

### Translational Motions

**Heave** -- Vertical displacement (up/down). Driven by wave crests and troughs passing under the hull. Of the six motions, heave has the most direct impact on survey data: 1 m of uncompensated heave equals 1 m of depth error. Every sounding is affected equally, from nadir to the outer beams.

**Surge** -- Longitudinal displacement (fore/aft). Caused by head seas or following seas pushing the vessel forward and backward along its track. Surge shifts the along-track position of soundings. In MBES data, this compresses or stretches ping spacing and distorts the along-track resolution of the bathymetric surface. In USBL positioning, surge shifts the vessel reference point relative to the GNSS antenna, introducing along-track position error if lever arms are not correctly compensated.

**Sway** -- Transverse displacement (port/starboard). Caused by beam seas and wind loads. Sway shifts the across-track position of soundings. In MBES data, adjacent swaths may not overlap correctly because the vessel is not where the GNSS says it is at the moment of the ping. In towed systems (SSS, SBP), sway creates lateral offsets between the sensor and the assumed towfish position.

### Rotational Motions

**Roll** -- Rotation about the longitudinal axis (side-to-side tilting). The dominant rotational motion in beam seas. Roll has the largest effect on MBES data quality because it tilts the entire sonar swath. A 1-degree roll error at 60-degree beam angle in 50 m of water produces approximately 0.17 m of depth error and shifts the footprint position by a similar amount. Roll errors double their effect at the outer beams compared to nadir.

**Pitch** -- Rotation about the transverse axis (bow up/down). Most pronounced in head or following seas. Pitch tilts the sonar fan fore and aft, creating along-track position errors that increase with beam angle. In USBL systems, pitch errors shift the acoustic baseline orientation, directly affecting the elevation angle measurement to the subsea transponder.

**Yaw** -- Rotation about the vertical axis (heading change). Caused by wave forces, wind, and steering inputs. Yaw errors affect the azimuth of every sonar beam. A 0.1-degree yaw error shifts a sounding at 100 m horizontal range by approximately 0.17 m. In USBL, yaw errors rotate the entire acoustic array, producing systematic bearing errors to the transponder.

---

## :material-sonar: Motion Artifacts by Sensor Type

### Multibeam Echosounder (MBES)

| Motion | Primary Artifact | Where It Shows |
|:--|:--|:--|
| Heave | Systematic depth offset on all beams | Entire swath shifts up or down uniformly |
| Roll | Depth error increasing toward outer beams; across-track position shift | Swath edges show the worst scatter; adjacent swaths misalign in cross-track |
| Pitch | Along-track position error; fore/aft depth bias on outer beams | Survey lines in opposing directions show depth disagreement at overlap |
| Yaw | Across-track position error (beam azimuth rotation) | Swath edges displaced laterally; feature positions shift between overlapping lines |
| Surge | Along-track ping spacing distortion | Compressed or stretched along-track resolution |
| Sway | Across-track swath offset | Swath overlap gaps or excessive overlap |

**How to spot it in processing**: Cross-line comparison is the primary diagnostic. Run survey lines in reciprocal directions over the same area. Uncompensated roll shows as a depth difference that increases toward the swath edges. Uncompensated pitch shows as a depth difference between opposing headings. Uncompensated yaw shows as a lateral shift of features between lines. Heave errors show as a uniform depth bias that varies with sea state.

### USBL Acoustic Positioning

| Motion | Primary Artifact | Where It Shows |
|:--|:--|:--|
| Roll | Elevation angle error to transponder | Position jumps in across-track; depth errors on the transponder position |
| Pitch | Elevation angle error (orthogonal to roll) | Along-track position jumps on the transponder |
| Yaw | Bearing angle error to transponder | Azimuthal position scatter; systematic bearing offset if heading is wrong |
| Heave | Vertical reference offset for slant range geometry | Depth error on transponder position (smaller than MBES since slant range dominates) |
| Surge/Sway | Lever arm offset between USBL head and GNSS | Position bias if vessel motion exceeds lever arm compensation |

**How to spot it**: Plot USBL position fixes over time with the vessel stationary on DP. An elliptical scatter pattern aligned with the beam or head seas direction indicates motion-correlated error. During vessel turns, position scatter should not increase dramatically -- if it does, the motion sensor is struggling with the dynamics.

### Side Scan Sonar (SSS)

| Motion | Primary Artifact | Where It Shows |
|:--|:--|:--|
| Heave | Altitude changes affect range scale and towfish-seabed geometry | Banding or striping across the sonar image at wave frequency |
| Roll (towfish) | Asymmetric illumination between port and starboard channels | One channel shows shadows where the other shows highlights |
| Yaw (towfish) | Along-track image distortion | Targets appear smeared or duplicated; mosaic alignment errors |
| Sway | Lateral offset between assumed and actual towfish position | Mosaic shows feature position shifts between adjacent lines |

**How to spot it**: In the waterfall display, look for horizontal banding at regular intervals (heave-driven altitude changes). In the mosaic, check that linear features (pipelines, cables) align between adjacent lines. Misalignment indicates uncompensated towfish motion.

---

## :material-chart-bar: Motion Sensor Performance Comparison

The following data comes from an independent comparative test published by Hydro International. Multiple motion sensors were evaluated simultaneously on the same vessel under identical sea conditions. The results show that sensors with similar published specifications can produce markedly different real-world heave performance.

### Heave Performance

| Sensor | Heave Variation (Normal Conditions) | Behaviour During Turns | Stabilisation After Turn |
|:--|:-:|:--|:-:|
| Applanix POS MV 320 | 1-2 cm | Minimal degradation | Immediate |
| CodaOctopus F180 | Normal range | 10-20 cm deviation | ~30 seconds |
| Kongsberg Seapath 200 | Normal range | Up to 40 cm deviation | 1.5-2 minutes |
| Teledyne TSS Marinus | Normal range | 10-20 cm deviation | ~1 minute |
| iXblue Octans III | Normal range | Good roll/pitch but limited by GNSS dependency | Depends on GNSS |

!!! warning "Key Finding"
    Despite similar marketing claims and published specifications, these sensors produced very different heave results -- particularly during dynamic manoeuvres like turns. The Seapath 200 showed up to 40 cm deviation during turns and required nearly 2 minutes to stabilise, compared to the POS MV 320 which maintained 1-2 cm accuracy throughout. These differences are significant enough to affect IHO Order 1a compliance in shallow water.

### Roll and Pitch Performance Under High Motion Rates

At moderate roll rates, all sensors tested achieved roll/pitch accuracy in the range of 0.01 to 0.025 degrees, consistent with published specifications.

At high roll rates (8 degrees/second), no sensor met its published specification. Deviations exceeded 0.08 degrees across the board. At 60-degree beam angle in 50 m of water, 0.08 degrees of roll error translates to approximately 0.14 m of depth error at the swath edge.

**Practical implication**: Published specifications are valid for moderate sea states. In rough conditions with high roll rates, actual performance degrades beyond what the spec sheet says. Budget for this in your TPU.

---

## :material-clock-outline: Real-Time Heave vs Delayed Heave

Real-time heave is what the motion sensor outputs during acquisition. It is computed by double-integrating accelerometer data and applying a high-pass filter to remove drift. This process works well for wave periods up to approximately 20 seconds, but introduces phase errors -- the heave value reported at any instant is not perfectly time-aligned with the true vessel motion.

Delayed heave (also called true heave) uses a buffer of future and past measurements to recompute heave with greatly reduced phase error. The sensor looks ahead and behind in time, producing a more accurate result.

### Buffer Length

A **150-second buffer** is the recommended minimum for delayed heave post-processing. This means the sensor uses 75 seconds of data before and after each measurement point to compute the corrected heave value. Some systems allow longer buffers for improved accuracy in long-period swell.

### When to Use Each

| | Real-Time Heave | Delayed Heave |
|:--|:--|:--|
| **Available** | Immediately during acquisition | After acquisition (post-processing) |
| **Phase accuracy** | Contains phase errors, especially in long-period swell | Corrected phase; time-aligned to true motion |
| **Use for** | Online display, real-time QC, helmsman guidance | Final processed bathymetry, deliverable data |
| **Limitation** | Auto-tunes for sea state; functional up to ~20s swell period | Requires logged raw sensor data; adds processing step |

!!! tip "Practical Rule"
    Always log raw motion sensor data during acquisition so that delayed heave can be applied in post-processing. Real-time heave is adequate for online QC and line planning, but final deliverable data should use delayed heave for best vertical accuracy. The difference can be several centimetres in moderate conditions and more in long-period swell.

---

## :material-ethernet: Interface Latency and Timing

How motion data gets from the sensor to the acquisition software matters more than most surveyors realise. The interface introduces latency, and that latency creates measurable errors.

### Serial vs Ethernet

**Serial interfaces** (RS-232/RS-422) introduce approximately **24 ms of latency** in typical configurations. This is the time between the sensor making the measurement and the acquisition system receiving the data.

**Ethernet interfaces** with source-level timestamping reduce this latency to near zero in terms of timing accuracy, because the sensor stamps the measurement time at the source rather than relying on arrival time at the receiving end.

### Why This Matters

At a vessel roll rate of 8 degrees/second:

- 1 ms of timing error produces approximately 0.01 degrees of roll error
- 24 ms of serial latency (uncompensated) produces approximately 0.24 degrees of roll error
- At 60-degree beam angle in 50 m depth, 0.24 degrees of roll error translates to approximately 0.42 m of depth error at the swath edge

This is not a theoretical concern. The Hydro International sensor comparison study found that switching from serial logging to Ethernet logging with source-level timestamping produced a measurable improvement in attitude accuracy.

### Recommendations

- Use Ethernet interfaces with source-level timestamping wherever the sensor supports it
- If serial is the only option, measure the interface latency and enter the correct value in the navigation software
- Do not assume the manufacturer's default latency value is correct for your specific installation -- cable length, baud rate, and message format all affect actual latency
- Re-verify latency if you change the serial configuration (baud rate, message rate, message format)

---

## :material-alert-circle-outline: When Motion Degrades Data Beyond Usefulness

Not all sea states are surveyable. Knowing when to stop is as important as knowing how to correct for motion.

### Warning Signs During Acquisition

| Indicator | Threshold for Concern | Action |
|:--|:--|:--|
| Heave amplitude | Exceeding 2 m peak-to-peak (vessel and sensor dependent) | Review real-time QC; consider suspending if depth scatter exceeds spec |
| Roll rate | Exceeding 5-8 deg/s sustained | Published sensor specs may no longer hold; outer beam data unreliable |
| Post-turn heave stabilisation | Sensor taking more than 2 minutes to settle | Do not use data acquired during stabilisation period |
| Heave filter period vs swell period | Swell period approaching or exceeding filter period | Increase filter period or switch to GNSS-aided heave |
| Outer beam depth scatter | Standard deviation exceeding project IHO order tolerance | Reduce swath width or suspend acquisition |
| USBL position scatter | Fix-to-fix variation exceeding 1% of slant range | Motion-correlated error; increase averaging or wait for conditions to improve |

### What to Monitor Continuously

1. **Real-time heave amplitude** -- Compare against what you see on deck. If the numbers stop matching observed conditions, something is wrong with the sensor.
2. **Cross-swath depth profile** -- Should be symmetrical. If one side consistently differs from the other, roll compensation is failing.
3. **Adjacent swath overlap** -- Soundings from overlapping swaths should agree. Increasing disagreement with sea state indicates motion compensation limits.
4. **Heave time series** -- Should be smooth and sinusoidal. Spikes, flat spots, or rapid jumps indicate sensor issues (vibration, saturation, cable problems).
5. **Position scatter on DP** -- With the vessel stationary, GNSS and USBL positions should be stable. Motion-correlated scatter indicates attitude errors propagating into position.

### Decision Framework

The question is not "is there vessel motion?" -- there always is. The question is "does the motion compensation reduce residual errors below the project tolerance?"

- Compare real-time depth scatter against IHO order requirements for the project
- If outer beam scatter exceeds tolerance, reduce swath width before stopping acquisition
- If nadir scatter exceeds tolerance, conditions are too rough to survey
- After vessel turns, wait for the motion sensor to stabilise before resuming survey lines (1-2 minutes is typical, but verify with your specific sensor -- some need longer)
- Log everything. Data acquired in marginal conditions can sometimes be recovered with delayed heave and careful post-processing. Data not acquired cannot be recovered.

---

## :material-table: Quick Reference

| Parameter | Value |
|:--|:-:|
| Heave error ratio | 1 m uncompensated heave = 1 m depth error |
| Roll error at 60 deg beam, 50 m depth | 0.1 deg roll = 0.17 m depth error |
| Yaw error at 100 m horizontal range | 0.1 deg yaw = 0.17 m position error |
| Lever arm effect (10 m arm, 5 deg roll) | ~0.87 m horizontal displacement |
| Serial interface latency (typical) | ~24 ms |
| Roll error from 24 ms latency at 8 deg/s | ~0.24 deg (uncompensated) |
| Delayed heave buffer (recommended) | 150 seconds |
| Post-turn stabilisation (sensor dependent) | 30 seconds to 2 minutes |
| POS MV 320 heave accuracy (tested) | 1-2 cm variation |
| Seapath 200 deviation during turns (tested) | Up to 40 cm |
| Roll/pitch spec validity | Degrades above 5-8 deg/s roll rate |

---

## :material-link-variant: Related Articles

- [Heave, MRU Theory and Verification](../mobilisation/heave-mru-theory.md) -- Sensor theory, filter configuration, lever arms, verification procedures
- [AHRS Calibration](../mobilisation/ahrs-calibration.md) -- Heading, pitch, and roll calibration procedure
- [MBES Calibration (Patch Test)](../sensors/mbes-calibration.md) -- Detecting and correcting angular offsets
- [Dimensional Control Survey](../mobilisation/dimensional-control-survey.md) -- Measuring sensor lever arms
- [TPU and Error Budgets](../reference/tpu-error-budgets.md) -- How motion errors contribute to total propagated uncertainty

---

## :material-book-open-page-variant: Sources

- [Hydro International -- Motion Sensor Performance](https://www.hydro-international.com/content/article/motion-sensor-performance) -- Independent comparative test of multiple motion sensors under identical conditions. Source for all sensor comparison data in this article.
- [SBG Systems -- Ship Motion Measurements](https://support.sbg-systems.com/sc/kb/latest/integrated-motion-navigation-sensors/ship-motion-measurements) -- Technical detail on real-time versus delayed heave computation and six degrees of freedom.
- [ResearchGate -- Reduction of Heave, Pitch and Roll Effects in Hydrographic Surveying](https://www.researchgate.net/publication/272255543_Reduction_of_heave_pitch_and_roll_effects_in_hydrographic_surveying) -- Academic treatment of motion compensation methods and their limitations.
- IHO S-44, Edition 6.1.0 -- Standards for Hydrographic Surveys (depth accuracy order definitions).
- IMCA S 015 -- Guidelines for the Use of Multibeam Echosounders.
