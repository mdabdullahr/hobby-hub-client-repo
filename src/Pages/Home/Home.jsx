import { Link, useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner.jsx";
import OngoingGroupCard from "../../components/OngoingGroupCard/OngoingGroupCard.jsx";
import { FaUserFriends, FaPlusCircle, FaHandshake } from "react-icons/fa";
import communityImage from "../../assets/Animation/mitup.json"
import Lottie from "lottie-react";

const Home = () => {
  const data = useLoaderData();
  const today = new Date();
  const todayDateOnly = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const ongoingGroups = data.filter((group) => {
    const groupDate = new Date(group.startDate);
    return groupDate >= todayDateOnly;
  });

  const featuredGroup = ongoingGroups.slice(0, 6);

  return (
    <div className="mb-10">
      <Banner />

      <section className="w-11/12 xl:w-10/12 2xl:w-8/12 mx-auto">
        <section data-aos="fade-up" className="my-10 lg:my-20">
          <h2 className="text-2xl text-orange-500 md:text-4xl lg:text-5xl specific-text text-center font-bold">
            Featured Groups
          </h2>
          <p className="text-center text-sm md:text-lg lg:text-xl mt-5 text-gray-600 dark:text-gray-400 max-w-7xl mx-auto">
            Featured Groups are handpicked ongoing hobby or interest groups from
            our platform, specially curated for you. Here, you’ll find active
            members collaborating, making new friends, and growing their skills
            together. These groups represent the heart and enthusiasm of our
            community. Join your favorite group now to learn something new and
            have fun!
          </p>

          {ongoingGroups.length === 0 ? (
            <div className="flex justify-center items-center mt-10 lg:mt-20">
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 md:p-10 lg:p-16 text-center max-w-5xl w-full">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-white mb-3">
                  No Ongoing Groups Found
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-5 text-xs md:text-lg lg:text-xl">
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
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 my-10 lg:my-20">
              {featuredGroup.map((group) => (
                <OngoingGroupCard key={group._id} group={group} />
              ))}
            </div>
          )}
        </section>

        <section
          data-aos="fade-up"
          className="max-w-7xl mx-auto  rounded-2xl  px-8  py-12 mb-10 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div data-aos="fade-left" className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-600 dark:text-white mb-4">
              Turn Hobbies Into Real Friendships
            </h2>
            <p className="text-sm md:text-lg text-gray-500 dark:text-gray-400 mb-6">
              Join a thriving community of people who share your interests.
              Whether you're into photography, hiking, reading, or cooking —
              HobbyHub helps you find the perfect group to connect, learn, and
              grow together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/allGroups">
                <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition shadow-md cursor-pointer">
                  Explore Groups
                </button>
              </Link>
              <Link to="/createGroup">
                <button className="border-2 border-orange-500 text-orange-500 dark:text-orange-300 px-6 py-3 rounded-md hover:bg-orange-100 dark:hover:bg-gray-700 transition shadow-md cursor-pointer">
                  Start a New Group
                </button>
              </Link>
            </div>
          </div>

          <div className="rounded">
            <Lottie
                animationData={communityImage}
                loop
                autoplay
                style={{ height: 400, width: 400 }}
              />
          </div>
        </section>

        <section
          data-aos="fade-up"
          className="max-w-7xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-10 my-20"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-600 dark:text-white mb-12">
            Why Choose HobbyHub?
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-xl transition">
              <div className="bg-indigo-100 dark:bg-indigo-800 p-4 rounded-full mb-4 text-indigo-600 dark:text-indigo-300 text-4xl">
                <FaUserFriends />
              </div>
              <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
                Simple & Friendly
              </h3>
              <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400">
                Effortless to use with an intuitive UI that makes connecting
                easy.
              </p>
            </div>

            <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-xl transition">
              <div className="bg-green-100 dark:bg-green-800 p-4 rounded-full mb-4 text-green-600 dark:text-green-300 text-4xl">
                <FaPlusCircle />
              </div>
              <h3 className="text-sm md:text-lg text-xl font-semibold text-green-700 dark:text-green-300 mb-2">
                Join or Create
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Explore existing hobby groups or launch your own with ease.
              </p>
            </div>

            <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-xl transition">
              <div className="bg-purple-100 dark:bg-purple-800 p-4 rounded-full mb-4 text-purple-600 dark:text-purple-300 text-4xl">
                <FaHandshake />
              </div>
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-2">
                Real Community
              </h3>
              <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400">
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
