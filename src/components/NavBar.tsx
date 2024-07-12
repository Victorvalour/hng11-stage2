import { useCallback, useState } from "react";

import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Hamburger from "./Hamburger";
import CartCount from "./CartCount";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";

const NavBar: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setMenuIsOpen((prev) => !prev);
  }, []);
  return (
    <div className="h-20 shadow-lg z-10">
      <div className="flex justify-between px-6 items-center h-full">
        <div className="flex gap-3">
          <Hamburger isClicked={menuIsOpen} toggleOpen={toggleOpen} />

          <p className="font-poppins text-xl">Timbu</p>
        </div>

        <div className="md:flex mt-5 h-[44px] items-center justify-center hidden ">
          <div className="relative flex items-center h-6 w-full max-w-[350px]">
            <input
              autoComplete="off"
              type="text"
              placeholder="Search software, tools"
              className="bg-[#F4F4F4]  pl-10 border-[0.5px] rounded-l-lg focus:outline-none focus:border-[1px] focus:border-primaryColor w-full md:max-w-120 h-[44px]"
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
          <button
            className="flex justify-center cursor-pointer items-center bg-primary2 text-black rounded-r-lg h-[44px] w-[64px] text-sm px-2"
            onClick={() => {
              /* naviagate("/filter"); */
            }}
          >
            Search
          </button>
        </div>

        <div className="flex text-xl gap-4">
          <Link to="/search">
            <FaRegCircleQuestion />
          </Link>

          <Link to="/profile">
            <FaRegUserCircle />
          </Link>
          <CartCount />
        </div>
      </div>
      {menuIsOpen && (
        <div className="absolute rounded-md shadow-md w-[170px] bg-white overflow-hidden left-0 top-[112px] text-sm flex flex-col first:cursor-pointer pl-3 z-10">
          <Link to="/orders">
            <MenuItem onClick={toggleOpen}>
              <div className="flex justify-between ">
                <p>Home</p> <IoIosArrowForward />
              </div>
              <hr />
            </MenuItem>
          </Link>

          <Link to="/orders">
            <MenuItem onClick={toggleOpen}>
              <div className="flex justify-between ">
                <p>Product</p> <IoIosArrowForward />
              </div>
              <hr />
            </MenuItem>
          </Link>

          <Link to="/orders">
            <MenuItem onClick={toggleOpen}>
              <div className="flex justify-between ">
                <p>Orders</p> <IoIosArrowForward />
              </div>
              <hr />
            </MenuItem>
          </Link>

          <Link to="/orders">
            <MenuItem onClick={toggleOpen}>Contact Us</MenuItem>
          </Link>
          <hr />
        </div>
      )}
    </div>
  );
};

export default NavBar;
