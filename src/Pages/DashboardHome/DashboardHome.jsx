import { useContext, useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaComments,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const allGroupsCount = useLoaderData();
  const [allGroups, setAllGroups] = useState([]);
  const [myGroups, setMyGroups] = useState([]);

  useEffect(() => {
    fetch(`https://hobbyhub-11-server-site.vercel.app/groups`)
      .then((res) => res.json())
      .then((data) => setAllGroups(data));
  }, [allGroups]);

  useEffect(() => {
    fetch(
      `https://hobbyhub-11-server-site.vercel.app/my-groups?emailParams=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyGroups(data));
  }, [user?.email]);

  // Active groups count logic (startDate >= today)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const activeGroups = allGroups?.filter((group) => {
    const start = new Date(group.startDate);
    start.setHours(0, 0, 0, 0);
    return start >= today;
  });

  const nonActiveGroups = allGroups?.length - activeGroups?.length;

  return (
    <>
      <div>
        <h1 className="text-xl md:text-3xl font-bold mb-6 text-gray-500">
          Welcome Back!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6">
          {/* Total Groups */}
          <div className="bg-indigo-600 p-6 lg:p-10 rounded-lg shadow text-white">
            <h2 className="text-xl font-medium mb-4">Total Groups Available</h2>
            <p className="text-4xl lg:text-5xl font-bold">
              {allGroupsCount || 0}
              <span className="text-2xl font-medium ml-1">Groups</span>
            </p>
          </div>

          {/* My Groups */}
          <div className="bg-orange-400 p-6 lg:p-10 rounded-lg shadow text-white">
            <h2 className="text-xl font-medium mb-4">My Groups Available</h2>
            <p className="text-4xl lg:text-5xl font-bold">
              {myGroups?.length || 0}
              <span className="text-2xl font-medium ml-1">Groups</span>
            </p>
          </div>

          {/* Active Groups */}
          <div className="bg-blue-400 p-6 lg:p-10 rounded-lg shadow text-white">
            <h2 className="text-xl font-medium mb-4">Active Groups</h2>
            <p className="text-4xl lg:text-5xl font-bold">
              {activeGroups?.length || 0}
              <span className="text-2xl font-medium ml-1">Groups</span>
            </p>
          </div>

          {/* Active Groups */}
          <div className="bg-pink-500 p-6 lg:p-10 rounded-lg shadow text-white">
            <h2 className="text-xl font-medium mb-4">Non Active Groups</h2>
            <p className="text-4xl lg:text-5xl font-bold">
              {nonActiveGroups || 0}
              <span className="text-2xl font-medium ml-1">Groups</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-500">
          🔥 Popular Group Creation Tips
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition text-left">
            <div className="flex flex-col items-start space-y-4">
              <div className="bg-orange-100 text-orange-600 p-4 rounded-full inline-flex items-center justify-center">
                <FaUsers size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Know Your Audience
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3">
                Before creating a group, understand who you're targeting. Clear
                goals attract more active members.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition text-left">
            <div className="flex flex-col items-start space-y-4">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full inline-flex items-center justify-center">
                <FaLightbulb size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Offer Value
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3">
                Groups grow when members feel they gain something — be it
                knowledge, networking, or support.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition text-left">
            <div className="flex flex-col items-start space-y-4">
              <div className="bg-green-100 text-green-600 p-4 rounded-full inline-flex items-center justify-center">
                <FaCalendarAlt size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Stay Consistent
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3">
                Regular activities like meetings, posts, or updates keep the
                group alive and members engaged.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition text-left">
            <div className="flex flex-col items-start space-y-4">
              <div className="bg-purple-100 text-purple-600 p-4 rounded-full inline-flex items-center justify-center">
                <FaComments size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Encourage Interaction
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3">
                Ask questions, run polls, or give shoutouts. The more members
                engage, the stronger your group becomes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10  w-full h-[100vh] sm:h-[50vh] 2xl:h-[90vh] rounded-2xl overflow-hidden shadow-xl relative">
        {/* Top Half - Cover Background */}
        <div
          className="h-1/2 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/RTgnQvfj/Does-Joining-Support-Group-Work.jpg')",
          }}
        ></div>

        {/* Bottom Half - White Background */}
        <div className="h-1/2 bg-white pt-24  2xl:pt-42 px-6 md:px-12 2xl:px-26">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-600 text-center">
            My Profile!
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between mt-2 md:mt-10">
            <div>
              <p className="text-lg lg:text-xl font-medium text-gray-500 mt-1 mb-2 xl:mb-4">
                Full Name
              </p>
              <p className="text-lg lg:text-xl  font-semibold text-gray-800 mt-1">
                {user.displayName}
              </p>
            </div>
            <div>
              <p className="text-lg font-medium text-gray-500 mt-1 mb-2 xl:mb-4">
                Email
              </p>
              <p className="text-lg font-medium text-gray-800 mt-1">
                {user.email}
              </p>
            </div>
          </div>
          <div className="flex gap-6 mt-4">
            <i className="fab fa-dribbble text-pink-500 text-xl"></i>
            <i className="fab fa-twitter text-blue-500 text-xl"></i>
            <i className="fab fa-pinterest text-red-500 text-xl"></i>
          </div>
        </div>

        {/* Profile Image - Center Overlapping */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-32 h-32 md:w-42 md:h-42 2xl:w-62 2xl:h-62 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
