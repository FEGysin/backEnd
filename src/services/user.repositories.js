import moment from "moment";
import { ThisMonthInstance } from "twilio/lib/rest/api/v2010/account/usage/record/thisMonth.js";
import { UserDTO } from "../dto/user.dto.js";
import { createHash } from "../utils/bCrypt.js";
import { GetAge } from "../utils/dateDiff.js";

export class UserRepositories {
  constructor(userDao) {
    this.userDao = userDao;
  }
  createUser = async (user) => {
    const userMod = {
      ...user,
      birthDate: moment(user.birthDate).toISOString(),
      age: GetAge(moment(user.birthDate), "years"),
      password: createHash(user.password),
      last_connection: moment().toISOString(),
    };
    return await this.userDao.createUser(userMod);
  };
  getUsers = async () => {
    const users = await this.userDao.getUsers();
    return users.map((user) => new UserDTO(user));
  };
  getUser = async (eMail) => await this.userDao.getUser(eMail);
  userExists = async (eMail) => await this.userDao.userExists(eMail);
  getUserById = async (uId) => await this.userDao.getUserById(uId);
  updateUser = async (user) => await this.userDao.updateUser(user);
  deleteUser = async (eMail) => await this.userDao.deleteUser(eMail);
}
