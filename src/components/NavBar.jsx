import { CiMenuBurger } from "react-icons/ci";
import { useSideMenu } from "../context/StoreContext";

const NavBar = () => {
  const { isOpen, toggleMenu } = useSideMenu();
  return (
    <div
      className={`${
        isOpen
          ? "bg-slate-300 border-b-2 fixed top-0 z-1 backdrop-blur w-full"
          : "hidden"
      }`}
    >
      <div className="p-5">
        <CiMenuBurger onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default NavBar;
