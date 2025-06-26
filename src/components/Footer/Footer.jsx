import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { Link } from "react-router";
import logo from "../../assets/logo.png";
import { toast } from "react-toastify";

const Footer = () => {
  return (
    <div className="bg-orange-500 text-white py-12 lg:py-20">
      <div className="w-11/12 xl:w-10/12 2xl:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Logo + Title + Description */}
        <div>
          <img
            src={logo}
            alt="HobbyHub Logo"
            className="w-26 md:w-20 lg:w-28 h-auto mb-2"
          />
          <h4 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold specific-text text-white mb-3">
            HobbyHub
          </h4>
          <p className="text-sm lg:text-lg max-w-2xs text-white/90">
            Always ready to be your friend. Connect with us and share your
            memorable hobby moments with your companions.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl lg:text-2xl font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-4 text-sm lg:text-lg text-white/90">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/allGroups" className="hover:underline">
                All Groups
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:underline">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:underline">
                Terms & Condition
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Links + Contact */}
        <div>
          <h3 className="text-xl lg:text-2xl font-semibold mb-4">
            Connect with Us
          </h3>
          <div className="flex items-center gap-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-600 hover:text-white transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="bg-white text-sky-500 p-2 rounded-full hover:bg-sky-500 hover:text-white transition"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="text-white bg-gradient-to-tr from-pink-500 via-purple-500 to-orange-500 p-2 rounded-full"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="bg-white text-blue-700 p-2 rounded-full hover:bg-blue-700 hover:text-white transition"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
          <div className="space-y-4 text-sm lg:text-lg text-white/90">
            <p className="flex items-center gap-2">
              <MdPhone /> +880 1234-567890
            </p>
            <p className="flex items-center gap-2">
              <MdEmail /> hobbyhub@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <MdLocationOn /> Dhaka, Bangladesh
            </p>
          </div>
        </div>

        {/* Column 4: Contact Message Form */}
        <div>
          <h3 className="text-xl lg:text-2xl font-semibold mb-4">
            Send a Message
          </h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.target.reset();
              toast.success("Message sent successfully!");
            }}
            className="space-y-3"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded bg-white text-gray-700 placeholder-gray-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded bg-white text-gray-700 placeholder-gray-500 focus:outline-none"
            />
            <textarea
              rows={3}
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 rounded bg-white text-gray-700 placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full py-2 bg-white text-orange-600 font-semibold rounded hover:bg-orange-100 transition cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
