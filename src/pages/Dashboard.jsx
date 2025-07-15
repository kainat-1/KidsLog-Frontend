import React, { useState } from "react";

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Math homework", status: "done", kidName: "Alice" },
    { id: 2, title: "Clean room", status: "inprocess", kidName: "Bob" },
    { id: 3, title: "Read book", status: "later", kidName: "Alice" },
    { id: 4, title: "Science project", status: "done", kidName: "Bob" },
    { id: 5, title: "Play piano", status: "inprocess", kidName: "Alice" },
  ]);

  const groupedTasks = {
    done: tasks.filter((task) => task.status === "done"),
    inprocess: tasks.filter((task) => task.status === "inprocess"),
    later: tasks.filter((task) => task.status === "later"),
  };

  return (
    <div
      className="container mt-4 p-4"
      style={{
        backgroundColor: "#FFF7F8",
        borderRadius: "15px",
        fontFamily: "'Comic Neue', cursive",
        boxShadow: "0 0 20px 5px #FADADD",
      }}
    >
      <h1
        className="mb-5 text-center"
        style={{ color: "#D6336C", fontWeight: "700" }}
      >
        Kids Activity Dashboard
      </h1>

      <div className="row">
        {/* Done (was To Do) */}
        <div
          className="col-md-4 mb-4"
          style={{
            backgroundColor: "#FFE6EE",
            borderRadius: "15px",
            border: "2px dashed #F9A8B7",
            boxShadow: "inset 0 0 10px #FADADD",
            padding: "1rem",
          }}
        >
          <h3
            className="mb-3"
            style={{ color: "#F67280", fontWeight: "700", textAlign: "center" }}
          >
            Done
          </h3>
          <ul className="list-group" style={{ borderRadius: "15px" }}>
            {groupedTasks.done.length === 0 && (
              <li
                className="list-group-item text-center"
                style={{ borderRadius: "10px" }}
              >
                No tasks here!
              </li>
            )}
            {groupedTasks.done.map((task) => (
              <li
                key={task.id}
                className="list-group-item mb-2"
                style={{
                  borderRadius: "10px",
                  boxShadow: "0 2px 6px rgba(246, 114, 128, 0.3)",
                  transition: "transform 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <strong>{task.title}</strong> <br />
                <small className="text-muted">Kid: {task.kidName}</small>
              </li>
            ))}
          </ul>
        </div>

        {/* In Process */}
        <div
          className="col-md-4 mb-4"
          style={{
            backgroundColor: "#FFF1E0",
            borderRadius: "15px",
            border: "2px dashed #FAC898",
            boxShadow: "inset 0 0 10px #FAD7A0",
            padding: "1rem",
          }}
        >
          <h3
            className="mb-3"
            style={{ color: "#F9A825", fontWeight: "700", textAlign: "center" }}
          >
            In Process
          </h3>
          <ul className="list-group" style={{ borderRadius: "15px" }}>
            {groupedTasks.inprocess.length === 0 && (
              <li
                className="list-group-item text-center"
                style={{ borderRadius: "10px" }}
              >
                No tasks here!
              </li>
            )}
            {groupedTasks.inprocess.map((task) => (
              <li
                key={task.id}
                className="list-group-item mb-2"
                style={{
                  borderRadius: "10px",
                  boxShadow: "0 2px 6px rgba(249, 168, 37, 0.3)",
                  transition: "transform 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <strong>{task.title}</strong> <br />
                <small className="text-muted">Kid: {task.kidName}</small>
              </li>
            ))}
          </ul>
        </div>

        {/* Later */}
        <div
          className="col-md-4 mb-4"
          style={{
            backgroundColor: "#E9EDF7",
            borderRadius: "15px",
            border: "2px dashed #B9C3E3",
            boxShadow: "inset 0 0 10px #A2B3E1",
            padding: "1rem",
          }}
        >
          <h3
            className="mb-3"
            style={{ color: "#5C6BC0", fontWeight: "700", textAlign: "center" }}
          >
            Later
          </h3>
          <ul className="list-group" style={{ borderRadius: "15px" }}>
            {groupedTasks.later.length === 0 && (
              <li
                className="list-group-item text-center"
                style={{ borderRadius: "10px" }}
              >
                No tasks here!
              </li>
            )}
            {groupedTasks.later.map((task) => (
              <li
                key={task.id}
                className="list-group-item mb-2"
                style={{
                  borderRadius: "10px",
                  boxShadow: "0 2px 6px rgba(92, 107, 192, 0.3)",
                  transition: "transform 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <strong>{task.title}</strong> <br />
                <small className="text-muted">Kid: {task.kidName}</small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
