---
sidebar_position: 1
---

# Guía para pantalla TFT ST7789V con MicroPython

Esta documentación proporciona una guía unificada para la biblioteca MicroPython para la pantalla TFT ST7789V, que permite una integración sin problemas con la pantalla TFT ST7789V. La pantalla, disponible en variantes de 2.4" y 2.8", cuenta con una pantalla RGB de 240×320 y utiliza SPI para la comunicación. Esta guía cubre la visión general de la biblioteca, características técnicas, detalles de hardware, configuración recomendada y una demostración con código de ejemplo.

## Visión General

MicroPython-ST7789V_TFT ha sido creada para ofrecer un control sólido sobre la visualización de textos e imágenes en la pantalla TFT ST7789V. La biblioteca se inspira en los principios de [rdagger](https://github.com/rdagger/micropython-ili9341 "rdagger") y amplía sus capacidades al incluir ajustes de calibración específicos para el ST7789V, opciones de rotación y mejoras de rendimiento especialmente diseñadas para microcontroladores con recursos limitados.

<div style={{ textAlign: "center" }}>
  <img src="https://uelectronics.com/wp-content/uploads/2024/01/AR3950-Modulo-TFT-Display-ST7796S-SPI-2.4.jpg" width="500px" />
</div>

## Características Técnicas

- **Comunicación SPI:** Utiliza la interfaz SPI de MicroPython para una transferencia de datos rápida y eficiente.
- **Configuración Flexible de Color:** Ajusta la corrección gamma, el brillo y soporta varios modos de color.
- **Opciones de Rotación:** Proporciona funcionalidad de rotación de texto a 0°, 90°, 180° y 270°.
- **Optimización de Memoria y Rendimiento:** Adaptada para microcontroladores para garantizar actualizaciones suaves de la pantalla sin sobrecargar los recursos del sistema.

## Detalles de Hardware y Software

Una pantalla TFT (Transistor de Película Fina) utiliza tecnología de matriz activa, empleando TFTs para cambiar los píxeles con precisión. Aunque las pantallas TFT son un tipo de LCD, se destacan por utilizar la tecnología TFT para un mejor control de píxeles y calidad de imagen.

### Requisitos de Hardware

- **Fuente de Alimentación:** Asegúrate de contar con una fuente de alimentación estable y adecuada; las pantallas TFT pueden requerir un consumo significativo de corriente.
- **Configuración de Conexiones:** Verifica todas las conexiones (SPI SCK, MOSI, CS, DC y RST) para asegurar la integridad de la señal.

### Inicialización y Calibración

- **Pre-Inicialización:** Configura la pantalla antes de enviar gráficos o comandos de texto; inicializa el bus SPI con la configuración adecuada.
- **Calibración por Software:** Ajusta los colores de fondo y la corrección gamma para mejorar el contraste y el brillo.

## Código de Ejemplo

A continuación se muestra un ejemplo que demuestra cómo inicializar la pantalla, renderizar texto con diversas rotaciones y aplicar colores de fondo personalizados:

```python
"""Demostración con ILI9341 (fuentes 8x8).
   Este ejemplo inicializa la comunicación SPI y configura los parámetros de la pantalla
   para mostrar la renderización de texto con rotaciones y colores de fondo.
"""

from time import sleep
from ili9341 import Display, color565  # Convierte RGB a formato de color de 16 bits
from machine import Pin, SPI          # Funciones de control de hardware

def test():
    """Demuestra la renderización de texto con diferentes rotaciones y fondos."""
    
    # Inicializa la comunicación SPI para el módulo ST7789V.
    spi = SPI(1, baudrate=40000000, sck=Pin(14), mosi=Pin(13))
    
    # Configura la pantalla con los pines de Comando/Datos, Selección de Chip y Reset.
    display = Display(spi, dc=Pin(4), cs=Pin(16), rst=Pin(17))

    # Calcula las coordenadas centrales de la pantalla.
    x_center = display.width // 2
    y_center = display.height // 2

    # Dibuja elementos de texto principales.
    display.draw_text8x8(0, 0, 'Integrado', color565(255, 0, 255))
    display.draw_text8x8(16, 16, 'MicroPython', color565(255, 255, 0))
    display.draw_text8x8(32, 32, 'Fuente 8x8', color565(0, 0, 255))
    
    # Renderiza texto con varias rotaciones.
    display.draw_text8x8(x_center - 40, 120, "Rotación = 0", color565(0, 255, 0))
    display.draw_text8x8(0, y_center - 44, "Rotación = 90", color565(255, 0, 0), rotate=90)
    display.draw_text8x8(x_center - 48, display.height - 9, "Rotación = 180", color565(0, 255, 255), rotate=180)
    display.draw_text8x8(display.width - 9, y_center - 48, "Rotación = 270", color565(255, 255, 255), rotate=270)

    # Ejemplo mejorado con colores de fondo.
    display.draw_text8x8(x_center - 40, 140, "Rotación = 0", color565(0, 255, 0),
                         background=color565(255, 0, 0))
    display.draw_text8x8(20, y_center - 44, "Rotación = 90", color565(255, 0, 0),
                         rotate=90, background=color565(0, 255, 0))
    display.draw_text8x8(x_center - 48, display.height - 29, "Rotación = 180", color565(0, 255, 255),
                         rotate=180, background=color565(0, 0, 255))
    display.draw_text8x8(display.width - 29, y_center - 48, "Rotación = 270", color565(255, 255, 255),
                         rotate=270, background=color565(255, 0, 255))

    # Permite un tiempo para observación antes de la limpieza.
    sleep(15)
    display.cleanup()  # Reinicia la pantalla y libera recursos.

test()
```

## Recursos Adicionales

- **Repositorio de la Biblioteca:** Consulta el [repositorio MicroPython-ST7789V_TFT](https://github.com/UNIT-Electronics-MX/TFT-Display-ST7789V-2.4/blob/master/ili9341.py "MicroPython-ST7789V_TFT") para más detalles y el código fuente.
- **Herramienta de Creación de Fuentes:** Las fuentes fueron generadas usando la herramienta gratuita [GLCD Font Creator](https://www.mikroe.com/glcd-font-creator "GLCD Font Creator").

:::note

La biblioteca original se modificó para adaptarse a la configuración de colores de esta pantalla. La herramienta para mostrar imágenes no muestra la correcta gamma de color.

:::

Para más demostraciones, mira el siguiente tutorial en YouTube:

<div style={{ textAlign: "center" }}>
  <a href="https://www.youtube.com/watch?v=NJuOkSSfgUQ" title="Tutorial ILI9341">
    <img src="https://i.ytimg.com/vi/NJuOkSSfgUQ/maxresdefault.jpg" alt="Ver el Tutorial ILI9341" style={{ maxWidth: "60%", height: "auto" }} />
  </a>
  <p>Mira este mini tutorial para una visión general rápida sobre cómo configurar las pantallas ILI9341 y ST7789V con MicroPython.</p>
</div>

Esta completa documentación ofrece una guía paso a paso para configurar y utilizar la pantalla TFT ST7789V con MicroPython.
