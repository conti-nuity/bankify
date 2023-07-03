import { create } from "zustand";

export const useBanksStore = create((set) => ({
  // State
  banks: {},
  // Actions
  setBanks: (info: any) => set(() => ({ banks: info })),
}));
