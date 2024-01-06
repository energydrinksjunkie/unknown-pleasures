import { PositionalAudio } from "@react-three/drei";
import trackPath from "../assets/disorder.mp3";
import useStore from "./store";
import { MutableRefObject, createRef, useEffect, useRef } from "react";
import * as THREE from "three";

export const analyserRef = createRef() as MutableRefObject<THREE.AudioAnalyser>;

const Audio = () => {
    const audioRef = useRef<THREE.PositionalAudio>(null!);
    const isMusicPlaying = useStore((state) => state.isMusicPlaying);

    useEffect(() => {
        const audio = audioRef.current;
        if (isMusicPlaying) {
            analyserRef.current = new THREE.AudioAnalyser(audio, 512);
            audio.play();
        } else {
            audio.stop();
        }
    }, [isMusicPlaying]);

    return (
        <PositionalAudio ref={audioRef} url={trackPath} distance={1000000} autoplay={false} />
    )
};


export default Audio;