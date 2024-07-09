import React from "react";
import NavBar from "./NavBar";
import Footer from "./footer/Footer";
import NotifBar from "./NotifBar";
import { Toaster } from "react-hot-toast";
import CartProvider from "../providers/CartProvider";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Toaster
        toastOptions={{
          style: {
            background: "rgb(51 65 85)",
            color: "#ffff",
          },
        }}
      />

      <CartProvider>
        <NotifBar />
        <NavBar />
        <main className="px-6">{children}</main>
        <Footer />
      </CartProvider>
    </div>
  );
};

export default Layout;
