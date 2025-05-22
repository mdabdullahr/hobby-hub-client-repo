import { useContext, useEffect, useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const MyGroups = () => {
  const [myGroups, setMyGroups] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:3000/groups?emailParams=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyGroups(data));
  }, [user?.email]);

  const removeGroupFromDB = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/groups/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = myGroups.filter((mg) => mg._id !== _id);
              setMyGroups(remaining);
            }
          });
      }
    });
  };
  return (
    <div
      className=" bg-cover bg-center p-4 md:p-6 "
      style={{
        backgroundImage: "url('https://i.ibb.co/4ZG779SZ/paingting.jpg')",
      }}
    >
      <div className="mt-24 w-full max-w-7xl mx-auto mb-20">
        <div data-aos="zoom-in">
          <h2
            className="text-2xl md:text-4xl lg:text-5xl text-orange-500 font-bold text-center specific-text
        "
          >
            Your Created Group
          </h2>
          <p className="text-center text-gray-500 text-sm md:text-lg lg:text-xl mb-6 lg:mb-10 mt-2 px-0 lg:px-20">
            On this page you will be able to see all your created groups and
            take action. You will be able to see the details of your group, if
            you need to update the group then you can update it by clicking on
            the update button and if you need to delete the group then you can
            delete it by clicking on the delete button
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="overflow-x-auto rounded-xl shadow-2xl"
        >
          {myGroups.length ? (
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
                {myGroups.map((group, index) => (
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
                      <div className="flex gap-4">
                        <Link to={`/groupDetail/${group._id}`}>
                          <button className="cursor-pointer rounded bg-transparent shadow shadow-gray-300 p-[10px]">
                            <BsFillInfoCircleFill size={20} color=" #17a2b8" />
                          </button>
                        </Link>
                        <Link to={`/updateGroup/${group._id}`}>
                          <button className="cursor-pointer rounded bg-transparent shadow shadow-gray-300 p-[10px]">
                            <FaPen size={20} color="#b182e3" />
                          </button>
                        </Link>
                        <button
                          onClick={() => removeGroupFromDB(group._id)}
                          className="cursor-pointer rounded bg-transparent shadow shadow-gray-300 p-[10px]"
                        >
                          <MdDelete size={20} color="#FF0000" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="p-10 lg:p-20 space-y-5">
              <h2 className="text-center font-bold text-2xl md:text-5xl specific-text text-red-400">
                Oops...!
              </h2>
              <p className="text-center font-semibold text-lg lg:text-2xl">
                Right now your no group available here, please...
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

export default MyGroups;
