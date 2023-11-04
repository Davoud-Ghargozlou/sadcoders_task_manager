import { createContext, useState } from "react";


const taskContext = createContext();
const Boards = [
  {
    name: "ToDo",
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
  // {
  //   name: "create new board",
  //   id: 3,
  //   description: "Works to do",
  //   color: "dashed",
  // },
  // {
  //   name: "Homework",
  //   id: 4,
  //   description: "Works to do",
  //   color: "green",
  // },
  // {
  //   name: "Homework",
  //   id: 5,
  //   description: "Works to do",
  //   color: "green",
  // },
  // {
  //   name: "Homework",
  //   id: 6,
  //   description: "Works to do",
  //   color: "green",
  // },
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
