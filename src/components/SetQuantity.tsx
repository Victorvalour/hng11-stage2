import { CartProductType } from "./ProductDetails";

interface SetQtyProps {
  cartCounter?: boolean;
  cartProduct: CartProductType;
  handleQtyIncrease: () => void;
  handleQtyDecrease: () => void;
}
const btnStyles = "bg-primary2 border-secondaryColor2 px-2 rounded";
const SetQuantity: React.FC<SetQtyProps> = ({
  cartProduct,
  cartCounter,
  handleQtyIncrease,
  handleQtyDecrease,
}) => {
  return (
    <div className="flex gap-8 items-center bg-[#F7F7F7]">
      {cartCounter ? null : <div className="font-semibold">QUANTITY</div>}
      <div className="flex gap-2 items-center text-base">
        <button onClick={handleQtyDecrease} className={btnStyles}>
          -
        </button>
        <div>{cartProduct.quantity}</div>
        <button onClick={handleQtyIncrease} className={btnStyles}>
          +
        </button>
      </div>
    </div>
  );
};

export default SetQuantity;
