---
sidebar_position: 1
---



# Nova Firmware programmer

The Nova Programmer is a versatile firmware that allows you to program various microcontrollers and FPGA  using the CH55x series. This firmware is compatible with the Cocket Nova development board and other CH55x-based boards. The Nova Programmer firmware is designed to simplify the programming process by providing a user-friendly interface and supporting multiple programming modes.





## Mode AVR ISP

The AVR ISP mode allows you to program AVR microcontrollers using the In-System Programming (ISP) protocol. This mode supports programming of various AVR microcontrollers, including ATmega328P, ATtiny85, and ATmega16. The Nova Programmer firmware provides a simple interface for selecting the target microcontroller, setting the programming frequency, and uploading the firmware.

:::warning

Not tested 

:::

```bash
make flash
```


## Mode FPGA JTAG

The FPGA JTAG mode enables programming of FPGA devices using the Joint Test Action Group (JTAG) protocol. Altera devices are supported in this mode. The Nova Programmer firmware allows you to select the target FPGA device, set the programming frequency, and upload the firmware to the device.

:::warning
Not tested

:::

## Mode ARM SWD

The ARM SWD mode supports programming of ARM microcontrollers using the Serial Wire Debug (SWD) protocol. This mode is compatible with various ARM microcontrollers, including STM32, LPC, and nRF52 series. The Nova Programmer firmware provides an intuitive interface for selecting the target microcontroller, setting the programming frequency, and uploading the firmware.
    
```bash
make flash
```

The following ARM devices have been tested with the Nova Programmer firmware in ARM SWD mode:

| Device Series | Microcontroller Models       |
|---------------|------------------------------|
| STM32         | x                            |
| LPC           | x                            |
| nRF52         | x                            |
| RP            |  RP2040                      |