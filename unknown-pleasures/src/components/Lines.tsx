import { Center } from "@react-three/drei";
import { useMemo, useRef } from "react"
import Line from "./Line";
import * as THREE from "three";

const Lines = () => {
    const lineRef = useRef(null!);
    const linesCount = useMemo(() => 80, []);
    const linesList = useMemo(() => [...Array(linesCount)], [linesCount]);
    return (
        <Center>
            <group ref={lineRef}>
                {linesList.map((_, i) => {
                    return <Line index={i} />
                })}
            </group>
        </Center>
    )
}

export default Lines