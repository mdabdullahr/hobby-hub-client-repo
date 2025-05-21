import React from "react";
import { useLoaderData } from "react-router";
import { MdGroups } from "react-icons/md";

const GroupDetail = () => {
  const detail = useLoaderData();
  const {groupName, hobbyCategory, description, meetingLocation, imageUrl
, maxMembers, startDate, name, email} = detail;
  console.log(detail);
  return (
    <div
      className="min-h-screen bg-cover bg-center p-4 md:p-6"
      style={{
        backgroundImage: "url('https://i.ibb.co/yBXDgJkm/mugic.jpg')",
      }}
    >
      <div className="mt-24 w-full max-w-7xl mx-auto">

        <div className="overflow-x-auto backdrop-blur-3xl rounded-xl shadow-md">
            
          <img className="w-full h-full md:h-[400px] bg-cover" src={imageUrl} alt="group Image" />
          <div className="p-10 text-secondary space-y-5">
            <h2 className="text-2xl lg:text-4xl font-bold flex items-center gap-2"><MdGroups className="border rounded-full"/> {groupName}</h2>
            <h5 className="txt-lg lg:text-2xl"><strong>Category :</strong> {hobbyCategory}</h5>
            <p className="text-sm lg:text-xl"><strong>Meeting Location : </strong>{meetingLocation}</p>
            <p className="text-sm lg:text-xl"><strong>Maximum Members : </strong>{maxMembers}</p>
            <p className="text-sm lg:text-xl"><strong>Start Date : </strong>{startDate}</p>
            <p className="text-sm lg:text-xl"><strong>Created By : </strong>{name}</p>
            <p className="text-sm lg:text-xl"><strong>Admin Email : </strong>{email}</p>
            <p className="text-sm lg:text-xl"><strong>Description : </strong>{description}</p>
            <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition cursor-pointer">Join Group</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetail;
