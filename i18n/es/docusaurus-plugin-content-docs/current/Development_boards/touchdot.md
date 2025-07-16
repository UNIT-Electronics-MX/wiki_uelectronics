---
sidebar_position: 4
---

# Touchdot S3 

La Touchdot S3 es una avanzada placa de desarrollo concebida para aplicaciones innovadoras en dispositivos portátiles, implementaciones de IoT y sistemas inteligentes. Inspirada en la estética del diseño Lilypad, esta solución combina un formato compacto con capacidades modernas de conectividad y gestión energética, ofreciendo una plataforma robusta y eficiente para la creación y prototipado de proyectos tecnológicos.

<div align="center">
  <a href="https://github.com/UNIT-Electronics-MX/unit_touchdot_s3/blob/main/docs/unit_touchdot_s3_product_brief.pdf" target="_blank"><img src="https://raw.githubusercontent.com/UNIT-Electronics-MX/unit_touchdot_s3/refs/heads/main/hardware/resources/unit_top_V_0_1_2_ue0072_Touch-Dot-S3.png" width="450px" alt="UNIT Touchdot S3"/></a>
  <p>UNIT Touchdot S3</p>
</div>


### Additional Resources

<div className="table-center">

| Recurso                  | Enlace                                                                                                   |
|--------------------------|---------------------------------------------------------------------------------------------------------|
| **Wiki-UNIT Electronics** | [Wiki-Uelectronics](https://unit-electronics-mx.github.io/wiki_uelectronics/docs/Development_boards/touchdot) |
| **Repositorio de Github** | [Repositorio de Github](https://github.com/UNIT-Electronics-MX/unit_touchdot_s3)                       |
| **Resumen del Producto**  | [Resumen del Producto](https://github.com/UNIT-Electronics-MX/unit_touchdot_s3/blob/main/docs/unit_touchdot_s3_product_brief.pdf) |
| **Esquemático**           | [Esquemático](https://github.com/UNIT-Electronics-MX/unit_touchdot_s3/blob/main/hardware/unit_sch_V_0_1_2_ue0072_touch_dot_s3.pdf) |
| **Documentación**         | [Documentación](https://unit-electronics-mx.github.io/unit_touchdot_s3/)                               |


</div>

### Microcontrolador: ESP32-S3 Mini

- **Eficiencia Energética:** Optimizado para bajo consumo de energía.
- **Riel de Alimentación de 3.3 V:** Compatible con sensores portátiles y periféricos como módulos QWIIC.
- **Wi-Fi y Bluetooth 5:** Soporta Wi-Fi de 2.4 GHz (802.11 b/g/n) con 40 MHz de ancho de banda y subsistema Bluetooth Low Energy.
- **CPU:** Microprocesador Xtensa® de doble núcleo de 32 bits LX7.
- **Memoria:** 384 KB ROM, 512 KB SRAM y 16 KB SRAM en RTC.

### Fuente de Alimentación y Gestión de Batería

- **Carga y Comunicación USB-C:** Garantiza una entrega de energía confiable y una programación sencilla.
- **Gestión Integrada de Batería LiPo:** Simplifica la seguridad y eficiencia energética sin circuitos adicionales.
- **Pads de Alimentación Distribuidos:** Conectores magnéticos entregan **GND** y **3.3 V** para un cableado simple y confiable a sensores y actuadores.

## Pinout

<div align="center">

<a href="https://raw.githubusercontent.com/UNIT-Electronics-MX/unit_touchdot_s3/refs/heads/main/hardware/resources/unit_pinout_v_0_1_3_ue0072_touch_dot_s3_en.png" target="_blank">

  <img src="https://raw.githubusercontent.com/UNIT-Electronics-MX/unit_touchdot_s3/refs/heads/main/hardware/resources/unit_pinout_v_0_1_3_ue0072_touch_dot_s3_en.png" width="450px" alt="UNIT Touchdot S3"/>
  <p>UNIT Touchdot S3</p>
</a>
</div>

### GPIOs

- **Pads Coseíbles:** 16 pads coseíbles en total: 11 GPIOs multiplexados programables, 1 para datos de salida de Neopixel y 4 para suministro de energía.
- **Encabezados de Pines:** 18 encabezados de pines complementan los pads coseíbles; úsalos para acceder a más GPIOs y funciones como boot o enable.

### Características Principales

| Característica                              | Descripción                                                                                                     |
|---------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| **Wi-Fi y Bluetooth LE**                    | Conectividad inalámbrica dual para interacciones IoT y móviles sin problemas.                                   |
| **Carga Integrada de Batería LiPo**         | Carga confiable de batería integrada en el diseño de la placa.                                                  |
| **Controles de Energía y Reinicio**         | Acceso directo a la gestión de energía de la placa con botones dedicados para encendido y reinicio.             |
| **Pads Coseíbles y Conectores Magnéticos**  | Ideal para proyectos portátiles y prototipado rápido con integración flexible de módulos.                       |
| **Múltiples Puntos de Soldadura para GND y 3.3 V** | Facilita el cableado sencillo a sensores o actuadores externos sin configuración compleja.                     |
| **Conector QWIIC Estándar**                 | Soporta conexión rápida de periféricos I²C como sensores, pantallas y módulos de expansión.                     |
| **Interruptor de Encendido**                | Enciende fácilmente el dispositivo con un interruptor SPST.                                                     |
| **LED Integrado**                           | LED conectado a D13.                                                                                            |
| **LED RGB**                                 | LED Neopixel 2020, entrada de datos conectada a D25 y salida de datos a un pad coseíble.                        |
| **Ranura Micro SD**                         | Gestiona datos en tarjetas Micro SD con el protocolo SPI.                                                       |


## Ejemplo de Código

```cpp
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
  "Rojo", "Verde", "Azul", "Amarillo", "Cyan", "Magenta", "Gris", "Ocre", "Turquesa", "Purpura", "Apagado"
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
    display.println("Modo AUTO activado");
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
  display.println("Color seleccionado:");
  display.setTextSize(2);
  display.setCursor(5, 25);
  display.println(colorNames[colorIndex]);
  display.display();
}
```
