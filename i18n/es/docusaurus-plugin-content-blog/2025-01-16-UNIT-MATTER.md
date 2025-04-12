---
slug: UNIT-MATTER
title: Línea Matter IoT
authors: cesar
tags: [matter, esp32]
---
:::tip
Línea UNIT Matter IoT implentando ESP32C6.
:::
<!-- truncate -->


## Introducción

La línea **UNIT Matter IoT** es una serie de placas de desarrollo basadas en el microcontrolador **ESP32-C6**. El ESP32-C6 es un circuito integrado que reúne los principales sistemas electrónicos (SoC), integrando altamente Wi-Fi 6 (802.11ax) y Bluetooth Low Energy (BLE) con doble núcleo CPU, diseñado para aplicaciones IoT. La línea Matter de placas IoT están diseñadas para proporcionar soluciones simples con una **relación costo - efectividad** para el desarrollo de dispositivos IoT compatibles con el protocolo Matter.

La conectividad Matter es un nuevo estándar de código abierto para dispositivos inteligentes para el hogar, desarrollado por Connectivity Standards Alliance (CSA). Tiene como objetivo unificar y asegurar una forma de comunicación entre dispositivos inteligentes sin importar el fabricante o el protocolo de comunicación. El **protocolo Matter** está basado en IP y es diseñado para trabajar sobre redes Wi-Fi, Thread, y Ethernet.


## Soluciones Espressif Matter

![Solution_architecture](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/_images/solution_architecture.png)


## Primeros resultados 

Para el nuevo desarrollo de una placa de desarrollo, aquí tenemos los primeros resultados del nuevo microcontrolador ESP32-C6. El ESP32-C6 integra altamente Wi-Fi 6 y tecnología Bluetooth de bajo consumo en el mismo chip, además, está diseñado con la arquitectura RISC-V que incluye un doblo núcleo CPU con una velocidad de reloj arriba de **160 MHz**. Además, el ESP32-C6 incluye un amplio conjunto de periféricos, por ejemplo, **UART**, **SPI**, **I2C**, **I2S**, **PWM**, e interfaces **ADC**, así como un **sensor de temperatura integrado** y un **acelerador de seguridad**.