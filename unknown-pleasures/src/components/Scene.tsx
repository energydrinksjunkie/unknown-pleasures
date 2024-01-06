import { OrbitControls } from "@react-three/drei"
import Lines from "./Lines"

const Scene = () => {
    return ( 
    <>
    <color attach="background" args={["#021119"]} />
    <OrbitControls />
        <Lines />
    </>
    )
}

export default Scene