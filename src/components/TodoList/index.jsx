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
          <div class="mx-auto flex items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <p class="text-xl font-medium text-black dark:text-white">
              {task.name}
            </p>
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
