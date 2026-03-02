---
title: Industry Standards Quick Reference
category: reference
tags: [imca, iho, dnvgl, iso, standards, regulations, guidelines]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: original
---

# :material-bookshelf: Industry Standards Quick Reference

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Reference</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Quick Reference</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Quick reference for the industry standards most commonly referenced in offshore hydrographic and survey operations. For each standard: full title, issuing body, what it covers, key requirements relevant to survey, and how to obtain it.

---

## :material-calendar-check: When to Use

- When a client specification references a standard and you need to understand what it requires
- When writing reports and need to cite the correct standard reference
- When checking which standard applies to a specific survey operation
- When preparing tender responses and need to reference applicable standards

---

## :material-anchor: IMCA Standards (International Marine Contractors Association)

### IMCA S 015 -- Guidelines for Survey Mobilisation and Calibration

| | |
|:--|:--|
| **Full title** | Guidelines for Survey Mobilisation and Calibration |
| **Issuing body** | IMCA (Survey Division) |
| **Scope** | Procedures for mobilisation of survey equipment on offshore vessels. Covers equipment installation, dimensional control, sensor calibration, system integration, and acceptance testing. |
| **Key requirements** | DC survey required for all sensor positions. All sensors must be calibrated before operations. Calibration results documented with pass/fail criteria. Mob report required before survey commencement. |
| **Relevance** | Referenced in nearly every offshore survey project specification. Defines the minimum standard for mobilisation procedures. |
| **Access** | IMCA members: free download from imca-int.com. Non-members: purchase from IMCA. |

### IMCA S 017 -- Guidelines for Position Reference Systems

| | |
|:--|:--|
| **Full title** | Guidelines for Position Reference Systems (and Positioning Operations) |
| **Issuing body** | IMCA (Survey Division) |
| **Scope** | Requirements for positioning systems used in offshore operations. Covers GNSS, USBL, LBL, INS/DVL, and combined systems. Includes calibration requirements, accuracy standards, QC procedures, and integrity monitoring. |
| **Key requirements** | USBL calibration SD < 0.5 m at operational depth. Heading agreement < 0.5 deg. GNSS correction age < 10 s. Redundant positioning required for DP operations. Position quality monitoring at all times. |
| **Relevance** | The primary standard for offshore positioning. Defines what "good enough" means for position accuracy and how to demonstrate it. |
| **Access** | IMCA members: free download. Non-members: purchase from IMCA. |

### IMCA S 019 -- Guidelines for the Use of GNSS in Offshore Operations

| | |
|:--|:--|
| **Full title** | Guidelines for the Use of GNSS in Offshore Operations |
| **Issuing body** | IMCA (Survey Division) |
| **Scope** | GNSS-specific guidance covering correction services, antenna installation, integrity monitoring, jamming/spoofing awareness, and quality indicators. |
| **Key requirements** | Redundant GNSS receivers. Correction service monitoring. GNSS antenna siting requirements. Integrity monitoring procedures. |
| **Relevance** | Supplements IMCA S 017 with GNSS-specific detail. Increasingly referenced for DP vessel GNSS requirements. |
| **Access** | IMCA members: free download. Non-members: purchase from IMCA. |

### IMCA S 024 -- Guidelines for Side Scan Sonar Operations

| | |
|:--|:--|
| **Full title** | Guidelines for Side Scan Sonar Operations |
| **Issuing body** | IMCA (Survey Division) |
| **Scope** | SSS deployment, acquisition, QC, and reporting. Covers line planning, altitude management, coverage requirements, and target classification. |
| **Key requirements** | Minimum 100% coverage (200% for target detection). Altitude 10-15% of range. Line overlap > 10%. Nadir gap covered by adjacent lines. |
| **Relevance** | Referenced in route survey and debris clearance specifications. |
| **Access** | IMCA members: free download. Non-members: purchase from IMCA. |

### IMCA D 045 -- Guidelines for Survey Report Content

