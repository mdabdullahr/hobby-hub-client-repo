import { useEffect } from "react";
import { useLoaderData } from "react-router";
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
    fetch(`https://hobbyhub-11-server-site.vercel.app/groups/${_id}`, {
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
            title: "Group Update Successfully!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  useEffect(() => {
    document.title = `HobbyHub | Update-Group-${_id}`;
  }, [_id]);
  return (
    <div>
      <form
        data-aos="zoom-in"
        onSubmit={handleUpdateGroup}
        className="bg-white shadow-lg rounded-lg p-5 md:p-10 lg:p-14 space-y-10 text-gray-800"
      >
        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-orange-600 border-b-2 pb-4">
          Update Your Hobby Group
        </h2>

        {/* Form Fields */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Group Name */}
          <div>
            <label htmlFor="groupName" className="font-semibold mb-1 block">
              Group Name <span className="text-red-500">*</span>
            </label>
            <input
              id="groupName"
              name="groupName"
              type="text"
              defaultValue={groupName}
              required
              placeholder="e.g., Photography Lovers"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />
          </div>

          {/* Hobby Category */}
          <div>
            <label htmlFor="hobbyCategory" className="font-semibold mb-1 block">
              Hobby Category
            </label>
            <select
              id="hobbyCategory"
              name="hobbyCategory"
              defaultValue={hobbyCategory}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            >
              {hobbyCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Meeting Location */}
          <div>
            <label
              htmlFor="meetingLocation"
              className="font-semibold mb-1 block"
            >
              Meeting Location <span className="text-red-500">*</span>
            </label>
            <input
              id="meetingLocation"
              name="meetingLocation"
              type="text"
              defaultValue={meetingLocation}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              placeholder="Dhaka, Bangladesh"
            />
          </div>

          {/* Max Members */}
          <div>
            <label htmlFor="maxMembers" className="font-semibold mb-1 block">
              Max Members <span className="text-red-500">*</span>
            </label>
            <input
              id="maxMembers"
              name="maxMembers"
              type="number"
              min="1"
              defaultValue={maxMembers}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              placeholder="e.g., 10"
            />
          </div>

          {/* Start Date */}
          <div>
            <label htmlFor="startDate" className="font-semibold mb-1 block">
              Start Date <span className="text-red-500">*</span>
            </label>
            <input
              id="startDate"
              name="startDate"
              type="date"
              defaultValue={startDate}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />
          </div>

          {/* Image URL */}
          <div>
            <label htmlFor="imageUrl" className="font-semibold mb-1 block">
              Image URL <span className="text-red-500">*</span>
            </label>
            <input
              id="imageUrl"
              name="imageUrl"
              type="url"
              defaultValue={imageUrl}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              placeholder="https://your-image-link.com"
            />
          </div>

          {/* User Name */}
          <div>
            <label className="font-semibold mb-1 block">User Name</label>
            <input
              value={name}
              readOnly
              name="name"
              type="text"
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-600 border border-gray-300 cursor-not-allowed"
            />
          </div>

          {/* User Email */}
          <div>
            <label className="font-semibold mb-1 block">User Email</label>
            <input
              value={email}
              readOnly
              name="email"
              type="email"
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-600 border border-gray-300 cursor-not-allowed"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="font-semibold mb-1 block">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={description}
            rows={4}
            required
            placeholder="Write a brief description..."
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />
        </div>

        {/* Submit Button */}
        <button
          data-aos="zoom-in"
          type="submit"
          className="w-full bg-orange-500 text-white font-semibold py-4 rounded-lg text-xl hover:bg-orange-600 transition transform hover:scale-105 cursor-pointer"
        >
          Update Group
        </button>
      </form>
    </div>
  );
};

export default UpdateGroup;
