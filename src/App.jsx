import React, { useState } from "react";
import Cards from "./components/Cards";
import ListMap from "./components/ListMap";
import Nav from "./components/Nav";
import SelectedPet from "./components/SelectedPet";
import TaskList from "./components/task/TaskList";
import AddTask from "./components/Addtask/AddTask";


const App = () => {
  const [disable, setDisable] = useState(true);
  return (
    <div style={{ margin: "50px 200px" }}>
      <AddTask />
      <TaskList />
      {/* <Cards /> */}
      <div>
        <Nav /> <SelectedPet setDisable={setDisable} disable={disable}/>
      </div>
      hello
      <ListMap disable={disable} />
    </div>
  );
};

export default App;
