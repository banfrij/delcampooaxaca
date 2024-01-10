import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

// A custom component that creates a text mesh and animates it along a circular path
export default function AnimatedText({ text, radius, speed, color }) {
  // Create a ref to store the text mesh
  const ref = useRef();

  // Use the useFrame hook to update the position and rotation of the text mesh on every frame
  useFrame((state) => {
    // Calculate the angle based on the elapsed time and the speed
    const angle = state.clock.getElapsedTime() * speed;

    // Set the position of the text mesh using polar coordinates
    ref.current.position.x = radius * Math.cos(angle);
    ref.current.position.y = radius * Math.sin(angle);

    // Set the rotation of the text mesh to face the origin
    ref.current.lookAt(0, 0, 0);
  });

  // Return the text mesh with some props
  return (
    <Text
      ref={ref}
      color={color}
      fontSize={1}
      maxWidth={200}
      lineHeight={1}
      textAlign={"center"}
      anchorX="center"
      anchorY="middle"
    >
      {text}
    </Text>
  );
}

// A custom component that creates a particle system and animates it along a circular path
export default function AnimatedParticles({ radius, speed, color }) {
  // Create a ref to store the particle system
  const ref = useRef();

  // Create an array of 1000 random 3D vectors
  const positions = new Array(1000)
    .fill()
    .map(() => new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5));

  // Use the useFrame hook to update the rotation of the particle system on every frame
  useFrame((state) => {
    // Set the rotation of the particle system based on the elapsed time and the speed
    ref.current.rotation.x = state.clock.getElapsedTime() * speed;
    ref.current.rotation.y = state.clock.getElapsedTime() * speed;
    ref.current.rotation.z = state.clock.getElapsedTime() * speed;
  });

  // Return the particle system with some props
  return (
    <points ref={ref}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={["attributes", "position"]}
          count={positions.length}
          array={new Float32Array(positions.flat())}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial attach="material" size={0.02} color={color} />
    </points>
  );
}

// The main component that renders the scene
