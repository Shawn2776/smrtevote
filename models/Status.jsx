import mongoose, { Schema } from "mongoose";

const StatusSchema = new Schema(
  {
    status: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    collection: "statuses",
    timestamps: true,
  }
);

const Status = mongoose.models.Status || mongoose.model("Status", StatusSchema);

export default Status;
