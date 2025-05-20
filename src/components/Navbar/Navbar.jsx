import { useContext } from "react";
import { MdGroups } from "react-icons/md";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const links = (
  <>
    <li className="text-lg text-black md:text-xl">
      <NavLink to="/">Home</NavLink>
    </li>
    <li className="text-lg text-black md:text-xl ">
      <NavLink to="/allGroups">All Groups</NavLink>
    </li>
    <li className="text-lg text-black md:text-xl ">
      <NavLink to="/createGroup">Create Group</NavLink>
    </li>
    <li className="text-lg text-black md:text-xl ">
      <NavLink to="/myGroups">My Groups</NavLink>
    </li>
  </>
);

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

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
        toast.error("Logout failed...!");
      });
  };
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-transparent bg-opacity-50 backdrop-blur-md">
      <div className="navbar w-11/12 mx-auto py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" mr-5 lg:hidden">
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
              className="menu menu-sm dropdown-content bg-gray-400 bg-opacity-50 backdrop-blur-md rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <MdGroups className="rounded-full border mr-2" size={20} />
          <a className="text-lg md:text-2xl font-bold">
            <span className="text-primary">Hobby</span>
            <span className="text-primary">Hub</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2 md:gap-5">
          {user && (
            <div className="relative group">
              <img
                className="w-6 md:w-12 h-6 md:h-12 rounded-full"
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
              className="text-white bg-primary text-sm md:text-xl font-medium px-3 md:px-8 py-1 md:py-2 rounded transition-transform duration-500 hover:scale-105 cursor-pointer"
            >
              LogOut
            </button>
          ) : (
            <Link
              to="/login"
              data-aos="zoom-in"
              className="text-white bg-primary text-sm md:text-xl font-medium px-3 md:px-8 py-1 md:py-2 rounded transition-transform duration-500 hover:scale-105"
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
