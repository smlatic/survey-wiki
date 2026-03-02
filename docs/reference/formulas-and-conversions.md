---
title: Common Formulas and Conversions
category: reference
tags: [formulas, conversions, units, calculations, sound-velocity, coordinates, geometry]
date_added: 2026-03-01
last_reviewed: 2026-03-01
source_type: original
---

# :material-calculator: Common Formulas and Conversions

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Reference</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Quick Reference</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-01</strong></span>
</div>

!!! abstract "Purpose"
    Quick-reference collection of formulas and unit conversions commonly used in offshore hydrographic survey. Covers sound velocity, coordinate conversions, error propagation, acoustic geometry, depth from pressure, bearing and distance, UTM projection, and unit conversion tables.

---

## :material-calendar-check: When to Use

- When performing field calculations (SV, depth, range, bearing, error budgets)
- When converting between units or coordinate formats
- When checking software output against manual calculations
- When writing calibration or survey reports that include derived values

---

## :material-sine-wave: Sound Velocity Formulas

### Simplified Chen-Millero (UNESCO, 1983)

The most commonly used SV formula in oceanography. Computes SV from temperature (T in deg C), salinity (S in PSU/ppt), and pressure (P in dBar):

**SV = 1449.2 + 4.6T - 0.055T^2 + 0.00029T^3 + (1.34 - 0.01T)(S - 35) + 0.016P**

This is a simplified version. The full Chen-Millero equation has ~40 terms. The simplified version is accurate to about 0.1 m/s for typical ocean conditions.

### Del Grosso (1974)

An alternative to Chen-Millero, sometimes preferred at high pressure (deep water):

**SV = 1402.392 + temperature_terms + salinity_terms + pressure_terms + cross_terms**

Del Grosso and Chen-Millero agree to within 0.5 m/s for most ocean conditions. They diverge at pressures above 1000 dBar (~1000 m depth). For deep water (> 1000 m), Del Grosso may be more accurate.

### When to Use Which

| Formula | Best For | Notes |
|:--|:--|:--|
| Chen-Millero (UNESCO) | General use, shallow to moderate depth | Most widely implemented in software |
| Del Grosso | Deep water (> 1000 m) | May be more accurate at high pressure |
| Wilson (1960) | Legacy systems only | Superseded by Chen-Millero. Still found in some older equipment. |
| Medwin (simplified) | Quick estimates | SV = 1449.2 + 4.6T - 0.055T^2 + 0.00029T^3 + (1.34 - 0.01T)(S - 35) + 0.016D |

!!! tip "Quick SV Estimate"
    For a rough field check: SV in seawater at the surface is typically 1490-1530 m/s. In the deep ocean (4000 m) it rises to about 1540-1555 m/s. Fresh water at 20 deg C: 1482 m/s. If your measured SV is outside these ranges, suspect a sensor error.

---

## :material-map-marker: Coordinate Conversions

### Decimal Degrees (DD) to Degrees Minutes Seconds (DMS)

Given DD = 54.567890:

1. Degrees = integer part = 54
2. Remaining = 0.567890 x 60 = 34.0734 minutes
3. Minutes = integer part = 34
4. Seconds = 0.0734 x 60 = 4.404 seconds

**Result: 54 deg 34' 04.404"**

### DMS to Decimal Degrees

Given DMS = 54 deg 34' 04.404":

**DD = 54 + 34/60 + 4.404/3600 = 54.567890**

### Useful Distance Approximations

| At Latitude | 1 deg Latitude | 1 deg Longitude | 1' Latitude | 1' Longitude | 1" Latitude | 1" Longitude |
|:--|:--|:--|:--|:--|:--|:--|
| 0 deg (equator) | 110.574 km | 111.320 km | 1842.9 m | 1855.3 m | 30.715 m | 30.922 m |
| 30 deg | 110.852 km | 96.486 km | 1847.5 m | 1608.1 m | 30.792 m | 26.802 m |
| 60 deg | 111.412 km | 55.800 km | 1856.9 m | 930.0 m | 30.948 m | 15.500 m |