| | |
|:--|:--|
| **Full title** | Guidelines for Survey Report Content |
| **Issuing body** | IMCA (Diving Division / Survey Division) |
| **Scope** | What survey reports should contain. Covers mob reports, calibration reports, daily reports, and end-of-project reports. Provides templates and checklists. |
| **Key requirements** | Report structure, mandatory content, data presentation standards, QC documentation requirements. |
| **Relevance** | Referenced when clients ask for "IMCA-standard" reporting. Useful template for establishing report formats. |
| **Access** | IMCA members: free download. Non-members: purchase from IMCA. |

### IMCA M 244 -- Guidelines for INS/DVL Operations

| | |
|:--|:--|
| **Full title** | Guidance on the Use of Inertial Navigation Systems for Subsea Survey and Positioning |
| **Issuing body** | IMCA (Survey Division) |
| **Scope** | INS/DVL system types, installation, calibration, aiding sources, error sources, and operational procedures. |
| **Key requirements** | DVL calibration (misalignment and scale factor). INS alignment requirements. Aiding source quality monitoring. Drift rate assessment. |
| **Relevance** | Primary standard for ROV INS operations. Referenced in most ROV survey specifications. |
| **Access** | IMCA members: free download. Non-members: purchase from IMCA. |

---

## :material-waves: IHO Standards (International Hydrographic Organization)

### IHO S-44 -- Standards for Hydrographic Surveys

| | |
|:--|:--|
| **Full title** | IHO Standards for Hydrographic Surveys, Edition 6.1.0 (2024) |
| **Issuing body** | IHO (International Hydrographic Organization) |
| **Scope** | Defines accuracy requirements for hydrographic surveys by survey order (Exclusive, Special, 1a, 1b, 2). Covers horizontal and vertical accuracy, feature detection, data density, and survey classification. |
| **Key requirements** | THU and TVU by survey order (see table in [Acceptance Criteria Reference](acceptance-criteria-reference.md)). TVU formula: sqrt(a^2 + (b*d)^2). Feature detection requirements vary by order. Full bottom coverage required for Exclusive and Special orders. |
| **Relevance** | The international standard for bathymetric survey accuracy. Referenced in all hydrographic survey specifications. Defines the accepted uncertainty model for depth measurement. |
| **Access** | Free download from iho.int |

### IHO S-57 -- Transfer Standard for Digital Hydrographic Data

| | |
|:--|:--|
| **Full title** | IHO Transfer Standard for Digital Hydrographic Data |
| **Issuing body** | IHO |
| **Scope** | Data format for electronic navigational charts (ENC). Defines feature attributes, data structures, and encoding rules. |
| **Key requirements** | Standard feature coding, spatial object representation, metadata requirements. |
| **Relevance** | Relevant when survey data feeds into chart production. Being superseded by S-100/S-101 for new charts. |
| **Access** | Free download from iho.int |

### IHO S-100 / S-102 -- Universal Hydrographic Data Model / Bathymetric Surface

| | |
|:--|:--|
| **Full title** | S-100: Universal Hydrographic Data Model. S-102: Bathymetric Surface Product Specification. |
| **Issuing body** | IHO |
| **Scope** | S-100 is the framework data model replacing S-57. S-102 specifies gridded bathymetric data products within the S-100 framework. |
| **Key requirements** | Gridded bathymetric data with uncertainty estimates. Metadata including source survey, uncertainty, and quality. |
| **Relevance** | Increasingly referenced for bathymetric data delivery. S-102 products are used for ECDIS display of high-resolution bathymetry. |
| **Access** | Free download from iho.int |

---

## :material-offshore-platform: DNV Standards (Det Norske Veritas)

### DNVGL-ST-N001 -- Marine Operations and Marine Warranty

| | |
|:--|:--|
| **Full title** | DNVGL-ST-N001: Marine Operations and Marine Warranty |
| **Issuing body** | DNV (formerly DNVGL) |
| **Scope** | Requirements for marine operations including lifting, towing, and installation. Includes survey and positioning requirements for construction operations. |
| **Key requirements** | Positioning accuracy requirements by operation type. Weather and environmental limits. Operational risk assessment. Survey vessel and ROV requirements for construction support. |
| **Relevance** | Referenced in construction and installation projects. Defines what positioning accuracy is required during lifts and installations. Marine warranty surveyors assess compliance. |
| **Access** | Free download from dnv.com (rules and standards section) |

