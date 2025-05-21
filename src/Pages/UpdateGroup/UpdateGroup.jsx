import React from "react";
import { useLoaderData, useNavigate } from "react-router";
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

const UpdateGroup = () => {
  const navigate = useNavigate();
  const {
    groupName,
    hobbyCategory,
    description,
    meetingLocation,
    maxMembers,
    startDate,
    imageUrl,
    _id,
    name,
    email,
  } = useLoaderData();

  const handleUpdateGroup = (e) => {
    e.preventDefault();
    const group = e.target;
    const formData = new FormData(group);
    const formDataObj = Object.fromEntries(formData.entries());

    // Send data to db
    fetch(`http://localhost:3000/groups/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formDataObj),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
            console.log("data after db", data);
          Swal.fire({
            title: "Coffee Update Successfully!",
            icon: "success",
            draggable: true,
          });
          navigate("/");
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
          onSubmit={handleUpdateGroup}
          className="max-w-3xl mx-auto bg-transparent backdrop-blur-3xl shadow-sm shadow-gray-300 p-10 rounded-lg space-y-5 text-secondary"
        >
          <h2 className="text-center underline text-2xl font-bold text-secondary">
            Update Group
          </h2>
          {/* Group Name */}
          <div>
            <label className="font-semibold mb-1">
                Group Name
            </label>
            <input
              id="groupName"
              name="groupName"
              type="text"
              defaultValue={groupName}
              className="w-full rounded-md p-2 border-2 border-gray-300  bg-opacity-10  focus:outline-none"
              placeholder="Enter group name"
            />
          </div>

          {/* Hobby Category */}
          <div>
            <label className="mb-1 font-semibold">
              Hobby Category
            </label>
            <select
              id="hobbyCategory"
              name="hobbyCategory"
              defaultValue={hobbyCategory}
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
            <label className="mb-1 font-semibold">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={description}
              rows={4}
              className="w-full rounded-md p-2 border-2 border-gray-300  bg-opacity-10  focus:outline-none"
              placeholder="Write a brief description"
            />
          </div>

          {/* Meeting Location */}
          <div>
            <label
              className="mb-1 font-semibold"
            >
              Meeting Location 
            </label>
            <input
              id="meetingLocation"
              name="meetingLocation"
              type="text"
              defaultValue={meetingLocation}
              className="w-full rounded-md p-2 border-2 border-gray-300  bg-opacity-10  focus:outline-none"
              placeholder="Enter meeting location"
            />
          </div>

          {/* Max Members */}
          <div>
            <label className="mb-1 font-semibold">
              Max Members
            </label>
            <input
              id="maxMembers"
              name="maxMembers"
              type="number"
              min="1"
              defaultValue={maxMembers}
              className="w-full rounded-md p-2 border-2 border-gray-300  bg-opacity-10  focus:outline-none"
              placeholder="Enter max members"
            />
          </div>

          {/* Start Date */}
          <div>
            <label className="mb-1 font-semibold">
              Start Date 
            </label>
            <input
              id="startDate"
              name="startDate"
              type="date"
              defaultValue={startDate}
              className="w-full rounded-md p-2 border-2 border-gray-300  bg-opacity-10  focus:outline-none"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className=" mb-1 font-semibold" >
              Image URL 
            </label>
            <input
              defaultValue={imageUrl}
              id="imageUrl"
              name="imageUrl"
              type="url"
              placeholder="image URL"
              className="w-full rounded-md p-2 border-2 border-gray-300  bg-opacity-10  focus:outline-none"
            />
          </div>

          {/* User Name (readonly) */}
          <div>
            <label className="block mb-1 font-semibold">User Name</label>
            <input
              value={name}
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
              value={email}
              readOnly
              name="email"
              type="email"
              className="w-full rounded-md p-2 border-2 border-gray-300  bg-opacity-10  focus:outline-none"
            />
          </div>

          {/* Create Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateGroup;
