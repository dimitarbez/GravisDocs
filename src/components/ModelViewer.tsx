// src/components/ModelViewer.tsx

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, useProgress, Center } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

interface ModelViewerProps {
  modelUrl: string;
}

const Loader: React.FC = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center">
        <svg
          className="animate-spin h-8 w-8 text-gray-500 mb-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
        <span className="text-gray-500">{progress.toFixed(0)}% loaded</span>
      </div>
    </Html>
  );
};

const STLModel: React.FC<{ url: string }> = ({ url }) => {
  const geometry = useLoader(STLLoader, url);

  React.useEffect(() => {
    console.log(`Successfully loaded geometry from ${url}`, geometry);
  }, [geometry, url]);

  return (
    <mesh geometry={geometry} castShadow receiveShadow>
      <meshStandardMaterial color="#cccccc" metalness={0.1} roughness={0.75} />
    </mesh>
  );
};

const ModelViewer: React.FC<ModelViewerProps> = ({ modelUrl }) => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 150], fov: 60 }}
      style={{ width: '100%', height: '400px' }}
      className="rounded-lg shadow-md"
      gl={(canvas) => {
        const renderer = new THREE.WebGLRenderer({ canvas });
        renderer.setClearColor('#f0f0f0'); // Correct way to set the background color
        return renderer;
      }}
    >
      {/* Ambient Light for general illumination */}
      <ambientLight intensity={0.5} />

      {/* Point Light to cast shadows and add depth */}
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />

      {/* Suspense to handle asynchronous loading */}
      <Suspense fallback={<Loader />}>
        {/* Center component to automatically center the model */}
        <Center>
          <STLModel url={modelUrl} />
        </Center>
      </Suspense>

      {/* Enhanced OrbitControls */}
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        enableDamping={true} // Enables inertial damping for smoother motion
        dampingFactor={0.1}  // Controls the damping inertia
        rotateSpeed={0.5}     // Slows down the rotation speed
        zoomSpeed={1.2}       // Increases the zoom speed
        minDistance={50}      // Minimum zoom distance
        maxDistance={300}     // Maximum zoom distance
        maxPolarAngle={Math.PI / 2} // Prevents the camera from going below the ground
      />
    </Canvas>
  );
};

export default ModelViewer;
