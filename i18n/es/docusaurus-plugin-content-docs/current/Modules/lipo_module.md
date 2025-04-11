---
sidebar_position: 2
---
# Cargador LiPo Boost y Monitor I2C

El **Cargador LiPo Boost y Monitor I2C UNIT** es un módulo avanzado de carga y monitoreo para baterías LiPo de una sola celda (3.7V a 4.2V). Integra un cargador TP4056, un convertidor elevador de voltaje MT3608 con salida limitada a 27V y un monitor de batería MAX17048 a través de I2C. Este módulo es ideal para aplicaciones que requieren carga eficiente y monitoreo en tiempo real de la batería.

- **Carga de Batería LiPo**: Dos corrientes de carga seleccionables (200 mA o 1 A) mediante pads de soldadura.
- **Convertidor Elevador MT3608**: Eleva el voltaje de la batería o la entrada USB Tipo C hasta 27V con una potencia máxima de salida de 4W, dependiendo del voltaje de entrada.
- **Monitoreo de Batería**: El MAX17048 permite la monitorización en tiempo real del nivel y voltaje de la batería vía I2C.
- **Compatibilidad Qwiic/Stemma**: Incluye un conector JST para alimentar módulos Qwiic a través del bus de voltaje del sistema (VSYS -> VBAT-6V máx).

---

## Características del Módulo

- **Voltaje de Entrada (VIN)**: USB Tipo C a 5V o a través de pads de soldadura (máximo 6V).
- **Voltaje de Carga de la Batería**: 3.7V nominal (4.2V máx).
- **Potencia de Salida**: Hasta 4W mediante el convertidor elevador MT3608, con eficiencia dependiendo del voltaje de entrada.
- **Conectores**:
  - Conector JST de 2.0 mm para la batería LiPo.
  - Cabecera de 2 pines (2.54 mm) para la salida de voltaje de la batería.
  - Cabecera de 2 pines (2.54 mm) para la salida del voltaje elevador.
  - Cabecera de 5 pines para el monitor de batería MAX17048 I2C: `SDA`, `SCL`, `GND`, `QST` (reset) y `ALT` (alerta).
- **Selección de Corriente de Carga**: Pad de soldadura en la parte trasera para seleccionar 200 mA o 1 A de corriente de carga.
- **Compatibilidad con Salida Qwiic/Stemma**: Conecta las líneas I2C (`SDA`, `SCL`) y tierra (`GND`) al conector Qwiic/Stemma. Un jumper permite enrutar el voltaje del sistema (VSYS) al bus Qwiic/Stemma, que varía entre el voltaje de la batería (3.7V) y hasta 6V (VIN).

:::note
 Dado que Qwiic opera a 3.3V, se recomienda usar un regulador de voltaje tras la salida JST para reducir VSYS a 3.3V, protegiendo los dispositivos conectados a Qwiic.
::: 

## Pinout

### Pinout Frontal
<div style={{ textAlign: "center" }}>
  <img src="https://raw.githubusercontent.com/UNIT-Electronics/UNIT-LiPo-Charger-Boost-I2C-Monitor/refs/heads/main/resources/Pinouts/PinoutTop_EN.jpg" style={{ width: "50%" }} />
</div>
### Pinout Trasero

<div style={{ textAlign: "center" }}>
  <img src="https://raw.githubusercontent.com/UNIT-Electronics/UNIT-LiPo-Charger-Boost-I2C-Monitor/refs/heads/main/resources/Pinouts/PinoutBottom_EN.jpg" style={{ width: "50%" }} />
</div>

---

## Tabla de Conexión de Pines

| PIN  | Descripción                   | Función en MAX17048           |
|------|-------------------------------|-------------------------------|
| SDA  | Línea de datos I2C            | Conectar a SDA en el MCU      |
| SCL  | Línea de reloj I2C            | Conectar a SCL en el MCU      |
| GND  | Tierra                        | Conectar a la tierra del MCU  |
| QST  | Reset del MAX17048            | Pin opcional de reinicio      |
| ALT  | Alerta de nivel de la batería | Pin opcional de alerta        |

