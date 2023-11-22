import { Canvas } from "@react-three/fiber";
import Box from "./Box";

export default function App() {
  return (
    <>
      <div>Tim</div>

      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </>
  );
}
