"use server";

import Token from "@/models/Token";
import { sendVerificationEmail } from "./email";
import connectMongoDB from "./mongodb";
import Organization from "@/models/Organization";
import User from "@/models/User";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export const addNewOrg = async (formData) => {
  const { email, organization } = Object.fromEntries(formData);
  try {
    await connectMongoDB();

    const token = Math.random().toString(36).substring(2, 15);
    const expires = new Date(Date.now() + 10 * 60 * 1000);

    const existingEmail = await User.findOne({ email });
    const existingOrg = await Organization.findOne({ organization });

    // if they already have an account, don't create a new one
    if (existingEmail || existingOrg) {
      return {
        error:
          "Email and/or Organization already exists. Please try logging in instead",
      };
    }

    const existingTokenEmail = await Token.findOne({ email });
    const existingTokenOrg = await Token.findOne({ organization });

    // one or more tokens found
    if (existingTokenEmail || existingTokenOrg) {
      // if it is the same token
      if (
        existingTokenEmail._id.toString() === existingTokenOrg._id.toString()
      ) {
        // check expiration
        // if it is not expired
        if (existingTokenEmail.expires > new Date()) {
          return {
            error:
              "A verification code has already been created for that email or organization. Please check your email or try a different email or organization.",
          };
        } else {
          // if it is expired
          await Token.findByIdAndDelete(existingTokenEmail._id);
          const newToken = new Token({
            email,
            organization,
            token,
            expires,
          });

          await newToken.save();
          await sendVerificationEmail(email, token, organization);
          return { success: "Verification code sent." };
        }
      } else {
        // if they are different tokens
        return {
          error:
            "A verification code has already been created for that email and/or organization. Please check your email or try again.",
        };
      }
    } else {
      // no tokens found
      const newToken = new Token({
        email,
        organization,
        token,
        expires,
      });

      await newToken.save();
      await sendVerificationEmail(email, token, organization);
    }

    return { success: "Verification code sent." };
  } catch (error) {
    console.log(error);
    return { error: "Failed to add user or organization/ group." };
  }
};

export const verifyToken = async (formData) => {
  const { email, organization, token } = Object.fromEntries(formData);

  try {
    await connectMongoDB();

    // Find the token in the database
    const existingToken = await Token.findOne({ email });

    if (
      !existingToken ||
      existingToken.expires < new Date() ||
      existingToken.token !== token
    ) {
      return { error: "Invalid token." };
    }

    await Token.findByIdAndDelete(existingToken._id);
  } catch (error) {
    console.log(error);
    return { error: "Error verifying token." };
  }

  redirect(
    `/register/new/${organization}?inEmail=${email}&inOrganization=${organization}`
  );
};

export const addOrganizationandUser = async (formData) => {
  const {
    givenName,
    familyName,
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

    console.log("Connected to MongoDB");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("Hashed Password", hashedPassword);

    const newOrganization = new Organization({
      organization,
      email,
      password: hashedPassword,
      phone,
      addrLine1,
      addrLine2,
      city,
      state,
      zip,
      industry,
    });

    const newOrg = await newOrganization.save();

    const newUser = new User({
      givenName,
      familyName,
      email,
      organization: newOrg._id,
      userType: "Admin",
      status: "active",
      addrLine1,
      addrLine2,
      city,
      state,
      zip,
      password: hashedPassword,
      phone,
    });

    const return2 = await newUser.save();

    return { success: "Organization and user created." };
  } catch (error) {
    console.log(error);
    return { error: "Error creating organization." };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await connectMongoDB();

    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete user");
  }

  revalidatePath("/dashboard/users");
};

export const login = async (formData) => {
  const { email, organization, password } = Object.fromEntries(formData);

  try {
    await connectMongoDB();

    const user = await User.findOne({ email });

    if (!user || user.organization !== organization) {
      return {
        error: "Login Error. Please check email and/or password and try again.",
      };
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return {
        error: "Login Error. Please check email and/or password and try again.",
      };
    }

    return { success: "Login successful." };
  } catch (error) {
    console.log(error);
    return { error: "Error logging in." };
  }
};
