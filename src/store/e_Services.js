import { create } from 'zustand'

export const e_Services = create((set) => ({
    show: 0,
    setShow: (newData) => {
        set({ show: newData });
    },
}));
