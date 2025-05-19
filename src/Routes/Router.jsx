import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: <MainLayout></MainLayout>,
    children:[
        {
            
        }
    ]
  },
]);
