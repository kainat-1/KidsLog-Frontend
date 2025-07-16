import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkStyle =
    "block py-2 px-4 rounded-lg transition-all duration-300 text-lg font-medium";
  const activeStyle =
    "bg-pink-200 shadow-md shadow-pink-400 text-pink-800 border-l-4 border-pink-500";

  return (
    <div
      style={{
        width: "220px",
        backgroundColor: "#ffeef0",
        padding: "20px",
        height: "100vh",
        fontFamily: "'Comic Sans MS', cursive",
      }}
      className="shadow-lg"
    >
      <h2 className="mb-6 text-2xl font-bold text-center text-pink-600">
        Kid's Panel
      </h2>
      <ul className="flex flex-col gap-2">
        <li>
          <NavLink
            to="/app/dashboard"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : "text-gray-800 hover:bg-pink-100"}`
            }
          >
            🏠 Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/app/profile"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : "text-gray-800 hover:bg-pink-100"}`
            }
          >
            👧 Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/app/details"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : "text-gray-800 hover:bg-pink-100"}`
            }
          >
            📋 Details
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/app/settings"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : "text-gray-800 hover:bg-pink-100"}`
            }
          >
            ⚙️ Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
