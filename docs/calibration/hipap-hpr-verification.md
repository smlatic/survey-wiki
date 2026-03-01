---
title: HiPAP USBL Verification (Spin and Transit Tests)
category: calibration
tags: [hipap, usbl, verification, spin test, transit test, transponder, positioning, DP]
equipment: [HiPAP USBL System, Seabed Transponder, ROV, Sound Velocity Profiler, DP System]
date_added: 2026-03-01
source_type: converted_procedure
---

# :material-access-point-check: HiPAP USBL Verification (Spin and Transit Tests)

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Calibration</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Verification</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Verify the accuracy and functionality of a HiPAP USBL system in providing reliable underwater positioning data after calibration has been completed. The verification process validates the system's ability to track underwater transponders accurately at operational depth.

---

## :material-tools: Equipment Required

| Equipment | Role |
|-----------|------|
| HiPAP USBL system | Primary acoustic positioning system |
| Seabed transponder (beacon) | Acoustic target |
| ROV (for deep-water transponder deployment) | Transponder deployment |
| Sound velocity profiler | Water column velocity measurement |
| Navigation and acquisition software (NaviPac/Qinsy or equivalent) | Data acquisition |
| DP system (for spin and transit manoeuvres) | Vessel manoeuvring |

---

!!! info "Prerequisites"
    - Acceptable USBL calibration already completed
    - Verification should be conducted at a depth equivalent to the deepest planned operational depth
    - DP system operational (for spin test; non-DP alternative available)

---

## :material-list-status: Procedure

### Step 1: Transponder Deployment

Deploy a beacon to the seabed at the target depth. An ROV may be required for deeper deployments. Ensure the beacon is correctly positioned, anchored securely to the seabed, and has adequate battery charge.

### Step 2: Sound Velocity Profile

Acquire a new sound velocity profile of the area and load it into APOS for real-time ray bending compensation. Record both an upcast and a downcast profile and include them in the verification test report.

### Step 3: Log File Setup

Establish a log file within the navigation software to record calculated transponder positions. Generate a separate log file for each spin, heading, and transit.

**Logging format (comma delimited):**

| Field | Date | Time | Transponder Easting | Transponder Northing | Transponder Depth |
|---|---|---|---|---|---|
| Format | yyyy-mm-dd | hh:mm:ss.sss | n.nn | n.nn | n.nn |
| Example | 2023-02-27 | 14:39:54.231 | 670811.01 | 6397125.92 | 55.68 |

### Step 4: Spin Check (DP Vessel)

Slowly rotate the vessel through a complete 360 degree turn above/adjacent to the transponder. Rotation speed should be 15-20 deg/min. Ensure the rotation is smooth and controlled. Record the HiPAP USBL position data continuously throughout the manoeuvre, generating at least 200 position solutions evenly distributed through the spin.

### Step 5: Transit Test (DP Vessel)

Run two orthogonal transit lines over the transponder. The vessel heading should remain the same for both lines (the vessel will sail sideways on one line). Line length should be +/-50% of water depth or +/-100 m, whichever is greater. Maximum speed: 2 knots.

### Step 6: Non-DP Alternative

For vessels without DP, create two orthogonal lines over the transponder. Sail both lines at a maximum speed of 2 knots, two times each on reciprocal headings, generating 4 total runs with a separate log file for each.

---

!!! example "Acceptance Criteria"
    **Spin test:**

    - No significant artefacts in the dataset
    - 95% of points within 0.3% of slant range + surface positioning error from the known point or mean USBL position
    - Mean position from each of four individual vessel headings within 0.2% of slant range from the overall mean position

    **Transit test:**

    - No significant artefacts in the dataset
    - 95% of points within 0.3% of maximum slant range + surface positioning error from the known point or mean USBL position
    - Mean position of each transit dataset within 0.2% of slant range from the mean position determined during the spin verification
    - Transponder depth profile should show residual pitch and roll errors less than or equal to the documented accuracy of the original USBL calibration

---

!!! note "Reporting"
    The verification report must include:

    - Introduction
    - Table of equipment
    - Sequence of events
    - Tabular and graphical representations of results
    - Statistical analysis

    Save as PDF with associated log files.

---

!!! quote "References"
    - IMCA M 244 / IMCA S 017 Rev. 1 -- Guidance on Vessel USBL Systems for Use in Offshore Survey, Positioning and DP Operations
