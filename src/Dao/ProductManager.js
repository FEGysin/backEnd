import ProductModel from "../models/product.model.js";
class ProductMannager {
  constructor() {
    // this.products = [];
  }

  addProduct = (
    title,
    description,
    code,
    price,
    stock,
    category,
    thumbnails
  ) => {
    // const{ title,
    //   description,
    //   code,
    //   price,
    //   stock,
    //   category,
    //   thumbnails}=params
    return ProductModel.create({
      title,
      description,
      code,
      price,
      stock,
      category,
      thumbnails,
    });
  };

  delProduct = (id) => {
    return ProductModel.updateOne({ _id: id }, { status: false });
  };

  modProduct = (id, code, description, stock) => {
    // const{ code, description, stock}=params
    return ProductModel.updateOne(
      { _id: id },
      { description, stock, status: true }
    );
  };

  getProducts = (limit = 0, bDel = false) => {
    if (limit == 0) {
      if (!bDel) return ProductModel.find({ status: true }).lean();
      return ProductModel.find({}).lean();
    } else if (limit > 0) {
      if (!bDel) return ProductModel.find({ status: true }).limit(limit).lean();
      return ProductModel.find({}).limit(limit).lean();
    }
  };

  getProductById = (id) => {
    return ProductModel.find({ _id: id }).lean();
  };
  getProductByCode = (code) => {
    return ProductModel.find({ code: code }).lean();
  };
}
const PM = new ProductMannager();
export default PM;
