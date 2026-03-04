---
title: Marine Environment Effects on Survey Operations
category: reference
tags: [environment, acoustics, sea-state, thermocline, svp, currents, backscatter, weather-windows, operational-limits]
date_added: 2026-03-04
source_type: reference_table
---

# :material-weather-pouring: Marine Environment Effects on Survey Operations

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Reference</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Operational Reference</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-04</strong></span>
</div>

!!! abstract "Purpose"
    Practical reference for understanding how the marine environment affects survey data quality and operations. Covers the water column, ocean currents, sea state, weather windows, seabed types, and aeration -- with specific numbers, thresholds, and decision criteria for working surveyors.

---

## :material-thermometer-water: Water Column Structure

The ocean is not a uniform body of water. It has layers, and those layers bend, block, and distort every acoustic signal you send through them.

### The Three Layers

| Layer | Depth Range | Character | Sound Speed Behaviour |
|:--|:--|:--|:--|
| Mixed layer | Surface to ~20-200 m | Uniform temperature from wind/wave mixing | Roughly constant |
| Thermocline | ~200-1000 m | Temperature drops rapidly with depth | Decreasing -- causes downward refraction |
| Deep isothermal | Below ~1000 m | Stable at 1-4 deg C | Increases with depth (pressure effect only) |

### Key Definitions

- **Thermocline** -- layer of rapid temperature change with depth. Strongest in summer. Separates warm surface water from cold deep water.
- **Halocline** -- layer of rapid salinity change. Most pronounced near river mouths, polar regions, and areas with high evaporation/rainfall contrast.
- **Pycnocline** -- layer of rapid density change. Usually coincides with the thermocline. This is the layer that actually matters for acoustics, because sound speed depends on density.

### How Layers Affect Acoustics

Sound bends toward regions of lower speed. A thermocline causes downward refraction, creating **shadow zones** where acoustic signals do not reach. This directly hits USBL range and accuracy.

Specific effects:

- **USBL positioning**: Without SVP correction, horizontal errors can reach several metres. With proper SVP correction, errors drop dramatically (one study showed improvement from 0.45 m to 0.08 m).
- **Multibeam**: Incorrect SVP through a thermocline causes "smiles" or "frowns" on outer beams. Nadir remains correct; errors increase toward swath edges. Depth bias from modelled profiles can exceed 1% of water depth at 65-degree launch angles.
- **Shadow zones**: Negative SVP gradient creates areas where no direct sound path exists. Acoustic positioning systems lose track of targets in these zones.
- **Energy trapping**: The pycnocline can trap sound energy, preventing it from crossing the density boundary. This limits USBL range or creates multipath returns.

### Sound Speed Fundamentals

Sound speed in seawater: typically 1,450-1,570 m/s. Governed by three factors:

| Factor | Effect on Sound Speed | Dominance |
|:--|:--|:--|
| Temperature | +4.5 m/s per 1 deg C increase | Dominant in upper ocean |
| Salinity | +1.3 m/s per 1 PSU increase | Secondary |
| Pressure/depth | +1.7 m/s per 100 m depth increase | Dominant in deep water |

Simplified formula:

**C = 1449.2 + 4.6T + 0.055T^2 + 1.39(S - 35) + 0.016D**

Where C is in m/s, T in deg C, S in ppt, D in metres.

### SVP Cast Frequency

This is one of the most common mistakes in the field: not taking enough SVP casts.

| Environment | Recommended SVP Interval | Notes |
|:--|:--|:--|
| Open ocean, well-mixed | Every 60 minutes | Standard practice |
| Stratified waters (Baltic, Gulf of Mexico, estuaries) | Every 2-3 minutes | SVP can change on very short timescales |
| After storm passage | Re-cast immediately | Storm mixing can temporarily break down thermocline |
| Strong tidal mixing areas | At each tide change | Tidal currents redistribute water layers |
| Shallow water with solar heating | Every 30-60 minutes | Surface layer heats through the day |

!!! warning "Surface Sound Speed"
    Sound speed at the transducer face controls beam steering. Errors here may be worse than ray-tracing errors through the water column. A hull-mounted SV sensor providing continuous real-time correction is essential.

---

## :material-current-dc: Ocean Currents

### Effects on Operations

**ROV operations**: Currents create drag on the umbilical cable, reducing ROV velocity and degrading positioning accuracy. The TMS lengthens/shortens the tether to minimise drag, but in deeper water the effect becomes substantial. Strong tidal currents cause anchored support vessels to swing +/- 30 m, making ROV control and umbilical management very difficult.

