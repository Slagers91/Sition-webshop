import { useRouter } from "next/router";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { navLinks } from "../../constants/index";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bg-[#FC969C] lg:bg-white shadow-navbar top-0 h-16 z-10 fixed w-full overflow-hidden">
      <div className="container max-w-screen-xl mx-auto px-4 h-full flex items-center">
        <div className="flex flex-nowrap overflow-x-auto scrollbar-hide">
          <ul className="flex space-x-10 text-lg whitespace-nowrap">
            {navLinks.map((link, index) => (
              <li key={link.id}>
                <Link
                  href={link.id === "new" ? "/" : `/${link.id}`}
                  legacyBehavior
                >
                  <a
                    className={`text-white lg:text-[#FC969C] font-semibold transition duration-300 ease-in-out hover:cursor-pointer ${
                      index === 0 ? "text-black" : ""
                    }`}
                  >
                    {link.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-auto">
          <FaShoppingCart className="text-black text-2xl transition duration-300 ease-in-out hover:text-gray-500 hover:cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
