---
title: Tidal Theory and Reduction Methods
category: positioning
tags: [tides, tidal-reduction, chart-datum, vertical-datum, bathymetry, gnss-tides, tide-gauge, co-tidal, lat, msl]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: original
---

# :material-waves-arrow-up: Tidal Theory and Reduction Methods

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Positioning</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Reference Guide</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Reference covering tidal theory, vertical datums, and the three primary methods for reducing bathymetric soundings to chart datum: observed tide gauge, predicted tides, and GNSS tides. Includes guidance on tide gauge installation, co-tidal corrections, datum relationships, and IHO accuracy requirements. Every sounding must be reduced to a common vertical datum, and choosing the right method depends on project location, water depth, and accuracy requirements.

---

## :material-calendar-check: When to Use

Refer to this article:

- When planning the tidal reduction strategy for a bathymetric survey
- When selecting between tide gauge, predicted, or GNSS tide methods
- When installing or verifying a tide gauge for survey operations
- When applying co-tidal corrections for surveys distant from a gauge
- When converting between vertical datums (LAT, MSL, ellipsoid)
- When reviewing IHO S-44 tidal accuracy requirements for a project

---

## :material-information-outline: Overview

Every bathymetric depth measurement is referenced to the instantaneous water surface at the time of the sounding. To produce a chart or model that is consistent regardless of when the survey was conducted, all soundings must be reduced to a common vertical datum, typically Lowest Astronomical Tide (LAT) for nautical charting or Mean Sea Level (MSL) for engineering work. The process of removing the tidal component from each sounding is called tidal reduction. Getting this wrong introduces a systematic vertical error into every single depth value in the dataset.

---

## :material-book-open-variant: Theory and Principles

### Why Tidal Reduction Matters

The water level at any location changes constantly due to tidal forces, atmospheric pressure, wind, and ocean currents. At a typical semi-diurnal location, the water level can vary by 2 to 6 metres over a single tidal cycle. Without tidal reduction, a sounding of 25.0 m taken at low water and a sounding of 28.5 m taken at high water over the same spot would appear as two different depths. Tidal reduction removes this time-dependent variation so all depths are relative to the chosen datum.

### Tidal Constituents in Practical Terms

Tides are driven by the gravitational pull of the Moon and Sun. The combined effect is decomposed into harmonic constituents, each representing a specific astronomical forcing.

| Constituent | Period | Type | Relative Strength |
|:-:|:-:|:-:|:-:|
| **M2** | 12.42 hours | Semi-diurnal (lunar) | 100% (reference) |
| **S2** | 12.00 hours | Semi-diurnal (solar) | ~46% of M2 |
| **N2** | 12.66 hours | Semi-diurnal (lunar elliptic) | ~19% of M2 |
| **K1** | 23.93 hours | Diurnal (lunisolar) | ~58% of M2 |
| **O1** | 25.82 hours | Diurnal (lunar) | ~41% of M2 |

**M2 is the dominant constituent in most areas worldwide.** It produces the familiar two-high, two-low pattern per day. The interaction between M2 and S2 creates the spring/neap cycle with a period of approximately 14.8 days. Spring tides (M2 and S2 in phase) produce the largest tidal range. Neap tides (M2 and S2 out of phase) produce the smallest.

**Diurnal vs semi-diurnal regions**: Most of the world experiences semi-diurnal tides (two highs and two lows per day). Some areas, particularly in Southeast Asia, the Gulf of Mexico, and parts of the Pacific, have diurnal tides (one high and one low per day) or mixed tides. The tidal regime at a survey location determines the expected pattern and amplitude.

!!! info "Form Factor"
    The form factor F = (K1 + O1) / (M2 + S2) classifies the tidal regime. F < 0.25 is semi-diurnal, 0.25-1.5 is mixed (mainly semi-diurnal), 1.5-3.0 is mixed (mainly diurnal), and F > 3.0 is diurnal. Know the form factor before choosing your tidal reduction approach.

### Non-Tidal Water Level Effects

Tidal constituents are predictable. What is not predictable is the meteorological component:

- **Storm surge**: Low atmospheric pressure raises water level by approximately 1 cm per 1 hPa below standard (1013.25 hPa). A 980 hPa storm raises the water level by approximately 0.33 m from pressure alone.
- **Wind setup**: Onshore winds pile water against the coast. In shallow, enclosed waters, wind setup can exceed 1 m.
- **River discharge**: Near estuaries, freshwater runoff raises the water level and also affects sound velocity.
- **Ocean currents**: Long-period oscillations and eddies can displace the water level by 0.1 to 0.5 m.

