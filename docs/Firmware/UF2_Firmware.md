---
sidebar_position: 2
---

# UF2 Examples for DualMCU RP2040


This repository provides UF2 (Universal Firmware Update) files specifically designed for the RP2040 microcontroller on the DualMCU board. These files enable users to easily load example firmware onto the board, facilitating customization and functionality updates. Various UF2 examples are included, allowing users to explore different capabilities and select the best fit for their needs.

## Available UF2 Files

### [Test.uf2](https://github.com/UNIT-Electronics/DualMCU/blob/main/Software/UF2_Files/Test.uf2)
This file is designed to test USB-serial communication, the onboard LED "L3" (GPIO 25), and the neopixel on the DualMCU RP2040. When uploaded, it verifies these features, making it useful for diagnostics and functionality checks.

### [UNIT_NEOPIXEL_ws2812.uf2](https://github.com/UNIT-Electronics/DualMCU/blob/main/Software/UF2_Files/UNIT_NEOPIXEL_ws2812.uf2)
This example tests the onboard WS2812 ("L4") neopixel LED. When loaded onto the board, it generates a random sequence of multi-color patterns, helping users verify neopixel operation and explore visual effects.

### [Blink.uf2](https://github.com/UNIT-Electronics/DualMCU/blob/main/Software/UF2_Files/blink.uf2)
This file tests the "L3" (GPIO 25) LED by making it blink at one-second intervals. It is useful for confirming LED operation and is recommended as a "clean" UF2 file when the COM port is not recognized in the Arduino IDE.

### [flash_nuke.uf2](https://github.com/UNIT-Electronics/DualMCU/blob/main/Software/UF2_Files/flash_nuke.uf2)
This file completely erases the firmware on the DualMCU RP2040, restoring it to its factory state. It is typically used for preparing the board for a fresh firmware installation.

**Caution:** Using this file will permanently delete existing firmware and data.

### [usb_microphone.uf2](https://github.com/UNIT-Electronics/DualMCU/blob/main/Software/UF2_Files/usb_microphone.uf2)
This file transforms the DualMCU into a high-performance USB microphone using the RP2040 microcontroller. To use this feature, connect a PDM (Pulse Density Modulation) MEMS microphone, such as:

- **MP34DT06J**
- **UNIT PDM MEMS Microphone MP34DT05**
- **Adafruit PDM Microphone Module MP34DT01-M**

This functionality is ideal for video conferencing or general audio applications, providing high-quality sound performance.

<a href="https://github.com/UNIT-Electronics/UNIT-PDM-MEMS-Microphone-Breakout-Guide-UF2#readme"><img src="https://github.com/UNIT-Electronics/DualMCU/blob/main/Software/UF2_Files/AR3631-UNIT-MP34DT05TR-A-Modulo-Microfono-PDM-V2.jpg?raw=false" width="200px"/></a>   <img src="UF2_Files/PDM-Mic.jpg?raw=false" width="170px"/><br/>

## Connecting a PDM Microphone

To connect a **UNIT MP34DT05TR-A PDM microphone** or an **Adafruit PDM microphone module** to the RP2040 on the DualMCU board, follow these steps:

1. Ensure you have the required hardware: a PDM microphone module and the DualMCU board.
2. Locate GPIO12 and GPIO13 on the DualMCU board [(Pinout)](https://github.com/UNIT-Electronics/DualMCU/blob/main/Hardware/Resources/EU0002-DUALMCU%20V3.1.2.jpg) and connect the microphone as follows:

   - **DualMCU (3.3V)** → **PDM-MIC (3.3V)**
   - **DualMCU (GND)** → **PDM-MIC (GND)**
   - **DualMCU (GPIO12)** → **PDM-MIC (SCL signal)**
   - **DualMCU (GPIO13)** → **PDM-MIC (DAT signal)**

3. Power on the DualMCU board and the microphone module.
4. Enter BOOT mode on the RP2040 and drag-and-drop the `usb_microphone.uf2` file onto the DualMCU board.

## Troubleshooting

### Entering BOOT Mode
To load UF2 examples onto the RP2040 in the DualMCU board:

1. Hold down the **BOOT** switch.
2. Quickly press and release the **RST** switch.
3. Release the **BOOT** switch.
4. The board will enter BOOT mode, appearing as a storage device on your computer.
5. Drag and drop the desired UF2 file into the device folder.

For more details, refer to the ["Board Operation" section 5.2, Step 2 of the Product Manual Reference](https://github.com/UNIT-Electronics/DualMCU/blob/main/DualMCU(Product%20Reference%20Manual).pdf).

