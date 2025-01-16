---
sidebar_position: 1
---


# PAM8403 Audio Amplifier 3W

The **UNIT PAM8403 Audio Amplifier 3W** is a Class D audio amplification module designed to deliver up to 3W per channel of stereo output with high efficiency. It is ideal for portable audio applications and projects with low-power devices, such as music players, portable speakers, and battery-powered systems.

- **Power per channel:** The PAM8403 can deliver up to 3W per channel into 4-ohm loads.
- **Total power:** In stereo mode, it can provide a total of up to 6W (3W per channel) when powered by a suitable source.
- **Loads:** The power output varies depending on the impedance of the connected speakers. At 8 ohms, the power per channel is approximately 1.5W.

## Module Features

<img src="/img/accessories/ampli.jpg" width="800px"/><br/>

- **Operating voltage:** 2.5V to 5.5V, compatible with USB power sources and lithium batteries.
- **Output power:** 3W per channel (4Ω, 5V).
- **Current consumption:** 5V/40mA at idle and 5V/500mA at maximum load.
- **Efficiency:** Up to 90%, minimizing energy consumption.
- **Total Harmonic Distortion (THD):** Less than 0.1%, ensuring excellent sound quality.
- **Compact size:** 19 mm x 22 mm, ideal for projects with limited space.
- **Impedance range:** Supports speakers with impedance from 4Ω to 8Ω.
- **Protection:** Includes overheating and short-circuit protection.
- **Operating temperature:** -40°C to 85°C, suitable for industrial applications and extreme environments.

# Datasheet

For detailed technical information about the PAM8403 module, refer to the following document:

👉 [Download the PAM8403 Datasheet](https://www.mouser.com/ds/2/115/PAM8403-247318.pdf?srsltid=AfmBOorzunVHYR1wIITzAZVypkFj5LkC2lR0cZLh1zfklQpAhanR1Qrl)

## Pinout Table

The following table details the main connections for the **UNIT PAM8403** amplifier module:

| PIN  | Description              | Suggested Connection with RP2040/ESP32 |
| ---- | ------------------------ | -------------------------------------- |
| VCC  | Power supply (+)         | 3.3V                                   |
| GND  | Ground (-)               | GND                                    |
| INL  | Left audio input         | Specific pin for audio signal          |
| INR  | Right audio input        | Specific pin for audio signal          |
| OUTL | Left audio output        | Speaker                                |
| OUTR | Right audio output       | Speaker                                |

For a detailed example of how to use the **UNIT PAM8403** with the **ESP32** microcontroller, check out the usage guide at the following link:

👉 [UNIT PAM8403 Usage Guide with DualMCU ESP32](https://github.com/UNIT-Electronics/VoiceAmp_Synth_ESP32)

## Purchase Links

You can purchase the **UNIT PAM8403 Audio Amplifier 3W** module directly from [UNIT Electronics](https://uelectronics.com/producto/unit-pam8403-amplificador-de-audio/).

### Technical Advantages:

- **Class D Amplifier:** Efficient amplification technology that reduces energy consumption.
- **Ultra-low power consumption:** Perfect for mobile and battery-powered devices.
- **No heatsink required:** Thanks to its energy efficiency, it remains cool even during extended use.
- **Filterless design:** Fewer external components required.
- **Compact size:** Easy to integrate into any project, with a small footprint that saves space.

## Typical Applications

This amplifier is ideal for:

- Portable speakers.
- USB or battery-powered audio systems.
- DIY and educational projects.
- Any system requiring efficient audio amplification.