These effects create a difference between the observed water level and the predicted (astronomical) tide. This difference is called the **tidal residual** or **surge component**.

---

## :material-compare-horizontal: Reduction Methods

### Method 1: Observed Tide Gauge

A physical gauge (pressure sensor, acoustic sensor, or radar sensor) records the actual water level at a fixed location. The recorded water levels are applied as corrections to the sounding times.

**How it works**:

1. Install a tide gauge at or near the survey area
2. Connect the gauge to a known vertical datum (benchmark levelling)
3. The gauge logs water level at a fixed interval (typically 1 to 6 minutes)
4. During processing, each sounding is corrected by the observed water level at the corresponding time

**Advantages**:

- Captures all water level variation, including meteorological effects
- Simple concept, well understood
- High accuracy when the gauge is close to the survey area

**Limitations**:

- Requires physical installation and datum connection
- Only valid at the gauge location; accuracy degrades with distance
- Requires co-tidal corrections for surveys far from the gauge

!!! tip "Best Application"
    Nearshore and harbour surveys where the gauge can be installed close to the work area. This is the default method for IHO Special Order and Exclusive Order surveys in shallow water.

### Method 2: Predicted Tides

Tidal predictions are computed from harmonic constituents for a specific location. National hydrographic offices publish predictions for primary and secondary ports.

**How it works**:

1. Obtain harmonic constants for the nearest primary port or tidal station
2. Generate predicted water levels for the survey period
3. Apply the predicted tide as a correction to each sounding

**Advantages**:

- No physical gauge installation required
- Available for any location with established harmonic constants
- Useful for planning (predictions can be generated months ahead)

**Limitations**:

- Does not capture meteorological effects (storm surge, wind setup)
- Accuracy depends on the quality and age of harmonic constants
- Accuracy degrades rapidly with distance from the prediction station
- Shallow water effects (friction, funnelling) distort the harmonic model

!!! warning "When Predicted Tides Are Insufficient"
    In areas subject to strong meteorological forcing (North Sea, Gulf of Mexico, monsoon regions), the tidal residual can exceed 0.5 m. Predicted tides alone will not meet IHO accuracy requirements in these conditions. Use observed tide or GNSS tides instead.

### Method 3: GNSS Tides

GNSS tides use the ellipsoidal height from a GNSS receiver to derive the water level without any physical gauge. The concept is to measure the vessel's position on the ellipsoid and subtract the geoid/separation model to obtain the height relative to the desired datum.

**How it works**:

1. GNSS receiver provides the antenna ellipsoidal height in real time
2. Subtract the geoid undulation (ellipsoid to geoid separation) from a model
3. Apply the separation between the geoid and the chart datum (e.g., MSL to LAT offset)
4. The result is the antenna height above chart datum
5. Apply antenna-to-waterline offset (draft) to get the water level at the vessel

**Height relationship**: Ellipsoid Height - Geoid Undulation - (MSL to Chart Datum Separation) = Height above Chart Datum

**Advantages**:

- No gauge installation or datum connection required
- Works anywhere with GNSS coverage, including open ocean
- Captures all water level variation (tidal and non-tidal)
- Each sounding gets its own independent vertical reference

**Limitations**:

- Accuracy depends entirely on the geoid model quality
- EGM2008 has global accuracy of approximately 0.10-0.15 m RMS, but local errors can reach 0.30 m or more in poorly surveyed areas
- Requires continuous high-quality GNSS (PPP or RTK)
- GNSS vertical accuracy is 2-3x worse than horizontal
- Requires known separation between geoid and chart datum

!!! tip "Best Application"
    Offshore deep-water surveys where tide gauge installation is impractical and tidal amplitudes are small. Also excellent for long-distance pipeline and cable route surveys where co-tidal corrections would be complex.

---

## :material-ruler: Tide Gauge Installation and Verification

### Installation Requirements

1. **Location**: Sheltered from wave action but representative of tidal conditions at the survey site. Avoid locations inside harbours with restricted tidal flow if the survey is in open water.
2. **Datum connection**: Level from a known benchmark to the gauge sensor zero point. Accuracy requirement: better than 0.02 m. Level in and level out at the end of the project to confirm no movement.
3. **Logging interval**: 6 minutes maximum for IHO surveys. 1 minute preferred for areas with short-period tidal variations.
4. **Redundancy**: For critical surveys, deploy two gauges and compare records.

