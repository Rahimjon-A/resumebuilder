import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Layout = () => {
  return (
    <div className="layout">
      <div className="navbar mb-[50px] ">
        <Navbar />
      </div>

      <div className="content">
        <Outlet/>
      </div>
    </div>
  );
};

export default Layout;