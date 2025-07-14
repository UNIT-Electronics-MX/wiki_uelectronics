---
sidebar_position: 9
---

# Módulo Buzzer


<div  style={{ textAlign: "center" }}>
    <a href="#"><img src="https://img.shields.io/badge/version-1.0-blue.svg" alt="Versión"/></a>
    <a href="#"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="Licencia"/></a>
    <br/>
</div>

<div  style={{ textAlign: "center" }}>
    <a href="https://github.com/UNIT-Electronics-MX/unit_buzzer_module/tree/main">
        <img src="https://raw.githubusercontent.com/UNIT-Electronics-MX/unit_buzzer_module/refs/heads/main/hardware/resources/unit_top_ue0088_modulo_buzzer_v_1_1_0.png" width="500px" alt="Módulo Buzzer UNIT"/><br/>
        Módulo Buzzer UNIT
    </a>
</div>

El módulo  buzzer es un diseño compacto y fácil de usar, enfocado a sistemas embebidos y prototipos. Cuenta con una interfaz estándar de 3 pines: **VCC (5V)**, **Señal** y **GND**, lo que permite una integración sencilla con una variedad de microcontroladores, como `Arduino`, `ESP32`, `CH552` y placas `STM32`.

> **_NOTA:_** El buzzer integrado puede generar señales audibles para su uso en **alarmas**, **notificaciones**, **temporizadores** y **sistemas de retroalimentación para usuarios**. Su diseño incluye un circuito de manejo preinstalado, lo que permite un control digital directo desde los pines GPIO del microcontrolador.


## Características

- 🧩 Interfaz estándar de 3 pines: `+5V`, `Señal`, `GND`
- 🔊 Buzzer integrado (activo o pasivo)
- 📏 Tamaño compacto con agujero de montaje


## Aplicaciones

- Sistema de alarma para detección de fuego o gas
- Sistema de monitoreo de salud para personas mayores
- Control de acceso seguro con alertas de intrusión usando RFID
- Panel de diagnóstico automotriz
- Sistema de riego inteligente con alertas de fallas
- Sistema de alerta para drones o robots autónomos


## 🔄 Sistema de Prioridad de Alertas (Opcional) 
- 🔴 Tono continuo → Falla crítica
- 🟡 Tono intermitente → Advertencia o evento moderado
- 🔵 Pitido corto → Confirmación de evento o retroalimentación


> 🔧 Nota: utiliza señales **PWM** para generar tonos.
<div style={{ textAlign: "center" }}>

    <img src="https://raw.githubusercontent.com/UNIT-Electronics-MX/unit_buzzer_module/refs/heads/main/hardware/resources/sonido.gif" alt="Icono de Sonido" width="100"/>
</div>

