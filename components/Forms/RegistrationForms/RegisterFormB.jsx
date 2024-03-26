"use client";

import { verifyToken } from "@/lib/actions";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const RegisterFormB = () => {
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const inEmail = searchParams.get("inEmail");
  const inOrg = searchParams.get("inOrg");
  const inCode = searchParams.get("inCode");
  console.log("inEmail: " + inEmail);

  async function clientAction(formData) {
    const { email, organization, token } = Object.fromEntries(formData);

    // reset form
    // client-side validation
    try {
      const result = await verifyToken(formData);

      if (result?.error) {
        setError(result.error);
        return { error: result.error };
      }
    } catch (error) {
      setError(error);
      return { error };
    }

    redirect(`/register/new/${organization}`);
  }

  return (
    <div className="w-full max-w-sm p-6 rounded-lg shadow-md bg-bg dark:bg-gray-800">
      <div className="flex justify-center mx-auto">
        <span className="text-3xl font-extrabold text-red-500">
          SMRT<span className="text-3xl font-normal text-text"> eVote</span>
        </span>
      </div>
      <h3 className="mt-3 mb-4 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
        Welcome Back
      </h3>

      <div className="flex flex-col">
        <form action={clientAction} className="flex flex-wrap justify-between">
          <input
            className="w-full p-5 mb-1 border-2 rounded-md bg-bg text-text border-bgHover"
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            required
            value={inEmail}
          />
          <input
            className="w-full p-5 mb-1 border-2 rounded-md bg-bg text-text border-bgHover"
            type="text"
            placeholder="Organization | Group"
            name="organization"
            id="organization"
            required
            value={inOrg}
          />
          <input
            className="w-full p-5 mb-1 border-2 rounded-md bg-bg text-text border-bgHover"
            type="text"
            placeholder="Verification Code"
            name="token"
            id="token"
            required
            value={inCode}
          />
          <button
            type="submit"
            className="w-full p-5 rounded-lg cursor-pointer bg-button text-text"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="flex justify-center mt-4 text-red-500">
        {error && error}
      </div>
    </div>
  );
};

export default RegisterFormB;
