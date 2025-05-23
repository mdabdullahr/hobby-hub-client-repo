import { useContext, useEffect } from "react";
import { FaEnvelope, FaLock, FaUser, FaPhotoVideo } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }

    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            Swal.fire({
              title: "Register Successfully...!",
              icon: "success",
              draggable: true,
            });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error("Register fail" + errorMessage);
      });
  };

  useEffect(() => {
    document.title = "HobbyHub | Register";
  }, []);
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://i.ibb.co/1JGGL08S/istockphoto-483629308-612x612.jpg')`, // scenic bg
      }}
    >
      <div
       data-aos="zoom-in"
        className="transition-transform duration-500 hover:scale-105 backdrop-blur-xs p-8 rounded-2xl w-full max-w-md shadow shadow-white text-white">
        <div className="mb-4">
          <h2 className="text-2xl text-center font-bold">Register</h2>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block mb-1">Name</label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-white opacity-70">
                <FaUser />
              </span>
              <input
                name="name"
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
                name="photo"
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
                name="email"
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
                name="password"
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
            className="w-full cursor-pointer py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition"
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
