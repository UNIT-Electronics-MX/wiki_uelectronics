---
sidebar_position: 6
---

# Lumiknob  
## Interfaz Avanzada para Potenciómetro y Controlador LED MAX7219 mediante SPI

El módulo Lumiknob es una solución integral para gestionar secuencialmente 32 LEDs utilizando el controlador MAX7219 a través de una comunicación SPI. Este sistema se beneficia de la lectura precisa de un potenciómetro para ajustar dinámicamente la velocidad de activación, con el valor del ADC regulando la secuencia de iluminación. Compatible con microcontroladores como el ESP32C3 SuperMini y la Pulsar C6, este módulo garantiza un rendimiento estable y preciso en aplicaciones de visualización de LEDs.

:::warning
Asegúrate de que el ADC del potenciómetro esté conectado a un pin analógico del microcontrolador. Verifica que el voltaje de salida del potenciómetro se encuentre entre 0V y 3.3V para microcontroladores de 3.3V, o entre 0V y 5V para aquellos de 5V.
:::

<p align="center">
    <img
        src="https://raw.githubusercontent.com/UNIT-Electronics-MX/unit_lumiknob_module/refs/heads/main/hardware/resources/lumiknob.png"
        alt="Módulo Lumiknob"
        width="500"
    />
</p>

## Descripción General

El módulo emplea el protocolo SPI para la comunicación con el controlador LED MAX7219, respaldado por un potenciómetro que permite regular la velocidad de la secuencia de iluminación. Es fundamental establecer las conexiones correctas entre el potenciómetro, el MAX7219 y los pines correspondientes del microcontrolador.

## Interfaz de Hardware

- **Potenciómetro:** Conéctese a una entrada analógica del microcontrolador.
- **MAX7219:** Conéctese a los pines SPI designados (MOSI, SCK y Chip Select).

Asegúrese de que el proyecto incluya todos los archivos necesarios, como `max7219.py` y `main.py`.

## Hardware Probado

A continuación se muestra una tabla con las placas de microcontrolador verificadas con este módulo:

| Placa              | Estado                     |
|--------------------|----------------------------|
| Arduino Uno        | No probado                 |
| Raspberry Pi Pico  | No probado                 |
| ESP32C3 SuperMini  | Probado y funcional        |
| Pulsar C6          | Probado y funcional        |

## Ejemplo de Código

El siguiente ejemplo demuestra cómo utilizar el módulo con una placa ESP32C3 SuperMini:

```python
import max7219
from machine import Pin, SPI, ADC
import time

spi = SPI(1, baudrate=10000000, polarity=1, phase=0, sck=Pin(4), mosi=Pin(6))
cs = Pin(7, Pin.OUT)
display = max7219.Matrix8x8(spi, cs, 1)

display.brightness(10)

pot = ADC(Pin(0))
pot.atten(ADC.ATTN_11DB)

display.fill(0)
display.show()

while True:
        pot_value = pot.read()
        num_leds = int((pot_value / 4095) * 32)

        display.fill(0)
        led_count = 0
        for row in range(8):
                for col in range(8):
                        if led_count < num_leds:
                                display.pixel(col, row, 1)
                                led_count += 1
                        else:
                                break

        display.show()
        time.sleep(0.1)
```

El ejemplo calcula y enciende el número correspondiente de LEDs en función del valor leído del potenciómetro, avanzando de forma secuencial por filas.

## Rendimiento del Módulo

El GIF a continuación ilustra claramente el funcionamiento del módulo. El potenciómetro permite ajustar de manera efectiva la velocidad de activación de los 32 LEDs, asegurando una transición fluida en el display.

<p align="center">
    <img
        src="https://github.com/UNIT-Electronics-MX/unit_lumiknob_module/blob/main/hardware/resources/resized_output.gif?raw=true"
        alt="Demostración de Secuencia de LED"
        width="500"
    />
</p>

## Licencia

El módulo se distribuye bajo los términos de la licencia de código abierto aplicable.
