import { useSelector } from "react-redux";
import { CartItemsList, SectionTitle, CartTotal } from "../components";
import { Link } from "react-router-dom";

const Cart = () => {
  // temp
  const user = useSelector((state) => state.userState?.user);
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  if (numItemsInCart === 0) {
    return (
      <div className="align-element py-20">
        <SectionTitle text="Your cart is empty" />
      </div>
    );
  }

  return (
    <div className="align-element py-20">
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12 ">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotal />
          {user ? (
            <Link to="/checkout" className="btn btn-primary btn-block mt-8">
              Proceed to checkout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary btn-block mt-8">
              please login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
