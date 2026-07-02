import "./MainLayout.css";

import { Outlet } from "react-router-dom";

import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import Navbar from "../../components/Layout/Navbar/Navbar";

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
