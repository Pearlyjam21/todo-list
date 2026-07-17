import { Box, Container, Input, Paper, Typography } from "@mui/material";

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
      <button className="btnDelete" onClick={markComplete}>
        done
      </button>
    </Box>
  );
}
export default { CompletedListButton };
