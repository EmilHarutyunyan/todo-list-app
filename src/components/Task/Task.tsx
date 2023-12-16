import React from "react";
import { BoxTask } from "./Task.styles";
import { TaskForm, TaskLists } from "..";


const Task: React.FC = () => {
  return (
    <BoxTask>
      <TaskForm />
      <TaskLists />
    </BoxTask>
  );
};

export default Task;
