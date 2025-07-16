---
sidebar_position: 1
---

# Multi-Protocol Programmer

<div align="center">
  <a href="#"><img src="https://img.shields.io/badge/version-1.0-blue.svg" alt="Version"/></a>
  <a href="#"><img src="https://img.shields.io/badge/language-Python-lightgrey.svg" alt="Language"/></a>
  <a href="#"><img src="https://img.shields.io/badge/language-C-lightgrey.svg" alt="Language"/></a>
  <a href="#"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License"/></a>
</div>

<div align="center">
  <a href="./docs/unit_product_brief.pdf">
    <img src="https://raw.githubusercontent.com/UNIT-Electronics-MX/unit_ch552_multiprotocol_programmer/refs/heads/main/hardware/resources/programmer.png" width="500px" alt="Multi-Protocol Programmer"/>
  </a>
</div>

:::warning ⚠️ IMPORTANT WARNING
**Users must load specific firmware according to their needs.**

This programmer requires you to load the corresponding firmware for the protocol you want to use:
- **AVR Firmware** for ATmega/ATtiny devices
- **CMSIS-DAP Firmware** for ARM Cortex-M microcontrollers  
- **CPLD Firmware** for Intel/Altera MAX II devices

**Without the appropriate firmware, the device will not work correctly.**
:::

## Overview

The **Multi-Protocol Programmer** is a versatile USB device based on the **CH552** microcontroller that supports multiple programming and debugging protocols. Compatible with **AVR**, **ARM Cortex-M**, and **Intel/Altera MAX II CPLD** devices.

### Key Features
- 🔌 **USB Full-Speed Interface** (CDC/HID depending on firmware)
- ⚡ **Voltage selector**: 3.3V / 5V with switch
- 🔄 **Interchangeable firmware** for different protocols
- 🛠️ **Compatible** with industry-standard tools

## Resources and Documentation

<div className="table-center">

