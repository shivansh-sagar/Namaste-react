import { useDispatch, useSelector } from "react-redux/";
import Itemlist from "./ItemList";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(removeItem());
  };

  console.log(cartItems);

  return (
    <div className="pt-32 text-center text-bold text-2xl">
      <h1>Cart</h1>
      <div
        className=" text-base w-8/12 m-auto
       p-6"
      >
        <button
          className=" rounded-md bg-black p-2 text-white    hover:border-2 border-green-500 "
          onclick={handleClearCart}
        >
          Clear Cart
        </button>
        <Itemlist item={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
