import fs from "fs";
import { Router } from "express";
const path = "./src/data";
const router = Router();
const Carts = []; //id=0, products=[]
// const cart = {
//   id: 0,
//   products: [],
// };
const LoadData = async () => {
  try {
    let data = await fs.promises.readFile(`${path}/carts.dat`, "utf8");
    let parsedData = [];
    parsedData = JSON.parse(data);
    parsedData.forEach((cart) => {
      Carts.push(cart);
    });
  } catch (err) {
    console.log(err);
  }
};

const SaveData = async () => {
  try {
    await fs.promises.writeFile(
      `${path}/carts.dat`,
      JSON.stringify(Carts),
      "utf-8"
    );
  } catch (err) {
    console.log(err);
  }
};

router.get("/:cId", (req, res) => {
  const { cId } = req.params;
  const cart = Products.find((item) => item.id === parseInt(cId));
  if (!cart) res.send("Carrito invalido o inexistente");
  res.send(cart);
}); //Get Cart

router.post("/:cId/products/:pId", (req, res) => {
  SaveData();
}); //Agregar - Modificar Producto

export default router;
