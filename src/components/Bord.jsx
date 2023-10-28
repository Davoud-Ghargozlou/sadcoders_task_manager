import React, { useState } from "react";
import Edit from "@/assets/images/edit.svg";
import SingleUser from "./Users/SingleUser";
function Bord({ id,onClick,prioritycolor }) {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [array, setArray] = useState([]);
  const [edit, setEdit] = useState(false);
  const handelok = () => {
    if (value != null) {
      setArray([...array, { name: value }]);
      setShow(false);
      setValue("");
      setEdit(true);
    }
  };
  const handelget = (e) => {
    setValue(e.target.value);
  };
  const handelshow = () => {
    setShow(true);
  };
  return (
    <div className="p-2 bg-slate-700 rounded-md w-[350px] h-auto">
      <button
        onClick={handelshow}
        className="w-full bg-black text-cyan-50 rounded-md p-1"
      >
        Add a Card
      </button>
      {array.map((item) => {
        return (
          <div
            className="w-full flex justify-between items-center bg-orange-300 mt-2 rounded-md p-1 bg-gray-100"
            key={item.name}
            id={id}
          >
            {prioritycolor&&(
              <SingleUser/>
            )}
            {item.name}
            {edit && (
              <button onClick={onClick}>
                <img src={Edit} alt="" className="w-5 h-5 " />
              </button>
            )}
          </div>
        );
      })}
      {show && (
        <div className="flex justify-between mt-2">
          <input
            className="p-2 rounded-md"
            onChange={handelget}
            value={value}
          ></input>
          <div className="flex gap-1">
            <button className="bg-green-300 rounded-md p-2" onClick={handelok}>
              ok
            </button>
            <button className="bg-red-300 rounded-md p-2">cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bord;
