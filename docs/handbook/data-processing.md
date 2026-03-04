---
title: "Data Processing"
tags:
  - handbook
  - beginner
  - data-processing
  - qinsy
  - qimera
  - gis
---

# Chapter 8: Data Processing

## From Raw Data to Refined Results

You've collected gigabytes of data -- ping after ping of bathymetry, side scan sonar imagery, and sub-bottom profiles. Right now it's a messy collection of numbers and fuzzy images. The job of data processing is to turn all of that into polished charts, maps, and 3D models that people can actually use.

As a trainee, you'll start small: organizing files, running backups, confirming that data streams are recording properly. Over time you'll learn to use the software yourself -- filtering noise, applying corrections, aligning datasets. The senior staff and project leads set the processing standards and deliverable formats, but the hands-on skills you build here are the foundation for everything that comes later.

## Software Overview: Qinsy, Qimera, SIS, and More

Different tools serve different purposes in the processing chain:

- **Qinsy & Qimera:** Widely used for acquisition and processing, turning raw bathymetry into crisp surfaces. Qinsy handles real-time data acquisition, while Qimera is its companion for post-processing and visualization.
- **SIS (Seafloor Information System):** Often paired with Kongsberg multibeam systems, providing real-time visualization and data quality checks.
- **GIS (Geographic Information Systems):** Software like ArcGIS or QGIS helps you layer and analyze spatial data, creating maps that combine survey results with other geographical information.

You won't know your way around these programs on day one. Start by watching how others use them. Pay attention to which menus they reach for, which parameters they adjust, and why they pick one tool over another for a given task. That awareness comes before proficiency -- and both come before mastery.

### Survey Manager in Qinsy

One tool you'll encounter early is Qinsy's **Survey Manager**. This is the project setup module where you define your vessel, sensors, offsets, and coordinate systems -- everything the software needs before data acquisition begins. You're telling the system what equipment you have, where it sits on the vessel, and what coordinate reference the project uses. During mobilization, senior surveyors handle this setup. Watch closely, because understanding Survey Manager means understanding how all your equipment connects to the data.

## Creating Charts and 3D Visualizations

Processing isn't just about cleaning up noise. Your final deliverables go to clients who may not be surveyors. They need clear visuals: contour maps, shaded relief images, 3D perspectives of the seabed.

You'll learn to color-code depths, highlight features, and produce fly-through animations. The choice of visualization techniques usually involves input from clients, senior surveyors, and the project manager, but you can contribute by learning the tools well enough to suggest improvements and work efficiently.

!!! note "A Note on Online vs Offline Work"
    Data processing and visualization are typically handled by the offline team or during post-survey phases. As a trainee, you'll see this more in the later stages of a project. The online team focuses on real-time acquisition and QC, while the offline team takes that raw data and refines it into deliverables. Both roles are essential, and understanding the handoff between them is key to smooth operations.

## CAD, GIS, and Beyond

Sometimes clients need more than maps. They need detailed plans, engineering drawings, or spatial analyses. That's where CAD (Computer-Aided Design) and GIS step in. CAD tools produce precise drawings of structures, routes, or layouts. GIS lets you analyze spatial relationships -- how close a pipeline sits to a protected reef, for example.

As a trainee, you'll likely start with basic GIS functions: layering data, adding labels, getting comfortable with the interface before tackling complex spatial queries. When decisions come up around coordinate systems for final deliverables or specialized analyses, project leads will consult with GIS specialists or engineers before locking anything in.

!!! tip "Go Deeper"
    - [Survey Reporting Fundamentals](../reporting/survey-reporting-guide.md)

---

*Next up: [Calibration & Verification](calibration-verification.md) - making sure your equipment is telling the truth.*
