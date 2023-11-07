import Board from "@/components/Board";
import ImgMediaCard from "@/components/Card/Add-Card";
import Inputboard from "@/components/Inputboard";
import { boardHomeRecentlyVeiwed,boardHomeNew, boardProcess, boardCompleted } from "@/fake-data/boards-home";
import { taskContext } from "@/providers/TaskProvider";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const HomeUser = () => {
  const { boardcontext } = useContext(taskContext);
  const lastBoard = boardcontext.slice(-4);

  return (
    <div className="p-[30px]">
      <div className="flex justify-between mb-4 items-center ">
        <span className="text-[26px]">Recently Viewed</span>
        <span className="text-[20px]">Menu</span>
      </div>
      <div className="flex gap-[30px] flex-wrap overflow-">
      {boardHomeRecentlyVeiwed.map((item, index) => {
        return (
          <ImgMediaCard
            key={index}
            title={item.title}
            description={item.description}
            users={item.users}
          />
        );
      })}
      </div>
      <p className="text-[26px] my-4">New</p>
      <div className="flex gap-[30px] flex-wrap">
      {boardHomeNew.map((item, index) => {
        return (
          <ImgMediaCard
            key={index}
            title={item.title}
            description={item.description}
            users={item.users}
          />
        );
      })}
      </div>
      <p className="text-[26px] my-4">Process</p>
      <div className="flex gap-[30px] flex-wrap">
      {boardProcess.map((item, index) => {
        return (
          <ImgMediaCard
            key={index}
            title={item.title}
            description={item.description}
            users={item.users}
          />
        );
      })}
      </div>
      <p className="text-[26px] my-4">Completed</p>
      <div className="flex gap-[30px] flex-wrap">
      {boardCompleted.map((item, index) => {
        return (
          <ImgMediaCard
            key={index}
            title={item.title}
            description={item.description}
            users={item.users}
          />
        );
      })}
      </div>
    </div>
  );
};

export default HomeUser;
