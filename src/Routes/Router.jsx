import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import AllGroups from "../Pages/AllGroups/AllGroups";
import CreateGroup from "../Pages/CreateGroup/CreateGroup";
import GroupDetail from "../Pages/GroupDetail/GroupDetail";
import Home from "../Pages/Home/Home";
import Loader from "../Pages/Loader/Loader";
import Login from "../Pages/Login/Login";
import MyGroups from "../Pages/MyGroups/MyGroups";
import Register from "../Pages/Register/Register";
import UpdateGroup from "../Pages/UpdateGroup/UpdateGroup";
import PrivateRoutes from "../Provider/PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () =>
          fetch("https://hobbyhub-11-server-site.vercel.app/groups"),
        Component: Home,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "allGroups",
        loader: () =>
          fetch("https://hobbyhub-11-server-site.vercel.app/groups"),
        Component: AllGroups,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "createGroup",
        element: (
          <PrivateRoutes>
            <CreateGroup></CreateGroup>
          </PrivateRoutes>
        ),
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "groupDetail/:id",
        loader: ({ params }) =>
          fetch(
            `https://hobbyhub-11-server-site.vercel.app/groups/${params.id}`
          ),
        element: (
          <PrivateRoutes>
            <GroupDetail></GroupDetail>
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "myGroups",
        element: (
          <PrivateRoutes>
            <MyGroups></MyGroups>
          </PrivateRoutes>
        ),
      },
      {
        path: "updateGroup/:id",
        loader: ({ params }) =>
          fetch(
            `https://hobbyhub-11-server-site.vercel.app/groups/${params.id}`
          ),
        element: (
          <PrivateRoutes>
            <UpdateGroup></UpdateGroup>
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loader></Loader>,
      },
    ],
  },
]);
