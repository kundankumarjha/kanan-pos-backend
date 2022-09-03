import mongoose from "mongoose";
const ItemSchema = new mongoose.Schema(
  {
    itemMainCategory: String,
    itemSubCategory: String,
    itemKey: String,
    itemName: String,
    displayName: String,
    itemSubsubCategory: String,
    stock: Number,
    image: String,
    itemClass: String,
    sellingPriceExclTax: Number,
    sellingPriceInclTax: Number,
    sgst: Number,
    cgst: Number,
    igst: Number,
    unitOfMeasurement: {
      type: String,
      enum : ['Kilograms', 'Box', 'Pieces'],
      default: 'Kilograms'
    },
  },
  { timestamps: true }
);

export default mongoose.model("Item", ItemSchema)
