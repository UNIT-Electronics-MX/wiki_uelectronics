---
sidebar_position: 2
---
# LiPo Charger Boost & I2C Monitor

The **UNIT LiPo Charger Boost & I2C Monitor** is an advanced charging and monitoring module for single-cell LiPo batteries (3.7V to 4.2V). It integrates a TP4056 charger, an MT3608 voltage booster with output limited to 27V, and a MAX17048 battery monitor over I2C. This module is ideal for applications requiring efficient charging and real-time battery monitoring.

- **LiPo Battery Charging**: Two selectable charging currents (200 mA or 1 A) via solder pads.
- **Step-up Converter MT3608**: Boosts battery voltage or USB Type C input up to 27V with a maximum output power of 4W, depending on input voltage.
- **Battery Monitoring**: The MAX17048 allows real-time battery level and voltage monitoring via I2C.
- **Qwiic/Stemma Compatibility**: Includes a JST connector to power Qwiic modules through the system voltage bus (VSYS -> VBAT-6V max).

---

## Module Features

- **Input Voltage (VIN)**: USB Type C at 5V or via solder pads (maximum 6V).
- **Battery Charging Voltage**: 3.7V nominal (4.2V max).
- **Output Power**: Up to 4W through the MT3608 step-up converter, with efficiency depending on input voltage.
- **Connectors**:
  - 2.0 mm JST for LiPo battery.
  - 2-pin header (2.54 mm) for battery voltage output.
  - 2-pin header (2.54 mm) for step-up voltage output.
  - 5-pin header for the MAX17048 I2C battery monitor: `SDA`, `SCL`, `GND`, `QST` (reset), and `ALT` (alert).
- **Charging Current Selection**: Backside solder pad to select 200 mA or 1 A charging current.
- **Qwiic/Stemma Output Compatibility**: Connects I2C lines (`SDA`, `SCL`) and ground (`GND`) to the Qwiic/Stemma connector. A jumper pad allows routing system voltage (VSYS) to the Qwiic/Stemma bus, which varies between battery voltage (3.7V) and up to 6V (VIN).

:::note
 Since Qwiic operates at 3.3V, a voltage regulator is recommended after the JST output to step down VSYS to 3.3V, protecting connected Qwiic devices.
:::
---

## Pinout

### Front Pinout

<div style={{ textAlign: "center" }}>
  <img src="https://raw.githubusercontent.com/UNIT-Electronics/UNIT-LiPo-Charger-Boost-I2C-Monitor/refs/heads/main/resources/Pinouts/PinoutTop_EN.jpg" style={{ width: "50%" }} />
</div>

### Back Pinout

<div style={{ textAlign: "center" }}>
  <img src="https://raw.githubusercontent.com/UNIT-Electronics/UNIT-LiPo-Charger-Boost-I2C-Monitor/refs/heads/main/resources/Pinouts/PinoutBottom_EN.jpg" style={{ width: "50%" }} />
</div>

---

## Pin Connection Table

| PIN  | Description                   | Function on MAX17048        |
|------|-------------------------------|-----------------------------|
| SDA  | I2C data line                | Connect to SDA on the MCU   |
| SCL  | I2C clock line               | Connect to SCL on the MCU   |
| GND  | Ground                       | Connect to MCU ground       |
| QST  | MAX17048 reset               | Optional reset pin          |
| ALT  | Battery level alert          | Optional alert pin          |

---

## Additional Specifications

- **Step-Up Characteristics**: Output power and current curves for the MT3608 step-up converter with input voltages of 3.4V, 3.5V, and 3.7V. Efficiency depends on input voltage, with:
  - Output near 27V and a battery at 3.4V: Power limited to ~2-3W.
  - Output near 5V: Stable power output around 4W, even with a battery at 3.4V.
  - Battery voltage above 3.7V: Efficiency improves, maintaining ~4W output.

> **Usage Note**: For optimal performance, use a LiPo battery within 3.7V to 4.2V. Alternatively, provide 5V through USB Type C or VIN pads, with a maximum input of 6V.

<div style={{ textAlign: "center" }}>
    <img src="https://raw.githubusercontent.com/UNIT-Electronics/UNIT-LiPo-Charger-Boost-I2C-Monitor/refs/heads/main/resources/Curvas/PvsV.png" width="500px" />
</div>

<div style={{ textAlign: "center" }}>
    <img src="https://raw.githubusercontent.com/UNIT-Electronics/UNIT-LiPo-Charger-Boost-I2C-Monitor/refs/heads/main/resources/Curvas/IvsV.png" width="500px" />
</div>

---

## Fritzing Models

Find the Fritzing models for this module in the [Fritzing repository](https://github.com/UNIT-Electronics/UNIT-LiPo-Charger-Boost-I2C-Monitor/tree/main/resources/Fritzing), making it easy to integrate into your project diagrams.

---

## Purchase Links

You can purchase the **UNIT LiPo Charger Boost & I2C Monitor** directly from [UNIT Electronics](https://www.uelectronics.com).

---

## Documentation

- **MAX1704X Library**: This repository contains a library for controlling the MAX17048 with Arduino IDE and MicroPython. It allows you to read battery voltage, charge percentage, and discharge status.

  [MAX1704X Library Repository](https://github.com/UNIT-Electronics/MAX1704X_lib)

- **Technical Documentation**: Explore more details in the [technical documentation](https://unit-electronics.github.io/UNIT-LiPo-Charger-Boost-I2C-Monitor/).

  ### Compatibility
  - **Arduino IDE**
  - **MicroPython**

---

## Getting Started

### Example in MicroPython

1. **Connections**:
   - Connect `SDA` to the microcontroller's `SDA` pin.
   - Connect `SCL` to the microcontroller's `SCL` pin.
   - Connect `GND` to the microcontroller's `GND`.

2. **Library Installation**:
   - Download the MAX1704X library from the repository and add it to your project.

3. **Example Code**:

```python
from max17048 import MAX17048
from machine import I2C, Pin

i2c = I2C(1, scl=Pin(22), sda=Pin(21))  # Adjust pins as per your MCU
battery_monitor = MAX17048(i2c)

# Read battery voltage
voltage = battery_monitor.get_voltage()
print("Battery Voltage:", voltage, "V")

# Read battery charge percentage
charge = battery_monitor.get_charge()
print("Battery Charge:", charge, "%")
```



## Usage Notes

- **Charging Current**: Use the solder pads to select:
  - 200 mA: Slow charging to extend battery life.
  - 1 A: Fast charging for quicker cycles.

With the **UNIT LiPo Charger Boost & I2C Monitor**, you can monitor battery status, power Qwiic modules, and achieve stable output voltage for applications requiring higher voltage.

:::tip

Start your battery charging and monitoring project today!
:::