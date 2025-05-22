import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div
      className="bg-cover"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/gML0q5Mt/abstract-white-background-geometric-texture.jpg)",
      }}
    >
      <div
        data-aos="fade-up"
        className="w-11/12 lg:w-8/12 mx-auto pt-20 pb-10 grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* Left Section */}
        <div>
          <h4 className="text-4xl font-bold text-[#331A15]">HobbyHub</h4>
          <p className="text-lg text-[#1B1A1A] mt-4 mb-6">
            Always ready to be your friend. Come & Contact with us to share
            your memorable moments with your best companion.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-[#331A15] rounded-full p-2 hover:text-blue-800 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#331A15] hover:text-blue-500 transition"
            >
              <FaTwitter size={28} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#331A15] hover:text-pink-500 transition"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-[#331A15] p-2 rounded-full hover:text-blue-700 transition"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>

          <h3 className="text-3xl font-semibold text-[#331A15] mt-8 mb-4">
            Get in Touch
          </h3>
          <div className="space-y-4 text-[#1B1A1A]">
            <div className="flex items-center gap-3">
              <MdPhone className="text-2xl text-[#331A15]" />
              <span>+880 1234-567890</span>
            </div>
            <div className="flex items-center gap-3">
              <MdEmail className="text-2xl text-[#331A15]" />
              <span>example@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MdLocationOn className="text-2xl text-[#331A15]" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-3xl font-semibold text-[#331A15]">
            Connect with Us
          </h3>
          <div className="flex flex-col space-y-4 mt-6">
            <input
              className="bg-white border border-gray-300 h-12 px-4 rounded-md focus:outline-none"
              type="text"
              placeholder="Name"
            />
            <input
              className="bg-white border border-gray-300 h-12 px-4 rounded-md focus:outline-none"
              type="email"
              placeholder="Email"
            />
            <textarea
              rows="5"
              className="w-full p-4 rounded-md border border-gray-300 focus:outline-none"
              placeholder="Write your message..."
            ></textarea>
            <button className="text-[#331A15] border-2 border-[#331A15] py-2 rounded-full hover:bg-[#331A15] hover:text-white transition duration-300">
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className="bg-cover"
        style={{
          backgroundImage: "url(https://i.ibb.co/rKLCQVYV/lock.jpg)",
        }}
      >
        <h5 className="text-lg text-white text-center py-5">
          © HobbyHub — All Rights Reserved
        </h5>
      </div>
    </div>
  );
};

export default Footer;
