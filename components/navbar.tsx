import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const ActiveLink = dynamic(() => import("./activeLink"), { ssr: false });
interface INavBarProps {
  navList: string[];
}
const NavBar: React.FC<INavBarProps> = ({ navList }) => {
  const [customNav, setCustomNav] = useState<any>([]);
  useEffect(() => {
    if (process.env.NAV_LIST) {
      const navSortList = JSON.parse(String(process.env.NAV_LIST));
      //@ts-ignore
      const filteredNav = navSortList
        //@ts-ignore
        .filter((nav) => navList.includes(nav.name));
      //@ts-ignore
      setCustomNav(filteredNav);
    } else {
      setCustomNav(navList.map((nav) => ({ name: nav, convertName: nav })));
    }
  }, []);
  return (
    <>
      {customNav && customNav.length > 1 ? (
        <nav className="sticky top-0 w-full max-w-5xl mb-6 bg-[#2E3033] z-50 sm:rounded-md sm:mb-10 sm:w-11/12 select-none">
          <ul className="list-none scrollbar-hide flex items-center justify-start text-base font-medium px-4 h-10 overflow-hidden overflow-x-auto sm:font-semibold">
            {/* <ActiveLink href="/" title="HOME" /> */}
            {
              //@ts-ignore
              customNav.map((nav, index) => (
                <ActiveLink
                  key={index}
                  href={`/${nav.name}`}
                  title={
                    nav.convertName
                      ? nav.convertName.split("/")[
                          nav.convertName.split("/").length - 1
                        ]
                      : nav.name.split("/")[nav.name.split("/").length - 1]
                  }
                />
              ))
            }
          </ul>
        </nav>
      ) : null}
    </>
  );
};

export default NavBar;
