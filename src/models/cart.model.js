import { Schema, model } from "mongoose";
const collection = "carts";
const CartSchema = new Schema({
  userId: {
    type: String,
    required: true,
    index: true,
  },
  eMail: { type: String, required: true },
  products: {
    type: [
      {
        productId: { type: Schema.Types.ObjectId, ref: "products" },
        quantity: { type: Number, default: 0 },
      },
    ],
  },
  cartTotal: { type: Number, default: 0 },
});
CartSchema.pre("find", function () {
  this.populate("products.product");
});
const CartModel = model(collection, CartSchema);

export default CartModel;
