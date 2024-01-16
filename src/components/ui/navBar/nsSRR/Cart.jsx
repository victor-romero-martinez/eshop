import CartView from "@/components/cartView/CartView";
import { shoppingCartIcon } from "../icons";
import { useUIShopStore } from "@/store/shopStore";
import { useUIStore } from "@/store/uiStore";

/** No SRR cart component */
export default function NavComp() {
  const { shoppingCart } = useUIShopStore();

  const isOpenCart = useUIStore((state) => state.cart);
  const toggleCart = useUIStore((state) => state.toggleCart);

  return (
    <>
      <div className="cart__conatiner">
        <button
          type="button"
          title="shopping cart"
          className="Btn touch"
          onClick={toggleCart}
        >
          {shoppingCartIcon}
          {shoppingCart.length > 0 && (
            <span className="cart__counter">{shoppingCart.length}</span>
          )}
        </button>

        <div className="cart__container-inner" data-open-cart={isOpenCart}>
          <CartView items={shoppingCart} />
        </div>
      </div>
    </>
  );
}
