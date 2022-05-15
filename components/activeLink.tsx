import Link from "next/link";
import { useRouter } from "next/router";

interface IActiveLink {
  href: string;
  title: string;
}
const ActiveLink: React.FC<IActiveLink> = ({ href, title }) => {
  const { asPath: activePath } = useRouter();
  return (
    <li className="mr-2 sm:mr-10 transition duration-100 transform hover:scale-105 hover:text-red-300">
      <Link href={href}>
        <a className={decodeURI(activePath) === href ? "text-red-400" : ""}>
          {title.toUpperCase()}
        </a>
      </Link>
    </li>
  );
};

export default ActiveLink;
