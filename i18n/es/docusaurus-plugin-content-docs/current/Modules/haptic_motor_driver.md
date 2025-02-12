---
sidebar_position: 1
---

# Módulo Controlador de Motor Háptico

El Módulo Controlador de Motor Háptico es un módulo que se puede utilizar para accionar un motor háptico. El módulo se basa en el IC controlador de motor háptico DRV2605L. El DRV2605L es un controlador háptico versátil que se puede utilizar para accionar un actuador resonante lineal (LRA) o un motor de masa excéntrica rotativa (ERM), proporcionando una amplia gama de efectos hápticos. El módulo está diseñado para usarse con conectores compatibles STEMMA QT y conectores qwiic.

<div style={{ textAlign: "center" }}>
 <img src="https://raw.githubusercontent.com/UNIT-Electronics/UNIT_DRV2605L_Haptic_Motor_Driver/refs/heads/main/Resources/drv2605l.jpg" width="300px" />

  <br/>
</div>

## Ejemplo de Código

:::nota

El siguiente ejemplo es solo demostrativo; puedes encontrar más ejemplos en el [Repositorio GitHub DRV2605L](https://github.com/UNIT-Electronics/UNIT_DRV2605L_Haptic_Motor_Driver/tree/main/Software)

:::

```python
from machine import I2C, Pin
import time

# Inicializar I2C
i2c = I2C(0, scl=Pin(13), sda=Pin(12))  # Usa los pines apropiados para tu placa, por ejemplo RP2040 (Pico)
drv = DRV2605L(i2c)

# Ejemplo de uso
print("Inicializando DRV2605L...")
drv.set_voltage(0x80, 0x90)  # Establece el voltaje para operación a 3.3V
drv.select_library(1)        # Utiliza la biblioteca ERM

# Ejemplo: Efecto de Rampa
print("Reproduciendo efecto de rampa...")
drv.set_waveform(0, 47)  # Efecto incrementado
drv.set_waveform(1, 48)  # Efecto decrementado
drv.set_waveform(2, 0)   # Finalizar secuencia
drv.go()
time.sleep(1)  # Vibra durante 1 segundo
drv.stop()
print("Efecto de rampa completado.")
```

## Primeros Pasos

### Usando el Módulo con **Cocket Nova**
El módulo es compatible con la placa Cocket Nova utilizando el compilador SDCC. Para comenzar, sigue la documentación oficial para instalar las herramientas y controladores necesarios:

- [Guía de Inicio de Cocket Nova](https://unit-electronics.github.io/CH55x_SDCC_Doc/install_linux.html)

Ejemplos adicionales están disponibles en el [repositorio CH55X_SDCC_Examples](https://github.com/UNIT-Electronics/CH55x_SDCC_Examples).

### Usando el Módulo con **ESP32 y MicroPython**
El módulo también es compatible con la placa de desarrollo DualMCU utilizando MicroPython. Sigue la documentación oficial para configurar el entorno:

- [Guía de Inicio DualMCU ESP32 & RP2040](https://unit-electronics.github.io/DualMCU-ONE/env.html#micropython-installation-on-dualmcu)

## Licencias

Este proyecto está licenciado bajo la Licencia Pública General GNU v3.0 (GPL-3.0) para todo el trabajo original y las modificaciones para Cocket NOVA. Sin embargo, partes del código se basan en [MCU Templates](https://github.com/wagiminator/MCU-Templates) de wagiminator, que están licenciados bajo la Licencia Creative Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0).

Para más detalles, consulta:
- [Licencia CC BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0/)
- [Licencia GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)

¡Este proyecto es de código abierto! Tanto el hardware como el software están licenciados bajo la Licencia MIT para MicroPython:
- **Software:** [Licencia MIT](https://opensource.org/licenses/MIT)
