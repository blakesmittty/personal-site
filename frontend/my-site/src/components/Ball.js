import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FullScreenQuad } from "three/examples/jsm/Addons.js";

function Ball() {
    return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Low-poly globe */}
      <mesh>
        <icosahedronGeometry args={[3, 1]} /> {/* radius = 1, detail = 1 */}
        <meshStandardMaterial color="#4a90e2" wireframe={false} flatShading/>
      </mesh>

      {/* Controls for rotating the globe */}
      <OrbitControls enableZoom={false} />
    </Canvas>
    );
}

export default Ball;