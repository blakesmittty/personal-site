import React from "react";

import FrostedGlass from "./components/FrostedGlass";
import About from "./components/About";
import Ball from "./components/Ball";

function Home() {
    

    return (
        <div className="relative z-10 pointer-events-auto sm:container min-h-screen">
      {/* Your website content */}
            <FrostedGlass 
                blur="sm" 
                opacity={5} 
                border={false} 
                rounded="sm"
                className="p-6 min-h-screen pointer-events-auto"
            >
            {/* <About /> */}
            <p className="font-code"> hello im blake</p>
            <Ball />
            </FrostedGlass>
        </div>
    );
}

export default Home;