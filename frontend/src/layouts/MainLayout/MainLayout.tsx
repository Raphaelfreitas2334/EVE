import "./MainLayout.css";

import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../components/Layout/Navbar/Navbar";
import Sidebar from "../../components/Layout/Sidebar/Sidebar";

type ScreenMode = "desktop" | "notebook" | "mobile";

const MainLayout = () => {
  const [screenMode, setScreenMode] = useState<ScreenMode>("desktop");

  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 1024) {
        setScreenMode("mobile");
        setMobileMenuOpen(false);
        return;
      }

      if (width <= 1366) {
        setScreenMode("notebook");
        return;
      }

      setScreenMode("desktop");
      setSidebarExpanded(true);
      setMobileMenuOpen(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (screenMode === "mobile") {
      setMobileMenuOpen((prev) => !prev);
      return;
    }

    setSidebarExpanded((prev) => !prev);
  };

  const closeMobileSidebar = () => {
    if (screenMode === "mobile") {
      setMobileMenuOpen(false);
    }
  };

  return (
    <div
      className={[
        "layout",
        screenMode,
        sidebarExpanded ? "expanded" : "collapsed",
        mobileMenuOpen ? "mobile-open" : "",
      ].join(" ")}
    >
      <Sidebar
        screenMode={screenMode}
        expanded={sidebarExpanded}
        mobileOpen={mobileMenuOpen}
        onNavigate={closeMobileSidebar}
      />

      <div
        className={`layout-overlay ${mobileMenuOpen ? "show" : ""}`}
        onClick={closeMobileSidebar}
      />

      <div className="layout-main">
        <Navbar
          showMenuButton={screenMode !== "desktop"}
          onMenuClick={toggleSidebar}
        />

        <main className="layout-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
