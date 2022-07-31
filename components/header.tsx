import { HomeIcon, SearchIcon, MapIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full max-w-6xl m-2 flex flex-col sm:m-5 md:flex-row sm:justify-between">
      <div className="flex flex-col sm:flex-row items-center justify-center transition duration-100 transform hover:scale-105">
        <MapIcon className="h-36 sm:h-40" />
        <p className="text-4xl font-extrabold text-center sm:text-left sm:text-5xl">
          {process.env.siteName}
        </p>
      </div>
      <div className="m-5 flex flex-row items-start justify-center">
        <Link href="/">
          <a>
            <HomeIcon className="h-8 mx-2 cursor-pointer transition duration-100 transform hover:scale-105 hover:text-red-100  " />
          </a>
        </Link>
        <Link href="/search">
          <a>
            <SearchIcon className="h-8 mx-2 cursor-pointer transition duration-100 transform hover:scale-105 hover:text-red-100" />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