---

## Especificaciones Adicionales

- **Características del Convertidor Elevador**: Curvas de potencia y corriente de salida para el convertidor elevador MT3608 con voltajes de entrada de 3.4V, 3.5V y 3.7V. La eficiencia depende del voltaje de entrada, mostrando:
  - Salida cerca de 27V y una batería a 3.4V: Potencia limitada a ~2-3W.
  - Salida cerca de 5V: Potencia estable alrededor de 4W, incluso con una batería a 3.4V.
  - Batería con voltaje superior a 3.7V: La eficiencia mejora, manteniendo una salida de ~4W.

> **Nota de Uso**: Para un rendimiento óptimo, utilice una batería LiPo en el rango de 3.7V a 4.2V. Alternativamente, se puede proporcionar 5V mediante USB Tipo C o pads VIN, con un máximo de 6V de entrada.

<div style={{ textAlign: "center" }}>
    <img src="https://raw.githubusercontent.com/UNIT-Electronics/UNIT-LiPo-Charger-Boost-I2C-Monitor/refs/heads/main/resources/Curvas/PvsV.png" width="500px" />
</div>

<div style={{ textAlign: "center" }}>
    <img src="https://raw.githubusercontent.com/UNIT-Electronics/UNIT-LiPo-Charger-Boost-I2C-Monitor/refs/heads/main/resources/Curvas/IvsV.png" width="500px" />
</div>


## Modelos para Fritzing

Encuentre los modelos para Fritzing de este módulo en el [repositorio de Fritzing](https://github.com/UNIT-Electronics/UNIT-LiPo-Charger-Boost-I2C-Monitor/tree/main/resources/Fritzing), facilitando su integración en sus diagramas de proyecto.


## Enlaces de Compra

Puede adquirir el **Cargador LiPo Boost & Monitor I2C UNIT** directamente a través de [UNIT Electronics](https://www.uelectronics.com).


## Documentación

- **Biblioteca MAX1704X**: Este repositorio contiene una biblioteca para controlar el MAX17048 en Arduino IDE y MicroPython. Permite leer el voltaje de la batería, el porcentaje de carga y el estado de descarga.

  [Repositorio de la Biblioteca MAX1704X](https://github.com/UNIT-Electronics/MAX1704X_lib)

- **Documentación Técnica**: Explore más detalles en la [documentación técnica](https://unit-electronics.github.io/UNIT-LiPo-Charger-Boost-I2C-Monitor/).

  ### Compatibilidad
  - **Arduino IDE**
  - **MicroPython**



## Primeros Pasos

### Ejemplo en MicroPython

1. **Conexiones**:
   - Conecte `SDA` al pin SDA del microcontrolador.
   - Conecte `SCL` al pin SCL del microcontrolador.
   - Conecte `GND` a la tierra del microcontrolador.

2. **Instalación de la Biblioteca**:
   - Descargue la biblioteca MAX1704X del repositorio y añádala a su proyecto.

3. **Código de Ejemplo**:

```python
from max17048 import MAX17048
from machine import I2C, Pin

i2c = I2C(1, scl=Pin(22), sda=Pin(21))  # Ajuste los pines según su MCU
battery_monitor = MAX17048(i2c)

# Leer el voltaje de la batería
voltage = battery_monitor.get_voltage()
print("Voltaje de la Batería:", voltage, "V")

# Leer el porcentaje de carga de la batería
charge = battery_monitor.get_charge()
print("Carga de la Batería:", charge, "%")
```

---

## Notas de Uso

- **Corriente de Carga**: Utilice los pads de soldadura para seleccionar:
  - 200 mA: Carga lenta para prolongar la vida útil de la batería.
  - 1 A: Carga rápida para ciclos más cortos.

Con el **Cargador LiPo Boost & Monitor I2C UNIT**, podrá monitorear el estado de la batería, alimentar módulos Qwiic y lograr un voltaje de salida estable para aplicaciones que requieren un voltaje elevado.

:::tip
¡Inicie hoy mismo su proyecto de carga y monitoreo de baterías!
:::