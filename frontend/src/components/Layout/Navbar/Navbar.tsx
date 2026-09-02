import { useNavigate } from "react-router-dom";
import "./Navbar.css";

import { Bell, CircleUserRound, LogOut, Menu } from "lucide-react";

interface NavbarProps {
  showMenuButton: boolean;
  onMenuClick: () => void;
}

const Navbar = ({ showMenuButton, onMenuClick }: NavbarProps) => {
  const navigate = useNavigate();
  return (
    <header className="navbar">
      <div className="navbar-left">
        {showMenuButton && (
          <button
            className="navbar-menu-button"
            onClick={onMenuClick}
            aria-label="Abrir menu"
          >
            <Menu size={22} />
          </button>
        )}

        <h1>Dashboard</h1>
      </div>

      <div className="navbar-right">
        <button
          className="navbar-icon logout-button"
          aria-label="Sair"
          onClick={() => navigate("/login")}
        >
          <LogOut size={20} />
        </button>
        <button className="navbar-icon" aria-label="Notificações">
          <Bell size={20} />
        </button>

        <button className="navbar-icon" aria-label="Perfil">
          <CircleUserRound size={24} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
