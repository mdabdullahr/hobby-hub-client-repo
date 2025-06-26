import React from "react";
import { Link } from "react-router";

const OngoingGroupCard = ({ group }) => {
  const {
    _id,
    groupName,
    startDate,
    imageUrl,
    description
  } = group;

  const endDateObj = new Date(startDate);
  endDateObj.setDate(endDateObj.getDate() + 1);
  // const endDate = endDateObj.toISOString().split("T")[0];

  return (
    <div
      data-aos="fade-up"
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6"
    >
      
      {imageUrl && (
        <div
          data-aos="zoom-in"
          className="w-full h-42 overflow-hidden rounded-xl"
        >
          <img
            src={imageUrl}
            alt={groupName}
            className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-95"
          />
        </div>
      )}

      <div>
        <div className="space-y-3">
          <h3 className="text-lg md:text-xl font-bold text-gray-700 dark:text-gray-300 mt-2 w-fit">
            {groupName}
          </h3>
          <p className="text-sm lg:text-base text-gray-500 dark:text-gray-400 line-clamp-2">
            {description}
          </p>

          <Link to={`/groupDetail/${_id}`}>
            <button className="btn-block bg-orange-500 hover:bg-orange-600 text-white text-center px-4 py-2 rounded-lg text-sm transition duration-200 cursor-pointer">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OngoingGroupCard;
