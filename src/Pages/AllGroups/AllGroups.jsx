import React from "react";
import { IoMdEye } from "react-icons/io";
import { Link, useLoaderData } from "react-router";

const AllGroups = () => {
  const groups = useLoaderData();
  console.log(groups);

  return (
    <div
      className="min-h-screen bg-cover bg-center p-4 md:p-6"
      style={{
        backgroundImage: "url('https://i.ibb.co/4ZG779SZ/paingting.jpg')",
      }}
    >
      <div className="mt-24 w-full max-w-7xl mx-auto">
        <h2 className="text-center mb-6 text-primary text-2xl md:text-4xl font-bold underline">
          ALL Groups
        </h2>

        <div className="overflow-x-auto bg-white rounded-xl shadow-md">
          <table className="table w-full text-center md:text-left">
            {/* head */}
            <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
              <tr>
                <th className="text-sm md:text-base lg:text-lg">No.</th>
                <th className="text-sm md:text-base lg:text-lg">Group Name</th>
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
                        <div className="font-bold text-sm md:text-lg">
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
                      <button className="cursor-pointer bg-[#D2B48C] text-white p-[10px] rounded">
                        <IoMdEye size={20} />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllGroups;
