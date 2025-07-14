---
sidebar_position: 2
---

# Biblioteca RS485 para Sensores de Suelo

Esta biblioteca para MicroPython permite la comunicación con el sensor de suelo RS485 para leer:

- 🌱 Humedad del suelo (%)
- 🌡️ Temperatura (°C)
- ⚡ Conductividad eléctrica (CE, µS/cm)
- 🧪 Nivel de pH

## Características

- Integración sencilla con UART en MicroPython
- Validación CRC y manejo de respuesta del sensor
- Totalmente de código abierto (GPLv3)

## Para Empezar

### Instalación

1. Clona el repositorio o descarga el archivo `modbus_sensor.py`.

``` bash
git clone git@github.com:UNIT-Electronics-MX/unit_rs485_soil_temperature_humity_ec_ph_library_micropython.git
```

2. Copia el archivo `modbus_sensor.py` a tu dispositivo con MicroPython.
3. Importa la clase `ModbusSensor` en tu script de MicroPython.
4. Inicializa el sensor con los pines UART y la velocidad de transmisión adecuados.
5. Utiliza el método `get_sensor_data()` para leer los valores del sensor.
6. Maneja los datos del sensor según sea necesario.
7. Asegúrate de gestionar las excepciones y errores de manera apropiada.

> **Nota:** Esta biblioteca está diseñada para el ESP32 y puede requerir modificaciones para otras plataformas o hardware.

Se recomienda utilizar un módulo RS485 de 5 V [RS485 module](https://uelectronics.com/producto/convertidor-de-senal-ttl-a-rs485/) para asegurar la compatibilidad con el ESP32.

### Ejemplo

```python
from modbusSensor.modbus_sensor import ModbusSensor
import time

sensor = ModbusSensor(tx_pin=26, rx_pin=25, baudrate=4800)

while True:
   humedad, temperatura, ce, ph = sensor.get_sensor_data()
   print(f"Humedad: {humedad}% | Temperatura: {temperatura}°C | CE: {ce} µS/cm | pH: {ph}")
   time.sleep(1)
```

# Transferencia de Archivos usando ampy 
## Uso de ampy para transferir archivos al ESP32

1. Instala ampy usando pip:
   ```bash
   pip install adafruit-ampy
   ```
2. Conecta tu ESP32 a la computadora vía USB.

3. Utiliza ampy para transferir el archivo `modbus_sensor.py` al ESP32:
   ```bash
   ampy --port /dev/ttyUSB0 put modbus_sensor.py
   ```

Sustituye `/dev/ttyUSB0` por el puerto adecuado en tu sistema. Recuerda verificar el puerto utilizando el comando `ls /dev/tty*`.

4. Después de transferir el archivo, podrás acceder a él en tu entorno MicroPython.

5. Para ejecutar el script, puedes usar el REPL o crear un nuevo script que importe `modbus_sensor` y lo utilice como se muestra en el ejemplo anterior.
