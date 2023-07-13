import { Schema, model } from "mongoose";

const collection = "users";
const UserSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  eMail: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  birthDate: { type: Date, requiered: true },
  age: {
    type: Number,
  },
  password: { type: String },
  phone: { String },
  adress: [
    {
      streetName: { String, default: "" },
      number: { Number, default: 0 },
      floor: { Number, default: 0 },
      door: { String, default: "" },
      zipCode: { String, default: "" },
      country: { String, default: "" },
      state: { String, default: "" },
    },
  ],
  // cartId: { type: Schema.Types.ObjectId, ref: "carts" },
  cartId: { type: String, default: "0" },
  role: { type: String, default: "user" },
  documents: [
    {
      name: { type: String, default: "" },
      reference: { type: String, default: "" },
    },
  ],
  last_connection: { type: Date },
});
// UserSchema.pre("find", function () {
//   this.populate("carts._id");
//   // this.populate("products.code").populate("users.userId");
// });
const UserModel = model(collection, UserSchema);
export default UserModel;
