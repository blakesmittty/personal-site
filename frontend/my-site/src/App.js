import React from "react";
import { Canvas } from "@react-three/fiber";
import Particles from './components/Particles';
import FrostedGlass from "./components/FrostedGlass";

import Home from "./Home";
import Ball from "./components/Ball";
import About from "./components/About";


function App() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-gray-800 pointer-events-none">
        <div className="w-full h-full pointer-events-auto">
          <Canvas camera={{ position: [0, 0, 50], fov: 80 }}>
            <ambientLight />
            <Particles count={1000} />
          </Canvas>
        </div>
      </div>
  
      { /* Your content */}
      <Home />
    </div>
      
      
  
    
  );
}

export default App;
