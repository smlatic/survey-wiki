---
title: Underwater Acoustics Fundamentals
category: reference
tags: [acoustics, sound-velocity, svp, refraction, absorption, ray-tracing, mbes, usbl, sonar, thermocline, SOFAR]
date_added: 2026-03-04
source_type: equipment_guide
---

# :material-sine-wave: Underwater Acoustics Fundamentals

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Reference</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Theory Guide</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-04</strong></span>
</div>

!!! abstract "Purpose"
    Cover the physical principles of how sound behaves in seawater and why they matter for every acoustic system on a survey spread. This article connects the physics (speed of sound, refraction, absorption) to the practical decisions surveyors make daily: when to cast an SVP, which sonar frequency to use, why outer beams drift, and where USBL positioning errors come from.

---

## :material-calendar-check: When to Use

- When you need to understand **why** SVP casts, beam steering corrections, and frequency selection work the way they do
- As background for troubleshooting MBES artefacts (smile/frown patterns) or USBL scatter
- When explaining acoustic survey principles to new team members
- As a companion to the operational procedures in this wiki

---

## :material-water: Sound in Water -- The Medium We Work In

Every acoustic survey tool -- MBES, SBES, USBL, LBL, SBP, SSS -- relies on the same principle: send a sound pulse into water, measure what comes back. The accuracy of every depth, every position, every seabed image depends on how well we understand what happens to that sound pulse between transmission and reception.

Sound travels roughly **4.4 times faster in seawater (~1,500 m/s)** than in air (~343 m/s). But unlike air, seawater is not uniform. Temperature, salinity, and pressure all change with depth, location, season, and time of day. These changes bend, slow, speed up, and absorb our acoustic signals. If we ignore them, our data is wrong.

---

## :material-speedometer: Speed of Sound in Seawater

The speed of sound in seawater typically ranges from **1,450 to 1,570 m/s**. Three variables control it:

| Factor | Sensitivity | Where It Dominates |
|--------|------------|-------------------|
| **Temperature** | ~4.5 m/s per 1 degC increase | Upper water column (0--1,000 m) |
| **Salinity** | ~1.3 m/s per 1 PSU increase | Coastal/estuarine areas, near river outflows |
| **Pressure (depth)** | ~1.7 m/s per 100 m depth increase | Deep water (below ~1,000 m) |

Temperature is the dominant factor in shallow and mid-water depths. In the deep ocean, where temperature stabilises near 2--4 degC, pressure takes over and sound speed increases steadily with depth.

### The Mackenzie Equation (1981)

The most commonly used formula for calculating sound speed from measured T, S, and Z:

$$
C = 1448.96 + 4.591T - 0.05304T^2 + 0.0002374T^3 + 0.0160Z + (1.340 - 0.01025T)(S - 35) + 1.675 \times 10^{-7}Z^2 - 7.139 \times 10^{-13}T \cdot Z^3
$$

Where:

- **C** = speed of sound (m/s)
- **T** = temperature (degC)
- **S** = salinity (PSU)
- **Z** = depth (m)

**Valid ranges:** 2--30 degC, 25--40 PSU, 0--8,000 m depth. Accuracy: ~0.1 m/s.

In plain terms: the first three terms handle temperature (including its non-linear effect), the Z terms handle pressure, and the bracketed (S - 35) term adjusts for salinity deviation from the standard 35 PSU.

### Other Equations You'll Encounter

- **Chen-Millero (UNESCO, 1977)** -- the international standard. More complex polynomial, slightly wider valid range. Used by many CTD manufacturers and processing software. See the [Formulas and Conversions](../reference/formulas-and-conversions.md) page for the simplified form.
- **Del Grosso (1974)** -- alternative high-precision formulation, sometimes preferred for deep-water work.
- **Medwin (1975)** -- simplified version useful for quick estimates in the field.

!!! info "Which Equation Does My Software Use?"
    Most survey software (Kongsberg SIS, QINSy, EIVA NaviPac) allows you to select the SV formula. If your SVP/CTD probe measures sound velocity directly (time-of-flight), the equation choice only matters for validation. If your probe is a CTD (measuring conductivity, temperature, pressure), the equation converts those measurements to sound velocity. Check your probe type and software settings at mobilisation.

---

## :material-chart-line: Sound Velocity Profiles (SVPs)

