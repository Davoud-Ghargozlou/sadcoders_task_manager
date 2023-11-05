import { Navigate, createBrowserRouter } from "react-router-dom";
import Auth from "@/pages/Auth";
import Ui from "@/pages/Ui";
import Home from "@/pages/index";
import P404 from "@/pages/P404";
import TaskPage from "@/pages/TaskPage";
import Layout from "@/pages/Layout";
import Cardpage from "@/pages/Cardpage";
import HomeUser from "@/pages/HomeUser";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <HomeUser/>,
      },
      {
        path: "/ui",
        element: <Ui />,
      },
      {
        path: "/task",
        element: <TaskPage />,
      },
      {
        path: "/card/:boardId",
        element: <Cardpage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Navigate to="/auth/sign-in" replace />,
  },
  {
    path: "/auth/sign-up",
    element: <Auth key="sign-up" mode="sign-up" />,
  },
  {
    path: "/auth/sign-in",
    element: <Auth key="sign-in" mode="sign-in" />,
  },
  {
    path: "*",
    element: <P404 />,
  },
];
const router = createBrowserRouter(routes);

export default router;
