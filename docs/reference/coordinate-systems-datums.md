---
title: Coordinate Systems and Datums
category: reference
tags: [coordinates, datum, wgs84, utm, projection, geoid, itrf, helmert, transformation, egm2008, epsg]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: original
---

# :material-earth: Coordinate Systems and Datums

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Reference</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Reference Guide</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Reference covering coordinate systems, datums, projections, and transformations used in offshore and hydrographic survey. Covers WGS84/ITRF relationships, UTM zone selection and distortion, vertical datums and geoid models, Helmert 7-parameter transformations, and the common pitfalls that cause coordinate errors in the field. Intended as a working reference for surveyors setting up navigation systems and processing survey data.

---

## :material-calendar-check: When to Use

Refer to this article:

- When setting up a navigation system and selecting the coordinate reference system
- When choosing a UTM zone for a project
- When converting between datums or applying a Helmert transformation
- When working with vertical datums and geoid models
- When investigating coordinate discrepancies between datasets
- When verifying that coordinate order and datum conventions are correct

---

## :material-information-outline: Overview

Every position in a survey dataset exists within a coordinate reference system (CRS). Getting the CRS wrong, applying the wrong transformation, or confusing coordinate conventions silently corrupts every position in the dataset. These errors are often not detected until data from different sources is combined and features do not align. This article covers the coordinate systems and datums used in offshore survey, with emphasis on the practical decisions and common mistakes that surveyors encounter in the field.

---

## :material-book-open-variant: Theory and Principles

### WGS84 and ITRF

**WGS84** (World Geodetic System 1984) is the datum used by GPS. It defines the ellipsoid (semi-major axis 6,378,137 m, flattening 1/298.257223563) and the reference frame for all GPS-derived coordinates.

**ITRF** (International Terrestrial Reference Frame) is maintained by the IERS and is the most accurate global reference frame. ITRF is updated periodically (ITRF2014, ITRF2020).

**Practical relationship**: WGS84 and the latest ITRF realisation are aligned to within a few centimetres. For all offshore survey purposes, they are interchangeable. The difference is below the noise floor of any operational GNSS system.

!!! info "When It Matters"
    The distinction between WGS84 and ITRF only becomes significant for geodetic-grade work, tectonic monitoring, or when combining datasets spanning decades. For project-level survey work, treat WGS84 and ITRF as identical.

### UTM Projections

Universal Transverse Mercator (UTM) projects the ellipsoid onto a flat surface for working in metres (Easting, Northing). The globe is divided into 60 zones, each 6 degrees wide.

#### Zone Selection

**Zone number = floor((longitude + 180) / 6) + 1**

Example: A survey at longitude 2.5 degrees East: floor((2.5 + 180) / 6) + 1 = floor(30.42) + 1 = 30 + 1 = **Zone 31N**

Each zone has a central meridian. For Zone 31, the central meridian is 3 degrees East.

!!! warning "Zone Boundary Surveys"
    If the survey area straddles a UTM zone boundary, either extend one zone across the boundary (acceptable for small overlaps) or use a project-specific projection. Never split a single dataset across two UTM zones without a clear strategy for combining them.

#### Convergence Angle

Grid north in UTM does not equal true north except on the central meridian. The difference is the convergence angle (sometimes called grid convergence or meridian convergence).

- **At the central meridian**: convergence = 0 degrees
- **At the zone edges (3 degrees from CM)**: convergence reaches its maximum, typically 1 to 3 degrees depending on latitude
- **Formula (approximate)**: convergence = delta_longitude x sin(latitude)

This matters for heading-dependent operations. If the navigation system outputs grid bearings and the client expects true bearings (or vice versa), the convergence angle must be applied.

#### Scale Factor

UTM applies a scale factor of **0.9996** at the central meridian. This means that a distance measured on the ground and projected to UTM grid coordinates is 0.04% shorter at the central meridian.

| Distance from Central Meridian | Scale Factor | Distortion |
|:-:|:-:|:-:|
| 0 km (on CM) | 0.9996 | -0.04% (grid shorter than ground) |
| ~180 km | 1.0000 | 0% (true scale) |
| ~330 km (zone edge) | ~1.0004 | +0.04% (grid longer than ground) |

**Practical impact**: Over a 10 km pipeline at the central meridian, the UTM distance is 0.4 m shorter than the true ground distance. For a 100 km pipeline route, the difference can reach 4 m. This matters for:

- Pipeline KP (Kilometre Post) calculations
- Cable route length calculations
- Any distance that must match a physical measurement

!!! tip "Correcting for Scale Factor"
    To convert from grid distance to ground distance: multiply by 1/scale_factor. At the central meridian: ground distance = grid distance / 0.9996. Always document whether reported distances are grid or ground.

### Local Datums and Helmert Transformations

Many regions and clients use local geodetic datums (e.g., ED50 in Europe, NAD27 in North America, Pulkovo 1942). Converting between WGS84 and a local datum requires a datum transformation.

#### Helmert 7-Parameter Transformation

The standard transformation uses 7 parameters:

