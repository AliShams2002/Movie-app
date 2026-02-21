import { create } from "zustand";

const useModuleStore = create((set) => ({
  isOpen: false,

  open: () => set(() => ({ isOpen: true })),
  close: () => set(() => ({ isOpen: false })),
}));

export default useModuleStore;
