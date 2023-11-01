import logo from "@/assets/images/Logo.svg";
import board from "@/assets/images/boards.svg";
import search from "@/assets/images/search.svg";
import plus from "@/assets/images/plus-circle-outline.svg";
import alert from "@/assets/images/alert-circle-outline.svg";
import bell from "@/assets/images/bell-outline.svg";
import user from "@/assets/images/main-user.png";
import { Link } from "react-router-dom";
import { useAuthContext } from "@/providers/AuthProvider";
import Button from "../UI/Button";

function Header() {
  const { isLoggedIn, currentUser, logout } = useAuthContext();

  console.log(currentUser);

  return (
    <div className="h-14 p-3 flex items-center border-solid border-b-2 border-b-gray-950 border-opacity-5 px-7">
      <img src={logo} className="w-[73px]" />
      <span className="ml-2 h-8 border-solid border-l-2 border-b-gray-950 border-opacity-5" />
      <img src={board} className=" mx-2 w-6" />
      <h1 className="">Boards</h1>
      <span className="ml-2 h-8 border-solid border-l-2 border-b-gray-950 border-opacity-5" />
      <div className="relative m-2">
        <input
          type="text"
          className="w-full h-7 bg-slate-100 rounded-3xl pl-8 outline-none focus:border-blue-100 focus:ring focus:ring-blue-100"
        />
        <img
          src={search}
          alt="search"
          className="absolute top-1 right-1 mr-2 h-5 w-5"
        />
      </div>
      {isLoggedIn ? (
        <div className="flex justify-end ml-auto gap-5">
          <img src={plus} />
          <img src={alert} />
          <img src={bell} />
          <Button size="sm" variant="outline" onClick={() => logout()}>
            Logout
          </Button>
          <Link to="/profile">
            <img className="w-10 h-10 rounded-full" src={currentUser?.avatar} />
          </Link>
        </div>
      ) : (
        <div className="ml-auto">
          <Link to="/auth">
            <Button size="sm" variant="outline">
              Sign in / Sign Up
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
