import { useRouter } from "next/navigation";
import { useUIShopStore } from "@/store/shopStore";
import { useUIStore } from "@/store/uiStore";
import { ShoppinBagIcon } from "@/components/icons/icons";
import CartView from "@/components/cartView/CartView";
import Btn from "../Btnbtn/Btn";

/** No SRR cart component */
export default function CartShopping() {
  const { shoppingCart } = useUIShopStore();
  const router = useRouter();

  const isOpenCart = useUIStore((state) => state.cart);
  const toggleCart = useUIStore((state) => state.toggleCart);

  const handleSubmit = () => {
    toggleCart();
    router.push("/checkout");
  };

  return (
    <>
      <div className="cart__conatiner">
        <button
          type="button"
          title="shopping cart"
          className="Btn"
          onClick={toggleCart}
        >
          <ShoppinBagIcon />
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
                  click={handleSubmit}
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
