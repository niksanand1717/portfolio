import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";

function InteractiveSphere() {
  const sphereRef = useRef();

  useFrame((state) => {
    const { x, y } = state.mouse;
    sphereRef.current.position.set(x * 5, y * 5, 0);
  });

  return (
    <Sphere ref={sphereRef} args={[1, 100, 200]}>
      <meshStandardMaterial color="#6c5ce7" roughness={0.5} metalness={0.5} />
    </Sphere>
  );
}

export default InteractiveSphere;
