import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type * as THREE from "three";

export function GeometricShapes() {
  const meshRef1 = useRef<THREE.Mesh>(null);
  const meshRef2 = useRef<THREE.Mesh>(null);
  const meshRef3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef1.current) {
      meshRef1.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef1.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
    if (meshRef2.current) {
      meshRef2.current.rotation.x = -state.clock.elapsedTime * 0.08;
      meshRef2.current.rotation.z = state.clock.elapsedTime * 0.12;
    }
    if (meshRef3.current) {
      meshRef3.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef3.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <>
      <mesh ref={meshRef1} position={[6, 4, -5]}>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshBasicMaterial color="#6366f1" wireframe opacity={0.4} transparent />
      </mesh>
      <mesh ref={meshRef2} position={[-7, -3, -4]}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshBasicMaterial color="#8b5cf6" wireframe opacity={0.3} transparent />
      </mesh>
      <mesh ref={meshRef3} position={[-5, 5, -6]}>
        <tetrahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#06b6d4" wireframe opacity={0.35} transparent />
      </mesh>
    </>
  );
}