---
title: "Coordinate Systems"
tags:
  - handbook
  - beginner
  - geodesy
  - datums
  - projections
---

# Chapter 4: Coordinate Systems

## Understanding Earth's Shape

Earth isn't a perfect sphere. It's an oblate spheroid -- fatter at the equator, slightly flattened at the poles -- and its actual surface is irregular due to variations in gravity and mass distribution. The technical term for this gravity-defined shape is the geoid.

For practical surveying, we don't work with the geoid directly. Instead, we use mathematical models called ellipsoids that approximate Earth's shape, smoothing out the irregularities into something we can compute with. You don't need to memorize the math behind them, but you do need to know which ellipsoid and datum your project uses. Get that wrong and every position you record will be offset from reality.

## Datums, Projections, and Coordinate Systems

Mapping a 3D surface onto a flat screen or chart requires three concepts working together: datums, projections, and coordinate systems.

- **Datums** define the reference framework for measurements. **WGS84** is the most common global datum and the one used by GPS. Regional datums also exist (NAD83 in North America, ETRS89 in Europe) because a locally optimized model can be more accurate for a specific area.

- **Projections** are methods for flattening the curved Earth onto a 2D surface. Every projection distorts something -- area, shape, distance, or direction. For offshore work, **UTM (Universal Transverse Mercator)** is the standard. UTM divides the world into 60 zones, each 6 degrees wide, giving you metric coordinates to work with.

- **Coordinate Systems** tie it all together. Geographic coordinates (latitude and longitude in degrees) are used for global references. Projected coordinates (eastings and northings in meters) are what you'll use for day-to-day survey work.

!!! warning "Why This Matters"
    Getting the datum wrong means all your positions are off. Mixing up WGS84 and a local datum can introduce errors of tens or even hundreds of meters. Always confirm the coordinate reference system in the project specification before you start work.

### Key Takeaways

- Earth isn't a perfect sphere; we use ellipsoids and datums to approximate its shape for calculations
- Always confirm which datum and projection your project uses before starting any work
- WGS84 is the most common global datum you'll encounter; UTM is the most common projection for offshore work
- Getting the datum wrong means all your positions are wrong, so double-check this early
- When in doubt, ask your Party Chief or project lead which coordinate reference system the project spec requires

!!! tip "Go Deeper"
    For the full technical reference on coordinate systems, datums, and projections:

    - [Coordinate Systems and Datums](../reference/coordinate-systems-datums.md)

---

*Next up: [Positioning Technologies](positioning-technologies.md) -- from satellites in space to acoustic pulses underwater, how we figure out where things actually are.*
