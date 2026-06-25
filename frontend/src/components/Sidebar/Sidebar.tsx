import "./Sidebar.css";

import { NavLink } from "react-router-dom";

import { CircleUserRound } from "lucide-react";

import { MENU } from "../../constants/menu";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>EVE</h2>
        <span>Educational Vision Ecosystem</span>
      </div>

      <nav>
        <ul>
          {MENU.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.route}>
                <NavLink
                  to={item.route}
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

      <div className="sidebar-footer">
        <div className="user-avatar">
          <CircleUserRound size={42} />
        </div>

        <div className="user-info">
          <strong>Raphael Santos</strong>

          <span>Administrador</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
