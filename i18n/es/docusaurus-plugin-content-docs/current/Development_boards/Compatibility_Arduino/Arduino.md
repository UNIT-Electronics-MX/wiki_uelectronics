---
sidebar_position: 1
---

# Guía de Instalación para Arduino IDE -  Unit Electronics

Esta guía proporciona instrucciones paso a paso para instalar los paquetes de soporte de placa necesarios para programar las placas de desarrollo **DualMCU-ONE/DualMCU** (RP2040 + ESP32) y **Cocket Nova CH552** utilizando el Arduino IDE. Estos paquetes permiten el desarrollo dentro del entorno de Arduino, garantizando una integración fluida con su hardware.

---

## Requisitos Previos

Antes de continuar, asegúrese de tener instaladas las siguientes herramientas:

- **[Arduino IDE](https://www.arduino.cc/en/software)** – Requerido para programar las placas.
- **[Controladores USB](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers)** – Necesarios para la comunicación con la placa.
- **Paquetes de Soporte de Placa:**
   - **[DualMCU-ONE (ESP32 + RP2040)](https://uelectronics.com/producto/unit-dualmcu-one-esp32-rp2040/)**
   - **[Cocket Nova CH552](https://uelectronics.com/producto/unit-cocket-nova-ch552g-tarjeta-de-desarrollo/)**

---
## Instalación Rápida

Copie y pegue las siguientes URL en el campo de **URLs Adicionales para el Gestor de Placas** en las preferencias del Arduino IDE:
```bash
https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-ESP32-Arduino-Package/main/package_Uelectronics_esp32_index.json
https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-RP2040-Arduino-Package/main/package_Uelectronics_rp2040_index.json
https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-CH552-Arduino-Package/refs/heads/develop/package_duino_mcs51_index.json
```
Busque las placas **Unit Electronics** en el **Gestor de Placas** e instale todos los paquetes necesarios.

o instale los paquetes manualmente siguiendo los pasos a continuación.  

---

## 1. Instalación Paso a Paso del Paquete para la Placa DualMCU-ONE

### **Paso 1: Instalar el Paquete ESP32**

1. Abra el **Arduino IDE**.
2. Vaya a **Archivo > Preferencias**.
3. En el campo **URLs Adicionales para el Gestor de Placas**, ingrese la siguiente URL:

    ```
    https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-ESP32-Arduino-Package/main/package_Uelectronics_esp32_index.json
    ```
4. Haga clic en **OK** para guardar las preferencias.
5. Vaya a **Herramientas > Placa > Gestor de Placas**.
6. Busque **DualMCU**.
7. Haga clic en **Instalar**.
8. Una vez instalado, seleccione **DualMCU** en el menú de **Placas**.

### **Paso 2: Instalar el Paquete RP2040**

1. Abra el **Arduino IDE**.
2. Vaya a **Archivo > Preferencias**.
3. En el campo **URLs Adicionales para el Gestor de Placas**, ingrese la siguiente URL:

    ```
    https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-RP2040-Arduino-Package/main/package_Uelectronics_rp2040_index.json
    ```
4. Haga clic en **OK** para guardar las preferencias.
5. Vaya a **Herramientas > Placa > Gestor de Placas**.
6. Busque **RP2040**.
7. Haga clic en **Instalar**.
8. Una vez instalado, seleccione **RP2040** en el menú de **Placas**.

#### **Captura de Pantalla de Ejemplo**
<div style={{ textAlign: "center" }}>
      <img src="https://raw.githubusercontent.com/Rabadan-uelectronics/DualMCU-RP2040-Arduino-Package/refs/heads/main/releases/download/0.0.0/BoardsManager.png" width="600px" />
      <br/>
</div>

---

## 2. Instalación del Paquete para la Placa Cocket Nova CH552

Para programar la placa **Cocket Nova CH552** utilizando el Arduino IDE, siga estos pasos:

1. Abra el **Arduino IDE**.
2. Vaya a **Archivo > Preferencias**.
3. En el campo **URLs Adicionales para el Gestor de Placas**, ingrese la siguiente URL:

    ```
    https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-CH552-Arduino-Package/refs/heads/develop/package_duino_mcs51_index.json
    ```
4. Haga clic en **OK** para guardar las preferencias.
5. Vaya a **Herramientas > Placa > Gestor de Placas**.
6. Busque **Cocket Nova**.
7. Haga clic en **Instalar**.
8. Una vez instalado, seleccione **Cocket Nova** en el menú de **Placas**.

#### **Captura de Pantalla de Ejemplo**
<div style={{ textAlign: "center" }}>
      <img src="https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-CH552-Arduino-Package/refs/heads/main/images/board_json.png" width="600px" />
      <br/>
</div>

:::tip

¡Ha instalado correctamente los paquetes necesarios para programar las placas **DualMCU-ONE** (ESP32 + RP2040) y **Cocket Nova CH552** en el Arduino IDE! Ahora está listo para comenzar a desarrollar sus proyectos.

Para obtener documentación adicional e ideas de proyectos, visite **[UNIT Electronics](https://uelectronics.com/)**.
