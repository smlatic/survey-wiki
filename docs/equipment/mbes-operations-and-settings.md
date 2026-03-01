---
title: MBES Operations and Settings
category: equipment
tags: [mbes, multibeam, operations, draft, tides, sound velocity, coverage, settings, qc, iho, s-44, tpu, thu, tvu, accuracy]
equipment: [Multibeam Echosounder, Motion Sensor, Gyrocompass, Sound Velocity Profiler, GNSS, Tide Gauge]
date_added: 2026-03-01
source_type: converted_procedure
---

# :material-waves: MBES Operations and Settings

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Equipment</strong></span>
<span class="meta-item">:material-cog-outline: <strong>Operations Guide</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Provide operational guidance for multibeam echosounder surveys, covering draft measurement, tidal reduction methods, sound velocity, coverage planning, acquisition settings, online quality control, IHO S-44 survey standards, uncertainty budgets (TPU/THU/TVU), and performance testing.

---

## :material-ruler: Draft Measurements

Draft is defined as the distance from the transducer to the static water level. It belongs in the operational phase because it changes during a survey.

### When to Measure

- Before and after every MBES survey
- Whenever there is a significant change in vessel buoyancy (e.g. bunkering, fuel/water consumption)

### How to Measure

- Measure from the water level to the **acoustic centre** or **sonar reference point** of the MBES transducer (refer to the equipment manual for the exact location)

### Squat and Settlement

| Term | Definition |
|------|-----------|
| **Squat** | Change in vessel trim between at-rest and underway. Typically the stern lowers and the bow rises. Mounting the transducer at midships minimises the draft change from squat. |
| **Settlement** | The difference in vessel elevation between at-rest and underway. Once the vessel is moving, the hull settles lower in the water. |

!!! tip "Compensating for Settlement"
    Measure settlement at various typical survey speeds and record the values for use during data acquisition at those speeds.

---

## :material-waves-arrow-up: Tidal Reduction

To produce bathymetric data referenced to a standard vertical datum, tidal effects must be measured or predicted and applied to each depth observation.

### Tidal Reduction Methods (ranked by technical preference)

| Rank | Method | Description |
|------|--------|-------------|
| 1 | **GNSS tides** | Reduction of heights based on GNSS ellipsoidal height reduced to a datum using a geoidal model (e.g. VORF, Bathyelli, DTU18) |
| 2 | **Observed tides** | Using a tide gauge or third-party supplied data |
| 3 | **Predicted tides** | Calculated tidal predictions (e.g. from Infoplaza or as defined in the project procedure / provided by the client) |

### Scenario 1: ROV with GNSS Tides

In this scenario, draft is essential for relating the GNSS antenna height to the sea surface.

1. A draft sensor below the waterline is offset-measured against the GNSS antenna
2. Observed draft depth is subtracted from GNSS antenna height to obtain sea surface height
3. GNSS tide software averages sea surface height over a period (typically 10 minutes) to mitigate heave, pitch, and roll effects
4. The difference between the average and a geoidal model (e.g. EGM08) gives the tidal height
5. The timestamped tidal height is applied post-process to MBES and depth data to produce seabed depths relative to the geoid

### Scenario 2: Hull-Mounted MBES with Surface Models

No draft measurement is needed in this configuration.

1. Ellipsoidal height of the GNSS antenna + offset to the MBES head = ellipsoidal height of the MBES head
2. MBES bathymetry is added to derive the seabed's ellipsoidal height
3. A surface model (VORF, Bathyelli, DTU18) provides the separation between the ellipsoid and the required vertical datum (MSL, LAT, etc.) at the MBES position
4. The separation value converts the ellipsoidal height to depth relative to the chosen datum

### Scenario 3: Subsea Vehicle with Predicted Tides

No draft is required because predicted tides are applied directly.

1. Timestamped depth sensor and MBES measurements are combined with the vertical offset to produce observed depth
2. The predicted tide table is matched to the observation time
3. The resulting tide value reduces the observation to the vertical datum

---

## :material-thermometer-water: Sound Velocity

An accurate SVP through the entire water column (or below the ROV/AUV operating depth) is required for:

- Determining accurate ranges
- Correcting for acoustic refraction (ray-bending)
- Pressure-to-depth calculations for subsea vehicles (CTD data)

### SV at the Transducer Face

Most modern MBES systems require continuous measurement of sound velocity at the transducer face for correct electronic beam steering (pitch and roll stabilisation).

### Moving Vessel Profiler (MVP)

For surface vessels carrying out large area surveys, an MVP should be considered to facilitate regular SVP measurements without halting the survey.

### Key Guidance

- Regular SVP measurements are essential; the IHO does not define a specific interval
- Measurement frequency must be based on known conditions: SV can vary rapidly in estuaries compared with the open ocean
- Deep water ROV/AUV surveys may have more stable SV conditions, but large depth changes over steep gradients will affect SV and must be considered

