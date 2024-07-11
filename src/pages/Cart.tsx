import { useEffect } from "react";
import CartClient from "../components/CartClient";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-8">
      <CartClient />
    </div>
  );
};

export default Cart;
