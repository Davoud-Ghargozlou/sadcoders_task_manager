import { createContext, useState } from "react";


const taskContext = createContext();
const Boards = [
  {
    name: "To Do",
    id: 0,
    description: "Things to do ",
    color: "blue",
  },
  {
    name: "Tasks",
    id: 1,
    description: "Task to do ",
    color: "green"
  },
  {
    name: "Works",
    id: 2,
    description: "Works to do",
    color: "red",
  },
  {
    name: "create new board",
    id: 3,
    description: "create new board",
    color: "dashed",
  },
];
// let randomColor = Math.floor(Math.random()*16777215).toString(16);
const TaskProvider = ({ children }) => {
  const [boardcontext, setBoardContext] = useState(Boards);
  const value = {
    boardcontext,
    setBoardContext,
  };
  return <taskContext.Provider value={value}>{children}</taskContext.Provider>;
};
export { TaskProvider, taskContext };
