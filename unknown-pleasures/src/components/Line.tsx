import { useMemo, FC } from "react"
import * as THREE from "three";

import vertexShader from "../../shaders/line/vertex.glsl";
import lineFragmentShader from "../../shaders/line/fragment.glsl";
import planeFragmentShader from "../../shaders/plane/fragment.glsl";

const lineGeometry = new THREE.BoxGeometry(5, 0.03, 0.03, 128, 1, 1);
const planeGeometry = new THREE.PlaneGeometry(5, 1.5, 128, 1);

interface Props {
    index: number;
}

const Line: FC<Props> = (props) =>
{
    const uniforms = useMemo(() => {
        return {
            uOffset: {value: props.index * 11},
            uTime: {value: 0},
            uStrength: {value: 1},
        };
    }, [props.index]);
return (
    <group>
    <mesh position-z={-props.index * 0.095} geometry={lineGeometry}>
        <shaderMaterial
            vertexShader={vertexShader}
            fragmentShader={lineFragmentShader}
            uniforms={uniforms}
        />
    </mesh>
    <mesh position-z={-props.index * 0.095} position-y={-0.75} geometry={planeGeometry}>
        <shaderMaterial vertexShader={vertexShader} fragmentShader={planeFragmentShader} uniforms={uniforms} side={THREE.DoubleSide} />
    </mesh>
    </group>
)
}

export default Line