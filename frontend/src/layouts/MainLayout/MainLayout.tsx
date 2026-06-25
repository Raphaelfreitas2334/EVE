import "./MainLayout.css";

import { Outlet } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
