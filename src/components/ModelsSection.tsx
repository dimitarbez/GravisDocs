// src/components/ModelsSection.tsx

import React, { useState, useEffect } from 'react';
import { FaCube, FaExternalLinkAlt, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ModelViewer from './ModelViewer';
import ErrorBoundary from './ErrorBoundary';
import { useInView } from 'react-intersection-observer';

interface Model {
  name: string;
  url: string;
}

const models: Model[] = [
  { name: 'Arduino Mega Holder', url: '/models/ArduinoMegaHolder.STL' },
  { name: 'Audio Amp Holder', url: '/models/AudioAmpHolder.STL' },
  { name: 'Back Lights Holder', url: '/models/BackLightsHolder.STL' },
  { name: 'Battery Holder', url: '/models/battery_holder.STL' },
  { name: 'Breadboard Holder', url: '/models/BreadBoardHolder.STL' },
  { name: 'Distancer 20mm', url: '/models/distancer_20mm.STL' },
  { name: 'Distancer Plug', url: '/models/distancer_plug.STL' },
  { name: 'Distancer', url: '/models/distancer.STL' },
  { name: 'Front Lights Holder', url: '/models/FrontLightsHolder.STL' },
  { name: 'L298N Holder', url: '/models/L298NHolder.STL' },
  { name: 'Level 0 Back', url: '/models/level0_back.STL' },
  { name: 'Level 0 Front', url: '/models/level0_front.STL' },
  { name: 'Level 1', url: '/models/level1.STL' },
  { name: 'Level 2', url: '/models/level2.STL' },
  { name: 'OLED Holder', url: '/models/OledHolder.STL' },
  { name: 'Pan Tilt 1', url: '/models/pantilt_1.STL' },
  { name: 'Pan Tilt 2 Left', url: '/models/pantilt_2_left.STL' },
  { name: 'Pan Tilt 2 Right', url: '/models/pantilt_2_right.STL' },
  { name: 'Pan Tilt 3', url: '/models/pantilt_3.STL' },
  { name: 'Raspberry Pi 4 Holder', url: '/models/RPi4Holder.STL' },
  { name: 'RPLidar Holder', url: '/models/RPLidarHolder.STL' },
  { name: 'Speaker Case 40mm', url: '/models/SpeakerCase40mm.STL' },
  { name: 'Speaker Case Backplate', url: '/models/SpeakerCaseBackplate.STL' },
  { name: 'Step Down Holder', url: '/models/StepDownHolder.STL' },
  { name: 'Switches Holder', url: '/models/SwitchesHolder.STL' },
];

const ModelsSection: React.FC = () => {
  return (
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
          Browse and interact with 3D models of the Gravis robot components.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {models.map((model, index) => (
            <ModelCard key={index} model={model} />
          ))}
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
  );
};

interface ModelCardProps {
  model: Model;
}

const ModelCard: React.FC<ModelCardProps> = ({ model }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Reload every time it comes into view
    threshold: 0.1,
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (inView && !isLoaded) {
      setIsLoaded(true);
    }
  }, [inView, isLoaded]);

  return (
    <div
      ref={ref}
      className="rounded-lg shadow-lg overflow-hidden bg-gray-100 dark:bg-gray-900 transition-shadow hover:shadow-xl"
    >
      {inView && isLoaded ? (
        <ErrorBoundary>
          <ModelViewer modelUrl={model.url} />
        </ErrorBoundary>
      ) : (
        <div className="flex items-center justify-center h-64 bg-gray-200 dark:bg-gray-700">
          <span className="text-gray-500 dark:text-gray-300">Loading...</span>
        </div>
      )}
      <div className="p-4 flex flex-col items-center">
        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">{model.name}</h3>
        <a
          href={model.url}
          download
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-200"
        >
          Download <FaDownload className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default ModelsSection;
