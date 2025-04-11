---
sidebar_position: 2
---

# DualMCU ONE

La **UNIT DualMCU-ONE** es una placa de desarrollo altamente versátil que integra el poder de dos microcontroladores: el ESP32 y el RP2040. Diseñada para aplicaciones avanzadas de IoT, robótica e industriales, ofrece conectividad mejorada, gestión robusta de la energía y total compatibilidad con shields de Arduino UNO.

:::warning
La DualMCU-ONE opera con niveles lógicos de 3.3V en lugar de los típicos 5V del Arduino Uno. 
Asegúrate de que cualquier shield o periférico conectado sea compatible con niveles lógicos de 3.3V para evitar posibles daños.
:::

<div style={{ textAlign: "center" }}>
  <a href="https://uelectronics.com/producto/unit-dualmcu-esp32-rp2040-tarjeta-de-desarrollo/">
    <img src="https://raw.githubusercontent.com/UNIT-Electronics/DualMCU-ONE/refs/heads/main/Resources/IMG_3134.jpg" width="300px" />
    <br/>
    <em>Haz clic aquí para comprarla en la tienda de UNIT Electronics</em>
  </a>
</div>

| Recurso                                          |Enlace                                                                                                                                         |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Curso de MicroPython (Versión en inglés)         | [https://unit-electronics.github.io/DualMCU_Getting_Started/](https://unit-electronics.github.io/DualMCU_Getting_Started/)                      |
| Curso de MicroPython (Versión en español)        | [https://unit-electronics-mx.github.io/dualmcu_curso_introductorio/index.html](https://unit-electronics-mx.github.io/dualmcu_curso_introductorio/index.html)             |


Las mejoras clave respecto a su predecesor, el DualMCU, incluyen:
- Comunicación SPI entre los microcontroladores para mejorar la transferencia de datos.
- Un concentrador USB Tipo-C que reemplaza al conmutador de comunicación USB.
- Conectividad CAN bus para entornos industriales y automotrices.
- Conectores integrados compatibles con los ecosistemas STEMMA y QWIIC.

Para más detalles, consulta las páginas de producto en:
* [Sitio web de UNIT Electronics](https://uelectronics.com/)
* [Hardware-DualMCU-ONE](https://github.com/UNIT-Electronics/DualMCU-ONE/tree/main/Hardware)
* [Manual de Referencia del Producto](https://github.com/UNIT-Electronics/DualMCU-ONE/blob/main/DualMCU-ONE(Product%20Reference%20Manual%20)%5BEN%5D.pdf)
* [DualMCU-ONE_Getting_Started](https://unit-electronics.github.io/DualMCU-ONE/index.html)

---

## Pinout

La **DualMCU-ONE** cuenta con una amplia variedad de pines de entrada/salida (E/S) que te permiten conectar sensores, actuadores y otros dispositivos a la placa. A continuación, se muestra el pinout de la **DualMCU-ONE**:

<div style={{ textAlign: "center" }}>
  <img src="https://raw.githubusercontent.com/UNIT-Electronics/DualMCU-ONE/refs/heads/main/Hardware/Resources/Pinout_Top_EN.jpg" width="1200px" />
</div>

## Características

- **Microcontroladores**:
  - **RP2040**: Doble núcleo ARM Cortex-M0+ a 133 MHz, compatible con los headers de Arduino UNO.
  - **ESP32**: Capacidades de Wi-Fi, Bluetooth y CAN bus.

- **Conectividad USB**:
  - Concentrador USB Tipo-C integrado para la comunicación simultánea con ambos microcontroladores.
  - Soporte adicional para dispositivos USB a través de conectores JST.

- **Fuente de Alimentación**:
  - Regulador robusto MP1482DS que soporta voltajes de entrada de hasta 18V.
  - Proporciona una salida estable de 5V para alimentar periféricos.

- **Almacenamiento**:
  - Ranura opcional para MicroSD (hasta 64GB), conectada mediante la interfaz QSPI del ESP32.

- **Conectores I2C**:
  - Conectores JST-SH compatibles con los ecosistemas STEMMA y QWIIC.

- **Características Adicionales**:
  - LED RGB 2020 y LED WS2812B para retroalimentación visual.
  - Conector opcional FPC-24P para acceso expandido a los GPIO del ESP32.

---

## Aplicaciones

El **DualMCU-ONE** es ideal para:
- **Internet de las Cosas (IoT)**: Conectividad inalámbrica para dispositivos inteligentes.
- **Educación**: Perfecta para estudiantes y makers que desean explorar microcontroladores avanzados.
- **Industrial**: Comunicación robusta a través de CAN bus para aplicaciones automotrices e industriales.
- **Prototipado**: Total compatibilidad con shields de Arduino UNO.
- **Robótica**: Procesamiento multinúcleo para sistemas complejos.

---

## Primeros Pasos

El **DualMCU-ONE** soporta:
- **Arduino IDE** para el RP2040 y el ESP32.
- **MicroPython** y **CircuitPython** utilizando IDEs como Thonny.

Para la configuración y los primeros proyectos, consulta la [Guía de Primeros Pasos](https://unit-electronics.github.io/DualMCU-ONE/index.html).

---

## Recursos para Desarrollo

| Recurso                                   | Enlace                                                                                  |
|-------------------------------------------|-----------------------------------------------------------------------------------------|
| **Paquete JSON RP2040 - Arduino IDE**       | [Paquete RP2040](https://github.com/UNIT-Electronics/Uelectronics-RP2040-Arduino-Package) |
| **Paquete JSON ESP32 - Arduino IDE**        | [Paquete ESP32](https://github.com/UNIT-Electronics/Uelectronics-ESP32-Arduino-Package)   |
| **Documentación de MicroPython**          | [MicroPython.org](https://micropython.org/)                                             |
| **Documentación de CircuitPython**        | [Adafruit CircuitPython](https://circuitpython.org/)                                    |
| **Documentación de UNIT DualMCU-ONE**       | [Documentación DualMCU-ONE](https://github.com/UNIT-Electronics/DualMCU-ONE)              |
| **Guía para Comenzar con DualMCU-ONE**      | [Guía DualMCU-ONE](https://unit-electronics.github.io/DualMCU-ONE/index.html)             |
| **IDE Thonny**                            | [Thonny.org](https://thonny.org/)                                                       |
| **Arduino IDE**                           | [Arduino IDE](https://www.arduino.cc/en/software)                                       |
| **Driver CH340**                          | [Driver CH340](http://www.wch-ic.com/downloads/CH341SER_ZIP.html)                       |
| **Visual Studio Code**                    | [Visual Studio Code](https://code.visualstudio.com/download)                            |
| **Documentación del Raspberry Pi Pico RP2040** | [Documentación RP2040](https://www.raspberrypi.com/documentation/microcontrollers/)  |
| **Python SDK para Raspberry Pi Pico RP2040**| [Python SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-python-sdk.pdf)    |
| **Ejemplos de MicroPython para Raspberry Pi Pico** | [Ejemplos MicroPython](https://github.com/raspberrypi/pico-micropython-examples)  |
| **SDK C/C++ para Raspberry Pi Pico**      | [SDK C/C++](https://www.raspberrypi.com/documentation/microcontrollers/c_sdk.html)        |
| **Ejemplos C/C++ para Raspberry Pi Pico**   | [Ejemplos C/C++](https://github.com/raspberrypi/pico-examples)                           |
| **Datasheet del RP2040**                  | [Datasheet RP2040](https://datasheets.raspberrypi.com/rp2040/rp2040-datasheet.pdf)        |
| **Datasheet del ESP32 WROOM 8MB**         | [Datasheet ESP32 WROOM](https://www.espressif.com/sites/default/files/documentation/esp32-wroom-32e_esp32-wroom-32ue_datasheet_en.pdf) |

---

<!-- 
## Contribuciones

¡Esperamos tus contribuciones! Revisa nuestras [Directrices de Contribución](CONTRIBUTING.md) antes de enviar tus pull requests. -->

---

## Licencia

Este proyecto se distribuye bajo la [Licencia MIT](https://github.com/UNIT-Electronics/DualMCU-ONE/blob/main/LICENSE).
