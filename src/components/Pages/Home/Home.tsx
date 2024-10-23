// src/pages/HomePage.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../../UI/Carousel'; // Corrected import path
import Card from '../../UI/Card';
import GravisSection from '../Sections/GravisSection';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

// Importing images
import mbotsGif from '../../../images/Marketing_Bots_Promo_Video.gif';
import wiredUpPic from '../../../images/wired_up.jpg';
import explosionGif from '../../../images/robot_assembly_lower.gif';
import image1 from '../../../images/gravis_chassis_render_occlusion.jpg';
import image2 from '../../../images/gravis_chassis_render.jpg';
import image3 from '../../../images/20230520_091150.jpg';
import image4 from '../../../images/IMG_20221216_152744_1.jpg';
import image5 from '../../../images/IMG_20230515_124545_598.jpg';

const images = [image1, image2, image3, image4, image5];

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <header className="w-full">
        <Carousel
          images={images}
          title="Gravis Modular Robot"
          subtitle="An open-source, modular robot for researchers, educators, and hobbyists."
          authorName="Dimitar Bezhanovski"
          authorLink="https://www.linkedin.com/in/dimitar-bezhanovski/"
          actionLink={() => navigate('/about')}
          actionText="Learn More"
        />
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 dark:text-gray-200">
            Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <Card
              title="Modularity"
              description="Build your robot as you need with our easy-to-connect modules."
              imageUrl={explosionGif}
            />
            <Card
              title="Open Source"
              description="Contribute, modify, and share. Join our community of builders."
              imageUrl={wiredUpPic}
            />
            <Card
              title="Educational"
              description="Perfect for learning robotics, programming, and engineering principles."
              imageUrl={mbotsGif}
            />
          </div>
        </section>

        {/* Gravis Section */}
        <section className="mb-20">
          <GravisSection />
        </section>

        {/* Documentation Overview */}
        <section className="mb-20">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 dark:text-gray-200">
            Documentation
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="w-full md:w-1/3">
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                Getting Started
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Learn how to set up Gravis Modular Robot, install necessary software, and start your first project.
              </p>
              <button
                onClick={() => navigate('/docs/getting-started')}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Start Here
              </button>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                User Guide
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Detailed instructions on using the different modules, customizing your robot, and advanced configurations.
              </p>
              <button
                onClick={() => navigate('/docs/user-guide')}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Explore Guides
              </button>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                API Reference
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Comprehensive API documentation for developers looking to extend Gravis's capabilities.
              </p>
              <button
                onClick={() => navigate('/docs/api')}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                View API
              </button>
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 dark:text-gray-200">
            Showcase
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Example Project Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src={image3}
                alt="Project 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Terrain Mapping
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Gravis navigates complex terrains, mapping environments in real-time.
                </p>
                <button
                  onClick={() => navigate('/showcase/terrain-mapping')}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                >
                  Learn More
                </button>
              </div>
            </div>
            {/* Add more showcase cards as needed */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src={image4}
                alt="Project 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Live Video Feedback
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Stream live video from Gravis's onboard camera directly to your device.
                </p>
                <button
                  onClick={() => navigate('/showcase/live-video')}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src={image5}
                alt="Project 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Robotic Arm Integration
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Utilize Gravis's robotic arm for precise manipulation and tasks.
                </p>
                <button
                  onClick={() => navigate('/showcase/robotic-arm')}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 dark:text-gray-200">
            Community
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="w-full md:w-1/3 text-center">
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                Join Our Discord
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Connect with other Gravis enthusiasts, ask questions, and share your projects.
              </p>
              <button
                onClick={() => window.open('https://discord.com', '_blank')}
                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
              >
                Join Discord
              </button>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                GitHub Repository
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Explore the source code, report issues, and contribute to the development of Gravis.
              </p>
              <button
                onClick={() => window.open('https://github.com/your-repo', '_blank')}
                className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
              >
                View on GitHub
              </button>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                Follow Us
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Stay updated with the latest news, updates, and releases.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <FaGithub size={24} />
                </a>
                <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <FaTwitter size={24} />
                </a>
                <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="mb-20 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-12">
          <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800 dark:text-gray-200">
            Getting Started
          </h2>
          <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-8">
            Dive into our comprehensive documentation and start building your modular robot today. Our vibrant community is here to support you on{' '}
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800">
              Discord
            </a>
            !
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => navigate('/docs')}
              className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 dark:hover:bg-blue-600 transition"
            >
              Explore Documentation
            </button>
          </div>
        </section>

        {/* Contribute Section */}
        <section className="mb-20 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg p-12">
          <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800 dark:text-gray-200">
            Contribute
          </h2>
          <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-8">
            We welcome contributions! Whether you want to help with the code, documentation, or any other aspect of the project, here's{' '}
            <a href="/contribute" className="text-green-600 dark:text-green-400 underline hover:text-green-800">
              how to get started
            </a>
            .
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => navigate('/contribute')}
              className="bg-green-600 dark:bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 dark:hover:bg-green-600 transition"
            >
              Join Us
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-gray-300 py-6">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Gravis Robotics. Licensed under the MIT License.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGithub size={24} />
            </a>
            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
