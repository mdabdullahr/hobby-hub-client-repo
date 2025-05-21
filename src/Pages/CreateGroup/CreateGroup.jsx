import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const hobbyCategories = [
  "Drawing & Painting",
  "Photography",
  "Video Gaming",
  "Fishing",
  "Running",
  "Cooking",
  "Reading",
  "Writing",
];

const CreateGroup = () => {
  const { user } = useContext(AuthContext);

  const handleCreateGroup = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());

    // Send Data to db
    fetch("http://localhost:3000/groups", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formObject),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            title: "Created Group Successfully!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://i.ibb.co/Gv48Smtr/networking.jpg')`, // scenic bg
      }}
    >
      <div className="mt-24 w-11/12 lg:w-10/12">
        <form
          onSubmit={handleCreateGroup}
          className="max-w-3xl mx-auto bg-transparent backdrop-blur-3xl shadow-sm shadow-gray-300 p-10 rounded-lg space-y-5 text-secondary"
        >
          <h2 className="text-center underline text-2xl font-bold text-secondary">
            Create Group
          </h2>
          {/* Group Name */}
          <div>
            <label className="block mb-1 font-semibold" htmlFor="groupName">
              Group Name <span className="text-red-500">*</span>
            </label>
            <input
              id="groupName"
              name="groupName"
              type="text"
              required
              className="w-full rounded-md p-2 border-2 border-gray-300  bg-opacity-10  focus:outline-none"
              placeholder="Enter group name"
            />
          </div>

          {/* Hobby Category */}
          <div>
            <label className="block mb-1 font-semibold" htmlFor="hobbyCategory">
              Hobby Category
            </label>
            <select
              id="hobbyCategory"
              name="hobbyCategory"
              className="w-full rounded-md p-2 border-2 border-gray-300  bg-opacity-10  focus:outline-none"
            >
              {hobbyCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-semibold" htmlFor="description">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={4}
              className="w-full rounded-md p-2 border-2 border-gray-300  bg-opacity-10  focus:outline-none"
              placeholder="Write a brief description"
            />
          </div>

          {/* Meeting Location */}
          <div>
            <label
              className="block mb-1 font-semibold"
              htmlFor="meetingLocation"
            >
              Meeting Location <span className="text-red-500">*</span>
            </label>
            <input
              id="meetingLocation"
              name="meetingLocation"
              type="text"
              required
              className="w-full rounded-md p-2 border-2 border-gray-300  bg-opacity-10  focus:outline-none"
              placeholder="Enter meeting location"
            />
          </div>

          {/* Max Members */}
          <div>
            <label className="block mb-1 font-semibold" htmlFor="maxMembers">
              Max Members <span className="text-red-500">*</span>
            </label>
            <input
              id="maxMembers"
              name="maxMembers"
              type="number"
              min="1"
              required
              className="w-full rounded-md p-2 border-2 border-gray-300  bg-opacity-10  focus:outline-none"
              placeholder="Enter max members"
            />
          </div>

          {/* Start Date */}
          <div>
            <label className="block mb-1 font-semibold" htmlFor="startDate">
              Start Date <span className="text-red-500">*</span>
            </label>
            <input
              id="startDate"
              name="startDate"
              type="date"
              required
              className="w-full rounded-md p-2 border-2 border-gray-300  bg-opacity-10  focus:outline-none"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-1 font-semibold" htmlFor="imageUrl">
              Image URL <span className="text-red-500">*</span>
            </label>
            <input
              id="imageUrl"
              name="imageUrl"
              type="url"
              required
              placeholder="image URL"
              className="w-full rounded-md p-2 border-2 border-gray-300  bg-opacity-10  focus:outline-none"
            />
          </div>

          {/* User Name (readonly) */}
          <div>
            <label className="block mb-1 font-semibold">User Name</label>
            <input
              value={user.displayName}
              readOnly
              name="name"
              type="text"
              className="w-full rounded-md p-2 border-2 border-gray-300  bg-opacity-10  focus:outline-none"
            />
          </div>

          {/* User Email (readonly) */}
          <div>
            <label className="block mb-1 font-semibold">User Email</label>
            <input
              value={user.email}
              readOnly
              name="email"
              type="email"
              className="w-full rounded-md p-2 border-2 border-gray-300  bg-opacity-10  focus:outline-none"
            />
          </div>

          {/* Create Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateGroup;
