// src/Store.js
import { create } from "zustand";

const useStore = create((set) => ({
    token: false, 
    setToken: (newToken) => set({ token: newToken }),
}));

export default useStore;