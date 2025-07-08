// src/Store.js
import { create } from "zustand";

const useStore = create((set) => ({
    token: false, // default is not logged in
    setToken: (newToken) => set({ token: newToken }),
}));

export default useStore;