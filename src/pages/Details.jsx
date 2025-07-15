import React, { useState } from "react";

const Details = () => {
  // Example static tasks, replace with real data or fetch later
  const [tasks] = useState([
    { id: 1, title: "Math homework", status: "done", kidName: "Alice" },
    { id: 2, title: "Clean room", status: "inprocess", kidName: "Bob" },
    { id: 3, title: "Read book", status: "later", kidName: "Alice" },
    { id: 4, title: "Science project", status: "done", kidName: "Bob" },
    { id: 5, title: "Play piano", status: "inprocess", kidName: "Alice" },
  ]);

  // Filter only done tasks
  const doneTasks = tasks.filter((task) => task.status === "done");

  return (
    <div
      className="container mt-4 p-4"
      style={{
        backgroundColor: "#F7F0F5",
        borderRadius: "15px",
        fontFamily: "'Comic Neue', cursive",
        boxShadow: "0 0 20px 5px #FADADD",
      }}
    >
      <h2
        className="mb-4 text-center"
        style={{ color: "#D6336C", fontWeight: "700" }}
      >
        Done Tasks Details
      </h2>

      {doneTasks.length === 0 ? (
        <p style={{ textAlign: "center", color: "#9B2C2C" }}>
          No done tasks found.
        </p>
      ) : (
        <ul className="list-group" style={{ borderRadius: "15px" }}>
          {doneTasks.map((task) => (
            <li
              key={task.id}
              className="list-group-item mb-2"
              style={{
                borderRadius: "10px",
                boxShadow: "0 2px 6px rgba(246, 114, 128, 0.3)",
                cursor: "default",
              }}
            >
              <strong>{task.title}</strong>
              <br />
              <small className="text-muted">Kid: {task.kidName}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Details;
