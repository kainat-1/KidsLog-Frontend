import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar kidName="Alice" onLogout={() => {
          localStorage.removeItem("user");
          window.location.href = "/";
        }} />
        <Outlet />
      </div>
    </div>
  );
};

export default ProtectedLayout;
