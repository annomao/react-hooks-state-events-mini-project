import React from "react";
import Task from "./Task";

function TaskList({tasks, onDeleteTask}) {

  const displayTask = tasks.map((task)=>{
    return <Task key={task.text} task={task} onDeleteTask={onDeleteTask} />
  })

  return (
    <div className="tasks">
      {displayTask}
    </div>
  );
}

export default TaskList;
