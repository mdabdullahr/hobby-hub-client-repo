import { FaEnvelope, FaLock, FaUser, FaPhotoVideo } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://i.ibb.co/Y495bg1M/img-122.jpg')`, // scenic bg
      }}
    >
      <div className=" backdrop-blur-xs p-8 rounded-2xl w-full max-w-md shadow shadow-white text-white">
        <div className="mb-4">
          <h2 className="text-2xl text-center font-bold">Register</h2>
        </div>

        <form className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block mb-1">Name</label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-white opacity-70">
                <FaUser />
              </span>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 rounded-md border  bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>
          {/* Photo URL */}
          <div>
            <label className="block mb-1">Photo</label>
            <div className="relative">
              <span className="absolute left-3 top-3.5 text-white opacity-70">
                <FaPhotoVideo />
              </span>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 rounded-md border  bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Enter your photoURL"
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-white opacity-70">
                <FaEnvelope />
              </span>
              <input
                type="email"
                className="w-full pl-10 pr-4 py-2 rounded-md border  bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block mb-1">Password</label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-white opacity-70">
                <FaLock />
              </span>
              <input
                type="password"
                className="w-full pl-10 pr-4 py-2 rounded-md border bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition"
          >
            Register
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="underline font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
