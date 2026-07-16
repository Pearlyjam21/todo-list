import { Box, Grid, Typography } from "@mui/material";
import { TodoList } from "./components/TodoList";
import { AddTaskButton } from "./components/AddTask";
// import { useTodos } from "./context/TodoContext";
import styles from "./styles.module.scss";
import { useState } from "react";
import "./style.css";
import { Header } from "./components/header";
function App() {
  const [taskList, setTaskList] = useState([
    { id: 1, name: "Cook", completed: false },
    { id: 2, name: "Clean", completed: false },
    { id: 3, name: "Cry", completed: false },
  ]);

  return (
    <Box component="main" className={styles.dashboard}>
      <Header />
      <Grid
        container
        sx={{ width: "100%", maxHeight: "100vh", minHeight: "100vh" }}
        className={styles.dashboard_left}
      >
        <Grid
          size={6}
          sx={{
            display: "grid",
            placeContent: "center",
            textAlign: "center",
          }}
        >
          <h1>Let's complete today's tasks</h1>

          <p className={styles.counter}>{taskList.length}</p>
          <p className={styles.sub}>Tasks remaining</p>
        </Grid>

        <Grid size={6} className={styles.dashboard_right}>
          <AddTaskButton taskList={taskList} setTaskList={setTaskList} />
          <TodoList taskList={taskList} setTaskList={setTaskList} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
