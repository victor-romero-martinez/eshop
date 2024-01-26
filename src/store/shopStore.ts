import { create } from "zustand";
import type { Product } from "@/types/type";
import { createJSONStorage, persist } from "zustand/middleware";

type TCartSate = {
  shoppingCart: Product[];
};

type TCartAction = {
  addToCart: (item: Product) => void;
  removeToCart: (id: number | string) => void;
  resetCart: () => void;
};

export const useUIShopStore = create<TCartSate & TCartAction>()(
  persist(
    (set) => ({
      shoppingCart: [],

      addToCart: (item) =>
        set((state) => ({
          shoppingCart: [...state.shoppingCart, item],
        })),

      removeToCart: (id) =>
        set((state) => ({
          shoppingCart: state.shoppingCart.filter((i) => i.id !== id),
        })),

      resetCart: () =>
        set(() => ({
          shoppingCart: [],
        })),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
