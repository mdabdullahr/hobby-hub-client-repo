import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "../ThemeContext/ThemeContext";

const MainLayout = () => {
  return (
    <>
      <ThemeProvider>
        <div className="bg-white dark:bg-gray-900 dark:text-white">
          <Navbar />
          <div>
            <Outlet />
          </div>
          <Footer />
          <ToastContainer />
        </div>
      </ThemeProvider>
    </>
  );
};

export default MainLayout;
