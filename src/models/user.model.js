import { Schema, model } from "mongoose";
const collection = "users";
const UserSchema = new Schema({
  firstName: { String },
  lastName: { String },
  eMail: { String, required: true, unique: true, index: true },
  password: { String },
  // phone: { String },
  // adress: [
  //   {
  //     streetName: { String },
  //     number: { Number },
  //     floor: { Number },
  //     door: { String },
  //     zipCode: { String },
  //     country: { String },
  //     state: { String },
  //   },
  // ],
  role: { String, default: "user" },
});
const UserModel = model(collection, UserSchema);
export default UserModel;
