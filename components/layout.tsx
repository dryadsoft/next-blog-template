import React, { FC } from "react";
import Footer from "./footer";
import Header from "./header";
import NavBar from "./navbar";

interface ILayoutProps {
  children: React.ReactNode;
}
const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="container flex flex-col mx-auto items-center text-white bg-gray-900 h-screen w-screen overflow-hidden overflow-y-auto">
      <Header />
      <NavBar />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
