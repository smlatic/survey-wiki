---
title: As-Built Survey Procedures
category: rov
tags: [as-built, verification, pipeline, structure, construction, measurement, deliverables]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: original
---

# :material-check-outline: As-Built Survey Procedures

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>ROV Operations</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Reference Guide</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Reference guide covering as-built survey procedures for subsea assets including pipelines, structures, spools, cables, and protection features. Covers what gets surveyed, accuracy requirements, survey methods, data deliverables, comparison with design, tolerance assessment, and documentation requirements.

---

## :material-calendar-check: When to Use

Refer to this article:

- When planning an as-built survey after subsea installation
- When determining what measurements and deliverables are required
- When processing as-built survey data and comparing with design
- When assessing whether installed positions are within tolerance
- When preparing as-built survey reports

---

## :material-information-outline: Overview

An as-built survey is the permanent record of the installed position and condition of subsea infrastructure. It documents exactly where and how assets were installed, compares the installed position with the design, and confirms whether tolerances have been met. The as-built record serves as the baseline for future inspection, maintenance, and decommissioning.

As-built data is a contractual deliverable. It must be accurate, complete, and auditable. Errors or omissions in the as-built record can cause problems years later when intervention, tie-in, or inspection operations rely on this data.

---

## :material-book-open-variant: Theory and Principles

### What Gets Surveyed

| Asset Type | Key Measurements | Typical Accuracy |
|:--|:--|:--|
| Pipeline (as-laid) | Centreline position, depth, heading at KP intervals, TDP/LDP position | 2-5 m horizontal, 0.5 m vertical |
| Pipeline (as-built, trenched) | Depth of cover, trench profile, pipe position within trench | 0.5 m DOC, 2-5 m horizontal |
| Subsea structure | Easting, Northing, elevation, heading, tilt | 0.5-2.0 m horizontal, 0.3 m vertical |
| Spool / jumper | End coordinates, arc profile, clamp positions | 0.5-1.0 m horizontal |
| Umbilical / cable | Route position at intervals, depth, burial depth | 5-10 m horizontal, 0.5 m vertical |
| Protection (mattress, grout bag, rock dump) | Position, extent, thickness, coverage | 2-5 m horizontal, 0.3 m vertical |
| Anode | Position, connection status | 2-5 m horizontal |
| Riser / caisson | Position, verticality, orientation | 0.3-1.0 m horizontal, 0.1-0.5 deg tilt |

### Survey Methods

| Method | Application | Notes |
|:--|:--|:--|
| ROV + INS/USBL | Primary method for most subsea as-built | ROV positions the survey point, INS/USBL provides coordinates |
| MBES | Pipeline as-laid, seabed features, rock dump profiles | Vessel or ROV-mounted, provides surface/profile data |
| Pipe tracker | Pipeline depth of cover (metallic pipes) | ROV-mounted, electromagnetic detection |
| SSS | Pipeline route, debris, scour features | Vessel-towed or ROV-mounted |
| SBP | Burial depth verification | Complementary to pipe tracker |
| Visual (video/photo) | Condition, connection status, anomalies | Not a positioning method but essential documentation |
| Metrology | Hub-to-hub distances for spool design | High-accuracy relative positioning |

### Accuracy Requirements by Asset Type

!!! info "Client Specification Governs"
    The accuracy requirements listed here are typical industry values. The client specification always takes precedence. If the client spec calls for tighter accuracy, you must demonstrate that your survey system can achieve it.

---

## :material-clipboard-check-outline: Prerequisites

- [x] Construction operation completed (all items installed and released)
- [x] Positioning systems calibrated and operational (USBL, INS/DVL, GNSS)
- [x] Design data loaded in navigation software (design coordinates, alignment sheets, KP table)
- [x] ROV equipped and tested (INS, cameras, pipe tracker if required)
- [x] Survey plan agreed (what to measure, where, with what accuracy)
- [x] Previous as-built data available (for comparison with prior installation phases)

---

## :material-list-status: Procedure

### Step 1: Planning

1. Review the scope of work and deliverables list
2. Identify all items requiring as-built survey
3. Determine accuracy requirements for each item
4. Plan the ROV route to cover all items efficiently (minimise transit, maximise data quality)
5. Prepare templates for as-built data recording (spreadsheet, database)
6. Confirm design data revision is current (check with engineering)

