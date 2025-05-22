import { Link, useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner.jsx";
import OngoingGroupCard from "../../components/OngoingGroupCard/OngoingGroupCard.jsx";
import { FaUserFriends, FaPlusCircle, FaHandshake } from "react-icons/fa";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  const today = new Date();
  const todayDateOnly = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const ongoingGroups = data.filter((group) => {
    const groupDate = new Date(group.startDate);
    console.log(groupDate);
    return groupDate >= todayDateOnly;
  });

  const featuredGroup = ongoingGroups.slice(0, 6);
  console.log("featured ongoing group", featuredGroup);
  return (
    <div className="mb-10">
      {/* Banner */}
      <Banner></Banner>

      <section className="w-11/12 lg:w-10/12 mx-auto">
        {/* Featured Group */}
        <section className="my-10 lg:my-20 ">
          <h2 className="text-2xl text-orange-500 md:text-4xl lg:text-5xl specific-text text-center font-bold">
            Featured Groups
          </h2>
          <p className="text-center text-sm md:text-lg lg:text-xl mt-5 text-gray-600 max-w-7xl mx-auto">
            Featured Groups are handpicked ongoing hobby or interest groups from
            our platform, specially curated for you. Here, you’ll find active
            members collaborating, making new friends, and growing their skills
            together. These groups represent the heart and enthusiasm of our
            community. Join your favorite group now to learn something new and
            have fun!
          </p>
          {ongoingGroups.length === 0 ? (
            <div className="flex justify-center items-center mt-10 lg:mt-20">
              <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 lg:p-16 text-center max-w-5xl w-full">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 mb-3">
                  No Ongoing Groups Found
                </h3>
                <p className="text-gray-500 mb-5 text-xs md:text-lg lg:text-xl">
                  Currently, there are no active groups available. You can
                  create a new group or explore other available groups.
                </p>
                <Link
                  to="/allGroups"
                  className="inline-block text-xs md:text-lg lg:text-xl bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition duration-200"
                >
                  Browse Groups
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 lg:my-20">
              {ongoingGroups.map((group) => (
                <OngoingGroupCard
                  key={group._id}
                  group={group}
                ></OngoingGroupCard>
              ))}
            </div>
          )}
        </section>

        {/* Extra static section 1 */}
        <section className="max-w-7xl mx-auto bg-gradient-to-br from-orange-100 to-white rounded-2xl shadow-md px-8 py-12 mb-10 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-600 mb-4">
              Turn Hobbies Into Real Friendships
            </h2>
            <p className="text-lg text-gray-500 mb-6">
              Join a thriving community of people who share your interests.
              Whether you're into photography, hiking, reading, or cooking —
              HobbyHub helps you find the perfect group to connect, learn, and
              grow together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/allGroups">
                <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition shadow-md">
                  Explore Groups
                </button>
              </Link>
              <Link to="/createGroup">
                <button className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-md hover:bg-orange-100 transition shadow-md">
                  Start a New Group
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side Illustration */}
          <div className="md:w-1/2">
            <img
              src="https://i.ibb.co/DDRQyQ1N/grouping-removebg-preview.png"
              alt="Connect Through Hobbies"
              className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] mx-auto rounded-2xl"
            />
          </div>
        </section>

        {/* Extra static section 2 */}
        <section className="max-w-7xl mx-auto bg-white shadow-xl rounded-2xl p-10 mt-20">
          <h2 className="text-4xl font-bold text-center text-gray-600 mb-12">
            Why Choose HobbyHub?
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center bg-gray-50 rounded-xl p-6 hover:shadow-xl transition">
              <div className="bg-indigo-100 p-4 rounded-full mb-4 text-indigo-600 text-4xl">
                <FaUserFriends />
              </div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                Simple & Friendly
              </h3>
              <p className="text-gray-600">
                Effortless to use with an intuitive UI that makes connecting
                easy.
              </p>
            </div>

            <div className="flex flex-col items-center bg-gray-50 rounded-xl p-6 hover:shadow-xl transition">
              <div className="bg-green-100 p-4 rounded-full mb-4 text-green-600 text-4xl">
                <FaPlusCircle />
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Join or Create
              </h3>
              <p className="text-gray-600">
                Explore existing hobby groups or launch your own with ease.
              </p>
            </div>

            <div className="flex flex-col items-center bg-gray-50 rounded-xl p-6 hover:shadow-xl transition">
              <div className="bg-purple-100 p-4 rounded-full mb-4 text-purple-600 text-4xl">
                <FaHandshake />
              </div>
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                Real Community
              </h3>
              <p className="text-gray-600">
                Connect with real people nearby and enjoy hobbies together
                offline.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
