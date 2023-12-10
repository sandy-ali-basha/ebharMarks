import { create } from 'zustand'

export const dataStore = create((set) => ({
    display: false,
    setDisplay: (newData) => {
        set({ display: newData });
    },
}));
