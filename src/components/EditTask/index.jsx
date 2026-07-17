import { useState } from "react";
import { produce } from "immer";

export function EditTask({ id, taskList, setTaskList, index }) {
  const [newTaskName, setNewTaskName] = useState("");
  function handleEditTask() {
    setTaskList((taskList) =>
      produce(taskList, (draft) => {
        const foundTask = draft.find((task) => task.id === id);
        if (newTaskName == false) {
          alert("null");
          return;
        } else if (foundTask) {
          foundTask.name = newTaskName;
        }

        //cannot add :task or else it wont loop
        //task.id === id ? task.name = newTaskName:task
        // using ? needs truthy and falsy so we just use if
      }),
    );
    //   setTaskList(
    //     (
    //       list, //new list to not change
    //     ) =>
    //       list.map((task) =>
    //         task.id === id ? { ...task, name: newTaskName } : task,
    //       ),
    //   );
  }

  return (
    <details>
      <summary>Edit</summary>

      <label>New task name:</label>

      <input
        placeholder="New task name"
        value={newTaskName}
        onChange={(event) => setNewTaskName(event.target.value)}
      />

      <button onClick={handleEditTask}>Save</button>
    </details>
  );
}
export default { EditTask };
