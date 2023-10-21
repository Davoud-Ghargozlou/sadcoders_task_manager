import React from "react";

const SinglePriority = ({ color }) => {
  const colors = {
    blue: "bg-blue-100",
    red: "bg-red-100",
    purple: "bg-purple-100",
    green: "bg-green-100",
  };
  return <div className={`w-[60px] h-2 rounded ${colors[color]}`}></div>;
};

export default SinglePriority;
