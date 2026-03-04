---
title: Survey Line Planning and Design
category: reference
tags: [line-planning, mbes, sss, geophysical, survey-design, iho-s44, coverage, overlap, cross-lines]
date_added: 2026-03-04
source_type: original
---

# :material-map-marker-path: Survey Line Planning and Design

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Reference</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Planning Guide</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-04</strong></span>
</div>

!!! abstract "Purpose"
    Practical reference for planning survey lines across MBES, SSS, and geophysical corridor surveys. Covers line spacing, overlap requirements, orientation, cross-line design, IHO S-44 coverage standards, and run-in/out distances. Written as a working reference with specific numbers, rules of thumb, and a quick-reference table at the end.

---

## :material-calendar-check: When to Use

- During pre-survey planning to design line plans in acquisition software
- When calculating line spacing from swath width and required overlap
- When planning geophysical corridor surveys (pipeline, cable route)
- When determining cross-line requirements and spacing
- When checking coverage requirements against IHO S-44 survey orders
- When estimating survey time from line counts and turn times

---

## :material-waves: MBES Line Planning

### Swath Width Calculation

Swath width on the seabed is a function of water depth and the system's beam angle:

$$
W = 2 \times d \times \tan\left(\frac{\theta}{2}\right)
$$

Where:

- \(W\) = swath width on the bottom (m)
- \(d\) = water depth (m)
- \(\theta\) = total beam opening angle (degrees)

!!! example "Worked Example"
    A 130-degree MBES system in 20 m water depth:

    \(W = 2 \times 20 \times \tan(65°) = 2 \times 20 \times 2.145 = 85.8\) m

    With 20% overlap: usable line spacing = \(85.8 \times 0.80 = 68.6\) m

    With 25% overlap: usable line spacing = \(85.8 \times 0.75 = 64.4\) m

### Overlap Requirements

Standard practice is **20-25% overlap** between adjacent MBES lines. This overlap serves three purposes:

1. **Helmsman tolerance** -- compensates for deviations from the planned track
2. **Depth variation** -- if depth shoals between lines, the swath narrows; overlap provides a buffer against gaps
3. **QC** -- overlapping data between adjacent lines lets you compare depths in the overlap zone to catch systematic errors (draft, SVP, attitude offsets)

!!! warning "Variable Depth"
    If the survey area has significant depth variation, calculate line spacing based on the **shallowest expected depth** within the area. Swath narrows as depth decreases. Planning for the deepest depth will leave gaps over the shallows.

### Line Orientation

**Run lines parallel to depth contours** wherever practical. This keeps depth roughly constant along each line, which means:

- Swath width stays consistent along the line
- Line spacing remains valid from start to end
- Fewer adjustments needed during acquisition

On **steep slopes**, always run along the contours, not up/down the slope. Running perpendicular to contours causes dramatic swath width variation within a single line and makes consistent overlap impossible.

Other factors affecting line direction:

- **Current and wind** -- running into the prevailing current or wind improves track-keeping
- **Vessel heading stability** -- some headings are easier to hold than others depending on sea state
- **Feature orientation** -- for pipeline or cable route surveys, lines typically run parallel or perpendicular to the route centerline

---

## :material-sonar: Side Scan Sonar (SSS) Line Planning

### Coverage and Overlap

SSS lines are planned for **110-133% coverage** of adjacent lines. That translates to **10-33% actual overlap** between the acoustic footprint of neighboring lines.

Higher overlap is used when:

- Target detection is critical (UXO, debris, small features)
- Towfish positioning uncertainty is high (long layback, no USBL)
- Seabed conditions are complex (variable terrain, shadows)

### Tow Height

The towfish altitude above seabed should be **10-15% of the sonar range setting**:

| Range Setting | Min Tow Height (10%) | Max Tow Height (15%) |
|:--|:-:|:-:|
| 50 m (50+50) | 5 m | 7.5 m |
| 75 m (75+75) | 7.5 m | 11.3 m |
| 100 m (100+100) | 10 m | 15 m |
| 200 m (200+200) | 20 m | 30 m |

Flying too high reduces resolution and increases the nadir gap. Flying too low reduces range and creates excessive shadows behind features.

### Layback Considerations

- **Shallow water (< 30 m)**: basic geometric layback calculation using cable out and depth is usually sufficient
- **Deep water**: acoustic tracking (USBL) on the towfish is required for reliable positioning
- Every change in **cable length** or **vessel speed** requires a layback recalculation
- Layback uncertainty directly affects the positional accuracy of SSS contacts -- factor this into your TPU

### Speed

Maximum survey speed for quality SSS data: **3 to 3.5 knots**. Faster speeds degrade along-track resolution and can cause the towfish to plane up, reducing altitude control.

---

## :material-pipe: Geophysical Corridor Design

Pipeline and cable route surveys use defined corridors. Corridor width depends on the survey phase:

