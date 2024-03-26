"use client";

import { addOrganization } from "@/lib/actions";
import { redirect, useSearchParams } from "next/navigation";
import { useState } from "react";

const RegisterFormC = ({ industries }) => {
  const searchParams = useSearchParams();
  const inEmail = searchParams.get("inEmail");
  console.log("inEmail:" + inEmail);

  const [error, setError] = useState(null);

  async function clientAction(formData) {
    const {
      email,
      organization,
      password,
      phone,
      addrLine1,
      addrLine2,
      city,
      state,
      zip,
      industry,
    } = Object.fromEntries(formData);

    // reset form
    // client-side validation
    const result = await addOrganization(formData);

    if (result?.error) {
      setError(result.error);
    }

    redirect(`/login?email=${email}&organization=${organization}`);
  }

  return (
    <div className="w-full max-w-lg p-6 rounded-lg shadow-md bg-bg dark:bg-gray-800">
      <div className="flex justify-center mx-auto">
        <span className="text-3xl font-extrabold text-red-500">
          SMRT<span className="text-3xl font-normal text-text"> eVote</span>
        </span>
      </div>
      <h3 className="mt-3 mb-4 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
        Welcome Back
      </h3>

      <div className="flex flex-col">
        <form
          action={clientAction}
          className="flex flex-wrap justify-between w-full"
        >
          <input
            type="text"
            placeholder="Organization Name"
            className="w-[45%] p-2 m-2"
            name="organization"
            id="organization"
            required
          />
          {/* <select name="industry" id="industry" className="w-[45%] p-2 m-2">
            <option value="industry">Choose an Industry</option>
            {industries.map((industry) => (
              <option key={industry._id} value={industry.industry}>
                {industry.industry}
              </option>
            ))}
          </select> */}
          {/* <input
            type="text"
            placeholder="Domain"
            className="w-[45%] p-2 m-2"
            name="domain"
            id="domain"
            required
          /> */}
          <input
            type="text"
            placeholder="Address Line 1"
            className="w-[45%] p-2 m-2"
            name="addrLine1"
            id="addrLine1"
            required
          />
          <input
            type="text"
            placeholder="Address Line 2"
            className="w-[45%] p-2 m-2"
            name="addrLine2"
            id="addrLine2"
          />
          <input
            type="text"
            placeholder="City"
            className="w-[45%] p-2 m-2"
            name="city"
            id="city"
            required
          />
          <select name="state" id="state" className="w-[45%] p-2 m-2">
            <option value="state">Choose a State</option>
            <option value="al">AL</option>
            <option value="ak">AK</option>
            <option value="az">AZ</option>
            <option value="ar">AR</option>
            <option value="ca">CA</option>
            <option value="co">CO</option>
            <option value="ct">CT</option>
            <option value="de">DE</option>
            <option value="fl">FL</option>
            <option value="ga">GA</option>
            <option value="hi">HI</option>
            <option value="id">ID</option>
            <option value="il">IL</option>
            <option value="in">IN</option>
            <option value="ia">IA</option>
            <option value="ks">KS</option>
            <option value="ky">KY</option>
            <option value="la">LA</option>
            <option value="me">ME</option>
            <option value="md">MD</option>
            <option value="ma">MA</option>
            <option value="mi">MI</option>
            <option value="mn">MN</option>
            <option value="ms">MS</option>
            <option value="mo">MO</option>
            <option value="mt">MT</option>
            <option value="ne">NE</option>
            <option value="nv">NV</option>
            <option value="nh">NH</option>
            <option value="nj">NJ</option>
            <option value="nm">NM</option>
            <option value="ny">NY</option>
            <option value="nc">NC</option>
            <option value="nd">ND</option>
            <option value="oh">OH</option>
            <option value="ok">OK</option>
            <option value="or">OR</option>
            <option value="pa">PA</option>
            <option value="ri">RI</option>
            <option value="sc">SC</option>
            <option value="sd">SD</option>
            <option value="tn">TN</option>
            <option value="tx">TX</option>
            <option value="ut">UT</option>
            <option value="vt">VT</option>
            <option value="va">VA</option>
            <option value="wa">WA</option>
            <option value="wv">WV</option>
            <option value="wi">WI</option>
            <option value="wy">WY</option>
          </select>
          <input
            type="number"
            placeholder="Zip Code"
            className="w-[45%] p-2 m-2"
            name="zip"
            id="zip"
            required
            pattern="\d{5}"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-[45%] p-2 m-2"
            name="phone"
            id="phone"
            required
            pattern="\d{10}"
          />
          <input
            type="email"
            placeholder="Admin Email"
            className="w-[45%] p-2 m-2"
            name="email"
            id="email"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[45%] p-2 m-2"
            name="password"
            id="password"
            required
          />
          <button type="submit" className="button">
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

export default RegisterFormC;
