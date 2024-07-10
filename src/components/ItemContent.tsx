import { formatprice } from "../utils/formatPrice";
import { CartProductType } from "./ProductDetails";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { truncateText } from "../utils/truncateText";

import SetQuantity from "./SetQuantity";
import { useCart } from "../hooks/useCart";
import { Link } from "react-router-dom";

interface ItemContentProps {
  item: CartProductType;
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
  const {
    handleRemoveProductFromCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
    cartTotalQty,
  } = useCart();

  console.log(cartTotalQty);

  return (
    <div className="flex md:flex-col">
      <div className="grid grid-cols-10 text-xs md:text-sm gap-4 border-t-[1.5px] border-slate-200 py-4 items-center">
        <div className="w-[70px]">
          <button
            className="text-secondaryColor underline"
            onClick={() => handleRemoveProductFromCart(item)}
          >
            <MdOutlineDeleteOutline />
          </button>
        </div>
        <div className="col-span-4 justify-self-start flex gap-2 md:gap-4">
          <Link to={`/product/${item.id}`}>
            <div className="relative w-[70px] aspect-square">
              <img
                src={item.image}
                alt={item.image}
                className="object-contain"
              />
            </div>
          </Link>

          <div className="flex flex-col justify-between">
            <Link to={`/product/${item.id}`}>{truncateText(item.name)}</Link>
          </div>
        </div>

        <div className="justify-self-center col-span-3">
          <SetQuantity
            cartCounter={true}
            cartProduct={item}
            handleQtyIncrease={() => {
              handleCartQtyIncrease(item);
            }}
            handleQtyDecrease={() => {
              handleCartQtyDecrease(item);
            }}
          />
        </div>

        <div className="justify-self-end font-semibold 2">
          {formatprice(item.price * item.quantity)}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ItemContent;
