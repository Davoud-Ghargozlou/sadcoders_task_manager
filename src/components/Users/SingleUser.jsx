import React from "react";

const SingleUser = ({src,id,className}) => {
  return <img src={src} key={id} alt="" className={className} />;
};

export default SingleUser;
