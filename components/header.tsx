import { FilmIcon, HomeIcon, SearchIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="w-full m-5 flex flex-col md:flex-row sm:justify-between">
      <div className="flex flex-col sm:flex-row items-center justify-center transition duration-100 transform hover:scale-105  cursor-pointer">
        <FilmIcon className="h-40" />
        <p className="text-6xl font-extrabold">Title</p>
      </div>
      <div className="m-5 flex flex-row items-start justify-center">
        <HomeIcon className="h-8 mx-2 cursor-pointer transition duration-100 transform hover:scale-105" />
        <SearchIcon className="h-8 mx-2 cursor-pointer transition duration-100 transform hover:scale-105" />
      </div>
    </header>
  );
};

export default Header;
