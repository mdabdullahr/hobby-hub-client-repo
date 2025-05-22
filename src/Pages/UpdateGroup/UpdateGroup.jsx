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
        backgroundImage: `url('https://i.ibb.co/qMQF3MBw/cartoon-group.jpg')`, // scenic bg
      }}
    >
      <div className="mt-24 w-11/12 lg:w-10/12">
        <form
          data-aos="zoom-in"
          onSubmit={handleUpdateGroup}
          className="max-w-6xl space-y-6 text-secondary shadow-2xl p-5 md:p-10 lg:p-16 rounded-2xl transition-transform duration-500 hover:scale-105"
        >
          <h2 className="text-center mb-10 text-2xl md:text-4xl specific-text font-bold text-orange-500">
            Update Group
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Group Name */}
            <div>
              <label className="font-semibold mb-1">Group Name</label>
              <input
                id="groupName"
                name="groupName"
                type="text"
                defaultValue={groupName}
                className="w-full rounded-md p-2  bg-white  focus:outline-none"
                placeholder="Enter group name"
              />
            </div>

            {/* Hobby Category */}
            <div>
              <label className="mb-1 font-semibold">Hobby Category</label>
              <select
                id="hobbyCategory"
                name="hobbyCategory"
                defaultValue={hobbyCategory}
                className="w-full rounded-md p-2  bg-white  focus:outline-none"
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
              <label className="mb-1 font-semibold">Meeting Location</label>
              <input
                id="meetingLocation"
                name="meetingLocation"
                type="text"
                defaultValue={meetingLocation}
                className="w-full rounded-md p-2  bg-white  focus:outline-none"
                placeholder="Enter meeting location"
              />
            </div>

            {/* Max Members */}
            <div>
              <label className="mb-1 font-semibold">Max Members</label>
              <input
                id="maxMembers"
                name="maxMembers"
                type="number"
                min="1"
                defaultValue={maxMembers}
                className="w-full rounded-md p-2  bg-white  focus:outline-none"
                placeholder="Enter max members"
              />
            </div>

            {/* Start Date */}
            <div>
              <label className="mb-1 font-semibold">Start Date</label>
              <input
                id="startDate"
                name="startDate"
                type="date"
                defaultValue={startDate}
                className="w-full rounded-md p-2  bg-white  focus:outline-none"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className=" mb-1 font-semibold">Image URL</label>
              <input
                defaultValue={imageUrl}
                id="imageUrl"
                name="imageUrl"
                type="url"
                placeholder="image URL"
                className="w-full rounded-md p-2  bg-white  focus:outline-none"
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
                className="w-full rounded-md p-2  bg-white  focus:outline-none"
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
                className="w-full rounded-md p-2  bg-white  focus:outline-none"
              />
            </div>
          </div>
          {/* Description */}
          <div>
            <label className="mb-1 font-semibold">Description</label>
            <textarea
              id="description"
              name="description"
              defaultValue={description}
              rows={4}
              className="w-full rounded-md p-2  bg-white  focus:outline-none"
              placeholder="Write a brief description"
            />
          </div>

          {/* Create Button */}
          <button
            data-aos="zoom-in"
            type="submit"
            className="w-full cursor-pointer bg-transparent border-4 border-white shadow hover:bg-orange-600 hover:text-white text-orange-600 font-semibold py-3 rounded-md text-2xl specific-text transition-transform duration-500 hover:scale-105"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateGroup;
