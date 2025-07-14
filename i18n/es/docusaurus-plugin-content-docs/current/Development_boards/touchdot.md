---
sidebar_position: 4
---

# Touchdot S3 

Aprovechando el chip ESP32-S3, el Touchdot S3 es una versátil placa de desarrollo diseñada para wearables creativos, implementaciones de IoT y dispositivos inteligentes. Inspirada en la estética Lilypad pero con funcionalidad moderna, combina un formato compacto con características robustas de conectividad y gestión de energía para una prototipación sin problemas.

<div align="center">
  <a href="https://github.com/UNIT-Electronics-MX/unit_touchdot_s3/blob/main/docs/unit_touchdot_s3_product_brief.pdf" target="_blank"><img src="https://raw.githubusercontent.com/UNIT-Electronics-MX/unit_touchdot_s3/refs/heads/main/hardware/resources/unit_top_V_0_1_2_ue0072_Touch-Dot-S3.png" width="450px" alt="UNIT Touchdot S3"/></a>
  <p>UNIT Touchdot S3</p>
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
  <img src="https://raw.githubusercontent.com/UNIT-Electronics-MX/unit_touchdot_s3/refs/heads/main/hardware/resources/unit_pinout_v_0_1_3_ue0072_touch_dot_s3_en.png" width="450px" alt="UNIT Touchdot S3"/>
  <p>UNIT Touchdot S3</p>
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
