import React from "react";
import { Link } from "react-router";

const OngoingGroupCard = ({ group }) => {
  const {
    _id,
    groupName,
    description,
    startDate,
    maxMembers,
    members = [],
    imageUrl,
  } = group;

  const endDateObj = new Date(startDate);
  endDateObj.setDate(endDateObj.getDate() + 1);
  const endDate = endDateObj.toISOString().split("T")[0];

  return (
    <div
      data-aos="fade-up"
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-4 md:p-6 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6"
    >
      {/* Left side: Image */}
      {imageUrl && (
        <div
          data-aos="zoom-in"
          className="w-full md:w-1/2 h-64 overflow-hidden rounded-xl"
        >
          <img
            src={imageUrl}
            alt={groupName}
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-95"
          />
        </div>
      )}

      {/* Right side: Text Content */}
      <div data-aos="fade-left" className="w-full md:w-1/2 flex flex-col justify-between h-full">
        <div className="space-y-3">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-orange-500">
            {groupName}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base line-clamp-5 lg:line-clamp-3">
            {description}
          </p>
          <p className="text-sm lg:text-base text-gray-500 dark:text-gray-400">
            📅 {startDate} - {endDate}
          </p>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
            👥 {members.length} / {maxMembers} members
          </p>
        </div>

        <Link
          to={`/groupDetail/${_id}`}
          className="bg-orange-500 hover:bg-orange-600 text-white text-center px-4 py-2 rounded-lg text-sm transition duration-200 w-full md:mt-3"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default OngoingGroupCard;