!!! warning "Coordinate Order"
    Different software uses different coordinate order. Always verify which comes first:

    - **Latitude first**: most navigation software, IHO standards, Google Maps
    - **Longitude first (Easting, Northing)**: most GIS software, EPSG convention, WKT format
    - **Easting first**: UTM convention (E, N)

    Getting this wrong results in positions being reflected about the equator or placed in the wrong hemisphere. Always check with a known point.

---

## :material-sigma: Error Propagation (RSS)

### Root Sum of Squares

When combining independent error sources:

**Total_error = sqrt(e1^2 + e2^2 + e3^2 + ... + en^2)**

This applies when errors are independent, random, and normally distributed. If errors are correlated or systematic, RSS underestimates the combined error.

### IHO S-44 TVU Formula

**TVU = sqrt(a^2 + (b x d)^2)**

Where:

- a = constant depth error (independent of depth)
- b = depth-dependent error coefficient
- d = depth in metres

| IHO Order | a (m) | b |
|:--|:--|:--|
| Exclusive | 0.15 | 0.0075 |
| Special | 0.25 | 0.0075 |
| 1a / 1b | 0.50 | 0.013 |
| 2 | 1.00 | 0.023 |

**Worked example (Special Order, 30 m depth):**

TVU = sqrt(0.25^2 + (0.0075 x 30)^2) = sqrt(0.0625 + 0.0506) = sqrt(0.1131) = **0.336 m**

---

## :material-triangle: Acoustic Geometry

### Slant Range to Ground Range and Depth

Given slant range (R) and angle from vertical (theta):

- **Ground range = R x sin(theta)**
- **Depth (below transducer) = R x cos(theta)**

For USBL, the slant range and angles come from the acoustic measurement.

### Ground Range from Slant Range and Altitude (SSS)

**Ground range = sqrt(slant_range^2 - altitude^2)**

### Target Height from SSS Shadow

**Target height = (shadow_length x altitude) / (range_to_shadow_end - range_to_target)**

### USBL Position Error

The horizontal position error from a USBL measurement at slant range R with angular accuracy sigma_theta:

**Horizontal error (1-sigma) = R x sin(sigma_theta)**

For small angles: **Horizontal error approximately equals R x sigma_theta (in radians)**

Example: 1000 m slant range, 0.1 deg angle accuracy:
Error = 1000 x sin(0.1 deg) = 1000 x 0.001745 = **1.75 m**

### Layback (Towed Systems)

**Layback = sqrt(cable_out^2 - towfish_depth^2)**

Assumes straight cable (no catenary). Reasonable approximation when cable is taut.

---

## :material-water: Depth from Pressure

**Depth = P / (rho x g)**

Where:

- P = pressure in Pascals (Pa)
- rho = seawater density (typically 1025 kg/m^3)
- g = gravitational acceleration (9.81 m/s^2)

**Practical version:**

**Depth (m) = Pressure (dBar) / 1.006** (for seawater at mid-latitudes)

Or more precisely: **Depth (m) = Pressure (dBar) x 0.993** (approximate, latitude-dependent)

!!! info "Pressure Units"
    1 dBar approximately equals 1 m of seawater. This is convenient but not exact. The error is about 0.6% at the surface and increases with depth due to compressibility.

    1 bar = 10 dBar = 100 kPa = 14.504 psi

---

## :material-compass: Bearing and Distance Between Two Points

### Simplified (Short Distances, < 100 km)

For two points (lat1, lon1) and (lat2, lon2) in decimal degrees:

**dN = (lat2 - lat1) x 111120** (in metres, approximate)

**dE = (lon2 - lon1) x 111120 x cos(average_latitude)** (in metres, approximate)

**Distance = sqrt(dN^2 + dE^2)**

**Bearing = atan2(dE, dN)** (result in radians, convert to degrees)

### Vincenty Formula (Accurate, Any Distance)

For precise calculations over any distance on the ellipsoid, use the Vincenty inverse formula. This is implemented in all survey software and most programming libraries. The key advantage of Vincenty over the simplified method is accuracy on long baselines and near the poles.

---

## :material-grid: UTM Projection

### UTM Zone from Longitude

