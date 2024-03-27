import mongoose, { Schema } from "mongoose";

const OrgSchema = new Schema(
  {
    organization: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 26,
    },
    phone: {
      type: String,
      required: true,
      length: 10,
    },
    addrLine1: {
      type: String,
      required: true,
    },
    addrLine2: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
      length: 5,
    },
    status: {
      type: String,
      required: true,
      enum: ["active", "inactive"],
      default: "active",
    },
    industry: {
      type: String,
      required: true,
      enum: [
        "Education",
        "Healthcare",
        "Finance",
        "Retail",
        "Manufacturing",
        "Technology",
        "Other",
      ],
    },
    image: {
      type: String,
      default: "/noavatar.png",
    },
  },
  {
    collection: "organizations",
    timestamps: true,
  }
);

const Organization =
  mongoose.models.Organization || mongoose.model("Organization", OrgSchema);

export default Organization;
