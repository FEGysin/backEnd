import fs from "fs";
class ProductMannager {
  #path = "./src/data";
  #data = "";
  constructor() {
    this.products = [];
  }

  addProduct = (
    producto,
    detalle,
    productId,
    precio,
    stock,
    category,
    imgPath
  ) => {
    const product = {
      id: 0,
      title: producto,
      description: detalle,
      code: productId,
      price: precio,
      status: true,
      stock: stock,
      category: category,
      thumbnails: imgPath,
    };
    const index = this.products.find((product) => product.code === productId);
    console.log(index);
    if (!index) {
      if (this.products.length === 0) {
        product.id = 1;
      } else {
        product.id = this.products[this.products.length - 1].id + 1;
      }

      this.products.push(product);
      PM.SaveData();
      return true;
    }
    return false;
  };

  delProduct = (id) => {
    const index = getIndex(id);

    if (!product.status) {
      return false;
    }
    product.status = false;
    this.products[index] = product;
    return true;
  };

  modProduct = (id, description, stock) => {
    const index = this.getIndex(id);
    let product = this.products[index];
    product.description = description;
    product.stock = stock;
    product.status = true;
    this.products[index] = product;
    PM.SaveData();
    return true;
  };

  getIndex = (id) => {
    const index = this.products.findindex((prod) => prod.id === parseInt(id));
    return index;
  };

  getProducts = (limit = 0, bDel = false) => {
    if (!bDel)
      return this.products.filter((product) => product.status === true);
    return this.products;
  };

  getProductById = (id, bExists = false) => {
    const res = this.products.find((product) => product.id === parseInt(id));
    if (!res) {
      return false;
    }
    if (!bExists) return res;
    return true;
  };

  SaveData = () => {
    console.log("Guardando");
    console.log(JSON.stringify(this.products));
    console.log("");
    console.log("Datos : " + this.#data);
    this.#data = JSON.stringify(this.products);
    fs.promises
      .writeFile(`${this.#path}/products.json`, this.#data, "utf-8")
      .then(() => console.log("Fichero actualizado"))
      .catch((err) => console.log(err));
    return;
  };

  LoadData = async () => {
    if (!fs.existsSync(`${this.#path}/products.json`)) {
      addProducts();
      return;
    }
    try {
      this.#data = await fs.promises.readFile(
        `${this.#path}/products.json`,
        "utf8"
      );
      this.products = JSON.parse(this.#data);
    } catch (err) {
      console.log(err);
    }
  };
}
const PM = new ProductMannager();

PM.LoadData();

function addProducts() {
  // producto, detalle, productId, precio, stock, category, imgPath
  PM.addProduct("Madera de Pino", "", "md-Pino", 200, 20, "", [
    "./img/MaderaPino.jpg",
  ]);
  PM.addProduct("Madera de Quebracho Colorado", "", "md-QuebCol", 500, 5, "", [
    "./img/QuebrachoColorado.jpg",
  ]);
  PM.addProduct("Madera de Espinillo", "", "md-Espinillo", 350, 10, "", [
    "./img/MaderaEspinillo.jpg",
  ]);
  PM.addProduct("Madera de Quebracho Blanco", "", "md-QuebBco", 450, 10, "", [
    "./img/QuebrachoBlanco.jpg",
  ]);
  PM.addProduct("Madera Eucalipto", "", "md-Eucalipto", 350, 15, "", [
    "./img/Eucalipto.jpg",
  ]);
  PM.addProduct(
    "Carbon de Quebracho Blanco 5kg",
    "",
    "cb-QuebBco-5kg",
    350,
    25,
    "",
    ["./img/CarbonQuebrBlanco.jpg"]
  );
  PM.addProduct(
    "Carbon de Quebracho Blanco 10kg",
    "",
    "cb-QuebBco-10kg",
    600,
    25,
    "",
    ["./img/CarbonQuebrBlanco.jpg"]
  );
  PM.addProduct("Briquetas", "", "cb-Briq", 600, 15, "", [
    "./img/Briquetas.jpg",
  ]);
  PM.addProduct("Pastillas Fuego Facil", "", "ig-FuegFacil", 150, 15, "", [
    "./img/FuegoFacil.jpg",
  ]);
  PM.addProduct("Benzina 250ml", "", "ig-Benzina-250", 250, 15, "", [
    "./img/Benzinma250.jpg",
  ]);
  PM.addProduct("Alcohol de Quemar", "", "ig-AlcQuemar", 100, 50, "", [
    "./img/Alcohol.jpg",
  ]);
}
//export default PM;
