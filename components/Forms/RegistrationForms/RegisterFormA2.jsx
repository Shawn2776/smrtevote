"use client";

import { addNewOrg } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import validator from "validator";
import { z } from "zod";

const FormSchema = z.object({
  givenName: z
    .string()
    .min(3, "First name must be at least 2 characters")
    .max(45, "First name can be at most 45 characters.")
    .regex(new RegExp("^[a-zA-Z]+$"), "No special characters allowed!"),
  familyName: z
    .string()
    .min(3, "Last name must be at least 2 characters")
    .max(45, "Last name can be at most 45 characters.")
    .regex(new RegExp("^[a-zA-Z]+$"), "No special characters allowed!"),
  email: z.string().email("Please Enter a Valid Email Address."),
  phone: z
    .string()
    .refine(validator.isMobilePhone, "Please Enter a Valid Phone Number."),
  organization: z
    .string()
    .min(3, "Organization must be at least 3 characters.")
    .max(50, "Organization must be at most 50 characters.")
    .regex(
      new RegExp("^[a-zA-Z0-9 ]+$"),
      "Organization must contain only letters, numbers, and spaces."
    ),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long.")
    .max(50, "Password must be at most 50 characters long."),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms to continue." }),
  }),
});

const RegisterFormA2 = () => {
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
      const zThing = zodResolver(FormSchema).parse(formData);
      console.log(zThing);
      const result = await addNewOrg(formData);

      if (result?.error) {
        setLoading(false);
        setError(result.error);
        return { error: result.error };
      } else {
        alert(
          "Registration Successful! Please check your email for a verification code."
        );
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
    <div>
      {/* mobile screens */}
      <div className="w-full max-w-md p-6 mx-auto bg-white rounded-lg shadow-md md:hidden shadow-black dark:bg-gray-800">
        <div className="justify-center hidden mx-auto sm:flex">
          <span className="text-3xl font-extrabold text-red-500">
            <Image
              className="w-auto h-12 sm:h-14"
              src="/smrtevote.png"
              alt=""
              width={120}
              height={50}
            />
          </span>
        </div>

        <form className="mt-6" action={clientAction}>
          <div className="flex gap-2">
            <div className="flex flex-col">
              <label
                htmlFor="givenName"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                First Name
              </label>
              <input
                name="givenName"
                id="givenName"
                type="givenName"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="familyName"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Last Name
              </label>
              <input
                name="familyName"
                id="familyName"
                type="familyName"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>
          </div>
          <div className="mt-4">
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
            <label
              htmlFor="phone"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Phone
            </label>
            <input
              name="phone"
              id="phone"
              type="phone"
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
          <div className="flex gap-2 mt-4">
            <div className="flex flex-col w-full">
              <label
                className="text-sm text-gray-800 dark:text-gray-200"
                htmlFor="password"
              >
                Password
              </label>
              <input
                name="password"
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                className="text-sm text-gray-800 dark:text-gray-200"
                htmlFor="confirmPassword"
              >
                <div className="flex gap-4">
                  <span>Confirm Password</span>
                  <span onClick={handleShowPassword}>
                    {!showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </label>
              <input
                name="confirmPassword"
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                className="w-full bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>
          </div>

          <div className="flex items-center mt-1">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-10 h-4"
                name="terms"
                id="terms"
                required
                defaultValue={false}
              />
            </div>
            <div className="flex">
              <label htmlFor="terms" className="max-w-content">
                I accept the{" "}
                <Link className="text-blue-500" href="/terms">
                  Terms
                </Link>
              </label>
            </div>
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
      {/* desktop screens  */}
      <div className="flex-col hidden w-full max-w-xl p-6 mx-auto bg-white rounded-lg shadow-md md:flex shadow-black dark:bg-gray-800">
        <div className="justify-center hidden mx-auto sm:flex">
          <span className="text-3xl font-extrabold text-red-500">
            <Image
              className="w-auto h-12 sm:h-14"
              src="/smrtevote.png"
              alt=""
              width={120}
              height={50}
            />
          </span>
        </div>

        <form className="mt-6" action={clientAction}>
          <div className="flex gap-2">
            <div className="flex flex-col">
              <label
                htmlFor="givenName"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                First Name
              </label>
              <input
                name="givenName"
                id="givenName"
                type="givenName"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="familyName"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Last Name
              </label>
              <input
                name="familyName"
                id="familyName"
                type="familyName"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="mt-4">
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
              <label
                htmlFor="phone"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Phone
              </label>
              <input
                name="phone"
                id="phone"
                type="phone"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>
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
          <div className="flex gap-2 mt-4">
            <div className="flex flex-col w-full">
              <label
                className="text-sm text-gray-800 dark:text-gray-200"
                htmlFor="password"
              >
                Password
              </label>
              <input
                name="password"
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                className="text-sm text-gray-800 dark:text-gray-200"
                htmlFor="confirmPassword"
              >
                <div className="flex gap-4">
                  <span>Confirm Password</span>
                  <span onClick={handleShowPassword}>
                    {!showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </label>
              <input
                name="confirmPassword"
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                className="w-full bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>
          </div>

          <div className="flex items-center mt-1">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-10 h-4"
                name="terms"
                id="terms"
                required
                defaultValue={false}
              />
            </div>
            <div className="flex">
              <label htmlFor="terms" className="max-w-content">
                I accept the{" "}
                <Link className="text-blue-500" href="/terms">
                  Terms
                </Link>
              </label>
            </div>
          </div>

          {/* <div className="flex items-center mt-1">
            <div className="mr-2">
              <input
                name="terms"
                id="terms"
                type="checkbox"
                required
                defaultValue={false}
                className="w-20 border"
              />
            </div>
            <label htmlFor="terms" className="border max-w-content">
              I accept the{" "}
              <Link className="text-blue-500" href="/terms">
                Terms
              </Link>
            </label>
          </div> */}

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
    </div>
  );
};

export default RegisterFormA2;
