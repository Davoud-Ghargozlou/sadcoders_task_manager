import { testBoardData } from "@/fake-data/board-data";
import { createContext, useContext, useEffect, useState } from "react";

const boardContext = createContext();

const useBoardContext = () => {
  return useContext(boardContext);
};

const BoardProvider = ({ children, boardId }) => {
  const [boardData, setBoardData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getBoardData = async () => {
    if (isLoading) return;

    setIsLoading(true);

    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(testBoardData);
      }, 3000);
    });

    setBoardData(result);

    setIsLoading(false);
  };

  const values = {
    isLoading,
    boardData
  };

  useEffect(() => {
    if (boardId) {
      // get board data
      getBoardData();
    }
  }, [boardId]);

  return (
    <boardContext.Provider value={values}>{children}</boardContext.Provider>
  );
};

export { BoardProvider, useBoardContext };
