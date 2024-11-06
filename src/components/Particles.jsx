import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function Particles() {
  const particlesRef = useRef();
  const particles = new Float32Array(
    Array.from({ length: 2000 }, () => Math.random() * 20 - 10)
  );

  useFrame(() => {
    particlesRef.current.rotation.y += 0.001;
  });

  return (
    <Points ref={particlesRef} positions={particles}>
      <PointMaterial size={0.02} color="#a29bfe" />
    </Points>
  );
}

export default Particles;
