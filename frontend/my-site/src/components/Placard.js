import React from "react";

import FrostedGlass from "./FrostedGlass";

function Placard() {

    return (
        <FrostedGlass 
            blur="sm" 
            opacity={5} 
            border={false} 
            rounded="2xl"
            className="p-6 min-h-screen pointer-events-auto"
        >
        
        <div>
            <h2>Projects</h2>
            <h1>link</h1>
        </div>

        </FrostedGlass>
    );
}

export default Placard;