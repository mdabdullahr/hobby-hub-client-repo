import { Link, useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner.jsx";
import OngoingGroupCard from "../../components/OngoingGroupCard/OngoingGroupCard.jsx";

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
      <Banner></Banner>
      <section className="my-10 lg:my-20 w-11/12 lg:w-10/12 mx-auto min-h-screen">
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
                Currently, there are no active groups available. You can create
                a new group or explore other available groups.
              </p>
              <Link
                to="/allGroups" // 👈 Replace this with your actual target route
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

      <section className="bg-gray-100 py-12 px-4 text-center max-w-4xl mx-auto rounded-xl mb-12">
        <h3 className="text-2xl font-semibold mb-4">
          আমাদের কমিউনিটি ইভেন্টে অংশ নিন
        </h3>
        <p className="text-gray-700 max-w-xl mx-auto">
          ওয়ার্কশপ, মিটআপ ও সামাজিক অনুষ্ঠানগুলোতে অংশগ্রহণ করুন। এই
          অনুষ্ঠানগুলো নতুন বন্ধু তৈরির ও দক্ষতা বাড়ানোর জন্য আদর্শ।
        </p>
      </section>

      <section className="bg-white py-12 px-4 text-center max-w-4xl mx-auto rounded-xl shadow-lg mb-12">
        <h3 className="text-2xl font-semibold mb-4">নিজের গ্রুপ শুরু করুন</h3>
        <p className="text-gray-700 max-w-xl mx-auto">
          আপনার প্যাশন শেয়ার করতে চান? নিজে একটি গ্রুপ তৈরি করুন এবং অন্যদের
          আমন্ত্রণ জানান। আমরা আপনার কমিউনিটি পরিচালনা ও বৃদ্ধির জন্য প্রয়োজনীয়
          সব টুলস দিচ্ছি।
        </p>
      </section>
    </div>
  );
};

export default Home;
