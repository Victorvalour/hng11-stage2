"use client";

import { useCart } from "../hooks/useCart";
import { HiOutlineTicket } from "react-icons/hi2";
import { MdArrowBack } from "react-icons/md";

import ItemContent from "./ItemContent";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { formatprice } from "../utils/formatPrice";

const CartClient = () => {
  const { cartProducts, handleClearCart, cartTotalAmount } = useCart();

  const navigate = useNavigate();

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl">Your cart is empty.</div>
        <div>
          <Link
            to={"/"}
            className="
          text-secondaryColor flex items-center gap-1 mt-2
          "
          >
            <MdArrowBack />
            <span>Start shopping</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row w-full md:justify-center md:items-start gap-3">
      {/*   <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8">
        <div className=" justify-start col-span-2">PRODUCT</div>
        <div className="justify-self-center">PRICE</div>
        <div className="justify-self-center">QUANTITY</div>
        <div className="justify-self-end">TOTAL</div>
      </div> */}
      <div className="w-full max-w-[900px]">
        {cartProducts &&
          cartProducts.map((item: any) => {
            return (
              <>
                <ItemContent key={item.id} item={item} />
                <hr className="border-2px border-[#CCCCCC] mt-4 mb-4" />
              </>
            );
          })}
        <div className="flex justify-between px-4">
          <div className="w-[100px]">
            <Button
              label="Clear Cart"
              onClick={() => handleClearCart()}
              small
              outline
            />
          </div>

          <div className="text-sm flex flex-col gap-1 items-start ">
            <Link
              to={"/"}
              className="
          text-secondaryColor flex items-center gap-1 mt-2
          "
            >
              <MdArrowBack />
              <span>Continue shopping</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4 self-center md:self-start">
        <div className="bg-[#F5F5F5] px-4 rounded flex flex-col gap-3 py-2 w-full">
          <h2 className="font-semibold">Have a coupon?</h2>
          <p className="text-[#999999] text-sm">
            Add your code for an instant cart discount
          </p>
          <div className="border-[#6C7275] border-2 rounded flex py-4 gap-2 mb-2 justify-between px-2">
            <div className="flex items-center gap-2">
              <HiOutlineTicket color="text-[#999999]" />
              <p className="text-[#999999] text-sm">Enter Coupon Code</p>
            </div>
            <p className="font-semibold text-sm">Apply</p>
          </div>

          <p className="text-[20px] font-poppins">Cart Total</p>

          <hr className="border-1 border-[#363636]" />
          <div className="flex justify-between w-full text-base font-semibold mb-2">
            <span>Subtotal</span>
            <span>{formatprice(cartTotalAmount)}</span>
          </div>

          <Button
            label={`Checkout ${formatprice(cartTotalAmount)}`}
            onClick={() => {
              navigate("/checkout");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CartClient;
