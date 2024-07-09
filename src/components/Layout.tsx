import React from "react";
import NavBar from "./NavBar";
import Footer from "./footer/Footer";
import NotifBar from "./NotifBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <NotifBar />
      <NavBar />
      <main className="px-6">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
