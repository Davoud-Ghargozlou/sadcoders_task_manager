import Button from "../UI/Button";
import InputCard from "./InputCard";

const Info = [
  { name: "Username",type:"text" },
  { name: "Password", placeholder: "Your password",type:"password" },
];

function Input() {

    return (
      <div className="flex flex-col items-center py-[2rem] ">
        <img src="public/Logo (1).svg" className="pb-[56px]"/>
    <div className="w-[1170px] h-[550px]  flex " >
      
      <section className=" w-[585px] h-[550px] flex flex-col bg-gray-300 pb-[79px] pt-[75px] pl-[92px] pr-[92px] basis-1/2	 ">
        <h1 className="text-[30px] font-bold leading-[38px] text-[#212B36] pb-[40px]">Sign In</h1>
        {Info.map((item) => {
          return(
              <InputCard key={item.name}  text={item.name} placeholder={item.placeholder}>
                 
              </InputCard>
          )
        })}
        <button className="w-[400px] bg-[#3758F9] rounded-[6px] h-[50px] py-[13px] px-[28px]">
          Sign In
        </button>
        <div className="flex items-center pt-[40px]">
        <h3 className="text-[16px] font-medium m-0 not-italic text-[#637381]">forget password?</h3>
        <div className="flex items-center">
          <h3 className="text-[16px] text-[#637381] pl-[23px]">Don't have an account?</h3>
          <a href="#" className="text-[#3758F9]"> Sign Up</a>
        </div>
        </div>
      </section>
      <div className=" basis-1/2	bg-[#3758F9]"></div>
      </div>
      </div>
    );
}

export default Input;
