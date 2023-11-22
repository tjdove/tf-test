import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function Sphere(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta));
  useFrame(() => {
    console.log("Hey, I'm executing every frame!");
  });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <>
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 2.5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      >
        <sphereGeometry args={[3, 3, 3, 1, 3, 3, 3, 3, 3]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
    </>
  );
}
