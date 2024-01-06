import { Canvas } from "@react-three/fiber"
import Scene from "./components/Scene";
import Lines from "./components/Lines";


function App() {

  return (
    <Canvas camera={{
      fov: 45,
      near: 0.1,
      far: 300,
      position: [0, 6, -6]
    }}>
     <Scene />
    </Canvas>
  )
}

export default App
