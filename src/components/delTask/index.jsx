import { AddTaskButton } from "../AddTask";
// import { useTodos } from "../../context/TodoContext";
import "./style.css";

export function DelTaskButton({ id, taskList, setTaskList }) {
  // const { setTaskList } = useTodos();
  function delTask() {
    setTaskList((TaskList) => TaskList.filter((task) => task.id !== id));
    return;
  }
  return (
    <button className="btnDelete" onClick={delTask}>
      X
    </button>
  );
}

export default { DelTaskButton };
