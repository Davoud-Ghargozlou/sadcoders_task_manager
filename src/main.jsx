import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

import "./index.css";
import { AuthProvider } from "./providers/AuthProvider";
import {TaskProvider} from "./providers/TaskProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
    <TaskProvider>
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
    </TaskProvider>
);
