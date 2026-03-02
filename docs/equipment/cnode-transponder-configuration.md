---
title: cNODE miniS Transponder Configuration
category: equipment
tags: [cnode, transponder, kongsberg, USBL, APOS, acoustic positioning, ROV, responder, FSK, cymbal]
equipment: [Kongsberg cNODE miniS, HiPAP, APOS Software, ROV]
date_added: 2026-03-02
source_type: converted_procedure
---

# :material-access-point: cNODE miniS Transponder Configuration

<div class="page-meta" markdown>
<span class="meta-item">:material-tag-outline: <strong>Equipment</strong></span>
<span class="meta-item">:material-format-list-checks: <strong>Configuration Guide</strong></span>
<span class="meta-item">:material-calendar: <strong>2026-03-02</strong></span>
</div>

!!! abstract "Purpose"
    Configuration and installation guide for Kongsberg cNODE miniS transponders used for acoustic positioning with HiPAP USBL systems. Covers transponder software configuration, ROV mounting and initialisation, responder mode setup, and APOS software configuration for beacon tracking.

---

## :material-information-outline: Overview

This guide covers the operation and installation of Kongsberg cNODE miniS transponders for use with HiPAP USBL systems. The following tasks are covered:

- Transponder configuration
- ROV installation
- APOS settings

!!! info "Relevance"
    Tech department, Senior Surveyor.

---

## :material-cog: Transponder Configuration Software

Before first use the cNODE transponder should be connected to a PC via the supplied serial communication cable. The software enables the user to change basic functions as well as view diagnostic information.

### Connection Hardware

Locate the PC communication cable which is supplied to the vessel.

![Communication cable kit location](../assets/images/cnode-transponder/cnode-transponder-01.jpg)

The kit should contain:

- 2x serial to MCIL cables
- 1x serial to USB cable
- 1x USB dongle containing software

![Serial to MCIL cables](../assets/images/cnode-transponder/cnode-transponder-02.jpg)

![Cable connectors](../assets/images/cnode-transponder/cnode-transponder-03.jpg)

### Software Operation

1. Install the software supplied on the Kongsberg USB stick

2. Connect the serial cable to the PC via USB or serial port depending on which type is available

    !!! tip
        Take note of the serial port allocated to the USB to serial adaptor using Device Manager.

3. Connect the cNODE transponder to the supplied interface cable

4. Start the Transponder Configurator software

    ![Transponder Configurator Software](../assets/images/cnode-transponder/cnode-transponder-04.jpg)

5. Click on the **Options** tab and select the correct COM port to communicate with the transponder, then click **OK**

    ![COM Port Selection](../assets/images/cnode-transponder/cnode-transponder-05.jpg)

6. Select the **Transponder Configuration** tab and click **Get config from Tp**. If communication is successful the page will auto-populate with the transponder values as shown below. If the boxes turn red then communication has failed, likely caused by incorrect COM port selection.

    ![Transponder Configuration Values](../assets/images/cnode-transponder/cnode-transponder-06.jpg)

7. From this page you can change the **FSK channel**, **Cymbal channel** and the **acoustic mode**. The preferred mode is typically Cymbal.

8. Following any changes, click the **Download new configuration** tab to confirm changes

9. Close software and disconnect transponder -- transponder is ready for use

---

## :material-robot-industrial: ROV Installation

The transponder is mounted to the ROV via a dedicated mounting bracket as pictured below:

![ROV Mounting Bracket](../assets/images/cnode-transponder/cnode-transponder-07.jpg)

The transponder should be inserted into the bracket from the underside. Once in position, the long bolt with wing nut at the lower part of the bracket should be placed in position to prevent the transponder from moving.

!!! warning "Do Not Over-Tighten"
    There is a compression bolt approximately midway up the bracket. Do not over-tighten this bolt as it may result in damage to the outer cover of the transponder.

### Transponder Initialisation

To enable the cNODE into **transponder mode**, place the red dummy plug into the cNODE bulkhead receptacle.

### Responder Mode

To enable **responder mode**:

