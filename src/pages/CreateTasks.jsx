import React, { useState } from "react";
import axios from "axios";

const CreateTask = () => {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    axios
      .post("http://localhost:5000/add", { task })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default CreateTask;
