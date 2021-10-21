import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="w-full sm:w-11/12">
      <ul className="list-none scrollbar-hide flex items-center justify-around sm:justify-center text-lg font-bold px-4 h-10 overflow-hidden overflow-x-auto">
        <li className="mr-2 sm:mr-10 transition duration-100 transform hover:scale-105 hover:text-red-500 active:text-red-500">
          <Link href="/">
            <a>HOME</a>
          </Link>
        </li>
        <li className="mr-2 sm:mr-10 transition duration-100 transform hover:scale-105 hover:text-red-500 active:text-red-500">
          <Link href="/post">
            <a>POST</a>
          </Link>
        </li>
        <li className="mr-2 sm:mr-10 transition duration-100 transform hover:scale-105 hover:text-red-500 active:text-red-500">
          <Link href="/about">
            <a>ABOUT</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
