import Board from "@/components/Board";
import { taskContext } from "@/providers/TaskProvider";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

const HomeUser = () => {
  const { boardcontext } = useContext(taskContext);
  const lastBoard = boardcontext.slice(-4);
  return (
    <div className="p-7">
      <h4 className="mb-4">Recently viwed</h4>
      <div className="flex gap-3">
        {boardcontext.map((item) => {
          return (
          <Link key={item.id} to={`/card/${item.name}`}>
            <Board
              text={item.name}
              id={item.id}
              color={item.color}
            />
            </Link>
          );
        })}
      </div>
      {/* <h4 className="mt-4 mb-4">New</h4>
      <div className="flex justify-between">
      {lastBoard.map((item) => {
          return (
          <Link key={item.id} to={`/card/${item.name}`}>
            <Board
              text={item.name}
              id={item.id}
              color={item.color}
            />
            </Link>
          );
        })}
        </div>
        <h4 className="mt-4 mb-4">Completed</h4>
        <div className="flex justify-between">
      {lastBoard.map((item) => {
          return (
          <Link key={item.id} to={`/card/${item.name}`}>
            <Board
              text={item.name}
              id={item.id}
              color={item.color}
            />
            </Link>
          );
        })}
        </div> */}
    </div>
  );
};

export default HomeUser;
