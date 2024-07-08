import FooterList from "./FooterList";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook, FiYoutube } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary3 text-footerGray text-sm mt-16 px-[32px] pt-[64px] pb-[24px] font-poppins">
      <div className="flex flex-col md:flex-row justify-between  pb-8">
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-bold mb-2 text-white">Timbu Store</h3>
          <p className="text-footerGray">Computer Software Store</p>
          <div className="flex gap-4 text-footerGray text-xl mb-6">
            <Link to="#">
              <FaInstagram />
            </Link>
            <Link to="#">
              <FiFacebook />
            </Link>
            <Link to="#">
              <FiYoutube />
            </Link>
          </div>
        </div>
        <hr className="bg-[#6C7275] h-[2px] border-[#6C7275] mb-6" />
        <FooterList>
          <div className="font-light flex flex-col gap-6">
            <Link to="#">
              <p>Link</p>
            </Link>
            <Link to="#">Home</Link>
            <Link to="#">Product</Link>
            <Link to="#">Category</Link>
            <Link to="#">Account</Link>
            <Link to="#">Cart</Link>
          </div>
        </FooterList>
        <hr className="bg-[#6C7275] h-[2px] border-[#6C7275] mb-6" />
        <FooterList>
          <h3 className="font-medium mb-2">Info</h3>
          <Link to="#">Shipping policy</Link>
          <Link to="#">Returns and Refund</Link>
          <Link to="#">Support</Link>
          <Link to="#">FAQs</Link>
        </FooterList>

        <hr className="bg-[#6C7275] h-[2px] border-[#6C7275] mb-6" />

        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-base font-bold mb-2">Office</h3>
          <p className="mb-2">
            House 17 rom 4, <br /> highlandway,
          </p>
          <p>Nigeria</p>

          <p>234 - 0001 - 2222</p>
        </div>
        <hr className="bg-[#6C7275] h-[1px] border-[#6C7275] mb-6" />

        <div className="flex gap-2">
          <p>Banks</p>
          <p>Banks</p>
          <p>Banks</p>
          <p>Banks</p>
          <p>Banks</p>
        </div>
        <FooterList>
          <p>&copy; {new Date().getFullYear()} E-Shop. All rights Reserved</p>
        </FooterList>
      </div>
    </footer>
  );
};

export default Footer;
