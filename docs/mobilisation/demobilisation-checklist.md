---
title: Survey Equipment Demobilisation
category: field-notes
tags: [demobilisation, checklist, packing, data-backup, equipment-return]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: original
---

# :material-package-down: Survey Equipment Demobilisation

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Field Notes</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Checklist</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Structured demobilisation checklist covering data backup, equipment condition recording, sensor removal, cable management, packing, shipping documentation, and lessons learned. The cardinal rule of demob: verify all data is backed up and confirmed BEFORE disconnecting anything.

---

## :material-calendar-check: When to Use

- At the end of every project
- When swapping equipment mid-project
- When a vessel is changing between projects and survey equipment must be removed
- When equipment is being returned to a pool or sent for recalibration

---

## :material-information-outline: Overview

Demobilisation is not just "unplug and pack". Data loss during demob is irreversible and has ended careers. Equipment damage during packing and transit is the most common cause of mob delays on the next project. A disciplined approach -- data first, documentation second, disconnection third, packing last -- protects both the data and the equipment.

---

## :material-database: Phase 1: Data Backup and Verification

!!! danger "Backup Before Disconnecting"
    Do NOT disconnect any equipment until ALL data backups are verified. This is non-negotiable. Once a system is powered down and the disk removed, recovery of corrupted or incomplete backups may be impossible.

