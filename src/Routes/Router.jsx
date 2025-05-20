import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AllGroups from "../Pages/AllGroups/AllGroups";
import CreateGroup from "../Pages/CreateGroup/CreateGroup";
import MyGroups from "../Pages/MyGroups/MyGroups";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoutes from "../Provider/PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "allGroups",
        loader: () => fetch("http://localhost:3000/groups"),
        Component: AllGroups
      },
      {
        path: "createGroup",
        element: <PrivateRoutes><CreateGroup></CreateGroup></PrivateRoutes>
      },
      {
        path: "myGroups",
        element: <PrivateRoutes><MyGroups></MyGroups></PrivateRoutes>
      },
      {
        path: "register",
        Component: Register
      },
      {
        path: "login",
        Component: Login
      }
    ]
  },
]);
