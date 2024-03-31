import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    givenName: {
      type: String,
      required: true,
    },
    familyName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    emailVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
    phone: {
      type: String,
      required: true,
      length: 10,
    },
    userType: {
      type: String,
      required: true,
      enum: [
        "SuperAdmin", // "SuperAdmin" is a special user type that has all permissions
        "Admin",
        "User",
        "Guest",
        "Faculty",
        "Editor",
        "Staff",
        "Student",
        "Voter",
      ],
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 26,
    },
    organization: {
      type: Schema.Types.ObjectId,
      ref: "Organization",
    },
    accounts: {
      type: [Schema.Types.ObjectId],
      ref: "Account",
    },
    sessions: {
      type: [Schema.Types.ObjectId],
      ref: "Session",
    },
    userType: {
      type: String,
      required: true,
      enum: [
        "Admin",
        "User",
        "Guest",
        "Faculty",
        "Editor",
        "Staff",
        "Student",
        "Voter",
      ],
    },
    status: {
      type: String,
      required: true,
      enum: ["active", "inactive", "pending", "suspended", "banned"],
    },
    address: {
      type: {
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
      },
      required: false,
    },
    image: {
      type: String,
      default: "/noavatar2.png",
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
