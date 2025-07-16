---
sidebar_position: 1
---

# Programador Multi-Protocolo

<div align="center">
  <a href="#"><img src="https://img.shields.io/badge/version-1.0-blue.svg" alt="Versión"/></a>
  <a href="#"><img src="https://img.shields.io/badge/language-Python-lightgrey.svg" alt="Lenguaje"/></a>
  <a href="#"><img src="https://img.shields.io/badge/language-C-lightgrey.svg" alt="Lenguaje"/></a>
  <a href="#"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="Licencia"/></a>
</div>

<div align="center">
  <a href="./docs/unit_product_brief.pdf">
    <img src="https://raw.githubusercontent.com/UNIT-Electronics-MX/unit_ch552_multiprotocol_programmer/refs/heads/main/hardware/resources/programmer.png" width="500px" alt="Programador Multi-Protocolo"/>
  </a>
</div>

:::warning ⚠️ ADVERTENCIA IMPORTANTE
**El usuario debe cargar el firmware específico según sus necesidades.**

Este programador requiere que cargues el firmware correspondiente al protocolo que deseas utilizar:
- **Firmware AVR** para dispositivos ATmega/ATtiny
- **Firmware CMSIS-DAP** para microcontroladores ARM Cortex-M  
- **Firmware CPLD** para dispositivos Intel/Altera MAX II

**Sin el firmware apropiado, el dispositivo no funcionará correctamente.**
:::

## Descripción General

El **Programador Multi-Protocolo** es un dispositivo USB versátil basado en el microcontrolador **CH552** que soporta múltiples protocolos de programación y depuración. Compatible con dispositivos **AVR**, **ARM Cortex-M** y **CPLD Intel/Altera MAX II**.

### Características Principales
- 🔌 **Interfaz USB Full-Speed** (CDC/HID según firmware)
- ⚡ **Selector de voltaje**: 3.3V / 5V con interruptor
- 🔄 **Firmware intercambiable** para diferentes protocolos
- 🛠️ **Compatible** con herramientas estándar de la industria

## Recursos y Documentación

<div className="table-center">

