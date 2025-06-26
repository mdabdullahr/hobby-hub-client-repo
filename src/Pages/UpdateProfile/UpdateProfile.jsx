import React, { useContext } from "react";
import { toast } from "react-toastify";
import { FaUserEdit } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const { user, setUser, updateUser } = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photo.value;
    updateUser({ displayName: name, photoURL: photoURL })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoURL });
        Swal.fire({
          title: "Profile Updated Successfully...!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        toast.error("Update failed: " + err.message);
      });
  };

  return (
    <div className="bg-gray-100 flex min-h-screen items-center justify-center p-6">
      <form
        onSubmit={handleUpdate}
        className="bg-white max-w-2xl w-full rounded-2xl shadow-xl p-8 md:p-12 space-y-6"
        data-aos="fade-up"
      >
        <div className="flex items-center justify-center gap-2 mb-6">
          <FaUserEdit className="text-orange-500 text-3xl" />
          <h2 className="text-3xl font-bold text-orange-500 text-center">
            Update Your Profile
          </h2>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            name="name"
            defaultValue={user?.displayName}
            type="text"
            placeholder="Enter your name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-gray-600"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Photo URL <span className="text-red-500">*</span>
          </label>
          <input
            name="photo"
            defaultValue={user?.photoURL}
            type="url"
            placeholder="Enter photo URL"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-gray-600"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold py-3 rounded-xl shadow-md transition duration-300 cursor-pointer"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
