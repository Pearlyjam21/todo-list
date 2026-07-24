import axios from "axios";
import { AddTaskButton } from "../AddTask";
// import { useTodos } from "../../context/TodoContext";
import "./style.css";

export function DelTaskButton({ id, taskList, setTaskList }) {
  // const { setTaskList } = useTodos();
  async function delTask() {
    console.log("Passed ID:", id, "Type:", typeof id);
    try {
      const { data: newTask } = await axios.delete(`/api/tasklist/${id}`);
      setTaskList((TaskList) => {
        const array = TaskList.filter((task) => task.id !== id);
        console.log(array);
        return array;
      });

      console.log(typeof task.id);
    } catch (error) {
      console.log(error);
    }
    return;
  }
  return (
    <button className="sbtnDelete" onClick={delTask}>
      X
    </button>
  );
}

export default { DelTaskButton };
