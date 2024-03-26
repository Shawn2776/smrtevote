"use server";

import Token from "@/models/Token";
import { sendVerificationEmail } from "./email";
import connectMongoDB from "./mongodb";
import Organization from "@/models/Organization";
import bcrypt from "bcrypt";
import User from "@/models/User";
import { redirect } from "next/navigation";

export const addNewOrg = async (formData) => {
  const { email, organization } = Object.fromEntries(formData);
  try {
    await connectMongoDB();

    const exisitingUser = await User.findOne({ email });
    console.log("Existing User: ", exisitingUser);

    if (exisitingUser) {
      return {
        error: "User already exists. Try logging in instead.",
      };
    }

    const token = Math.random().toString(36).substring(2, 15);
    const expires = new Date(Date.now() + 10 * 60 * 1000);

    console.log("Token: ", token);
    console.log("Expires: ", expires);

    // check if the domain is already in use
    const existingOrg = await Organization.findOne({
      organization,
    });

    if (existingOrg) {
      console.log("Organization/ Group already in use.");
      return {
        error: "Organization/ Group already in use.",
      };
    }

    // Check if a token already exists for the email and hasn't expired
    const existingToken = await Token.findOne({
      email,
      expires: { $gt: new Date() },
    });

    if (existingToken) {
      console.log("Token already exists.");
      const tokenAgeInMinutes =
        (new Date() - existingToken.createdAt) / (1000 * 60);
      if (tokenAgeInMinutes < 10) {
        console.log("Token was recently sent.");
        return {
          error:
            "A token was recently sent. Please wait for at least 10 minutes before requesting a new one.",
        };
      } else {
        console.log("Token was sent more than 10 minutes ago.");
        // If the token is older than 10 minutes, delete it
        await Token.findByIdAndDelete(existingToken._id);
      }
    }

    const newToken = new Token({
      email,
      token,
      expires,
      organization,
    });

    // Save the verification code to the database
    await newToken.save();

    console.log("Token saved.");

    // Send a verification email
    await sendVerificationEmail(email, token, organization);

    console.log("Verification email sent.");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add user");
  }
};

export const verifyToken = async (formData) => {
  const { email, organization, token } = Object.fromEntries(formData);

  try {
    await connectMongoDB();

    // Find the token in the database
    const existingToken = await Token.findOne({ email });

    console.log("Existing Token: ", existingToken.token);
    console.log("Token: ", token);

    if (
      !existingToken ||
      existingToken.expires > new Date() ||
      existingToken.token !== token
    ) {
      return { error: "Invalid token." };
    }

    await Token.findByIdAndDelete(existingToken._id);
  } catch (error) {
    console.log(error);
  }

  redirect(`/register/new/${organization}`);
};

export const addOrganization = async (formData) => {
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

  try {
    await connectMongoDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("password", salt);

    const newOrganization = new Organization({
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
      password: hashedPassword,
    });

    await newOrganization.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add user");
  }
};
