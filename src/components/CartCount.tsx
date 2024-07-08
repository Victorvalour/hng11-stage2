/* 
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation"; */
import { MdOutlineShoppingCart } from "react-icons/md";

const CartCount = () => {
  /* const { cartTotalQty } = useCart();
  const router = useRouter(); */
  return (
    <div
      className="relative cursor-pointer"
      onClick={() => {} /* () => router.push("/cart") */}
    >
      <div className="">
        <MdOutlineShoppingCart />
      </div>
      <span className="absolute top-[-10px] right-[-10px] bg-primary2 text-white h-5 w-5 rounded-full flex items-center justify-center text-sm">
        3 {/* cartTotalQty */}
      </span>
    </div>
  );
};

export default CartCount;
