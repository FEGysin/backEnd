import { Schema, model } from "mongoose";
const collection = "products";
const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  code: {
    type: String,
    required: true,
    index: true,
  },
  price: {
    type: Number,
  },
  status: { type: Boolean, default: true },
  stock: { type: Number },
  category: {
    type: String,
    required: true,
  },
  thumbnails: { type: Array },
});

const ProductModel = model(collection, ProductSchema);

// module.exports = { ProductModel };
export default ProductModel;
