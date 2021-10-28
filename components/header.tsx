import { FilmIcon, HomeIcon, SearchIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full m-5 flex flex-col md:flex-row sm:justify-between">
      <div className="flex flex-col sm:flex-row items-center justify-center transition duration-100 transform hover:scale-105">
        <FilmIcon className="h-36 sm:h-40" />
        <p className="text-4xl font-extrabold text-center sm:text-left sm:text-5xl">
          Next Blog Template
        </p>
      </div>
      <div className="m-5 flex flex-row items-start justify-center">
        <Link href="/">
          <a>
            <HomeIcon className="h-8 mx-2 cursor-pointer transition duration-100 transform hover:scale-105" />
          </a>
        </Link>
        <SearchIcon className="h-8 mx-2 cursor-pointer transition duration-100 transform hover:scale-105" />
      </div>
    </header>
  );
};

export default Header;
