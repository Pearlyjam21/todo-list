import { Box, Grid, Typography } from "@mui/material";
import { TodoList } from "./components/TodoList";
import { AddTaskButton } from "./components/AddTask";
import { CompletedList } from "./components/CompletedList";

// import { useTodos } from "./context/TodoContext";
import styles from "./styles.module.scss";
import { useState } from "react";
import "./style.css";
import { Header } from "./components/header";
function App() {
  const [taskList, setTaskList] = useState([
    { id: 1, name: "Cook", completed: false },
    { id: 2, name: "Clean", completed: false },
    { id: 3, name: "Cry", completed: true },
  ]);

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
          <h1>Let's complete today's tasks</h1>

          <div
            className={`radial-progress ${styles.counter}`}
            style={{
              "--value": progressCount,
              "--size": "15rem",
              "--thickness": "10px",
              display: "grid",
              margin: "0 auto",
            }}
            role="progressbar"
          >
            {Math.floor(progressCount)}%
          </div>
          <p className={styles.counter}>
            {taskList.filter((task) => !task.completed).length}
          </p>
          <p className={styles.sub}>Tasks remaining</p>
          <CompletedList taskList={taskList} setTaskList={setTaskList} />
        </div>

        <div class="flex-container" style={{ width: "50%" }}>
          <AddTaskButton taskList={taskList} setTaskList={setTaskList} />
          <TodoList taskList={taskList} setTaskList={setTaskList} />
        </div>
      </div>
    </Box>
  );
}

export default App;
