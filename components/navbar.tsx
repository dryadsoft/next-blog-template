import ActiveLink from "./activeLink";

interface INavBarProps {
  navList: string[];
}
const NavBar: React.FC<INavBarProps> = ({ navList }) => {
  return (
    <>
      {navList && navList.length > 1 ? (
        <nav className="w-full sm:w-11/12">
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
