import mongoose, { Schema } from "mongoose";

const IndustrySchema = new Schema(
  {
    industry: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    collection: "industries",
    timestamps: true,
  }
);

const Industry =
  mongoose.models.Industry || mongoose.model("Industry", IndustrySchema);

export default Industry;
