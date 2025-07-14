---
sidebar_position: 2
---

# Módulo de Relé

Este módulo de relé de doble canal está diseñado para interactuar de manera segura y confiable con microcontroladores que gestionan cargas de mayor voltaje o corriente. Proporciona un suministro dedicado de 5 V para alimentar las bobinas de los relés, mientras que el suministro lógico se alinea con el voltaje de E/S del microcontrolador (3.3 V o 5 V). El módulo acepta señales de control digitales para activar los relés, y los contactos del relé están diseñados con configuraciones de normalmente abierto (NO) y normalmente cerrado (NC), ofreciendo opciones de conmutación versátiles.

<div style={{ textAlign: "center" }}>
    <a href="https://github.com/UNIT-Electronics-MX/unit_relay_module_g6k_2g_y_tr_dc5/blob/main/docs/unit_relay_module_g6k_2g_y_tr_dc5_product_brief.pdf" target="_blank"><img src="https://raw.githubusercontent.com/UNIT-Electronics-MX/unit_relay_module_g6k_2g_y_tr_dc5/refs/heads/main/hardware/resources/unit_top_v_0_0_1ue0082_modulo_rele_g6k_.png" width="400px"/><br/> Módulo de Relé UNIT</a>
</div>

## **Características**
- **2 × relés de 5 V** con contactos Normalmente Abierto (NO) y Normalmente Cerrado (NC)  
- **Aislamiento óptico** entre el lado de control (lógico) y el lado de potencia (bobina)  
- **Indicadores LED**: uno para alimentación y uno por canal  
- Compatible con lógica de **3.3 V o 5 V**  
- **Terminales de tornillo** para conexión segura de cargas de potencia    

## **Descripción** 

<div align="center">

| Señal          | Descripción                                                                  |
|----------------|------------------------------------------------------------------------------|
| JDVCC          | +5V para las bobinas de los relés; aislado de la lógica del MCU, permitiendo sistemas de 3.3V. |
| VCC            | Alimenta los controladores de entrada; debe coincidir con el voltaje del MCU (3.3V o 5V). |
| IN             | Señal del MCU; alta (~VCC) activa el optoacoplador y el relé.                |
| NO1 / NO2      | Contactos normalmente abiertos; se cierran solo cuando el relé está energizado. |
| COM1 / COM2    | Terminal común que alterna entre NC y NO.                                    |
| NC1 / NC2      | Contactos normalmente cerrados; se abren cuando el relé está activo.         |
| LED_PWR        | LED que indica la presencia de JDVCC (5V).                                   |
| LED_IN         | LED que indica actividad de la señal de control desde IN.                   |

</div>

## Aplicaciones Comunes

- Automatización del Hogar
- Automatización Industrial
- Proyectos IoT
- Riego Automatizado
- Control HVAC
- Energía Renovable
- Pruebas y Laboratorio
- Robótica y Mecatrónica
- Agricultura Inteligente
- Gestión de Energía en Vehículos
- Audio y Señalización
- Sistemas de Seguridad y Alarmas
- Educación y Demostraciones

