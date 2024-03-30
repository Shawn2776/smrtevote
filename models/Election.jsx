import mongoose, { Schema } from "mongoose";

const ElectionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    startTime: {
      type: Date,
      required: true,
    },
  },
  {
    endtime: {
      type: Date,
      required: true,
    },
  },
  {
    startDate: {
      type: Date,
      required: true,
    },
  },
  {
    endDate: {
      type: Date,
      required: true,
    },
  },
  {
    type: {
      type: String,
      required: true,
      enum: ["live", "test"],
      default: "test",
    },
  },
  {
    location: {
      type: String,
      required: true,
      enum: ["online", "onsite", "both"],
      default: "online",
    },
  },
  {
    anonymity: {
      type: String,
      required: true,
      enum: ["secret", "poll", "show"],
      default: "secret",
    },
  },
  {
    resultViewingAdmins: {
      type: String,
      required: true,
      enum: ["after", "during"],
      default: "after",
    },
  },
  {
    resultViewingVoters: {
      type: String,
      required: true,
      enum: ["after", "during", "never"],
      default: "never",
    },
  },
  {
    candidates: {
      type: [String],
      required: true,
    },
  },
  {
    status: {
      type: String,
      required: true,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    votes: {
      type: [
        {
          user: {
            type: Schema.Types.ObjectId,
            ref: "User",
          },
          candidate: {
            type: String,
            required: true,
          },
        },
      ],
    },
  },
  {
    collection: "Elections",
    timestamps: true,
  }
);

const Election =
  mongoose.models.Election || mongoose.model("Election", ElectionSchema);

export default Election;
