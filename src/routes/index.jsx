import Profile from "../pages/Profile";
import Auth from "../pages/Auth";
import Homepage from "../pages/index";
import { createBrowserRouter } from "react-router-dom";
import Ui from "../pages/Ui";
import Input from "../components/Input/Input";
const routes = [
  {
    path: "/Profile",
    element: <Profile />,
  },
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
    element: <Homepage />,
  },
  {
    path: "/ui",
    element: <Ui />,
  },
];
const router = createBrowserRouter(routes);

export default router;
