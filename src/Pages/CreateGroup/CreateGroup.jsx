import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { Typewriter } from "react-simple-typewriter";

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
  const [isDark, setIsDark] = useState(false);

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
        }
      });
  };

  useEffect(() => {
    const classList = document.documentElement.classList;
    setIsDark(classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDark(classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);
  return (
    <div
      className={`min-h-screen bg-cover bg-center flex items-center justify-center ${
        isDark
          ? "bg-[url('https://i.ibb.co/PvPbJjMy/businessman-hand-pointing-something-touching-touch-screen-black-background-copy-space-34683-2391.jpg')]"
          : "bg-[url('https://i.ibb.co/qMQF3MBw/cartoon-group.jpg')]"
      }`}
    >
      <div className="my-24 w-11/12 lg:w-10/12">
        <form
          data-aos="zoom-in"
          onSubmit={handleCreateGroup}
          className="max-w-6xl space-y-6 text-gray-600 dark:text-gray-400 shadow-2xl p-5 md:p-10 lg:p-16 transition-transform duration-500 hover:scale-105 rounded-2xl dark:bg-gray-900"
        >
          {/* Add typewriter */}
          <p className="text-center text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium mb-2">
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

          <h2 className="text-center mb-10 text-2xl md:text-4xl specific-text font-bold text-orange-500">
            Create Group
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                className="w-full rounded-md p-2  bg-white dark:bg-gray-800 focus:outline-none"
                placeholder="Enter group name"
              />
            </div>

            {/* Hobby Category */}
            <div>
              <label
                className="block mb-1 font-semibold"
                htmlFor="hobbyCategory"
              >
                Hobby Category
              </label>
              <select
                id="hobbyCategory"
                name="hobbyCategory"
                className="w-full rounded-md p-2  bg-white dark:bg-gray-800 focus:outline-none"
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
                className="w-full rounded-md p-2 bg-white dark:bg-gray-800  focus:outline-none"
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
                className="w-full rounded-md p-2 bg-white dark:bg-gray-800 focus:outline-none"
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
                className="w-full rounded-md p-2 bg-white dark:bg-gray-800 focus:outline-none"
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
                className="w-full rounded-md p-2 bg-white dark:bg-gray-800 focus:outline-none"
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
                className="w-full rounded-md p-2 bg-white dark:bg-gray-800  focus:outline-none"
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
                className="w-full rounded-md p-2 bg-white dark:bg-gray-800  focus:outline-none"
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
              className="w-full rounded-md p-2  bg-white dark:bg-gray-800 focus:outline-none"
              placeholder="Write a brief description"
            />
          </div>

          {/* Create Button */}
          <button
            type="submit"
            data-aos="zoom-in"
            className="w-full cursor-pointer bg-transparent border-4 border-white shadow hover:bg-orange-600 hover:text-white text-orange-600 font-semibold py-3 rounded-md text-2xl specific-text transition-transform duration-500 hover:scale-105"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateGroup;
