import { Router } from "express";
import UserModel from "../models/user.model";
const router = Router();
router.get("/login", async (req, res) => {
  res.status(200).render("login");
});

router.post("/login", async (req, res) => {
  const { eMail, password } = req.body;
  const user = await UserModel.findOne({ eMail, password });
  if (!user)
    return res
      .status(401)
      .send({ starus: "error", message: "Usuario o Password erroneos" });
  req.session.user = {
    name: `${user.firstName} ${user.lastName}`,
    eMail: user.eMail,
  };
  res.status(200).redirect("/api/products");
});

router.get("/register", async (req, res) => {
  res.status(200).render("register");
});

router.post("/register", async (req, res) => {
  const user = ({ firstName, lastName, eMail, password } = req.body);
  let res = await UserModel.create(user);
  res.status(200).json({
    status: "success",
    message: "Usuario creado correctamente",
  });

  router.get("/logout", async (req, res) => {
    req.session.destroy((err) => {
      if (err) return res.send({ status: "Logout error", message: err });
    });
    res.status(200).redirect("/login");
  });
});

export default router;
