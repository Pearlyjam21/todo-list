// import { useTodos } from "../../context/TodoContext";
import "./style.css";
import { Box, Container, Input, Paper, Typography } from "@mui/material";

export function CompletedList({ id, taskList, setTaskList }) {
  const completedTasks = taskList.filter((task) => task.completed === true);

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
      <h2>Completed Tasks</h2>
      {completedTasks.map((task) => (
        <div component="li" key={task.id}>
          <div className="todoPaper">
            <p className="todoText">{task.name}</p>
          </div>
        </div>
      ))}
    </Box>
  );
}
export default { CompletedList };
