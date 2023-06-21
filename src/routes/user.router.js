import { Router } from "express";
import { UserClass } from "../controlers/user.controler.js";

import { authToken } from "../utils/jsonwt.js";
const router = Router();
router.get("/:uId", authToken, UserClass.getUserById());
router.get("/current", authToken, UserClass.getCurUser);
router.get("/premium/:uId", authToken, UserClass.getUserById());
router.get("/:uid/documents", authToken, UserClass.getUserById());
router.post("/:uid/documents", authToken, UserClass.updateUser);
router.delete("/:uId", authToken, UserClass.deleteUser);
export default router;
