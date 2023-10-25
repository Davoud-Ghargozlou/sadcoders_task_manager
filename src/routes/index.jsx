import { createBrowserRouter } from "react-router-dom";
import Auth from "@/pages/Auth";
import Ui from "@/pages/Ui";
import Input from "@/components/Input/Input";
import Home from "@/pages/index";
import TaskPage from "@/pages/TaskPage";
const routes = [
  {
    path: "/Login",
    element: <Input />,
  },
  {
    path: "/Auth",
    element: <Auth />,
  },
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/ui",
    element: <Ui />,
  },
  {
    path: "/Task",
    element: <TaskPage/>
  },
];
const router = createBrowserRouter(routes);

export default router;
