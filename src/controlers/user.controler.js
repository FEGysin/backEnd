import { userService } from "../services/index.js";
export class UserClass {
  getUsers = async (req, res) => userService.getUsers;
  getUser = async (req, res) => {
    const { eMail } = req.user.eMail;
    return userService.getUser(eMail);
  };
  getCurUser = async (req, res) => {
    const { eMail } = req.user.eMail;
    return userService.getUser(eMail);
  };
  getUserById = async (req, res) => {
    const { uId } = req.params;
    return userService.getUserById(uId);
  };
  updateUser = async (req, res) => {};
  deleteUser = async (req, res) => {
    const { uId } = req.params;
    return userService.deleteUser(uId);
  };
}
