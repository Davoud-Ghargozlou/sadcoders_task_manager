import Board from "@/components/Board";
import Inputboard from "@/components/Inputboard";
import { taskContext } from "@/providers/TaskProvider";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

const HomeUser = () => {
  const { boardcontext } = useContext(taskContext);
  const lastBoard = boardcontext.slice(-4);

  return (
    <div className="p-7">
      <h4 className="mb-4">All Boards</h4>
      <div className="flex gap-2 flex-wrap">
        {boardcontext.map((item) => {
          return (
            <Link key={item.name}  to={`/card/${item.name}`}>
              <Board key={item.id} text={item.name} id={item.id} color={item.color} />
            </Link>
          );
        })}
        {/* <Board color="dashed" text="create new board" /> */}
        <Inputboard/>
      </div>
        <p className="mt-4">Recently viewed</p>
      <div className="flex gap-2 flex-wrap mt-4">
      {lastBoard.map((item)=>{
        return(
          <Link key={item.name}  to={`/card/${item.name}`}>
          <Board key={item.id} text={item.name} id={item.id} color={item.color} />
        </Link>
        )
      })}
      </div>
    </div>
  );
};

export default HomeUser;
