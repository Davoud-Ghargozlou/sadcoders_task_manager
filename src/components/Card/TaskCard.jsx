import React from "react";
import SinglePriority from "../Priority/SinglePriority";
import Attach from "./Attach";

const TaskCard = ({ title, description, users,color }) => {
  return (
      <div className="flex flex-col p-[20px] rounded-lg bg-[#F4F4F4] w-[360px]">
        <SinglePriority color={color}/>
        <h1 className="mb-1 mt-[9px]">{title}</h1>
        <p className="opacity-40 text-[13px]">{description}</p>
        <div className="mt-[27px] flex justify-between">
          <img src={users} alt="" />
          <Attach/>
        </div>
      </div>
  );
};

export default TaskCard;
