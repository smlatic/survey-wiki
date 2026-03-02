---
title: Sub-Bottom Profiler Operations
category: equipment
tags: [sub-bottom, sbp, chirp, pinger, parametric, boomer, sparker, geophysical, sediment, burial]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: original
---

# :material-layers-triple: Sub-Bottom Profiler Operations

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Equipment</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Reference Guide</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Comprehensive reference covering sub-bottom profiler operating principles, system types, frequency and penetration trade-offs, installation and configuration, line planning, acquisition settings, data interpretation, common artifacts, and integration with bathymetric data. This article covers the theory and operational knowledge needed to plan and execute a sub-bottom profiler survey.

---

## :material-calendar-check: When to Use

Refer to this article:

- When planning a geophysical survey that includes sub-bottom profiling
- When selecting a sub-bottom profiler type for a specific application (burial assessment, geohazard, route survey)
- When configuring acquisition settings for a sub-bottom profiler
- When interpreting sub-bottom data and identifying sub-surface features
- When troubleshooting sub-bottom profiler data quality issues

---

## :material-information-outline: Overview

Sub-bottom profilers (SBPs) transmit acoustic pulses that penetrate the seabed and reflect from sub-surface density boundaries (changes in sediment type, rock interfaces, buried objects). The resulting data shows a cross-section of the seabed sub-surface structure along the survey line. SBPs are used for burial depth assessment (pipelines, cables), geohazard identification (gas pockets, faults, unstable layers), route survey (soil conditions for foundation design), and archaeological investigation.

The fundamental trade-off in sub-bottom profiling is the same as all acoustics: lower frequency penetrates deeper but with lower resolution. The system type and frequency must be matched to the survey objective.

---

## :material-book-open-variant: Theory and Principles

### How Sub-Bottom Profiling Works

The SBP transducer emits an acoustic pulse directed downward. The pulse travels through the water column, reflects partially from the seabed surface, and the remaining energy penetrates into the sediment. Each time the pulse encounters a change in acoustic impedance (density x velocity), part of the energy reflects back. The transducer records these reflections as a function of time (two-way travel time), which is converted to depth below seabed using the sediment sound velocity.

Key principles:

- **Acoustic impedance contrast** determines reflection strength. A sand-clay boundary produces a moderate reflection. A sediment-rock boundary produces a strong reflection. A sediment-gas boundary produces a very strong reflection.
- **Attenuation** increases with frequency and with distance through sediment. Higher frequencies are absorbed faster, limiting penetration.
- **Resolution** is determined by the pulse length (shorter pulse = better resolution) and the bandwidth (wider bandwidth = better resolution for chirp systems).

### System Types

| System Type | Frequency Range | Penetration | Resolution | Applications |
|:--|:--|:--|:--|:--|
| Pinger | 2-12 kHz (single freq) | 10-50 m (soft sediment) | 0.3-1.0 m | Quick reconnaissance, burial assessment |
| Chirp | 1-12 kHz (swept) | 10-80 m (soft sediment) | 0.05-0.20 m | Route survey, burial assessment, geohazard |
| Parametric | 2-15 kHz (generated) | 5-40 m | 0.05-0.15 m | High-resolution, narrow beam, ROV-mounted |
| Boomer | 0.5-5 kHz | 25-100 m | 0.25-0.50 m | Deep penetration, geotechnical |
| Sparker | 0.1-2 kHz | 50-500 m | 0.5-2.0 m | Deep geological structure |

#### Pinger

Single-frequency systems. Simple, robust, easy to operate. The fixed frequency means penetration and resolution are set by the transducer choice. Good for quick burial depth checks where high resolution is not critical.

#### Chirp

Transmits a frequency-modulated (swept) pulse from low to high frequency. The receiver compresses the long swept pulse into a short, high-resolution pulse using matched filtering. This gives both good penetration (from the low frequencies in the sweep) and good resolution (from the bandwidth). Chirp is the most common SBP type for offshore survey.

