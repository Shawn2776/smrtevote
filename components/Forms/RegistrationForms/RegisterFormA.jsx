"use client";

import { addNewOrg } from "@/lib/actions";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { z } from "zod";

const FormSchema = z.object({
  email: z.string().email("Please Enter a Valid Email Address."),
  organization: z
    .string()
    .min(3, "Organization must be at least 3 characters.")
    .max(100, "Organization must be at most 100 characters.")
    .regex(
      new RegExp("^[a-zA-Z0-9 ]+$"),
      "Organization must contain only letters, numbers, and spaces."
    ),
  password: z.string().min(6).max(100),
  terms: z.boolean(),
});

const RegisterFormA = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

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
          <div className="flex">
            <input
              name="password"
              id="password"
              type={showPassword ? "text" : "password"}
              className="block w-full px-4 text-gray-700 bg-white border border-r-0 rounded-l-lg rounded-r-none flex-4 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              required
            />
            <div className="flex-1">
              {showPassword ? (
                <button
                  className="items-center h-3 pb-6 bg-transparent border border-l-0 border-gray-600 rounded-r-lg"
                  onClick={handleShowPassword}
                >
                  <FaEye />
                </button>
              ) : (
                <button
                  className="items-center h-3 pb-6 bg-transparent border border-l-0 border-gray-600 rounded-r-lg"
                  onClick={handleShowPassword}
                >
                  <FaEyeSlash />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center mt-2">
          <input
            name="terms"
            id="terms"
            type="checkbox"
            className="items-center justify-start flex-1 block w-full h-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none "
            required
          />
          <label
            htmlFor="terms"
            className="items-center justify-start block text-sm text-gray-800 dark:text-gray-200 flex-4"
          >
            I accept the{" "}
            <Link className="text-blue-500" href="/terms">
              Terms
            </Link>
          </label>
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
