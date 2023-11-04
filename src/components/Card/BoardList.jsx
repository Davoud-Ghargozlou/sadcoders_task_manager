import { useState } from "react";
import plus from "@/assets/images/plus-circle-outline.svg";

const BoardList = ({ list }) => {
  const [value, setValue] = useState("");

  const [showInput, setShowInput] = useState(false);

  const savevalue = (event) => {
    setValue(event.target.value);
    console.log(value);
  };

  const handelshowinput = () => {
    setShowInput(!showInput);
  };

  return (
    <div className="bg-gray-100 rounded p-4 basis-[300px]">
      <div className="py-2 border-b mb-4">{list.title}</div>


      <div className="p-7 bg-orange-400 w-max rounded-md h-auto ">
        <button
          className="flex gap-2 items-center p-2 bg-slate-500 w-max rounded-md"
          onClick={handelshowinput}
        >
          <img src={plus} />
          <span>Add Card</span>
        </button>
        {showInput && (
          <div className="flex gap-1 py-2">
            <input onChange={savevalue} value={value} />
            <button className="bg-green-500">ok</button>
            <button className="bg-red-300">cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BoardList;
