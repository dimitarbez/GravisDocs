// src/pages/Sections/GravisSection.tsx

import React from 'react';

const GravisSection: React.FC = () => {
  return (
    <div className="gravis-section mx-auto max-w-4xl">
      <h2 className="text-4xl font-bold text-left mb-6 text-gray-800 dark:text-gray-200">Gravis: A Modular General Purpose Rover</h2>

      <p className="text-gray-700 dark:text-gray-300 mb-4">
        An inspiring evolution from a previous design, Gravis is a versatile and modular all-terrain robot that fuels creativity and innovation. Born from a thirst for quality and adaptability, Gravis answers the call for a multifunctional robot capable of various tasks.
      </p>

      <p className="text-gray-700 dark:text-gray-300">
        Developed between September 2022 and April 2023, Gravis's unique design includes a robotic arm, environment mapping, live video feedback, sensors, and much more. Designed to look tough and rugged, Gravis is not just a robot; it's a platform for exploration, learning, and fun.
      </p>
    </div>
  );
};

export default GravisSection;
