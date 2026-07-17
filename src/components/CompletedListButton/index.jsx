import { Box, Container, Input, Paper, Typography } from "@mui/material";
import "./style.css";

export function CompletedListButton({ id, taskList, setTaskList }) {
  function markComplete() {
    setTaskList((TaskList) =>
      TaskList.map((task) =>
        task.id === id ? { ...task, completed: true } : task,
      ),
    );
  }
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
      <button className="btnDone" onClick={markComplete}>
        √
      </button>
    </Box>
  );
}
export default { CompletedListButton };
