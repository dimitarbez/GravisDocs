import React from 'react';

const Make: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-center mb-4">Welcome to the Make Page</h1>

      <div className="bg-white  rounded p-6">
        <section className="mb-8">
          <h2 className="text-xl font-bold">Code Documentation</h2>
          <p>All the necessary code, comments, and guidelines needed to understand and replicate the Gravis project.</p>
          <a href="/code-documentation" className="text-blue-600 underline">
            View Code Documentation
          </a>
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
          <a href="/electronics" className="text-blue-600 underline">
            View Electronics Details
          </a>
        </section>
      </div>
    </div>
  );
};

export default Make;
