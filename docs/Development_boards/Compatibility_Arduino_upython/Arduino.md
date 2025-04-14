---
sidebar_position: 1
---

# Unit Electronics Package Installation Guide


This guide provides step-by-step instructions for installing the necessary board support packages to program the **DualMCU-ONE/DualMCU** (RP2040 + ESP32) and **Cocket Nova CH552** development boards using the Arduino IDE. These packages enable development within the Arduino environment, ensuring smooth integration with your hardware.

---

## Prerequisites

Before proceeding, ensure you have the following tools installed:

- **[Arduino IDE](https://www.arduino.cc/en/software)** – Required for programming the boards.
- **[USB Drivers](https://www.wch-ic.com/downloads/CH341SER_EXE.html)** – Required for board communication.
- **Board Support Packages:**
  - **[DualMCU-ONE (ESP32 + RP2040)](https://uelectronics.com/producto/unit-dualmcu-one-esp32-rp2040/)**
  - **[Cocket Nova CH552](https://uelectronics.com/producto/unit-cocket-nova-ch552g-tarjeta-de-desarrollo/)**

---
## Quick Installation
Copy and paste the following URLs into the **Additional Board Manager URLs** field in the Arduino IDE preferences:
```bash
https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-ESP32-Arduino-Package/main/package_Uelectronics_esp32_index.json
https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-RP2040-Arduino-Package/main/package_Uelectronics_rp2040_index.json
https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-CH552-Arduino-Package/refs/heads/develop/package_duino_mcs51_index.json
```
Search for the **Unit Electronics** boards in the **Boards Manager** and install all the necessary packages.

or install the packages manually by following the steps below.  


## 1. Installing the DualMCU-ONE Board Package step by step

### **Step 1: Install ESP32 Package**

1. Open the **Arduino IDE**.
2. Navigate to **File > Preferences**.
3. In the **Additional Board Manager URLs** field, enter the following URL:

   ```
   https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-ESP32-Arduino-Package/main/package_Uelectronics_esp32_index.json
   ```
4. Click **OK** to save the preferences.
5. Go to **Tools > Board > Boards Manager**.
6. Search for **DualMCU**.
7. Click **Install**.
8. Once installed, select **DualMCU** from the **Boards** menu.

### **Step 2: Install RP2040 Package**

1. Open the **Arduino IDE**.
2. Navigate to **File > Preferences**.
3. In the **Additional Board Manager URLs** field, enter the following URL:

   ```
   https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-RP2040-Arduino-Package/main/package_Uelectronics_rp2040_index.json
   ```
4. Click **OK** to save the preferences.
5. Go to **Tools > Board > Boards Manager**.
6. Search for **RP2040**.
7. Click **Install**.
8. Once installed, select **RP2040** from the **Boards** menu.

#### **Example Screenshot**
<div style={{ textAlign: "center" }}>
    <img src="https://raw.githubusercontent.com/Rabadan-uelectronics/DualMCU-RP2040-Arduino-Package/refs/heads/main/releases/download/0.0.0/BoardsManager.png" width="600px" />
    <br/>
</div>

---

## 2. Installing the Cocket Nova CH552 Board Package

To program the **Cocket Nova CH552** board using the Arduino IDE, follow these steps:

1. Open the **Arduino IDE**.
2. Navigate to **File > Preferences**.
3. In the **Additional Board Manager URLs** field, enter the following URL:

   ```
   https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-CH552-Arduino-Package/refs/heads/develop/package_duino_mcs51_index.json
   ```
4. Click **OK** to save the preferences.
5. Go to **Tools > Board > Boards Manager**.
6. Search for **Cocket Nova**.
7. Click **Install**.
8. Once installed, select **Cocket Nova** from the **Boards** menu.

#### **Example Screenshot**
<div style={{ textAlign: "center" }}>
    <img src="https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-CH552-Arduino-Package/refs/heads/main/images/board_json.png" width="600px" />
    <br/>
</div>

:::tip

You have successfully installed the necessary packages to program the **DualMCU-ONE** (ESP32 + RP2040) and **Cocket Nova CH552** development boards in the Arduino IDE. You are now ready to start developing your projects!

For additional documentation and project ideas, visit **[UNIT Electronics](https://uelectronics.com/)**.

