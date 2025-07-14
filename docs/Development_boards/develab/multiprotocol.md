---
sidebar_position: 1
---

# Multi-Protocol Programmer  

<div style={{ textAlign: 'center' }}>
    <a href="#"><img src="https://img.shields.io/badge/version-1.0-blue.svg" alt="Version"/></a>
    <a href="#"><img src="https://img.shields.io/badge/language-Python-lightgrey.svg" alt="Language"/></a>
    <a href="#"><img src="https://img.shields.io/badge/language-C-lightgrey.svg" alt="Language"/></a>
    <a href="#"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License"/></a>
    <br/>
</div>

<div style={{ textAlign: 'center' }}>
    <p href="./docs/unit_product_brief.pdf">  <img src="https://raw.githubusercontent.com/UNIT-Electronics-MX/unit_ch552_multiprotocol_programmer/refs/heads/main/hardware/resources/programmer.png" width="500px"/></p>
  <br/>   
  </div>


**Supports AVR, ARM (CMSIS-DAP), and CPLD (MAX II)**

This project provides firmware for a USB-based programmer built on the **CH552 microcontroller**, supporting multiple programming targets and protocols, including **AVR**, **ARM Cortex-M**, and **CPLD** devices. The device includes **target voltage selection (3.3V / 5V)** and can be configured with different firmware to suit specific microcontroller families.
<div style={{ display: 'flex', justifyContent: 'center' }}>
  <table>
    <thead>
      <tr>
        <th>Topic</th>
        <th>Link</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Multi-Protocol Programmer</td>
        <td>
          <a href="https://unit-electronics-mx.github.io/unit_multiprotocol_programmer_platform/" target="_blank">
            Multi-Protocol Programmer
          </a>
        </td>
      </tr>
      <tr>
        <td>Getting Started</td>
        <td>
          <a href="https://unit-electronics-mx.github.io/unit_ch552_multiprotocol_programmer/index.html" target="_blank">
            Getting Started
          </a>
        </td>
      </tr>
      <tr>
        <td>Schematic Design</td>
        <td>
          <a href="https://github.com/UNIT-Electronics-MX/unit_ch552_multiprotocol_programmer/blob/main/hardware/unit_sch_V_0_0_1_ue0090_CH552_USB_Multi-Protocol-Programmer.pdf" target="_blank">
            Schematic Design
          </a>
        </td>
      </tr>
      <tr>
        <td>PCB Design</td>
        <td>
          <a href="https://github.com/UNIT-Electronics-MX/unit_ch552_multiprotocol_programmer/tree/main/hardware" target="_blank">
            PCB Design
          </a>
        </td>
      </tr>
      <tr>
        <td>Firmware Development</td>
        <td>
          <a href="https://github.com/UNIT-Electronics-MX/unit_ch552_multiprotocol_programmer/tree/main/software/PICO-DAP" target="_blank">
            Firmware Development
          </a>
        </td>
      </tr>
      <tr>
        <td>Testing and Debugging</td>
        <td>
          <a href="https://github.com/UNIT-Electronics-MX/unit_ch55x_docker_sdk" target="_blank">
            Testing and Debugging
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>


## 🔌 Hardware Overview

- Microcontroller: **CH552G / CH552E / CH552P**
- USB Full-Speed Interface (CDC / HID depending on firmware)
- Voltage Selector: **3.3V / 5V** target supply switch
- Programmable firmware profiles:
  - **AVR Programmer** (USBasp or Serial UPDI)
  - **ARM CMSIS-DAP Debugger** (picoDAP firmware)
  - **CPLD JTAG Programmer** (Quartus-compatible)


## 🔧 Firmware Profiles

### 🔹 AVR Programmer Firmware

- **Protocols:** USBasp, SerialUPDI
- **Target Devices:** ATmega, ATtiny, and other AVR MCUs
- **USB Interface:** libusb-compatible
- **Tool Compatibility:** 
  - `avrdude`
  - PlatformIO
  - Windows (Zadig/libusb)
- **Voltage:** Selectable 3.3V or 5V

**Build Options:**
- Compile with [SDCC](https://sdcc.sourceforge.net/)
- Or flash precompiled binaries using `tools/chprog.py`

> *USBasp mode enumerates as USB HID device; Serial UPDI uses CDC port.*

---

### 🔹 CMSIS-DAP Debugger Firmware (picoDAP)

- **Protocols:** SWD, JTAG (CMSIS-DAP)
- **Target Devices:** ARM Cortex-M (e.g., STM32, SAM, nRF52)
- **Tool Compatibility:**  
  - [OpenOCD](http://openocd.org/)
  - PyOCD
- **USB Interface:**
  - CMSIS-DAP via HID
  - CDC UART (optional, for logging or VCP)
- **Drivers:**
  - Linux/macOS: Native

> *Device appears as HID with optional serial COM port.*

---

### 🔹 CPLD Programmer Firmware (JTAG, Quartus-Compatible)

- **Target Devices:** Intel/Altera **MAX II (e.g., EPM240)**
- **Protocol:** JTAG via USB-Blaster protocol
- **Tool Compatibility:**  
  - Intel Quartus Programmer (via USB-Blaster emulation)
- **USB VID/PID Options:**
  - Safe distribution mode (default): `0x16C0:0x05DC`
  - Compatibility mode: `0x09FB:0x6001` *(for full Quartus support)*
- **Voltage Selection:** 3.3V / 5V via hardware switch
- **Build System:**  
  - Compile with SDCC
  - Flash via WCH bootloader or `chprog.py`

---

## 🛠️ Toolchain & Flashing

### Dependencies

- [SDCC Compiler](https://sdcc.sourceforge.net/)
- Python 3 with [`pyusb`](https://github.com/pyusb/pyusb)

```bash
sudo apt install build-essential sdcc python3 python3-pip
pip3 install pyusb
```

### Flashing Firmware (Linux/Windows/macOS)

```bash
# For bootloader mode
python3 tools/chprog.py <firmware.bin>
```

Or use **WCHISPTool** for Windows.

---

## 📌 Bootloader Mode (CH552)

To enter USB bootloader mode:

1. Disconnect all power.
2. Hold **BOOT** button.
3. Reconnect USB while holding BOOT.
4. Release button — the device enters bootloader mode.

Linux users: set proper udev rules if needed.

```bash
echo 'SUBSYSTEM=="usb", ATTR{idVendor}=="4348", ATTR{idProduct}=="55e0", MODE="666"' | sudo tee /etc/udev/rules.d/99-ch55x.rules
sudo udevadm control --reload
sudo udevadm trigger
```

---

## ✅ Summary of Firmware Capabilities

| Firmware       | Protocols         | Targets            | USB Mode      | Tools Supported     |
|----------------|-------------------|---------------------|---------------|----------------------|
| AVR Programmer | USBasp / UPDI     | AVR (ATmega, ATtiny) | CDC / HID     | `avrdude`, PlatformIO |
| CMSIS-DAP      | SWD, JTAG         | ARM Cortex-M        | HID + CDC     | OpenOCD, PyOCD       |
| CPLD Programmer| JTAG (Blaster)    | EPM240 / MAX II     | HID           | Quartus Programmer   |

---

## 🪪 License

This project is licensed under the **MIT License** or **Creative Commons Attribution-ShareAlike 3.0**, depending on the firmware base used. Refer to each firmware subproject for license specifics.
