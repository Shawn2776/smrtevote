"use client";

import { addOrganizationandUser } from "@/lib/actions";
import { redirect, useSearchParams } from "next/navigation";
import { useState } from "react";

const RegisterFormC = () => {
  const searchParams = useSearchParams();
  const inEmail = searchParams.get("inEmail");
  const inOrganization = searchParams.get("inOrganization");

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

    console.log("Email: ", email);
    console.log("inEmail: ", inEmail);
    console.log("Organization: ", organization);
    console.log("inOrganization: ", inOrganization);

    if (email !== inEmail || organization !== inOrganization) {
      return { error: "Invalid email or organization." };
    }

    try {
      const result = await addOrganizationandUser(formData);
      console.log("Result: ", result);

      if (result?.error) {
        setError(result.error);
      }
    } catch (error) {
      console.log(error);
      return { error: "Error creating organization." };
    }

    // reset form
    // client-side validation

    redirect(`/login?inEmail=${email}&inOrganization=${organization}`);
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
          <div className="w-full text-sm text-textSoft">
            Personal Information
          </div>
          <input
            type="text"
            placeholder="First Name"
            className="w-[45%] p-2 m-2"
            name="givenName"
            id="givenName"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-[45%] p-2 m-2"
            name="familyName"
            id="familyName"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-[45%] p-2 m-2"
            name="email"
            id="email"
            required
            readOnly
            value={inEmail}
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
            type="password"
            placeholder="Password"
            className="w-[100%] p-2 m-2"
            name="password"
            id="password"
            required
          />
          <div className="w-full mt-8 text-sm text-textSoft">
            Organization/ Group Information
          </div>
          <input
            type="text"
            className="w-[100%] p-2 m-2"
            name="organization"
            id="organization"
            required
            value={inOrganization}
            readOnly
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
          <select
            name="industry"
            id="industry"
            className="w-[45%] p-2 m-2"
            required
          >
            <option value="industry">Choose an Industry</option>
            <option value="Education">Education</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Finance">Finance</option>
            <option value="Retail">Retail</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Technology">Technology</option>
            <option value="Other">Other</option>
          </select>

          <button type="submit" className="mt-2 rounded-lg button bg-button">
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
