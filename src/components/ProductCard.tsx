"use client";

import { MdFavoriteBorder } from "react-icons/md";

import { Link } from "react-router-dom";
import { formatprice } from "../utils/formatPrice";
import { truncateText } from "../utils/truncateText";
import { useCart } from "../hooks/useCart";
/* import { Rating } from "@mui/material";
 */
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
    <div className="col-span-1 cursor-pointer   rounded-sm transition hover:scale-105 text-center text-sm">
      <div className="flex justify-between   mb-2 py-1">
        <div className="flex justify-center items-center bg-[#EA3010] text-white px-2">
          <p>New</p>
        </div>
        <div className="shadow-lg border-[1px] border-black rounded-full w-[26px] h-[26px] flex justify-center items-center">
          <MdFavoriteBorder />
        </div>
      </div>
      <Link to={`/product/${data.id}`}>
        <div onClick={() => {}}>
          <div className="flex flex-col items-center w-full gap-1">
            <div className="aspect-square overflow-hidden relative w-full">
              <img
                src="https://m.media-amazon.com/images/I/51w3rY4dNvL._AC_UF894,1000_QL80_.jpg"
                alt="softwares"
              />
            </div>
            <div className="mt-4">{truncateText(data.name)}</div>
            <div>{/* <Rating value={productRating} readOnly /> */}</div>

            <div className="font-semibold">{formatprice(data.price)}</div>
          </div>
        </div>
      </Link>

      <button
        className="bg-primary2 text-[#121212] text-center w-full h-[40px] rounded"
        onClick={() => handleAddProductToCart(data)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
