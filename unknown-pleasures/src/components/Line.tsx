import { useMemo, FC } from "react"

import vertexShader from "../../shaders/line/vertex.glsl";
import fragmentShader from "../../shaders/line/fragment.glsl";

interface Props {
    index: number;
}

const Line: FC<Props> = (props) =>
{
    const uniforms = useMemo(() => {
        return {
            uOffset: {value: props.index * 11},
        };
    }, [props.index]);
return (
    <>
    <mesh position-z={-props.index * 0.095}>
        <boxGeometry args={[5, 0.03, 0.03, 128, 1, 1]} />
        <shaderMaterial
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={uniforms}
        />
    </mesh>
    </>
)
}

export default Line