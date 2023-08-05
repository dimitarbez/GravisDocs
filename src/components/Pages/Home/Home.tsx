import Carousel from '../../UI/Carousel';
import GravisSection from './Sections/GravisSection';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <header className="text-center mb-8 w-full">
        <Carousel />
      </header>

      <div className="container mx-auto p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-200 p-4 rounded">
              <h3 className="font-bold">Modularity</h3>
              <p>Build your robot as you need with our easy-to-connect modules.</p>
            </div>
            <div className="bg-gray-200 p-4 rounded">
              <h3 className="font-bold">Open Source</h3>
              <p>Contribute, modify and share. Join our community of builders.</p>
            </div>
            <div className="bg-gray-200 p-4 rounded">
              <h3 className="font-bold">Educational</h3>
              <p>Perfect for learning robotics, programming, and engineering principles.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <GravisSection />
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
          <p>
            Check our{' '}
            <a href="/docs" className="text-blue-600 underline">
              documentation
            </a>{' '}
            and start building your modular robot today. Our community is here to help you on{' '}
            <a href="https://discord.com" className="text-blue-600 underline">
              Discord
            </a>
            !
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Contribute</h2>
          <p>
            We welcome contributions! If you want to help with the code, documentation, or any other aspect of the project, here's{' '}
            <a href="/contribute" className="text-blue-600 underline">
              how to get started
            </a>
            .
          </p>
        </section>

        <footer className="text-center text-gray-600">
          <p>© 2023 Gravis Robotics. Licensed under the MIT License.</p>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
