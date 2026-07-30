import { create } from "zustand";

const useModuleStore = create((set) => ({
  serchModuleIsOpen: false,
  menuModuleIsOpen: false,

  serchModuleOpen: () => set(() => ({ serchModuleIsOpen: true })),
  serchModuClose: () => set(() => ({ serchModuleIsOpen: false })),
  menuModuleOpen: () => set(() => ({ menuModuleIsOpen: true })),
  menuModuleClose: () => set(() => ({ menuModuleIsOpen: false })),
}));

export default useModuleStore;