### Verification

- Compare the gauge record against published predicted tides for the first 24 hours. The observed values should track the predicted pattern, with differences attributable to meteorological effects.
- If a second gauge is available, inter-compare. Agreement should be within 0.03 m for gauges at the same location.
- Check the gauge datum by re-levelling at regular intervals during the project (weekly minimum for long projects).

!!! danger "Datum Drift"
    Pressure sensors drift over time. A typical sensor may drift 0.01-0.03 m over a month. If the gauge is deployed for weeks, schedule regular datum checks. An undetected drift of 0.05 m makes every sounding in the dataset wrong by that amount.

---

## :material-map-marker-distance: Co-Tidal Corrections

When the survey area is distant from the tide gauge, the tidal signal at the gauge does not exactly represent the tidal signal at the survey site. The tide arrives at different times and with different amplitudes at different locations. Co-tidal corrections account for these differences.

### When Co-Tidal Corrections Are Needed

- Survey area is more than 10 km from the tide gauge in coastal waters
- Survey area is more than 5 km from the gauge in areas with complex tidal patterns (estuaries, narrow channels)
- Tidal range exceeds 2 m and the time difference between gauge and survey area exceeds 10 minutes

### How to Apply

1. **Time correction**: Determine the time offset between high water at the gauge and high water at the survey site. Apply this offset to shift the gauge record.
2. **Range correction**: Determine the ratio of tidal range at the survey site to tidal range at the gauge. Scale the gauge record by this ratio.
3. **Zoning**: For large survey areas, divide the area into tidal zones, each with its own time and range correction relative to the gauge.

!!! info "Multiple Gauges"
    When two or more gauges bracket the survey area, interpolation between gauges produces better results than correcting from a single gauge. Weight the interpolation by distance.

---

## :material-layers-outline: Vertical Datums

### Datum Relationships

Understanding the relationships between vertical datums is fundamental to tidal reduction.

```
    Ellipsoid (WGS84)           ← GNSS measures this
        |
        |  Geoid undulation (N)
        ↓
    Geoid (≈ MSL)               ← Approximates mean sea level
        |
        |  MSL to LAT separation (Z0)
        ↓
    Chart Datum (LAT)           ← Depths referenced to this
        |
        |  Charted depth
        ↓
    Seabed
```

| Datum | Definition | Used For |
|:--|:--|:--|
| **Ellipsoid (WGS84)** | Mathematical surface, GNSS reference | GNSS positioning, geodetic calculations |
| **Geoid** | Equipotential gravity surface approximating MSL | Orthometric height reference |
| **MSL (Mean Sea Level)** | Average water level over 18.6 years (full tidal epoch) | Engineering work, land survey, vertical reference |
| **LAT (Lowest Astronomical Tide)** | Lowest predicted water level under any astronomical condition | Nautical charting, navigational safety |
| **CD (Chart Datum)** | Reference for charted depths, usually LAT in modern charts | Hydrographic surveys for charting |

!!! warning "LAT Is Not the Lowest Observed Level"
    LAT is the lowest **predicted** (astronomical) level. Actual water levels can fall below LAT during strong offshore winds or high-pressure systems. Negative tidal values (below chart datum) are possible and do occur.

### Datum Selection

- **Nautical charting**: LAT (IHO recommendation since 1996)
- **Oil and gas engineering**: MSL (pipeline profiles, platform design levels)
- **Offshore wind**: LAT or MSL depending on client specification
- **Dredging**: Project-specific datum, usually LAT or local chart datum
- **Construction**: Often MSL or a project-specific datum tied to an onshore levelling network

---

## :material-check-decagram: IHO S-44 Requirements for Tidal Reduction

IHO S-44 Edition 6.1.0 specifies the maximum allowable uncertainty for tidal reduction as part of the Total Vertical Uncertainty (TVU) budget.

The tidal reduction component must not dominate the TVU budget. For a typical IHO Order 1a survey in 30 m water depth, the TVU allowance is:

$$TVU = \sqrt{0.50^2 + (0.013 \times 30)^2} = \sqrt{0.25 + 0.152} = 0.63 \text{ m at 95% confidence}$$

If the tidal reduction uncertainty alone consumes 0.30 m of this budget, it leaves very little margin for heave, sound velocity, and other error sources.

| Survey Order | Practical Tidal Reduction Accuracy Target (95%) |
|:-:|:-:|
| Exclusive | < 0.05 m |
| Special | < 0.10 m |
| 1a / 1b | < 0.15 m |
| 2 | < 0.30 m |

