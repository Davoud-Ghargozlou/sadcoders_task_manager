import Bord from "@/components/Bord";
import heart from "@/assets/images/Heart-outline.svg";
import message from "@/assets/images/message-square-outline.svg";
import attach from "@/assets/images/attach-outline.svg";

import React, { useState } from "react";
import SinglePriority from "@/components/Priority/SinglePriority";
const Cardpage = () => {
  const [editcard, setEditCard] = useState(false);
  const [prioritycolor,setPriorityColor] = useState(false)
  const handledit = () => {
    setEditCard(!editcard);
  };
  const  handleuser=()=>{
    setPriorityColor(!prioritycolor)
  }
  return (
    <div className="flex p-4 w-screen h-full relative">
      <Bord onClick={handledit} prioritycolor={prioritycolor} />
      {editcard && (
        <div className="w-auto rounded-md  bg-red-400 h-auto p-4">
          <div className="flex justify-between items-center gap-4 mb-2">
            <span>Priority</span>
            <div className="flex gap-2">
              <SinglePriority color="blue" onClick={handleuser} />
              <SinglePriority color="purple" />
              <SinglePriority color="green" />
              <SinglePriority color="red" />
            </div>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span>Reaction</span>
            <div className="flex gap-4">
              <div className="flex gap-2">
                <span>0</span>
                <img src={message} alt="" />
              </div>
              <div className="flex gap-2">
                <span>0</span>
                <img src={heart} alt="" />
              </div>
              <div className="flex gap-2">
                <span>0</span>
                <img src={attach} alt="" />
              </div>
            </div>
          </div>
          <div className="flex  items-center gap-3 mb-2">
            <label>Users</label>
            <input type="file" className="rounded-md" />
          </div>
          <div className="flex  items-center gap-3 mb-2">
            <label>Image</label>
            <input type="file" className="rounded-md" />
          </div>
        </div>
      )}
      {/* <Bord />
      <Bord />
      <Bord /> */}
    </div>
  );
};

export default Cardpage;
