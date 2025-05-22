import React from "react";
import { Link, useLoaderData } from "react-router";

const AllGroups = () => {
  const groups = useLoaderData();

  return (
    <div
      className=" bg-cover bg-center p-4 md:p-6"
      style={{
        backgroundImage: "url('https://i.ibb.co/4ZG779SZ/paingting.jpg')",
      }}
    >
      <div className="mt-24 w-full max-w-7xl mx-auto mb-20">
        <h2 data-aos="zoom-in" className="text-2xl md:text-4xl lg:text-5xl text-orange-500 font-bold text-center specific-text">
          ALL Groups
        </h2>
        <p className="text-center text-gray-500 text-sm md:text-lg lg:text-xl mb-6 lg:mb-10 mt-2 px-0 lg:px-20">
          On this page, you will be able to explore all the groups created by
          different users. You can view group details and learn more about each
          group’s purpose and members. Please note that you cannot update or
          delete any groups from this section, as it is for informational
          purposes only.
        </p>

        <div data-aos="fade-up" className="overflow-x-auto rounded-xl shadow-2xl">
          {groups.length ? (
            <div  className="overflow-x-auto rounded-xl shadow-md">
              <table className="table w-full text-center md:text-left">
                {/* head */}
                <thead className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  <tr>
                    <th className="text-sm md:text-base lg:text-lg">No.</th>
                    <th className="text-sm md:text-base lg:text-lg">
                      Group Name
                    </th>
                    <th className="text-sm md:text-base lg:text-lg">Admin</th>
                    <th className="text-sm md:text-base lg:text-lg">Email</th>
                    <th className="text-sm md:text-base lg:text-lg">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {groups.map((group, index) => (
                    <tr
                      className="hover:bg-gray-100 transition-all duration-200"
                      key={group._id}
                    >
                      <td className="text-xs md:text-sm lg:text-base font-semibold">
                        {index + 1}
                      </td>
                      <td>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-3">
                          <div>
                            <div className="font-bold text-sm md:text-lg text-gray-500">
                              {group.groupName}
                            </div>
                            <div className="text-xs md:text-sm text-gray-500">
                              {group.hobbyCategory}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-xs md:text-sm lg:text-base">
                        {group.name}
                      </td>
                      <td className="text-xs md:text-sm lg:text-base">
                        {group.email}
                      </td>
                      <td>
                        <Link to={`/groupDetail/${group._id}`}>
                          <button className="cursor-pointer text-orange-500 text-xs md:text-sm lg:text-lg underline">
                            See more
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div data-aos="fade-up" className="p-10 lg:p-20 space-y-5">
              <h2 className="text-center font-bold text-2xl md:text-5xl specific-text text-red-400">
                Oops...!
              </h2>
              <p className="text-center font-semibold text-lg lg:text-2xl">
                Right now no group available here, please...
              </p>
              <Link
                className="text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded mt-2 flex justify-center items-center font-semibold"
                to="/createGroup"
              >
                Create Group
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllGroups;
