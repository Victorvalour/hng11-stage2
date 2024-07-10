import Button from "../components/Button";
import check from "../assets/check.svg";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className="absolute inset-0  top-0 flex flex-col items-center justify-center gap-2 bg-white z-10 font-poppins">
      <p className="mt-4 text-xl font-semibold font-poppins text-[#747474]">
        Thank You for Your Purchase!!🌟
      </p>
      <p className="mt-2 text-3xl font-semibold font-poppins">
        Order placed Successfully
      </p>
      <div className="z-10 text-center">
        <img src={check} className="" />
      </div>

      <div className=" border-t-2 p-4">
        <h2 className="font-semibold">Order History</h2>
        <div className="flex">
          <p className="text-sm">ORDER NUMBER: </p>
          <p className="text-sm">#002</p>
        </div>
        <div className="flex">
          <p className="text-sm">DATE: </p>
          <p className="text-sm">{formattedDate}</p>
        </div>
      </div>

      <div className="z-10 mt-6">
        <Button
          label="Continue Shopping"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
    </div>
  );
};

export default PaymentSuccess;
