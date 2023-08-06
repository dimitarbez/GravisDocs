import Carousel from '../../UI/Carousel';
import Card from '../../UI/Card';
import GravisSection from './Sections/GravisSection';
import React from 'react';
import { useLocation } from 'react-router-dom';


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
  return (
    <React.Fragment>
      <header className="text-center mb-8 w-full">
        <Carousel
          images={images}
          title="Gravis Modular Robot"
          subtitle="An open-source, modular robot for researchers, educators, and hobbyists."
          authorName="Dimitar Bezhanovski"
          authorLink="https://www.linkedin.com/in/dimitar-bezhanovski/"
          actionLink="/GravisDocs/about"
          actionText="Learn More"
        />
      </header>

      <div className="container mx-auto p-8">
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card title="Modularity" description="Build your robot as you need with our easy-to-connect modules." imageUrl={explosionGif} />
            <Card title="Open Source" description="Contribute, modify and share. Join our community of builders." imageUrl={wiredUpPic} />
            <Card title="Educational" description="Perfect for learning robotics, programming, and engineering principles." imageUrl={mbotsGif} />
          </div>
        </section>

        <section className="mb-8">
          <GravisSection />
        </section>

        <section className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center">
            <div></div>
            <div className="bg-white rounded shadow p-4 w-full sm:w-auto">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/FqFcDFMogvo"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded"
              ></iframe>
            </div>
            <div></div>

            {/* You can add more content in other columns here */}
          </div>
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
