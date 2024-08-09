import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { assets } from "../assets/assets";
import { useEffect, useState } from "react";

const menus = [
  {
    path: "/",
    name: "HOME",
  },
  {
    path: "/about",
    name: "ABOUT",
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
  {
    path: "/contact",
    name: "CONTACT",
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
      className={`fixed top-0 transition-all duration-300 z-40 bg-slate-900 text-slate-50 grid grid-cols-3 place-items-center ${
        scrolled ? "py-1 bg-opacity-60" : "py-3"
      }`}
    >
      <Link to="/">
        <div>
          <img
            src={assets.d}
            alt="Developer"
            className="h-6 w-6 cursor-pointer"
          />
          <img
            src={assets.p}
            alt="Pavithran"
            className="h-6 w-6 cursor-pointer"
          />
        </div>
      </Link>
      <ul className="grid grid-cols-6 place-items-center gap-3 text-sm font-light">
        {menus.map((menu, index) => (
          <li
            key={index}
            className="p-2 hover:font-bold hover:border-b-2 border-green-500 hover:text-slate-300 hover:duration-300 select-none cursor-pointer"
          >
            <Link to={menu.path}>{menu.name}</Link>
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-2 gap-5">
        <FaLinkedinIn className="h-5 w-5 cursor-pointer" />
        <FaGithub className="h-5 w-5 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