A sound velocity profile is a plot of sound speed against depth through the water column. It is the single most important environmental input for acoustic survey systems.

### Typical Deep-Ocean Profile Structure

A classic deep-ocean SVP has three distinct layers:

1. **Surface / Mixed Layer (0--100 m)** -- Wind and wave action mix this layer, keeping temperature (and therefore sound speed) relatively uniform. Sound speed here is typically 1,500--1,530 m/s in temperate waters.

2. **Thermocline (100--1,000 m)** -- Temperature drops rapidly with depth. Since temperature dominates sound speed in this range, sound speed decreases sharply. This is the layer that causes most refraction problems for survey acoustics.

3. **Deep Isothermal Layer (below ~1,000 m)** -- Temperature stabilises near 2--4 degC. Pressure now dominates, and sound speed increases steadily with depth. At 4,000 m depth, sound speed is typically back up to ~1,540 m/s.

The minimum sound speed occurs where the thermocline meets the deep layer, typically around 700--1,200 m depth. This minimum creates the SOFAR channel (see below).

### What Changes a Profile

SVPs are not static. They change with:

- **Season** -- Summer heating strengthens the thermocline and raises surface sound speed. Winter cooling weakens it. In some areas the thermocline disappears entirely in winter.
- **Location** -- Tropical waters have a strong permanent thermocline. Polar waters may have near-uniform temperature throughout the column but salinity-driven layering instead.
- **Time of day** -- Solar heating creates a shallow diurnal thermocline in the top 10--30 m, especially in calm conditions.
- **Local conditions** -- River runoff (drops salinity), upwelling (brings cold water to surface), currents, and frontal boundaries can all change the profile rapidly.

### The Halocline and Pycnocline

The thermocline gets most of the attention, but two other boundaries matter:

- **Halocline** -- a layer where salinity changes rapidly with depth. Common in fjords, estuaries, and polar regions where freshwater sits on top of saltwater. A halocline can cause sound speed changes even when temperature is uniform.
- **Pycnocline** -- a layer where water density changes rapidly. Usually coincides with the thermocline or halocline. Relevant because density changes affect how sound energy propagates.

In coastal and estuarine survey areas, salinity stratification can be just as problematic as temperature stratification. If you're working near a river mouth, expect rapid SVP changes.

---

## :material-swap-vertical: Refraction -- Why Sound Bends

Sound in water does not travel in straight lines. It bends toward regions of lower sound speed. This is refraction, and it is governed by Snell's Law:

$$
\frac{\sin(\theta_1)}{c_1} = \frac{\sin(\theta_2)}{c_2}
$$

Where:

- **theta_1, theta_2** = angles of the ray from vertical in layers 1 and 2
- **c_1, c_2** = sound speeds in layers 1 and 2

### What This Means in Practice

In the thermocline, sound speed decreases with depth. Snell's Law tells us the ray bends **downward** (away from horizontal) -- sound curves toward the slower layer. Below the thermocline, sound speed increases with depth, so rays bend **upward**.

This creates several important effects:

- **Shadow zones** -- areas in the water column where sound from a source cannot reach because all rays have been refracted away. A USBL transceiver can lose track of a transponder if it falls in a shadow zone, even at relatively short ranges.
- **Convergence zones** -- areas where refracted rays focus, creating pockets of stronger signal. These can cause false returns or multipath in acoustic positioning.
- **Sound channels** -- where sound is trapped between layers of increasing sound speed above and below, bouncing back and forth and travelling enormous distances with minimal loss.

### Ray Tracing -- How Survey Software Handles Refraction

Multibeam processing software does not assume sound travels in straight lines. It performs **ray tracing**: stepping through the SVP layer by layer, applying Snell's Law at each boundary to calculate the curved path each beam follows.

The process:

1. Take the loaded SVP (layers of depth vs. sound speed)
2. For each beam, start at the transducer with the known launch angle
3. At each layer boundary, apply Snell's Law to compute the new ray direction
4. Integrate along the curved path to get the horizontal offset and depth of the sounding

If the SVP loaded in the software does not match the actual water column, the ray trace produces wrong results. The beam ends up in the wrong place. This is why SVP accuracy matters so much.

!!! tip "Go Deeper"
    - [Sound Velocity Operations](../sensors/sound-velocity-operations.md) -- deployment procedures, equipment, processing
    - [SVP Repeatability Test](../sensors/svp-repeatability-test.md)
    - [SV/CTD Comparison Verification](../sensors/sv-ctd-comparison-verification.md)