**Vessel positioning**: DP systems must constantly compensate for current forces. Anchored vessels swing with tide changes, requiring careful planning of swing circles. Ignoring tidal stream can lead to dangerous situations.

**Acoustic positioning**: Currents bend acoustic ray paths by creating temperature and salinity gradients. USBL and LBL fixes can be offset if the SVP does not reflect actual conditions driven by current mixing.

**Equipment deployment**: Lowering and recovering equipment through the water column is affected by current shear at different depths. Equipment can drift off-target or catch on the vessel/structure.

### Current Thresholds

| Operation | Current Limit | Notes |
|:--|:--|:--|
| ROV operations | < 1.5-2.0 knots at work site | Varies by ROV class |
| Diver operations | < 1.0 knot | Most restrictive operation |
| Crane / lifting operations | Vessel-dependent | Current-induced motion is the concern |
| DP station-keeping | Sufficient thruster reserve | Monitor thruster utilisation |

### Practical Mitigation

- Monitor real-time current data (ADCP, metocean buoys)
- Plan critical operations around tidal slack windows
- Use TMS to manage umbilical drag in deep water
- Update SVPs frequently in areas with strong current mixing
- Know local tidal patterns and plan vessel heading accordingly

---

## :material-waves: Sea State and Weather

### Douglas Sea Scale

| Code | Description | Wave Height (m) |
|:--:|:--|:--|
| 0 | Calm (glassy) | 0 |
| 1 | Calm (rippled) | 0 - 0.1 |
| 2 | Smooth | 0.1 - 0.5 |
| 3 | Slight | 0.5 - 1.25 |
| 4 | Moderate | 1.25 - 2.5 |
| 5 | Rough | 2.5 - 4.0 |
| 6 | Very rough | 4.0 - 6.0 |
| 7 | High | 6.0 - 9.0 |
| 8 | Very high | 9.0 - 14.0 |
| 9 | Phenomenal | > 14.0 |

Douglas Sea State 3 (Hs < 1.25 m) is commonly used as the "good weather" threshold in offshore contracts.

### Operational Limits by Activity

| Operation | Wave Height Limit (Hs) | Wind Limit | Notes |
|:--|:--|:--|:--|
| Crew transfer (boat-to-platform) | < 1.3 m | -- | Safety criterion |
| Crane operations | < 1.5-2.0 m | < 20-25 knots | Manufacturer dependent |
| Jack-up rig moves | < 1.0-1.5 m | < 15-20 knots | Wave period < 8 s during towing |
| Multibeam survey | < 2.0-3.0 m | -- | Quality limit, not safety |
| ROV operations | < 2.5-3.5 m | -- | Dependent on vessel/LARS |
| Dive operations | < 1.0-1.5 m | < 15 knots | Most restrictive |

### Effects on Survey Data

**Vessel motion artifacts in MBES**: Even with MRU/IMU compensation, residual artifacts of **0.25-0.5% of water depth** appear in the data, correlating with vessel motion rather than actual seabed features. These show up as subtle along-track or across-track ripples in shaded-relief views.

**Heave errors**: Incorrect lever-arm definitions create induced heave errors that are invisible in calm conditions but grow with increasing sea state. Error magnitudes can reach several metres depending on lever-arm offsets and vessel motion.

**Shallow water**: In shallow water, heave, vessel squat/lift, antenna motion, and internal time delays cause greater errors than bottom detection itself.

**GNSS degradation**: Excessive vessel motion can degrade GNSS fix quality and cause antenna masking.

### Mitigation

- Accurate lever-arm measurements (measure from reference point to sensor AND back -- should match within centimetres)
- Proper patch test calibration on known flat-bottom areas
- Use shaded-relief visualisation to spot motion artifacts early in acquisition
- Reduce swath width in rough conditions to minimise outer beam errors
- Monitor real-time data quality continuously

---

## :material-weather-partly-cloudy: Weather Windows

A weather window is a period when environmental conditions are within acceptable limits for a specific operation. About 80% of decisions made offshore involve the weather.

### Key Parameters

- **Significant wave height (Hs)** -- the dominant parameter for most marine operations
- **Wave period (Tp)** -- critical for resonance effects. Periods < 8 s are particularly problematic for jack-up rigs
- **Wind speed** -- affects crane operations, personnel safety, vessel stability
- **Swell** -- can persist long after local wind drops. Must be assessed separately from wind waves
- **Tidal current** -- slack tide windows needed for critical deployments
- **Forecast trend** -- steady or declining weather preferred; rising conditions increase risk

### Seasonal Considerations

