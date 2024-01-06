import { Canvas } from "@react-three/fiber"
import Scene from "./components/Scene";
import PlayButton from "./components/PlayButton";
import Credits from "./components/Credits";
import Help from "./components/Help";


function App() {

  return (<>
    <Canvas camera={{
      fov: 45,
      near: 0.1,
      far: 300,
      position: [0, 7, -9]
    }}>
     <Scene />
    </Canvas>
      <Help />
    <PlayButton />
    <Credits />
    </>
  )
}

export default App
