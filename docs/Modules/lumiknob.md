---
sidebar_position: 3
---

# Lumiknob Module


The Module Potentiometer Interface SPI MAX7219 32 LED Sequential is a module that allows you to control 32 LEDs sequentially using a potentiometer. The module uses the SPI protocol to communicate with the MAX7219 LED driver, which controls the LEDs. The potentiometer is used to adjust the speed at which the LEDs are lit up.
<!-- board in proccess designed -->
:::caution
**Board in Development**: The Lumiknob Module is currently in development. The information provided here is subject to change as the design progresses.
:::


## Sequential LED Control

![Sequential LED Control](/img/module/schematic.PNG)


## How to Use

To use the module, you will need to connect the Potentiometer and the MAX7219 LED driver to your microcontroller. The Potentiometer should be connected to an analog input pin on your microcontroller, and the MAX7219 should be connected to the SPI pins on your microcontroller. You will also need to include the `max7219.py` and `main.py` files in your project.

## Tested Boards

The following table lists the microcontroller boards that have been tested with this module:

| Board             | Status            |
|-------------------|-------------------|
| Arduino Uno       | No Tested         |
| Raspberry Pi Pico | No Tested         |
| ESP32C3 SuperMini | Tested and Works  |

## Example Code

The following is an example code that illustrates the use of the module with an ESP32C3 SuperMini board:

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

This code reads the potentiometer's value and subsequently determines the quantity of LEDs to illuminate. The LEDs glow sequentially, row by row, from left to right. The potentiometer controls the intensity of the LED illumination.


## Results

The subsequent GIF image of the module operates as expected and facilitates the sequential control of 32 LEDs with a potentiometer. The potentiometer regulates the illumination rate of the LEDs sequentially, from left to right, row by row. The module is intuitive and can be effortlessly incorporated into your apps.

![Sequential LED Control](/img/module/resized_output.gif)

## License

This module is released under the MIT License. You are free to use, modify, and distribute this code as you see fit. See the `LICENSE` file for more information.