!!! tip "Chirp Bandwidth"
    A chirp sweep of 2-8 kHz gives better resolution than 2-6 kHz but slightly less penetration. A 0.5-6 kHz sweep maximises penetration at the cost of some resolution. Match the sweep range to the survey objective: wider bandwidth for resolution, lower start frequency for penetration.

#### Parametric

Uses the non-linear interaction of two high-frequency primary beams to generate a low-frequency difference frequency. The result is a low-frequency pulse with the narrow beam width of the high-frequency primaries. This gives very high resolution and a very narrow footprint (typically 3-5 deg beam width vs 15-40 deg for conventional systems). Excellent for ROV-mounted operations where the footprint must be small.

#### Boomer and Sparker

High-energy, low-frequency systems used for deep geological penetration. Boomers use an electromagnetic plate to generate a broadband pulse. Sparkers use an electrical discharge in seawater. Both require significant deck space and power. Primarily used in geotechnical and geological surveys, not routine pipeline work.

### Frequency vs Penetration vs Resolution

| Frequency | Penetration (sand) | Penetration (clay) | Vertical Resolution |
|:--|:--|:--|:--|
| 1 kHz | 5-15 m | 30-80 m | 0.5-1.0 m |
| 3.5 kHz | 2-8 m | 15-50 m | 0.15-0.30 m |
| 7 kHz | 1-3 m | 5-20 m | 0.08-0.15 m |
| 12 kHz | < 1 m | 2-8 m | 0.05-0.10 m |

!!! warning "Sediment Type Matters"
    Penetration varies enormously with sediment type. Soft clay allows deep penetration. Sand and gravel attenuate rapidly. Coarse gravel or rock may allow zero penetration. Gas in the sediment blocks acoustic energy almost completely. Always consider the expected geology when selecting frequency and estimating achievable penetration.

---

## :material-clipboard-check-outline: Prerequisites

- [x] SBP system tested and operational (deck test / surface dip test)
- [x] Positioning system operational (vessel GNSS, or USBL for ROV/towfish-mounted)
- [x] Navigation software configured with correct offsets for SBP transducer
- [x] Line plan prepared (line spacing appropriate for survey objective)
- [x] Heave compensation configured and verified (vessel-mounted systems)
- [x] Sound velocity at transducer known (for water column travel time)

---

## :material-list-status: Procedure

### Step 1: System Setup

1. Mount the SBP transducer:
    - **Hull-mounted**: verify rigid mount, transducer face clear of marine growth, confirm offset in nav software
    - **Pole-mounted**: check pole is vertical, secure, with no vibration at survey speed
    - **Towed**: deploy as per side scan procedures -- layback calculation required
    - **ROV-mounted**: verify offset in ROV nav software, check parametric beam alignment
2. Connect and power the system
3. Configure acquisition settings (see settings table below)
4. Verify heave input is connected and working (for vessel systems)
5. Start recording and verify data quality on a test line

### Step 2: Acquisition Settings

| Parameter | Setting Guidance |
|:--|:--|
| Pulse type | Chirp: select sweep range based on objective. Pinger: select frequency |
| Sweep range (chirp) | 2-8 kHz for general survey, 0.5-6 kHz for deep penetration, 4-12 kHz for high resolution |
| Ping rate | Match to water depth (allow echo to return before next ping). Typically 4-8 pings/sec in < 100 m |
| Record length | Set to capture the deepest expected reflector (e.g., 50 ms for ~40 m below seabed) |
| Gain / TVG | Start with auto-gain, adjust manually if near-surface or deep reflectors are not visible |
| Power | Maximum for deep penetration, reduce if seabed multiple is overwhelming true reflections |
| Heave compensation | Enable for vessel-mounted systems. Disable for ROV (ROV depth sensor provides static correction) |

### Step 3: Line Planning

Line spacing depends on the survey objective:

| Application | Typical Line Spacing | Notes |
|:--|:--|:--|
| Pipeline route survey | 25-50 m | Along route with cross-lines at pipeline crossings and features |
| Pipeline burial assessment | On pipeline + flanking lines at 10-25 m offset | Lines should cross the pipeline at regular intervals |
| Geohazard survey | 50-150 m | With cross-lines at 5x line spacing for tie-in |
| Cable burial assessment | On cable + offset lines | Similar to pipeline burial |
| Site investigation | 25-100 m grid | Regular grid with cross-lines |

!!! tip "Cross-Lines"
    Always run cross-lines. They serve three purposes: (1) tie reflector horizons between primary lines for mapping, (2) verify depth-to-reflector consistency (QC check), and (3) identify dipping layers that may not be apparent on along-track lines alone. Minimum 2 cross-lines per survey area.

### Step 4: Data Acquisition

1. Run survey lines at constant speed (3-5 knots for vessel, 0.5-2 knots for ROV)
2. Monitor data in real-time:
    - Seabed return is visible and tracked
    - Sub-surface reflectors are visible (if expected)
    - No excessive noise or interference
    - Record length captures all reflections of interest
3. Adjust gain during acquisition as conditions change (water depth, sediment type)
4. Mark features of interest in the navigation system (pipeline crossings, anomalous reflections, gas indications)

### Step 5: Real-Time QC

1. Verify consistent seabed tracking
2. Check for data gaps (missed pings, trigger failures)
3. Compare seabed depth from SBP with MBES or echosounder -- should agree within 0.5 m
4. On cross-lines, verify sub-surface reflector depths match primary lines
5. If data quality degrades, check for:
    - Air bubbles on transducer (vessel systems in rough weather)
    - Interference from other acoustic systems (MBES, USBL -- stagger ping timing)
    - Speed too fast (reducing pings per metre of track)

---

## :material-check-decagram: Acceptance Criteria

| Parameter | Requirement |
|:--|:--|
| Seabed return visible | On all lines (100% coverage) |
| Sub-surface penetration | Meets project specification (verify against expected geology) |
| Vertical resolution | Meets project specification (typically < 0.3 m for burial depth) |
| Line spacing | Per line plan, no gaps > specified maximum |
| Cross-line tie | Reflector depths agree within 0.5 m between crossing lines |
| Seabed depth agreement | Within 0.5 m of MBES/echosounder at crossing points |
| Position accuracy | As per positioning specification for the survey type |
| Data completeness | No gaps > 50 m along survey lines |
| Noise level | Signal-to-noise ratio adequate for interpretation |

---

## :material-book-open-variant: Data Interpretation Basics

### Sub-Surface Reflectors

- **Continuous, parallel reflectors**: normally deposited sediment layers
- **Truncated or disrupted reflectors**: erosion, faulting, or mass movement
- **Hyperbolic reflections**: point targets (boulders, buried pipes, cables)
- **Diffractions at layer edges**: normal at outcropping or pinch-out of layers
- **Transparent (reflection-free) zones**: uniform sediment with no internal structure, or gas blanking

### Common Features

| Feature | Appearance in SBP Data | Significance |
|:--|:--|:--|
| Pipeline (buried) | Hyperbolic diffraction below seabed | Burial depth measured from seabed to top of hyperbola apex |
| Gas in sediment | Strong reflector with total acoustic blanking below | Geohazard. No penetration through gas. Note and report. |
| Pockmarks | Seabed depression with disrupted sub-surface | Indicative of gas or fluid escape |
| Hard substrate | Strong seabed return, no penetration | Rock or cemented sediment. SBP cannot image below this. |
| Channel fill | Cut-and-fill geometry, different fill material from surrounding | Ancient river channels, potentially different soil properties |
| Multiple | Ghost image of seabed at 2x seabed depth | Artifact (see below) |

### Burial Depth Measurement

For pipeline or cable burial assessment:

1. Identify the pipeline diffraction hyperbola
2. Measure two-way travel time from seabed surface to the apex of the hyperbola
3. Convert to depth using sediment velocity: **Depth = (TWTT x V_sed) / 2**
4. Typical sediment velocities: soft clay 1480-1550 m/s, sand 1600-1800 m/s, gravel 1800-2200 m/s

