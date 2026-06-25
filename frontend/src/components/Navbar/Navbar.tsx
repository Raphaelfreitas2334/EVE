import "./Navbar.css";

import { Bell, UserCircle } from "lucide-react";

const Navbar = () => {

    return (

        <header className="navbar">

            <h2>Dashboard</h2>

            <div className="navbar-right">

                <Bell />

                <UserCircle />

            </div>

        </header>

    );

};

export default Navbar;