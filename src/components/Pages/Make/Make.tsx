import React from 'react';
import electronicsImage from '../../../images/Gravis2.0.jpg';

const Make: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-center mb-4">Welcome to the Make Page</h1>

      <div className="bg-white rounded p-6">

        <section className="mb-8">
          <h2 className="text-xl font-bold">Code Documentation</h2>
          <p>All the necessary code, comments, and guidelines needed to understand and replicate the Gravis project.</p>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Main Project Code</h3>
            <a href="/code-documentation" className="text-blue-600 underline">
              View Main Code Documentation
            </a>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">Microcontroller Firmware</h3>
            <p>Instructions and resources related to the microcontroller firmware used in the Gravis project.</p>
            <ol className="list-decimal list-inside">
              <li>Clone the Gravis firmware repository from <a href="https://github.com/dimitarbez/GravisMicrocontroller" className="text-blue-600 underline">here</a>.</li>
              <li>Follow the installation and setup guide in the README.md file.</li>
              <li>For any issues, refer to the troubleshooting section or raise an issue on the repo.</li>
              <li>Ensure your microcontroller is compatible and has the necessary dependencies installed.</li>
              <li>After setup, upload the firmware to your microcontroller following the provided steps.</li>
            </ol>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold">3D Models</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-200 p-4 rounded">Chassis Model</div>
            <div className="bg-gray-200 p-4 rounded">Arm Model</div>
            <div className="bg-gray-200 p-4 rounded">Sensor Mount Model</div>
          </div>
          <a href="/3d-models" className="text-blue-600 underline">
            View All 3D Models
          </a>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold">Electronics</h2>
          <p>Details about the electronics, including wiring diagrams, component lists, and other relevant information.</p>
          <img src={electronicsImage} alt="Electronics Schematic" className="mt-8" />
          <p className="mt-8">
            This electronic schematic represents the complete wiring and communication between various components for a robotic
            project. Below is a detailed explanation of each component and its role:
            <br />
            <br />
            <strong>Main Controllers</strong>
            <br />
            Arduino Mega: The primary controller managing most of the sensors and actuators.
            <br />
            Raspberry Pi: The secondary controller handling audio input and output, and connected via USB to the LiDAR sensor.
            <br />
            <br />
            <strong>Sensors</strong>
            <br />
            LiDAR: Connected to the Raspberry Pi via USB for distance measurement and object recognition.
            <br />
            Microphone: Connected to the audio input of the Raspberry Pi for sound detection and processing.
            <br />
            OLED Display: Connected to the Arduino Mega via SDA and SCL for displaying information.
            <br />
            IR Cliff Sensors (Front and Back): Connected to the Arduino Mega to detect cliffs and prevent the robot from falling.
            <br />
            IR Obstacle Sensors (Front and Back): Connected to the Arduino Mega to detect obstacles in the robot's path.
            <br />
            MQ2 Gas Sensor: Connected to the Arduino Mega for gas detection.
            <br />
            IMU (Inertial Measurement Unit): Connected to the Arduino Mega via SDA and SCL for motion and orientation sensing.
            <br />
            DHT22 Sensor: Connected to the Arduino Mega for temperature and humidity measurement.
            <br />
            <br />
            <strong>Actuators</strong>
            <br />
            Rear Motors (controlled by L298N motor driver): Connected to the Arduino Mega for movement control of the robot.
            <br />
            Front Motors (controlled by L298N motor driver): Also connected to the Arduino Mega for additional movement control.
            <br />
            Servos (Camera Yaw, Camera Pitch, Arm Yaw, Arm Pitch, Arm Hand): Connected to the Arduino Mega for controlling the
            movement of the camera and robotic arm.
            <br />
            <br />
            <strong>Additional Components</strong>
            <br />
            Speaker Amplifier: Connected to the Raspberry Pi for audio output.
            <br />
            Front and Back Lights: Connected to the Arduino Mega to provide illumination and signaling.
            <br />
            Battery Measurement Circuit: Connected to the Arduino Mega to monitor the battery voltage.
            <br />
            <br />
            <strong>Power Supply</strong>
            <br />
            The system is powered by a 12V battery, with a 5V regulator providing power to the Arduino Mega and other 5V
            components.
            <br />
            <br />
            <strong>Wiring Details</strong>
            <br />
            USB Connections: LiDAR to Raspberry Pi.
            <br />
            Audio Connections: Microphone to Raspberry Pi audio input, Raspberry Pi audio output to Speaker Amp.
            <br />
            Digital and Analog Pins: Various sensors and actuators are connected to the appropriate digital and analog pins on the
            Arduino Mega.
            <br />
            Power and Ground Connections: Ensured for all components to maintain proper operation.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Make;