| Parameter | Symbol | Units | Description |
|:--|:-:|:-:|:--|
| Translation X | dX | metres | Shift along X-axis |
| Translation Y | dY | metres | Shift along Y-axis |
| Translation Z | dZ | metres | Shift along Z-axis |
| Rotation X | Rx | arc-seconds | Rotation around X-axis |
| Rotation Y | Ry | arc-seconds | Rotation around Y-axis |
| Rotation Z | Rz | arc-seconds | Rotation around Z-axis |
| Scale | dS | ppm | Scale difference |

**Example (WGS84 to ED50, North Sea)**:
dX = -87 m, dY = -98 m, dZ = -121 m (approximate, region-dependent)

!!! danger "Transformation Direction"
    The most common Helmert error is applying the transformation in the wrong direction. Parameters published as "WGS84 to ED50" convert FROM WGS84 TO ED50. To go from ED50 to WGS84, you must reverse the signs of all 7 parameters. Getting this backwards shifts every position by twice the transformation amount. Always verify with a known control point.

#### Common Pitfalls

- **Double transformation**: Data already in WGS84 gets transformed to WGS84 again using a local-to-WGS84 set of parameters. Result: everything shifts by the full transformation amount.
- **Wrong parameter set**: Multiple Helmert parameter sets exist for the same datum pair, optimised for different regions. Using the North Sea ED50 parameters in West Africa produces errors of tens of metres.
- **Position format confusion**: Some parameter sets expect geocentric Cartesian input (X, Y, Z in metres), while the software expects geographic input (lat, lon, height). Verify the input format.

### Vertical Datums

Offshore survey uses multiple vertical datums. Understanding the relationships between them prevents errors that propagate into every depth and height value.

```
    Ellipsoid (WGS84)           h = ellipsoidal height
        │
        │  N (geoid undulation)
        ▼
    Geoid (≈ MSL)               H = orthometric height
        │
        │  Z0 (separation)
        ▼
    Chart Datum (LAT)           depth below CD
```

**Key relationship**: h = H + N, or equivalently, H = h - N

Where:

- **h** = ellipsoidal height (what GNSS measures directly)
- **H** = orthometric height (height above the geoid, approximately MSL)
- **N** = geoid undulation (separation between ellipsoid and geoid)

| Datum | What Measures It | Typical Use |
|:--|:--|:--|
| **Ellipsoid** | GNSS receiver | Raw GNSS output, geodetic calculations |
| **Geoid** | Gravity measurements, models | Reference for orthometric heights |
| **MSL** | Long-term tide gauge records | Engineering design levels, land survey |
| **LAT** | Tidal harmonic prediction | Nautical charting, navigational safety |

!!! warning "Ellipsoidal Height Is Not Altitude"
    GNSS outputs ellipsoidal height, not height above sea level. Depending on location, the geoid can be up to 100 m above or below the ellipsoid. In the North Sea, the geoid undulation is approximately 40-47 m. A GNSS height of 45 m does not mean you are 45 m above the water.

### Geoid Models

A geoid model provides the undulation value N at any location, allowing conversion from ellipsoidal height to orthometric height.

| Model | Year | Resolution | Global Accuracy (RMS) | Notes |
|:--|:-:|:-:|:-:|:--|
| **EGM2008** | 2008 | 2.5 arc-minutes (~5 km) | ~0.10-0.15 m | Current global standard |
| **EGM96** | 1996 | 15 arc-minutes (~28 km) | ~0.30-0.50 m | Legacy, still in some older software |
| **Regional models** | Various | 1 arc-minute or better | < 0.05 m | Higher accuracy where available |

**EGM2008** is the standard for offshore work. Its accuracy varies by region. In well-surveyed areas (North Sea, Gulf of Mexico), accuracy is typically better than 0.10 m. In remote oceanic areas with sparse gravity data, accuracy may degrade to 0.20-0.30 m.

!!! tip "Local Geoid Models"
    Where available, use local geoid models instead of EGM2008. Examples: OSGM15 (UK), RAG/GRAV (Netherlands), CGG2013a (Canada). These incorporate local gravity data and are significantly more accurate than the global model in their coverage area.

### Datum Transformations in Practice

#### When to Transform

- Converting legacy data from a local datum to WGS84 (or vice versa) for project integration
- Client specification requires delivery in a local datum
- Combining datasets from different eras or sources

#### When NOT to Transform

- All data is already in the same datum
- The "different" datums are actually the same (e.g., WGS84 and ITRF2014 for survey purposes)

#### Verification

Always verify a datum transformation with at least one, preferably three or more, known control points:

1. Take a point with known coordinates in both datums
2. Transform the point using your parameters
3. Compare the result against the known coordinates
4. Residual should be within the expected accuracy of the transformation (typically < 1 m for a regional Helmert, < 0.1 m for a well-fitted local transformation)

### Projection Distortion for Long Distances

For pipeline KP calculations and cable route lengths, UTM scale factor distortion accumulates over distance.

**Example**: A 50 km pipeline at the central meridian of a UTM zone.

- Grid distance: 50,000.000 m
- Scale factor at CM: 0.9996
- Ground distance: 50,000.000 / 0.9996 = 50,020.008 m
- **Difference: 20 m over 50 km**

