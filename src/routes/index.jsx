import Auth from "../pages/Auth";
import { createBrowserRouter } from "react-router-dom";
import Ui from "../pages/Ui";
import Input from "../components/Input/Input";
import Home from "../pages/Index";
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
];
const router = createBrowserRouter(routes);

export default router;
