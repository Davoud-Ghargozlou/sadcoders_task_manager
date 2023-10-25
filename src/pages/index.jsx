import ImgMediaCard from "@/components/Card/Add-Card"
import CardList from "@/components/Card/CardList"
import Header from "@/components/Header/Header"
import { Link } from "react-router-dom"

const Homepage = () => {
  return (
    <div>
    <Header/>
    <div className="px-7">
    <div className="flex justify-between w-screen   mt-9 mb-4">
      <span>Recentley viwed</span>
      <span>Menu</span>
    </div>
    <CardList/>
    <div className="h-[14px] w-screen bg-slate-700 rounded-md mb-14 mt-[20px]"></div>
    <div className="flex justify-between w-screen   mt-9 mb-4">
      <span>New</span>
    </div>
    <CardList/>
    <div className="h-[14px] w-screen bg-slate-700 rounded-md mb-14 mt-[20px]"></div>
    <div className="flex justify-between w-screen   mt-9 mb-4">
      <span>Process</span>
    </div>
    <CardList/>
    <div className="h-[14px] w-screen bg-slate-700 rounded-md mb-14 mt-[20px]"></div>
    <div className="flex justify-between w-screen  mt-9 mb-4">
      <span>Completed</span>
    </div>
    <CardList/>
    </div>
    </div>
  )
}

export default Homepage