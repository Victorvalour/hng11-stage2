import { useEffect } from "react";
import CheckoutClient from "../components/CheckoutClient";

const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-8 md:p-8">
      <CheckoutClient />
    </div>
  );
};

export default Checkout;
