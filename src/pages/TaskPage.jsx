import React from 'react'
import Header from '@/components/Header/Header'
import heart from "@/assets/images/heart-outline.svg"
import globe from "@/assets/images/globe2.png"
import hard from "@/assets/images/Hard.png"
import Users from '@/components/Users/Users'
import Usericon from "@/assets/images/User.png"
import Usericon2 from "@/assets/images/User2.png"
import Usericon3 from "@/assets/images/User3.png"
import AddUser from "@/assets/images/adduser.png"
import { useParams } from 'react-router-dom'
const TaskPage = () => {
  const { boardId } = useParams();
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
          id: 3,
          src: Usericon3,
          className: "h-[30px] w-[30px] -ml-[13px]",
        },
        {
          id: 4,
          src: AddUser,
          className: "h-[30px] w-[30px] -ml-[13px]",
        },
      ];
  return (
    <>
    <div className='flex justify-between p-[30px]'>
    <div className='flex items-center'>
        <span className='pr-20'>{boardId}</span>
        <div className='flex gap-5 items-center'> 
        <img src={heart} alt="" className='w-5 h-5' />
        <img src={globe} alt="" className='w-5 h-5' />
        <span className='text-gray-300'>Public</span>
        <img src={hard} alt="" className='w-8 h-9'/>
        </div>
    </div>
    <div className='flex items-center'>
        <Users UsersList={Usersimages}/>
        <span className='pl-[100px]'>Menu</span>
    </div>
    </div>
    </>
  )
}

export default TaskPage