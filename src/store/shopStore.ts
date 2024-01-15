import { create } from "zustand";
import type { Product } from "@/definitions/type";
import { createJSONStorage, persist } from "zustand/middleware";

type TCartSate = {
  shopingCart: Product[];
};

type TCartAction = {
  addToCart: (item: Product) => void;
  removeToCart: (id: number | string) => void;
};

export const useUIShopStore = create<TCartSate & TCartAction>()(
  persist(
    (set) => ({
      shopingCart: [],

      addToCart: (item) =>
        set((state) => ({
          shopingCart: [...state.shopingCart, item],
        })),

      removeToCart: (id) =>
        set((state) => ({
          shopingCart: state.shopingCart.filter((i) => i.id !== id),
        })),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
