import { useState } from "react";
import { popup } from "../assets/popup/popup";
import { IoIosAdd, IoIosClose } from "react-icons/io";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const popupMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`fixed bottom-10 right-6 cursor-pointer rounded-full duration-500 ease-in-out transform ${
          isOpen ? "scale-110" : "scale-100"
        }`}
        onClick={popupMenu}
      >
        {isOpen ? (
          <IoIosClose className="w-5 h-5 bg-red-600 fill-white rounded-full hover:scale-125 duration-500" />
        ) : (
          <IoIosAdd className="w-7 h-7 xl:w-8 xl:h-8 bg-green-600 fill-white rounded-full hover:scale-125 duration-500 animate-jump hover:animate-none" />
        )}
      </div>

      <ul
        className={`fixed bottom-24 right-5 grid gap-3 xl:gap-4 transform transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        {popup.map((item, index) => (
          <li key={index}>
            <img
              src={item.icon}
              alt={item.name}
              className="w-7 h-7 xl:w-8 xl:h-8 hover:scale-125 duration-500"
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Popup;
