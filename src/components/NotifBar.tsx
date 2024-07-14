import { useState } from "react";
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import { LuX } from "react-icons/lu";

const NotifBar = () => {
  const [xClicked, setXClicked] = useState(false);

  setInterval(() => {
    setXClicked(false);
  }, 10000);

  return (
    <div
      className={`w-full h-9 bg-primary2 flex justify-center items-center gap-2 ${
        xClicked ? "hidden" : "block"
      }`}
    >
      <div className="flex items-center">
        <HiOutlineReceiptPercent /> <p>30% off storewide-Limited time!</p>
      </div>
      <div onClick={() => setXClicked(true)}>
        <LuX />
      </div>
    </div>
  );
};

export default NotifBar;
