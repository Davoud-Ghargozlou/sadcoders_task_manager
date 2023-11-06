import { useState } from "react";
import { useBoardContext } from "@/providers/BoardProvider";
import BoardList from "./BoardList";
import Bord from "../Bord";

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
            <Bord/>
            <Bord/>
            <Bord/>
            <Bord/>
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