---

## :material-map-marker-path: Coverage

### Line Spacing and Overlap

- Establish the required survey speed and distance between run lines to achieve specified coverage
- A minimum **20% overlap** between adjacent swaths is sufficient for flat seabed in good weather
- Rough topography or poor weather may require larger overlap
- **Adjacent lines should be sailed in opposite directions** to allow data integrity checks in the overlap areas

### Factors Affecting Coverage

- Changes in bottom topography
- Line keeping of the survey vessel
- Multibeam alignment and vessel motion
- Seabed topography cannot be controlled, but other factors can compensate: adjust line spacing, increase range, widen beam angles to limits, or improve line keeping

---

## :material-tune-vertical: Operational Settings

### Power Level

| Seabed Type | Power Setting | Reason |
|-------------|--------------|--------|
| Hard (rock, sand) | Lower power | Higher acoustic returns; excess power causes reverberation from water-column particles |
| Soft (mud, silt) | Higher power | Weaker returns require more energy to reach the receiver |

!!! warning "Power Too High"
    Excessive power causes reverberation from particles in the water surrounding the transducer, detected as noise.

### Transmit Pulse

The pulse width defines the size of the burst of sound energy in milliseconds.

- **Narrow pulse**: smaller beam footprint, higher resolution -- ideal for shallow water with hard seabed
- **Wide pulse**: more energy reaches the seabed in deeper water, but resolution is reduced
- Balance pulse width against water depth and seabed type

### Gain Types

| Gain Type | Behaviour |
|-----------|-----------|
| **Fixed gain** | Constant amplification across the entire range of the received signal |
| **Time Varied Gain (TVG)** | Amplification increases with travel time -- late returns are amplified more than early returns. Requires spreading and absorption loss parameters. Higher MBES frequency means greater attenuation. |

Some systems have auto gain functionality that adjusts automatically as seabed return strength varies.

### Range

- Set the range gating window to match the water depth
- Setting the range too large reduces the update rate and sacrifices optimum ping spacing
- Setting the range too small may miss valid returns

### Update Rate

- Governed by water depth: deeper water requires longer two-way travel time, reducing the maximum ping rate
- Approximate update rates: ~0.4 s at 300 m depth; ~4 s at 3 km depth
- Some systems use a multi-pulse approach, stacking multiple soundings in the water column to effectively increase the update rate

### Filtering

Apply filters conservatively during acquisition -- rejected data cannot be recovered.

| Filter Type | Description |
|-------------|-------------|
| **Depth filter** | Rejects soundings outside a minimum/maximum depth window |
| **Range filter** | Rejects soundings outside a minimum/maximum range window. Useful for eliminating aeration noise near the transducer (set minimum range to exclude these returns) |

### Stabilisation

Some MBES systems actively compensate for heave, pitch, and roll (mechanically or electronically).

!!! danger "Do Not Double-Correct"
    If the MBES system is compensating for a motion component (e.g. pitch stabilisation), do **not** apply that same correction again during processing. Otherwise the correction will be doubled. For example, if the system applies pitch compensation, apply heave and roll from the MRU during processing but not pitch.

### Mounting Angles

Enter the values determined during the patch test calibration. Pay careful attention to the software's sign conventions.

---

## :material-clipboard-check-outline: Online QC Checklist

The MBES operator should regularly verify the following during acquisition:

- [x] **Sensors updating** -- heading, pitch, roll, heave, and navigation strings are all streaming
- [x] **Coverage as expected** -- range covers the estimated corridor; affected by poor line keeping, excessive roll, or incorrect range setting
- [x] **Filter settings correct** -- filters not too aggressive (rejecting usable data)
- [x] **Sound velocity current** -- smiling or frowning of the dataset indicates an outdated or incorrect SVP. For beam-steered systems, verify the real-time SV sensor at the transducer gives realistic values
- [x] **Range appropriate** -- seabed depth varies, so check the range setting regularly
- [x] **Draft updated** -- update draft whenever vessel buoyancy changes significantly, especially after bunkering

---

## :material-scale-balance: IHO S-44 Edition 6.1.0 Standards

The International Hydrographic Organization S-44 publication establishes accuracy standards for hydrographic surveys. There are five survey orders, each with minimum requirements:

| Criteria | Order 2 | Order 1b | Order 1a | Special Order | Exclusive Order |
|----------|---------|----------|----------|---------------|-----------------|
| **Area description** | General seabed description adequate | Under-keel clearance not an issue for expected shipping | Under-keel clearance not critical but features of concern may exist | Under-keel clearance is critical | Strict minimum under-keel clearance and manoeuvrability criteria |
| **Depth THU** | 20 m + 10% of depth | 5 m + 5% of depth | 5 m + 5% of depth | 2 m | 1 m |
| **Depth TVU (a, b)** | 1.0 m, 0.023 | 0.5 m, 0.013 | 0.5 m, 0.013 | 0.25 m, 0.0075 | 0.15 m, 0.004 |
| **Feature detection** | Not specified | Not specified | Cubic features >2 m (to 40 m depth); 10% of depth beyond 40 m | Cubic features >1 m | Cubic features >0.5 m |
| **Feature search** | Recommended, not required | Recommended, not required | 100% | 100% | 200% |
| **Bathymetric coverage** | 5% | 5% | Up to 100% | 100% | 200% |

