import React, { useEffect } from "react";
import "./task.css";
import { useSelector } from "react-redux";
import { fetchData } from "./taskSlice";
import { useDispatch } from "react-redux";
import Edit from "../Addtask/Edit";

const TaskList = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchData());
    // Add this to fetch data only when dispatch is called
    if (loading) {
      return <p>Task Loading....</p>;
    }
    if (error) {
      return <p>There is an error {error}</p>;
    }
  }, [dispatch]);
  // if (loading) {
  //   return <p>Task Loading....</p>;
  // }
  // if (error) {
  //   return <p>There is an error {error}</p>;
  // }
  

  const tasks = useSelector((state) => state.task.task);
  //   console.log(taskss, "lllll");
  const loading = useSelector((state) => state.task.loading);
  const error = useSelector((state) => state.task.error);
  console.log(tasks);

  

  return (
    <div className="taskContainer">
      <div className="task">
        <h3>Tasks</h3>
        {tasks.length ===0? (<p>No tasks available</p>) : 
       ( <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <div className="list">
                <p> <span style={{fontWeight: "700"}}>Title : </span> {task.title}</p>
                <p> <span style={{fontWeight: "700"}}>Description : </span> {task.description} </p>
                <p> <span style={{fontWeight: "700"}}>Status : </span> {task.status}</p>
              </div>
              <div className="buttons">
                <Edit task={task} />
                <button style={{ background: "red" }}>Complete</button>
              </div>
            </li>
          ))}
        </ul>)}
      </div>
    </div>
  );
};

export default TaskList;
