import React from "react";
import NavBar from "../../shared/Navbar/Navbar";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="px-40 pt-12">
      <NavBar></NavBar>
      <div className="w-1/2 mx-auto text-center mb-48 ">
        <form className="card border shadow-xl p-10">
          <h2 className="font-extrabold text-4xl mb-6">Please Login</h2>
          <label className="text-start flex flex-col">
            Your Email
            <input
              className="border px-2 py-4 rounded-lg mb-6 mt-2"
              type="email"
              name="email"
              required
              placeholder="Enter email"
            />
          </label>
          <label className="text-start flex flex-col">
            Your Password
            <input
              className="border px-2 py-4 rounded-lg mb-6 mt-2"
              type="password"
              name="password"
              required
              placeholder="Password"
            />
          </label>
          <button
            className=" py-4 text-white text-lg font-medium rounded bg-gray-800 hover:bg-transparent hover:border hover:border-gray-800 hover:text-gray-800"
            type="submit"
          >
            Login
          </button>

          <div className="mt-6 inline-flex items-center justify-center gap-6">
            <button className="px-4 py-3 text-gray-800 text-lg font-medium rounded bg-white hover:bg-transparent border border-gray-800 hover:text-white hover:bg-gray-800 inline-flex items-center gap-2">
              <FcGoogle /> Sign In Google
            </button>
            <button className="px-4 py-3 text-gray-800 text-lg font-medium rounded bg-white hover:bg-transparent border border-gray-800 hover:text-white hover:bg-gray-800 inline-flex items-center gap-2">
              <FaGithub /> Sign In GitHub
            </button>
          </div>
          <p className="mt-6">
            Don't have an account? Please{" "}
            <Link className="underline" to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
