
import { BoardProvider } from "@/providers/BoardProvider";
import BoardMain from "@/components/Card/BoardMain";
import { useParams } from "react-router-dom";

const Cardpage = () => {
  const {boardId} = useParams()

  console.log(boardId)
  return (
    <BoardProvider boardId={boardId}>
      <BoardMain/>
    </BoardProvider>
  );
};

export default Cardpage;
