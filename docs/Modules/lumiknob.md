---
sidebar_position: 3
---
# Lumiknob Module 

This document describes the functionality and application of the Module Potentiometer Interface designed for SPI-controlled sequential LED activation using the MAX7219. The module enables the sequential control of 32 LEDs via a potentiometer, which modulates the illumination speed.

<!-- <div style={{ textAlign: "center" }}>
  <img src="https://raw.githubusercontent.com/UNIT-Electronics-MX/unit_lumiknob_module/refs/heads/main/hardware/resources/lumiknob.png" width="500" />
</div> -->

<p align="center">
  <img
    src="https://raw.githubusercontent.com/UNIT-Electronics-MX/unit_lumiknob_module/refs/heads/main/hardware/resources/lumiknob.png"
    alt="Lumiknob Module"
    width="500"
  />
</p>

## Overview

The module employs the SPI protocol for communication with the MAX7219 LED driver. A potentiometer is used to adjust the speed at which the LED sequence is activated. Appropriate connections should be made between the potentiometer, MAX7219, and the respective microcontroller pins.

:::warning
The potentiometer's ADC must be connected to an analog input pin on the microcontroller. Its output voltage should range from 0V to 3.3V for 3.3V microcontrollers, and from 0V to 5V for 5V microcontrollers.
:::


## Hardware Interface

- Potentiometer: Connect to an analog input of the microcontroller.
- MAX7219: Connect to the designated SPI pins (MOSI, SCK, and Chip Select) of the microcontroller.

Ensure that the project directory includes the necessary files, such as `max7219.py` and `main.py`.

## Tested Hardware

The table below enumerates the microcontroller boards that have been verified with this module:

<p align="center">

| Board             | Status              |
|-------------------|---------------------|
| Arduino Uno       | Not Tested          |
| Raspberry Pi Pico | Not Tested          |
| ESP32C3 SuperMini | Tested and Functional |
| Pulsar C6         | Tested and Functional |

</p>

## Example Code

Below is an example demonstrating the use of the module with an ESP32C3 SuperMini board:

```python
import max7219
from machine import Pin, SPI, ADC
import time

spi = SPI(1, baudrate=10000000, polarity=1, phase=0, sck=Pin(4), mosi=Pin(6))
cs = Pin(7, Pin.OUT)
display = max7219.Matrix8x8(spi, cs, 1)

display.brightness(10)

pot = ADC(Pin(0))
pot.atten(ADC.ATTN_11DB)

display.fill(0)
display.show()

while True:
    pot_value = pot.read()
    num_leds = int((pot_value / 4095) * 32)

    display.fill(0)
    led_count = 0
    for row in range(8):
        for col in range(8):
            if led_count < num_leds:
                display.pixel(col, row, 1)
                led_count += 1
            else:
                break

    display.show()
    time.sleep(0.1)
```

The sample code retrieves the value from the potentiometer and calculates the corresponding number of LEDs that need to be lit. The LED activation is performed in a sequential manner, progressing row by row from left to right.

## Performance Outcome

The provided GIF demonstrates that the module functions as expected. The potentiometer effectively regulates the sequential activation rate of 32 LEDs, ensuring smooth operation across the display.

<p align="center">
  <img
    src="https://github.com/UNIT-Electronics-MX/unit_lumiknob_module/blob/main/hardware/resources/resized_output.gif?raw=true"
    alt="Sequential LED Demonstration"
    width="500"
  />
</p>


## License

The module is subject to the applicable open-source license terms.

