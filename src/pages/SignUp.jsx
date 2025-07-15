import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    kidName: "",
    age: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const { kidName, age, email, password } = formData;

    if (!kidName || !age || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (isNaN(age) || age <= 0) {
      setError("Please enter a valid age.");
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate("/");
    } catch {
      setError("Signup failed. Please try again.");
    }
  }

  return (
    <div
      style={{
        backgroundColor: "#FFEBF0",
        fontFamily: "'Comic Neue', cursive",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "20px",
          maxWidth: "400px",
          width: "100%",
          boxShadow: "0 0 15px 4px #F8C8DC",
          border: "3px dashed #FADADD",
          boxSizing: "border-box",
        }}
      >
        <h2 style={{ color: "#D6336C", textAlign: "center", marginBottom: "1.5rem" }}>
          Sign Up
        </h2>

        {error && (
          <div
            style={{
              backgroundColor: "#f8d7da",
              color: "#842029",
              padding: "10px",
              borderRadius: "8px",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label style={{ color: "#9B2C2C", display: "block", marginBottom: "0.3rem" }} htmlFor="kidName">
            Name of Kid
          </label>
          <input
            id="kidName"
            name="kidName"
            type="text"
            value={formData.kidName}
            onChange={handleChange}
            placeholder="Enter kid's name"
            style={{
              width: "100%",
              padding: "10px 15px",
              marginBottom: "1rem",
              borderRadius: "15px",
              border: "1.5px solid #FADADD",
              boxSizing: "border-box",
            }}
          />

          <label style={{ color: "#9B2C2C", display: "block", marginBottom: "0.3rem" }} htmlFor="age">
            Age
          </label>
          <input
            id="age"
            name="age"
            type="number"
            min="1"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter age"
            style={{
              width: "100%",
              padding: "10px 15px",
              marginBottom: "1rem",
              borderRadius: "15px",
              border: "1.5px solid #FADADD",
              boxSizing: "border-box",
            }}
          />

          <label style={{ color: "#9B2C2C", display: "block", marginBottom: "0.3rem" }} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            style={{
              width: "100%",
              padding: "10px 15px",
              marginBottom: "1rem",
              borderRadius: "15px",
              border: "1.5px solid #FADADD",
              boxSizing: "border-box",
            }}
          />

          <label style={{ color: "#9B2C2C", display: "block", marginBottom: "0.3rem" }} htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="********"
            style={{
              width: "100%",
              padding: "10px 15px",
              marginBottom: "1.5rem",
              borderRadius: "15px",
              border: "1.5px solid #FADADD",
              boxSizing: "border-box",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#F67280",
              border: "none",
              borderRadius: "15px",
              color: "white",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>
        </form>

        <p style={{ color: "#9B2C2C", textAlign: "center", marginTop: "1.5rem" }}>
          Already have an account?{" "}
          <Link to="/" style={{ color: "#D6336C", textDecoration: "none" }}>
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
