"use client";

import { useState } from "react";

const SignInForm = () => {
  const [error, setError] = useState(null);

  async function clientAction(formData) {
    // reset form
    // client-side validation
    try {
      setLoading(true);
      const result = await addNewOrg(formData);

      if (result?.error) {
        setLoading(false);
        setError(result.error);
        return { error: result.error };
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
      return { error };
    }
  }
  return (
    <div>
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
            placeholder="Organization"
            aria-label="organization"
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
        <div className="mt-4 text-center">
          <a
            href="#"
            className="text-sm text-textSoft dark:text-textSoft hover:text-gray-500"
          >
            Trouble logging in?
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
