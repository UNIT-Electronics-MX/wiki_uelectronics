---
sidebar_position: 1
---

# Unit Electronics Package Installation Guide

This guide provides a step-by-step walkthrough for installing the official board support packages (BSPs) required to program development boards from **UNIT Electronics** using the Arduino IDE. These packages ensure seamless integration with the Arduino environment and enable full access to each board’s features.

Supported boards include:
- [**DualMCU-ONE** (ESP32 + RP2040)](https://uelectronics.com/producto/unit-dualmcu-one-esp32-rp2040/)
- [**Cocket Nova CH552**](https://uelectronics.com/producto/unit-cocket-nova-ch552g-tarjeta-de-desarrollo/)
- [**Pulsar C6** (ESP32-C6)](https://uelectronics.com/producto/unit-pulsar-esp32-c6/)
- **Pulsar H2** (ESP32-H2)
- **TouchDot S3** (ESP32-S3 Mini)

:::tip
For detailed specifications and documentation, visit the [**UNIT Electronics website**](https://uelectronics.com/).
:::


## Prerequisites

Before you begin, ensure you have the following tools installed:

- [**Arduino IDE**](https://www.arduino.cc/en/software) – Required to upload and manage sketches.
- [**CH34x USB Drivers**](https://www.wch-ic.com/downloads/CH341SER_EXE.html) – Required for USB communication with some boards (e.g., CH552, ESP32).


## Quick Installation for ESP32, RP2040 and CH552 Boards

Add the following URLs to the **Additional Board Manager URLs** field in Arduino IDE preferences:

```plaintext
https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-ESP32-Arduino-Package/main/package_Uelectronics_esp32_index.json
https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-RP2040-Arduino-Package/main/package_Uelectronics_rp2040_index.json
https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-CH552-Arduino-Package/refs/heads/develop/package_duino_mcs51_index.json
````

After adding the URLs:

1. Go to **Tools → Board → Boards Manager**.
2. Search for **UNIT Electronics**.
3. Click **Install** for the relevant packages.

Alternatively, you can install the packages manually using the steps below.

## 1. Installing the DualMCU-ONE Board Package

The **DualMCU-ONE** board includes both an ESP32 and an RP2040 microcontroller. You’ll need to install packages for both.

### Step 1: Install the ESP32 Board Package

1. Open **Arduino IDE**.
2. Navigate to **File → Preferences**.
3. In the **Additional Board Manager URLs** field, enter:

   ```plaintext
   https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-ESP32-Arduino-Package/main/package_Uelectronics_esp32_index.json
   ```
4. Click **OK**.
5. Go to **Tools → Board → Boards Manager**.
6. Search for **DualMCU**.
7. Click **Install**.
8. Once installed, select **DualMCU** from the **Board** menu.

### Step 2: Install the RP2040 Board Package

1. Repeat the steps above, but this time enter the following URL:

   ```plaintext
   https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-RP2040-Arduino-Package/main/package_Uelectronics_rp2040_index.json
   ```
2. Search for **UNIT RP2040** in the Boards Manager.
3. Install the package and select **RP2040** from the **Board** menu.

#### Example Screenshot

<div style={{ textAlign: "center" }}>
  <img src="https://raw.githubusercontent.com/Rabadan-uelectronics/DualMCU-RP2040-Arduino-Package/refs/heads/main/releases/download/0.0.0/BoardsManager.png" width="600px" />
</div>


## 2. Installing the Cocket Nova CH552 Board Package

To program the **Cocket Nova CH552**, follow these steps:

1. Open **Arduino IDE**.
2. Navigate to **File → Preferences**.
3. In the **Additional Board Manager URLs** field, add:

   ```plaintext
   https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-CH552-Arduino-Package/refs/heads/develop/package_duino_mcs51_index.json
   ```
4. Click **OK**.
5. Open **Tools → Board → Boards Manager**.
6. Search for **Cocket Nova**.
7. Click **Install**.
8. After installation, select **Cocket Nova** from the **Board** menu.

#### Example Screenshot

<div style={{ textAlign: "center" }}>
  <img src="https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-CH552-Arduino-Package/refs/heads/main/images/board_json.png" width="600px" />
</div>

