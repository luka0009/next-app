import { create } from 'zustand';

interface FocusStore {
    isFocused: boolean,
    onFocused: () => void,
    onBlur: () => void,
}

const useFocus = create<FocusStore>((set) => ({
    isFocused: false,
    onFocused: () => set({ isFocused: true}),
    onBlur: () => set({ isFocused: false}),
}));

export default useFocus;