!!! warning "Sediment Velocity Uncertainty"
    If the sediment velocity is not known from geotechnical data, use 1500-1600 m/s as a conservative estimate for soft sediment. A 10% error in sediment velocity produces a 10% error in burial depth. For critical measurements, request geotechnical SV data or use a wide-band system that allows velocity analysis.

---

## :material-wrench: Troubleshooting

### No Sub-Surface Penetration

**Possible causes**:

1. Hard seabed (rock, gravel, coarse sand) -- SBP cannot penetrate this. Document and report.
2. Gas blanking -- strong near-surface gas layer absorbs all energy below it. Document and report.
3. Frequency too high -- reduce frequency or use a lower-frequency system
4. Power too low -- increase transmit power
5. Transducer malfunction -- check output pulse with oscilloscope or manufacturer diagnostic

### Excessive Noise

**Possible causes**:

1. Vessel machinery noise (engines, thrusters, generators) -- reduce vessel speed, try different generator set
2. Acoustic interference from other systems (MBES, SSS, USBL) -- stagger ping timing or use trigger synchronisation
3. Electrical interference -- check cable routing (keep SBP cables away from power cables), use shielded cables
4. Flow noise on transducer -- caused by speed through water. Reduce speed or improve transducer fairing.
5. Bubble sweep-down -- air entrained under hull reaches transducer. More severe in head seas. Try different heading or slower speed.

### Seabed Multiple Obscuring Real Reflections

**Symptoms**: a strong reflection appears at exactly 2x the seabed depth (and potentially 3x, 4x). This is the seabed echo bouncing between the sea surface and seabed.

**Action**:

1. Reduce transmit power (less energy = weaker multiple)
2. Apply frequency filtering in processing (multiple has different frequency content than primary reflections)
3. Apply predictive deconvolution in processing software
4. Note in interpretation: a real reflector at 2x seabed depth cannot be distinguished from the multiple without additional evidence (e.g., the reflector is visible at non-multiple depths on adjacent lines)

### Gas Blanking

**Symptoms**: very strong reflector at shallow depth below seabed with complete acoustic blanking (no data) beneath it.

**Action**:

1. This is a real geological condition, not an equipment fault
2. No SBP system can penetrate through gas. Document the extent of gas blanking.
3. If burial depth is needed in a gas-blanked area, alternative methods are required (e.g., mechanical probe, trenching log, or comparison with as-laid position)

---

## :material-link-variant: Related Articles

- [Side Scan Sonar Theory and Operations](side-scan-sonar-operations.md)
- [Magnetometer/TVG Acceptance Test](../calibration/magnetometer-tvg-acceptance-test.md)
- [Pipeline Survey Operations](../rov/pipeline-survey-operations.md)
- [MBES Operations and Settings](mbes-operations-and-settings.md)
- [Sound Velocity Operations](../calibration/sound-velocity-operations.md)

---

## :material-table: Quick Reference

| Parameter | Typical Value |
|:--|:-:|
| Chirp bandwidth (general) | 2-8 kHz |
| Chirp bandwidth (deep penetration) | 0.5-6 kHz |
| Pinger frequency (general) | 3.5 kHz |
| Penetration (soft clay, 3.5 kHz) | 15-50 m |
| Penetration (sand, 3.5 kHz) | 2-8 m |
| Vertical resolution (chirp) | 0.05-0.20 m |
| Survey speed (vessel) | 3-5 knots |
| Survey speed (ROV) | 0.5-2 knots |
| Sediment SV (soft clay) | 1480-1550 m/s |
| Sediment SV (sand) | 1600-1800 m/s |
| Cross-line tie tolerance | 0.5 m |

---

!!! quote "References"
    - IHO S-44, Edition 6.1.0, Standards for Hydrographic Surveys
    - IMCA S 024, Guidelines for Sub-Bottom Profiler Operations
    - Equipment manufacturer documentation
