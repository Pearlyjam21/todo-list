import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [taskList, setTaskList] = useState([
    { id: 1, name: "Cook", completed: false },
    { id: 2, name: "Clean", completed: false },
    { id: 3, name: "Cry", completed: false },
  ]);

  return (
    <TodoContext.Provider value={{ taskList, setTaskList }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}
