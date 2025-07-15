import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    // Simulate login delay
    setTimeout(() => {
      // Save user login status
      localStorage.setItem("user", JSON.stringify({ email }));
      // Redirect to dashboard
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div style={{ padding: 20, fontFamily: "'Comic Neue', cursive", background: "#FFEBF0", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ background: "white", padding: 30, borderRadius: 20, maxWidth: 400, width: "100%", boxShadow: "0 0 15px 4px #F8C8DC" }}>
        <h2 style={{ textAlign: "center", color: "#D6336C", marginBottom: 20 }}>Log In</h2>

        {error && <div style={{ color: "red", marginBottom: 15, textAlign: "center" }}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            style={{ width: "100%", padding: 10, marginBottom: 15, borderRadius: 10, border: "1.5px solid #FADADD" }}
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            style={{ width: "100%", padding: 10, marginBottom: 20, borderRadius: 10, border: "1.5px solid #FADADD" }}
          />

          <button
            type="submit"
            style={{ width: "100%", padding: 12, backgroundColor: "#F67280", color: "white", fontWeight: "bold", border: "none", borderRadius: 15, cursor: "pointer" }}
          >
            Log In
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: 15, color: "#9B2C2C" }}>
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: "#D6336C", textDecoration: "none" }}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
