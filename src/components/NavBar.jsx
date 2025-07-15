import React from "react";

const Navbar = ({ kidName, onLogout }) => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.75rem 1.5rem",
        backgroundColor: "#FFE6EE",
        borderBottom: "3px solid #F67280",
        fontFamily: "'Comic Neue', cursive",
      }}
    >
      <div style={{ color: "#D6336C", fontWeight: "700", fontSize: "1.2rem" }}>
        {kidName ? `Welcome, ${kidName}!` : "Welcome!"}
      </div>

      <button
        onClick={onLogout}
        style={{
          backgroundColor: "#F67280",
          color: "white",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "15px",
          fontWeight: "700",
          cursor: "pointer",
          fontFamily: "'Comic Neue', cursive",
        }}
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
