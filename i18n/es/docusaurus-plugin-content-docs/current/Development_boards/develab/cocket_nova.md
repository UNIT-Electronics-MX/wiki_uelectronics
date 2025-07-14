---
sidebar_position: 3
---

# Cocket Nova 

La placa de desarrollo denominada Cocket Nova, equipada con un microcontrolador CH552, se ajusta de manera óptima al estándar de conexión para protoboards y es capaz de ser programada directamente con cable USB Tipo C. Además, posee un LED Neopixel integrado en el pin 3.3 y una salida de expansión continua para tiras Neopixels. Además, se encuentra equipado con un diodo emisor de luz (LED) conectado al pin 3.4, botones para el reinicio y el arranque, un selector de fuente de alimentación y dos conectores JST de 1mm que soportan los protocolos QWIIC, STEMMA QT, entre otros.

Este dispositivo resulta idóneo para principiantes en el campo de los microcontroladores y para entusiastas de la tecnología retro que buscan proyectos que requieran un dispositivo USB de 8 bits y un costo reducido.

<div style={{ textAlign: "center" }}>
  ![Insignia estática](https://img.shields.io/badge/1.2-blue?style=plastic&label=Versión)
</div>

<div style={{ textAlign: "center" }}>
  <a href="https://uelectronics.com/producto/unit-cocket-nova-ch552g-tarjeta-de-desarrollo/">
  <img src="https://raw.githubusercontent.com/UNIT-Electronics/CH55x_SDCC_Doc/refs/heads/main/src/source/_static/CH552_Sq.png" width="300px"/>
  <br/>
  <em>Haz clic aquí para comprar una en la tienda de UNIT Electronics</em>
  </a>
</div>


## Soporte y Recursos 

Para aprender más sobre cómo empezar a usar la placa Cocket Nova, consulta los siguientes recursos:

<table>
  <thead>
    <tr>
      <th>Recurso</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/UNIT-Electronics/Cocket-Nova_CH552G-Development-Board/blob/main/Cocket%20Nova%20Product%20Reference%20Manual%20%5BES%5D.pdf">Manual</a></td>
      <td>Revisa el manual de usuario.</td>
    </tr>
    <tr>
      <td><a href="https://unit-electronics.github.io/CH552_Curso_introductorio/">Cocket Nova y Arduino IDE</a></td>
      <td>Este curso ofrece una introducción completa a la programación de la placa de desarrollo Cocket Nova utilizando el Arduino IDE. Incluye ejemplos y demostraciones para ayudarte a explorar de manera efectiva las capacidades de la placa. <a href="https://github.com/UNIT-Electronics/CH552_Curso_introductorio?tab=readme-ov-file">Introducción al CH552</a></td>
    </tr>
    <tr>
      <td><a href="https://unit-electronics.github.io/CH55x_SDCC_Doc/">Guía de Inicio Rápido para Cocket Nova</a></td>
      <td>Manual para usar el compilador SDCC con el microcontrolador CH55x. Ayuda a los usuarios a explorar características, iniciar proyectos y configurar ajustes. Compatible con las placas Cocket Nova CH552 para una implementación de proyectos fácil e innovadora. <a href="https://github.com/UNIT-Electronics/CH55x_SDCC_Doc">CH55x_SDCC_DocPublic</a></td>
    </tr>
    <tr>
      <td><a href="https://github.com/UNIT-Electronics/CH55x_SDCC_Examples">Ejemplos para Cocket Nova CH552 usando SDCC</a></td>
      <td>Ejemplos de desarrollo en C para el microcontrolador CH55x con el compilador SDCC. Cubre temas como Blink, ADC, PWM, Temporizadores, Interrupciones e I2C. Actualizado regularmente para mejorar el desarrollo de proyectos.</td>
    </tr>
    <tr>
      <td><a href="https://github.com/UNIT-Electronics/Cocket-Nova_CH552G-Development-Board/tree/main/Hardware">Recursos de Hardware para Cocket Nova</a></td>
      <td>Explora la documentación de hardware, incluyendo el pinout, esquemas y diagramas de la placa Cocket Nova. Este apartado proporciona recursos esenciales para entender el diseño físico y la configuración del hardware.</td>
    </tr>
  </tbody>
</table>

Explora estos recursos para aprovechar al máximo tu placa de desarrollo Cocket Nova.
## Pinout

La placa Cocket Nova cuenta con una amplia variedad de pines de entrada/salida (E/S) que permiten la conexión de sensores, actuadores y otros dispositivos a la placa. A continuación, se muestra el pinout de la placa Cocket Nova:

<div style={{ textAlign: "center" }}>
  <img src="https://raw.githubusercontent.com/UNIT-Electronics/Cocket-Nova_CH552G-Development-Board/refs/heads/main/Hardware/Resources/CocketNova-Pinout.jpg" width="700px" />
</div>

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
<table>
  <thead>
    <tr>
      <th>Característica</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Núcleo del Procesador</td>
      <td>Funciona con el núcleo e8051 que tiene soporte completo para el conjunto de instrucciones MCS51.</td>
    </tr>
    <tr>
      <td>Memoria</td>
      <td>
        <ul>
          <li>16 KB de ROM, divididos en 14 KB para almacenamiento del programa y 2 KB para el bootloader o programación ISP.</li>
          <li>128 bytes de memoria flash.</li>
          <li>256 bytes de RAM interna para almacenamiento de datos.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Periféricos</td>
      <td>
        <ul>
          <li>2 salidas con capacidad de generación PWM de 8 bits.</li>
          <li>4 canales dedicados a funcionalidades ADC de 8 bits.</li>
          <li>6 canales de detección de capacitancia que soportan hasta 15 botones táctiles.</li>
          <li>12 GPIOs para una interfaz versátil.</li>
          <li>14 grupos de interrupciones junto con un temporizador Watch Dog de 8 bits.</li>
          <li>Botones de reinicio y arranque externos para control del sistema.</li>
          <li>Recepción de señal de reloj externa mediante multiplexación de GPIOs.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>USB</td>
      <td>
        <ul>
          <li>Controlador y transceptor USB integrados que facilitan la programación vía USB sin necesidad de controladores externos.</li>
          <li>Soporta USB 2.0 con una velocidad máxima de 12 Mbps.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Energía</td>
      <td>
        <ul>
          <li>Compatible con alimentaciones de 5V o 3.3V.</li>
          <li>Opera en un rango de voltaje de 2.8V a 3.5V.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Comunicación</td>
      <td>
        <ul>
          <li>2 grupos UART para comunicación serial.</li>
          <li>Interfaz SPI.</li>
          <li>I2C implementable en modo software utilizando GPIOs.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Conectores</td>
      <td>
        <ul>
          <li>2 conectores JST que soportan protocolos como QWIIC, STEMMA QT o similares.</li>
          <li>Posibilidad de alimentar la placa u otros dispositivos a través de estos puertos.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>LEDs Incorporados</td>
      <td>
        <ul>
          <li>LED Neopixel conectado al GPIO 3.3 con encabezados expandibles para más Neopixels.</li>
          <li>LED conectado al GPIO 3.4.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>


## Licencia 

Este proyecto se distribuye bajo la <a href="https://www.gnu.org/licenses/gpl-3.0.html">**Licencia GPL-3.0**</a>.


## Autores

El material fue compilado por el equipo de UNIT Electronics.

- <a href="https://github.com/AlbertoVillanuevaEsquivel">Alberto Villanueva:</a> Diseño de hardware.
- <a href="https://github.com/Cesarbautista10">Cesar Bautista:</a> Diseño de software.

