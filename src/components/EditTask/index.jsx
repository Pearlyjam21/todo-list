import { useState } from "react";
import { produce } from "immer";
import "./style.css";

/**
 * @function EditTask
 * @description edit the task
 * @param {id} id of task
 * @param {taskList} useState  of List
 * @param {setTaskList} useState to change list
 */

export function EditTask({
  task,
  id,
  taskList,
  setTaskList,
  inoutNewTaskName,
}) {
  const [isEditing, setIsEditing] = useState(false);
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
        setIsEditing(false);

        //cannot add :task or else it wont loop
        //task.id === id ? task.name = newTaskName : task
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
  function handleCancel() {
    setNewTaskName(task.name);
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <>
        <input
          value={newTaskName}
          onChange={(event) => setNewTaskName(event.target.value)}
          autoFocus
        />

        <button onClick={handleEditTask}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </>
    );
  }
  return (
    <>
      {/* <input
        placeholder="New task name"
        value={newTaskName}
        onChange={(event) => setNewTaskName(event.target.value)}
      /> */}
      <p class="text-xl font-medium text-black dark:text-white">{task.name}</p>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </>
  );
}
export default { EditTask };

// export function EditTask({ task, setTaskList }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [newTaskName, setNewTaskName] = useState(task.name);

//   function saveTask() {
//     setTaskList((tasks) =>
//       tasks.map((item) =>
//         item.id === task.id
//           ? { ...item, name: newTaskName }
//           : item,
//       ),
//     );

//     setIsEditing(false);
//   }

//   if (isEditing) {
//     return (
//       <>
//         <input
//           value={newTaskName}
//           onChange={(event) => setNewTaskName(event.target.value)}
//         />
//         <button onClick={saveTask}>Save</button>
//         <button onClick={() => setIsEditing(false)}>Cancel</button>
//       </>
//     );
//   }

//   return (
//     <>
//       <p>{task.name}</p>
//       <button onClick={() => setIsEditing(true)}>Edit</button>
//     </>
//   );
// }
