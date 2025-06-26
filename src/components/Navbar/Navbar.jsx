import { useContext } from "react";
import { MdGroups } from "react-icons/md";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import DarkMoodToggoler from "../DarkMoodToggoler/DarkMoodToggoler.jsx";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const links = (
    <>
      <li className="text-lg text-white md:text-xl">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-lg text-white md:text-xl ">
        <NavLink to="/allGroups">All Groups</NavLink>
      </li>
      <li className="text-lg text-white md:text-xl ">
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li className="text-lg text-white md:text-xl ">
        <NavLink to="/terms">Terms & Condition</NavLink>
      </li>
      <li className="text-lg text-white md:text-xl ">
        <NavLink to="/privacy">Privacy Policy</NavLink>
      </li>
      <>
        {user && (
          <li className="text-lg text-white md:text-xl ">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        )}
      </>
    </>
  );

  const handleLogOut = () => {
    logoutUser()
      .then(() => {
        Swal.fire({
          title: "Successfully Logged Out...!",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        toast.error("Logout failed...!", error.message);
      });
  };
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-opacity-50 bg-orange-500">
      <div className="navbar w-11/12 mx-auto py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" mr-5 lg:hidden text-black dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-400 bg-opacity-50 backdrop-blur-md rounded-box mt-3 w-52 p-2 shadow z-[999] absolute"
            >
              {links}
            </ul>
          </div>
          <img className="w-16 h-16 mr-2" src={logo} alt="logo" />
          <h3 className="text-2xl md:text-3xl lg:text-4xl specific-text font-bold text-white hidden md:block">
            HobbyHub
          </h3>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2 md:gap-5">
          <div>
            <DarkMoodToggoler></DarkMoodToggoler>
          </div>
          {user && (
            <div className="relative group">
              <img
                className="w-6 md:w-12 h-6 md:h-12 rounded-full border border-white"
                src={user.photoURL}
                alt="userImg"
              />
              <div className="absolute  left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                {user.displayName}
              </div>
            </div>
          )}

          {user ? (
            <button
              onClick={handleLogOut}
              data-aos="zoom-in"
              className="text-white hover:text-orange-600 bg-orange-500 hover:bg-orange-100 border border-white text-sm md:text-lg font-semibold px-4 md:px-6 py-2 rounded-lg transition duration-300 hover:shadow-lg whitespace-nowrap cursor-pointer"
            >
              LogOut
            </button>
          ) : (
            <Link
              to="/login"
              data-aos="zoom-in"
              className="text-white hover:text-orange-600 bg-orange-500 hover:bg-orange-100 border border-white text-sm md:text-lg font-semibold px-4 md:px-6 py-2 rounded-lg transition duration-300 hover:shadow-lg whitespace-nowrap cursor-pointer"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
