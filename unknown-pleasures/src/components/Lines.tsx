import { Center } from "@react-three/drei";
import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber";
import Line from "./Line";
import * as THREE from "three";
import { lerp, map } from "./utils";
import { analyserRef } from "./Audio";
import useStore from "./store";
import { uniform } from "three/examples/jsm/nodes/Nodes.js";

const Lines = () => {
    const linesRef = useRef(null!);
    const isMusicPlaying = useStore((state) => state.isMusicPlaying);
    const linesCount = useMemo(() => 80, []);
    const linesList = useMemo(() => [...Array(linesCount)], [linesCount]);
    
    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const lines = linesRef.current;
        if(!lines) return;

        const frequencies = analyserRef.current?.getFrequencyData();
        // console.log(frequencies);

        lines.children.forEach((line, index) => {
            line.children.forEach((lineOrPlane) => {
                lineOrPlane.material.uniforms.uTime.value = time;
                if(isMusicPlaying){
                    const frequency = frequencies?.[index] ?? 0;
                    const currentStrength = lineOrPlane.material.uniforms.uStrength.value;
                    const nextStrength = map(frequency, 0, 255, 0, 1);
                    lineOrPlane.material.uniforms.uStrength.value = lerp(currentStrength, nextStrength, 0.25);
                }
            })
        });
    });
    
    return (
        <Center>
            <group ref={linesRef}>
                {linesList.map((_, i) => {
                    return <Line index={i} />
                })}
            </group>
        </Center>
    )
}

export default Lines