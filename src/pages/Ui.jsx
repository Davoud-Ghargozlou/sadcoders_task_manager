import Usericon from "/src/assets/images/User.png";
import Usericon2 from "/src/assets/images/User2.png";
import Usericon3 from "/src/assets/images/User3.png";
import AddUser from "/src/assets/images/adduser.png";
import Users from "../components/Users/Users";
import Button from "../components/UI/Button";
import Input from "../components/Input/Input";
import InputCard from "../components/Input/InputCard";
import Priorities from "../components/Priority/Priorities";
const Usersimages = [
  {
    id: 1,
    src: Usericon,
    className: "h-[30px] w-[30px]",
  },
  {
    id: 2,
    src: Usericon2,
    className: "h-[30px] w-[30px] -ml-[13px]",
  },
  {
    id:3,
    src: Usericon3,
    className: "h-[30px] w-[30px] -ml-[13px]",
  },
  {
    id:4,
    src: AddUser,
    className: "h-[30px] w-[30px] -ml-[13px]",
  },
]
function Ui() {
  return (
    <div>
      <Users UsersList={Usersimages}/>
      <Button>ورود</Button>
      <Input />
      <InputCard />
      <Priorities color="blue"/>
    </div>
  );
}

export default Ui;