- [ ] **Primary data backup complete**: all raw survey data copied to project drive/NAS
- [ ] **Secondary backup complete**: independent copy on separate media (external HDD, separate NAS)
- [ ] **Backup verification**: spot-check files can be opened and are not corrupt (open random files from each day's data in processing software)
- [ ] **File counts match**: compare file count and total size between source and backup
- [ ] **Calibration data backed up**: all calibration raw data, processed results, and reports
- [ ] **Configuration files exported**: navigation software project files, sensor configurations, geodetic parameters
- [ ] **Screenshots/exports saved**: system settings, sensor configurations, software versions
- [ ] **Email confirmation sent**: notify office that data backup is complete with summary of data volume and verification status

!!! tip "Backup Verification"
    A backup that has not been verified is not a backup. Open at least one file from each recording system, each day of operations. Check that the file loads, has data, and covers the expected time range. This takes 30 minutes and can save the entire project.

---

## :material-file-document-outline: Phase 2: Documentation and Reporting

- [ ] **End-of-project report completed** (or draft submitted if final processing is office-based)
- [ ] **All calibration reports finalised** and saved to project archive
- [ ] **Daily reports complete** for all operational days
- [ ] **Equipment condition reports written** for each sensor (note any faults, damage, or anomalies observed during the project)
- [ ] **Lessons learned documented**: what worked, what did not, what to improve for next mob on this vessel type
- [ ] **Offset values recorded**: final installed offsets as verified during the project (save for next mob on same vessel)
- [ ] **Software versions recorded**: all navigation and processing software versions used

---

## :material-cable-data: Phase 3: Disconnection Sequence

Disconnect in reverse installation order. Last installed, first removed.

### 3.1 Ancillary Systems

- [ ] **SSS / SBP / Magnetometer**: disconnect, recover towfish if deployed, inspect for damage
- [ ] **Cameras / DVR**: disconnect, check lens protection, remove recording media
- [ ] **Pipe tracker**: disconnect, inspect cable and tow body
- [ ] **Tide gauge**: recover, check for biofouling, rinse with fresh water

### 3.2 Acoustic Systems

- [ ] **MBES**: power down, disconnect cables, protect transducer face (cover with protective cap or foam)
- [ ] **USBL**: power down, disconnect cables, protect transducer face
- [ ] **SVP probes**: rinse with fresh water, dry, replace end caps

### 3.3 Attitude and Heading

- [ ] **MRU / motion sensor**: disconnect and remove from mounting bracket
- [ ] **Gyrocompass**: power down (note: spinning mass gyros should run down naturally, do not brake)
- [ ] **GNSS compass**: disconnect cables, protect antenna elements

### 3.4 Positioning Systems

- [ ] **GNSS antennas**: remove from mounts, protect elements, coil cables properly
- [ ] **GNSS receivers**: power down, remove, note any error logs before shutdown

### 3.5 ROV Equipment (if applicable)

- [ ] **INS**: power down, disconnect, pack in original case with desiccant
- [ ] **DVL**: disconnect, protect transducer face
- [ ] **ROV USBL transponder**: remove, inspect, replace battery if needed (note: record battery serial and install date)
- [ ] **Cameras and lights**: disconnect, clean lenses, pack with lens caps on

---

## :material-label: Phase 4: Cable Management

- [ ] **All cables labelled** at both ends (use permanent labels, not tape that falls off)
- [ ] **Cable condition inspected**: look for cuts, crushing, corrosion on connectors
- [ ] **Cables coiled properly**: no kinks, no tight bends, tie with velcro strips (not cable ties that can damage jackets)
- [ ] **Connectors protected**: dust caps on all unused connectors, blanking plugs on bulkhead connectors
- [ ] **Cable inventory recorded**: cable lengths, types, connector types -- for next mob reference
- [ ] **Damaged cables flagged**: clearly mark damaged cables as "DO NOT USE" and report to equipment pool

!!! warning "Cable Damage"
    Most cable failures are caused by poor handling during demob and transit. Coil cables in their natural lay. Never force a cable into a tight coil. Use cable drums or large-diameter coils for long runs. Damaged cables cause intermittent faults that are extremely difficult to diagnose during the next mob.

---

## :material-package-variant-closed: Phase 5: Packing and Shipping

- [ ] **Original cases used** where available (equipment is designed for its transit case)
- [ ] **Foam inserts in place**: all sensors secured in their cases, no loose items
- [ ] **Desiccant packets added** to cases containing electronics and optics
- [ ] **Fragile items separated**: transducers, INS units, and optical equipment in individual padded cases
- [ ] **Heavy items on pallet base**: UPS units, large monitors, rack equipment
- [ ] **Batteries removed or taped**: lithium batteries have shipping restrictions. Check carrier requirements.
- [ ] **Packing list created**: itemised list of every case with contents, attached to outside of each case
- [ ] **Shipping documentation completed**: waybills, customs declarations (for international), dangerous goods declaration (if batteries)
- [ ] **Destination confirmed**: correct address, contact person at receiving end, delivery time expectations
- [ ] **Equipment photographs taken**: photograph each packed case (open and closed) for insurance and damage claims

### Equipment-Specific Packing Notes

| Equipment | Packing Notes |
|:--|:--|
| INS units | Original case, desiccant, connectors capped, IMU lock engaged if applicable |
| MBES transducer | Protective face cover, padded case, do not stack heavy items on top |
| GNSS antennas | Protect elements, pack flat (not on edge), pad around ground plane |
| SVP probes | Fresh water rinse, dry thoroughly, replace end caps, coil cable loosely |
| Towfish (SSS/Mag) | Inspect for damage, protect nose and tail, secure fins, drain any water |
| Cameras / lenses | Lens caps on, desiccant, anti-static bags for electronics |
| Cables | Coiled on drums or in figure-8, labelled both ends, connectors capped |

---

## :material-lightbulb-outline: Phase 6: Lessons Learned

- [ ] **Equipment issues logged**: any sensor faults, calibration difficulties, or reliability issues
- [ ] **Vessel notes recorded**: mounting locations that worked/didn't work, cable routing solutions, access issues
- [ ] **Process improvements noted**: what would make the next mob/demob on this vessel faster or better
- [ ] **Client-specific notes**: any client requirements that were unusual or need to be remembered
- [ ] **Shared with team**: email or report to equipment pool manager and next project surveyor (if known)

!!! tip "Vessel Knowledge"
    If you may return to this vessel, leave the offset file and a mob summary in a shared location. The next surveyor will thank you. Include: sensor positions, cable routing photos, integration notes, known multipath zones, power supply details, and any vessel-specific quirks.

---

## :material-wrench: Troubleshooting Common Demob Issues

### Data Files Missing or Corrupt

**Action**:

1. Do NOT power down the recording system
2. Check if files are on a different drive or partition
3. Check if the recording software has a recovery mode
4. If files are partially written (power failure during recording), attempt recovery with manufacturer tools before giving up
5. Contact the office / data processing team for guidance

### Equipment Won't Power Down Gracefully

**Action**:

1. Follow manufacturer shutdown procedure (some INS units require specific shutdown commands)
2. If a system hangs during shutdown, wait at least 5 minutes before hard power-off
3. For systems with internal storage, a hard power-off risks file system corruption
4. Document the issue for the equipment condition report

### Shipping Restrictions on Batteries

**Action**:

1. Check IATA dangerous goods regulations for lithium batteries
2. Batteries over 100 Wh require Class 9 dangerous goods declaration for air freight
3. If in doubt, ship batteries separately by sea freight
4. Some courier services refuse lithium batteries entirely -- check before booking

---

## :material-link-variant: Related Articles

- [Mobilisation Checklist](mobilisation-checklist.md)
- [Survey Reporting Fundamentals](../reporting/survey-reporting-guide.md)
- [Dimensional Control Survey](dimensional-control-survey.md)

---

## :material-table: Quick Reference

| Phase | Key Action | Critical Check |
|:--|:--|:--|
| Data backup | Copy all data to 2 independent locations | Verify files open correctly |
| Documentation | Complete all reports and logs | Offset values and configs saved |
| Disconnection | Reverse installation order | Power down before disconnecting |
| Cables | Label both ends, coil properly | Inspect for damage, flag defects |
| Packing | Original cases, desiccant, padding | Packing list per case, photos taken |
| Lessons learned | Document issues and improvements | Share with team and equipment pool |

---

!!! quote "References"
    - IMCA S 015, Guidelines for Survey Mobilisation and Calibration
    - Equipment manufacturer packing and shipping guidelines
    - IATA Dangerous Goods Regulations (for battery shipping)
