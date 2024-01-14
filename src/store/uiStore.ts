import { create } from "zustand";

type isOpen = {
  navBar: boolean;
  cart: boolean;

  toogleCart: () => void;
  toogleNavbar: () => void;
};

export const useUIStore = create<isOpen>()((set) => ({
  cart: false,
  navBar: false,

  toogleCart: () => set((state) => ({ cart: !state.cart })),
  toogleNavbar: () => set((state) => ({ navBar: !state.navBar })),
}));
