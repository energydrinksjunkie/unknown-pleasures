import { useMemo, useRef } from "react";
import useStore from "./store";
import gsap from "gsap";

const PlayButton = () => {
    const buttonRef = useRef<HTMLDivElement>(null);
    const setIsMusicPlaying = useStore((state) => state.setIsMusicPlaying);
    
    const onClickHandler = useMemo(
      () => () => {
      gsap.to(buttonRef.current, {
        ocacity: 0,
        duration: 1,
        onComplete: () => {
          gsap.set(buttonRef.current, { display: "none" });
          setIsMusicPlaying(true);
        },
      });
    },
    [setIsMusicPlaying]);
    
    return (
      <div id="button-container">
        <button id="play-btn" onClick={onClickHandler}>
          <span>LOSE CONTROL</span>
        </button>
      </div>
    );
};

export default PlayButton;