---

## :material-volume-off: Absorption -- Why Frequency Matters

As sound travels through seawater, energy is absorbed and converted to heat. This absorption is **strongly frequency-dependent** -- higher frequencies lose energy much faster than lower frequencies.

### Absorption vs. Frequency

| Frequency | Typical Absorption | Typical Application |
|-----------|-------------------|-------------------|
| 1 kHz | ~0.08 dB/km | Military sonar, ocean research |
| 10 kHz | ~1 dB/km | Deep-water SBES, SBP |
| 12 kHz | ~1.2 dB/km | Deep-water MBES (Kongsberg EM 122/124) |
| 30 kHz | ~8 dB/km | USBL (Kongsberg HiPAP, Sonardyne Ranger) |
| 100 kHz | ~40 dB/km | Shallow MBES, SSS |
| 200 kHz | ~50 dB/km | Shallow-water MBES (Kongsberg EM 2040) |
| 400 kHz | ~100 dB/km | Very shallow MBES, high-res imaging |

### Three Absorption Mechanisms

Sound absorption in seawater comes from three distinct processes:

1. **Boric acid relaxation (B(OH)3)** -- significant only below ~10 kHz. Depends on pH and temperature.
2. **Magnesium sulphate relaxation (MgSO4)** -- dominant at typical echosounder frequencies (12--500 kHz). This is the main contributor for most survey sonars.
3. **Pure water viscous absorption** -- dominant above 1 MHz. Proportional to frequency squared.

The standard model is **Francois & Garrison (1982)**, which calculates absorption in dB/km as a function of frequency, temperature, salinity, depth, and pH. A simpler version by **Ainslie & McColm (1998)** gives the same accuracy with fewer terms.

### The Range vs. Resolution Tradeoff

This frequency-absorption relationship is the fundamental reason different survey tasks use different sonar frequencies:

- **Deep-water MBES (12 kHz):** Needs to reach 5,000+ m and back. At 12 kHz, absorption is only ~1.2 dB/km, so the signal survives the round trip. But wavelength is ~12.5 cm, limiting resolution.
- **Shallow-water MBES (200--400 kHz):** In 20 m of water, even 50 dB/km absorption is negligible over a 40 m round trip. The short wavelength gives centimetre-level resolution.
- **Sub-bottom profiler (2--10 kHz):** Low frequency penetrates the seabed. Higher frequencies give better layer resolution but less penetration.
- **Side scan sonar (100--500 kHz):** Balances image resolution against the range needed for lane spacing.
- **USBL (20--30 kHz):** Needs to reach an ROV at 2,000--3,000 m depth. At 30 kHz, absorption of ~8 dB/km means ~16--24 dB lost over the slant range -- significant but manageable with enough source level.

!!! warning "Practical Limit"
    Frequencies above ~1 MHz are rarely used in survey because absorption is so high the signal cannot travel useful distances. This is why, for example, acoustic modems operate at lower frequencies than you might expect given the data rates needed.

---

## :material-waves-arrow-right: The SOFAR Channel

The SOFAR (Sound Fixing and Ranging) channel is a natural sound duct in the ocean, centred on the depth of minimum sound speed (typically 700--1,200 m in mid-latitudes). Above this minimum, sound speed increases toward the warm surface. Below it, sound speed increases due to pressure.

Sound rays near this minimum are continuously refracted back toward the axis of the channel -- upward-bending rays from above, downward-bending rays from below. The result is that sound is trapped and can travel **thousands of kilometres** with very little energy loss. Low-frequency sounds (around 10--20 Hz) from undersea earthquakes and whale calls have been detected across entire ocean basins through the SOFAR channel.

### Survey Relevance

The SOFAR channel is not something you directly interact with in most survey operations, but understanding it helps explain:

- Why deep-water SVPs have the characteristic shape they do (high at surface, minimum at mid-depth, high again at depth)
- Why LBL transponder networks in deep water may pick up unexpected acoustic noise from distant sources
- Why the minimum sound speed depth is a natural dividing line in the water column's acoustic behaviour

---

## :material-reflect-horizontal: Multipath and Reflections

In any body of water with a surface and a bottom, sound can reach a receiver by multiple paths:

