import React from 'react';

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
          <a href="/electronics" className="text-blue-600 underline">
            View Electronics Details
          </a>
        </section>
      </div>
    </div>
  );
};

export default Make;
