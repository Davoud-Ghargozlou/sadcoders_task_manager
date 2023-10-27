import InputCard from "@/components/Input/InputCard";
import LogoIcon from "@/assets/images/LogoiCON.svg";
import shape from "@/assets/images/shapes.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
const Auth = () => {
  const [value, setValue] = useState("");
  const [valuepass, setValuepass] = useState("");
  const [login, setLogin] = useState(false);
  const getvalue = (e) => {
    setValue(e.target.value);
  };
  const getvaluepass = (e) => {
    setValuepass(e.target.value);
  };
  const Info = [
    { name: "Username", type: "text", index: 1 },
    {
      name: "Password",
      placeholder: "Your password",
      type: "password",
      index: 0,
    },
  ];
  const loginuser = () => {
    const smth = {
      user: value,
      pass: valuepass,
    };
    if (value == "ali" && valuepass == "hassan") {
      setLogin(true)
    } 
  };
  return (
    <div className="flex flex-col items-center py-[2rem] ">
      <img src={LogoIcon} className="pb-[56px]" />
      <div className="w-[1170px] h-[550px]  flex ">
        <section className=" w-[585px] h-[550px] flex flex-col bg-gray-300 pb-[79px] pt-[75px] pl-[92px] pr-[92px] basis-1/2	 ">
          <h1 className="text-[30px] font-bold leading-[38px] text-[#212B36] pb-[40px]">
            Sign In
          </h1>
          {/* {Info.map((item) => {
            return (
              <InputCard
                key={item.name}
                text={item.name}
                placeholder={item.placeholder}
                type={item.type}
                value={item.index? value.user : value.pass}
                onChange={getvalue}
              ></InputCard>
            );
          })} */}
          <InputCard text="Username" value={value} onChange={getvalue} />
          <InputCard
            text="Password"
            value={valuepass}
            onChange={getvaluepass}
            placeholder="Your password"
          />
          <Link to={login ? "/" : "/auth"}>
            <button
              onClick={loginuser}
              className="w-[400px] bg-[#3758F9] rounded-[6px] h-[50px] py-[13px] px-[28px]"
            >
              Sign In
            </button>
            </Link>
          <div className="flex items-center pt-[40px]">
            <h3 className="text-[16px] font-medium m-0 not-italic text-[#637381]">
              forget password?
            </h3>
            <div className="flex items-center">
              <h3 className="text-[16px] text-[#637381] pl-[23px]">
                Don't have an account?
              </h3>
              <a href="#" className="text-[#3758F9]">
                {" "}
                Sign Up
              </a>
            </div>
          </div>
        </section>
        <div className=" basis-1/2">
          <img src={shape} />
        </div>
      </div>
    </div>
  );
};

export default Auth;
