import Lottie from "lottie-react";
import { useContext, useEffect, useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import noDataFound from "../../assets/Animation/nodatafound.json";

const MyGroups = () => {
  const [myGroups, setMyGroups] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `https://hobbyhub-11-server-site.vercel.app/my-groups?emailParams=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyGroups(data));
  }, [user?.email]);

  const removeGroupFromDB = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://hobbyhub-11-server-site.vercel.app/groups/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = myGroups.filter((mg) => mg._id !== _id);
              setMyGroups(remaining);
            }
          });
      }
    });
  };

  useEffect(() => {
    document.title = "HobbyHub | My-Groups";
  }, []);

  return (
    <div>
      <div data-aos="fade-left">
        <h2
          className="text-3xl lg:text-4xl font-bold text-center text-orange-600 pb-4
        "
        >
          Your Created Group
        </h2>
        <p className=" text-gray-500 text-sm md:text-lg lg:text-xl mb-6 lg:mb-10 mt-2">
          On this page you will be able to see all your created groups and take
          action. You will be able to see the details of your group, if you need
          to update the group then you can update it by clicking on the update
          button and if you need to delete the group then you can delete it by
          clicking on the delete button
        </p>
      </div>
      <div data-aos="fade-up" className="overflow-x-auto rounded-lg">
        {myGroups.length ? (
          <table className="w-full text-left rounded-lg overflow-hidden shadow-md bg-white">
            {/* head */}
            <thead className="bg-gray-200 text-gray-700 text-sm md:text-base lg:text-lg uppercase">
              <tr>
                <th className="px-4 py-3">No.</th>
                <th className="px-4 py-3">Group Name</th>
                <th className="px-4 py-3">Start Date</th>
                <th className="px-4 py-3">Admin</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {myGroups.map((group, index) => (
                <tr
                  key={group._id}
                  className="border-b hover:bg-orange-50 transition-colors duration-200"
                >
                  <td className="px-4 py-3 text-xs md:text-sm lg:text-base font-medium text-gray-600">
                    {index + 1}
                  </td>

                  <td className="px-4 py-3 flex items-center gap-4">
                    <div>
                      <img
                        className="w-12 h-12 object-cover rounded-lg"
                        src={group.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-sm md:text-base text-gray-800">
                        {group.groupName}
                      </span>
                      <span className="text-xs text-gray-500">
                        {group.hobbyCategory}
                      </span>
                    </div>
                  </td>

                  <td className="px-4 py-3 text-sm text-gray-700">
                    {group.startDate}
                  </td>

                  <td className="px-4 py-3 text-sm text-gray-700">
                    {group.name}
                  </td>

                  <td className="px-4 py-3 text-sm text-gray-700">
                    {group.email}
                  </td>

                  <td className="px-4 py-3 text-sm text-gray-700">
                    {group.meetingLocation}
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex justify-center gap-3">
                      <Link to={`/groupDetail/${group._id}`}>
                        <button className="p-2 bg-cyan-100 text-cyan-600 rounded-full hover:bg-cyan-200 transition cursor-pointer">
                          <BsFillInfoCircleFill size={18} />
                        </button>
                      </Link>

                      <Link to={`/dashboard/updateGroup/${group._id}`}>
                        <button className="p-2 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition cursor-pointer">
                          <FaPen size={18} />
                        </button>
                      </Link>

                      <button
                        onClick={() => removeGroupFromDB(group._id)}
                        className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition cursor-pointer"
                      >
                        <MdDelete size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>
            <div data-aos="fade-up" className="p-10 lg:p-20 space-y-5">
              <h2 className="text-center font-bold text-2xl md:text-5xl specific-text text-orange-500">
                Oops...!
              </h2>
              {/* Typewriter */}
              <p className="text-center font-semibold text-lg lg:text-2xl text-gray-600 dark:text-gray-400">
                <Typewriter
                  words={["Right now your no group Available here...!"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Lottie
                animationData={noDataFound}
                loop
                autoplay
                className="w-[300px] h-[300px]"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyGroups;
