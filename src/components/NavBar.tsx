import { useCallback, useState } from "react";

import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
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

          <p>Timbu</p>
        </div>

        <div className="flex text-xl gap-4">
          <FaRegCircleQuestion />
          <FaRegUserCircle />
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
