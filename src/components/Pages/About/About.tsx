import React from 'react';

import image1 from '../../../images/gravis_chassis_render_occlusion.jpg';
import image2 from '../../../images/gravis_chassis_render.jpg';
import image3 from '../../../images/20230520_091150.jpg';
import image4 from '../../../images/IMG_20221216_152744_1.jpg';
import image5 from '../../../images/IMG_20230515_124545_598.jpg';

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-center mb-4">About the Gravis Project</h1>
      <div className="bg-white rounded p-6">
        <section className="mb-8">
          <h2 className="text-xl font-bold">Introduction</h2>
          <p>
            Conceived and initiated by Dimitar Bezhanovski, the Gravis Project represents a groundbreaking step in robotic technology. It stems from a
            passion for quality, innovation, and the desire to build a multi-purpose robot rover equipped with advanced features and capabilities.
          </p>
        </section>

        <section className="mb-8">
          <div className="grid grid-cols-2 gap-10">
            <img src={image1} alt="Description of image 1" className="rounded shadow" />
            <img src={image2} alt="Description of image 2" className="rounded shadow" />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold">History & Evolution from Ricardo</h2>
          <p>
            The history of the Gravis Project dates back to a previous creation known as "Ricardo." While Ricardo was an impressive robot with
            features like AI face tracking and laser integration, it had certain limitations in terms of modularity and scalability.
          </p>
          <p>
            Dimitar, driven by the thirst for quality and a vision for a more versatile robot, embarked on the Gravis Project in September 2022. The
            project was guided by detailed planning, comprehensive documentation, and a relentless pursuit of excellence.
          </p>
        </section>

        <section className="mb-8">
          <div className="grid grid-cols-2 gap-10">
            <img src={image3} alt="Description of image 1" className="rounded shadow" />
            <img src={image4} alt="Description of image 2" className="rounded shadow" />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold">Technologies & Components</h2>
          <p>
            Gravis is built on a strong technological foundation, integrating Raspberry Pi 4 and Arduino to control an array of sensors, motors, and
            other hardware. From the RPLidar A1 for 2D mapping to the robust metal chassis for off-roading durability, each component has been
            meticulously selected and implemented.
          </p>
          <p>
            The innovative modular grid design, all-terrain tank tracks, and user-friendly interface set Gravis apart from conventional robotic
            designs, making it adaptable for various applications and future upgrades.
          </p>
        </section>

        <section className="mb-8">
          <div className="flex justify-center">
            <img src={image5} alt="Description of image 1" className="rounded shadow max-w-lg" />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold">Future Prospects & Vision</h2>
          <p>
            Gravis is more than just a robot; it's a symbol of what's possible when creativity, engineering, and determination converge. The project
            continues to explore new horizons, with plans for enhanced features, community collaboration, and educational initiatives.
          </p>
          <p>
            From home surveillance to entertainment, Gravis is paving the way for a new era of robotics, reflecting Dimitar's commitment to excellence
            and his vision for a world where technology serves and inspires.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
