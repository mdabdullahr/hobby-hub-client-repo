import { useContext, useState } from "react";
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

  // Start date চেক: যদি আজকের তারিখ startDate এর পরে হয়, গ্রুপ ইনঅ্যাকটিভ
  const now = new Date();
  const groupStartDate = new Date(startDate);
  const isGroupActive = groupStartDate >= now;

  const handleJoin = async () => {
    setIsJoining(true);
    try {
      const res = await fetch(`http://localhost:3000/groups/${_id}/join`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.email }),
      });

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

  return (
    <div
      className="min-h-screen bg-cover bg-center p-4 md:p-6"
      style={{
        backgroundImage: "url('https://i.ibb.co/yBXDgJkm/mugic.jpg')",
      }}
    >
      <div className="mt-24 w-full max-w-7xl mx-auto">
        <div className="overflow-x-auto backdrop-blur-3xl rounded-xl shadow-md">
          <img
            className="w-full h-full md:h-[400px] bg-cover"
            src={imageUrl}
            alt="group"
          />
          <div className="p-10 text-secondary space-y-5">
            <h2 className="text-2xl lg:text-4xl font-bold flex items-center gap-2">
              <MdGroups className="border rounded-full" /> {groupName}
            </h2>
            <h5 className="txt-lg lg:text-2xl">
              <strong>Category:</strong> {hobbyCategory}
            </h5>
            <p className="text-sm lg:text-xl">
              <strong>Meeting Location:</strong> {meetingLocation}
            </p>
            <p className="text-sm lg:text-xl">
              <strong>Maximum Members:</strong> {maxMembers}
            </p>
            <p className="text-sm lg:text-xl">
              <strong>Start Date:</strong> {startDate}
            </p>
            <p className="text-sm lg:text-xl">
              <strong>Created By:</strong> {name}
            </p>
            <p className="text-sm lg:text-xl">
              <strong>Admin Email:</strong> {email}
            </p>
            <p className="text-sm lg:text-xl">
              <strong>Description:</strong> {description}
            </p>

            {/* যদি গ্রুপ start date পাস হয়ে যায়, তখন বাটনের জায়গায় মেসেজ দেখাবে */}
            {!isGroupActive ? (
              <p className="text-center text-red-600 font-semibold text-lg">
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
                className={`w-full cursor-pointer border-4 border-white shadow text-xl py-3 rounded-md specific-text transition-transform duration-500 ${
                  isAlreadyMember || currentMembers.length >= Number(maxMembers)
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-transparent hover:bg-orange-600 hover:text-white text-orange-600"
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
        </div>
      </div>
    </div>
  );
};

export default GroupDetail;
