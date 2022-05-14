import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTask] = useState(TASKS)

  function handleDeleteTask(deletedTask){
    const newTaskList = tasks.filter((task)=>{
      return task.text !== deletedTask.text
    })
    setTask(newTaskList)
  }

  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
