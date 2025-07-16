import React, { useState, useEffect } from "react";
import CreateTask from "./CreateTasks";

const Dashboard = () => {
  const [todo, setTodo] = useState([]);

  return (
    <div className="container mt-4">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-primary">Welcome</h2>
        <h4 className="text-secondary">Your To-Do Tasks</h4>
      </div>

      <div className="mb-4">
        <CreateTask />
      </div>

      <div>
        {todo.length === 0 ? (
          <div className="alert alert-info text-center" role="alert">
            🎉 No tasks yet. Add a new one!
          </div>
        ) : (
          <div className="row">
            {todo.map((task, index) => (
              <div className="col-md-6 mb-3" key={index}>
                <div className="card shadow-sm">
                  <div className="card-body">
                    <p className="card-text">{task}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
