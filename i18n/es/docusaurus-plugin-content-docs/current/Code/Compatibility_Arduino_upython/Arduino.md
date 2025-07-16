---
sidebar_position: 1
---

# Guía de instalación de paquetes de placas – UNIT Electronics

Esta guía proporciona un paso a paso para instalar los paquetes oficiales de soporte de placas (BSPs) necesarios para programar tarjetas de desarrollo de **UNIT Electronics** utilizando el entorno Arduino IDE. Estos paquetes permiten una integración completa y sin complicaciones.

## Placas compatibles

- [**DualMCU-ONE** (ESP32 + RP2040)](https://uelectronics.com/producto/unit-dualmcu-one-esp32-rp2040/)
- [**Pulsar C6** (ESP32-C6)](https://uelectronics.com/producto/unit-pulsar-esp32-c6/)
- **Pulsar H2** (ESP32-H2)
- **TouchDot S3** (ESP32-S3 Mini)
- [**Cocket Nova CH552**](https://uelectronics.com/producto/unit-cocket-nova-ch552g-tarjeta-de-desarrollo/)

:::tip
Para especificaciones técnicas y documentación de cada placa, visita el [**sitio web oficial de UNIT Electronics**](https://uelectronics.com/).
:::

---

## Requisitos previos

Antes de comenzar, asegúrate de contar con lo siguiente:

- [**Arduino IDE**](https://www.arduino.cc/en/software) – Requerido para cargar y gestionar programas.
- [**Controladores CH34x USB**](https://www.wch-ic.com/downloads/CH341SER_EXE.html) – Necesarios para la comunicación por USB en placas de ESP32.
- [**Controladores USB CH375**](https://www.wch-ic.com/downloads/CH372DRV_EXE.html) – Necesarios para placas de la serie CH552.


---

## Instalación rápida (todas las placas)

Agrega las siguientes URLs al campo **URLs adicionales del Gestor de tarjetas** en las preferencias de Arduino IDE:

```plaintext
https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-ESP32-Arduino-Package/main/package_Uelectronics_esp32_index.json
https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-RP2040-Arduino-Package/main/package_Uelectronics_rp2040_index.json
https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-CH552-Arduino-Package/refs/heads/develop/package_duino_mcs51_index.json
````

**Pasos:**

1. Abre **Arduino IDE** y ve a **Archivo → Preferencias**.
2. Pega las URLs en **URLs adicionales del Gestor de tarjetas**.
3. Dirígete a **Herramientas → Placa → Gestor de tarjetas**.
4. Busca **UNIT Electronics** y haz clic en **Instalar** según el paquete requerido.

---

## 1. Instalación para ESP32 y RP2040

La placa **DualMCU-ONE** requiere instalar tanto el paquete para ESP32 como el de RP2040.

### A. Instalar paquete ESP32

1. Abre **Archivo → Preferencias**.
2. Agrega la siguiente URL:

   ```plaintext
   https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-ESP32-Arduino-Package/main/package_Uelectronics_esp32_index.json
   ```
3. Abre el **Gestor de tarjetas** y busca **UNIT ESP32**.
4. Haz clic en **Instalar** y selecciona la placa **DualMCU ESP32** desde el menú de placas.

### B. Instalar paquete RP2040

1. Agrega esta URL en las preferencias:

   ```plaintext
   https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-RP2040-Arduino-Package/main/package_Uelectronics_rp2040_index.json
   ```
2. Abre el **Gestor de tarjetas** y busca **UNIT RP2040**.
3. Haz clic en **Instalar** y selecciona la placa correspondiente a **RP2040**.

#### Captura de pantalla

<div style={{ textAlign: "center" }}>
  <img src="https://raw.githubusercontent.com/Rabadan-uelectronics/DualMCU-RP2040-Arduino-Package/refs/heads/main/releases/download/0.0.0/BoardsManager.png" width="600px" />
</div>

---

## 2. Instalación para CH552 – Cocket Nova

Sigue estos pasos para instalar soporte para la **Cocket Nova CH552**:

1. Abre **Arduino IDE → Archivo → Preferencias**.
2. Agrega la siguiente URL del paquete CH552:

   ```plaintext
   https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-CH552-Arduino-Package/refs/heads/develop/package_duino_mcs51_index.json
   ```
3. Ve al **Gestor de tarjetas** y busca **Cocket Nova**.
4. Haz clic en **Instalar** y luego selecciona **Cocket Nova (CH552)** desde el menú de placas.

#### Captura de pantalla

<div style={{ textAlign: "center" }}>
  <img src="https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-CH552-Arduino-Package/refs/heads/main/images/board_json.png" width="600px" />
</div>