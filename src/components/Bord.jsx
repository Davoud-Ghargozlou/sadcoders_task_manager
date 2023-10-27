import React, { useState } from "react";



function Bord( {id,newarray}) {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [array, setArray] = useState([]);

  const handelok = () => {
    if (value != null) {
      setArray([...array, { name: value }]);
      setShow(false);
      setValue("");
    }
  };

  const handelget = (e) => {
    setValue(e.target.value);
  };
  const handelshow = () => {
    setShow(true);
  };
  return (
    <div className="p-2 bg-slate-400 w-[350px] h-auto">
      <button
        onClick={handelshow}
        className="w-full bg-black text-cyan-50 rounded-md p-1"
      >
        Add a Card
      </button>
      {array.map((item) => {
        return (
          <div
            className="w-full bg-orange-300 mt-2 rounded-md p-1 bg-gray-100"
            key={item.name}
            id={id}
          >
            {item.name}
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
