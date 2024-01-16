import { create } from "zustand";

type isOpen = {
  navBar: boolean;
  cart: boolean;

  toggleCart: () => void;
  toggleNavbar: () => void;
};

export const useUIStore = create<isOpen>()((set) => ({
  cart: false,
  navBar: false,

  toggleCart: () => set((state) => ({ cart: !state.cart })),
  toggleNavbar: () => set((state) => ({ navBar: !state.navBar })),
}));
