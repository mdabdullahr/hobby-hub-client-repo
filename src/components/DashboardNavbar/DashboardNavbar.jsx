import React, { useContext, useState, useEffect, useRef } from "react";
import { FiLogOut, FiBell, FiGrid, FiFolder } from "react-icons/fi";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const DashboardTopNavbar = ({ totalGroup, myGroups, activeGroups }) => {
  const { user, logoutUser } = useContext(AuthContext);
  const [activePopup, setActivePopup] = useState("");

  const popupRef = useRef(null);

  const handleLogOut = () => {
    logoutUser()
      .then(() => {
        Swal.fire({
          title: "Successfully Logged Out...!",
          icon: "success",
        });
      })
      .catch((error) => {
        toast.error("Logout failed...!", error.message);
      });
  };

  const togglePopup = (popup) => {
    setActivePopup((prev) => (prev === popup ? "" : popup));
  };

  // ✅ Detect outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setActivePopup("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="hidden lg:flex items-center justify-between px-8 py-4 bg-transparent backdrop-blur-md sticky top-0 z-50">
      {/* Left Icons with Popups */}
      <div
        className="flex items-center gap-6 text-gray-600 relative"
        ref={popupRef}
      >
        {/* Notifications */}
        <div className="relative">
          <FiBell
            size={22}
            className="cursor-pointer hover:text-orange-500 transition"
            title="Notifications"
            onClick={() => togglePopup("notifications")}
          />
          {activePopup === "notifications" && (
            <div className="absolute top-8 left-0 w-64 bg-white shadow-lg rounded-lg p-4 text-sm z-50">
              <h4 className="font-semibold mb-2">Recent Notifications</h4>
              <ul className="space-y-1 text-gray-700">
                <li>🎉 New group created</li>
                <li>📬 Message from admin</li>
                <li>⚠️ Member left group</li>
              </ul>
            </div>
          )}
        </div>

        {/* Overview */}
        <div className="relative">
          <FiGrid
            size={22}
            className="cursor-pointer hover:text-orange-500 transition"
            title="Dashboard Overview"
            onClick={() => togglePopup("overview")}
          />
          {activePopup === "overview" && (
            <div className="absolute top-8 left-0 w-64 bg-white shadow-lg rounded-lg p-4 text-sm z-50">
              <h4 className="font-semibold mb-2">Overview Stats</h4>
              <ul className="text-gray-700 space-y-1">
                <li>Total Groups: {totalGroup}</li>
                <li>My Groups: {myGroups?.length}</li>
                <li>Active Groups: {activeGroups?.length}</li>
              </ul>
            </div>
          )}
        </div>

        {/* My Groups */}
        <div className="relative">
          <FiFolder
            size={22}
            className="cursor-pointer hover:text-orange-500 transition"
            title="My Groups"
            onClick={() => togglePopup("groups")}
          />
          {activePopup === "groups" && (
            <div className="absolute top-8 left-0 w-64 bg-white shadow-lg rounded-lg p-4 text-sm z-50">
              <h4 className="font-semibold mb-2">My Groups</h4>
              <ul className="text-gray-700 list-disc list-inside">
                {myGroups.length > 0 ? (
                  myGroups.map((group) => (
                    <li key={group._id}>{group.groupName}</li>
                  ))
                ) : (
                  <p>Your No Group Available here</p>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Avatar + Logout */}
      <div className="flex items-center gap-6">
       

        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt="User"
            className="w-10 h-10 rounded-full border-2 border-orange-400 object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold border border-orange-300">
            {user?.displayName?.charAt(0)}
          </div>
        )}

        <button
          onClick={handleLogOut}
          className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition cursor-pointer"
        >
          <FiLogOut /> Logout
        </button>
      </div>
    </nav>
  );
};

export default DashboardTopNavbar;
