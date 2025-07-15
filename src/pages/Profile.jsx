import React from "react";

const Profile = () => {
 
  const user = {
    name: "Alice Johnson",
    age: 9,
    photo: "https://i.pravatar.cc/150?img=5", 
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundColor: "#FFEBF0",
        fontFamily: "'Comic Neue', cursive",
      }}
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
          Profile
        </h2>

        <img
          src={user.photo}
          alt={`${user.name}'s profile`}
          style={{
            width: 150,
            height: 150,
            borderRadius: "50%",
            marginBottom: 20,
            border: "3px solid #F67280",
            boxShadow: "0 0 10px #FADADD",
          }}
        />

        <h3 style={{ color: "#9B2C2C", fontWeight: "700" }}>{user.name}</h3>
        <p style={{ color: "#9B2C2C", fontSize: "1.1rem" }}>Age: {user.age}</p>
        <div>
          <button
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
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
