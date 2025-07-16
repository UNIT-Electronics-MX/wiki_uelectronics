---
sidebar_position: 1
---

# Programador Multi-Protocolo   

<div align="center">
  <a href="#"><img src="https://img.shields.io/badge/version-1.0-blue.svg" alt="Versión"/></a>
  <a href="#"><img src="https://img.shields.io/badge/language-Python-lightgrey.svg" alt="Lenguaje"/></a>
  <a href="#"><img src="https://img.shields.io/badge/language-C-lightgrey.svg" alt="Lenguaje"/></a>
  <a href="#"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="Licencia"/></a>
  <br/>
</div>

<div align="center">
  <p href="./docs/unit_product_brief.pdf">  <img src="https://raw.githubusercontent.com/UNIT-Electronics-MX/unit_ch552_multiprotocol_programmer/refs/heads/main/hardware/resources/programmer.png" width="500px"/></p>
  <br/>   
  </div>


**Compatible con AVR, ARM (CMSIS-DAP) y CPLD (MAX II)**

Este proyecto proporciona firmware para un programador USB basado en el **microcontrolador CH552**, compatible con múltiples objetivos y protocolos de programación, incluyendo dispositivos **AVR**, **ARM Cortex-M** y **CPLD**. El dispositivo incluye **selección de voltaje objetivo (3.3V / 5V)** y puede configurarse con diferentes firmware para adaptarse a familias específicas de microcontroladores.

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <table>
    <thead>
      <tr>
        <th>Tema</th>
        <th>Enlace</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Programador Multi-Protocolo</td>
        <td>
          <a href="https://unit-electronics-mx.github.io/unit_multiprotocol_programmer_platform/" target="_blank">
            Programador Multi-Protocolo
          </a>
        </td>
      </tr>
      <tr>
        <td>Primeros Pasos</td>
        <td>
          <a href="https://unit-electronics-mx.github.io/unit_ch552_multiprotocol_programmer/index.html" target="_blank">
            Primeros Pasos
          </a>
        </td>
      </tr>
      <tr>
        <td>Diseño Esquemático</td>
        <td>
          <a href="https://github.com/UNIT-Electronics-MX/unit_ch552_multiprotocol_programmer/blob/main/hardware/unit_sch_V_0_0_1_ue0090_CH552_USB_Multi-Protocol-Programmer.pdf" target="_blank">
            Diseño Esquemático
          </a>
        </td>
      </tr>
      <tr>
        <td>Diseño de PCB</td>
        <td>
          <a href="https://github.com/UNIT-Electronics-MX/unit_ch552_multiprotocol_programmer/tree/main/hardware" target="_blank">
            Diseño de PCB
          </a>
        </td>
      </tr>
      <tr>
        <td>Desarrollo de Firmware</td>
        <td>
          <a href="https://github.com/UNIT-Electronics-MX/unit_ch552_multiprotocol_programmer/tree/main/software/PICO-DAP" target="_blank">
            Desarrollo de Firmware
          </a>
        </td>
      </tr>
      <tr>
        <td>Pruebas y Depuración</td>
        <td>
          <a href="https://github.com/UNIT-Electronics-MX/unit_ch55x_docker_sdk" target="_blank">
            Pruebas y Depuración
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Descripción del Hardware

- Microcontrolador: **CH552G / CH552E / CH552P**
- Interfaz USB Full-Speed (CDC / HID dependiendo del firmware)
- Selector de Voltaje: **3.3V / 5V** con interruptor de suministro
- Perfiles de firmware programables:
  - **Programador AVR** (USBasp o Serial UPDI)
  - **Depurador ARM CMSIS-DAP** (firmware picoDAP)
  - **Programador CPLD JTAG** (compatible con Quartus)


## Perfiles de Firmware

### Firmware de Programador AVR

- **Protocolos:** USBasp, SerialUPDI
- **Dispositivos Objetivo:** ATmega, ATtiny y otros MCUs AVR
- **Interfaz USB:** Compatible con libusb
- **Compatibilidad con Herramientas:** 
  - `avrdude`
  - PlatformIO
  - Windows (Zadig/libusb)
