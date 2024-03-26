import mongoose, { Schema } from "mongoose";

const TokenSchema = new Schema(
  {
    token: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    organization: {
      type: String,
      required: true,
      unique: true,
    },
    expires: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Token = mongoose.models.Token || mongoose.model("Token", TokenSchema);

export default Token;
