import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">

      {/* Login Card */}
      <div className="w-full max-w-md bg-gray-900 rounded-3xl p-8 shadow-2xl">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-white text-center">
          Welcome Back to{" "}
          <span className="text-orange-500">CredEAT</span>
        </h1>

        <p className="text-gray-400 text-center mt-3 mb-8">
          Login to continue managing your meals and credits.
        </p>

        {/* Form */}
        <form className="space-y-5">

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300 block mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-300 block mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500"
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <p className="text-sm text-orange-500 cursor-pointer hover:underline">
              Forgot Password?
            </p>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 transition py-3 rounded-xl font-semibold text-black"
          >
            Login
          </button>

        </form>

        {/* Bottom Text */}
        <p className="text-gray-500 text-sm text-center mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-orange-500 cursor-pointer hover:underline">
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Login;