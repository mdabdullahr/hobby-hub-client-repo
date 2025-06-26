import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import noDataFound from "../../assets/Animation/nodatafound.json";
import OngoingGroupCard from "../../components/OngoingGroupCard/OngoingGroupCard";

const AllGroups = () => {
  // const groups = useLoaderData();
  const [search, setSearch] = useState("");
  const [groups, setGroups] = useState([]);
  const [sortOrder, setSortOrder] = useState("")
  const [loading, setLoading] = useState(true);
  console.log(search);
  useEffect(() => {
    fetch(`http://localhost:3000/groups?search=${search}&sort=${sortOrder}`)
      .then((res) => res.json())
      .then((data) => setGroups(data));
      setLoading(false);
  }, [search, sortOrder]);

  useEffect(() => {
    document.title = "HobbyHub | All-Groups";
  }, []);

  if(loading){
    return <div className="flex justify-center items-center min-h-screen">
  <div className="animate-spin rounded-full h-16 w-16 border-4 border-orange-500 border-t-transparent"></div>
</div>
  }

  return (
    <div className="pt-24 lg:pt-32 px-5 w-11/12 xl:w-10/12 2xl:w-9/12 mx-auto">
      <h2
        data-aos="zoom-in"
        className="text-2xl md:text-4xl text-orange-500 font-bold"
      >
        ALL Groups
      </h2>
      <p className=" text-gray-500 text-sm md:text-lg lg:text-xl mb-6 lg:mb-10 mt-2">
        On this page, you will be able to explore all the groups created by
        different users. You can view group details and learn more about each
        group’s purpose and members. Please note that you cannot update or
        delete any groups from this section, as it is for informational purposes
        only.
      </p>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="shadow h-[200px] rounded-lg w-full lg:w-[25%] p-10 bg-white dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">
            Search & Sort
          </h2>

          {/* Search Field */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="🔍  Search by title, group, or location..."
              className="input input-bordered w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Sort Dropdown */}
          <div>
            <select className="select select-bordered w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}>
              <option disabled selected>
                Sort by Date
              </option>
              <option value="newest">Newest to Oldest</option>
              <option value="oldest">Oldest to Newest</option>
            </select>
          </div>
        </div>
        <div data-aos="fade-up" className="w-full lg:w-[75%]">
          {groups.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
              {groups.map((group) => (
                <OngoingGroupCard
                  key={group._id}
                  group={group}
                ></OngoingGroupCard>
              ))}
            </div>
          ) : (
            <div>
               <div
                data-aos="fade-up"
              >
                <h2 className="text-center font-bold text-2xl md:text-5xl specific-text text-orange-500">
                  Oops...!
                </h2>
                {/* Typewriter */}
                <p className="text-center font-semibold text-lg lg:text-2xl text-gray-600 dark:text-gray-400">
                  <Typewriter
                    words={[
                      "Right now no group Available here...!",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </p>
                
              </div>
              <div className="flex justify-center items-center dark:bg-gray-900">
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
    </div>
  );
};

export default AllGroups;
