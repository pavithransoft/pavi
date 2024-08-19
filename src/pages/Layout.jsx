import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import Popup from "../components/Popup";

const Layout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Outlet />
      {/* <Footer /> */}
      <Popup />
    </div>
  );
};

export default Layout;
