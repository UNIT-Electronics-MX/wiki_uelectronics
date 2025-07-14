---
sidebar_position: 9
---

# Buzzer Module


<div  style={{ textAlign: "center" }}>
    <a href="#"><img src="https://img.shields.io/badge/version-1.0-blue.svg" alt="Version"/></a>
    <a href="#"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License"/></a>
    <br/>
</div>

<div  style={{ textAlign: "center" }}>
    <a href="https://github.com/UNIT-Electronics-MX/unit_buzzer_module/tree/main">
        <img src="https://raw.githubusercontent.com/UNIT-Electronics-MX/unit_buzzer_module/refs/heads/main/hardware/resources/unit_top_ue0088_modulo_buzzer_v_1_1_0.png" width="500px" alt="UNIT Buzzer Module"/><br/>
        UNIT Buzzer Module
    </a>
</div>


This module is a compact, easy-to-use **passive** buzzer component designed for embedded systems and prototyping. It features a standardized 3-pin interface: **VCC (5V)**, **Signal**, and **GND**, allowing seamless integration with a variety of microcontrollers, such as `Arduino`, `ESP32`, `CH552`, and `STM32` boards.

> **_NOTE:_** The buzzer onboard can generate audible signals for use in **alarms**, **notifications**, **timers**, and **user feedback systems**. Its design includes a pre-mounted drive circuit, enabling direct digital control from microcontroller GPIO pins.


## Features

- 🧩 3-pin standard interface: `+5V`, `Signal`, `GND`
- 🔊 Built-in buzzer (active or passive)
- 📏 Compact footprint with mounting hole


## Applications

- Fire or Gas Detection Alarm System
- Elderly Health Monitoring System
- Secure Access Control with Intrusion Alerts using RFID
- Automotive Diagnostic Panel
- Smart Irrigation System with Fault Alerts
- Autonomous Drone or Robot Alert System


## 🔄 Alert Priority System (Optional) 
- 🔴 Continuous tone → Critical failure
- 🟡 Intermittent tone → Warning or moderate event
- 🔵 Short beep → Event confirmation or feedback


> 🔧 Note: use **PWM signals** to generate tones.
<div style={{ textAlign: "center" }}>

    <img src="https://raw.githubusercontent.com/UNIT-Electronics-MX/unit_buzzer_module/refs/heads/main/hardware/resources/sonido.gif" alt="Sound Icon" width="100"/>
</div>