- **Voltaje:** Seleccionable 3.3V o 5V

**Opciones de Compilación:**
- Compilar con [SDCC](https://sdcc.sourceforge.net/)
- O flashear binarios precompilados usando `tools/chprog.py`

> *El modo USBasp se enumera como dispositivo USB HID; Serial UPDI utiliza puerto CDC.*

---

### Firmware de Depurador CMSIS-DAP (picoDAP)

- **Protocolos:** SWD, JTAG (CMSIS-DAP)
- **Dispositivos Objetivo:** ARM Cortex-M (e.g., STM32, SAM, nRF52)
- **Compatibilidad con Herramientas:**  
  - [OpenOCD](http://openocd.org/)
  - PyOCD

- **Interfaz USB:**
  - CMSIS-DAP vía HID
  - UART CDC (opcional, para registro o VCP)
- **Controladores:**
  - Linux/macOS: Nativo

> *El dispositivo aparece como HID con puerto COM serial opcional.*

---

### Firmware de Programador CPLD (JTAG, Compatible con Quartus)

- **Dispositivos Objetivo:** Intel/Altera **MAX II (e.g., EPM240)**
- **Protocolo:** JTAG vía protocolo USB-Blaster
- **Compatibilidad con Herramientas:**  
  - Programador Intel Quartus (vía emulación USB-Blaster)
- **Opciones de VID/PID USB:**
  - Modo de distribución seguro (predeterminado): `0x16C0:0x05DC`
  - Modo de compatibilidad: `0x09FB:0x6001` *(para soporte completo de Quartus)*
- **Selección de Voltaje:** 3.3V / 5V mediante interruptor de hardware
- **Sistema de Compilación:**  
  - Compilar con SDCC
  - Flashear vía bootloader WCH o `chprog.py`

---

## Herramientas y Flasheo

### Dependencias

- [Compilador SDCC](https://sdcc.sourceforge.net/)
- Python 3 con [`pyusb`](https://github.com/pyusb/pyusb)

```bash
sudo apt install build-essential sdcc python3 python3-pip
pip3 install pyusb
```

### Flasheo de Firmware (Linux/Windows/macOS)

```bash
# Para modo bootloader
python3 tools/chprog.py <firmware.bin>
```

O usar **WCHISPTool** para Windows.

---

## Modo Bootloader (CH552)

Para entrar en modo bootloader USB:

1. Desconectar toda la alimentación.
2. Mantener presionado el botón **BOOT**.
3. Reconectar USB mientras se mantiene presionado BOOT.
4. Soltar el botón — el dispositivo entra en modo bootloader.

Usuarios de Linux: establecer reglas udev adecuadas si es necesario.

```bash
echo 'SUBSYSTEM=="usb", ATTR{idVendor}=="4348", ATTR{idProduct}=="55e0", MODE="666"' | sudo tee /etc/udev/rules.d/99-ch55x.rules
sudo udevadm control --reload
sudo udevadm trigger
```

---

## Resumen de Capacidades del Firmware

| Firmware       | Protocolos         | Objetivos          | Modo USB      | Herramientas Compatibles |
|----------------|-------------------|---------------------|---------------|---------------------------|
| Programador AVR | USBasp / UPDI     | AVR (ATmega, ATtiny) | CDC / HID     | `avrdude`, PlatformIO     |
| CMSIS-DAP      | SWD, JTAG         | ARM Cortex-M        | HID + CDC     | OpenOCD, PyOCD            |
| Programador CPLD| JTAG (Blaster)    | EPM240 / MAX II     | HID           | Programador Quartus       |

---

## 🪪 Licencia

Este proyecto está licenciado bajo la **Licencia MIT** o **Creative Commons Attribution-ShareAlike 3.0**, dependiendo de la base del firmware utilizado. Consulte cada subproyecto de firmware para detalles específicos de la licencia.

