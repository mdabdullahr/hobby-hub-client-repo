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
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between p-6">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={groupName}
          className="w-full h-40 object-cover rounded-xl mb-4"
        />
      )}

      <div>
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-orange-500 mb-2">{groupName}</h3>
        <p className="text-gray-600 text-an md:text-lg mb-4 line-clamp-3">{description}</p>
        <p className="text-sm lg:text-lg text-gray-500 mb-1">
          📅 {startDate} - {endDate}
        </p>
        <p className="text-sm md:text-lg text-gray-500">
          👥 {members.length} / {maxMembers} members
        </p>
      </div>

      <div className="mt-4 text-center">
        <Link
          to={`/groupDetail/${_id}`}
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm transition duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default OngoingGroupCard;
