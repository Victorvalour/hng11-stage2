import { useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";

const DottedLoadingSpinner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="h-[100vh] w-full inset-0 flex justify-center items-center">
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#FEBC11"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default DottedLoadingSpinner;