| Season | Weather Windows | Acoustic Conditions | Trade-off |
|:--|:--|:--|:--|
| Summer | Longer, more frequent | Worse -- strong thermoclines degrade acoustics | Better ops access, worse data quality |
| Winter | Shorter, rarer | Better -- isothermal water column | Harder to get on location, better SVP conditions |
| Spring/autumn | Rapidly changing | Variable | Requires more frequent forecast updates |
| Monsoon/hurricane | Extended no-go periods | Variable | Plan around entire seasons |

The summer vs winter trade-off is real and worth understanding: summer gives you longer weather windows to actually work, but the strong thermoclines degrade acoustic performance. Winter gives you a well-mixed, isothermal water column with excellent acoustic propagation, but you may spend weeks waiting for weather. A North Sea operation that takes one week in summer can require months in winter just waiting for windows.

### Planning Approach

- Forecasters work 24/7 providing high-confidence forecasts -- consult updated forecasts regularly
- Real-time observations (vessel weather stations, metocean buoys) calibrate forecast models
- Time-series analysis of historical metocean data is preferred over statistical analysis for window prediction
- Delayed or unreviewed forecast information has contributed to offshore incidents

---

## :material-terrain: Seabed Types and Backscatter

### How Seabed Type Affects Acoustic Returns

| Seabed Type | Backscatter Intensity | Bottom Detection | Sound Penetration |
|:--|:--|:--|:--|
| Rock, gravel | High | Strong, clean returns | Minimal |
| Compacted sand | Medium-high | Good | Limited |
| Fine sand | Medium | Good | Some |
| Silt | Low-medium | Can be ambiguous | Moderate |
| Mud, clay | Low | May track sub-bottom reflector | Good (tens of metres for SBP) |

### Bottom Detection Issues on Soft Seabeds

On soft substrates (mud, silt), the MBES may lock onto a sub-bottom reflector rather than the true seabed surface. The bottom detection algorithm sees a stronger return from a harder layer below the surface, and reports that as the seabed. This creates depth errors that are difficult to detect without cross-referencing against other data or ground-truthing.

### Survey Azimuth Effects on Backscatter

Organised roughness on the seabed (ripples, sand waves caused by tidal currents) creates strong backscatter level differences when surveyed from different directions. This matters for:

- Backscatter mosaics: adjacent lines surveyed in opposite directions may show striping
- Seabed classification: angular response varies with survey direction over rippled substrates
- QC: cross-line checks in different directions help identify azimuth-dependent artifacts

When designing surveys, consider the impact of survey direction on backscatter quality, especially over sandy seabeds with tidal current features.

### Effects on Other Systems

- **Sub-bottom profiler (SBP)**: Penetration depth depends on sediment type. Mud/clay: good penetration (tens of metres). Sand: limited. Rock: minimal to none.
- **Side-scan sonar (SSS)**: Hard objects on soft seabed produce strong shadows and high contrast. Soft objects on soft seabed are harder to detect.
- **Acoustic positioning (USBL/LBL)**: Hard, flat seabeds cause stronger multipath reflections, potentially degrading position accuracy near the bottom.
- **Pipe tracker**: Seabed conductivity varies with sediment type, affecting electromagnetic detection range.

---

## :material-waves-arrow-up: Aeration and Bubble Effects

In rough weather, air bubbles become trapped under the vessel hull. This is one of the most frustrating problems because you cannot fix it -- you either wait it out or stop surveying.

### What Happens

- Air bubbles scatter and absorb acoustic energy
- Creates noise, dropouts, and false returns in hull-mounted sonar data
- Worse in head seas, shallow-draft vessels, and rough conditions
- Affects all hull-mounted systems: MBES, single-beam, USBL transducers

### When to Expect It

- Sea state 4+ (Hs > 1.25 m), especially in head seas
- Vessels with flat bottoms or shallow draft
- During speed changes or tight turns
- After vessel impacts with waves

### What You Can Do

- Change vessel heading relative to seas (beam seas or following seas may reduce bubble entrainment)
- Reduce vessel speed
- If persistent, stop acquisition and wait for conditions to improve
- Some vessels have better hull designs for bubble shedding -- this is worth knowing about your platform

!!! warning "Non-Recoverable"
    Severe aeration events cannot be fixed in post-processing. If bubble washdown is visible in real-time data (noise bands, dropouts in the water column display), the affected data is likely unusable. Better to stop and wait than to collect hours of bad data.

---

## :material-stop-circle-outline: When to Stop Surveying

There is no single answer, but here are the decision points:

**Stop acquisition when:**

- Vessel motion artifacts exceed project specifications (check shaded-relief in real time)
- Aeration is causing persistent dropouts in MBES or USBL data
- Heave compensation is failing (check heave sensor status and residuals)
- GNSS quality has degraded below acceptable thresholds
- Sea state exceeds operational limits for the activity (see table above)
- SVP conditions are changing faster than you can cast (stratified environments)

