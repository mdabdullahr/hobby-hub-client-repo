import React from "react";
import { Link } from "react-router";
import Navbar from "../../components/Navbar/Navbar";

const ErrorPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white px-4"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/s9sYZRSm/free-photos-free-images-647d84-1024.jpg')",
      }}
    >
        <Navbar></Navbar>
      <section
        className=" bg-transparent rounded-2xl shadow-md shadow-white px-8 py-12 mb-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center border-4 border-gray-400 "
      >
        <div>
            <h2 className="text-5xl font-semibold specific-text">Oops !</h2>
            <p className="text-white font-medium text-2xl my-8">It looks like you have taken a wrong turn</p>
            <h1 className="text-9xl font-bold text-white">404</h1>
            <h4 className="text-white font-semibold text-2xl mt-3">PAGE NOT FOUND</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-8">
                <Link to="/">
                <button className="bg-white text-gray-700 text-xl font-medium px-5 py-3 rounded cursor-pointer">
                    Back to Home
                </button>
                </Link>
                <Link to="/createGroup">
                <button className="text-white text-xl font-medium px-5 py-3 rounded border-2 border-orange-500 cursor-pointer ">
                    Create Group
                </button>
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
