import dynamic from "next/dynamic";
const ActiveLink = dynamic(() => import("./activeLink"), { ssr: false });
interface INavBarProps {
  navList: string[];
}
const NavBar: React.FC<INavBarProps> = ({ navList }) => {
  return (
    <>
      {navList && navList.length > 1 ? (
        <nav className="w-full max-w-5xl mb-6 bg-gray-500/20 z-50 sm:rounded-md sm:mb-10 sm:w-11/12 select-none">
          <ul className="list-none scrollbar-hide flex items-center justify-center text-lg font-bold px-4 h-10 overflow-hidden overflow-x-auto">
            {/* <ActiveLink href="/" title="HOME" /> */}
            {navList.map((nav, index) => (
              <ActiveLink
                key={index}
                href={`/${nav}`}
                title={nav.split("/")[nav.split("/").length - 1]}
              />
            ))}
          </ul>
        </nav>
      ) : null}
    </>
  );
};

export default NavBar;
