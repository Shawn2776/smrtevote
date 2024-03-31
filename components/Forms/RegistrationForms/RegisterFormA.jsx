"use client";

import { addNewOrg } from "@/lib/actions";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

const RegisterFormA = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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

    redirect(`/register/new`);
  }

  return (
    <div className="w-full max-w-sm p-6 mx-auto bg-white rounded-lg shadow-md shadow-black dark:bg-gray-800">
      <div className="flex justify-center mx-auto">
        <span className="text-3xl font-extrabold text-red-500">
          SMRT<span className="text-3xl font-normal text-text"> eVote</span>
        </span>
      </div>
      <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
        Welcome
      </h3>

      <form className="mt-6" action={clientAction}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Email
          </label>
          <input
            name="email"
            id="email"
            type="email"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            required
          />
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label
              htmlFor="organization"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Organization | Group
            </label>
          </div>

          <input
            name="organization"
            id="organization"
            type="organization"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block mt-4 text-sm text-gray-800 dark:text-gray-200"
          >
            Password
          </label>
          <input
            name="password"
            id="password"
            type="password"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            required
          />
        </div>

        <div className="my-6">
          <button
            type="submit"
            className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            {loading ? "Loading..." : "Register"}
          </button>
        </div>
      </form>

      <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">
          Already have an account?{" "}
        </span>

        <Link
          href="/auth/signin"
          className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
        >
          Login
        </Link>
      </div>
      <div className="flex justify-center mt-4 text-red-500">
        {error && error}
      </div>
    </div>
  );
};

export default RegisterFormA;