**Reduce scope when:**

- Conditions are borderline -- reduce swath width to minimise outer beam errors
- Increase SVP cast frequency rather than stopping entirely
- Switch to less weather-sensitive tasks (data processing, reporting, equipment maintenance)

**Continue with caution when:**

- Conditions are within limits but deteriorating -- monitor trend closely
- Vessel motion is present but within MRU compensation capability
- SVP is stable and recently updated

The right call depends on the project specification, the client's tolerance for data quality, and how much time you have left in the weather window. When in doubt, check the data in real time. If you can see the artifacts, the data is not meeting spec.

---

## :material-link-variant: Related Articles

- [Sound Velocity Operations](../sensors/sound-velocity-operations.md)
- [SVP Repeatability Test](../sensors/svp-repeatability-test.md)
- [SV/CTD Comparison Verification](../sensors/sv-ctd-comparison-verification.md)
- [MBES Calibration (Patch Test)](../sensors/mbes-calibration.md)
- [USBL Theory and Error Budgets](../positioning/usbl-theory-and-error-budgets.md)
- [TPU and Error Budgets](tpu-error-budgets.md)
- [Acceptance Criteria Reference](acceptance-criteria-reference.md)

---

!!! quote "Sources"
    - [Mapping Ocean Currents to Schedule Deep-Sea Asset Inspection](https://www.mapmyops.com/mapping-ocean-currents-to-schedule-deep-sea-asset-inspection)
    - [SEOS Project: Ocean Currents and Offshore Industries](https://seos-project.eu/oceancurrents/oceancurrents-c01-p04.html)
    - [ROV LATIS: Precision Control and Dynamic Positioning](https://scholars.direct/Articles/robotics/jra-1-005.php?jid=robotics)
    - [Douglas Sea Scale - Vento Maritime](https://ventomaritime.dk/blog/douglas-sea-scale)
    - [Artifacts in Multi-beam Echosounder Data - Hydro International](https://www.hydro-international.com/content/article/artefacts-in-multi-beam-echosounder-data)
    - [Top Tips for Accurate Multibeam Survey - R2Sonic](https://r2sonic.com/control-whats-controllable-top-tips-for-accurate-multibeam-survey/)
    - [StormGeo: Why Douglas Sea State 3 Should be Eliminated](https://stormgeo.com/insights/why-douglas-sea-state-3-should-be-eliminated-from-good-weather-clauses)
    - [ScienceDirect: Thermocline](https://www.sciencedirect.com/topics/physics-and-astronomy/thermocline)
    - [ScienceDirect: Pycnocline](https://www.sciencedirect.com/topics/engineering/pycnocline)
    - [US Navy Sonar Propagation Guide](https://man.fas.org/dod-101/navy/docs/es310/SNR_PROP/snr_prop.htm)
    - [Underwater Acoustics - arc.id.au](https://www.arc.id.au/UWAcoustics.html)
    - [IHO: Improved Sound Speed Techniques for Multibeam](https://ihr.iho.int/articles/improved-techniques-to-resolve-the-water-column-sound-speed-structure-for-multibeam-ray-tracing/)
    - [AML Oceanographic: Smiles, Frowns & Misplaced Seafloors](https://amloceanographic.com/blogs/smiles-frowns-misplaced-seafloors-the-case-for-accurate-sound-velocity-data)
    - [Infoplaza: Making Offshore Weather Work for You](https://www.infoplaza.com/en/blog/offshore-weather-prevent-incidents-reliable-forecast)
    - [MDPI: Improved Methodology of Weather Window Prediction](https://www.mdpi.com/2077-1312/5/2/20)
    - [NOAA: Multibeam Sonar](https://oceanexplorer.noaa.gov/technology/sonar-multibeam/)
    - [Springer: Survey Azimuth Effects on Backscatter](https://link.springer.com/article/10.1007/s11001-017-9318-3)
    - [MDPI: Mapping Seabed with Multi-Frequency MBES](https://www.mdpi.com/2072-4292/12/1/52)
    - [Britannica: Seawater Acoustic Properties](https://www.britannica.com/science/seawater/Acoustic-properties)
    - [R2Sonic: Basic Acoustic Theory (PDF)](https://www.r2sonic.com/wp-content/uploads/2020/06/R2Sonic-Basic-Acoustic-Theory.pdf)
    - [DOSITS: Shallow Water Propagation](https://dosits.org/science/advanced-topics/shallow-water-propagation/)
