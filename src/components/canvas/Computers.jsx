import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf', (loader) => {
    console.log('3D Model loading progress:', loader);
  });

  useEffect(() => {
    console.log('3D Model loaded successfully:', computer.scene ? 'YES' : 'NO');
    if (computer.scene) {
      console.log('Model details:', {
        nodes: Object.keys(computer.nodes || {}).length,
        materials: Object.keys(computer.materials || {}).length
      });
    }
  }, [computer]);

  if (!computer.scene) {
    console.error('3D Model failed to load');
    return null;
  }

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    !isMobile && (
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        onPointerDown={() => document.body.style.cursor = 'grabbing'}
        onPointerUp={() => document.body.style.cursor = 'grab'}
        onPointerLeave={() => document.body.style.cursor = 'default'}
        onClick={() => console.log('Canvas clicked - mouse events working!')}
        style={{ pointerEvents: 'auto', cursor: 'grab' }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            maxPolarAngle={Math.PI / 2}
            autoRotate={false}
            rotateSpeed={2.0}
            enableDamping={true}
            dampingFactor={0.1}
            makeDefault={true}
          />
          <Computers />
        </Suspense>
        <Preload all />
      </Canvas>
    )
  );
};

export default ComputersCanvas;