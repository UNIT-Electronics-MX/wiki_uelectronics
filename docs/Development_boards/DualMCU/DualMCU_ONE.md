---
sidebar_position: 2
---

# DualMCU ONE

The **UNIT DualMCU-ONE** is a highly versatile development board that integrates the power of two microcontrollers: the ESP32 and the RP2040. Designed for advanced IoT, robotics, and industrial applications, it offers enhanced connectivity, robust power management, and full compatibility with Arduino UNO shields.


:::warning
The DualMCU-ONE operates with 3.3V logic levels instead of the Arduino Uno’s typical 5V.
Make sure any shield or peripheral connected is compatible with 3.3V logic to avoid potential damage.
:::


<div style={{ textAlign: "center" }}>
  <a href="https://uelectronics.com/producto/unit-dualmcu-esp32-rp2040-tarjeta-de-desarrollo/">
    <img src="https://raw.githubusercontent.com/UNIT-Electronics/DualMCU-ONE/refs/heads/main/Resources/IMG_3134.jpg" width="300px" />
    <br/>
    <em>Click here to buy it from the UNIT Electronics store</em>
  </a>
</div>


<table>
  <thead>
    <tr>
      <th>Resource</th>
      <th>Link</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MicroPython Course (English Version)</td>
      <td><a href="https://unit-electronics.github.io/DualMCU_Getting_Started/">https://unit-electronics.github.io/DualMCU_Getting_Started/</a></td>
    </tr>
    <tr>
      <td>MicroPython Course (Spanish Version)</td>
      <td><a href="https://unit-electronics-mx.github.io/DualMCU_Curso_introductorio/index.html">https://unit-electronics-mx.github.io/DualMCU_Curso_introductorio/index.html</a></td>
    </tr>
  </tbody>
</table>

Key improvements over its predecessor, the DualMCU, include:
- SPI communication between the microcontrollers for improved data transfer.
- A USB Type-C hub that replaces the USB communication switch.
- CAN bus connectivity for industrial and automotive environments.
- Integrated connectors compatible with the STEMMA and QWIIC ecosystems.

For more details, check the product pages at:

<table>
  <thead>
    <tr>
      <th>Resource</th>
      <th>Link</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Hardware-DualMCU-ONE</td>
      <td><a href="https://github.com/UNIT-Electronics/DualMCU-ONE/tree/main/Hardware">https://github.com/UNIT-Electronics/DualMCU-ONE/tree/main/Hardware</a></td>
    </tr>
    <tr>
      <td>Product Reference Manual</td>
      <td><a href="https://github.com/UNIT-Electronics/DualMCU-ONE/blob/main/DualMCU-ONE(Product%20Reference%20Manual%20)%5BEN%5D.pdf">https://github.com/UNIT-Electronics/DualMCU-ONE/blob/main/DualMCU-ONE(Product%20Reference%20Manual%20)%5BEN%5D.pdf</a></td>
    </tr>
    <tr>
      <td>DualMCU-ONE Getting Started</td>
      <td><a href="https://unit-electronics.github.io/DualMCU-ONE/index.html">https://unit-electronics.github.io/DualMCU-ONE/index.html</a></td>
    </tr>
  </tbody>
</table>

---

## Pinout

The **DualMCU-ONE** features a wide variety of input/output (I/O) pins that allow you to connect sensors, actuators, and other devices to the board. Below is the pinout of the **DualMCU-ONE**:

<div style={{ textAlign: "center" }}>
  <img src="https://raw.githubusercontent.com/UNIT-Electronics/DualMCU-ONE/refs/heads/main/Hardware/Resources/Pinout_Top_EN.jpg" width="1200px" />
</div>

## Features

- **Microcontrollers**:
  - **RP2040**: Dual-core ARM Cortex-M0+ at 133 MHz, compatible with Arduino UNO headers.
  - **ESP32**: Wi-Fi, Bluetooth, and CAN bus capabilities.

- **USB Connectivity**:
  - Integrated USB Type-C hub for simultaneous communication with both microcontrollers.
  - Additional support for USB devices through JST connectors.

- **Power Supply**:
  - Robust MP1482DS regulator supporting input voltages up to 18V.
  - Provides a stable 5V output to power peripherals.

- **Storage**:
  - Optional MicroSD slot (up to 64GB), connected via the ESP32's QSPI interface.

- **I2C Connectors**:
  - JST-SH connectors compatible with the STEMMA and QWIIC ecosystems.

- **Additional Features**:
  - RGB 2020 LED and WS2812B LED for visual feedback.
  - Optional FPC-24P connector for expanded access to the ESP32's GPIO.

---

## Applications

The **DualMCU-ONE** is ideal for:
- **Internet of Things (IoT)**: Wireless connectivity for smart devices.
- **Education**: Perfect for students and makers exploring advanced microcontrollers.
- **Industrial**: Robust communication via CAN bus for automotive and industrial applications.
- **Prototyping**: Full compatibility with Arduino UNO shields.
- **Robotics**: Multicore processing for complex systems.

---

## Getting Started

The **DualMCU-ONE** supports:
- **Arduino IDE** for the RP2040 and ESP32.
- **MicroPython** and **CircuitPython** using IDEs like Thonny.

For setup and initial projects, refer to the [Getting Started Guide](https://unit-electronics.github.io/DualMCU-ONE/index.html).

---

