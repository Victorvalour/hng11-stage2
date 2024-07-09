"use client";

import { Link } from "react-router-dom";
import { formatprice } from "../utils/formatPrice";
import { truncateText } from "../utils/truncateText";
/* import { Rating } from "@mui/material";
 */
interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  /*   const productRating =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.reviews.length;
 */
  return (
    <div className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm transition hover:scale-105 text-center text-sm">
      <div>
        <div></div>
        <div></div>
      </div>
      <Link to={`/product/${data.id}`}>
        <div onClick={() => {}}>
          <div className="flex flex-col items-center w-full gap-1">
            <div className="aspect-square overflow-hidden relative w-full"></div>
            <div className="mt-4">{truncateText(data.name)}</div>
            <div>{/* <Rating value={productRating} readOnly /> */}</div>

            <div className="font-semibold">{formatprice(data.price)}</div>
          </div>
        </div>
      </Link>

      <button className="bg-primary2 text-[#121212] text-center w-full h-[40px] rounded">
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
