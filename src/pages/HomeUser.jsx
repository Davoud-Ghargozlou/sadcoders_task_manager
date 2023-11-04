import Board from "@/components/Board";
import { taskContext } from "@/providers/TaskProvider";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

const HomeUser = () => {
  const { boardcontext } = useContext(taskContext);
  const lastBoard = boardcontext.slice(-4);

  return (
    <div className="p-7">
      <h4 className="mb-4">Recently viewed</h4>
      <div className="flex gap-3">
        {boardcontext.map((item) => {
          return (
            <Link key={item.id} to={`/card/${item.name}`}>
              <Board text={item.name} id={item.id} color={item.color} />
            </Link>
          );
        })}
        <Board color="dashed" text="create new board" />
      </div>
    </div>
  );
};

export default HomeUser;
