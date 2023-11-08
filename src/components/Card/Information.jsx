import React from 'react'
import Card from './Card';
import headerpic from "@/assets/images/header.svg";
import menualt from "@/assets/images/menu-alt.svg";
import Button from "@/components/UI/Button";
import user from "@/assets/images/user.svg";
import minus from "@/assets/images/minus.svg";
import radiobutton from "@/assets/images/radio-button.svg";

function Information() {
  return (
    <div className="flex px-8 pt-6  bg-slate-200 mx-[100px] w-[fit-content] ">
      <div className="flex flex-col basis-3/5	 gap-9  pr-[42px] ">
        <header className="flex items-center">
          <img src={headerpic} className="w-6 h-6" />
          <p className="text-2xl font-normal text-[#000] pl-4">
            My awesome task
          </p>
        </header>
        <div className="flex items-start ">
          <img src={menualt} className="pr-4" />
          <textarea
            placeholder="type your description here"
            className="w-[761px] h-auto border-none bg-slate-200"
          ></textarea>
        </div>
        <Card />
      </div>
      <div className="flex flex-col gap-4 basis-2/5	 	border-dashed border-2 border-l-black px-8 pt-10	bg-slate-200">
        <Button size="xl" variant="two">
          <img src={user} />
          <p className="pl-2">Users</p>
        </Button>

        <Button size="xl" variant="two">
          <img src={minus} />
          <p className="pl-2">Labels</p>
        </Button>

        <Button size="xl" variant="two">
          <img src={radiobutton} />
          <p className="pl-2">Add cheklist</p>
        </Button>

        <Button size="xl" variant="two">
          <img src={headerpic} />
          <p className="pl-2">cover</p>
        </Button>
      </div>
    </div>
  )
}

export default Information