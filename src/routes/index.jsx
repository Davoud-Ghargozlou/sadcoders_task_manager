import Profile from "../pages/Profile";
import Auth from "../pages/Auth";
import Homepage from "../pages/index";
import { createBrowserRouter } from "react-router-dom";
import Ui from "../pages/Ui";
const routes = [
  {
    path: "/Profile",
    element: <Profile />,
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
