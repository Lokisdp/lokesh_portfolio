# ESP32 ECU Rotation for IMU Wake-up Testing

## Overview

Built a motor-controlled bench setup that rotates an ECU to trigger its IMU wake-up behaviour during automated validation. An ESP32-C5 controls a stepper motor through an A4988 driver; Python and Robot Framework coordinate movement through serial commands.

## Contribution

- Implemented Embedded C motor control using Arduino IDE.
- Connected ESP32-C5, A4988 and a stepper motor for controlled clockwise and counterclockwise rotation.
- Integrated serial command handling with Python and Robot Framework.
- Used a PING/PONG handshake and movement-completion responses to coordinate the test flow.
- Added bounded connection retries and configurable rotation behaviour for bench automation.

## Test flow

Connect to the serial port → verify communication → enable the driver → rotate the ECU → wait for completion → disable the driver.

The setup supports relative commanded rotation, such as back-and-forth movement through 45 degrees. It does not claim absolute position feedback or a homing sensor.

**Tools:** ESP32-C5, A4988, Embedded C, Arduino IDE, Python, pyserial and Robot Framework.

**Repository status:** Technical summary only. Company implementation files are not included.
