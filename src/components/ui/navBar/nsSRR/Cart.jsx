import CartView from "@/components/cartView/CartView";
import { shoppingCartIcon } from "../icons";
import { useUIShopStore } from "@/store/shopStore";
import { useUIStore } from "@/store/uiStore";
import Btn from "../../Btnbtn/Btn";

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
          <div
            className="carView__comp"
            style={{
              minHeight: "400px",
              position: "relative",
            }}
          >
            <CartView items={shoppingCart} />

            <div
              style={{
                width: "100%",
                display: "inline-flex",
                justifyContent: "center",
                position: "absolute",
                bottom: "8px",
                left: "0",
              }}
            >
              {shoppingCart.length > 0 && (
                <Btn
                  type="button"
                  styles={{
                    backgroundColor: "var(--primary)",
                    fontSize: "var(--font-lg)",
                    width: "100px",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  Buy
                </Btn>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
