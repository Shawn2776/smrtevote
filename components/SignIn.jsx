import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="px-6 py-4">
        <div className="flex justify-center mx-auto">
          <span className="text-red-500 text-3xl">
            SMRT<span className="text-text text-3xl"> eVote</span>
          </span>
        </div>

        <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
          Welcome Back
        </h3>

        <form>
          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
            />
          </div>

          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              placeholder="Domain"
              aria-label="Domain"
            />
          </div>

          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              placeholder="Password"
              aria-label="Password"
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Sign In
            </button>
          </div>
          <div className="text-center mt-4">
            <a
              href="#"
              className="text-sm text-textSoft dark:text-textSoft hover:text-gray-500"
            >
              Trouble logging in?
            </a>
          </div>
        </form>
      </div>

      <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">
          Don&apos;t have an account?{" "}
        </span>

        <Link
          href="/register"
          className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