### DNVGL-ST-F101 -- Submarine Pipeline Systems

| | |
|:--|:--|
| **Full title** | DNVGL-ST-F101: Submarine Pipeline Systems |
| **Issuing body** | DNV |
| **Scope** | Design, construction, operation, and abandonment of submarine pipeline systems. Includes survey requirements for as-laid and as-built verification. |
| **Key requirements** | Pipeline position accuracy requirements. Freespan acceptance criteria. Depth of cover requirements. As-built survey content and accuracy. |
| **Relevance** | Referenced in pipeline survey specifications. Defines freespan criteria and pipeline position tolerances. |
| **Access** | Free download from dnv.com |

---

## :material-certificate: ISO Standards

### ISO 19901-7 -- Stationkeeping Systems for Floating Offshore Structures

| | |
|:--|:--|
| **Full title** | ISO 19901-7: Petroleum and Natural Gas Industries -- Specific Requirements for Offshore Structures -- Part 7: Stationkeeping Systems for Floating Offshore Structures and Mobile Offshore Units |
| **Issuing body** | ISO |
| **Scope** | DP system requirements including position reference systems. Covers sensor selection, redundancy, quality monitoring, and failure modes. |
| **Key requirements** | Redundant position references. Independence of reference systems. Position quality monitoring. Alerting and failure response. |
| **Relevance** | Referenced for DP vessel positioning requirements. Relevant when providing survey support to DP operations. |
| **Access** | Purchase from ISO or national standards bodies |

---

## :material-earth: Geodetic References

### EPSG Registry

| | |
|:--|:--|
| **Full title** | EPSG Geodetic Parameter Dataset |
| **Issuing body** | IOGP (International Association of Oil & Gas Producers) |
| **Scope** | Registry of coordinate reference systems, datums, projections, and transformations used worldwide. Each identified by a unique EPSG code. |
| **Key requirements** | Use EPSG codes to unambiguously identify coordinate systems. Common codes: 4326 (WGS84 geographic), 32601-32660 (UTM North zones), 32701-32760 (UTM South zones). |
| **Relevance** | Used in every survey project to specify coordinate systems. Avoids ambiguity in datum and projection definitions. |
| **Access** | Free online at epsg.org |

### EGM2008 / EGM96 -- Earth Gravitational Models

| | |
|:--|:--|
| **Full title** | Earth Gravitational Model 2008 (EGM2008) / Earth Gravitational Model 1996 (EGM96) |
| **Issuing body** | NGA (US National Geospatial-Intelligence Agency) |
| **Scope** | Global geoid models providing the height difference between the WGS84 ellipsoid and the geoid (mean sea level approximation). |
| **Key requirements** | EGM2008 accuracy: 10-20 cm globally. EGM96: 50-100 cm. Local geoid models may be more accurate in specific areas. |
| **Relevance** | Required for converting between ellipsoidal heights (from GNSS) and orthometric/chart datum heights. Referenced in all projects using GNSS-derived depths or heights. |
| **Access** | Free download from NGA |

---

## :material-wrench: How to Reference Standards in Reports

When citing a standard in a survey report:

- Use the full standard number and edition on first reference: "IHO S-44, Edition 6.1.0 (2024)"
- Subsequent references can use the short form: "IHO S-44"
- If referencing a specific clause: "IMCA S 017, Section 5.3"
- Always confirm the edition/revision you are working to matches the client specification
- Some clients work to specific (sometimes older) editions. Do not assume the latest edition applies.

---

## :material-link-variant: Related Articles

- [Acceptance Criteria Reference](acceptance-criteria-reference.md)
- [TPU and Error Budgets](tpu-error-budgets.md)
- [Coordinate Systems and Datums](coordinate-systems-datums.md)
- [Survey Reporting Fundamentals](../reporting/survey-reporting-guide.md)

---

!!! quote "References"
    - All standards listed above
    - IMCA website: imca-int.com
    - IHO website: iho.int
    - DNV website: dnv.com
