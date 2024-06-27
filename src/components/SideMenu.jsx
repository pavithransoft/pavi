import { TbSquareLetterPFilled } from "react-icons/tb";
import { MdArrowBackIos } from "react-icons/md";
import { IoHome, IoLogoVercel } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { FaLaptopCode } from "react-icons/fa6";
import { IoIosGrid } from "react-icons/io";
import { useSideMenu } from "../context/StoreContext";

const SideMenu = () => {
  const { isOpen, toggleMenu } = useSideMenu();
  return (
    <div className="absolute h-screen">
      <div
        className={`h-full grid grid-rows-[10%,86%,4%] ${
          isOpen ? "hidden" : "fixed top-0 bg-slate-300 border-r-2"
        }`}
      >
        <div className="flex justify-between items-center pl-5 border-b-2">
          <TbSquareLetterPFilled className="h-8 w-8" />
          <MdArrowBackIos
            onClick={toggleMenu}
            className="h-7 w-7 cursor-pointer"
          />
        </div>
        <div className="pt-8">
          <ul className="grid grid-rows-4 items-center gap-2">
            <a
              href={"#home"}
              className="hover:bg-green-500 flex items-center gap-10 px-16 py-2 cursor-pointer"
            >
              <IoHome className="h-6 w-6" />
              <h1>Home</h1>
            </a>
            <a
              href={"#about"}
              className="hover:bg-red-500 flex items-center gap-10 px-16 py-2 cursor-pointer"
            >
              <ImProfile className="h-6 w-6" />
              <h1>About</h1>
            </a>
            <a
              href={"#skills"}
              className="hover:bg-green-500 flex items-center gap-10 px-16 py-2 cursor-pointer"
            >
              <FaLaptopCode className="h-7 w-7" />
              <h1>Skills</h1>
            </a>
            <a
              href={"#projects"}
              className="hover:bg-red-500 flex items-center gap-10 px-16 py-2 cursor-pointer"
            >
              <IoIosGrid className="h-7 w-7" />
              <h1>Projects</h1>
            </a>
          </ul>
        </div>
        <div className="text-xs flex justify-center items-center gap-1 font-dancing px-5">
          Powered by
          <IoLogoVercel />
          Vercel <span className="">@</span>
          <span className="">2024</span>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
