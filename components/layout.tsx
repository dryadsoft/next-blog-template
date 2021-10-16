import React, { FC } from "react";
import Footer from "./footer";

interface ILayoutProps {
  children: React.ReactNode;
}
const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
