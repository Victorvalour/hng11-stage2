import { RxHamburgerMenu } from "react-icons/rx";
import { LuX } from "react-icons/lu";
interface HamburgerProps {
  isClicked: boolean;
  toggleOpen: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isClicked, toggleOpen }) => {
  return isClicked ? (
    <div onClick={toggleOpen}>
      <LuX size={32} />
    </div>
  ) : (
    <div onClick={toggleOpen}>
      <RxHamburgerMenu size={32} />
    </div>
  );
};

export default Hamburger;
