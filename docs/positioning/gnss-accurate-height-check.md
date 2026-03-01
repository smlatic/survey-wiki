---
title: GNSS Accurate Height Check
category: positioning
tags: [gnss, height, vertical, verification, tide-gauge, draft, ellipsoidal-height, datum, rtk, tidal-cycle, mobilisation]
equipment: [GNSS System, Tide Gauge (3rd Party), RTK GNSS, Weighted Tape, Survey Marker]
date_added: 2026-03-01
source_type: converted_procedure
---

# :material-arrow-expand-vertical: GNSS Accurate Height Check

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Positioning</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Verification Procedure</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Verify the accuracy of GNSS-derived ellipsoidal heights by comparing GNSS water-level profiles against independent 3rd-party tide gauge data over a full tidal cycle. The resulting comparison plot is inserted into the project mobilisation report as evidence of vertical positioning accuracy.

---

## :material-tools: Equipment Required

| Equipment | Role |
|---|---|
| All mobilised GNSS systems | System(s) under test |
| 3rd-party tide gauge (within 1 km) | Independent vertical reference |
| RTK GNSS (optional) | Establish quayside reference point |
| Weighted tape (optional) | Manual water level dip measurements |
| Survey marker (optional) | Quayside vertical reference point |

---

!!! warning "Critical Requirements"
    - The verification **must** be completed in a **non-enclosed water body**
    - If alongside a quay wall, the vessel must be free to move up and down with the tide
    - No bunkering or ballast transfer during the entire data collection period
    - Begin data collection at least **2 hours prior** to high or low water
    - Safe access to shore may be required for manual water levelling

---

## :material-list-status: Procedure

### Step 1: Secure Vessel and Begin Logging

1. Inform vessel crew of your intentions and the requirements for a valid test
2. Secure the vessel in an appropriate location, preferably **within 1 km of a tide gauge**, where it will not be moved during the data collection
3. Start logging all mobilised GNSS systems **simultaneously**
4. Collect GNSS data for at least **one full tidal cycle**, which must include one high slack and one low slack water (approximately **8 to 9 hours**)

---

### Step 2: Calculate Vessel Draft

- Calculate the vessel draft at the **commencement** of data logging
- Where possible, repeat draft measurements **several times** during the verification
- Always repeat draft measurements on **completion** of the verification

---

### Step 3: Process Recorded Data

Process the recorded GNSS data using the most accurate method available. Ensure the data is reduced to the **project vertical datum** using the contract's reduction methodology.

---

### Step 4: Source Tide Gauge Data

Source the corresponding data from the selected **3rd-party tide gauge** for the same time period. If the tide gauge data source is freely available, follow the appropriate access procedure.

---

### Step 5: Reduce GNSS Data to Water Level

Reduce the orthometric GNSS heights to the actual water level using:

- **Draft measurements** from Step 2
- **Vessel offsets** (antenna height above waterline, etc.)

---

### Step 6: Compare GNSS and Tide Gauge Height Profiles

- Overlay the reduced GNSS water-level profile against the 3rd-party tide gauge profile
- Review the correlation between the two datasets
- Insert the resulting **tide verification plot** into the project mobilisation report

---

## :material-dots-horizontal: Optional Steps (During GNSS Data Collection)

The following optional steps provide additional verification through independent manual water-level measurements.

### Step 7: Install a Quayside Vertical Reference Point

Install a quayside vertical reference point with suitable access to the water, close to the selected tide gauge:

1. Install a **survey marker** at the selected location
2. Accurately level the chosen position using one of the following methods:

    | Method | Description |
    |---|---|
    | **RTK GNSS averaging** | Collect a number of manual fixes with good precision values, then calculate an average position and height |
    | **RTK GNSS static** | Collect 2-3 hours of RTK GNSS observations and calculate an average position and height |
    | **Post-processed GNSS** | Collect 2-3 hours of non-RTK GNSS observations and post-process to calculate the reference point position and height |

3. Document the calculated position and height, including accuracies, on a **station description sheet**

---

### Step 8: Take Water Level Measurements

- Take water level measurements every **10 minutes** during the GNSS data logging using a **weighted tape** from the defined control point
- As a minimum, levels must be taken every 10 minutes for **1 hour either side** of high and low water
- If possible, increase measurement frequency for the full duration of the exercise

---

### Step 9: Reduce Measurements and Compare

- Reduce the manual water level measurements to the **tide gauge datum**
- Plot the measurements against the 3rd-party tide gauge data
- Review the correlations, paying particular attention to the high and low water periods

!!! success "Expected Accuracy"
    The expected correlation between RTK GNSS dip measurements (if measured accurately) and the tide gauge is **+/- 10 cm**.

---

## :material-clipboard-check: Reporting Checklist

- [x] Tide verification plot (GNSS vs tide gauge profiles)
- [x] Draft measurements at start, during, and end of verification
- [x] GNSS processing method and vertical datum used
- [x] Tide gauge source and location
- [x] Station description sheet for quayside reference point (if established)
- [x] Manual dip measurements and comparison (if performed)
- [x] Insert results into the **project mobilisation report**

---

## :material-link-variant: Related Pages

- [GNSS Fundamentals](gnss-fundamentals.md) -- constellations, augmentation systems, error sources
- [Alongside DGNSS Integrity Check](dgnss-integrity-check.md) -- horizontal DGNSS verification with total station
