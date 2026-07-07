import { create } from 'zustand';

interface AppState {
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isMenuOpen: false,
  setIsMenuOpen: (val: boolean) => set({ isMenuOpen: val }),
}));