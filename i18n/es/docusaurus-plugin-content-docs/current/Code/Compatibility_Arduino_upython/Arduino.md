---
sidebar_position: 1
---

# Guía de Instalación del Paquete JSON UNIT Electronics 

Esta guía proporciona un paso a paso para instalar los paquetes oficiales de soporte de placas (BSPs) necesarios para programar las placas de desarrollo de **UNIT Electronics** utilizando el IDE de Arduino. Estos paquetes garantizan una integración fluida con el entorno Arduino y habilitan el acceso completo a las características de cada placa.

Las placas compatibles incluyen:
- [**DualMCU-ONE** (ESP32 + RP2040)](https://uelectronics.com/producto/unit-dualmcu-one-esp32-rp2040/)
- [**Cocket Nova CH552**](https://uelectronics.com/producto/unit-cocket-nova-ch552g-tarjeta-de-desarrollo/)
- [**Pulsar C6** (ESP32-C6)](https://uelectronics.com/producto/unit-pulsar-esp32-c6/)
- **Pulsar H2** (ESP32-H2)
- **TouchDot S3** (ESP32-S3 Mini)

:::tip
Para especificaciones detalladas y documentación, visita el [**sitio web de UNIT Electronics**](https://uelectronics.com/).
:::


## Requisitos Previos

Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas:

- [**Arduino IDE**](https://www.arduino.cc/en/software) – Necesario para cargar y gestionar sketches.
- [**Controladores USB CH34x**](https://www.wch-ic.com/downloads/CH341SER_EXE.html) – Requeridos para la comunicación USB con algunas placas (por ejemplo, CH552, ESP32).


## Instalación Rápida para Placas ESP32, RP2040 y CH552

Agrega las siguientes URLs al campo **Additional Board Manager URLs** en las preferencias del IDE de Arduino:

```plaintext
https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-ESP32-Arduino-Package/main/package_Uelectronics_esp32_index.json
https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-RP2040-Arduino-Package/main/package_Uelectronics_rp2040_index.json
https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-CH552-Arduino-Package/refs/heads/develop/package_duino_mcs51_index.json
```

Después de agregar las URLs:

1. Ve a **Herramientas → Placa → Gestor de Placas**.
2. Busca **UNIT Electronics**.
3. Haz clic en **Instalar** para los paquetes correspondientes.

Alternativamente, puedes instalar los paquetes manualmente siguiendo los pasos a continuación.


## 1. Instalación del Paquete de la Placa DualMCU-ONE

La placa **DualMCU-ONE** incluye tanto un microcontrolador ESP32 como un RP2040. Necesitarás instalar paquetes para ambos.

### Paso 1: Instalar el Paquete de la Placa ESP32

1. Abre el **IDE de Arduino**.
2. Navega a **Archivo → Preferencias**.
3. En el campo **Additional Board Manager URLs**, ingresa:

    ```plaintext
    https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-ESP32-Arduino-Package/main/package_Uelectronics_esp32_index.json
    ```
4. Haz clic en **OK**.
5. Ve a **Herramientas → Placa → Gestor de Placas**.
6. Busca **DualMCU**.
7. Haz clic en **Instalar**.
8. Una vez instalado, selecciona **DualMCU** desde el menú **Placa**.

### Paso 2: Instalar el Paquete de la Placa RP2040

1. Repite los pasos anteriores, pero esta vez ingresa la siguiente URL:

    ```plaintext
    https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-RP2040-Arduino-Package/main/package_Uelectronics_rp2040_index.json
    ```
2. Busca **UNIT RP2040** en el Gestor de Placas.
3. Instala el paquete y selecciona **RP2040** desde el menú **Placa**.

#### Captura de Pantalla Ejemplo

<div style={{ textAlign: "center" }}>
  <img src="https://raw.githubusercontent.com/Rabadan-uelectronics/DualMCU-RP2040-Arduino-Package/refs/heads/main/releases/download/0.0.0/BoardsManager.png" width="600px" />
</div>


## 2. Instalación del Paquete de la Placa Cocket Nova CH552

Para programar la **Cocket Nova CH552**, sigue estos pasos:

1. Abre el **IDE de Arduino**.
2. Navega a **Archivo → Preferencias**.
3. En el campo **Additional Board Manager URLs**, agrega:

    ```plaintext
    https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-CH552-Arduino-Package/refs/heads/develop/package_duino_mcs51_index.json
    ```
4. Haz clic en **OK**.
5. Abre **Herramientas → Placa → Gestor de Placas**.
6. Busca **Cocket Nova**.
7. Haz clic en **Instalar**.
8. Después de la instalación, selecciona **Cocket Nova** desde el menú **Placa**.

#### Captura de Pantalla Ejemplo

<div style={{ textAlign: "center" }}>
  <img src="https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-CH552-Arduino-Package/refs/heads/main/images/board_json.png" width="600px" />
</div>