### Corridor Widths by Survey Phase

| Survey Phase | Typical Corridor Width | Purpose |
|:--|:--|:--|
| Reconnaissance | 500 m - 5,000 m | Route selection, fatal flaw identification |
| Pre-Engineering | 200 m - 1,000 m (100-500 m each side) | Detailed route design, geotechnical planning |
| Pre-Construction | 500 m - 2,000 m each side | Anchor corridor clearance, seabed change detection |
| Post-Construction | Centerline + buffer | As-laid, as-built, free span, burial verification |
| Cable Route (shallow) | 500 m - 1,000 m | Burial zone survey |

### Sensor-Specific Line Spacing Within Corridors

**Sub-Bottom Profiler (SBP)**

- Operational frequency: 3.5-7 kHz
- Minimum penetration: 8-10 m below seabed
- Inshore corridors: may need 11-13 lines across the corridor
- Offshore/deep corridors: may use as few as 3 lines across

**Magnetometer (UXO detection)**

- Line spacing: 2-5 m (very tight)
- Sensor height: 3-5 m above seabed
- Offshore wind farm UXO: 6.5 m lane spacing is typical
- Tow distance must be sufficient to avoid interference from the vessel's steel hull

**Crossing Areas**

Pipeline and cable crossing zones typically require higher-resolution data with grid spacing of **5 m x 5 m or less**.

---

## :material-swap-horizontal: Cross Lines (Check Lines)

### Purpose

Cross lines verify the accuracy of your positioning, depth measurements, and depth corrections (tide, SVP, draft). They are a fundamental QC tool for any bathymetric survey.

### Requirements

| Parameter | Requirement |
|:--|:--|
| Orientation | Perpendicular (90 degrees) to main lines. 45-90 degrees is acceptable. |
| Spacing | No more than **15x the main line spacing** (IHO C-13) |
| Timing | Run **early in the survey** to catch systematic errors before collecting too much data |
| Coverage | Run over both the shallowest and deepest parts of the survey area |
| Comparison | Depth differences between main and cross lines must fall within the applicable IHO order limits |

### Practical Notes

- For MBES surveys with 100% coverage, cross lines provide overlap comparison across the entire swath, not just at single crossover points
- In deeper water with wider line spacing, fewer cross lines are needed but each one covers more ground
- Cross lines are effective at detecting timing/latency issues in MBES data
- Ideally, collect check lines using a different SVP cast or at a different tide state to test the robustness of your corrections
- Running cross lines early means you catch problems like a bad patch test, incorrect draft, or SVP issues before wasting days of acquisition

---

## :material-certificate-outline: IHO S-44 Coverage Requirements

### Survey Orders

| Order | Typical Application | Bathymetric Coverage | Feature Detection | THU (95%) |
|:--|:--|:--|:--|:--|
| Exclusive | Critical underkeel clearance | 200% (dual system) | 0.5 m cube | 1 m |
| Special | Harbors, berthing areas | 100% | 1 m cube | 2 m |
| Order 1a | Shallow areas, shipping hazards | 100% | 2 m cube (to 50 m depth) | 5 m + 5% depth |
| Order 1b | General shallow water | Line spacing ~ 3x depth | Not required | 5 m + 5% depth |
| Order 2 | Depths < 200 m, general | Line spacing ~ 4x depth | Not required | 20 m + 5% depth |

### TVU Formula

$$
TVU_{max} = \sqrt{a^2 + (b \times d)^2}
$$

At 95% confidence, where \(d\) = depth in metres.

| Order | a (m) | b |
|:--|:-:|:-:|
| Special | 0.25 | 0.0075 |
| Order 1 | 0.50 | 0.013 |
| Order 2 | 1.00 | 0.023 |

### Coverage Notes

- **100% coverage** means the entire seabed within the survey area is ensonified. Achievable with MBES in appropriate water depths.
- **100% feature search** can also be achieved with SSS or other systems, but any feature detected still requires an independent depth measurement.
- **200% coverage** (Exclusive Order) requires dual independent systems or two passes with the same system.
- Orders 1b and 2 do not require full bottom coverage or feature detection -- line-spaced surveys (SBES or MBES with gaps) are acceptable.

---

## :material-arrow-right-bold: Run-In and Run-Out Distances

The vessel needs distance before entering the survey area to:

- Settle on the planned heading
- Stabilize motion sensors (heave, attitude)
- Allow towed equipment to reach correct altitude/depth
- Achieve steady survey speed

### Rules of Thumb

| Scenario | Minimum Run-In/Out |
|:--|:--|
| MBES (hull-mounted, no towed gear) | 2-3 ship lengths |
| SSS with short cable (< 50 m) | 3-5 ship lengths |
| SSS/SBP with long tow cable | Equal to or greater than cable length |
| Magnetometer tow | Sufficient to clear vessel magnetic interference + stabilize |

