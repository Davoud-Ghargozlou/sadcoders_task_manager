import React from "react";

const Board = ({ text, color,onChange}) => {

  const colors = {
    red: "bg-red-400",
    orange: "bg-orange-300",
    blue: "bg-blue-400",
    green: "bg-green-400",
    dashed: "border border-slate-300 bg-slate-200 border-dashed"
  };
  return (
    <div
      className={`h-[144px] min-w-[360px]   justify-center items-center text-center rounded-md inline-block border text-white bg-slate-600`}
    >
      {text}
    </div>
  );
};

export default Board;