- **Direct path** -- the shortest route from source to receiver
- **Surface reflection** -- sound bounces off the sea surface (which acts as a near-perfect reflector)
- **Bottom reflection** -- sound bounces off the seabed (reflection strength depends on bottom type)
- **Multiple bounces** -- combinations of surface and bottom reflections
- **Refracted paths** -- sound bent through different water layers arriving at different times

The problem: these multiple arrivals reach the receiver at different times, with different amplitudes and phases. The receiver may interpret them as separate returns or they may interfere with the direct signal.

### Multipath Effects on Survey Systems

| System | Effect | Symptom |
|--------|--------|---------|
| **USBL** | Multiple acoustic arrivals cause the phase-difference calculation to use reflected signals instead of the direct path | Erratic position jumps, increased scatter, systematic offsets |
| **MBES** | Bottom and surface reflections create false returns at incorrect depths | Noise in the water column, ghost seabed returns |
| **LBL** | Multipath arrivals corrupt range measurements | Range outliers, baseline inconsistencies |
| **Acoustic comms** | Delayed copies of the signal interfere with later symbols | Data errors, reduced throughput |

Multipath is worst in **shallow water** where the surface and bottom are both close to the signal path, creating many reflection opportunities. It also worsens in areas with hard, flat seabeds (strong bottom reflection) and calm seas (strong surface reflection).

---

## :material-wrench: Practical Implications for Survey

### SVP Casts -- Why They Matter So Much

Every acoustic range measurement converts travel time to distance using sound speed. Every MBES beam is ray-traced through the SVP. Every USBL slant range depends on an accurate integrated sound speed along the ray path. If the SVP is wrong, the geometry is wrong.

**When to take an SVP cast:**

- At the start of every survey operation
- After significant weather changes (storms mix the water column)
- After moving to a new location (different water mass)
- When the surface SV sensor shows a change of more than ~2 m/s
- At intervals defined by the scope of work (often every 4--6 hours in coastal waters)
- Before and after USBL calibration
- Before and after LBL baseline measurements

### MBES Smile/Frown Artefacts

The classic symptom of an incorrect SVP in multibeam data is a **systematic curve across the swath** visible where adjacent survey lines overlap:

- **"Smiles" (outer beams curve upward)** -- the SVP loaded in the software has sound speeds that are **too high** compared to reality. The ray trace over-corrects, pushing outer beams too shallow.
- **"Frowns" (outer beams curve downward)** -- the SVP has sound speeds that are **too low**. The ray trace under-corrects, pushing outer beams too deep.

These artefacts are **worst at the outer beams** (high beam angles) because those rays travel longer, more oblique paths through the water column and accumulate more refraction error. Nadir beams (pointing straight down) are barely affected because they pass through layers at near-normal incidence.

A depth bias threshold of **0.25% of water depth** has been established as a practical limit compatible with MBES uncertainty budgets and IHO S-44 requirements. Beyond this, your SVP needs updating.

!!! tip "Quick Field Check"
    If you see smiles or frowns developing in your real-time coverage map, take a new SVP cast immediately. Don't wait for the scheduled interval. Also verify that the correct SVP is loaded -- sometimes the wrong profile is applied after a cast.

### USBL Positioning Errors

USBL systems convert acoustic travel time to slant range using the mean sound speed along the ray path from the transceiver to the transponder. If the SVP is wrong:

- The computed slant range is wrong
- The ray path geometry is wrong (the beam bends differently than the software assumes)
- Both the depth and horizontal position of the transponder are affected

In deep water with strong thermoclines, USBL errors from poor SVP data can reach **several metres** -- enough to exceed project specifications. This is why a full-column SVP cast (surface to seabed) is required before every USBL calibration.

!!! tip "Go Deeper"
    - [USBL Theory and Error Budgets](../positioning/usbl-theory-and-error-budgets.md) -- full breakdown of USBL error sources including SVP
    - [HiPAP USBL Calibration](../positioning/hipap-usbl-calibration.md)
    - [MBES Calibration (Patch Test)](../sensors/mbes-calibration.md) -- includes SVP requirements for calibration
    - [LBL Fundamentals](../positioning/lbl-fundamentals.md) -- SVP effects on baseline measurements

---

## :material-book-open-variant: Summary

