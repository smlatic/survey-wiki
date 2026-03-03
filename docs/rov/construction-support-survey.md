---
title: Construction Support Survey
category: rov
tags: [construction, installation, guidance, real-time, positioning, pipelay, structure, touchdown]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: original
---

# :material-crane: Construction Support Survey

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>ROV Operations</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Reference Guide</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Reference guide covering the surveyor's role during subsea construction operations, including real-time positioning guidance, pre-lay requirements, pipelay monitoring, structure installation, touchdown monitoring, verticality checks, communication protocols, and common deliverables. This article focuses on the survey-specific aspects of construction support, not the construction methods themselves.

---

## :material-calendar-check: When to Use

Refer to this article:

- When assigned to provide survey support during subsea construction (pipelay, structure installation, spool installation, cable lay)
- When setting up real-time guidance displays for construction operations
- When planning the survey requirements for a construction scope
- When determining positioning accuracy requirements for different operation types

---

## :material-information-outline: Overview

Construction support survey provides real-time positioning data to guide subsea installation operations. The surveyor's role is to tell the construction team where things are, where they need to go, and to record where they end up. This requires reliable, accurate, real-time positioning with clear communication between the survey team and the construction/ROV team.

The critical difference from survey operations (bathymetry, route survey) is that construction is happening in real-time and decisions depend on your data. Late or inaccurate information can result in misplaced structures, pipe buckling, or costly rework. The pressure is higher and the tolerance for equipment downtime is zero.

---

## :material-book-open-variant: Theory and Principles

### Positioning Requirements by Operation Type

| Operation | Horizontal Accuracy | Vertical Accuracy | Update Rate | Notes |
|:--|:--|:--|:--|:--|
| Pipelay monitoring | 2-5 m | 0.5-1.0 m | 1 Hz | Continuous along-track and cross-track position |
| Structure placement | 0.5-2.0 m | 0.3-0.5 m | 1 Hz | Relative to design coordinates |
| Spool installation | 0.5-1.0 m | 0.3-0.5 m | 1 Hz | Relative to hub positions |
| Touchdown monitoring | 1-3 m | 0.5 m | 1 Hz | Distance above seabed critical |
| Verticality monitoring | 0.1-0.5 deg | N/A | 1 Hz | Inclinometer or INS-derived |
| Cable lay | 5-10 m | 1.0 m | 1 Hz | Route following is primary concern |
| Mattress/grout bag | 2-5 m | 1.0 m | 1 Hz | Relative to target structure |

!!! info "Accuracy vs Precision"
    For construction guidance, precision (repeatability) often matters more than absolute accuracy. If your position is consistently offset by 1 m but stable, the construction team can work with that. If it jumps around by 3 m, they cannot. Prioritise position stability.

### Survey Reference Systems

All construction positioning must reference the project coordinate system and design data. Key items to confirm before operations:

- **Datum and projection**: must match the design drawings and engineering data
- **Vertical reference**: chart datum, LAT, MSL, or project-specific. Must match engineering.
- **KP system**: kilometre point along pipeline route. Must match the pipeline design.
- **Design coordinates**: targets, waypoints, alignment sheets must be loaded in the navigation software and verified against engineering issue.

!!! danger "Wrong Datum = Wrong Position"
    If the survey and engineering systems are on different datums or projections, every position you provide will be wrong. This has caused structures to be placed in the wrong location. Verify datum and projection match before the first lift.

---

## :material-clipboard-check-outline: Prerequisites

- [x] All positioning systems calibrated and operational (GNSS, USBL, INS/DVL)
- [x] Design data loaded in navigation software (waypoints, alignment sheets, structure coordinates)
- [x] Datum and projection verified against engineering deliverables
- [x] Real-time guidance displays configured and tested
- [x] Communication protocols established (survey-bridge-ROV-construction)
- [x] Pre-lay survey completed (if applicable)
- [x] Metrology completed (if applicable for spool installation)

---

## :material-list-status: Procedure

### Step 1: Pre-Operation Setup

1. **Verify design data**: compare loaded coordinates with latest engineering issue (revision check)
2. **Configure guidance displays**:
    - Plan view showing ROV/object position relative to target
    - Numeric display showing bearing, distance, and depth to target
    - Trend display showing approach trajectory
3. **Test communication**: verify all communication channels work (radio, intercom, PA)
4. **Establish reporting format**: agree with construction team on what information you will provide and how often (e.g., "bearing XXX, distance XX m, depth XX m" at 30-second intervals)
5. **Verify USBL tracking**: confirm ROV/object is being tracked reliably before the operation starts
6. **Set up logging**: ensure all position data is being recorded for the as-built record

### Step 2: Pre-Lay Survey (Pipelay Operations)

Before pipelay begins:

1. Run a pre-lay survey along the pipeline route:
    - MBES bathymetry along the corridor (typically 200-500 m wide)
    - SSS imagery for debris detection and seabed characterisation
    - SBP if burial depth information is required
    - Visual survey of route (ROV) for debris, crossings, existing infrastructure
2. Verify the seabed is clear of obstructions
3. Confirm design depths match surveyed depths (flag any significant differences to engineering)
4. Install any required pre-lay features (KP markers, guideline bases, pull-in heads)

### Step 3: Real-Time Guidance During Installation

#### Pipelay Monitoring