### Step 2: Pipeline As-Built (As-Laid / As-Trenched)

#### As-Laid Survey

1. ROV follows the pipeline from start to end (or end to start)
2. Record pipeline centreline position at regular KP intervals:
    - Minimum every 10 m for rigid pipeline
    - Minimum every 25 m for flexible pipeline
    - At every notable feature (crossing, freespan, bend, buckle, field joint, anode)
3. Record depth at each position (ROV depth + altimeter, or INS depth)
4. Record pipeline heading at each position
5. Note and record:
    - Freespans (length, height, gap)
    - Crossings with other infrastructure (crossing angle, separation)
    - Pipeline condition (damage, coating defects)
    - Seabed conditions (scour, sediment type changes)
6. Video record the entire pipeline route

#### As-Trenched / Burial Assessment

1. After trenching, repeat the survey
2. Additionally measure:
    - Depth of cover (pipe tracker or SBP)
    - Trench profile (cross-sections at regular intervals)
    - Any exposed sections or insufficient burial
3. Compare DOC with specification requirements (typically 0.6-1.0 m minimum cover)

!!! tip "KP Assignment"
    KP (Kilometre Point) is measured along the pipeline centreline, not as a straight-line distance. For curved routes, the as-laid KP will differ slightly from the design KP. Use the navigation software's chainage/KP calculation, not simple distance between start and current position.

### Step 3: Structure As-Built

1. Position the ROV at the structure
2. Record:
    - Position (easting, northing at structure reference point)
    - Elevation (top of structure, base, key reference level)
    - Heading/orientation (use ROV heading when aligned to structure, or measure against known reference)
    - Tilt/verticality (from inclinometer if installed, or from visual/ROV INS observation)
3. Photograph/video the structure from multiple angles (minimum: plan view, each side, close-up of connection points)
4. Measure clearance to seabed, adjacent structures, and pipelines
5. Verify connection status (flanges mated, clamps closed, pins engaged)

### Step 4: Spool and Jumper As-Built

1. Record position of each spool end (at the hub connection point)
2. Record the spool arc profile:
    - Position and depth at regular intervals along the spool (every 1-5 m)
    - Clamp positions
    - Maximum height above seabed (clearance)
    - Any contact with seabed or other infrastructure
3. Compare spool end positions with metrology hub positions

### Step 5: Protection As-Built

1. Record the extent of protection (mattress, grout bag, rock dump):
    - Start and end positions along pipeline
    - Width and thickness
    - Coverage -- any gaps or areas below specification
2. For rock dump: MBES profile to measure dump height and coverage
3. For mattresses: position, orientation, and condition of each mattress
4. Verify protection covers the specified areas

### Step 6: Design Comparison

1. For each surveyed item, compare the as-built position with the design position:
    - Compute horizontal offset (design easting/northing vs as-built easting/northing)
    - Compute vertical offset (design elevation vs as-built elevation)
    - Compute heading/orientation offset (for oriented structures)
2. Flag any items that exceed design tolerance
3. Prepare a deviation table:

| Item | Design E | Design N | As-Built E | As-Built N | dE | dN | Offset | Tolerance | Status |
|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|
| Structure A | 500000.00 | 6200000.00 | 500001.20 | 6200000.85 | +1.20 | +0.85 | 1.47 | 3.00 | PASS |

!!! warning "Tolerance Assessment"
    If an item is outside tolerance, report it immediately. Do not wait for the end-of-project report. The construction team may be able to adjust (reposition, re-lay) if notified promptly. Once the vessel has moved to the next operation, correction becomes much more expensive.

---

## :material-check-decagram: Acceptance Criteria

| Parameter | Requirement |
|:--|:--|
| Pipeline centreline position accuracy | Per project spec (typically 2-5 m horizontal) |
| Structure position accuracy | Per project spec (typically 0.5-2.0 m horizontal) |
| Depth accuracy | Per project spec (typically 0.3-0.5 m vertical) |
| KP interval (pipeline) | 10 m (rigid) or 25 m (flexible) maximum |
| Depth of cover accuracy | 0.3-0.5 m (pipe tracker dependent) |
| Video coverage | 100% of installed assets |
| Photograph coverage | All connection points, anomalies, and reference features |
| Design comparison | All items compared, deviations calculated and reported |
| Deviation assessment | All items within tolerance, or deviations formally reported |
| Data completeness | No gaps in pipeline centreline > 50 m without justification |

