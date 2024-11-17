import { create } from "zustand";

type ExitModalStates = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useExitModal = create<ExitModalStates>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false })
}))
