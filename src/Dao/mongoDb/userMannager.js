import UserModel from "./models/user.model.js";
export class UserMannager {
  constructor() {}
  createUser = async ({ user }) => await UserModel.create({ user });
  getUsers = async () => await UserModel.find({});
  getUser = async (eMail) => await UserModel.find({ eMail: eMail });
  // getUserById = async (id) => await UserModel.find({ _id: id });
  userExists = async (eMail) => await UserModel.exists({ eMail: eMail });
  UpdateUser = async () => {
    return true;
  };
  deleteUser = async (eMail) => await UserModel.remove({ eMail: eMail });
}
