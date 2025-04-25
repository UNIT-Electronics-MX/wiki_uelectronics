---
sidebar_position: 1
---

# TFT ST7789V - MicroPython Library Documentation

This documentation provides a unified guide for the TFT ST7789V MicroPython library, which enables seamless integration with the TFT Display ST7789V. The display, available in 2.4" and 2.8" variants, features a 240×320 RGB screen and uses SPI for communication. This guide covers library overview, technical features, hardware details, recommended setup, and an example code demonstration.

## Overview

MicroPython-ST7789V_TFT is designed to offer robust control over text and image rendering on the TFT ST7789V display. The library builds on concepts from [rdagger](https://github.com/rdagger/micropython-ili9341 "rdagger") while adding support for ST7789V-specific color calibration, rotation options, and performance optimizations ideal for microcontrollers with limited resources.

<div style={{ textAlign: "center" }}>
  <img src="https://uelectronics.com/wp-content/uploads/2024/01/AR3950-Modulo-TFT-Display-ST7796S-SPI-2.4.jpg" width="500px" />
</div>

## Technical Features

- **SPI Communication:** Utilizes MicroPython’s SPI interface for fast and efficient data transfer.
- **Flexible Color Configuration:** Adjusts gamma correction, brightness, and supports multiple color modes.
- **Rotation Options:** Provides text rotation functionality at 0°, 90°, 180°, and 270°.
- **Memory & Performance Optimizations:** Tailored for microcontrollers to ensure smooth display updates without overwhelming system resources.

## Hardware and Software Details

A TFT (Thin Film Transistor) display leverages active-matrix technology, employing TFTs to switch pixels with precision. Although TFT displays are a type of LCD, they stand out for using TFT technology for improved pixel control and image quality.

### Hardware Requirements

- **Power Supply:** Ensure a stable and adequate power supply; TFT displays may draw significant current.
- **Connection Setup:** Verify all connections (SPI SCK, MOSI, CS, DC, and RST) for proper signal integrity.
  
### Initialization and Calibration

- **Pre-Initialization:** Always configure the display before transmitting graphics or text commands; initialize the SPI bus with an appropriate baud rate.
- **Software Calibration:** Experiment with background colors and gamma settings to optimize contrast and brightness.

## Example Code

Below is an example demonstrating how to initialize the display, render text with various rotations, and apply custom background colors:

```python
"""ILI9341 demo (fonts 8x8).
   This example initializes SPI communication and configures display parameters
   to showcase text rendering with rotations and background colors.
"""

from time import sleep
from ili9341 import Display, color565  # Convert RGB to 16-bit color format
from machine import Pin, SPI          # Hardware control functions

def test():
    """Demonstrates text rendering with different rotations and backgrounds."""
    
    # Initialize SPI communication for the ST7789V module.
    spi = SPI(1, baudrate=40000000, sck=Pin(14), mosi=Pin(13))
    
    # Setup display with Data/Command, Chip Select, and Reset pins.
    display = Display(spi, dc=Pin(4), cs=Pin(16), rst=Pin(17))

    # Compute center coordinates of the display.
    x_center = display.width // 2
    y_center = display.height // 2

    # Draw primary text elements.
    display.draw_text8x8(0, 0, 'Built-in', color565(255, 0, 255))
    display.draw_text8x8(16, 16, 'MicroPython', color565(255, 255, 0))
    display.draw_text8x8(32, 32, '8x8 Font', color565(0, 0, 255))
    
    # Render text with various rotations.
    display.draw_text8x8(x_center - 40, 120, "Rotate = 0", color565(0, 255, 0))
    display.draw_text8x8(0, y_center - 44, "Rotate = 90", color565(255, 0, 0), rotate=90)
    display.draw_text8x8(x_center - 48, display.height - 9, "Rotate = 180", color565(0, 255, 255), rotate=180)
    display.draw_text8x8(display.width - 9, y_center - 48, "Rotate = 270", color565(255, 255, 255), rotate=270)

    # Enhanced example with background colors.
    display.draw_text8x8(x_center - 40, 140, "Rotate = 0", color565(0, 255, 0),
                         background=color565(255, 0, 0))
    display.draw_text8x8(20, y_center - 44, "Rotate = 90", color565(255, 0, 0),
                         rotate=90, background=color565(0, 255, 0))
    display.draw_text8x8(x_center - 48, display.height - 29, "Rotate = 180", color565(0, 255, 255),
                         rotate=180, background=color565(0, 0, 255))
    display.draw_text8x8(display.width - 29, y_center - 48, "Rotate = 270", color565(255, 255, 255),
                         rotate=270, background=color565(255, 0, 255))

    # Allow some time for observation before cleanup.
    sleep(15)
    display.cleanup()  # Reset the display and free resources.

test()
```

## Additional Resources

- **Library Repository:** View the [MicroPython-ST7789V_TFT repository](https://github.com/UNIT-Electronics-MX/TFT-Display-ST7789V-2.4/blob/master/ili9341.py "MicroPython-ST7789V_TFT") for further details and source code.
- **Font Creation Tool:** Fonts were generated using the free [GLCD Font Creator](https://www.mikroe.com/glcd-font-creator "GLCD Font Creator").


:::note

The original library was modified to fit the colors configuration of this screen.
The tool for displaying images does not show the correct color gamma.

:::

For more demonstrations, view the YouTube tutorial below

<div style={{ textAlign: "center" }}>
  <a href="https://www.youtube.com/watch?v=NJuOkSSfgUQ" title="ILI9341 Tutorial">
    <img src="https://i.ytimg.com/vi/NJuOkSSfgUQ/maxresdefault.jpg" alt="Watch the ILI9341 Tutorial" style={{ maxWidth: "60%", height: "auto" }} />
  </a>
  <p>Watch this mini tutorial for a quick overview on setting up the ILI9341 and ST7789V displays with MicroPython.</p>
</div>


This comprehensive documentation offers a step-by-step guide to setting up and utilizing the TFT ST7789V display with MicroPython. 

