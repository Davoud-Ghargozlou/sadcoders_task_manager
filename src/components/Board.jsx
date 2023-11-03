import React from "react";

const Board = ({ text, color }) => {

  const colors = {
    red: "bg-red-400",
    orange: "bg-orange-300",
    blue: "bg-blue-400",
    green: "bg-green-400",
    dashed: "border border-dashed border-slate-400",
  };
  return (
    <div
      className={`p-14 min-w-[300px]   justify-center items-center text-center rounded-md inline-block border  ${colors[color]}`}
    >
      {text}
    </div>
  );
};

export default Board;