1. Remove the red dummy plug
2. Connect the responder cable which connects to the ROV POD
3. Blank the red dummy plug using a **MCIL8M dummy plug** to prevent water ingress

!!! info
    Two interface cables are required to connect the responder to the ROV: a primary jumper cable and a secondary jumper cable connecting to the cNODE.

---

## :material-radar: HiPAP APOS Configuration

APOS software is used to control beacon tracking and modes. It also contains inputs for GPS (typically from POS MV), motion data (from a vessel Seapath MRU), and PPS pulse from the primary system.

On most vessel setups, offsets are defined and output to QINSy as a **PSIMSSB driver**. This decodes the USBL X Y Z data relative between the HiPAP transducer and beacon (responder or transponder).

!!! info "QINSy Database Requirements"
    - A HiPAP node and offset to CRP are required in the QINSy database
    - Relative offsets to CRP are required
    - The Z value should be mapped to the extended pole distance
    - SSBL output is Local Position Cartesian X/Y
    - Consult the QINSy computation setup to ensure correct beacon position is sent to the INS subsea

### APOS Main Interface

![APOS Interface Overview](../assets/images/cnode-transponder/cnode-transponder-08.jpg)

### APOS Overview

![APOS Overview - Beacon Buttons and SSBL Wizard](../assets/images/cnode-transponder/cnode-transponder-09.png)

The bottom row displays beacons (click to activate). The top row shows options including the important **SSBL wizard** shortcut icon.

![APOS Beacon Display](../assets/images/cnode-transponder/cnode-transponder-10.png)

### GPS Input

![GPS Input Configuration](../assets/images/cnode-transponder/cnode-transponder-11.png)

Input GPS 1 -- usually also a redundant GPS input.

### PPS and ZDA Timing

![PPS Pulse and ZDA Input](../assets/images/cnode-transponder/cnode-transponder-12.png)

PPS pulse and ZDA input to HiPAP positioning system. Should be identical to QINSy pulse. Time sync flashes between blue and green.

### Network Settings

![Network Settings for I/O Ports](../assets/images/cnode-transponder/cnode-transponder-13.png)

Network settings for I/O on ports.

### Interface Options

![Interface Options - Transponder Beam Angles](../assets/images/cnode-transponder/cnode-transponder-14.png)

Options for interfaces -- configure transponder for beam angles. External interfaces for GPS, PPS pulse and ZDA input to HiPAP positioning system.

### Transceiver Configuration

APOS configure transceiver:

![Select and Edit System](../assets/images/cnode-transponder/cnode-transponder-15.png)

Select and edit system.

### Search Sector

![Search Sector Configuration](../assets/images/cnode-transponder/cnode-transponder-16.png)

!!! tip "Search Sector Configuration"
    Configure search sector as per survey requirements. When close, angles can be reduced. Increase when towing equipment or if ROV/seabed beacons are further from HiPAP pole.

### GPS and MRU Inputs

![GPS and MRU Inputs](../assets/images/cnode-transponder/cnode-transponder-17.png)

GPS and MRU inputs from Seapath and POS MV.

### Offsets

![Offsets in APOS](../assets/images/cnode-transponder/cnode-transponder-18.png)

Offsets in APOS set to QINSy node.

### Adding a Beacon (SSBL Wizard)

![SSBL Wizard](../assets/images/cnode-transponder/cnode-transponder-19.png)

SSBL wizard used to add a beacon to HiPAP.

![Beacon Type, Mode and Channel](../assets/images/cnode-transponder/cnode-transponder-20.png)

Beacon type, mode (FSK or Cymbal) and channel for cNODE.

### MST Configuration

![MST Config - Channel Matching](../assets/images/cnode-transponder/cnode-transponder-21.png)

MST config -- set channel matching beacon number.

### ROV Configuration

![ROV Config Recommendations](../assets/images/cnode-transponder/cnode-transponder-22.png)

HiPAP recommended ROV configuration settings.

### Responder Settings

![Responder Configuration](../assets/images/cnode-transponder/cnode-transponder-23.png)

Responder settings: set drive number, powered by ROV control panel.
