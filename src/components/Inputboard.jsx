import React, { useContext, useState } from "react";
import Button from "./UI/Button";
import { taskContext } from "@/providers/TaskProvider";

const Inputboard = () => {
  const [value, setValue] = useState("");
  const [createboard, setCreateboard] = useState(false);
  const { boardcontext, setBoardContext } = useContext(taskContext);
  const handleinputboard = (e) => {
    setValue(e.target.value);
    setCreateboard(true);
    console.log(value);
  };
  const makeok = () => {
    if (value !== "") {
      setBoardContext([
        ...boardcontext,
        { name: value, id: boardcontext.length + 1 },
      ]);
      localStorage.setItem(
        "Boards-save",
        JSON.stringify([
          ...boardcontext,
          { name: value, id: boardcontext.length + 1 },
        ])
      );
      setCreateboard(false);
      setValue("");
    }
  };
  const makecancel = () => {
    setCreateboard(false);
    setValue("");
  };
  const colors = {
    red: "bg-red-400",
    orange: "bg-orange-300",
    blue: "bg-blue-400",
    green: "bg-green-400",
    dashed: "border border-slate-300 bg-slate-200 border-dashed",
  };
  return (
    <>
      <div>
        <input
          placeholder="create new board"
          value={value}
          onChange={handleinputboard}
          className="h-[144px] w-[360px]  justify-center items-center text-center rounded-md inline-block border"
        ></input>
        {createboard && (
          <div className="mt-1 flex justify-between">
            <button
              className="bg-green-300 p-3 rounded-md w-[140px] "
              onClick={makeok}
            >
              OK
            </button>
            <button
              className="bg-red-300 p-3 rounded-md w-[140px] "
              onClick={makecancel}
            >
              CANCEL
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Inputboard;
