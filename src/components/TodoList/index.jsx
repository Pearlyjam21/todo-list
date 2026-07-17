import { useState } from "react";
import { AddTaskButton } from "../AddTask";
import { DelTaskButton } from "../delTask";
import { CompletedListButton } from "../CompletedListButton";
import { EditTask } from "../EditTask";

import { Box, Container, Input, Paper, Typography } from "@mui/material";
// import { useTodos } from "../../context/TodoContext";
import "./style.css";
import { CompletedList } from "../CompletedList";

export function TodoList({ taskList, setTaskList }) {
  const tTasks = taskList.filter((task) => task.completed === false);

  return (
    <Box
      component="ul"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 0,
        listStyle: "none",
      }}
    >
      {tTasks.map((task) => (
        <div component="li" key={task.id}>
          <div className="todoPaper">
            <p className="todoText">{task.name}</p>
            <DelTaskButton
              id={task.id}
              taskList={taskList}
              setTaskList={setTaskList}
            />
            <EditTask
              id={task.id}
              taskList={taskList}
              setTaskList={setTaskList}
            />
            <CompletedListButton
              id={task.id}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          </div>
        </div>
      ))}
    </Box>
  );
}

export default { TodoList };
