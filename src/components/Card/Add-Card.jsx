import * as React from "react";
import Usericon4 from "@/assets/images/User4.png";
import Usericon5 from "@/assets/images/User5.png";
import AddUser from "@/assets/images/adduser.png";
import imgpost1 from "@/assets/images/imgpost1.png";
import Users from "@/components/Users/Users";
import attach from "@/assets/images/attach-outline.svg";
import heart from "@/assets/images/heart-outline.svg";
import message from "@/assets/images/message-square-outline.svg";
import SingleUser from "../Users/SingleUser";
import { Link } from "react-router-dom";
// import { boardsHome } from "@/fake-data/boards-home";

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
const ImgMediaCard = ({ title, description, users }) => {
  return (
    <Link to={`/task/${title}`}>
    <div className="flex flex-col p-[20px] rounded-lg bg-[#F4F4F4] min-w-[360px] max-w-[360px]">
      <h1 className="mb-1">{title}</h1>
      <p className="opacity-40 text-[13px]">{description}</p>
      <div className="mt-[27px]">
        <img src={users} alt="" />
      </div>
    </div>
    </Link>
  );
};

export default ImgMediaCard;
