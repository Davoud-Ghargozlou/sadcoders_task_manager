import { taskContext } from "@/providers/TaskProvider";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const Cardpage = () => {
  const { boardcontext } = useContext(taskContext);
  const {userId} = useParams();
  return (
    <div className="p-7 flex  items-center">
      <h5 className="text-2xl">{userId}</h5>
    </div>
  );
};

export default Cardpage;
