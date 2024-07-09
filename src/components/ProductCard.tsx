"use client";

import { MdFavoriteBorder } from "react-icons/md";

import { Link } from "react-router-dom";
import { formatprice } from "../utils/formatPrice";
import { truncateText } from "../utils/truncateText";
import { useCart } from "../hooks/useCart";
import Rating from "@mui/material/Rating";

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const { handleAddProductToCart } = useCart();
  /*   const productRating =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.reviews.length;
 */

  return (
    <div className="col-span-1 cursor-pointer   rounded-sm transition hover:scale-105 text-center text-sm font-poppins">
      <div className="flex justify-between   mb-2 py-1">
        <div className="flex justify-center items-center bg-[#EA3010] text-white px-1 h-5 rounded">
          <p>New</p>
        </div>
        <div className="shadow-black shadow  rounded-full w-[26px] h-[26px] flex justify-center items-center">
          <MdFavoriteBorder />
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

      <button
        className="bg-primary2 text-[#121212] text-center w-full h-[40px] rounded-lg hover:scale-105"
        onClick={() => handleAddProductToCart(data)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
