import { DelTaskButton } from "../delTask";
// import { useTodos } from "../../context/TodoContext";
import { useState } from "react";
import { Box, Container, Input, Paper, Typography } from "@mui/material";
import axios from "axios";
import "./style.css";
import { produce } from "immer";
const supabaseKey = import.meta.env.SUPABASE_SECRET_KEY;
const supabaseUrl = import.meta.env.SUPABASE_URL;

export function AddTaskButton({ taskList, setTaskList }) {
  const [taskName, setTaskName] = useState("");
  // const { setTaskList } = useTodos();

  async function handleAddTask() {
    if (!taskName.trim()) {
      alert("null");
      return;
    }
    // setTaskList((TaskList) => [
    //   //react give me the current list
    //   ...TaskList,
    //   { id: Date.now(), name: taskName, completed: false },
    // ]);
    try {
      const { data: newTask } = await axios.post("/api/tasklist", {
        name: taskName,
      });
    } catch (error) {
      console.log(error);
    }

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
