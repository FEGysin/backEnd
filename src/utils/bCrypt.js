import bcrypt from "bcrypt";
const createHash = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(10));
const isValidPassword = (user, password) => {
  console.log("USR   " + user);
  console.log("PWD   " + password);
  return bcrypt.compareSync(password, user.password);
};
export { createHash, isValidPassword };
