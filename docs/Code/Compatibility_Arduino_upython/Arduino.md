---
sidebar_position: 1
---

# Unit Electronics – Board Package Installation Guide

This guide walks you through the installation of official board support packages (BSPs) to program development boards from **UNIT Electronics** using the Arduino IDE. These packages enable full hardware access and seamless integration within the Arduino environment.

## Supported Boards

- [**DualMCU-ONE** (ESP32 + RP2040)](https://uelectronics.com/producto/unit-dualmcu-one-esp32-rp2040/)
- [**Pulsar C6** (ESP32-C6)](https://uelectronics.com/producto/unit-pulsar-esp32-c6/)
- **Pulsar H2** (ESP32-H2)
- **TouchDot S3** (ESP32-S3 Mini)
- [**Cocket Nova CH552**](https://uelectronics.com/producto/unit-cocket-nova-ch552g-tarjeta-de-desarrollo/)

:::tip
For technical specs and board documentation, visit the [**UNIT Electronics website**](https://uelectronics.com/).
:::

---

## Prerequisites

Before installing the board packages, ensure you have the following:

- [**Arduino IDE**](https://www.arduino.cc/en/software) – Required for code upload and board management.
- [**CH34x USB Drivers**](https://www.wch-ic.com/downloads/CH341SER_EXE.html) – Needed for serial communication with boards like ESP32.
- [**CH375 USB Drivers**](https://www.wch-ic.com/downloads/CH372DRV_EXE.html) – Required for boards like CH552.

---

## Quick Setup (All Boards)

To install support for all UNIT boards, add the following URLs to the **Additional Board Manager URLs** in Arduino IDE:

```plaintext
https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-ESP32-Arduino-Package/main/package_Uelectronics_esp32_index.json
https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-RP2040-Arduino-Package/main/package_Uelectronics_rp2040_index.json
https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-CH552-Arduino-Package/refs/heads/develop/package_duino_mcs51_index.json
````

**Steps:**

1. Open **Arduino IDE** → go to **File → Preferences**.
2. Paste the URLs into **Additional Board Manager URLs**.
3. Go to **Tools → Board → Boards Manager**.
4. Search for **UNIT Electronics** and click **Install** for the desired packages.

---

## 1. ESP32 & RP2040 Board Installation

Boards such as **DualMCU-ONE** require installing both the ESP32 and RP2040 packages.

### A. Install ESP32 Package

1. Go to **File → Preferences**.
2. Add:

   ```plaintext
   https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-ESP32-Arduino-Package/main/package_Uelectronics_esp32_index.json
   ```
3. Open **Boards Manager** and search for **UNIT ESP32**.
4. Click **Install**, then select your ESP32-based board (e.g., **DualMCU ESP32**).

### B. Install RP2040 Package

1. Add this URL to **Preferences**:

   ```plaintext
   https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-RP2040-Arduino-Package/main/package_Uelectronics_rp2040_index.json
   ```
2. Open **Boards Manager** and search for **UNIT RP2040**.
3. Click **Install**, then select the appropriate **RP2040** board.

#### Screenshot

<div style={{ textAlign: "center" }}>
  <img src="https://raw.githubusercontent.com/Rabadan-uelectronics/DualMCU-RP2040-Arduino-Package/refs/heads/main/releases/download/0.0.0/BoardsManager.png" width="600px" />
</div>

---

## 2. CH552 Board Installation – Cocket Nova

Follow these steps to install support for **Cocket Nova CH552**:

1. Open **Arduino IDE → File → Preferences**.
2. Add the CH552 package URL:

   ```plaintext
   https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-CH552-Arduino-Package/refs/heads/develop/package_duino_mcs51_index.json
   ```
3. Open **Boards Manager**, search for **Cocket Nova**.
4. Click **Install**, then select **Cocket Nova (CH552)** in the board list.

#### Screenshot

<div style={{ textAlign: "center" }}>
  <img src="https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-CH552-Arduino-Package/refs/heads/main/images/board_json.png" width="600px" />
</div>
```

