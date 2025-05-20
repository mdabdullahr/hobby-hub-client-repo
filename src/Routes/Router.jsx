import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AllGroups from "../Pages/AllGroups/AllGroups";
import CreateGroup from "../Pages/CreateGroup/CreateGroup";
import MyGroups from "../Pages/MyGroups/MyGroups";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component:Home
      },
      {
        path: "allGroups",
        Component: AllGroups
      },
      {
        path: "CreateGroup",
        element: <CreateGroup></CreateGroup>
      },
      {
        path: "MyGroups",
        element: <MyGroups></MyGroups>
      }

    ]
  },
]);
