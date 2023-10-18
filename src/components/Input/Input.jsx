import Button from "../UI/Button";
import InputCard from "./InputCard";

const Info = [
  { name: "Username", placeholder: "Your username",type:"text" },
  { name: "Password", placeholder: "Your password",type:"password" },
];

function Input() {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
    <section className="container w-100 h-80 flex flex-col py-6 px-4">
      <header className="m-auto pb-6" >
        <img src="public/Logo.svg"/>
      </header>
      {Info.map((item) => {
        return (
          <InputCard
            key={item.name}
            text={item.name}
            placeholder={item.placeholder}
            type={item.type}
          >
            <img src="/public/Group.svg" />
          </InputCard>
        );
      })}
      <h3 className="text-xs font-medium m-0 not-italic text-gray-500">
        forget password?
      </h3>
      <div className="flex justify-end items-center">
      <Button variant="fill" size="sm">
      Sign up
      </Button>
      <Button variant="outline" size="md">
      Login
      </Button>
       </div>
    </section>
    </div>
  );
}

export default Input;
