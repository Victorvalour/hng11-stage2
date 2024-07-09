import { PiCaretDownLight } from "react-icons/pi";

const Sort = () => {
  return (
    <div className="flex justify-between items-center w-full my-3 text-sm h-[40px]">
      <div className="flex items-center h-full">
        <p className="text-[#808080] mr-2">Sort by: </p>
        <div className="flex items-center border-[1px] border-[#D8D8D8] h-full px-2 rounded gap-4">
          <p> Latest</p>
          <PiCaretDownLight />
        </div>
      </div>
      <p>
        <span className="font-semibold">104</span> Results Found
      </p>
    </div>
  );
};

export default Sort;
