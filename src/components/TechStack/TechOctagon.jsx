"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import TechCard from "./TechCard";
import "./TechStack.scss";

import { FaReact, FaJava, FaGitAlt, FaBootstrap } from "react-icons/fa";
import {
  SiSpringboot,
  SiPostgresql,
  SiJavascript,
  SiSass,
} from "react-icons/si";

export const techStack = [
  { name: "React", icon: <FaReact /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Sass", icon: <SiSass /> },
  { name: "Git", icon: <FaGitAlt /> },
];

function TechOctagon() {
  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [0, 0, 20], fov: 20 }}
    >
      <ambientLight intensity={2} />
      <directionalLight position={[2, 1, 1]} intensity={12} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />

      <Octagon techStack={techStack} />
    </Canvas>
  );
}

function Octagon({ techStack }) {
  const octagonRef = useRef(null);

  //per cambiare impostazioni quando si passa da ,obile a desktop e viceversa
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const RADIUS = isMobile ? 2.5 : 4;

  const HEIGHT = 4;
  const SIDES = 8;

  useFrame((state, delta) => {
    if (!octagonRef.current) return;

    octagonRef.current.rotation.y += delta * 0.12;
  });

  return (
    <group ref={octagonRef}>
      <mesh>
        <cylinderGeometry key={RADIUS} args={[RADIUS, RADIUS, HEIGHT, SIDES]} />
        <meshPhysicalMaterial
          transparent
          opacity={0}
          transmission={1}
          roughness={0}
          metalness={0}
          thickness={1}
          ior={1.5}
        />
      </mesh>

      {techStack.map((tech, index) => {
        const angle = (index / SIDES) * Math.PI * 2;

        const x = Math.sin(angle) * RADIUS;
        const z = Math.cos(angle) * RADIUS;

        return (
          <group key={tech.name} position={[x, 0, z]} rotation={[0, angle, 0]}>
            <TechCard tech={tech} />
          </group>
        );
      })}
    </group>
  );
}

export default TechOctagon;