---

## :material-chart-bell-curve: Total Vertical Uncertainty (TVU)

TVU is a one-dimensional quantity encompassing all contributing vertical measurement uncertainties.

### TVU Formula

The maximum allowable TVU at depth *d* is:

**TVU_max(d) = sqrt( a^2 + (b x d)^2 )**

Where *a* is the depth-independent coefficient and *b* is the depth-dependent coefficient (values per survey order from the table above).

### TVU Contributing Components (7 factors)

| # | Component | Symbol | Source of Uncertainty |
|---|-----------|--------|---------------------|
| 1 | MBES contribution | sigma_dMBE | Range and beam angle measurement errors, beam width resolution |
| 2 | Angular motion sensor | sigma_dIMU | Roll and pitch measurement errors |
| 3 | Vessel/sensor misalignment | sigma_dPATCH | Discrepancy between motion sensor and transducer roll/pitch |
| 4 | Sound velocity sensors | sigma_dSVS | Errors in SV at the transducer and through the water column |
| 5 | Heave and induced heave | sigma_dHV | Measured and induced heave errors |
| 6 | Depth reduction | sigma_dRED | Dynamic draught (static draught, squat, loading) and tide for conventional survey; separation model error for ellipsoid-referenced survey |
| 7 | Underwater vehicle depth | sigma_dAUV | Pressure sensor uncertainty combined with water density profile, tide, and atmospheric pressure measurements |

The root-sum-square of all contributing factors yields the reduced depth error at 68% confidence. TVU is reported at the **95% confidence level** as recommended by IHO S-44:

**TVU = 1.96 x sigma_d**

---

## :material-chart-scatter-plot: Total Horizontal Uncertainty (THU)

THU is a two-dimensional quantity encompassing all contributing horizontal measurement uncertainties. It represents the accuracy of the sounding position, not GNSS position alone.

### THU Contributing Components (6 factors)

| # | Component | Symbol | Source of Uncertainty |
|---|-----------|--------|---------------------|
| 1 | Positioning system | sigma_PXY | GNSS position error (surface); GNSS + USBL + INS + DVL (subsea) |
| 2 | Latency | sigma_PLAT | Timing latency between GNSS/MBES and GNSS/IMU |
| 3 | Dimensional control | sigma_PDIMCON | Errors in antenna, IMU, and MBES offsets within the vessel reference frame |
| 4 | MBES contribution | sigma_PMBE | Range, beam angle, refraction, roll, and pitch measurement |
| 5 | Heading | sigma_PYAW | Heading measurement error from gyrocompass and GNSS |
| 6 | Vessel/sensor misalignment | sigma_PPATCH | Yaw angle discrepancy between the motion sensor and the transducer |

The root-sum-square of all contributing factors yields the position error at 39.4% confidence. THU is reported at the **95% confidence level**:

**THU = 2.45 x sigma_P**

---

## :material-strategy: Total Propagated Uncertainty (TPU)

### A Priori TPU (Planning)

Computed from the planned system setup by applying propagation of errors to the known geometrical equations for depth and position measurements.

- Software tools (e.g. NaviModel TPU planning tool) allow entry of individual sensor uncertainties at the 1-sigma (68%) confidence level
- The tool calculates the theoretical TPU for the survey configuration before data acquisition begins

### A Posteriori TPU (Data-Based)

Calculated from gathered data using algorithms such as:

- **CUBE** -- Combined Uncertainty and Bathymetry Estimator
- **CHRT** -- CUBE with Hierarchical Resolution Techniques

A posteriori TPU must be evaluated against the minimum survey standard. Data points that fall below the required accuracy standard should be removed.

---

## :material-check-decagram: Performance Testing

Performance testing evaluates the quality and confidence of multibeam data across the entire swath. There are three stages:

| Stage | Description |
|-------|-------------|
| 1. **Reference surface** | Create a high-quality reference surface in the survey area |
| 2. **Check-line comparison** | Compare multibeam check-lines against the reference surface to quantify accuracy |
| 3. **Single-beam comparison** | Compare independent single-beam survey lines against the reference surface |

---

!!! quote "References"
    - IHO S-44 Edition 6.1.0 -- Standards for Hydrographic Surveys
    - IMCA S 003 -- Guidelines for the Use of Multibeam Echosounders for Offshore Surveys
    - Equipment manufacturer operational manuals
