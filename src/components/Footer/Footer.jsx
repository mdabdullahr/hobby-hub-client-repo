import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const classList = document.documentElement.classList;
    setIsDark(classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDark(classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`bg-cover bg-center ${
        isDark
          ? "bg-gradient-to-r from-gray-900 to-gray-800"
          : "bg-[url('https://i.ibb.co/gML0q5Mt/abstract-white-background-geometric-texture.jpg')]"
      }`}
    >
      <div
        data-aos="fade-up"
        className="w-11/12 lg:w-8/12 mx-auto pt-20 pb-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-52"
      >
        {/* Left Section */}
        <div>
          <h4
            className={`text-2xl md:text-4xl font-bold text-orange-500 specific-text ${
              isDark ? "text-gray-400" : ""
            }`}
          >
            HobbyHub
          </h4>
          <p className={`text-xs md:text-lg mt-4 mb-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Always ready to be your friend. Come & Contact with us to share
            your memorable moments with your best companion.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full p-2 ${
                isDark ? "bg-blue-900 text-white" : "bg-blue-500 text-white"
              }`}
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full p-2 ${
                isDark ? "bg-blue-900 text-white" : "bg-blue-500 text-white"
              }`}
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-gradient-to-tr from-pink-500 via-purple-500 to-orange-500 rounded-full p-2"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full p-2 ${
                isDark ? "bg-blue-900 text-white" : "bg-blue-500 text-white"
              }`}
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>

          <h3 className={`text-lg md:text-3xl font-semibold mt-8 mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Get in Touch
          </h3>
          <div className={`space-y-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            <div className="flex items-center gap-3">
              <MdPhone className={`text-sm md:text-lg lg:text-2xl ${isDark ? "text-gray-400" : "text-gray-600"}`} />
              <span className="text-sm md:text-lg">+880 1234-567890</span>
            </div>
            <div className="flex items-center gap-3">
              <MdEmail className={`text-sm md:text-lg lg:text-2xl ${isDark ? "text-gray-400" : "text-gray-600"}`} />
              <span className="text-sm md:text-lg">hobbyhub@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MdLocationOn className={`text-sm md:text-lg lg:text-2xl ${isDark ? "text-gray-400" : "text-gray-600"}`} />
              <span className="text-sm md:text-lg">Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className={`text-lg md:text-3xl font-semibold mt-0 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Connect with Us
          </h3>
          <div className="flex flex-col space-y-4 mt-6">
            <input
              className="bg-white dark:bg-gray-900 border text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600 h-12 px-4 rounded-md focus:outline-none"
              type="text"
              placeholder="Name"
            />
            <input
              className="bg-white dark:bg-gray-900 border text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600 h-12 px-4 rounded-md focus:outline-none"
              type="email"
              placeholder="Email"
            />
            <textarea
              rows="5"
              className="w-full p-4 rounded-md text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 focus:outline-none"
              placeholder="Write your message..."
            ></textarea>
            <button className="text-orange-500 border-2 border-orange-500 py-2 rounded-full hover:bg-orange-500 hover:text-white transition duration-300">
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className={`bg-cover bg-center ${
          isDark ? "bg-gray-800" : "bg-[url('https://i.ibb.co/rKLCQVYV/lock.jpg')]"
        }`}
      >
        <h5 className="text-xs md:text-lg text-white dark:text-gray-500 text-center py-5">
          © HobbyHub — All Rights Reserved
        </h5>
      </div>
    </div>
  );
};

export default Footer;
