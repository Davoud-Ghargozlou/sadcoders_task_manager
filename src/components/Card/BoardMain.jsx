import { useState } from "react";
import { useBoardContext } from "@/providers/BoardProvider";
import BoardList from "./BoardList";
import Bord from "../Bord";
import { useParams } from "react-router-dom";

const BoardMain = () => {
  const { isLoading, boardData } = useBoardContext();


  console.log(boardData);
  return (
    <div>
      {isLoading ? (
        "loading ..."
      ) : (
        <>
          <div className="flex gap-4">
            <p></p>
            <Bord />
            <Bord />
            <Bord />
            <Bord />
            {/* {boardData?.lists?.map((list) => (
              <BoardList list={list} key={list.id} />
            ))} */}
          </div>
        </>
      )}
    </div>
  );
};

export default BoardMain;
