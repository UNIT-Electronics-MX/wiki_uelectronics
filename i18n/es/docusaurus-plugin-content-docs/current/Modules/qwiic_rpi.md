---
sidebar_position: 4
---


# Módulo QWIIC RPI

## Descripción

El módulo UNIT QWIIC RPI es una interfaz Qwiic diseñada para la placa de desarrollo Raspberry Pi (RPi). Permite una integración sencilla con sensores y dispositivos **compatibles con Qwiic** de **Unit Electronics, SparkFun, Adafruit y otros fabricantes**. Al conectar un cable Qwiic entre el módulo Qwiic RPi y el sensor deseado, puedes apilar fácilmente múltiples sensores en el mismo bus I2C, utilizando solo un puerto I2C en la RPi. Esta característica es particularmente útil para configuraciones compactas como la Raspberry Pi Zero.

<p style={{ textAlign: "center" }}>
    <img src="https://raw.githubusercontent.com/UNIT-Electronics-MX/unit_qwiic_rpi_module/refs/heads/main/hardware/resources/UE0052-Pinout-QWIIC-RPI.jpg" alt="Qwiic RPi" width="500"/>
</p>

## Características

- **Diseño Plug-and-Play** – Simplifica la conexión de sensores y dispositivos Qwiic a la Raspberry Pi.  
- **Comparte el Bus I2C** – Permite que múltiples sensores compartan un solo bus I2C, reduciendo el uso de puertos.  
- **Compacto y Versátil** – Ideal para modelos de Raspberry Pi de formato pequeño como la RPi Zero.  
- **Amplia Compatibilidad** – Funciona con una variedad de sensores y dispositivos habilitados para Qwiic.  
- **Regulador Integrado de 3.3V** – Incluye un regulador de voltaje **AP2112K** que asegura una operación estable de 3.3V para la interfaz Qwiic.  

## Fuente de Alimentación  

El módulo se alimenta directamente del **header de 5V de la Raspberry Pi**, con un regulador de voltaje **AP2112K** que lo convierte a **3.3V**, asegurando la compatibilidad con el protocolo Qwiic. El regulador soporta un **voltaje de entrada máximo de 6V** y proporciona **hasta 400mA** de corriente de salida.

:::note
Este módulo también puede ser utilizado con otros sistemas que proporcionen una fuente de alimentación de **5V o hasta 6V máximo**, siempre que se necesite una salida de 3.3V para el conector Qwiic. 
::: 

:::tip
Además, es **totalmente compatible con nuestro** [UNIT Cargador de Batería LiPo Boost & I2C](https://uelectronics.com/producto/unit-cargador-de-bateria-lipo-boost-i2c/).  

Esta combinación permite que el cargador **mantenga la batería LiPo** mientras el **módulo Qwiic RPi regula la salida**, asegurando un **bus Qwiic estable** para alimentar múltiples dispositivos a través del **bus I2C**, como se muestra en la imagen a continuación.  


### Descripción del Hardware  

<p style={{ textAlign: "center" }}>
    <img src="https://raw.githubusercontent.com/UNIT-Electronics-MX/unit_qwiic_rpi_module/refs/heads/main/hardware/resources/Integration.jpg" alt="Integración Qwiic sin problemas: módulo Qwiic RPi conectado con el cargador LiPo Boost I2C, LCD a través del adaptador de bus Qwiic y placa DualMCU." width="500"/>
</p>

:::

## Aplicaciones

- Prototipado rápido con sensores Qwiic.
- Proyectos IoT que requieren múltiples entradas de sensores.
- Proyectos educativos para aprender comunicación I2C.
- Configuraciones compactas con disponibilidad limitada de GPIO.

## Primeros Pasos

### Requisitos Previos

- Una Raspberry Pi (cualquier modelo con soporte I2C).
- Un sensor o dispositivo habilitado para Qwiic.
- Un cable Qwiic.

### Instalación

1. Conecta el módulo UNIT QWIIC RPI al header GPIO de tu Raspberry Pi.
2. Usa un cable Qwiic para conectar el módulo al sensor o dispositivo deseado.
3. Habilita I2C en tu Raspberry Pi ejecutando `sudo raspi-config` y navegando a `Interfacing Options > I2C`.
<!-- 
### Código de Ejemplo

A continuación, un ejemplo en Python utilizando la biblioteca `smbus` para leer datos de un sensor Qwiic:

```python
import smbus
import time

# Inicializar el bus I2C
bus = smbus.SMBus(1)
direccion_sensor = 0x48  # Reemplaza con la dirección I2C de tu sensor

try:
    while True:
        datos = bus.read_byte(direccion_sensor)
        print(f"Datos del Sensor: {datos}")
        time.sleep(1)
except KeyboardInterrupt:
    print("Saliendo...")
``` -->

## Recursos

- [Descripción General del Ecosistema Qwiic](https://www.sparkfun.com/qwiic)
- [Documentación de Raspberry Pi](https://www.raspberrypi.org/documentation/)
- [Biblioteca Python smbus](https://pypi.org/project/smbus/)
- [DualMCU](https://uelectronics.com/producto/unit-dualmcu-esp32-rp2040-tarjeta-de-desarrollo/)
- [Lipo Boost & I2C](https://uelectronics.com/producto/unit-cargador-de-bateria-lipo-boost-i2c/)


## Licencia

Este proyecto está licenciado bajo la Licencia Pública General de GNU v3.0