**Zone = floor((longitude + 180) / 6) + 1**

Exception zones exist for Norway (32V extended) and Svalbard (31X, 33X, 35X, 37X).

### Central Meridian from Zone

**Central meridian = (zone x 6) - 183**

### UTM Scale Factor

At the central meridian: **k0 = 0.9996**

At the zone edges (3 deg from CM): **k approximately equals 1.0004** (varies with latitude)

**Scale factor error at zone edge:** approximately 0.04% (40 mm per 100 m). This matters for long pipeline distances.

### Convergence Angle

The angle between grid north and true north at a given point. Zero at the central meridian, increases with distance from CM and with latitude.

**Approximate convergence = (longitude - central_meridian) x sin(latitude)**

Result in degrees (for small convergence angles).

**Worked example:**

Point at 60 deg N, 3 deg E. UTM Zone 31 (CM = 3 deg E).

Convergence = (3 - 3) x sin(60) = **0 deg** (point is on the central meridian).

Point at 60 deg N, 6 deg E (zone edge):

Convergence = (6 - 3) x sin(60) = 3 x 0.866 = **2.6 deg**

!!! warning "Convergence and Heading"
    Grid heading and true heading differ by the convergence angle. Pipeline KP bearings are usually grid bearings. If applying heading from a gyro (which measures true north) to grid coordinates, the convergence correction must be applied. Forgetting this produces systematic cross-track errors that increase with distance from the central meridian.

---

## :material-scale-balance: Unit Conversion Tables

### Length

| From | To | Multiply By |
|:--|:--|:--|
| Metres | Feet | 3.28084 |
| Feet | Metres | 0.30480 |
| Metres | Fathoms | 0.54681 |
| Fathoms | Metres | 1.82880 |
| Nautical miles | Metres | 1852 |
| Metres | Nautical miles | 0.000540 |
| Kilometres | Nautical miles | 0.539957 |
| Inches | Metres | 0.0254 |

### Speed

| From | To | Multiply By |
|:--|:--|:--|
| Knots | m/s | 0.51444 |
| m/s | Knots | 1.94384 |
| Knots | km/h | 1.852 |
| km/h | Knots | 0.539957 |
| m/s | km/h | 3.6 |

### Pressure

| From | To | Multiply By |
|:--|:--|:--|
| Bar | PSI | 14.5038 |
| PSI | Bar | 0.06895 |
| Bar | dBar | 10 |
| dBar | kPa | 10 |
| Bar | kPa | 100 |
| Atmosphere | Bar | 1.01325 |
| Atmosphere | dBar | 10.1325 |

### Angles

| From | To | Multiply By |
|:--|:--|:--|
| Degrees | Radians | 0.017453 (pi/180) |
| Radians | Degrees | 57.29578 (180/pi) |
| Degrees | Mils (NATO) | 17.7778 |
| Mils (NATO) | Degrees | 0.05625 |
| Degrees | Gradians | 1.11111 |
| Arc minutes | Degrees | 1/60 |
| Arc seconds | Degrees | 1/3600 |

### Temperature

- **Celsius to Fahrenheit**: F = (C x 9/5) + 32
- **Fahrenheit to Celsius**: C = (F - 32) x 5/9

---

## :material-link-variant: Related Articles

- [TPU and Error Budgets](tpu-error-budgets.md)
- [Coordinate Systems and Datums](coordinate-systems-datums.md)
- [Sound Velocity Operations](../calibration/sound-velocity-operations.md)
- [Acceptance Criteria Reference](acceptance-criteria-reference.md)
- [Tidal Theory and Reduction Methods](../positioning/tidal-reduction-methods.md)

---

!!! quote "References"
    - IHO S-44, Edition 6.1.0, Standards for Hydrographic Surveys
    - Chen & Millero (1977), Speed of sound in seawater at high pressures, JASA 62(5)
    - Del Grosso (1974), New equation for speed of sound in natural waters, JASA 56(4)
    - Vincenty (1975), Direct and Inverse Solutions of Geodesics on the Ellipsoid
    - DMA Technical Manual 8358.2, Datums, Ellipsoids, Grids, and Grid Reference Systems
