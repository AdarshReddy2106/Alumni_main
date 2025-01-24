import { create } from 'zustand';

const useStore = create((set) => ({
  token: false,
  setToken: (token) => set({ token }),
}));

export default useStore;
