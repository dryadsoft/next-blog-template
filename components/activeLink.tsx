import Link from "next/link";
import { useRouter } from "next/router";

interface IActiveLink {
  href: string;
  title: string;
}
const ActiveLink: React.FC<IActiveLink> = ({ href, title }) => {
  const { asPath: activePath } = useRouter();
  return (
    <li className="min-w-fit mx-1.5 sm:mx-3 transition duration-100 transform text-gray-500 hover:scale-105 hover:text-gray-300">
      <Link href={href}>
        <a
          className={
            decodeURI(activePath.split("/")[1]) === href.split("/")[1]
              ? "text-gray-50"
              : ""
          }
        >
          {title.toUpperCase()}
        </a>
      </Link>
    </li>
  );
};

export default ActiveLink;
