import { Canvas } from "@react-three/fiber"
import Scene from "./components/Scene";
import PlayButton from "./components/PlayButton";
import Credits from "./components/Credits";
import Help from "./components/Help";
import { Html, useProgress } from "@react-three/drei";
import { Suspense } from "react";

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

function App() {

  return (<>
    <Canvas camera={{
      fov: 45,
      near: 0.1,
      far: 300,
      position: [0, 7, -9]
    }}>
      <Suspense fallback={<Loader />}/>
     <Scene />
    </Canvas>
      <Help />
    <PlayButton />
    <Credits />
    </>
  )
}

export default App
