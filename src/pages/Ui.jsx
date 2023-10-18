import Usericon from "/src/assets/images/User.png";
import Usericon2 from "/src/assets/images/User2.png";
import Usericon3 from "/src/assets/images/User3.png";
import AddUser from "/src/assets/images/adduser.png";
import Users from "../components/Users/Users";
import Button from "../components/UI/Button";
import Input from "../components/Input/Input";
import InputCard from "../components/Input/InputCard";
import Icon from "../components/UI/Icon/Icon";
import attach from '../../src/assets/images/attach-outline.svg'
import heart from '../../src/assets/images/heart-outline.svg'
import message from '../../src/assets/images/message-square-outline.svg'

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
  const IconList=[
    {
      url: attach,
      count: 255
    },
    {
      url:heart,
      count:255
    },
    {
      url:message,
      count:255
    }
  ]
  return (
    <div>
      <Users UsersList={Usersimages}/>
      <Button>ورود</Button>
      <Input />
      <InputCard />
      {
        IconList.map((item,index)=><Icon key={index} Icon={item.url} cont={item.count} />)
      }
    </div>
  );
}

export default Ui;
