---
sidebar_position: 2
---

# Ejemplos UF2 para DualMCU RP2040

Este apartado proporciona archivos UF2 (Actualización de Firmware Universal - por sus siglas en inglés) diseñados específicamente para el microcontrolador RP2040 en la placa DualMCU. Estos archivos permiten a los usuarios cargar fácilmente firmware de ejemplo en la placa, facilitando la personalización y las actualizaciones de funcionalidad. Se incluyen varios ejemplos de UF2, lo que permite a los usuarios explorar diferentes capacidades y seleccionar el que mejor se adapte a sus necesidades.

## Archivos UF2 Disponibles

### [Test.uf2](https://github.com/UNIT-Electronics/DualMCU/blob/main/Software/UF2_Files/Test.uf2)
Este archivo está diseñado para probar la comunicación USB-serial, el LED integrado "L3" (GPIO 25) y el neopixel en la DualMCU RP2040. Al cargarse, verifica estas funciones, siendo útil para diagnósticos y comprobaciones de funcionalidad.

### [UNIT_NEOPIXEL_ws2812.uf2](https://github.com/UNIT-Electronics/DualMCU/blob/main/Software/UF2_Files/UNIT_NEOPIXEL_ws2812.uf2)
Este ejemplo prueba el LED neopixel WS2812 integrado ("L4"). Al cargarse en la placa, genera una secuencia aleatoria de patrones multicolores, ayudando a los usuarios a verificar el funcionamiento del neopixel y a explorar efectos visuales.

### [Blink.uf2](https://github.com/UNIT-Electronics/DualMCU/blob/main/Software/UF2_Files/blink.uf2)
Este archivo prueba el LED "L3" (GPIO 25) haciéndolo parpadear a intervalos de un segundo. Es útil para confirmar el funcionamiento del LED y se recomienda como un archivo UF2 "limpio" cuando el puerto COM no es reconocido en el IDE de Arduino.

### [flash_nuke.uf2](https://github.com/UNIT-Electronics/DualMCU/blob/main/Software/UF2_Files/flash_nuke.uf2)
Este archivo borra completamente el firmware en el DualMCU RP2040, restaurándolo a su estado de fábrica. Normalmente se utiliza para preparar la placa para una nueva instalación de firmware.

**Precaución:** Usar este archivo eliminará permanentemente el firmware y los datos existentes.

### [usb_microphone.uf2](https://github.com/UNIT-Electronics/DualMCU/blob/main/Software/UF2_Files/usb_microphone.uf2)
Este archivo transforma el DualMCU en un micrófono USB de alto rendimiento utilizando el microcontrolador RP2040. Para utilizar esta función, conecta un micrófono MEMS PDM (Modulación por Densidad de Pulsos), como:

- **MP34DT06J**
- **UNIT PDM MEMS Microphone MP34DT05**
- **Adafruit PDM Microphone Module MP34DT01-M**

Esta funcionalidad es ideal para videoconferencias o aplicaciones de audio en general, proporcionando un rendimiento de sonido de alta calidad.

<a href="https://github.com/UNIT-Electronics/UNIT-PDM-MEMS-Microphone-Breakout-Guide-UF2#readme"><img src="https://github.com/UNIT-Electronics/DualMCU/blob/main/Software/UF2_Files/AR3631-UNIT-MP34DT05TR-A-Modulo-Microfono-PDM-V2.jpg?raw=false" width="200px"/></a>   <img src="UF2_Files/PDM-Mic.jpg?raw=false" width="170px"/><br/>

## Conectando un micrófono PDM

Para conectar un micrófono PDM UNIT MP34DT05TR-A o un módulo de micrófono PDM de Adafruit al RP2040 en la placa DualMCU, sigue estos pasos:

1. Asegúrate de contar con el hardware requerido: un módulo de micrófono PDM y la placa DualMCU.
2. Localiza GPIO12 y GPIO13 en la placa DualMCU [(Diagrama de pines)](https://github.com/UNIT-Electronics/DualMCU/blob/main/Hardware/Resources/EU0002-DUALMCU%20V3.1.2.jpg) y conecta el micrófono de la siguiente manera:

   - **DualMCU (3.3V)** → **PDM-MIC (3.3V)**
   - **DualMCU (GND)** → **PDM-MIC (GND)**
   - **DualMCU (GPIO12)** → **PDM-MIC (señal SCL)**
   - **DualMCU (GPIO13)** → **PDM-MIC (señal DAT)**

3. Enciende la placa DualMCU y el módulo del micrófono.
4. Ingresa en el modo BOOT del RP2040 y arrastra el archivo `usb_microphone.uf2` a la placa DualMCU.

## Resolución de Problemas

### Ingresando al Modo BOOT
Para cargar ejemplos UF2 en el RP2040 de la placa DualMCU:

1. Mantén presionado el botón **BOOT**.
2. Presiona y suelta rápidamente el botón **RST**.
3. Suelta el botón **BOOT**.
4. La placa entrará en el modo BOOT, apareciendo como un dispositivo de almacenamiento en tu computadora.
5. Arrastra y suelta el archivo UF2 deseado en la carpeta del dispositivo.

Para más detalles, consulta la [sección "Operación de la Placa", paso 2 de la Referencia del Manual del Producto](https://github.com/UNIT-Electronics/DualMCU/blob/main/DualMCU(Product%20Reference%20Manual).pdf).
