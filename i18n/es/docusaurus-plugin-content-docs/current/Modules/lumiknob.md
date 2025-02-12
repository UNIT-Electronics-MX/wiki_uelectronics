---
sidebar_position: 3
---

# Módulo Lumiknob

El módulo "Interfaz Potenciómetro SPI MAX7219 32 LED Secuencial" permite controlar 32 LEDs de manera secuencial utilizando un potenciómetro. El módulo utiliza el protocolo SPI para comunicarse con el controlador de LEDs MAX7219, el cual gestiona la iluminación de los LEDs. El potenciómetro se utiliza para ajustar la velocidad a la que se encienden los LEDs.
<!-- board in proccess designed -->
:::caution
**Placa en Desarrollo**: El Módulo Lumiknob se encuentra actualmente en desarrollo. La información proporcionada aquí puede cambiar a medida que el diseño progresa.
:::

## Control Secuencial de LEDs

![Control Secuencial de LEDs](/img/module/schematic.PNG)

## Cómo Usar

Para utilizar el módulo, deberás conectar el potenciómetro y el controlador de LEDs MAX7219 a tu microcontrolador. El potenciómetro debe conectarse a un pin de entrada analógica, y el MAX7219 a los pines SPI de tu microcontrolador. Además, deberás incluir los archivos `max7219.py` y `main.py` en tu proyecto.

## Placas Probadas

La siguiente tabla enumera las placas de microcontrolador que han sido probadas con este módulo:

| Placa              | Estado            |
|--------------------|-------------------|
| Arduino Uno        | No Probada        |
| Raspberry Pi Pico  | No Probada        |
| ESP32C3 SuperMini  | Probada y Funciona|

## Código de Ejemplo

El siguiente código de ejemplo ilustra cómo utilizar el módulo con una placa ESP32C3 SuperMini:

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

Este código lee el valor del potenciómetro y determina la cantidad de LEDs a iluminar. Los LEDs se encienden de manera secuencial, fila por fila, de izquierda a derecha. El potenciómetro controla la intensidad de la iluminación de los LEDs.

## Resultados

La imagen GIF a continuación muestra que el módulo funciona como se esperaba y facilita el control secuencial de 32 LEDs mediante un potenciómetro. El potenciómetro regula la velocidad de iluminación de los LEDs de forma secuencial, de izquierda a derecha, fila por fila. El módulo es intuitivo y se puede incorporar fácilmente a tus aplicaciones.

![Control Secuencial de LEDs](/img/module/resized_output.gif)

## License

Este módulo se publica bajo la licencia MIT. Eres libre de usar, modificar y distribuir este código según lo desees. Consulta el archivo `LICENSE` para más información.
