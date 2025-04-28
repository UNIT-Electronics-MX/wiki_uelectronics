---
title: UNIT Proto Power Delivery Decoy CH224K
---

import useBaseUrl from '@docusaurus/useBaseUrl';

#  Proto Power Delivery Decoy CH224K

## Descripción general

El **Módulo de Alimentación UNIT con Simulación de Carga** es un módulo de potencia versátil diseñado para prototipos en protoboard. Está basado en el chip de gestión de energía **CH224**, que soporta hasta **100W** de potencia de salida.

Este módulo permite seleccionar diferentes voltajes de salida mediante un interruptor DIP, dependiendo del protocolo soportado por el adaptador de corriente (PD, QC o BC). Además, cuenta con una **salida fija de 3.3V** que puede habilitarse o deshabilitarse a través del interruptor DIP.



## Características

- **Entrada:** USB-C (PD, QC, BC)
- **Voltajes de Salida Seleccionables:** 5V, 9V, 12V, 15V, 20V (con DIP)
- **Salida Fija:** 3.3V a 1.5A (habilitable)
- **Terminal:** 5mm con salida VUSB (5V–20V)
- **Compatibilidad con Placas de Pruebas:** 54mm y 64mm
- **Selectores de Voltaje:** 3.3V o VUSB para alimentación lateral


## Selección de Voltaje con Interruptor DIP

El voltaje de salida depende del protocolo del adaptador USB-C conectado. La siguiente tabla indica la configuración:

| S1 | S2 | S3 | Salida VUSB |
|----|----|----|-------------|
| 0  | 0  | 0  | 5V          |
| 1  | 0  | 0  | 9V          |
| 0  | 1  | 0  | 12V         |
| 1  | 1  | 0  | 15V         |
| 0  | 0  | 1  | 20V         |

- **Interruptor de 3.3V:** Controla la salida fija de **3.3V**.
- **Selectores** Jumpers para 3.3V o VUSB.


## Distribución de Pines

<div style={{ textAlign: "center" }}>
  <img
    src="https://raw.githubusercontent.com/UNIT-Electronics-MX/unit_proto_power_delivery_decoy_ch224k/refs/heads/main/hardware/resources/protopowerdecoy_pinout_v1%5BEN%5D.jpg"
    alt="Distribución de pines"
    style={{ width: '60%', maxWidth: 500 }}
  />
</div>



## Esquema eléctrico

Puedes ver el esquema en formato PDF [aquí](https://github.com/UNIT-Electronics-MX/unit_proto_power_delivery_decoy_ch224k/blob/main/hardware/resources/protopower_schematics_V6.pdf).

---

## Uso

1. Conecta un adaptador USB-C (PD/QC/BC).
2. Configura el **DIP** para el voltaje deseado.
3. Activa la salida **3.3V** si es necesario.
4. Usa el **terminal de tornillo** para VUSB.
5. Configura los **selectores  de voltaje**.


## Aplicaciones

- Prototipos con diferentes niveles de voltaje
- Alimentación variable para placas de pruebas
- Simulación de carga en sistemas energéticos
- Desarrollo con USB-C


## Licencia

Este proyecto está bajo la **Licencia GPL-3.0**.
