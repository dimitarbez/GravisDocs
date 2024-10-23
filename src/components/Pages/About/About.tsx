// src/pages/About.tsx

import React from 'react';
import GravisSection from '../Sections/GravisSection';
import { motion } from 'framer-motion';

// Importing images
import image1 from '../../../images/gravis_chassis_render_occlusion.jpg';
import image2 from '../../../images/gravis_chassis_render.jpg';
import image3 from '../../../images/20230520_091150.jpg';
import image4 from '../../../images/IMG_20221216_152744_1.jpg';
import image5 from '../../../images/IMG_20230515_124545_598.jpg';
import headerBg from '../../../images/gravis_chassis_render_occlusion.jpg'; // Ensure this image exists

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Enhanced Shorter Header Section */}
      <header
        className="w-full h-80 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${headerBg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Header Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About the Gravis Project
          </motion.h1>
          <motion.p
            className="text-md md:text-lg text-gray-200 max-w-2xl mb-4 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Discover the journey, technology, and vision behind Gravis Modular Robot. Learn how innovation and dedication have shaped this groundbreaking project.
          </motion.p>
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-full shadow-lg transition transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })} // Adjust scroll position as needed
            aria-label="Learn more about the Gravis Project"
          >
            Learn More
          </motion.button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">Introduction</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Conceived and initiated by Dimitar Bezhanovski, the Gravis Project represents a groundbreaking step in robotic technology. It stems from a passion for quality, innovation, and the desire to build a multi-purpose robot rover equipped with advanced features and capabilities.
            </p>
          </motion.div>
        </section>

        {/* Image Gallery */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[image1, image2].map((img, idx) => (
              <motion.div
                key={idx}
                className="rounded overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img
                  src={img}
                  alt={`Gravis Project Image ${idx + 1}`}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* History & Evolution Section */}
        <section className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">History & Evolution from Ricardo</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The history of the Gravis Project dates back to a previous creation known as "Ricardo." While Ricardo was an impressive robot with features like AI face tracking and laser integration, it had certain limitations in terms of modularity and scalability.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Dimitar, driven by the thirst for quality and a vision for a more versatile robot, embarked on the Gravis Project in September 2022. The project was guided by detailed planning, comprehensive documentation, and a relentless pursuit of excellence.
            </p>
          </motion.div>
        </section>

        {/* Additional Image Gallery */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">Technologies & Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[image3, image4].map((img, idx) => (
              <motion.div
                key={idx + 2}
                className="rounded overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img
                  src={img}
                  alt={`Gravis Technology Image ${idx + 3}`}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-gray-700 dark:text-gray-300">
            Gravis is built on a strong technological foundation, integrating Raspberry Pi 4 and Arduino to control an array of sensors, motors, and other hardware. From the RPLidar A1 for 2D mapping to the robust metal chassis for off-roading durability, each component has been meticulously selected and implemented.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            The innovative modular grid design, all-terrain tank tracks, and user-friendly interface set Gravis apart from conventional robotic designs, making it adaptable for various applications and future upgrades.
          </p>
        </section>

        {/* Final Image */}
        <section className="mb-12">
          <div className="flex justify-center">
            <motion.div
              className="rounded overflow-hidden shadow-lg max-w-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src={image5}
                alt="Gravis Robotic Arm Integration"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </section>

        {/* Future Prospects & Vision Section */}
        <section className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">Future Prospects & Vision</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Gravis is more than just a robot; it's a symbol of what's possible when creativity, engineering, and determination converge. The project continues to explore new horizons, with plans for enhanced features, community collaboration, and educational initiatives.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              From home surveillance to entertainment, Gravis is paving the way for a new era of robotics, reflecting Dimitar's commitment to excellence and his vision for a world where technology serves and inspires.
            </p>
          </motion.div>
        </section>

        {/* Gravis Section */}
        <section className="mb-12">
          <GravisSection />
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
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.235 1.84 1.235 1.07 1.835 2.807 1.305 3.495.997.108-.775.42-1.305.763-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.135-.305-.54-1.527.105-3.185 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.658.24 2.88.12 3.185.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.11.81 2.245 0 1.62-.015 2.925-.015 3.325 0 .315.21.695.825.575C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            {/* Twitter Icon */}
            <a
              href="https://twitter.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.555-2.005.959-3.127 1.184A4.916 4.916 0 0016.616 3c-2.737 0-4.952 2.215-4.952 4.952 0 .39.044.765.128 1.124C7.691 8.868 4.066 6.885 1.64 3.905a4.822 4.822 0 00-.666 2.475c0 1.708.87 3.215 2.19 4.099a4.904 4.904 0 01-2.245-.62v.062c0 2.385 1.693 4.374 3.946 4.827a4.996 4.996 0 01-2.238.084c.63 1.953 2.445 3.376 4.6 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.213c9.056 0 14.01-7.496 14.01-13.986 0-.21-.005-.423-.014-.633A10.012 10.012 0 0024 4.557z" />
              </svg>
            </a>
            {/* LinkedIn Icon */}
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.869 0-2.155 1.459-2.155 2.964v5.705h-3v-10h2.881v1.367h.041c.401-.761 1.38-1.56 2.839-1.56 3.038 0 3.604 2.0
          5 3.604 5.767v5.546z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
