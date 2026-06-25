import "./MainLayout.css";

import { Outlet } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

const MainLayout = () => {

    return (

        <div className="layout">

            <Sidebar />

            <div className="content">

                <Navbar />

                <main>

                    <Outlet />

                </main>

            </div>

        </div>

    );

};

export default MainLayout;