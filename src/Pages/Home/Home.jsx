import { Link, useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner.jsx";
import OngoingGroupCard from "../../components/OngoingGroupCard/OngoingGroupCard.jsx";
import { FaUserFriends, FaPlusCircle, FaHandshake } from "react-icons/fa";
import noDataFound from "../../assets/Animation/nodatafound.json";
import Lottie from "lottie-react";
import { useEffect } from "react";
import discus from "../../assets/Discussion-amico.png"

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

  const featuredGroup = ongoingGroups.slice(0, 8);

  useEffect(() => {
    document.title = "HobbyHub | Home";
  }, []);

  return (
    <div className="mb-10 lg:mb-20 xl:mb-28">
      <Banner />

      <section className="w-11/12 xl:w-10/12 2xl:w-8/12 mx-auto">
        <section className="mt-10 lg:mt-20 xl:mt-27">
          <h2 className="text-2xl text-orange-500 md:text-4xl text-center font-bold">
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
            <div className="flex flex-col justify-center items-center mt-10 lg:mt-20">
              <div className="flex justify-center items-center dark:bg-gray-900">
                <Lottie
                  animationData={noDataFound}
                  loop
                  autoplay
                  className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]"
                />
              </div>
              <div className="bg-white dark:bg-transparent shadow-lg dark:shadow-none rounded-xl p-6 md:p-10 lg:p-16 text-center max-w-5xl w-full">
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
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5 lg:mt-10">
              {featuredGroup.map((group) => (
                <OngoingGroupCard key={group._id} group={group} />
              ))}
            </div>
          )}
        </section>

       

        <section
          data-aos="fade-up"
          className="rounded-2xl mt-10 lg:mt-20 xl:mt-28 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div
            data-aos="fade-left"
            className="md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-orange-500 mb-4">
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

          <div className="w-[300px] md:w-[400px]">
           <img src={discus} alt="" />
          </div>
        </section>

         <section
          data-aos="fade-up"
          className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-10 mt-10 lg:mt-20 xl:mt-28"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-center text-orange-500 mb-12">
            Why Choose HobbyHub?
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-xl transition">
              <div className="bg-indigo-100 dark:bg-indigo-800 p-4 rounded-full mb-4 text-indigo-600 dark:text-indigo-300 text-4xl">
                <FaUserFriends />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
                Simple & Friendly
              </h3>
              <p className="text-sm md:text-lg text-gray-700 dark:text-gray-200">
                Effortless to use with an intuitive UI that makes connecting
                easy.
              </p>
            </div>

            <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-xl transition">
              <div className="bg-green-100 dark:bg-green-800 p-4 rounded-full mb-4 text-green-600 dark:text-green-300 text-4xl">
                <FaPlusCircle />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-green-700 dark:text-green-300 mb-2">
                Join or Create
              </h3>
              <p className="text-gray-700 dark:text-gray-200">
                Explore existing hobby groups or launch your own with ease.
              </p>
            </div>

            <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-xl transition">
              <div className="bg-purple-100 dark:bg-purple-800 p-4 rounded-full mb-4 text-purple-600 dark:text-purple-300 text-4xl">
                <FaHandshake />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-purple-700 dark:text-purple-300 mb-2">
                Real Community
              </h3>
              <p className="text-sm md:text-lg text-gray-700 dark:text-gray-200">
                Connect with real people nearby and enjoy hobbies together
                offline.
              </p>
            </div>
          </div>
        </section>

        <section  className="mt-10 lg:mt-20 xl:mt-28" data-aos="fade-up">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-orange-500">
              Top 10 Hobby Tips to Improve Your Lifestyle
            </h2>
            <ul className="text-left space-y-6 text-gray-700 dark:text-gray-300 text-lg list-decimal pl-6">
              <li data-aos="fade-left">
                <span className="font-semibold text-orange-500">
                  Start Small:
                </span>{" "}
                Don’t overwhelm yourself. Begin with 10–15 minutes a day to ease
                into your new hobby.
              </li>

              <li data-aos="fade-left">
                <span className="font-semibold text-orange-500">
                  Schedule Hobby Time:
                </span>{" "}
                Treat your hobby time like an appointment—block time on your
                calendar regularly.
              </li>

              <li data-aos="fade-left">
                <span className="font-semibold text-orange-500">
                  Explore Before You Commit:
                </span>{" "}
                Try a few different hobbies before choosing one you truly enjoy
                and can stick to.
              </li>

              <li data-aos="fade-left">
                <span className="font-semibold text-orange-500">
                  Invest in Good Tools:
                </span>{" "}
                Whether it's a brush, bike, or baking pan, good equipment makes
                the experience smoother and more enjoyable.
              </li>

              <li data-aos="fade-left">
                <span className="font-semibold text-orange-500">
                  Track Your Progress:
                </span>{" "}
                Keep a notebook, photo log, or blog to record your improvements
                and stay motivated.
              </li>

              <li data-aos="fade-left">
                <span className="font-semibold text-orange-500">
                  Find a Community:
                </span>{" "}
                Join groups—online or offline—to share experiences, ask
                questions, and stay encouraged.
              </li>

              <li data-aos="fade-left">
                <span className="font-semibold text-orange-500">
                  Learn from Others:
                </span>{" "}
                Follow YouTube channels, read blogs, or take short online
                courses related to your hobby.
              </li>

              <li data-aos="fade-left">
                <span className="font-semibold text-orange-500">
                  Celebrate Small Wins:
                </span>{" "}
                Every little improvement or completed project is worth
                celebrating—it builds confidence!
              </li>

              <li data-aos="fade-left">
                <span className="font-semibold text-orange-500">
                  Don’t Compare Yourself:
                </span>{" "}
                Focus on your journey. Everyone learns at a different pace—enjoy
                the process.
              </li>

              <li data-aos="fade-left">
                <span className="font-semibold text-orange-500">
                  Have Fun, Not Pressure:
                </span>{" "}
                Remember, hobbies are for joy and relaxation, not performance or
                perfection. Enjoy every moment!
              </li>
            </ul>
          </div>
        </section>

        <section
          data-aos="fade-up"
          className="bg-orange-500 dark:bg-orange-600 text-white py-16 px-4 md:px-10 mt-10 lg:mt-20 xl:mt-28 rounded-2xl"
        >
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              How HobbyHub Works
            </h2>
            <p className="text-white/90 dark:text-white/80 mb-12 text-lg max-w-2xl mx-auto">
              Getting started with HobbyHub is simple! Follow these three easy
              steps and start turning your hobbies into real connections.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div
                data-aos="flip-up"
                className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
              >
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                  1. Create an Account
                </h3>
                <p className="text-gray-700 dark:text-gray-200">
                  Create your profile with your favorite hobbies and start your
                  journey!
                </p>
              </div>
              <div
                data-aos="flip-up"
                className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
              >
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                  2. Browse Groups
                </h3>
                <p className="text-gray-700 dark:text-gray-200">
                  Discover a variety of hobby groups and find your perfect
                  match.
                </p>
              </div>
              <div
                data-aos="flip-up"
                className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
              >
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                  3. Join & Connect
                </h3>
                <p className="text-gray-700 dark:text-gray-200">
                  Meet people with shared interests, join meetups, and build
                  friendships.
                </p>
              </div>
            </div>

            <Link to="/createGroup">
              <button className="btn bg-white text-orange-500 font-semibold text-lg px-6 py-2 hover:bg-orange-100 transition duration-300">
                Create Groups Now
              </button>
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
