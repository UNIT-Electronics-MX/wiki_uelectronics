---
sidebar_position: 4
---


# QWIIC RPI Module

## Description

The UNIT QWIIC RPI Module is a Qwiic interface designed for the Raspberry Pi (RPi) single-board computer. It enables seamless integration with **Qwiic-compatible** sensors and devices from **Unit Electronics, SparkFun, Adafruit, and other manufacturers**. By connecting a Qwiic cable between the Qwiic RPi module and your desired sensor, you can easily stack multiple sensors on the same I2C bus, utilizing only one I2C port on the RPi. This feature is particularly beneficial for compact setups like the Raspberry Pi Zero.

<p style={{ textAlign: "center" }}>
    <img src="https://raw.githubusercontent.com/UNIT-Electronics-MX/unit_qwiic_rpi_module/refs/heads/main/hardware/resources/UE0052-Pinout-QWIIC-RPI.jpg" alt="Qwiic RPi" width="500"/>
</p>

## Features

- **Plug-and-Play Design** – Simplifies the connection of Qwiic sensors and devices to the Raspberry Pi.  
- **I2C Bus Sharing** – Allows multiple sensors to share a single I2C bus, reducing port usage.  
- **Compact and Versatile** – Ideal for small form-factor Raspberry Pi models like the RPi Zero.  
- **Wide Compatibility** – Works with a variety of Qwiic-enabled sensors and devices.  
- **Integrated 3.3V Regulator** – Includes an **AP2112K** voltage regulator that ensures stable 3.3V operation for the Qwiic interface.  

## Power Supply  

The module is powered directly from the **5V header of the Raspberry Pi**, with an **AP2112K voltage regulator** that converts it to **3.3V**, ensuring compatibility with the Qwiic protocol. The regulator supports a **maximum input voltage of 6V** and provides **up to 400mA** of output current.

> **Note:**  
> This module can also be used with other systems that provide a power source of **5V or up to 6V max**, as long as 3.3V output is needed for the Qwiic connector.  
> Additionally, it is **fully compatible with our** [UNIT Cargador de Batería LiPo Boost & I2C](https://uelectronics.com/producto/unit-cargador-de-bateria-lipo-boost-i2c/).  
> This combination allows the charger to **maintain the LiPo battery** while the **Qwiic RPi module regulates the output**, ensuring a **stable Qwiic bus** to power multiple devices via the **I2C bus**, as shown in the image below.  

## Hardware Overview  

<p align="center">
    <img src="https://raw.githubusercontent.com/UNIT-Electronics-MX/unit_qwiic_rpi_module/refs/heads/main/hardware/resources/Integration.jpg" alt="Seamless Qwiic Integration: Qwiic RPi module connected with LiPo Boost I2C Charger, LCD via Qwiic bus adapter, and DualMCU board." width="500"/>
</p>


## Applications

- Rapid prototyping with Qwiic sensors.
- IoT projects requiring multiple sensor inputs.
- Educational projects for learning I2C communication.
- Compact setups with limited GPIO availability.

## Getting Started

### Prerequisites

- A Raspberry Pi (any model with I2C support).
- A Qwiic-enabled sensor or device.
- A Qwiic cable.

### Installation

1. Connect the UNIT QWIIC RPI Module to your Raspberry Pi's GPIO header.
2. Use a Qwiic cable to connect the module to your desired sensor or device.
3. Enable I2C on your Raspberry Pi by running `sudo raspi-config` and navigating to `Interfacing Options > I2C`.
<!-- 
### Example Code

Below is a Python example using the `smbus` library to read data from a Qwiic sensor:

```python
import smbus
import time

# Initialize I2C bus
bus = smbus.SMBus(1)
sensor_address = 0x48  # Replace with your sensor's I2C address

try:
    while True:
        data = bus.read_byte(sensor_address)
        print(f"Sensor Data: {data}")
        time.sleep(1)
except KeyboardInterrupt:
    print("Exiting...")
``` -->

## Resources

- [Qwiic Ecosystem Overview](https://www.sparkfun.com/qwiic)
- [Raspberry Pi Documentation](https://www.raspberrypi.org/documentation/)
- [Python smbus Library](https://pypi.org/project/smbus/)
- [DualMCU](https://uelectronics.com/producto/unit-dualmcu-esp32-rp2040-tarjeta-de-desarrollo/)
- [Lipo Boost & I2C](https://uelectronics.com/producto/unit-cargador-de-bateria-lipo-boost-i2c/)


## License

This project is licensed under the GNU General Public License v3.0

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.