---

## :material-file-chart: Deliverables

### Standard As-Built Deliverables

| Deliverable | Format | Content |
|:--|:--|:--|
| As-built position table | Excel / CSV | KP, E, N, depth, heading at each recorded point |
| Design comparison table | Excel | As-built vs design with offsets and pass/fail |
| As-built chart | DWG / PDF | Plan view showing as-built position overlaid on design |
| Cross-sections | DWG / PDF | Trench/protection profiles at specified intervals |
| Pipeline profile | DWG / PDF | Along-route depth profile |
| Video | MP4 | Full pipeline/structure survey, timestamped |
| Photographs | JPEG | Key features, anomalies, connections |
| As-built report | PDF / Word | Narrative, methodology, results, conclusions |
| Raw data | Project format | NAV files, INS logs, MBES data (if required) |

### As-Built Report Content

1. Introduction and scope
2. Survey methodology (equipment, positioning method, accuracy statement)
3. Geodetic parameters
4. Results summary (table of all items with as-built positions and design comparison)
5. Deviation analysis (items outside tolerance)
6. Pipeline profile and route plan
7. Observations and anomalies
8. Conclusions
9. Appendices (position tables, calibration summary, equipment list)

---

## :material-wrench: Troubleshooting

### As-Built Position Does Not Match Real-Time Guidance Position

**Possible causes**:

1. Post-processed position uses smoothed INS data (more accurate than real-time USBL)
2. Tidal correction applied in post-processing but not in real-time
3. Different datum or projection between real-time and post-processing
4. USBL position during installation was filtered differently than post-processed

**Action**: document both positions and state which is used for the as-built record. The post-processed position is generally more accurate and should be the official as-built position.

### Gaps in Pipeline Coverage

**Possible causes**:

1. ROV lost DVL bottom lock during transit (INS drifted, data unreliable)
2. USBL tracking lost due to acoustic interference or multipath
3. Pipeline buried with no surface expression (cannot visually follow)
4. Current too strong for ROV to maintain position along pipeline

**Action**:

1. Repeat the affected section in better conditions if possible
2. If repeat is not possible, note the gap and provide the best available data (even if reduced accuracy)
3. Use MBES data to fill position gaps if available
4. Document all gaps with justification in the as-built report

### Depth of Cover Below Specification

**Action**:

1. Verify the pipe tracker reading is valid (check calibration, altitude, signal strength)
2. Cross-check with SBP data if available
3. Repeat the measurement in the opposite direction (check for systematic error)
4. Report the under-burial formally -- this is an engineering and client decision, not a survey decision
5. Provide the exact extent (KP start, KP end, minimum DOC) for remediation planning

---

## :material-link-variant: Related Articles

- [Pipeline Survey Operations](pipeline-survey-operations.md)
- [Construction Support Survey](construction-support-survey.md)
- [Subsea Metrology Overview](metrology-overview.md)
- [INS-Based Metrology (SLAM)](ins-based-metrology.md)
- [Pipe Tracker (HydroPACT) Verification](../sensors/pipetracker-hydropact-verification.md)
- [Survey Reporting Fundamentals](../reporting/survey-reporting-guide.md)

---

## :material-table: Quick Reference

| Parameter | Typical Value |
|:--|:-:|
| Pipeline KP interval | 10 m (rigid) / 25 m (flexible) |
| Structure position tolerance | 0.5-3.0 m horizontal |
| Depth of cover tolerance | Per spec (typically 0.6-1.0 m minimum) |
| Video coverage | 100% of installed assets |
| Freespan recording | Length, height, gap at each occurrence |
| Deviation reporting | Immediate for items outside tolerance |

---

!!! quote "References"
    - DNVGL-ST-F101, Submarine Pipeline Systems
    - DNVGL-ST-N001, Marine Operations and Marine Warranty
    - IMCA S 015, Guidelines for Survey Mobilisation and Calibration
    - Project-specific as-built specification and deliverables list