1. Track the touchdown point (TDP) continuously via USBL on the stinger end or pipe
2. Monitor pipe position relative to the design route:
    - **Along-track**: report KP of TDP
    - **Cross-track**: report offset from design centreline
    - **Depth**: report water depth at TDP and pipe sag/elevation
3. Report at agreed intervals (typically every pipe joint or every 30-60 seconds)
4. Alert if pipe position exceeds tolerance (typically 5-10 m cross-track for flexible, tighter for rigid)

#### Structure Installation

1. Track the structure continuously from lift-off to seabed
2. Provide guidance relative to target position:
    - Bearing and distance to target
    - Current heading vs required heading (for oriented structures)
    - Height above seabed (critical during final lowering)
3. At set-down, report:
    - Final position (easting, northing, elevation)
    - Heading/orientation
    - Offset from design position
    - Verticality (if applicable)

#### Spool Installation

1. Verify hub positions (from metrology) match design
2. Guide spool approach to each hub
3. Monitor spool position during lowering
4. Report clearance between spool end and hub during approach
5. Record final spool position for as-built

### Step 4: Touchdown Monitoring

For structures and spools, the final phase of lowering is critical:

1. Switch to high-rate position updates (1 Hz minimum)
2. Report height above seabed at short intervals (every 10-15 seconds)
3. Call out distance milestones: "10 metres above seabed... 5 metres... 3 metres... 1 metre... touchdown"
4. Monitor for lateral drift during lowering (current can push the load off target)
5. After touchdown, verify position is within tolerance before crane releases

!!! warning "Height Above Seabed"
    Height above seabed can be measured by ROV altimeter, USBL depth minus known seabed depth, or INS depth. Each has different accuracy. Agree the source with the construction team before the operation. If using USBL depth, remember that USBL vertical accuracy is typically 1-3% of slant range.

### Step 5: Verticality Monitoring

For structures requiring vertical installation (monopiles, caissons, conductors):

1. Install inclinometer or use INS pitch/roll on the structure
2. Monitor tilt in two axes during and after installation
3. Report tilt angle and direction (e.g., "0.3 deg tilt towards north")
4. Acceptance is typically < 0.5-1.0 deg from vertical (project-specific)
5. Record final verticality for as-built

---

## :material-check-decagram: Acceptance Criteria

| Parameter | Requirement |
|:--|:--|
| Position accuracy during guidance | Per operation type table above |
| Position update rate | 1 Hz minimum during active operations |
| Communication | Continuous between survey and construction team |
| Touchdown position | Within project-specified tolerance of design (typically 0.5-3.0 m) |
| Structure heading/orientation | Within project-specified tolerance (typically 1-5 deg) |
| Verticality | < 0.5-1.0 deg (project-specific) |
| As-built data recording | All position data logged at 1 Hz minimum |
| Pre-lay coverage | 100% of route corridor surveyed |

---

## :material-wrench: Troubleshooting

### USBL Position Unstable During Critical Phase

**Action**:

1. Check for acoustic interference (other vessels, construction noise)
2. Verify gate settings are appropriate for the depth and range
3. Switch to a quieter frequency channel if available
4. If USBL is unreliable, switch to ROV INS position for guidance (less accurate but more stable)
5. Communicate the reduced accuracy to the construction team immediately

### Position Jumps During Lowering

**Possible causes**:

1. USBL multipath from vessel hull, crane boom, or structure itself
2. Transponder partially obscured as structure rotates
3. Acoustic interference from thrusters or construction equipment

**Action**:

1. Use ROV-mounted tracking as backup
2. Apply position smoothing/filtering (but be aware of latency introduced)
3. Report the issue and recommend pausing if position quality is insufficient for safe placement

### Design Coordinates Don't Match Seabed Reality

**Action**:

1. Do NOT adjust design coordinates yourself -- this is an engineering decision
2. Report the discrepancy formally (email, daily report)
3. Survey the actual seabed condition and provide to engineering
4. Continue using the official design coordinates until engineering issues a revision
5. Get written confirmation of any coordinate changes

### Communication Breakdown

**Action**:

1. Stop the operation until communication is restored
2. Use backup communication channel (radio, PA, phone)
3. If all electronic communication fails, use agreed hand signals or runners
4. Never continue a critical lifting operation without direct communication between survey and crane operator

---

## :material-link-variant: Related Articles

- [As-Built Survey Procedures](as-built-survey.md)
- [Pipeline Survey Operations](pipeline-survey-operations.md)
- [INS-Based Metrology (SLAM)](ins-based-metrology.md)
- [Subsea Metrology Overview](metrology-overview.md)
- [HiPAP USBL Calibration](../positioning/hipap-usbl-calibration.md)
- [USBL Theory and Error Budgets](../positioning/usbl-theory-and-error-budgets.md)

---

## :material-table: Quick Reference

| Parameter | Typical Value |
|:--|:-:|
| Structure placement tolerance | 0.5-3.0 m horizontal |
| Pipelay cross-track tolerance | 5-10 m (flexible), tighter for rigid |
| Verticality tolerance | 0.5-1.0 deg |
| Position update rate | 1 Hz minimum |
| Touchdown call intervals | Every 10-15 seconds |
| Pre-lay corridor width | 200-500 m |
| Communication check | Before every operation |

---

!!! quote "References"
    - IMCA S 015, Guidelines for Survey Mobilisation and Calibration
    - IMCA S 017, Guidelines for Positioning Systems
    - DNVGL-ST-N001, Marine Operations and Marine Warranty
    - Project-specific installation procedures and engineering drawings
