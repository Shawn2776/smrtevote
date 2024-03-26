import Industry from "@/models/Industry";
import connectMongoDB from "./mongodb";

export const fetchIndustries = async () => {
  try {
    await connectMongoDB();
    const industries = await Industry.find();
    console.log(industries);
    return industries;
  } catch (error) {
    throw new Error("Failed to fetch industries.", error);
  }
};
