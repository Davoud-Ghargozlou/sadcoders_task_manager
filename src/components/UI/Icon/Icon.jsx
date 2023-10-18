import React from "react";
function Icon({ Icon, cont }) {
  return <div className="flex">
    <span className="text-gray-400">{cont}</span>
    <img src={Icon} alt="" />
  </div>;
}

export default Icon;
