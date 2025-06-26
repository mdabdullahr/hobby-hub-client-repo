import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "../ThemeContext/ThemeContext";

const MainLayout = () => {
  return (
    <>
      <ThemeProvider>
        <div className="bg-gray-100 dark:bg-gray-900">
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
