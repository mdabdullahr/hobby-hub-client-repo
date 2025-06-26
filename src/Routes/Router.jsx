import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import AllGroups from "../Pages/AllGroups/AllGroups";
import CreateGroup from "../Pages/CreateGroup/CreateGroup";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import GroupDetail from "../Pages/GroupDetail/GroupDetail";
import Home from "../Pages/Home/Home";
import Loader from "../Pages/Loader/Loader";
import Login from "../Pages/Login/Login";
import MyGroups from "../Pages/MyGroups/MyGroups";
import Register from "../Pages/Register/Register";
import UpdateGroup from "../Pages/UpdateGroup/UpdateGroup";
import PrivateRoutes from "../Provider/PrivateRoutes";
import DashboardLayout from "../Layouts/DashboardLayout";
import DashboardHome from "../Pages/DashboardHome/DashboardHome";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import AboutUs from "../Pages/AboutUs/AboutUs";
import TermsCondition from "../Pages/TermsCondition/TermsCondition";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/groups"),
        Component: Home,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "allGroups",
        Component: AllGroups,
        hydrateFallbackElement: <Loader></Loader>,
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
          fetch(`http://localhost:3000/groups/${params.id}`),
        element: (
          <PrivateRoutes>
            <GroupDetail></GroupDetail>
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "about",
        Component: AboutUs
      },
      {
        path: "terms",
        Component: TermsCondition
      },
      {
        path: "privacy",
        Component: PrivacyPolicy
      }
      
    ],
  },
  {
    path: "/dashboard",
     loader: () => fetch('http://localhost:3000/groupsCount'),
    element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/groupsCount'),
        Component: DashboardHome
      },
      {
        path: "myGroups",
        Component: MyGroups
      },
      {
        path: "createGroup",
        Component: CreateGroup
      },
      {
        path: "updateGroup/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/groups/${params.id}`),
        Component: UpdateGroup,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "updateProfile",
        Component: UpdateProfile
      }
    ]
  }
]);