For routes that traverse the zone away from the central meridian, the scale factor varies along the route. The correction must be computed segment by segment or use an average scale factor.

!!! info "Client Expectations"
    Some clients expect grid distances (UTM), others expect ground distances. Some expect geodesic distances (along the ellipsoid surface). Clarify this at project start. The difference between grid and ground distance can exceed pipeline installation tolerances for long routes.

### Coordinate Order Conventions

!!! danger "The Classic Trap"
    Coordinate order (Lat/Lon vs Lon/Lat) causes more data errors than any other single convention issue. It is invisible in the data, because both latitude and longitude are just numbers.

**The standard (EPSG/ISO 6709)**: Geographic CRS coordinates are ordered **Latitude, Longitude** (Northing, Easting).

**The reality**: Many software packages, GIS systems, and data formats use **Longitude, Latitude** (Easting, Northing) order. This includes GeoJSON, many Python libraries, and some navigation software.

**How to verify**: Take a known point (the vessel alongside a known berth, a platform with published coordinates) and check whether the coordinates plot in the correct location. If the point appears in the wrong ocean, the coordinate order is swapped.

| System/Format | Default Order |
|:--|:-:|
| EPSG geographic CRS | Lat, Lon |
| GeoJSON | Lon, Lat |
| Most GIS software (QGIS, ArcGIS) | Lon, Lat for import |
| Kongsberg SIS | Lat, Lon |
| QINSy | Configurable, verify |
| EIVA NaviPac | Lat, Lon |
| CSV files | Verify every time |

!!! tip "Rule of Thumb"
    If you are importing or exporting coordinates, always verify the order with a known point. Never assume. Label columns explicitly as "Latitude" and "Longitude", not "Y" and "X" or "Coord1" and "Coord2".

---

## :material-wrench: Troubleshooting

### Features Shifted by a Constant Offset

**Symptom**: All features in a dataset are offset by a consistent amount (tens to hundreds of metres) from their true position.

**Cause**: Wrong datum transformation applied, transformation applied in the wrong direction, or double transformation.

**Action**:

1. Check the transformation parameters and direction
2. Verify with a known control point
3. Check if the transformation was applied more than once (common when data passes through multiple software packages)

### Features Offset by ~200 m North-South

**Symptom**: Data appears to be shifted approximately 200 m in the north-south direction.

**Cause**: This is the classic sign of confusing WGS84 with a local datum in the North Sea area (e.g., ED50 to WGS84 shift). The Helmert translation for ED50 is approximately 87 m (X), 98 m (Y), 121 m (Z), which manifests as roughly 100-200 m on the ground depending on direction and location.

**Action**: Verify the datum of the input data and the datum of the output system.

### Pipeline KP Does Not Match Field Measurement

**Symptom**: Computed KP distance differs from taped or wheeled measurement on deck or seabed.

**Cause**: Grid distance vs ground distance. UTM scale factor not applied.

**Action**: Check whether the KP was computed from grid coordinates. If so, apply the scale factor correction. At the central meridian, multiply by 1/0.9996.

### Coordinates Plot in Wrong Location

**Symptom**: Data plots in the wrong hemisphere, wrong ocean, or on land when it should be offshore.

**Cause**: Coordinate order swapped (Lat/Lon vs Lon/Lat), wrong hemisphere sign, or wrong UTM zone.

**Action**:

1. Check coordinate order against a known point
2. Check sign conventions (negative for south/west)
3. Verify the UTM zone number

---

## :material-link-variant: Related Articles

- [TPU and Error Budgets](tpu-error-budgets.md)
- [Tidal Theory and Reduction Methods](../positioning/tidal-reduction-methods.md)
- [GNSS Fundamentals](../positioning/gnss-fundamentals.md)
- [GNSS Accurate Height Check](../positioning/gnss-accurate-height-check.md)

---

## :material-table: Quick Reference

| Parameter | Value |
|:--|:-:|
| WGS84 semi-major axis | 6,378,137 m |
| WGS84 flattening | 1/298.257223563 |
| UTM zone width | 6 degrees |
| UTM zone formula | floor((lon + 180) / 6) + 1 |
| UTM scale factor at CM | 0.9996 |
| UTM true scale distance from CM | ~180 km |
| UTM max distortion at zone edge | ~0.04% |
| EGM2008 resolution | 2.5 arc-minutes (~5 km) |
| EGM2008 global accuracy | ~0.10-0.15 m RMS |
| Helmert parameters | 3 translations, 3 rotations, 1 scale |
| WGS84 vs ITRF difference | < 2 cm (negligible for survey) |
| North Sea geoid undulation (approx) | 40-47 m |

---

!!! quote "References"
    - EPSG Geodetic Parameter Registry (epsg.org)
    - IHO S-44, Edition 6.1.0, Standards for Hydrographic Surveys
    - NGA, EGM2008 Geoid Model Documentation
    - IOGP Guidance Note 373-07-02, Coordinate Conversions and Transformations
    - Snyder, J.P., Map Projections: A Working Manual (USGS Professional Paper 1395)
