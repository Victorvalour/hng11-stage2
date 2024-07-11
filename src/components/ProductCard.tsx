"use client";

import Heart from "react-animated-heart";

import { Link, useNavigate } from "react-router-dom";
import { formatprice } from "../utils/formatPrice";
import { truncateText } from "../utils/truncateText";
import { useCart } from "../hooks/useCart";
import Rating from "@mui/material/Rating";
import { useEffect, useState } from "react";

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const [isProductInCart, setIsProductInCart] = useState(false);
  const { handleAddProductToCart, cartProducts } = useCart();
  const [isWishlistClicked, setIsWishlistClicked] = useState(false);

  /*   const productRating =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.reviews.length;
 */
  const updatedData = { ...data, quantity: 1 };

  const navigate = useNavigate();

  useEffect(() => {
    setIsProductInCart(false);
    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item) => item.id === data.id
      );

      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts]);

  return (
    <div className="col-span-1 cursor-pointer   rounded-sm transition hover:scale-105 text-center text-sm font-poppins">
      <div className="flex justify-between   mb-2 py-1">
        <div className="flex justify-center items-center bg-[#EA3010] text-white px-1 h-5 rounded">
          <p>New</p>
        </div>
        <div className="shadow-black shadow  rounded-full flex justify-center items-center relative">
          <Heart
            styles={{
              margin: "0px",
              zIndex: 10,
              position: "absolute",
              right: "0",
            }}
            isClick={isWishlistClicked}
            onClick={() => setIsWishlistClicked(!isWishlistClicked)}
          />
        </div>
      </div>
      <Link to={`/product/${data.id}`}>
        <div onClick={() => {}}>
          <div className="flex flex-col items-start w-full gap-3">
            <div className="aspect-square overflow-hidden relative w-full">
              <img src={data.image} alt="softwares" />
            </div>
            <div className="font-semibold text-[#4D4D4D]">
              {<Rating name="product-rating" value={data.rating} readOnly />}
            </div>
            <div className=" font-semibold text-[#4D4D4D]">
              {truncateText(data.name)}
            </div>
            <p className="font-semibold text-[#4D4D4D]">Version</p>
            <div className="flex gap-3">
              <p className="font-semibold">{formatprice(data.price)}</p>
              <p className="text-[#6C7275]">{formatprice(data.oldPrice)}</p>
            </div>
          </div>
        </div>
      </Link>
      {isProductInCart ? (
        <button
          className="bg-primary2 opacity-65 text-[#121212] text-center w-full h-[40px] rounded-lg hover:scale-105"
          onClick={() => {
            navigate("/cart");
          }}
        >
          Product in cart
        </button>
      ) : (
        <button
          className="bg-primary2 text-[#121212] text-center w-full h-[40px] rounded-lg hover:scale-105"
          onClick={() => handleAddProductToCart(updatedData)}
        >
          Add to cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
