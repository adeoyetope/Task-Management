import React, { useRef, useState } from "react";
// import "../task/task.css";
// import "./addTask.css";
import "./edit.css";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../task/taskSlice";

const Edit = ({ task }) => {
  const [editing, setEditing] = useState(false);
  const ref = useRef();
  const [title, setTitle] = useState(task?.title || ref.current);
  const [description, setTextarea] = useState(task.description);
  const [status, setStatus] = useState(task?.status || ref.current);
  const dispatch = useDispatch();

  console.log(ref);
  const handleTask = (e) => {
    e.preventDefault();
    const id = new Date().getTime()
    const newTasks = {
      id,
      title,
      description,
      status,
    };
    dispatch(editTask(newTasks));
    // setTitle("")
    // setTextarea("")
    // setStatus("")
    // setEditing(false)
  };

  const handleEdit = () => {
    setEditing(true);
  };

  return (
    <>
      {!editing ? (
        <button className="button" onClick={handleEdit}>
          Edit
        </button>
      ) : (
        <div className="modal_backdrop">
          {/* <div className='modal_content'> */}

          <div className="modal_content">
            <form onSubmit={handleTask} style={{ display: "flex" }}>
              <h3>Edit Task</h3>
              <input
                style={{ justifyContent: "center" }}
                ref={ref}
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Task Title"
              />
              <textarea
                ref={ref}
                name=""
                value={description}
                onChange={(e) => setTextarea(e.target.value)}
                placeholder="Task Discription"
              ></textarea>
              <select
                // ref={ref}
                name=""
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                {" "}
                Status
                {/* <option value=""></option> */}
                <option value="toDo">To-Do</option>
                <option value="pending">In progress</option>
                <option value="completed">Completed</option>
              </select>
              <button>OK</button>
              <button style={{background: "red"}} onClick={() => setEditing(false)}>Cancel</button>
            </form>
          </div>
        </div>
        // </div>
      )}
    </>
  );
};

export default Edit;
