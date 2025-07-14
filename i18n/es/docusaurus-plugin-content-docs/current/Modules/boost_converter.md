---
sidebar_position: 10

---

# Módulo Convertidor Boost


<div align="center">
   <a href="#"><img src="https://img.shields.io/badge/version-1.0-blue.svg" alt="Versión"/></a>
   <a href="#"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="Licencia"/></a>
   <br/>
</div>


El Módulo Convertidor Boost es un regulador compacto y ajustable **DC–DC step-up (boost)** diseñado para aumentar un voltaje de entrada bajo a un voltaje de salida más alto. Está alimentado por el regulador de conmutación de alta eficiencia **TPS61023** de **Texas Instruments**, lo que permite una operación confiable incluso desde fuentes de bajo voltaje como baterías LiPo o paneles solares.  
Incluye un potenciómetro de múltiples vueltas para un ajuste preciso del voltaje de salida, lo que hace que el módulo sea ideal para aplicaciones alimentadas por batería y sistemas embebidos compactos.

Esto lo hace ideal para alimentar circuitos desde celdas LiPo, bancos de energía USB, paneles solares y otras fuentes de bajo voltaje en proyectos embebidos y prototipos.



<div align="center">
   <a href="https://github.com/UNIT-Electronics-MX/unit_boost_converter"><img src="https://raw.githubusercontent.com/UNIT-Electronics-MX/unit_boost_converter/refs/heads/main/hardware/resources/unit_top_v_0_1_0_ue0087_tps61023_boost.png" width="350px"/><br/>UNIT Boost Converter</a>
</div>




<div align="center">

## Aplicaciones

| **Aplicaciones**              | **Ejemplo**                                               |
|--------------------------------|-----------------------------------------------------------|
| **Sistemas alimentados por batería** | Elevar 3.7 V LiPo a 5 V para microcontroladores o sensores |
| **Controladores de LED**       | Alimentar cadenas de LED de alto voltaje desde 3 V o 3.7 V de entrada |
| **Electrónica portátil**       | Regulación de voltaje para diseños móviles pequeños       |
| **Módulos de sensores**        | Alimentar sensores de 5 V+ desde sistemas de 3.3 V        |
| **Proyectos DIY y prototipos** | Integración sencilla en diseños de protoboard o PCB       |

</div>


## Características

| **Característica**            | **Descripción**                                                                 |
|-------------------------------|---------------------------------------------------------------------------------|
| **Circuito regulador**        | Texas Instruments TPS61023 – convertidor boost de alta eficiencia              |
| **Rango de voltaje de entrada** | 0.5 V a 5.5 V                                                                |
| **Voltaje de arranque**       | Opera desde una entrada tan baja como 0.7 V                                   |
| **Salida ajustable**          | Hasta 5.5 V (mediante potenciómetro de múltiples vueltas integrado)            |
| **Corriente de salida**       | Hasta 1 A (dependiendo de las condiciones de entrada/salida)                   |
| **Eficiencia**                | Hasta 96 % en condiciones óptimas                                              |
| **Frecuencia de conmutación** | ~2 MHz para reducir el tamaño de los componentes externos                      |
| **Protecciones**              | Sobrecorriente (OCP), apagado térmico, bloqueo por bajo voltaje (UVLO)         |
| **Factor de forma**           | PCB amigable para protoboard de 20.3 mm × 17.78 mm                             |
| **Aplicaciones**              | Ideal para elevadores LiPo, bancos de energía USB, paneles solares, sensores, LEDs, prototipos |
| **Hoja de datos**             | [TPS61023 – Texas Instruments](https://www.ti.com/product/TPS61023)           |




## Inicio Rápido

1. **Conectar**  
   - Conecta tu fuente de bajo voltaje a **VIN +** y **VIN –**.  
   - Conecta tu carga a **VOUT +** y **VOUT –** (tierra común).  
2. **Ajustar salida**  
   - Usa un pequeño destornillador para girar el potenciómetro en sentido horario para aumentar el voltaje, en sentido antihorario para disminuirlo.  
   - Monitorea la salida con un multímetro para un ajuste preciso.  
3. **Prueba bajo carga**  
   - Aplica una carga típica y verifica que el voltaje se mantenga estable.



> **Consejo:** Siempre comienza con el potenciómetro girado completamente en sentido antihorario (voltaje más bajo) antes de aplicar energía. Luego ajusta lentamente al voltaje objetivo mientras monitoreas con un medidor.




