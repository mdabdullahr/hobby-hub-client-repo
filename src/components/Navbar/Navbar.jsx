import { MdGroups } from "react-icons/md";
import { Link, NavLink } from "react-router";

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
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-transparent bg-opacity-50 backdrop-blur-md">
      <div className="navbar w-11/12 mx-auto py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" mr-5 lg:hidden"
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
        <div className="navbar-end">
          <Link
            to="/login"
            className="text-sm md:text-xl bg-primary text-base-200 rounded px-5 py-2 cursor-pointer"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
