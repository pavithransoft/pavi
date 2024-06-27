import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const SideMenuContext = createContext();

export const SideMenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SideMenuContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </SideMenuContext.Provider>
  );
};

SideMenuProvider.propTypes = {
  children: PropTypes.node,
};
