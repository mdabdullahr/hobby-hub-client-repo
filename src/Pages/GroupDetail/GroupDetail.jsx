import { useContext, useEffect, useState } from "react";
import { MdGroups } from "react-icons/md";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import details from "../../assets/Animation/details.json"
import Lottie from "lottie-react";

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
  const [isDark, setIsDark] = useState(false);

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

    useEffect(() => {
    document.title = `HobbyHub | Group-Detail-${_id}`;
  }, [_id]);


  return (
    <div
      className={`bg-cover bg-center p-4 md:p-6 ${
        isDark
        ? "bg-[url('https://i.ibb.co/PvCCp2vL/istockphoto-1294603953-612x612.jpg')]"
        : "bg-[url('https://i.ibb.co/yBXDgJkm/mugic.jpg')]"
      }`}
    >
      <div data-aos="fade-up" className="my-24 w-full max-w-7xl mx-auto ">
        <div className="overflow-x-auto backdrop-blur-3xl rounded-xl shadow-md shadow-gray-">
          <img
            className="w-full h-full md:h-[400px] bg-cover"
            src={imageUrl}
            alt="group"
          />
          <div data-aos="fade-left" className="p-10 text-gray-800 dark:text-gray-400 space-y-5">
              
              <h2 className="text-2xl lg:text-4xl font-bold flex items-center gap-2 text-orange-500">
              <MdGroups className="border border-orange-500 rounded-full"></MdGroups> {groupName}
            </h2>
            <div className="flex sm:flex-col md:flex-row sm:justify-around items-center">
              <div className=" justify-center items-center hidden md:block">
                <Lottie
                  animationData={details}
                  loop
                  autoplay
                  className="md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px]"
                />
              </div>
              <div className="space-y-4">
              
            <h5 className="txt-lg lg:text-2xl">
              <strong>Category :</strong> {hobbyCategory}
            </h5>
            <p className="text-sm lg:text-xl">
              <strong>Meeting Location :</strong> {meetingLocation}
            </p>
            <p className="text-sm lg:text-xl">
              <strong>Maximum Members :</strong> {maxMembers}
            </p>
            <p className="text-sm lg:text-xl">
              <strong>Start Date :</strong> {startDate}
            </p>
            <p className="text-sm lg:text-xl">
              <strong>Created By :</strong> {name}
            </p>
            <p className="text-sm lg:text-xl">
              <strong>Admin Email :</strong> {email}
            </p>
            </div>

            </div>
            <p className="text-sm lg:text-xl">
              <strong className="underline">Description :</strong> {description}
            </p>

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
        </div>
      </div>
    </div>
  );
};

export default GroupDetail;