| Recurso | Descripción | Enlace |
|:-------:|:-----------:|:------:|
| 📚 **Documentación Completa** | Guía detallada del programador | [Ver Documentación](https://unit-electronics-mx.github.io/unit_multiprotocol_programmer_platform/) |
| 🚀 **Primeros Pasos** | Tutorial de configuración inicial | [Comenzar Aquí](https://unit-electronics-mx.github.io/unit_ch552_multiprotocol_programmer/index.html) |
| 📋 **Esquemático** | Diseño del circuito electrónico | [Ver Esquemático](https://github.com/UNIT-Electronics-MX/unit_ch552_multiprotocol_programmer/blob/main/hardware/unit_sch_V_0_0_1_ue0090_CH552_USB_Multi-Protocol-Programmer.pdf) |
| 🔧 **Diseño PCB** | Archivos de diseño de la placa | [Ver Diseño](https://github.com/UNIT-Electronics-MX/unit_ch552_multiprotocol_programmer/tree/main/hardware) |
| 💻 **Firmware** | Código fuente y binarios | [Ver Código](https://github.com/UNIT-Electronics-MX/unit_ch55x_docker_sdk/tree/main/examples/usb/prog) |
| 🧪 **SDK de Desarrollo** | Herramientas para CH55x | [Ver SDK](https://github.com/UNIT-Electronics-MX/unit_ch55x_docker_sdk) |
| 📦 **Repositorio Principal** | Código fuente completo | [GitHub](https://github.com/UNIT-Electronics-MX/unit_ch552_multiprotocol_programmer) |

</div>

## Especificaciones Técnicas

### Hardware Base
- **Microcontrolador**: CH552G / CH552E / CH552P
- **Interfaz USB**: Full-Speed (12 Mbps)
- **Alimentación**: Bus USB (5V) con regulador interno
- **Voltaje de salida**: Seleccionable 3.3V / 5V mediante interruptor
- **Conectores**: Pin headers estándar para conexiones de programación

### Protocolos Soportados
- 🔌 **AVR**: USBasp, Serial UPDI
- 🛡️ **ARM**: SWD, JTAG (CMSIS-DAP)
- ⚙️ **CPLD**: JTAG (compatible con USB-Blaster)

## Perfiles de Firmware Disponibles

:::info 📋 Selección de Firmware
Cada firmware está optimizado para un tipo específico de dispositivo. **Debes cargar el firmware correcto antes de usar el programador.**
:::

### 1. 🔧 Firmware Programador AVR

**Para microcontroladores AVR (ATmega, ATtiny, etc.)**

#### Características:
- **Protocolos**: USBasp y Serial UPDI
- **Dispositivos objetivo**: Toda la familia AVR de Microchip
- **Interfaz USB**: HID (USBasp) / CDC (Serial UPDI)
- **Voltaje**: Seleccionable 3.3V o 5V

#### Herramientas compatibles:
- ✅ `avrdude`
- ✅ PlatformIO
- ✅ Arduino IDE
- ✅ Atmel Studio / Microchip Studio

#### Compilación:
```bash
# Compilar con SDCC
make avr

# O flashear binario precompilado
python3 tools/chprog.py firmware/avr_programmer.bin
```

:::tip 💡 Nota Técnica
El modo USBasp se enumera como dispositivo HID, mientras que Serial UPDI utiliza puerto CDC virtual.
:::

---

### 2. 🛡️ Firmware Depurador ARM (CMSIS-DAP)

**Para microcontroladores ARM Cortex-M**

#### Características:
- **Protocolos**: SWD y JTAG (estándar CMSIS-DAP)
- **Dispositivos objetivo**: STM32, SAM, nRF52, ESP32-C3, etc.
- **Interfaz USB**: HID + CDC opcional
- **Velocidad**: Hasta 10 MHz SWD/JTAG

#### Herramientas compatibles:
- ✅ [OpenOCD](http://openocd.org/)
- ✅ PyOCD
- ✅ Keil µVision
- ✅ STM32CubeIDE
- ✅ PlatformIO

#### Controladores:
- **Linux/macOS**: Soporte nativo (sin drivers adicionales)
- **Windows**: Drivers automáticos via WinUSB

:::warning ⚠️ Compatibilidad
Algunos IDEs pueden requerir configuración específica para reconocer el dispositivo como CMSIS-DAP.
:::

---

### 3. ⚙️ Firmware Programador CPLD

**Para dispositivos Intel/Altera MAX II**

#### Características:
- **Dispositivos objetivo**: EPM240, EPM570, EPM1270, etc.
- **Protocolo**: JTAG via emulación USB-Blaster
- **Compatibilidad**: Intel Quartus Prime (todas las versiones)
- **Velocidad**: Compatible con especificaciones USB-Blaster

#### Opciones de configuración:
- **Modo seguro** (predeterminado): VID:`0x16C0` PID:`0x05DC`
- **Modo compatibilidad**: VID:`0x09FB` PID:`0x6001`

:::caution 🚨 Modo de Compatibilidad
El modo de compatibilidad usa VID/PID de Intel. Úsalo solo para desarrollo personal y cumpliendo las licencias correspondientes.
:::

## Instalación y Configuración

### Requisitos del Sistema

#### Software requerido:
```bash
# Ubuntu/Debian
sudo apt install build-essential sdcc python3 python3-pip git

# Instalar dependencias Python
pip3 install pyusb

# Verificar instalación
sdcc --version
python3 --version
```

#### Para Windows:
- [SDCC Compiler](https://sdcc.sourceforge.net/)
- [Python 3.8+](https://python.org/)
- [Git for Windows](https://git-scm.com/)

### Proceso de Flasheo del Firmware

#### 1. Entrar en Modo Bootloader

:::info 📝 Procedimiento paso a paso:
1. **Desconectar** completamente el programador del USB
2. **Mantener presionado** el botón `BOOT` en la placa
3. **Conectar** el cable USB mientras mantienes presionado `BOOT`
4. **Soltar** el botón - el dispositivo entra en modo bootloader
5. El LED debería cambiar de estado indicando modo bootloader
:::

#### 2. Flashear el Firmware

```bash
# Método 1: Usando chprog.py (Recomendado)
python3 tools/chprog.py firmware/nombre_firmware.bin

# Método 2: Usando WCHISPTool (Windows)
# Abrir WCHISPTool y seleccionar el archivo .bin
```

#### 3. Verificar la Instalación

```bash
# Verificar que el dispositivo es reconocido
lsusb | grep -i "ch55"

# Para Windows, verificar en Device Manager
```

### Configuración de Permisos (Linux)

```bash
# Crear reglas udev para acceso sin privilegios
echo 'SUBSYSTEM=="usb", ATTR{idVendor}=="4348", ATTR{idProduct}=="55e0", MODE="666"' | sudo tee /etc/udev/rules.d/99-ch55x.rules

# Recargar reglas
sudo udevadm control --reload
sudo udevadm trigger

# Agregar usuario al grupo dialout (para puertos serie)
sudo usermod -a -G dialout $USER
```

## Tabla de Compatibilidad de Firmware

<div className="table-center">

| Firmware | Protocolos | Dispositivos Objetivo | Modo USB | Herramientas Principales |
|:--------:|:----------:|:---------------------:|:--------:|:------------------------:|
| **AVR** | USBasp, UPDI | ATmega, ATtiny, AVR-DA/DB | CDC/HID | avrdude, PlatformIO |
| **CMSIS-DAP** | SWD, JTAG | STM32, SAM, nRF52, ESP32-C3 | HID+CDC | OpenOCD, PyOCD, Keil |
| **CPLD** | JTAG (USB-Blaster) | EPM240, EPM570, MAX II | HID | Quartus Prime |

</div>

## Solución de Problemas Comunes

### ❌ El dispositivo no es reconocido

**Posibles causas y soluciones:**

1. **Firmware incorrecto cargado**
   - Verificar que el firmware corresponde al uso deseado
   - Re-flashear el firmware correcto

2. **Problemas de drivers (Windows)**
   ```bash
   # Instalar Zadig para drivers libusb
   # Seleccionar el dispositivo y instalar WinUSB driver
   ```

3. **Permisos insuficientes (Linux)**
   ```bash
   # Verificar reglas udev
   sudo udevadm test /sys/bus/usb/devices/[device_path]
   ```

### ❌ Error de programación

1. **Verificar conexiones de cables**
2. **Comprobar voltaje objetivo (3.3V vs 5V)**
3. **Verificar que el dispositivo objetivo está alimentado**
4. **Revisar compatibilidad del protocolo**

### ❌ Velocidad de programación lenta

1. **Reducir frecuencia de JTAG/SWD**
2. **Verificar calidad de conexiones**
3. **Usar cables más cortos**

## Licencias y Atribuciones

Este proyecto se distribuye bajo múltiples licencias dependiendo del componente:

- **Hardware**: Creative Commons Attribution-ShareAlike 4.0
- **Firmware base**: MIT License
- **Componentes derivados**: Licencias específicas de cada proyecto base

:::note 📄 Importante
Consulta el archivo `LICENSE` en cada directorio de firmware para detalles específicos de licenciamiento.
:::