---

## :material-file-tree: Decision Tree: Choosing a Tidal Reduction Method

```
Start
  │
  ├─ Is the survey nearshore (< 20 km from potential gauge site)?
  │   ├─ YES → Can a tide gauge be installed and datum-connected?
  │   │          ├─ YES → Use OBSERVED TIDE GAUGE
  │   │          └─ NO  → Are quality predicted tides available?
  │   │                    ├─ YES → Use PREDICTED TIDES (if met effects are small)
  │   │                    └─ NO  → Use GNSS TIDES
  │   └─ NO  → Is the project offshore / open ocean?
  │            ├─ YES → Use GNSS TIDES
  │            └─ NO  → Use PREDICTED TIDES with co-tidal corrections
  │
  └─ Are meteorological effects significant at the survey location?
      ├─ YES → Observed gauge or GNSS tides (predicted tides insufficient)
      └─ NO  → Predicted tides may be acceptable for lower-order surveys
```

!!! tip "Combining Methods"
    For high-accuracy projects, use two methods and compare. A common approach is to run GNSS tides as the primary method and deploy a gauge for verification. If the two agree within 0.10 m, confidence in both methods is high.

---

## :material-wrench: Troubleshooting

### Soundings Show Tidal Pattern in Processed Data

**Symptom**: After tidal reduction, a systematic depth variation correlated with the tidal cycle is visible.

**Cause**: Tidal correction is being under-applied (wrong datum offset, wrong range correction, or time offset between gauge and survey area).

**Action**:

1. Verify the gauge datum connection by re-levelling
2. Check the time synchronisation between the gauge and the survey system
3. Review co-tidal corrections if the survey is distant from the gauge
4. Plot the applied tidal correction against the raw depth variation to check amplitude and phase

### Depth Discrepancy Between Adjacent Survey Lines

**Symptom**: Overlapping lines surveyed at different tidal states show a consistent offset.

**Cause**: Tidal correction error, possibly a time offset in the gauge record or incorrect co-tidal zone assignment.

**Action**:

1. Compare the applied tidal values for each line pair
2. Check if the offset matches the tidal difference at the time of each line
3. If using co-tidal zones, verify that lines in the overlap region are using the correct zone

### GNSS Tide Values Diverge From Gauge

**Symptom**: GNSS-derived water levels differ from the gauge record by more than 0.15 m.

**Cause**: Geoid model error, incorrect separation values, or GNSS vertical accuracy issue.

**Action**:

1. Verify the geoid model and separation values used
2. Check GNSS solution quality (PPP converged, sufficient satellites, low VDOP)
3. Compare over a full tidal cycle. A constant offset indicates a datum or separation error. A varying offset indicates a geoid model limitation.

---

## :material-link-variant: Related Articles

- [GNSS Accurate Height Check](gnss-accurate-height-check.md)
- [GNSS Fundamentals](gnss-fundamentals.md)
- [Coordinate Systems and Datums](../reference/coordinate-systems-datums.md)
- [MBES Operations and Settings](../sensors/mbes-operations-and-settings.md)
- [Heave, MRU Theory and Verification](../mobilisation/heave-mru-theory.md)
- [TPU and Error Budgets](../reference/tpu-error-budgets.md)

---

## :material-table: Quick Reference

| Parameter | Value |
|:--|:-:|
| M2 constituent period | 12.42 hours |
| Spring/neap cycle | ~14.8 days |
| Tide gauge logging interval (IHO) | 6 minutes max, 1 minute preferred |
| Gauge datum levelling accuracy | < 0.02 m |
| Pressure sensor drift (typical) | 0.01-0.03 m per month |
| Co-tidal correction threshold (coastal) | > 10 km from gauge |
| EGM2008 global accuracy | ~0.10-0.15 m RMS |
| Inverted barometer effect | ~1 cm per 1 hPa below 1013.25 |
| Tidal reduction target (IHO Special Order) | < 0.10 m at 95% |
| GNSS vertical vs horizontal accuracy | 2-3x worse vertical |

---

!!! quote "References"
    - IHO S-44, Edition 6.1.0, Standards for Hydrographic Surveys
    - IHO C-13, Manual on Hydrography, Chapter 4 (Tides and Water Levels)
    - NOAA CO-OPS, Tidal Analysis and Prediction
    - IMCA S 015, Guidelines for the use of Multibeam Echosounders
