import { useState } from "react";
import { AddTaskButton } from "../AddTask";
import { DelTaskButton } from "../delTask";
import { Box, Container, Input, Paper, Typography } from "@mui/material";
// import { useTodos } from "../../context/TodoContext";
import "./style.css";

export function TodoList({ taskList, setTaskList }) {
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
      {taskList.map((task) => (
        <div component="li" key={task.id}>
          <div className="todoPaper">
            <p className="todoText">{task.name}</p>
            <DelTaskButton
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
