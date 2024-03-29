import { CfgObject } from "../config/config.js";
import { ProductMannager } from "./mongoDb/productManager.js";
import { UserMannager } from "./mongoDb/userMannager.js";
import { CartMannager } from "./mongoDb/cartMannager.js";

let ProductDao;
let UserDao;
let CartDao;
// console.log(`Persistence : ${CfgObject.persistence}`);
switch (CfgObject.persistence) {
  case "MONGO":
    CfgObject.dbConnection();
    // ProductDao =await import("./mongoDb/productManager.js")
    ProductDao = new ProductMannager();
    UserDao = new UserMannager();
    CartDao = new CartMannager();
    break;
  case "MEMORY":
    // const UserDaoMemory = require('./memory/user.memory.js')
    // UserDao = UserDaoMemory

    break;
  case "FILESYSTEM":
    break;

  default:
    break;
}

export { ProductDao, UserDao, CartDao };
