---
sidebar_position: 2
---

# Micropython Compatibility Guide

:::caution
 Cocket Nova CH552 is not supported by [MicroPython](https://www.micropython.org/)
:::

This guide provides step-by-step instructions for firmware installation and board setup to use the **DualMCU-ONE/DualMCU** (RP2040 + ESP32) development boards with Micropython. These instructions will help you get started with [MicroPython](https://www.micropython.org/) on your board and explore its features.


[Micropython](https://micropython.org/) is a lightweight implementation of Python 3 optimized for microcontrollers and embedded systems. It provides an interactive prompt, allowing users to run Python code directly on the board, making it an excellent choice for rapid prototyping and development.

How to install [MicroPython](https://www.micropython.org/) on the DualMCU-ONE/DualMCU board:


# Prerequisites 

Before proceeding, ensure you have the following tools installed:

- **MicroPython Firmware for ESP32**  
  [micropython_uelectronics_version2025_DualMCU.bin](https://github.com/UNIT-Electronics-MX/ecosistema-de-desarrollo-unit/releases/download/Micropython_by_uelectronics/micropython_uelectronics_version2025_DualMCU.bin)

- **MicroPython Firmware for RP2040**  
  [Micropython_DualMCU_2025_RP2040.uf2](https://github.com/UNIT-Electronics-MX/ecosistema-de-desarrollo-desarrollo/releases/download/Micropython_by_uelectronics/Micropython_DualMCU_2025_RP2040.uf2)

- **`esptool.py`** – Required for flashing the ESP32 firmware or [esptools](https://espressif.github.io/esptool-js/)

### Additional Resources:

- [Alternative flashing method with Thonny](https://unit-electronics-mx.github.io/ecosistema-de-desarrollo-unit/upython.html)
- MicroPython courses:  
  - [English version](https://unit-electronics.github.io/DualMCU_Getting_Started/docs/2-micropython/)  
  - [Spanish version](https://unit-electronics-mx.github.io/dualmcu_curso_introductorio/index.html)
- [Understanding the MicroPython Kit](https://github.com/UNIT-Electronics/UNIT-Pico-Starter-kit)




## Quick Installation

1. Download the **Micropython Firmware** for the **ESP32** and **RP2040** from the official Micropython website.
2. Connect the **DualMCU-ONE/DualMCU** board to your computer via USB.

3. Flash the **ESP32** firmware using the following command:

```bash
esptool.py --chip esp32 --port /dev/ttyUSB0 --baud 460800 write_flash -z 0x1000 esp32.bin
```

4. Flash the **RP2040** UF2 firmware using the following steps:

- Press and hold the **BOOT** button on the **RP2040**.
- Connect the **DualMCU-ONE/DualMCU** board to your computer via USB.
- Release the **BOOT** button.
- Drag and drop the **RP2040** UF2 firmware file onto the **RP2040** drive.

5. Once the firmware is flashed, the **DualMCU-ONE/DualMCU** board is ready to run Micropython.

## Running Micropython

1. Open a terminal window and connect to the **ESP32** using the following command:

```bash
picocom /dev/ttyUSB0 -b115200
```

2. Connect to the **RP2040** using the following command:MicroPython

```bash
picocom /dev/ttyACM0 -b115200
```

3. You can now run Python code directly on the board using the interactive prompt.