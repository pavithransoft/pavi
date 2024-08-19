import { Link, NavLink } from "react-router-dom";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { assets } from "../assets/assets";
import { useEffect, useState } from "react";

const menus = [
  {
    path: "/",
    name: "HOME",
  },
  {
    path: "/skills",
    name: "SKILLS",
  },
  {
    path: "/projects",
    name: "PROJECTS",
  },
  {
    path: "/blog",
    name: "BLOG",
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 transition-all duration-300 ease-in-out z-40 bg-slate-900 text-slate-50 grid grid-cols-3 place-items-center w-full ${
        scrolled ? "py-1 2xl:py-3 bg-opacity-60" : "py-3 2xl:py-7"
      }`}
    >
      <Link to="/">
        <div>
          <img
            src={assets.d}
            alt="Developer"
            className="h-6 w-6 2xl:w-9 2xl:h-9 cursor-pointer"
          />
          <img
            src={assets.p}
            alt="Pavithran"
            className="h-6 w-6 2xl:w-9 2xl:h-9 cursor-pointer"
          />
        </div>
      </Link>
      <div className="flex items-center gap-10 text-sm">
        {menus.map((menu, index) => (
          <NavLink
            key={index}
            to={menu.path}
            className={({ isActive }) =>
              `select-none p-2 duration-300 border-b-2 2xl:border-b-4 2xl:text-2xl ${
                isActive
                  ? "font-bold text-slate-300 border-green-500"
                  : "font-light border-transparent hover:border-red-500"
              }`
            }
          >
            {menu.name}
          </NavLink>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-5">
        <FaLinkedinIn className="h-5 w-5 2xl:h-8 2xl:w-8" />
        <FaGithub className="h-5 w-5 2xl:h-8 2xl:w-8" />
      </div>
    </nav>
  );
};

export default Navbar;
