import { taskContext } from "@/providers/TaskProvider";
import { useContext } from "react";

const Cardpage = () => {
  const { boardcontext } = useContext(taskContext);
  return (
    <div className="p-7 flex  items-center">
    </div>
  );
};

export default Cardpage;