| Resource | Description | Link |
|:--------:|:-----------:|:----:|
| 📚 **Complete Documentation** | Detailed programmer guide | [View Documentation](https://unit-electronics-mx.github.io/unit_multiprotocol_programmer_platform/) |
| 🚀 **Getting Started** | Initial setup tutorial | [Start Here](https://unit-electronics-mx.github.io/unit_ch552_multiprotocol_programmer/index.html) |
| 📋 **Schematic** | Electronic circuit design | [View Schematic](https://github.com/UNIT-Electronics-MX/unit_ch552_multiprotocol_programmer/blob/main/hardware/unit_sch_V_0_0_1_ue0090_CH552_USB_Multi-Protocol-Programmer.pdf) |
| 🔧 **PCB Design** | Board design files | [View Design](https://github.com/UNIT-Electronics-MX/unit_ch552_multiprotocol_programmer/tree/main/hardware) |
| 💻 **Firmware** | Source code and binaries | [View Code](https://github.com/UNIT-Electronics-MX/unit_ch55x_docker_sdk/tree/main/examples/usb/prog) |
| 🧪 **Development SDK** | CH55x development tools | [View SDK](https://github.com/UNIT-Electronics-MX/unit_ch55x_docker_sdk) |
| 📦 **Main Repository** | Complete source code | [GitHub](https://github.com/UNIT-Electronics-MX/unit_ch552_multiprotocol_programmer) |

</div>

## Technical Specifications

### Base Hardware
- **Microcontroller**: CH552G / CH552E / CH552P
- **USB Interface**: Full-Speed (12 Mbps)
- **Power Supply**: USB Bus (5V) with internal regulator
- **Output Voltage**: Selectable 3.3V / 5V via switch
- **Connectors**: Standard pin headers for programming connections

### Supported Protocols
- 🔌 **AVR**: USBasp, Serial UPDI
- 🛡️ **ARM**: SWD, JTAG (CMSIS-DAP)
- ⚙️ **CPLD**: JTAG (USB-Blaster compatible)

## Available Firmware Profiles

:::info 📋 Firmware Selection
Each firmware is optimized for a specific type of device. **You must load the correct firmware before using the programmer.**
:::

### 1. 🔧 AVR Programmer Firmware

**For AVR microcontrollers (ATmega, ATtiny, etc.)**

#### Features:
- **Protocols**: USBasp and Serial UPDI
- **Target devices**: Complete Microchip AVR family
- **USB Interface**: HID (USBasp) / CDC (Serial UPDI)
- **Voltage**: Selectable 3.3V or 5V

#### Compatible tools:
- ✅ `avrdude`
- ✅ PlatformIO
- ✅ Arduino IDE
- ✅ Atmel Studio / Microchip Studio

#### Compilation:
```bash
# Compile with SDCC
make avr

# Or flash precompiled binary
python3 tools/chprog.py firmware/avr_programmer.bin
```

:::tip 💡 Technical Note
USBasp mode enumerates as HID device, while Serial UPDI uses virtual CDC port.
:::

---

### 2. 🛡️ ARM Debugger Firmware (CMSIS-DAP)

**For ARM Cortex-M microcontrollers**

#### Features:
- **Protocols**: SWD and JTAG (CMSIS-DAP standard)
- **Target devices**: STM32, SAM, nRF52, ESP32-C3, etc.
- **USB Interface**: HID + optional CDC
- **Speed**: Up to 10 MHz SWD/JTAG

#### Compatible tools:
- ✅ [OpenOCD](http://openocd.org/)
- ✅ PyOCD
- ✅ Keil µVision
- ✅ STM32CubeIDE
- ✅ PlatformIO

#### Drivers:
- **Linux/macOS**: Native support (no additional drivers)
- **Windows**: Automatic drivers via WinUSB

:::warning ⚠️ Compatibility
Some IDEs may require specific configuration to recognize the device as CMSIS-DAP.
:::

---

### 3. ⚙️ CPLD Programmer Firmware

**For Intel/Altera MAX II devices**

#### Features:
- **Target devices**: EPM240, EPM570, EPM1270, etc.
- **Protocol**: JTAG via USB-Blaster emulation
- **Compatibility**: Intel Quartus Prime (all versions)
- **Speed**: USB-Blaster specification compliant

#### Configuration options:
- **Safe mode** (default): VID:`0x16C0` PID:`0x05DC`
- **Compatibility mode**: VID:`0x09FB` PID:`0x6001`

:::caution 🚨 Compatibility Mode
Compatibility mode uses Intel VID/PID. Use only for personal development and comply with corresponding licenses.
:::

## Installation and Setup

### System Requirements

#### Required software:
```bash
# Ubuntu/Debian
sudo apt install build-essential sdcc python3 python3-pip git

# Install Python dependencies
pip3 install pyusb

# Verify installation
sdcc --version
python3 --version
```

#### For Windows:
- [SDCC Compiler](https://sdcc.sourceforge.net/)
- [Python 3.8+](https://python.org/)
- [Git for Windows](https://git-scm.com/)

### Firmware Flashing Process

#### 1. Enter Bootloader Mode

:::info 📝 Step-by-step procedure:
1. **Disconnect** the programmer from USB completely
2. **Hold down** the `BOOT` button on the board
3. **Connect** the USB cable while keeping `BOOT` pressed
4. **Release** the button - device enters bootloader mode
5. The LED should change state indicating bootloader mode
:::

#### 2. Flash the Firmware

```bash
# Method 1: Using chprog.py (Recommended)
python3 tools/chprog.py firmware/firmware_name.bin

# Method 2: Using WCHISPTool (Windows)
# Open WCHISPTool and select the .bin file
```

#### 3. Verify Installation

```bash
# Verify device is recognized
lsusb | grep -i "ch55"

# For Windows, check in Device Manager
```

### Permission Setup (Linux)

```bash
# Create udev rules for unprivileged access
echo 'SUBSYSTEM=="usb", ATTR{idVendor}=="4348", ATTR{idProduct}=="55e0", MODE="666"' | sudo tee /etc/udev/rules.d/99-ch55x.rules

# Reload rules
sudo udevadm control --reload
sudo udevadm trigger

# Add user to dialout group (for serial ports)
sudo usermod -a -G dialout $USER
```

## Firmware Compatibility Table

<div className="table-center">

| Firmware | Protocols | Target Devices | USB Mode | Main Tools |
|:--------:|:---------:|:--------------:|:--------:|:----------:|
| **AVR** | USBasp, UPDI | ATmega, ATtiny, AVR-DA/DB | CDC/HID | avrdude, PlatformIO |
| **CMSIS-DAP** | SWD, JTAG | STM32, SAM, nRF52, ESP32-C3 | HID+CDC | OpenOCD, PyOCD, Keil |
| **CPLD** | JTAG (USB-Blaster) | EPM240, EPM570, MAX II | HID | Quartus Prime |

</div>

## Common Troubleshooting

### ❌ Device not recognized

**Possible causes and solutions:**

1. **Wrong firmware loaded**
   - Verify firmware corresponds to intended use
   - Re-flash the correct firmware

2. **Driver issues (Windows)**
   ```bash
   # Install Zadig for libusb drivers
   # Select device and install WinUSB driver
   ```

3. **Insufficient permissions (Linux)**
   ```bash
   # Check udev rules
   sudo udevadm test /sys/bus/usb/devices/[device_path]
   ```

### ❌ Programming error

1. **Verify cable connections**
2. **Check target voltage (3.3V vs 5V)**
3. **Verify target device is powered**
4. **Check protocol compatibility**

### ❌ Slow programming speed

1. **Reduce JTAG/SWD frequency**
2. **Verify connection quality**
3. **Use shorter cables**

## Licenses and Attributions

This project is distributed under multiple licenses depending on the component:

- **Hardware**: Creative Commons Attribution-ShareAlike 4.0
- **Base firmware**: MIT License
- **Derived components**: Specific licenses from each base project

:::note 📄 Important
Consult the `LICENSE` file in each firmware directory for specific licensing details.
:::
