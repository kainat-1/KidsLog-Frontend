import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{ width: "220px", backgroundColor: "#ffeef0", padding: "20px", height: "100vh" }}>
      <h2 className="mb-4" style={{ fontFamily: "'Comic Sans MS', cursive", color: "#e75480" }}>
        Kid's Panel
      </h2>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link to="/app/dashboard" className="nav-link text-dark">
            🏠 Dashboard
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/app/profile" className="nav-link text-dark">
            👧 Profile
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/app/details" className="nav-link text-dark">
            📋 Details
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/app/settings" className="nav-link text-dark">
            ⚙️ Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
