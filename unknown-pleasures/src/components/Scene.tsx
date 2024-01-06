import { OrbitControls } from "@react-three/drei";
import Lines from "./Lines";
import Audio from "./Audio";

const Scene = () => {
    return ( 
    <>
    <color attach="background" args={["#021119"]} />
    <OrbitControls />
        <Audio />
        <Lines />
    </>
    )
}

export default Scene