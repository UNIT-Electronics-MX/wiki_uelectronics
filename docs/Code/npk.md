---
sidebar_position: 2
---

# RS485 Soil Sensor Library

This MicroPython library allows communication with the RS485 soil sensor to read:

- Soil Humidity (%)
- Temperature (°C)
- Electrical Conductivity (EC, µS/cm)
- pH Level

## Features

- Simple integration with MicroPython UART
- CRC validation and sensor response handling
- Fully open source (GPLv3)

## Getting Started

### Installation

1. Clone the repository or download the `modbus_sensor.py` file.

``` bash
git clone git@github.com:UNIT-Electronics-MX/unit_rs485_soil_temperature_humity_ec_ph_library_micropython.git
```

2. Copy the `modbus_sensor.py` file to your MicroPython device.
3. Import the `ModbusSensor` class in your MicroPython script.
4. Initialize the sensor with the appropriate UART pins and baud rate.
5. Use the `get_sensor_data()` method to read the sensor values.
6. Handle the sensor data as needed.
7. Make sure to handle exceptions and errors as needed.

> **Note:** This library is designed for the ESP32 and may require modifications for other platforms or hardware. 

Recommended to use a 5 V [RS485 module](https://uelectronics.com/producto/convertidor-de-senal-ttl-a-rs485/) for compatibility with the ESP32. 

### Example

```python
from modbusSensor.modbus_sensor import ModbusSensor
import time

sensor = ModbusSensor(tx_pin=26, rx_pin=25, baudrate=4800)

while True:
    humidity, temperature, ec, ph = sensor.get_sensor_data()
    print(f"Humidity: {humidity}% | Temperature: {temperature}°C | EC: {ec} µS/cm | pH: {ph}")
    time.sleep(1)
```

# File Transfer using ampy 
## Using ampy to transfer files to ESP32

1. Install ampy using pip:
   ```bash
   pip install adafruit-ampy
   ```
2. Connect your ESP32 to your computer via USB.

3. Use ampy to transfer the `modbus_sensor.py` file to the ESP32:
   ```bash
   ampy --port /dev/ttyUSB0 put modbus_sensor.py
   ```

Replace `/dev/ttyUSB0` with the appropriate port for your system. Remember to check the port using the `ls /dev/tty*` command.

4. After transferring the file, you can access it in your MicroPython environment.

5. To run the script, you can use the REPL or create a new script that imports `modbus_sensor` and uses it as shown in the example above.