With long tow cables, run-in/out distances and turn times become major factors in total survey duration. A 300 m tow cable needs at least 300 m of run-in, and line turns with that much cable out can take significant time.

---

## :material-rotate-right: Line Turn Optimization

Line turns are non-productive time. Minimizing turn time and distance directly reduces survey cost.

### Key Factors

- **Vessel turning radius** -- the hard constraint. Larger vessels need wider turns.
- **Towed equipment** -- long cables drastically increase turn time. The towfish must settle back on track and altitude before entering the next line.
- **Line direction alternation** -- running lines in alternating directions (reciprocal headings) rather than always returning to the same start point cuts transit in half.
- **Racetrack pattern** -- for parallel lines, a simple racetrack (U-turn at each end) is standard. The turn radius determines the end-of-line buffer needed.

### Practical Tips

- Plan line start/end points with enough room for the vessel's turning circle plus stabilization distance
- For towed SSS surveys, "mowing the lawn" in one direction (all lines same heading) is sometimes preferred to avoid towfish instability during turns, but it doubles transit time
- Optimized turning routes (cutting corners where safe) can reduce transit distance by 30-40% compared to standard box turns
- When depth varies significantly across the survey area, consider running lines in depth bands -- group lines of similar depth together to minimize spacing recalculation

---

## :material-table: Quick Reference Table

| Parameter | Value |
|:--|:--|
| **MBES overlap** | 20-25% |
| **MBES line direction** | Parallel to depth contours |
| **MBES line spacing (variable depth)** | Calculate for shallowest depth |
| **SSS overlap** | 10-33% (110-133% coverage) |
| **SSS tow height** | 10-15% of range setting |
| **SSS max survey speed** | 3-3.5 knots |
| **Magnetometer line spacing (UXO)** | 2-5 m |
| **Magnetometer sensor height (UXO)** | 3-5 m above seabed |
| **SBP frequency** | 3.5-7 kHz |
| **SBP minimum penetration** | 8-10 m |
| **Cross-line spacing** | Max 15x main line spacing |
| **Cross-line angle** | 45-90 degrees to main lines |
| **Cross-line timing** | Run early in the survey |
| **Run-in (hull-mounted)** | 2-3 ship lengths |
| **Run-in (towed gear)** | >= cable length |
| **Recon corridor width** | 500-5,000 m |
| **Pre-engineering corridor** | 200-1,000 m |
| **Cable route corridor** | 500-1,000 m |
| **Crossing survey grid** | <= 5 m x 5 m |
| **S-44 Special Order THU** | 2 m (95%) |
| **S-44 Special Order feature** | 1 m cube |
| **S-44 Order 1a feature** | 2 m cube (to 50 m depth) |

---

## :material-book-open-variant: Sources

- IHO S-44 Edition 6.1.0 -- Minimum Standards for Hydrographic Surveys ([iho.int](https://iho.int/uploads/user/pubs/standards/s-44/S-44_Edition_6.1.0.pdf))
- IHO C-13 Chapter 7 -- Hydrographic Practice ([iho.int](https://iho.int/uploads/user/pubs/cb/c-13/english/C-13_Chapter_7_may2010.pdf))
- Kongsberg EM Technical Note -- "Multibeam Survey Planning: The Key to Success" ([kongsberg.com](https://www.kongsberg.com/globalassets/kongsberg-discovery/commerce/seafloor-mapping/em2040-mkii/em-technical-note-multibeam-survey-planning-the-key-to-success.pdf))
- R2Sonic -- "Multibeam Surveying" ([r2sonic.com](https://www.r2sonic.com/wp-content/uploads/2020/03/Multibeam-Surveying.pdf))
- Fenn Enterprises -- "Sidescan Sonar 101" ([fennenterprises.com](https://fennenterprises.com/sidescan-sonar-101))
- MosaicHydro -- Multibeam Swath Width Calculator ([mosaichydro.com](https://mosaichydro.com/multibeam-swath-width-calculator/))
- MosaicHydro -- SSS Efficient Survey Line Planner ([mosaichydro.com](https://mosaichydro.com/sidescan-sonar-efficient-survey-line-planner/))
- EPCLand -- "Pipeline Route Survey: Methodology & Standards" ([epcland.com](https://epcland.com/pipeline-route-survey/))
- Hydro International -- "Subsea Cable Route Surveying" ([hydro-international.com](https://www.hydro-international.com/content/article/subsea-cable-route-surveying))
- IMCA S 016 Rev 2.1 -- Guidance on Mobilisation Requirements for Offshore Survey Operations ([imca-int.com](https://www.imca-int.com/product/guidance-on-mobilisation-requirements-for-offshore-survey-operations/))
- MDPI Sensors -- "The Sea Route Planning for Survey Vessel" ([doi: 10.3390/s22020482](https://pmc.ncbi.nlm.nih.gov/articles/PMC8780139/))
