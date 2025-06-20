import React, {useRef, useMemo, useState, useEffect} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { getCircleTexture } from "../getCircleTexture";
import { useIsMobile } from "../useIsMobile";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

function Particles({count = 500}) {
    const mesh = useRef();
    const circleTexture = useMemo(() => getCircleTexture(), []);
    const { size, viewport } = useThree();
    const isMobile = useIsMobile();

    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    // Manual global mouse tracking
    useEffect(() => {
        const handleMouseMove = (event) => {
            const x = (event.clientX / size.width) * 2 - 1;
            const y = -(event.clientY / size.height) * 2 + 1;
            setMouse({ x, y });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [size]);

    // Generate random positions
    const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
        pos.push((Math.random() - 0.5) * 100); // x
        pos.push((Math.random() - 0.5) * 100); // y
        pos.push((Math.random() - 0.5) * 100); // z
    }
    return new Float32Array(pos);
    }, [count]);

    useFrame(() => {
        if (!mesh.current) return;

        if (isMobile) {

            mesh.current.rotation.y += 0.001;
            //mesh.current.rotation.x += 0.0005;
        } else {
            mesh.current.rotation.y += (mouse.x * 0.1 - mesh.current.rotation.y) * 0.05;
            mesh.current.rotation.x += (-mouse.y * 0.1 - mesh.current.rotation.x) * 0.05;
        }

    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
            <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
        />
        </bufferGeometry>
        <pointsMaterial
            size={0.7}
            map={circleTexture}
            transparent
            alphaTest={0.5}
            sizeAttenuation
            depthWrite={false}
            color="#ffffff"
        />
        </points>
    );
    
}

export default Particles;