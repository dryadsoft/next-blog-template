import React, { FC } from "react";
import Footer from "./footer";
import Header from "./header";
import NavBar from "./navbar";

interface ILayoutProps {
  navList: string[];
}
const Layout: FC<ILayoutProps> = ({ children, navList }) => {
  return (
    <div className="container flex flex-col mx-auto items-center text-gray-200 h-full w-screen ">
      <Header />
      <NavBar navList={navList} />
      <main className="w-full sm:w-11/12">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
