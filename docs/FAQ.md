Frequently Asked Questions (FAQ)
==========================

This section answers the most common questions about the installation and use of Unit Electronics development boards.


**How do I install the support packages in Arduino IDE?**

Follow these steps:

1. Open **Arduino IDE**.
2. Go to **File > Preferences**.
3. In **Additional Board Manager URLs**, add the corresponding URL:

```bash
https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-ESP32-Arduino-Package/main/package_Uelectronics_esp32_index.json
```
4. Save and then install the boards from **Tools > Board > Board Manager**.


**How do I select the correct board in Arduino IDE?**

- Go to **Tools > Board** and select the one you want to program.
- For **DualMCU-ONE**, choose `"DualMCU-ONE (ESP32 + RP2040)"`.
- For **Cocket Nova CH552**, choose `"Cocket Nova CH552"`.


**Arduino IDE does not recognize the board, what should I do?**

- Make sure the USB drivers are installed from:
    `https://www.wch-ic.com/downloads/CH341SER_EXE.html`
- Try another USB cable or connection port.
- Restart the IDE and check if the board appears in **Tools > Port**.

**How do I report a problem or error in the installation?**

You can report a problem in the Unit Electronics GitHub repository:
[github issues](https://github.com/UNIT-Electronics/Uelectronics-ESP32-Arduino-Package/issues)

