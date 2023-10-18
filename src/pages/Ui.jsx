import Users from "../components/Users/Users";
import Button from "../components/UI/Button";
import Input from "../components/Input/Input";
import InputCard from "../components/Input/InputCard";
import Icon from "../components/UI/Icon/Icon";
import attach from '../../src/assets/images/attach-outline.svg'
import heart from '../../src/assets/images/heart-outline.svg'
import message from '../../src/assets/images/message-square-outline.svg'

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
      <Users />
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
