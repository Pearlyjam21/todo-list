import { DelTaskButton } from "../delTask";
// import { useTodos } from "../../context/TodoContext";
import { useState } from "react";
import { Box, Container, Input, Paper, Typography } from "@mui/material";

import "./style.css";
import { produce } from "immer";

export function AddTaskButton({ taskList, setTaskList }) {
  const [taskName, setTaskName] = useState("");
  // const { setTaskList } = useTodos();

  function handleAddTask() {
    if (!taskName.trim()) {
      alert("null");
      return;
    }
    // setTaskList((TaskList) => [
    //   //react give me the current list
    //   ...TaskList,
    //   { id: Date.now(), name: taskName, completed: false },
    // ]);

    setTaskList((task) =>
      produce(task, (draft) => {
        draft.push({
          id: Date.now(),
          name: taskName,
          completed: false,
        });
      }),
    );

    setTaskName("");
  }
  return (
    <div className="div">
      <input
        className="input"
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
      />
      <button className="btnAddTask" onClick={handleAddTask}>
        +
      </button>
    </div>
  );
}

export default { AddTaskButton };
