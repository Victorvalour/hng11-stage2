import { FaSearch } from "react-icons/fa";
import { BiSliderAlt } from "react-icons/bi";

const Search = () => {
  return (
    <div className="flex mt-5 h-[44px] gap-2 items-center justify-center">
      <div className="relative flex items-center h-6 w-full max-w-[350px]">
        <input
          autoComplete="off"
          type="text"
          placeholder="Search software, tools"
          className="bg-[#F4F4F4] p-2 pl-10 border-[0.5px] rounded-3xl focus:outline-none focus:border-[1px] focus:border-primaryColor w-full md:max-w-120 h-[44px]"
        />
        <div
          onClick={() => {
            console.log("Search working");
          }}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
        >
          <FaSearch />
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#F4F4F4] text-primary2 rounded-xl h-[44px] w-[44px] px-2 text-[24px]">
        <BiSliderAlt />
      </div>
    </div>
  );
};

export default Search;
