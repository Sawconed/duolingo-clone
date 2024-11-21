import { create } from "zustand";

type HeartsModalStates = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useHeartsModal = create<HeartsModalStates>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false })
}))
