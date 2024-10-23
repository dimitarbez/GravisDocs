// src/pages/Make.tsx

import React from 'react';
import { motion } from 'framer-motion';
import electronicsImage from '../../../images/Gravis2.0.jpg';
import { FaCode, FaCube, FaMicrochip, FaExternalLinkAlt } from 'react-icons/fa';

const Make: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Page Header */}
      <header className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-gray-800 dark:to-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to the Make Page
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Explore the resources, documentation, and models you need to build and customize your Gravis Modular Robot.
          </motion.p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Code Documentation Section */}
        <section className="mb-16">
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <FaCode className="text-blue-500 w-8 h-8 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Code Documentation</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Access comprehensive code, detailed comments, and guidelines to understand and replicate the Gravis project
              seamlessly.
            </p>
            <div className="space-y-4">
              {/* Main Project Code */}
              <div>
                <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">Main Project Code</h3>
                <a
                  href="/code-documentation"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Main Code Documentation
                  <FaExternalLinkAlt className="ml-1 w-4 h-4" />
                </a>
              </div>

              {/* Microcontroller Firmware */}
              <div>
                <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">Microcontroller Firmware</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Instructions and resources related to the microcontroller firmware used in the Gravis project.
                </p>
                <ol className="list-decimal list-inside text-gray-600 dark:text-gray-300 mt-2 space-y-2">
                  <li>
                    Clone the Gravis firmware repository from{' '}
                    <a
                      href="https://github.com/dimitarbez/GravisMicrocontroller"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      here
                      <FaExternalLinkAlt className="inline ml-1 w-3 h-3" />
                    </a>
                    .
                  </li>
                  <li>Follow the installation and setup guide in the README.md file.</li>
                  <li>For any issues, refer to the troubleshooting section or raise an issue on the repo.</li>
                  <li>Ensure your microcontroller is compatible and has the necessary dependencies installed.</li>
                  <li>After setup, upload the firmware to your microcontroller following the provided steps.</li>
                </ol>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 3D Models Section */}
        <section className="mb-16">
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <FaCube className="text-green-500 w-8 h-8 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">3D Models</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Browse and download high-quality 3D models of the Gravis robot components to aid in customization and replication.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Chassis Model */}
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
                <div className="w-20 h-20 bg-gray-300 dark:bg-gray-600 rounded-full mb-3"></div>
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Chassis Model</h3>
              </div>

              {/* Arm Model */}
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
                <div className="w-20 h-20 bg-gray-300 dark:bg-gray-600 rounded-full mb-3"></div>
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Arm Model</h3>
              </div>

              {/* Sensor Mount Model */}
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
                <div className="w-20 h-20 bg-gray-300 dark:bg-gray-600 rounded-full mb-3"></div>
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Sensor Mount Model</h3>
              </div>
            </div>
            <a
              href="/3d-models"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-200"
            >
              View All 3D Models
              <FaExternalLinkAlt className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </section>

        {/* Electronics Section */}
        <section className="mb-16">
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <FaMicrochip className="text-purple-500 w-8 h-8 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Electronics</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Detailed information about the electronics, including wiring diagrams, component lists, and other essential
              information.
            </p>
            <img src={electronicsImage} alt="Electronics Schematic" className="w-full h-auto mb-6 rounded-lg shadow-md" />
            <p className="text-gray-600 dark:text-gray-300">
              This electronic schematic represents the complete wiring and communication between various components for the Gravis
              robotic project. Below is a detailed explanation of each component and its role:
            </p>
            <div className="mt-4 space-y-4">
              {/* Main Controllers */}
              <div>
                <strong className="text-gray-800 dark:text-gray-200">Main Controllers</strong>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Arduino Mega: The primary controller managing most of the sensors and actuators.</li>
                  <li>
                    Raspberry Pi: The secondary controller handling audio input and output, connected via USB to the LiDAR sensor.
                  </li>
                </ul>
              </div>

              {/* Sensors */}
              <div>
                <strong className="text-gray-800 dark:text-gray-200">Sensors</strong>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>LiDAR: Connected to the Raspberry Pi via USB for distance measurement and object recognition.</li>
                  <li>Microphone: Connected to the audio input of the Raspberry Pi for sound detection and processing.</li>
                  <li>OLED Display: Connected to the Arduino Mega via SDA and SCL for displaying information.</li>
                  <li>
                    IR Cliff Sensors (Front and Back): Connected to the Arduino Mega to detect cliffs and prevent the robot from
                    falling.
                  </li>
                  <li>
                    IR Obstacle Sensors (Front and Back): Connected to the Arduino Mega to detect obstacles in the robot's path.
                  </li>
                  <li>MQ2 Gas Sensor: Connected to the Arduino Mega for gas detection.</li>
                  <li>
                    IMU (Inertial Measurement Unit): Connected to the Arduino Mega via SDA and SCL for motion and orientation
                    sensing.
                  </li>
                  <li>DHT22 Sensor: Connected to the Arduino Mega for temperature and humidity measurement.</li>
                </ul>
              </div>

              {/* Actuators */}
              <div>
                <strong className="text-gray-800 dark:text-gray-200">Actuators</strong>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>
                    Rear Motors (controlled by L298N motor driver): Connected to the Arduino Mega for movement control of the
                    robot.
                  </li>
                  <li>
                    Front Motors (controlled by L298N motor driver): Also connected to the Arduino Mega for additional movement
                    control.
                  </li>
                  <li>
                    Servos (Camera Yaw, Camera Pitch, Arm Yaw, Arm Pitch, Arm Hand): Connected to the Arduino Mega for controlling
                    the movement of the camera and robotic arm.
                  </li>
                </ul>
              </div>

              {/* Additional Components */}
              <div>
                <strong className="text-gray-800 dark:text-gray-200">Additional Components</strong>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Speaker Amplifier: Connected to the Raspberry Pi for audio output.</li>
                  <li>Front and Back Lights: Connected to the Arduino Mega to provide illumination and signaling.</li>
                  <li>Battery Measurement Circuit: Connected to the Arduino Mega to monitor the battery voltage.</li>
                </ul>
              </div>

              {/* Power Supply */}
              <div>
                <strong className="text-gray-800 dark:text-gray-200">Power Supply</strong>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>
                    The system is powered by a 12V battery, with a 5V regulator providing power to the Arduino Mega and other 5V
                    components.
                  </li>
                </ul>
              </div>

              {/* Wiring Details */}
              <div>
                <strong className="text-gray-800 dark:text-gray-200">Wiring Details</strong>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>USB Connections: LiDAR to Raspberry Pi.</li>
                  <li>Audio Connections: Microphone to Raspberry Pi audio input, Raspberry Pi audio output to Speaker Amp.</li>
                  <li>
                    Digital and Analog Pins: Various sensors and actuators are connected to the appropriate digital and analog
                    pins on the Arduino Mega.
                  </li>
                  <li>Power and Ground Connections: Ensured for all components to maintain proper operation.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-gray-300 py-6">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Gravis Robotics. Licensed under the MIT License.</p>
          <div className="mt-4 flex justify-center space-x-4">
            {/* GitHub Icon */}
            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.235 1.84 1.235 1.07 1.835 2.807 1.305 3.495.997.108-.775.42-1.305.763-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.135-.305-.54-1.527.105-3.185 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.658.24 2.88.12 3.185.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.11.81 2.245 0 1.62-.015 2.925-.015 3.325 0 .315.21.695.825.575C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            {/* Twitter Icon */}
            <a
              href="https://twitter.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.555-2.005.959-3.127 1.184A4.916 4.916 0 0016.616 3c-2.737 0-4.952 2.215-4.952 4.952 0 .39.044.765.128 1.124C7.691 8.868 4.066 6.885 1.64 3.905a4.822 4.822 0 00-.666 2.475c0 1.708.87 3.215 2.19 4.099a4.904 4.904 0 01-2.245-.62v.062c0 2.385 1.693 4.374 3.946 4.827a4.996 4.996 0 01-2.238.084c.63 1.953 2.445 3.376 4.6 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.213c9.056 0 14.01-7.496 14.01-13.986 0-.21-.005-.423-.014-.633A10.012 10.012 0 0024 4.557z" />
              </svg>
            </a>
            {/* LinkedIn Icon */}
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.869 0-2.155 1.459-2.155 2.964v5.705h-3v-10h2.881v1.367h.041c.401-.761 1.38-1.56 2.839-1.56 3.038 0 3.604 2.0 5 3.604 5.767v5.546z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Make;
