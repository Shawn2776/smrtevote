import mongoose, { Schema } from "mongoose";

const UserTypeSchema = new Schema(
  {
    userType: {
      type: String,
      required: true,
    },
  },
  {
    collection: "userTypes",
    timestamps: true,
  }
);

const UserType =
  mongoose.models.UserType || mongoose.model("UserType", UserTypeSchema);

export default UserType;
