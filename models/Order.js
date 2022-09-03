import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema({
  customer: {
    email: String,
    name: String,
    address: String,
    phone: String
  },
  discount: Number,
  total: Number,
  sub_total: Number,
  grand_total: Number,
  cart: [{
    itemKey: String,
    itemName: String,
    price: Number,
    package: String,
    unit:String,
    qty: Number,
    total:Number
  }]
});

export default mongoose.model("Order", OrderSchema)
