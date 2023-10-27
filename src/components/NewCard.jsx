import React from "react";
import flower from "@/assets/images/flower.webp";
import SinglePriority from "./Priority/SinglePriority";
import Users from "./Users/Users";
import SingleUser from "./Users/SingleUser";
import User from '@/assets/images/User2.png'
import User2 from '@/assets/images/User3.png'
import heart from '@/assets/images/Heart-outline.svg'
import  message from '@/assets/images/message-square-outline.svg'
import attach from '@/assets/images/attach-outline.svg'


function NewCard() {
  return (
    <div className="max-w-xs bg-slate-300  flex justify-center flex-col  p-2 rounded-md">
      <img src={flower} className="w-[300px] h-[150px]" />
      <div className="flex my-2">
        <SinglePriority color="red" />
        <SinglePriority color="blue" />
        <SinglePriority color="green" />
        <SinglePriority color="purple" />
      </div>
      <div className="mb-2">
        <h3>Lorem, ipsum dolor.</h3>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
          corporis aut ducimus ut, libero amet!
        </h4>
      </div>
      <div className="flex justify-between">

        <div className="flex">
          <SingleUser src={User2} className="w-[30px] h-[30px]"/>
        <SingleUser src={User} className="w-[30px] h-[30px]"/>  
        </div>
        

        <div className="flex gap-2">
            <span>50</span>
            <img src={message} />

            <span>50</span>
            <img src={heart} />

            <span>50</span>
            <img src={attach} />


        </div>
      </div>
    </div>
  );
}

export default NewCard;
