import * as React from "react";
import Usericon4 from "/src/assets/images/User4.png";
import Usericon5 from "/src/assets/images/User5.png";
import AddUser from "/src/assets/images/adduser.png";
import imgpost1 from "/src/assets/images/imgpost1.png";
import Users from "/src/components/Users/Users";
import SinglePriority from "../Priority/SinglePriority";
import attach from "/src/assets/images/attach-outline.svg";
import heart from "/src/assets/images/heart-outline.svg";
import message from "/src/assets/images/message-square-outline.svg";

const Usersimages = [
  {
    id: 4,
    src: Usericon4,
    className: "h-[30px] w-[30px] -ml-[13px]",
  },
  {
    id: 5,
    src: Usericon5,
    className: "h-[30px] w-[30px] -ml-[13px]",
  },
  {
    id: 3,
    src: AddUser,
    className: "h-[30px] w-[30px] -ml-[13px]",
  },
];
const ImgMediaCard = () => {
  return (
    <div className="flex flex-col p-4 rounded-lg bg-[#F4F4F4] m-5 ">
      <img src={imgpost1} />
      <div className="flex gap-2 mt-5">
        <SinglePriority color="blue" />
        <SinglePriority color="purple" />
        <SinglePriority color="green" />
        <SinglePriority color="red" />
      </div>
      <h1 className="font-bold text-lg">The Amazing Hubble</h1>
      <p className="text-gray-400">
        Color is so powerful that it can persuade, motivate.
      </p>
      <div className="flex justify-between mt-4">
        <div className="">
          <Users UsersList={Usersimages} />
        </div>
        <div className="flex">
          <span className="text-black">
          </span>
          <img src={attach} alt="" />
          <img src={heart} alt="" />
          <img src={message} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ImgMediaCard;
