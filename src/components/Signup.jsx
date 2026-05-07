import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">

      {/* Card */}
      <div className="w-full max-w-md bg-gray-900 rounded-3xl p-8 shadow-2xl">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-white text-center">
          Create Your{" "}
          <span className="text-orange-500">Account</span>
        </h1>

        <p className="text-gray-400 text-center mt-3 mb-8">
          Join CredEAT and start managing meals smarter.
        </p>

        {/* Form */}
        <form className="space-y-5">

          {/* Name */}
          <div>
            <label className="text-sm text-gray-300 block mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500"
            />
          </div>

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
              placeholder="Create password"
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500"
            />
          </div>

          {/* Role */}
          <div>
            <label className="text-sm text-gray-300 block mb-2">
              Select Role
            </label>

            <select
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500"
            >
              <option>Student</option>
              <option>Mess Admin</option>
              <option>Vendor</option>
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 transition py-3 rounded-xl font-semibold text-black"
          >
            Create Account
          </button>

        </form>

        {/* Footer */}
        <p className="text-gray-500 text-sm text-center mt-6">
          Already have an account?{" "}
          <span className="text-orange-500 cursor-pointer hover:underline">
            Login
          </span>
        </p>

      </div>

    </div>
  );
};

export default Signup;