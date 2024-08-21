import { Link, NavLink } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaBars } from "react-icons/fa";
import { assets } from "../assets/assets";
import { useEffect, useState } from "react";

const menus = [
  { path: "/", name: "HOME" },
  { path: "/skills", name: "SKILLS" },
  { path: "/projects", name: "PROJECTS" },
  { path: "/blog", name: "BLOG" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Disable scroll when sidebar is open
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Navbar */}
      {!isSidebarOpen && (
        <nav
          className={`fixed top-0 transition-all duration-300 ease-in-out z-40 bg-slate-900 text-slate-50 grid grid-cols-2 lg:grid-cols-3 items-center w-full ${
            scrolled ? "py-1 2xl:py-2 bg-opacity-60" : "py-3 2xl:py-5"
          }`}
        >
          <Link to="/">
            <div className="px-5 2xl:px-10">
              <img
                src={assets.d}
                alt="Developer"
                className="h-6 w-6 2xl:h-12 2xl:w-12 cursor-pointer"
              />
              <img
                src={assets.p}
                alt="Pavithran"
                className="h-6 w-6 2xl:h-12 2xl:w-12 cursor-pointer"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center justify-center gap-10 text-sm 2xl:text-2xl">
            {menus.map((menu, index) => (
              <NavLink
                key={index}
                to={menu.path}
                className={({ isActive }) =>
                  `select-none p-2 duration-300 border-b-2 ${
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
          <div className="hidden lg:flex justify-end items-center px-5 2xl:px-10 gap-3 xl:gap-4 2xl:gap-8">
            <FaLinkedinIn className="h-5 w-5 2xl:h-10 2xl:w-10" />
            <FaGithub className="h-5 w-5 2xl:h-10 2xl:w-10" />
          </div>
          <div className="md:hidden flex justify-end w-full px-4">
            <FaBars
              className="h-6 w-6 cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>
        </nav>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-slate-900 text-slate-50 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between p-4 border-b border-slate-700">
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
          <button
            className="text-2xl focus:outline-none"
            onClick={toggleSidebar}
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col gap-6 p-4">
          {menus.map((menu, index) => (
            <NavLink
              key={index}
              to={menu.path}
              onClick={toggleSidebar}
              className={({ isActive }) =>
                `select-none p-2 duration-300 border-l-4 ${
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
        <div className="flex justify-center items-center gap-10 p-10 border-t border-slate-700">
          <FaLinkedinIn className="h-6 w-6 cursor-pointer" />
          <FaGithub className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Navbar;
