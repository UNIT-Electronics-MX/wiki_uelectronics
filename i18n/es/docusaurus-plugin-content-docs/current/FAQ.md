Preguntas Frecuentes (FAQ)
==========================

Esta sección responde a las preguntas más comunes sobre la instalación y uso de las placas de desarrollo de Unit Electronics.


**¿Cómo instalo los paquetes de soporte en Arduino IDE?**

Sigue estos pasos:

1. Abre **Arduino IDE**.
2. Ve a **Archivo > Preferencias**.
3. En **URLs Adicionales del Gestor de Tarjetas**, agrega la URL correspondiente:

```bash
https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-ESP32-Arduino-Package/main/package_Uelectronics_esp32_index.json
```
4. Guarda y luego instala las tarjetas desde **Herramientas > Placa > Gestor de Tarjetas**.


**¿Cómo selecciono la placa correcta en Arduino IDE?**

- Ve a **Herramientas > Placa** y selecciona la que deseas programar.
- Para **DualMCU-ONE**, elige `"DualMCU-ONE (ESP32 + RP2040)"`.
- Para **Cocket Nova CH552**, elige `"Cocket Nova CH552"`.


**Arduino IDE no reconoce la placa, ¿qué hago?**

- Asegúrate de que los controladores USB estén instalados desde:
  `https://www.wch-ic.com/downloads/CH341SER_EXE.html`
- Prueba otro cable USB o puerto de conexión.
- Reinicia el IDE y verifica si la placa aparece en **Herramientas > Puerto**.

**¿Cómo reporto un problema o error en la instalación?**

Puedes reportar un problema en el repositorio de GitHub de Unit Electronics:
`https://github.com/UNIT-Electronics/Uelectronics-ESP32-Arduino-Package/issues`
