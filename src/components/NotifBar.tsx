import { HiOutlineReceiptPercent } from "react-icons/hi2";
import { LuX } from "react-icons/lu";

const NotifBar = () => {
  return (
    <div className="w-full h-9 bg-primary2 flex justify-center items-center gap-2">
      <div className="flex items-center">
        <HiOutlineReceiptPercent /> <p>30% off storewide-Limited time!</p>
      </div>
      <div>
        <LuX />
      </div>
    </div>
  );
};

export default NotifBar;
