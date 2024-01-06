import {create} from 'zustand';

interface State {
    isMusicPlaying: boolean;
    setIsMusicPlaying: (isPlaying: boolean) => void;
}

const useStore = create<State>((set) => ({
    isMusicPlaying: false,
    setIsMusicPlaying: (isPlaying) => set({isMusicPlaying: isPlaying}),
}));

export default useStore;