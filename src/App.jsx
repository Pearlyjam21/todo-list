//run `npm run dev`

import { Box, Grid, Typography } from "@mui/material";
import { TodoList } from "./components/TodoList";
import { AddTaskButton } from "./components/AddTask";
import { CompletedList } from "./components/CompletedList";
import axios from "axios";

// import { useTodos } from "./context/TodoContext";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import "./style.css";
import { Header } from "./components/header";
function App() {
  const [taskList, setTaskList] = useState([
    // { id: 1, name: "Cook", completed: false },
    // { id: 2, name: "Clean", completed: false },
    // { id: 3, name: "Cry", completed: true },
  ]);
  console.log(taskList);

  useEffect(() => {
    axios.get("/api/tasklist").then((res) => setTaskList(res.data));
  }, []);

  const progressCount =
    taskList.length === 0
      ? 0
      : (taskList.filter((task) => task.completed).length / taskList.length) *
        100;

  return (
    <Box component="main" className={styles.dashboard}>
      <Header />
      <div
        style={{ width: "100%", maxHeight: "100vh", minHeight: "100vh" }}
        className={styles.dashboard_left}
      >
        <div class="flex-container" style={{ width: "50%" }}>
          <h2>Let's complete today's tasks</h2>

          <div
            className={`radial-progress ${styles.counter}`}
            style={{
              "--value": progressCount,
              "--size": "25rem",
              "--thickness": "25px",
              display: "grid",
              margin: "25px auto",
            }}
            role="progressbar"
          >
            {Math.floor(progressCount)}%
          </div>
          <p className={styles.counter}>
            {taskList.filter((task) => !task.completed).length}
          </p>
          <p className={styles.sub}>Tasks remaining</p>
        </div>

        <div class="flex-container" style={{ width: "50%" }}>
          <h2> Todo List</h2>
          <AddTaskButton taskList={taskList} setTaskList={setTaskList} />
          <TodoList taskList={taskList} setTaskList={setTaskList} />
          <CompletedList taskList={taskList} setTaskList={setTaskList} />
        </div>
      </div>
    </Box>
  );
}

export default App;
