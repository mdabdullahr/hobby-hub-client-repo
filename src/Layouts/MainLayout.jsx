import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MainLayout;
