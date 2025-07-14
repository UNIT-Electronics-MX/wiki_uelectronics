---
sidebar_position: 2
---

# Guía de compatibilidad con MicroPython

:::caution
 Cocket Nova CH552 no es compatible con [MicroPython](https://www.micropython.org/)
:::

Esta guía proporciona instrucciones paso a paso para la instalación del firmware y la configuración de la placa **DualMCU-ONE/DualMCU** (RP2040 + ESP32) para usar [MicroPython](https://www.micropython.org/). Estas instrucciones te ayudarán a comenzar con MicroPython en tu placa y a explorar sus características.


Cómo instalar [MicroPython](https://www.micropython.org/) en la placa DualMCU-ONE/DualMCU:


| Recurso                                          | Enlace                                                                                                                                         |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Método alternativo de flasheo con Thonny          | [https://unit-electronics-mx.github.io/ecosistema-de-desarrollo-unit/upython.html](https://unit-electronics-mx.github.io/ecosistema-de-desarrollo-unit/upython.html) |
| Guía sobre el Kit de MicroPython                 | [https://github.com/UNIT-Electronics/UNIT-Pico-Starter-kit](https://github.com/UNIT-Electronics/UNIT-Pico-Starter-kit)                          |

## Instalación utilizando Thonny IDE

Esta sección muestra un ejemplo básico para instalar MicroPython en la placa DualMCU con el microcontrolador ESP32 usando Thonny IDE.

:::caution
La DualMCU cuenta con selector manual para elegir entre el microcontrolador ESP32 y RP2040. Asegúrate de seleccionar el microcontrolador deseado antes de flashear el firmware.

<div align="center">
  <img src="https://unit-electronics.github.io/DualMCU_Curso_introductorio/docs/2-Micropython/images/selector.png" alt="Selector" width="500"/>
</div>

:::


### Interfaz de configuración para actualizar MicroPython 👋
Antes de comenzar, se recomienda realizar la siguiente configuración:

 - [Instalación de Thonny IDE](https://thonny.org/)

Una vez que hayas instalado Thonny IDE, sigue los siguientes pasos:

- Dirígete a *"Ejecutar"* -> *"Configurar intérprete"*  para completar la configuración.

  ![Interpeter](https://raw.githubusercontent.com/UNIT-Electronics/DualMCU-ESP32-MicroPython/refs/heads/main/img/config_intepeter.png)

### Actualización de firmware (ESP32) 🚀

Para poder utilizar MicroPython, es recomendable considerar la actualización. Por lo tanto, es necesario iniciar tu DualMCU ESP32 presionando el botón de FLASH.

1. Da clic en "Instalar o Actualizar MicroPython".

2. Se abrirá una nueva ventana. 

    - Se recomienda utilizar la siguiente configuración: 
        - Variant: Espessif ESP32/WROOM
        - Version: 1.20.0

    ![instalador](https://raw.githubusercontent.com/UNIT-Electronics/DualMCU-ESP32-MicroPython/refs/heads/main/img/instalador.png)

3. Presionar instalar (esperar a que termine la instalación).

Estos pasos te permitirán actualizar y configurar MicroPython de manera adecuada en tu DualMCU ESP32.



## Instalación Rápida Usando Esptool

Existen varias formas de instalar MicroPython en la placa **DualMCU-ONE/DualMCU**. A continuación, se muestra un método rápido utilizando `esptool.py` para flashear el firmware en el ESP32 y el firmware UF2 en el RP2040.

- **Firmware de MicroPython para ESP32**  
  [micropython_uelectronics_version2025_DualMCU.bin](https://github.com/UNIT-Electronics-MX/ecosistema-de-desarrollo-unit/releases/download/Micropython_by_uelectronics/micropython_uelectronics_version2025_DualMCU.bin)


- **`esptool.py`** – Requerido para flashear el firmware en el ESP32 o [esptools](https://espressif.github.io/esptool-js/)

1. Descarga el **Firmware MicroPython** para el **ESP32** y **RP2040** desde la página oficial de MicroPython.
2. Conecta la placa **DualMCU-ONE/DualMCU** a tu computadora mediante USB.

3. Flashea el firmware para **ESP32** utilizando el siguiente comando:

```bash
esptool.py --chip esp32 --port /dev/ttyUSB0 --baud 460800 write_flash -z 0x1000 micropython_uelectronics_version2025_DualMCU.bin
```

4. Flashea el firmware UF2 para **RP2040** siguiendo estos pasos:

- Mantén presionado el botón **BOOT** en el **RP2040**.
- Conecta la placa **DualMCU-ONE/DualMCU** a tu computadora mediante USB.
- Suelta el botón **BOOT**.
- Arrastra y suelta el archivo del firmware UF2 del **RP2040** en la unidad correspondiente.

5. Una vez flasheado el firmware, la placa **DualMCU-ONE/DualMCU** estará lista para ejecutar MicroPython.

### Ejecutando MicroPython Terminal GNU/Linux

1. Abre una ventana de terminal y conéctate al **ESP32** utilizando el siguiente comando:

```bash
picocom /dev/ttyUSB0 -b 115200
```

2. Conéctate al **RP2040** utilizando el siguiente comando:

```bash
picocom /dev/ttyACM0 -b 115200
```

3. Ahora puedes ejecutar código Python directamente en la placa utilizando el intérprete interactivo.

## Instalación Rápida UF2

Otra forma de instalar MicroPython en la placa **DualMCU-ONE/DualMCU** es mediante el uso de un archivo UF2 para el **RP2040**.

- **Firmware de MicroPython para RP2040**  
  [Micropython_DualMCU_2025_RP2040.uf2](https://github.com/UNIT-Electronics-MX/ecosistema-de-desarrollo-unit/releases/download/Micropython_by_uelectronics/Micropython_DualMCU_2025_RP2040.uf2)


 Conecta la placa **DualMCU-ONE/DualMCU** a tu computadora mediante USB  presionando el botón **BOOT** en el **RP2040**. Luego, arrastra y suelta el archivo del firmware UF2 del **RP2040** en la unidad correspondiente.

 ![RP2040](https://raw.githubusercontent.com/UNIT-Electronics/DualMCU/refs/heads/main/Docs/RP2040-Boot_button.jpg)

##  Abrir y ejecutar Thonny IDE🛠️

Una vez que hayas instalado MicroPython en tu placa **DualMCU-ONE/DualMCU**, puedes abrir Thonny IDE y comenzar a programar en Python.

1. Abre Thonny IDE y selecciona el intérprete de MicroPython para tu placa.

```python
import machine
import time

led_pin = machine.Pin(4, machine.Pin.OUT)
led_pin2 = machine.Pin(26, machine.Pin.OUT)
led_pin3 = machine.Pin(25, machine.Pin.OUT)


def loop():
     while True:
        led_pin.on()    
        led_pin2.on()   
        led_pin3.on()  
        time.sleep(1)  
        led_pin.off()   
        led_pin2.off()  
        led_pin3.off()  
        time.sleep(1)   

loop()
```

**Proyecto en funcionamiento Ejemplo para la placa DualMCU-ONE/DualMCU ESP32**

Una vez que hayas realizado todas las configuraciones y conexiones necesarias, podrás ver el proyecto en funcionamiento.

![LedRGB](https://raw.githubusercontent.com/UNIT-Electronics/DualMCU-ESP32-MicroPython/refs/heads/main/img/blink_led2.gif)