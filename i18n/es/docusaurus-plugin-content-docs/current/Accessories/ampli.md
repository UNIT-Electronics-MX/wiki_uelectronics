---
sidebar_position: 1
---

# Amplificador de Audio PAM8403 3W

El **AMPLIFICADOR DE AUDIO UNIT PAM8403 3W** es un módulo de amplificación de audio de Clase D diseñado para entregar hasta 3W por canal de salida estéreo con alta eficiencia. Es ideal para aplicaciones de audio portátiles y proyectos con dispositivos de bajo consumo, como reproductores de música, altavoces portátiles y sistemas alimentados por batería.

- **Potencia por canal:** El PAM8403 puede entregar hasta 3W por canal en cargas de 4 ohmios.
- **Potencia total:** En modo estéreo, puede proporcionar hasta 6W en total (3W por canal) cuando se alimenta con una fuente adecuada.
- **Cargas:** La potencia de salida varía según la impedancia de los altavoces conectados. A 8 ohmios, la potencia por canal es aproximadamente de 1.5W.

## Características del Módulo

![](/img/accessories/ampli.jpg " width="800px)

- **Tensión de operación:** 2.5V a 5.5V, compatible con fuentes de energía USB y baterías de litio.
- **Potencia de salida:** 3W por canal (4Ω, 5V).
- **Consumo de corriente:** 5V/40mA en reposo y 5V/500mA a carga máxima.
- **Eficiencia:** Hasta el 90%, minimizando el consumo de energía.
- **Distorsión Armónica Total (THD):** Menor al 0.1%, asegurando una excelente calidad de sonido.
- **Tamaño compacto:** 19 mm x 22 mm, ideal para proyectos con espacio limitado.
- **Rango de impedancia:** Soporta altavoces con impedancia entre 4Ω y 8Ω.
- **Protección:** Cuenta con protección contra sobrecalentamiento y cortocircuitos.
- **Rango de temperatura de operación:** -40°C a 85°C, adecuado para aplicaciones industriales y entornos extremos.

# Hoja de Datos

Para obtener información técnica detallada sobre el módulo PAM8403, consulta el siguiente documento:

[Descargar la Hoja de Datos del PAM8403](https://www.mouser.com/ds/2/115/PAM8403-247318.pdf?srsltid=AfmBOorzunVHYR1wIITzAZVypkFj5LkC2lR0cZLh1zfklQpAhanR1Qrl)

## Tabla de Conexiones

La siguiente tabla detalla las conexiones principales para el **AMPLIFICADOR UNIT PAM8403**:

| PIN  | Descripción              | Conexión Sugerida con RP2040/ESP32 |
| ---- | ------------------------ | ---------------------------------- |
| VCC  | Alimentación (+)         | 3.3V                               |
| GND  | Tierra (-)               | GND                                |
| INL  | Entrada de audio izquierda | Pin específico para señal de audio  |
| INR  | Entrada de audio derecha | Pin específico para señal de audio  |
| OUTL | Salida de audio izquierda | Altavoz                          |
| OUTR | Salida de audio derecha  | Altavoz                          |

Para un ejemplo detallado de cómo utilizar el **AMPLIFICADOR UNIT PAM8403** con el microcontrolador **ESP32**, consulta la guía de uso en el siguiente enlace:

[Guía de Uso del UNIT PAM8403 con DualMCU ESP32](https://github.com/UNIT-Electronics/VoiceAmp_Synth_ESP32)

## Enlaces de Compra

Puedes adquirir el módulo **AMPLIFICADOR DE AUDIO UNIT PAM8403 3W** directamente en [UNIT Electronics](https://uelectronics.com/producto/unit-pam8403-amplificador-de-audio/).

### Ventajas Técnicas:

- **Amplificador Clase D:** Tecnología de amplificación eficiente que reduce el consumo de energía.
- **Consumo ultra bajo:** Perfecto para dispositivos móviles y alimentados por batería.
- **No requiere disipador:** Gracias a su eficiencia energética, se mantiene fresco incluso durante un uso prolongado.
- **Diseño sin filtros:** Requiere menos componentes externos.
- **Tamaño compacto:** Fácil de integrar en cualquier proyecto, con un pequeño tamaño que ahorra espacio.

## Aplicaciones Típicas

Este amplificador es ideal para:

- Altavoces portátiles.
- Sistemas de audio USB o alimentados por batería.
- Proyectos DIY y educativos.
- Cualquier sistema que requiera amplificación de audio de manera eficiente.