| Concept | Key Takeaway |
|---------|-------------|
| Sound speed | ~1,500 m/s in seawater, varies with temperature, salinity, and pressure |
| Temperature effect | ~4.5 m/s per degC -- dominates in shallow/mid water |
| Salinity effect | ~1.3 m/s per PSU -- watch for it near coasts and river mouths |
| Pressure effect | ~1.7 m/s per 100 m depth -- dominates in deep water |
| SVP structure | Mixed layer, thermocline, deep isothermal layer |
| Refraction | Sound bends toward lower velocity -- Snell's Law governs the geometry |
| Absorption | Higher frequency = more absorption = shorter range but better resolution |
| SOFAR channel | Sound trapped at the depth of minimum velocity -- travels vast distances |
| Multipath | Reflected signals corrupt direct-path measurements -- worse in shallow water |
| SVP casts | The most important field operation for acoustic data quality |
| Smile/frown | Classic MBES artefact from incorrect SVP -- worst at outer beams |

---

## :material-link-variant: Related Articles

- [Sound Velocity Operations](../sensors/sound-velocity-operations.md)
- [SVP Repeatability Test](../sensors/svp-repeatability-test.md)
- [SV/CTD Comparison Verification](../sensors/sv-ctd-comparison-verification.md)
- [MBES Calibration and Verification (Patch Test)](../sensors/mbes-calibration.md)
- [MBES Operations and Settings](../sensors/mbes-operations-and-settings.md)
- [USBL Theory and Error Budgets](../positioning/usbl-theory-and-error-budgets.md)
- [HiPAP USBL Calibration](../positioning/hipap-usbl-calibration.md)
- [LBL Fundamentals](../positioning/lbl-fundamentals.md)
- [Common Formulas and Conversions](../reference/formulas-and-conversions.md)
- [TPU and Error Budgets](../reference/tpu-error-budgets.md)

---

## :material-bookshelf: Sources

- DOSITS -- Speed of Sound Tutorial: [https://dosits.org/tutorials/science/tutorial-speed/](https://dosits.org/tutorials/science/tutorial-speed/)
- DOSITS -- Sound Speed (Decision Makers): [https://dosits.org/decision-makers/tutorials/science/sound-speed/](https://dosits.org/decision-makers/tutorials/science/sound-speed/)
- Britannica -- Seawater Acoustic Properties: [https://www.britannica.com/science/seawater/Acoustic-properties](https://www.britannica.com/science/seawater/Acoustic-properties)
- LibreTexts -- Sound in the Ocean (Stewart): [https://geo.libretexts.org/Bookshelves/Oceanography/Introduction_to_Physical_Oceanography_(Stewart)/03:_The_Physical_Setting/3.6:_Sound_in_the_Ocean](https://geo.libretexts.org/Bookshelves/Oceanography/Introduction_to_Physical_Oceanography_(Stewart)/03:_The_Physical_Setting/3.6:_Sound_in_the_Ocean)
- IHR -- Improved Techniques for MBES Ray Tracing SVP: [https://ihr.iho.int/articles/improved-techniques-to-resolve-the-water-column-sound-speed-structure-for-multibeam-ray-tracing/](https://ihr.iho.int/articles/improved-techniques-to-resolve-the-water-column-sound-speed-structure-for-multibeam-ray-tracing/)
- INFOMAR -- SVP and Oceanographic Controls: [https://www.infomar.ie/surveys/equipment/sound-velocity-profiles-and-oceanographic-controls](https://www.infomar.ie/surveys/equipment/sound-velocity-profiles-and-oceanographic-controls)
- Arc.id.au -- Sonar Ray Tracing: [https://www.arc.id.au/SonarRayTracing.html](https://www.arc.id.au/SonarRayTracing.html)
- Engineering Toolbox -- Sound Speed in Water: [https://www.engineeringtoolbox.com/sound-speed-water-d_598.html](https://www.engineeringtoolbox.com/sound-speed-water-d_598.html)
- Mackenzie, K.V. (1981). "Nine-term equation for sound speed in the oceans." *Journal of the Acoustical Society of America*, 70(3), 807--812.
- Francois, R.E. & Garrison, G.R. (1982). "Sound absorption based on ocean measurements." *Journal of the Acoustical Society of America*, 72(3), 896--907.
- Ainslie, M.A. & McColm, J.G. (1998). "A simplified formula for viscous and chemical absorption in sea water." *Journal of the Acoustical Society of America*, 103(3), 1671--1672.
