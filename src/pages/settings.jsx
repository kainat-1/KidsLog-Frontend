import React, { useState } from "react";

const Settings = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (
      !formData.currentPassword ||
      !formData.newPassword ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setError("New password and confirmation do not match.");
      return;
    }

    // Add your password change logic here (API call etc)
    // For demo, just simulate success
    setSuccess("Password changed successfully!");
    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{ backgroundColor: "#FFEBF0", fontFamily: "'Comic Neue', cursive" }}
    >
      <div
        className="bg-white p-4 rounded shadow w-100"
        style={{
          maxWidth: 400,
          border: "3px dashed #FADADD",
          boxShadow: "0 0 15px 4px #F8C8DC",
          textAlign: "center",
        }}
      >
        <h2 className="mb-4" style={{ color: "#D6336C" }}>
          Change Password
        </h2>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        {success && (
          <div className="alert alert-success" role="alert">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label
              htmlFor="currentPassword"
              className="form-label"
              style={{ color: "#9B2C2C" }}
            >
              Current Password
            </label>
            <input
              id="currentPassword"
              name="currentPassword"
              type="password"
              value={formData.currentPassword}
              onChange={handleChange}
              className="form-control"
              style={{ borderRadius: 15, borderColor: "#FADADD" }}
            />
          </div>

          <div className="mb-3 text-start">
            <label
              htmlFor="newPassword"
              className="form-label"
              style={{ color: "#9B2C2C" }}
            >
              New Password
            </label>
            <input
              id="newPassword"
              name="newPassword"
              type="password"
              value={formData.newPassword}
              onChange={handleChange}
              className="form-control"
              style={{ borderRadius: 15, borderColor: "#FADADD" }}
            />
          </div>

          <div className="mb-3 text-start">
            <label
              htmlFor="confirmPassword"
              className="form-label"
              style={{ color: "#9B2C2C" }}
            >
              Confirm New Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-control"
              style={{ borderRadius: 15, borderColor: "#FADADD" }}
            />
          </div>

          <button
            type="submit"
            className="btn w-100"
            style={{
              backgroundColor: "#F67280",
              borderColor: "#F67280",
              borderRadius: 15,
              fontWeight: 700,
              color: "white",
            }}
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
