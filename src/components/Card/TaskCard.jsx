import React from "react";
import SinglePriority from "../Priority/SinglePriority";
import Attach from "./Attach";

const TaskCard = ({ title, description, users,color,imgpic,color1,color2,color3 }) => {
  return (
      <div className="flex flex-col p-[20px] rounded-lg bg-[#F4F4F4] w-[360px]">
        <img src={imgpic} alt="" className="mb-4"/>
        <div className="flex gap-[8px]">
        <SinglePriority color={color}/>
        <SinglePriority color={color1}/>
        <SinglePriority color={color2}/>
        <SinglePriority color={color3}/>
        </div>
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
