import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import { GoHome } from "react-icons/go";
import { MdOutlineGroupAdd } from "react-icons/md";
import { MdOutlineGroup } from "react-icons/md";
import { MdMovieEdit } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import logo from "../assets/logo.png";

const DashboardLayout = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-full 2xl:w-11/12 mx-auto">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

          {/* Drawer Content */}
          <div className="drawer-content flex flex-col">
            {/* Mobile Navbar */}
            <div className="navbar bg-orange-500 w-full lg:hidden">
              <div className="flex-none">
                <label
                  htmlFor="my-drawer-2"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="mx-2 flex-1 px-2 text-white text-lg font-semibold">
                Dashboard
              </div>
            </div>

            {/* Main Content */}
            <div className="px-5 2xl:px-10 overflow-auto">
              <Outlet />
            </div>
          </div>

          {/* Drawer Sidebar */}
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="bg-white text-black min-h-full w-80 p-6 flex flex-col justify-between">
              {/* Top: Logo + Links */}
              <div className="space-y-6">
                <Link to="/">
                  <div className="flex items-center px-6 border-b-2 border-gray-300 pb-4">
                    <img className="w-10 h-10 mr-2" src={logo} alt="Logo" />
                    <p className="-mb-2 font-bold text-2xl text-orange-600">
                      HobbyHub
                    </p>
                  </div>
                </Link>

                {/* Nav Links */}
                <ul className="space-y-4 mt-4">
                  <li>
                    <Link
                      to="/dashboard"
                      className="text-[#526484] hover:bg-gray-200 text-[15px] font-medium px-4 py-3 flex items-center rounded-md"
                    >
                      <GoHome size={20} className="mr-2" />
                      Home
                    </Link>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/myGroups"
                      className="text-[#526484] hover:bg-gray-200 text-[15px] font-medium px-4 py-3 flex items-center rounded-md"
                    >
                      <MdOutlineGroup size={20} className="mr-2" />
                      My Groups
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/createGroup"
                      className="text-[#526484] hover:bg-gray-200 text-[15px] font-medium px-4 py-3 flex items-center rounded-md"
                    >
                      <MdOutlineGroupAdd size={20} className="mr-2" />
                      Create Group
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/editProfile"
                      className="text-[#526484] hover:bg-gray-200 text-[15px] font-medium px-4 py-3 flex items-center rounded-md"
                    >
                      <MdMovieEdit size={20} className="mr-2" />
                      Edit Profile
                    </NavLink>
                  </li>
                </ul>
              </div>

              {/* Bottom: Logout */}
              <div className="mt-6 p-8 border-t-2 border-gray-300">
                <button
                  // onClick={handleLogout}
                  className="w-full border border-[#526484] text-[#526484] text-lg font-medium py-2 rounded-lg transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FiLogOut size={20} /> Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
