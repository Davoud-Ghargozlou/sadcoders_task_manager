import Usericon from "/src/assets/images/User.png";
import Usericon2 from "/src/assets/images/User2.png";
import Usericon3 from "/src/assets/images/User3.png";
import Usericon4 from "/src/assets/images/adduser.png";
const Users = () => {
  return (
    <>
      <div className="flex relative w-[81px] h-[30px]">
        <img src={Usericon} alt="" className="h-[30px] w-[30px]" />
        <img
          src={Usericon2}
          alt=""
          className="h-[30px] w-[30px] absolute left-[17px]"
        />
        <img
          src={Usericon3}
          alt=""
          className="h-[30px] w-[30px] absolute left-[34px]"
        />
        <img
          src={Usericon4}
          alt=""
          className="h-[30px] w-[30px] absolute left-[51px]"
        />
      </div>
    </>
  );
};

export default Users;
