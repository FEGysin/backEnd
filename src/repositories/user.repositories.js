export class UserRepositories {
  constructor(userDao) {
    this.userDao = userDao;
  }
  addUser = async (user) => {};
  getUsers = async () => await this.userDao.getUsers();
  getUser = async (eMail) => await this.userDao.getUser(eMail);
}
