import mongoose, { Schema } from "mongoose";

const SessionSchema = new Schema(
  {
    sessionToken: {
      type: String,
      required: true,
      unique: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    expires: {
      type: Date,
      required: true,
    },
  },
  {
    collection: "sessions",
    timestamps: true,
  }
);

const Session =
  mongoose.models.Session || mongoose.model("Session", SessionSchema);

export default Session;
