import Users from "../components/Users/Users";
import Button from "../components/UI/Button";
import Input from "../components/Input/Input";
import InputCard from "../components/Input/InputCard";
import Header from "../components/Header/Header";

function Ui() {
  return (
    <div>
      <Header />
      <Users />
      <Button>ورود</Button>
      <Input />
      <InputCard />
    </div>
  );
}

export default Ui;
