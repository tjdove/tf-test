import { Canvas } from "@react-three/fiber";
import Box from "./Box";
import Sphere from "./Sphere";
import Plane from "./Plane";

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[2, 2, 2]} />

      <Box position={[-1.2, 0, 0]} />
      {/* <Box position={[1.2, 0, 0]} /> */}

      {/* <Sphere position={[1.2, 0, 0]} /> */}

      <Plane position={[1, 1, 1]} />
      <ambientLight />
    </Canvas>
  );
}
