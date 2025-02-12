---
sidebar_position: 3
---

# Cocket Nova 

Explora las increíbles funcionalidades de la placa de desarrollo Cocket Nova, la cual funciona con el microcontrolador CH552G. Esta práctica placa facilita el inicio de tus proyectos embebidos.

Se adapta perfectamente a las protoboards estándar y puede programarse mediante USB Tipo C. Además, cuenta con un LED Neopixel integrado en el pin 3.3 y dos salidas de encabezado para agregar más Neopixels. También encontrarás características como un LED en el pin 3.4, botones de reinicio y arranque, un selector de fuente de alimentación y dos conectores JST de 1mm que soportan los protocolos QWIIC, STEMMA QT, entre otros.

Esta placa es ideal para principiantes que se inician en el mundo de los microcontroladores y para entusiastas del bricolaje interesados en proyectos con un dispositivo USB de 8 bits y con bajo costo.

<div style={{ textAlign: "center" }}>
  ![Insignia estática](https://img.shields.io/badge/1.2-blue?style=plastic&label=Versión)
</div>

<div style={{ textAlign: "center" }}>
  <a href="https://uelectronics.com/producto/unit-cocket-nova-ch552g-tarjeta-de-desarrollo/">
  <img src="https://raw.githubusercontent.com/UNIT-Electronics/Cocket-Nova_CH552G-Development-Board/refs/heads/main/Hardware/Resources/CocketNova-Pinout.jpg" width="300px"/>
  <br/>
  <em>Haz clic aquí para comprar una en la tienda de UNIT Electronics</em>
  </a>
</div>

## Qué Necesitas 

- Un cable USB Tipo C para transferencia de datos
- El Arduino IDE u otro compilador compatible con el CH552 MCU
- Software Zadig
- Driver CH372DRV

## Características Clave 

- Funciona con microcontrolador CH552
- Transceptor USB incorporado que permite la programación a través de USB Tipo C
- Opera con voltajes de 5V o 3.3V seleccionables
- Incorpora un LED en el pin 3.4
- Incluye un LED Neopixel en el pin 3.3
- Equipado con dos encabezados para Neopixels adicionales
- Compatible con protoboards estándar
- Dispone de dos conectores JST de 1mm que soportan protocolos QWIIC y STEMMA QT

## Características Técnicas 

- Núcleo del Procesador: Funciona con el núcleo e8051 que tiene soporte completo para el conjunto de instrucciones MCS51.

- Memoria:
  - 16 KB de ROM, divididos en 14 KB para almacenamiento del programa y 2 KB para el bootloader o programación ISP.
  - 128 bytes de memoria flash.
  - 256 bytes de RAM interna para almacenamiento de datos. 

- Periféricos:
  - 2 salidas con capacidad de generación PWM de 8 bits.
  - 4 canales dedicados a funcionalidades ADC de 8 bits.
  - 6 canales de detección de capacitancia que soportan hasta 15 botones táctiles.
  - 12 GPIOs para una interfaz versátil.
  - 14 grupos de interrupciones junto con un temporizador Watch Dog de 8 bits.
  - Botones de reinicio y arranque externos para control del sistema.
  - Recepción de señal de reloj externa mediante multiplexación de GPIOs.
   
- USB:
  - Controlador y transceptor USB integrados que facilitan la programación vía USB sin necesidad de controladores externos.
  - Soporta USB 2.0 con una velocidad máxima de 12 Mbps.
  
- Energía:
  - Compatible con alimentaciones de 5V o 3.3V.
  - Opera en un rango de voltaje de 2.8V a 3.5V.
  
- Comunicación:
  - 2 grupos UART para comunicación serial.
  - Interfaz SPI.
  - I2C implementable en modo software utilizando GPIOs.
  
- Conectores:
  - 2 conectores JST que soportan protocolos como QWIIC, STEMMA QT o similares.
  - Posibilidad de alimentar la placa u otros dispositivos a través de estos puertos.

- LEDs Incorporados:
  - LED Neopixel conectado al GPIO 3.3 con encabezados expandibles para más Neopixels.
  - LED conectado al GPIO 3.4.

## Comenzar 

Para aprender más sobre cómo empezar a usar la placa Cocket Nova, consulta los siguientes recursos:

1. **[Manual](https://github.com/UNIT-Electronics/Cocket-Nova_CH552G-Development-Board/blob/main/Cocket%20Nova%20Product%20Reference%20Manual%20%5BES%5D.pdf)**: Revisa el manual de usuario.

2. **[Cocket Nova y Arduino IDE](https://unit-electronics.github.io/CH552_Curso_introductorio/)**: Este curso ofrece una introducción completa a la programación de la placa de desarrollo Cocket Nova utilizando el Arduino IDE. Incluye ejemplos y demostraciones para ayudarte a explorar de manera efectiva las capacidades de la placa. [**[Introducción al CH552](https://github.com/UNIT-Electronics/CH552_Curso_introductorio?tab=readme-ov-file)**]

3. **[Guía de Inicio Rápido para Cocket Nova](https://unit-electronics.github.io/CH55x_SDCC_Doc/)**: Manual para usar el compilador SDCC con el microcontrolador CH55x. Ayuda a los usuarios a explorar características, iniciar proyectos y configurar ajustes. Compatible con las placas Cocket Nova CH552 para una implementación de proyectos fácil e innovadora. [**[CH55x_SDCC_DocPublic](https://github.com/UNIT-Electronics/CH55x_SDCC_Doc)**]

4. **[Ejemplos para Cocket Nova CH552 usando SDCC](https://github.com/UNIT-Electronics/CH55x_SDCC_Examples)**: Ejemplos de desarrollo en C para el microcontrolador CH55x con el compilador SDCC. Cubre temas como Blink, ADC, PWM, Temporizadores, Interrupciones e I2C. Actualizado regularmente para mejorar el desarrollo de proyectos.

5. **[Recursos de Hardware para Cocket Nova](https://github.com/UNIT-Electronics/Cocket-Nova_CH552G-Development-Board/tree/main/Hardware)**: Explora la documentación de hardware, incluyendo el pinout, esquemas y diagramas de la placa Cocket Nova. Este apartado proporciona recursos esenciales para entender el diseño físico y la configuración del hardware.

Explora estos recursos para aprovechar al máximo tu placa de desarrollo Cocket Nova.

## ¡Se Aceptan Contribuciones!

Apreciamos cualquier contribución que puedas hacer. Si deseas colaborar y contribuir a este proyecto, no dudes en abrir una solicitud de extracción en este repositorio. Tu aporte es valioso y ayuda a mejorar el proyecto para todos. ¡Gracias!

## Licencia 

Este proyecto se distribuye bajo la <a href="https://www.gnu.org/licenses/gpl-3.0.html">**Licencia GPL-3.0**</a>.

## Contáctanos 

Si tienes alguna pregunta o sugerencia, no dudes en enviarnos un correo a ventas@uelectronics.com. Además, te invitamos a visitar nuestro sitio web en <a href="www.uelectronics.com">**www.uelectronics.com**</a>, donde podrás explorar una variedad de módulos, sensores, shields y otros dispositivos para dar vida a tus proyectos.

## Autores

El material fue compilado por el equipo de UNIT Electronics.

- <a href="https://github.com/AlbertoVillanuevaEsquivel">Alberto Villanueva:</a> Diseño de hardware.
- <a href="https://github.com/Cesarbautista10">Cesar Bautista:</a> Diseño de software.

<hr/>

⌨️ Con ❤️ por <a href="www.uelectronics.com">UNIT Electronics</a>
