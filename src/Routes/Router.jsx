import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AllGroups from "../Pages/AllGroups/AllGroups";
import CreateGroup from "../Pages/CreateGroup/CreateGroup";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoutes from "../Provider/PrivateRoutes";
import GroupDetail from "../Pages/GroupDetail/GroupDetail";
import MyGroups from "../Pages/MyGroups/MyGroups";
import UpdateGroup from "../Pages/UpdateGroup/UpdateGroup";
import Loader from "../Pages/Loader/Loader";

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
        Component: AllGroups,
        hydrateFallbackElement: <Loader></Loader>
      },
      {
        path: "createGroup",
        element: <PrivateRoutes><CreateGroup></CreateGroup></PrivateRoutes>
      },
      {
        path: "register",
        Component: Register
      },
      {
        path: "login",
        Component: Login
      },
      {
        path: "groupDetail/:id",
        loader: ({params}) => fetch(`http://localhost:3000/groups/${params.id}`),
        element: <PrivateRoutes><GroupDetail></GroupDetail></PrivateRoutes>,
        hydrateFallbackElement: <Loader></Loader>
      },
      {
        path: "myGroups",
        element: <PrivateRoutes><MyGroups></MyGroups></PrivateRoutes>
      },
      {
        path: "updateGroup/:id",
        loader: ({params}) => fetch(`http://localhost:3000/groups/${params.id}`),
        element: <PrivateRoutes><UpdateGroup></UpdateGroup></PrivateRoutes>,
        hydrateFallbackElement: <Loader></Loader>
      }
    ]
  },
]);
