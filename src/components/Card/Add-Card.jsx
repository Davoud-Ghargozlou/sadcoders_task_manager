import * as React from "react";
import Usericon4 from "/src/assets/images/User4.png";
import Usericon5 from "/src/assets/images/User5.png";
import AddUser from "/src/assets/images/adduser.png";
import Icon from "/src/assets/images/arrow.png";
import Users from "/src/components/Users/Users";

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
    <div className="flex items-center flex-wrap p-10">
      <div className="flex flex-col p-4 rounded-lg bg-[#F4F4F4] m-2 ">
        <h1 className="font-bold text-lg">The Amazing Hubble</h1>
        <p className="text-gray-400">
          Color is so powerful that it can persuade, motivate.
        </p>
      </div>

      <div className="flex flex-col p-4 rounded-lg bg-[#F4F4F4] m-2 ">
        <h1 className="font-bold text-lg">The Amazing Hubble</h1>
        <p className="text-gray-400">
          Color is so powerful that it can persuade, motivate.
        </p>
        <div className="flex justify-between mt-4">
          <div className="">
            <Users UsersList={Usersimages} />
          </div>
          <div className="flex">
           <span className="text-black"><img src={Icon} alt=""/></span>
           
        </div>
        </div>
      </div>
    </div>
  );
};

export default ImgMediaCard;
