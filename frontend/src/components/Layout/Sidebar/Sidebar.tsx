import "./Sidebar.css";

import { NavLink } from "react-router-dom";
import { CircleUserRound } from "lucide-react";

import { MENU } from "../../../constants/menu";

export type ScreenMode = "desktop" | "notebook" | "mobile";

interface SidebarProps {
  screenMode: ScreenMode;
  expanded: boolean;
  mobileOpen: boolean;
  onNavigate: () => void;
}

const Sidebar = ({
  screenMode,
  expanded,
  mobileOpen,
  onNavigate,
}: SidebarProps) => {
  const className = [
    "sidebar",
    screenMode,
    expanded ? "expanded" : "collapsed",
    mobileOpen ? "mobile-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <aside className={className}>
      <div className="sidebar-logo">
        <h2>EVE</h2>

        <span>Educational Vision Ecosystem</span>
      </div>

      <nav className="sidebar-menu">
        <ul>
          {MENU.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.route}>
                <NavLink
                  to={item.route}
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    isActive ? "menu-link active" : "menu-link"
                  }
                >
                  <Icon size={20} />

                  <span>{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <footer className="sidebar-footer">
        <div className="user-avatar">
          <CircleUserRound size={44} />
        </div>

        <div className="user-info">
          <strong>Raphael Santos</strong>

          <span>Administrador</span>
        </div>
      </footer>
    </aside>
  );
};

export default Sidebar;
