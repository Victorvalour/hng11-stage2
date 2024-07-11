import { useCart } from "../hooks/useCart";
import { useState } from "react";

import { IoCardSharp } from "react-icons/io5";
import Input from "./inputs/input";

import Button from "../components/Button";
import DottedLoadingSpinner from "./SpinnerDotted";
import { formatprice } from "../utils/formatPrice";
import PaymentSuccess from "./paymentSuccess";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import RadioInput from "./inputs/radio";
import { FaCcVisa } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";

const CheckoutClient = () => {
  /* const [error, setError] = useState(false); */
  const [loading, setLoading] = useState(false);
  const { cartTotalQty, cartTotalAmount, cartProducts, handleClearCart } =
    useCart();
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      line1: "",
      city: "",
      state: "",
      phoneNumber: "",
      paymentMethod: "",
      country: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // toast(JSON.stringify(data));
    console.log(data);

    if (cartProducts) {
      /*  setError(false); */
      setLoading(true);

      setTimeout(() => {
        setLoading(false);

        console.log(data);
        toast.success("Checkout Successful");

        handleClearCart();
        setTimeout(() => {
          setIsPaymentSuccessful(true);
        }, 2000);
      }, 5000);
    }
  };
  /*  
            .catch((error) => {
              setError(true);
              console.log("Error", error);
              toast.error("Something went wrong");
            });
     
 */
  const isLoading = false;

  if (isPaymentSuccessful) {
    return <PaymentSuccess />;
  }

  return (
    <div>
      {loading ? (
        <DottedLoadingSpinner />
      ) : (
        <form className="relative">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full">
              <div className="col-span-1 md:col-span-7 w-full">
                <div className="shadow-xl shadow-slate-200 rounded-md p-4 flex flex-col space-y-2 ">
                  <div className="">
                    <p className="text-lg font-semibold text-slate-600">
                      Delivery Details
                    </p>
                  </div>
                  <hr />
                  {/* <p className="text-sm  text-red-500">
                    Delivery is within Nigeria *
                  </p> */}

                  <Input
                    id="line1"
                    label="Street Address"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                  />
                  <Input
                    id="city"
                    label="City / Town"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                  />
                  <Input
                    id="state"
                    label="State"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                  />
                  <Input
                    id="phoneNumber"
                    label="Phone Number"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                  />
                </div>
                <div className="shadow-xl shadow-slate-200 rounded-md p-4 flex flex-col space-y-2 gap-2">
                  <div className="">
                    <p className="text-lg font-semibold text-slate-600">
                      Payment Method
                    </p>
                  </div>
                  <hr />

                  <div className="flex flex-col mb-8">
                    <RadioInput
                      id="pay-now"
                      label="Pay now"
                      disabled={isLoading}
                      register={register}
                      errors={errors}
                      required
                      type="radio"
                      group="paymentMethod"
                    />
                    <div className="flex justify-between pr-4">
                      <p className="text-sm">
                        Complete payment with your card or a bank transfer.
                      </p>
                      <div className="flex gap-2">
                        <IoCardSharp className="text-lg" />
                        <FaCcVisa className="text-lg" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col mb-6">
                    <RadioInput
                      id="pay-on-delivery"
                      label="Pay on delivery"
                      disabled={isLoading}
                      register={register}
                      errors={errors}
                      required
                      type="radio"
                      group="paymentMethod"
                    />
                    <div className="flex justify-between pr-4 mt-1">
                      <p className="text-sm">
                        Pay with cash or transfer on-delivery.
                      </p>
                      <div className="flex gap-2">
                        <BsCashCoin className="text-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-1 md:col-span-5">
                <div className="shadow-xl flex flex-col gap-6 shadow-slate-200 rounded-md p-4">
                  <div className="">
                    <p className="text-lg font-semibold text-slate-600">
                      Order Summary
                    </p>
                  </div>
                  <hr />

                  <div className="flex justify-between">
                    <p className="">Items Total ({cartTotalQty})</p>
                    <p className="">{formatprice(cartTotalAmount)}</p>
                  </div>
                  <hr className="border-dashed" />
                  <div className="flex justify-between font-semibold">
                    <p>Subtotal</p>
                    <p>{formatprice(cartTotalAmount)}</p>
                  </div>

                  <div className="flex justify-between">
                    <p>Shipping fees</p>
                    <p>{formatprice(0)}</p>
                  </div>
                  <hr />
                  <div className="flex justify-between font-semibold text-lg">
                    <p>Total</p>
                    <p>{formatprice(cartTotalAmount)}</p>
                  </div>
                </div>

                <Button
                  label={isLoading ? "Processing..." : "Complete Order"}
                  onClick={handleSubmit(onSubmit)}
                ></Button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default CheckoutClient;
