import { useContext, useEffect, useState } from "react";
import { MdGroups } from "react-icons/md";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const GroupDetail = () => {
  const detail = useLoaderData();
  const {
    _id,
    groupName,
    hobbyCategory,
    description,
    meetingLocation,
    imageUrl,
    maxMembers,
    startDate,
    name,
    email,
    members = [],
  } = detail;

  const { user } = useContext(AuthContext);
  const [isJoining, setIsJoining] = useState(false);
  const [currentMembers, setCurrentMembers] = useState(members);
  

  const isAlreadyMember = user && currentMembers.includes(user.email);

  const now = new Date();
  const groupStartDate = new Date(startDate);
  const isGroupActive = groupStartDate >= now;

  const handleJoin = async () => {
    setIsJoining(true);
    try {
      const res = await fetch(
        `https://hobbyhub-11-server-site.vercel.app/groups/${_id}/join`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: user.email }),
        }
      );

      const data = await res.json();

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Joined!",
          text: "Successfully joined the group!",
          timer: 2000,
          showConfirmButton: false,
        });
        setCurrentMembers((prev) => [...prev, user.email]);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: data.reason || "Failed to join the group.",
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong.",
      });
    } finally {
      setIsJoining(false);
    }
  };

  useEffect(() => {
    document.title = `HobbyHub | Group-Detail-${_id}`;
  }, [_id]);

  return (
    <div
      data-aos="fade-up"
      className="py-32 lg:py-52 w-11/12 xl:w-10/12 2xl:w-8/12 mx-auto  "
    >
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div data-aos="fade-right"
         className="flex-1">
        <img
          className="w-full h-full md:h-[400px] object-cover rounded-2xl"
          src={imageUrl}
          alt="group"
        />
      </div>
      <div
        data-aos="fade-left"
        className="flex-1 w-full text-gray-800 dark:text-gray-400 space-y-5"
      >
        <h3 className="text-xl text-orange-500 md:text-3xl lg:text-4xl  font-bold">
          {groupName}
        </h3>

        <table className="w-full text-left border-separate border-spacing-y-2">
          <tbody>
            <tr className="text-sm lg:text-lg">
              <td className="font-semibold text-gray-700 dark:text-gray-300">
                Category
              </td>
              <td className="text-gray-600 dark:text-gray-200">
                : {hobbyCategory}
              </td>
            </tr>
            <tr className="text-sm lg:text-lg">
              <td className="font-semibold text-gray-700 dark:text-gray-300">
                Meeting Location
              </td>
              <td className="text-gray-600 dark:text-gray-200">
                : {meetingLocation}
              </td>
            </tr>
            <tr className="text-sm lg:text-lg">
              <td className="font-semibold text-gray-700 dark:text-gray-300">
                Max Member
              </td>
              <td className="text-gray-600 dark:text-gray-200">
                : {maxMembers}
              </td>
            </tr>
            <tr className="text-sm lg:text-lg ">
              <td className="font-semibold text-gray-700 dark:text-gray-300 hidden lg:table-cell">
                Join Member
              </td>
              <td className="text-gray-600 dark:text-gray-200 hidden lg:table-cell">
                : {members.length}
              </td>
            </tr>
            <tr className="text-sm lg:text-lg">
              <td className="font-semibold text-gray-700 dark:text-gray-300">
                Meeting Start Date
              </td>
              <td className="text-gray-600 dark:text-gray-200">
                : {startDate}
              </td>
            </tr>
           
            
            <tr className="text-sm lg:text-lg ">
              <td className="font-semibold text-gray-700 dark:text-gray-300 hidden lg:table-cell">
                Organizer Name
              </td>
              <td className="text-gray-600 dark:text-gray-200 hidden lg:table-cell">
                : {name}
              </td>
            </tr>
            
            <tr className="text-sm lg:text-lg">
              <td className="font-semibold text-gray-700 dark:text-gray-300 hidden lg:table-cell">
                Organizer Email
              </td>
              <td className="text-gray-600 dark:text-gray-200 hidden lg:table-cell">
                : {email}
              </td>
            </tr>
          </tbody>
        </table>

        
      </div>
      
      </div>
      <p className="text-gray-600 dark:text-gray-200 text-sm lg:text-lg  overflow-y-auto mt-5 lg:mt-10">
          <strong>Description :</strong> {description}
        </p>
        {!isGroupActive ? (
          <p className="mt-5 text-red-600 font-semibold text-lg">
            This group is no longer active.
          </p>
        ) : (
          <button
            onClick={handleJoin}
            disabled={
              isAlreadyMember ||
              isJoining ||
              currentMembers.length >= Number(maxMembers)
            }
            className={`cursor-pointer text-xl py-2 lg:py-3 px-5 lg:px-10 mt-5 rounded-md specific-text transition-transform duration-500 ${
              isAlreadyMember || currentMembers.length >= Number(maxMembers)
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-orange-500 text-white hover:bg-orange-600"
            }`}
            title={
              isAlreadyMember
                ? "You have already joined"
                : currentMembers.length >= Number(maxMembers)
                ? "Group is full"
                : ""
            }
          >
            {isAlreadyMember
              ? "Already Joined"
              : isJoining
              ? "Joining..."
              : currentMembers.length >= Number(maxMembers)
              ? "Group Full"
              : "Join Group"}
          </button>
        )}
    </div>
  );
};

export default GroupDetail;
