import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

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
    const members = [];
    const sendDataDB = { ...formObject, members };

    // Send Data to db
    fetch("https://hobbyhub-11-server-site.vercel.app/groups", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sendDataDB),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            title: "Created Group Successfully!",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      });
  };

  useEffect(() => {
    document.title = "HobbyHub | Create-Group";
  }, []);
  return (
    <div className=" w-full h-full">
      <form
        data-aos="zoom-in"
        onSubmit={handleCreateGroup}
        className="bg-white shadow-lg rounded-lg p-5 md:p-10 lg:p-14 space-y-10 text-gray-800"
      >
        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-orange-600 border-b-2 pb-4">
          Create Your Hobby Group
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
              required
              placeholder="Dhaka, Bangladesh"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
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
              required
              placeholder="e.g., 10"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
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
              required
              placeholder="https://your-image-link.com"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />
          </div>

          {/* User Name */}
          <div>
            <label className="font-semibold mb-1 block">User Name</label>
            <input
              value={user.displayName}
              readOnly
              type="text"
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-600 border border-gray-300 cursor-not-allowed"
            />
          </div>

          {/* User Email */}
          <div>
            <label className="font-semibold mb-1 block">User Email</label>
            <input
              value={user.email}
              readOnly
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
            required
            rows={4}
            placeholder="Describe your group's purpose, activities, and benefits..."
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-semibold py-4 rounded-lg text-xl hover:bg-orange-600 transition transform hover:scale-105 cursor-pointer"
        >
          Create Group
        </button>
      </form>
    </div>
  );
};

export default CreateGroup;
