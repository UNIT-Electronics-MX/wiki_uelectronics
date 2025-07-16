---
sidebar_position: 4
---

# Touchdot S3 

Leveraging the ESP32-S3 chip, the Touchdot S3 is a versatile development board crafted for creative wearables, IoT implementations, and smart devices. Inspired by the Lilypad aesthetic but delivering modern functionality, it marries a compact form factor with robust connectivity and power management features for seamless prototyping.

<div align="center">
  <a href="https://github.com/UNIT-Electronics-MX/unit_touchdot_s3/blob/main/docs/unit_touchdot_s3_product_brief.pdf" target="_blank"><img src="https://raw.githubusercontent.com/UNIT-Electronics-MX/unit_touchdot_s3/refs/heads/main/hardware/resources/unit_top_V_0_1_2_ue0072_Touch-Dot-S3.png" width="450px" alt="UNIT Touchdot S3"/></a>
  <p>UNIT Touchdot S3</p>
</div>


### Additional Resources
<div className="table-center">

| Resource               | Link                                                                                                   |
|------------------------|-------------------------------------------------------------------------------------------------------|
| **Wiki-UNIT Electronics** | [Wiki-Uelectronics](https://unit-electronics-mx.github.io/wiki_uelectronics/docs/Development_boards/touchdot) |
| **GitHub Repository**      | [GitHub Repository](https://github.com/UNIT-Electronics-MX/unit_touchdot_s3)                                                             |
| **Product Brief**          | [Product Brief](https://github.com/UNIT-Electronics-MX/unit_touchdot_s3/blob/main/docs/unit_touchdot_s3_product_brief.pdf)               |
| **Schematic**              | [Schematic](https://github.com/UNIT-Electronics-MX/unit_touchdot_s3/blob/main/hardware/unit_sch_V_0_1_2_ue0072_touch_dot_s3.pdf)         |
| **Documentation**          | [Documentation](https://unit-electronics-mx.github.io/unit_touchdot_s3/)                                                               |

</div>

### Microcontroller: ESP32-S3 Mini

- **Energy Efficient:** Optimized for low power consumption.
- **3.3 V Power Rail:** Compatible with wearable sensors and peripherals like QWIIC modules.
- **Wi-Fi and Bluetooth 5:** Supports 2.4 GHz Wi-Fi (802.11 b/g/n) with 40 MHz of bandwidth and Bluetooth Low Energy subsystem
- **CPU:** Xtensa® dual-core 32-bit LX7 microprocessor
- **Memory:** 384 KB Rom, 512 KB SRAM, and 16 KB SRAM in RTC  

### Power Supply & Battery Management

- **USB-C Charging & Communication:** Ensures reliable power delivery and straightforward programming.
- **Integrated LiPo Battery Management:** Streamlines power safety and efficiency without extra circuitry.
- **Distributed Power Pads:** Magnetic connectors deliver **GND** and **3.3 V** for simple, reliable wiring to sensors and actuators.

## Pinout


<div align="center">

<a href="https://raw.githubusercontent.com/UNIT-Electronics-MX/unit_touchdot_s3/refs/heads/main/hardware/resources/unit_pinout_v_0_1_3_ue0072_touch_dot_s3_en.png" target="_blank">

  <img src="https://raw.githubusercontent.com/UNIT-Electronics-MX/unit_touchdot_s3/refs/heads/main/hardware/resources/unit_pinout_v_0_1_3_ue0072_touch_dot_s3_en.png" width="450px" alt="UNIT Touchdot S3"/>
  <p>UNIT Touchdot S3</p>
</a>

</div>

### GPIOs

- **Sewable Pads:** 16 sewable pads in total: 11 programmable multiplexed GPIOs, 1 for Neopixel output data, and 4 for power supply.
- **Pin Headers:** 18 pin headers complement the sewable pads; use these to access more GPIOs and functions such as boot or enable.

### Key Features

| Feature                                    | Description                                                                                                     |
|--------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| **Wi-Fi & Bluetooth LE**                   | Dual wireless connectivity for seamless IoT and mobile interactions.                                            |
| **Built-in LiPo Charging**                 | Reliable battery charging integrated into the board design.                                                     |
| **Power & Reset Controls**                 | Direct access to board power management with dedicated buttons for power and reset.                             |
| **Sewable Pads & Magnetic Connectors**     | Ideal for wearable projects and rapid prototyping with flexible module integration.                             |
| **Multiple Solder Points for GND & 3.3 V** | Facilitates easy wiring to external sensors or actuators without complex setup.                                 |
| **Standard QWIIC Connector**               | Supports quick connection of I²C peripherals such as sensors, displays, and expansion modules.                  |
| **Power On Switch**                        | Easily turn on the device with an SPST switch.                                                                  |
| **Built-In LED**                           | LED connected to D13.                                                                                           |
| **RGB LED**                                | Neopixel 2020 LED, data input connected to D25 and data output to a sewable pad.                                |
| **Micro SD Slot**                          | Manage data on Micro SD cards with the SPI protocol.                                                            |


## Example Code

```c

#include <Wire.h>
#include <Adafruit_NeoPixel.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET    -1
#define SDA_PIN        5
#define SCL_PIN        6
#define PIN_LED       45
#define NUM_LEDS       1
#define BUTTON_PIN     0

TwoWire i2c_oled(1);
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &i2c_oled, OLED_RESET);
Adafruit_NeoPixel strip(NUM_LEDS, PIN_LED, NEO_GRB + NEO_KHZ800);

uint32_t colors[] = {
  strip.Color(128, 0, 0),
  strip.Color(0, 128, 0),
  strip.Color(0, 0, 128),
  strip.Color(128, 128, 0),
  strip.Color(0, 128, 128),
  strip.Color(128, 0, 128),
  strip.Color(128, 128, 128),
  strip.Color(64, 64, 0),
  strip.Color(0, 64, 64),
  strip.Color(64, 0, 64),
  strip.Color(0, 0, 0)
};

const char* colorNames[] = {
  "Red", "Green", "Blue", "Yellow", "Cyan", "Magenta", "Gray", "Ochre", "Turquoise", "Purple", "Off"
};

int colorIndex = 0;
bool lastButtonState = HIGH;
unsigned long lastPressTime = 0;
bool autoMode = false;
bool colorLocked = false;

void setup() {
  Serial.begin(115200);
  pinMode(BUTTON_PIN, INPUT_PULLUP);

  strip.begin();
  strip.show();

  i2c_oled.begin(SDA_PIN, SCL_PIN);
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(SSD1306_WHITE);
  display.setCursor((SCREEN_WIDTH - 72) / 2, (SCREEN_HEIGHT - 8) / 2);
  display.println(" NeoDemo");
  display.display();

  for (int i = 0; i < 128; i += 8) {
    strip.setPixelColor(0, strip.Color(i, 0, 128 - i));
    strip.show();
    delay(20);
  }

  delay(1500);
  display.clearDisplay();
  lastPressTime = millis();
}

void loop() {
  bool currentButton = digitalRead(BUTTON_PIN);

  if (!autoMode && lastButtonState == HIGH && currentButton == LOW) {
    lastPressTime = millis();
    colorIndex = (colorIndex + 1) % (sizeof(colors) / sizeof(colors[0]));
    updateDisplay();
    strip.setPixelColor(0, colors[colorIndex]);
    strip.show();
    colorLocked = true;
  }

  if (!autoMode && !colorLocked && millis() - lastPressTime > 3000) {
    autoMode = true;
    display.clearDisplay();
    display.setCursor(10, 20);
    display.setTextSize(1);
    display.println("AUTO mode activated");
    display.display();
  }

  if (autoMode) {
    uint8_t r = random(0, 129);
    uint8_t g = random(0, 129);
    uint8_t b = random(0, 129);
    strip.setPixelColor(0, strip.Color(r, g, b));
    strip.show();
    delay(100);
  }

  lastButtonState = currentButton;
  delay(50);
}

void updateDisplay() {
  display.clearDisplay();
  display.setTextSize(1);
  display.setCursor(0, 0);
  display.println("Selected color:");
  display.setTextSize(2);
  display.setCursor(5, 25);
  display.println(colorNames[colorIndex]);
  display.display();
}
```

