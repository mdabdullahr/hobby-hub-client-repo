import { useContext, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
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
    fetch("http://localhost:3000/groups", {
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
        className="space-y-6 text-gray-800 p-5 md:p-10 lg:p-16"
      >
        {/* Add typewriter */}
        <p className="text-center text-lg md:text-xl font-medium mb-2 text-orange-600">
          <Typewriter
            words={[
              "Your passion, your group",
              "Start something new",
              "Create a community",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        <h2 className=" mb-10 text-3xl lg:text-4xl font-bold text-gray-600 border-b border-gray-300 pb-2 specific-text">
          Create Group
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Group Name */}
          <div className="w-full">
            <label className="block mb-1 font-semibold" htmlFor="groupName">
              Group Name <span className="text-red-500">*</span>
            </label>
            <input
              id="groupName"
              name="groupName"
              type="text"
              required
              className="w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
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
              className="w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
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
              className="w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
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
              className="w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
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
              className="w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
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
              className="w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
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
              className="w-full rounded-lg border border-gray-300 shadow-sm p-3 bg-gray-100 cursor-not-allowed"
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
              className="w-full rounded-lg border border-gray-300 shadow-sm p-3 bg-gray-100 cursor-not-allowed"
            />
          </div>
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
            className="w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
            placeholder="Write a brief description"
          />
        </div>

        {/* Create Button */}
        <button
          type="submit"
          className="w-full cursor-pointer bg-white border border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white font-medium py-4 rounded-lg text-xl shadow-lg"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateGroup;
