"use client";

import { addNewOrg } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import validator from "validator";
import { z } from "zod";
import { ErrorMessage } from "@hookform/error-message";
import { passwordStrength } from "check-password-strength";
import PasswordStrength from "@/components/PasswordStrength";

const FormSchema = z
  .object({
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
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters long.")
      .max(50, "Password must be at most 50 characters long."),
    terms: z.literal(true, {
      errorMap: () => ({ message: "You must accept the terms to continue." }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

const RegisterFormA2 = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passStrength, setPassStrength] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(FormSchema),
  });

  useEffect(() => {
    setPassStrength(passwordStrength(watch().password).id);
  }, [watch().password]);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  // async function clientAction(formData) {

  //   // reset form
  //   // client-side validation
  //   try {
  //     setLoading(true);
  //     const zThing = zodResolver(FormSchema).parse(formData);
  //     console.log(zThing);
  //     const result = await addNewOrg(formData);

  //     if (result?.error) {
  //       setLoading(false);
  //       setError(result.error);
  //       return { error: result.error };
  //     } else {
  //       alert(
  //         "Registration Successful! Please check your email for a verification code."
  //       );
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //     setError(error.message);
  //     return { error };
  //   }

  //   redirect(`/register/new`);
  // }

  const saveUser = async (data) => {
    console.log({ data });
  };

  return (
    <div>
      {/* mobile screens */}
      <div className="w-full max-w-md p-6 mx-auto bg-white rounded-lg shadow-md md:max-w-xl md:flex-col shadow-black dark:bg-gray-800">
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

        {/* <form className="mt-6" action={clientAction}> */}
        <form className="mt-6" onSubmit={handleSubmit(saveUser)}>
          <div className="flex gap-2">
            <div className="flex flex-col">
              <label
                htmlFor="givenName"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                First Name
              </label>
              <input
                {...register("givenName")}
                name="givenName"
                id="givenName"
                type="givenName"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <ErrorMessage
                errors={errors}
                name="givenName"
                render={({ message }) => (
                  <p className="text-xs text-red-500">{message}</p>
                )}
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
                {...register("familyName")}
                name="familyName"
                id="familyName"
                type="familyName"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <ErrorMessage
                errors={errors}
                name="familyName"
                render={({ message }) => (
                  <p className="text-xs text-red-500">{message}</p>
                )}
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
              {...register("email")}
              name="email"
              id="email"
              type="email"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <p className="text-xs text-red-500">{message}</p>
              )}
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
              {...register("phone")}
              name="phone"
              id="phone"
              type="phone"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            <ErrorMessage
              errors={errors}
              name="phone"
              render={({ message }) => (
                <p className="text-xs text-red-500">{message}</p>
              )}
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
              {...register("organization")}
              name="organization"
              id="organization"
              type="organization"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            <ErrorMessage
              errors={errors}
              name="organization"
              render={({ message }) => (
                <p className="text-xs text-red-500">{message}</p>
              )}
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
                {...register("password")}
                name="password"
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => (
                  <p className="text-xs text-red-500">{message}</p>
                )}
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
                {...register("confirmPassword")}
                name="confirmPassword"
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                className="w-full bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <ErrorMessage
                errors={errors}
                name="confirmPassword"
                render={({ message }) => (
                  <p className="text-xs text-red-500">{message}</p>
                )}
              />
            </div>
          </div>

          <PasswordStrength passStrength={passStrength} />

          <Controller
            control={control}
            name="terms"
            render={({ field }) => (
              <>
                <input
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  type="checkbox"
                  className="w-10 h-4 mt-4"
                  name="terms"
                  id="terms"
                  defaultValue={false}
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-gray-800 dark:text-gray-200"
                >
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="mt-4 text-blue-500 dark:text-blue-400 hover:underline"
                  >
                    Terms of Service
                  </Link>
                </label>
                <ErrorMessage
                  errors={errors}
                  name="terms"
                  render={({ message }) => (
                    <p className="text-xs text-red-500">{message}</p>
                  )}
                />
              </>
            )}
          />

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
    </div>
  );
};

export default RegisterFormA2;
