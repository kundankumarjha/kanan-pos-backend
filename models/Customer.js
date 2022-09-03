import mongoose from "mongoose";
const CustomerSchema = new mongoose.Schema(
  {
    email: {
      type: String
    },
    name: {
      type: String
    },
    address: {
      type: String
    },
    img: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Customer", CustomerSchema);
