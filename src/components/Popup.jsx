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
        className={`fixed bottom-10 right-7 cursor-pointer rounded-full duration-500 ease-in-out transform ${
          isOpen ? "scale-110" : "scale-100"
        }`}
        onClick={popupMenu}
      >
        {isOpen ? (
          <IoIosClose className="w-5 h-5 2xl:w-9 2xl:h-9 bg-red-600 fill-white rounded-full hover:scale-110 duration-500" />
        ) : (
          <IoIosAdd className="w-10 h-10 2xl:w-20 2xl:h-20 bg-green-600 fill-white rounded-full animate-jump" />
        )}
      </div>

      <ul
        className={`fixed bottom-24 2xl:bottom-32 right-5 grid gap-3 2xl:gap-8 transform transition-all duration-500 ease-in-out ${
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
              className="w-8 h-8 2xl:w-14 2xl:h-14 hover:scale-125 duration-500"
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Popup;
