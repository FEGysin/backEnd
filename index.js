import fs from "fs";
class ProductMannager {
  #path = "./data";
  #data;
  constructor() {
    this.products = [];
  }

  addProduct = (producto, precio, imgPath, productId, stock) => {
    const product = {
      id: 0,
      title: producto,
      price: precio,
      thumbnail: imgPath,
      code: productId,
      stock: stock,
    };

    if (this.products.findIndex((product) => product.code === productId)) {
      if (this.products.length === 0) {
        product.id = 1;
      } else {
        product.id = this.products[this.products.length - 1].id + 1;
      }
      this.products.push(product);
      return;
    }
    return console.log(`Duplicated Code "${productId}"`);
  };
  getProducts = () => {
    return this.products;
  };
  getProductById = (id) => {
    const res = this.products.filter((product) => product.id === id);
    if (res.length === 0) {
      return '"Product not Found"';
    }
    return res;
  };

  SaveData = () => {
    this.#data = JSON.stringify(this.products);
    fs.promises
      .writeFile(`${this.#path}/stock.dat`, this.#data, "utf-8")
      .then(() => console.log("Fichero actualizado}"))
      .catch((err) => console.log(err));
    return;
  };

  LoadData = async () => {
    if (!fs.existsSync(`${this.#path}/stock.dat`)) {
      addProducts();
      // return;
    }
    try {
      this.#data = await fs.promises.readFile(
        `${this.#path}/stock.dat`,
        "utf8"
      );
      this.products = JSON.parse(this.#data);
      console.log(this.products);
    } catch (err) {
      console.log(err);
    }
  };
}
const PM = new ProductMannager();

PM.LoadData();

function addProducts() {
  // title, price, thumbnail, stock
  PM.addProduct("Madera de Pino", 200, "./img/MaderaPino.jpg", "md-Pino", 20);
  PM.addProduct(
    "Madera de Quebracho Colorado",
    500,
    "./img/QuebrachoColorado.jpg",
    "md-QuebCol",
    5
  );
  PM.addProduct(
    "Madera de Espinillo",
    350,
    "./img/MaderaEspinillo.jpg",
    "md-Espinillo",
    10
  );
  PM.addProduct(
    "Madera de Quebracho Blanco",
    450,
    "./img/QuebrachoBlanco.jpg",
    "md-QuebBco",
    10
  );

  PM.addProduct(
    "Madera Eucalipto",
    350,
    "./img/Eucalipto.jpg",
    "md-Eucalipto",
    15
  );

  PM.addProduct(
    "Carbon de Quebracho Blanco 5kg",
    350,
    "./img/CarbonQuebrBlanco.jpg",
    "cb-QuebBco-5kg",
    25
  );

  PM.addProduct(
    "Carbon de Quebracho Blanco 10kg",
    600,
    "./img/CarbonQuebrBlanco.jpg",
    "cb-QuebBco-10kg",
    25
  );
  PM.addProduct("Briquetas", 600, "./img/Briquetas.jpg", "cb-Briq", 15);
  PM.addProduct(
    "Pastillas Fuego Facil",
    150,
    "./img/FuegoFacil.jpg",
    "ig-FuegFacil",
    15
  );
  PM.addProduct(
    "Benzina 250ml",
    250,
    "./img/Benzinma250.jpg",
    "ig-Benzina-250",
    15
  );
  PM.addProduct(
    "Alcohol de Quemar",
    100,
    "./img/Alcohol.jpg",
    "ig-AlcQuemar",
    15
  );
  PM.SaveData();
}
