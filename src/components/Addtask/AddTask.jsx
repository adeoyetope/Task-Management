import React, { useState } from "react";
import "./addTask.css";
import { useDispatch } from "react-redux";
import { addTask } from "../task/taskSlice";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setTextarea] = useState("");
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();

  const handleTask = (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    const newTask = {
      id,
      title,
      description,
      status,
    };
    console.log(newTask);
    dispatch(addTask(newTask));
    setTitle("");
    setTextarea("");
    setStatus("");
  };

  return (
    <div>
      <h2>Task mananagement</h2>
      <div className="formTask">
        <form onSubmit={handleTask}>
          <h3>Add Task</h3>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task Title"
          />
          <textarea
            name=""
            value={description}
            onChange={(e) => setTextarea(e.target.value)}
            placeholder="Task Discription"
          ></textarea>
          <select
            //   placeholder ="Task status"
            name=""
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            {" "}
            Status
            <option value="">Choose Status</option>
            <option value="toDo">To-Do</option>
            <option value="pending">In progress</option>
            <option value="completed">Completed</option>
          </select>
          <button>Add Task</button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
