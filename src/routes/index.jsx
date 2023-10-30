import { createBrowserRouter } from "react-router-dom";
import Auth from "@/pages/Auth";
import Ui from "@/pages/Ui";
import Home from "@/pages/index";
import P404 from "@/pages/P404";
import TaskPage from "@/pages/TaskPage";
import Layout from "@/components/Layout";
import Cardpage from "@/pages/Cardpage";
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
        path: "/ui",
        element: <Ui />,
      },
      {
        path: "/Task",
        element: <TaskPage />,
      },
      {
        path: "/Card",
        element: <Cardpage/>,
      },
    ],
  },
  {
    path: "/Auth",
    element: <Auth />,
  },
  {
    path: "*",
    element: <P404 />,
  },
];
const router = createBrowserRouter(routes);

export default router;
