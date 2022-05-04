import React, { FC } from "react";
import Footer from "./footer";
import Header from "./header";
// import NavBar from "./navbar";

interface ILayoutProps {
  children: React.ReactNode;
}
const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="container flex flex-col mx-auto items-center text-gray-200 h-screen w-screen ">
      <Header />
      {/* <NavBar /> */}
      <main className="w-full px-4 sm:w-11/12">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;