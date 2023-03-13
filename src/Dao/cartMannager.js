import CartModel from "../models/cart.model.js";
class CartMannager {
  constructor() {}
  addCart = async (params) => {
    // console.log(params);
    let { userId, cartId, products, cartTotal } = params;
    userId = !userId ? 1 : userId;
    cartId = !cartId ? 1 : cartId;
    return await CartModel.create({
      cartId,
      userId,
      products,
      cartTotal,
    });
  };
  modCart = async (params) => {
    let { uId, cId, pId, prodId, cartTotal, code, price, quantity } = params;
    // console.log(code);
    uId = !uId ? 1 : uId;
    cartTotal = !cartTotal ? price : cartTotal;
    cId = !cId ? 1 : cId;
    quantity = !quantity ? 1 : quantity;
    // console.log(price);
    // let products = [];
    // let product = { prodId, code, quantity: 0 };
    // products.push(product);
    // const nWreg = Object.assign({}, { products }, params);
    // const nwCart = await this.addCart(nWreg);

    const result = await CartModel.updateOne(
      { userId: uId, cartId: cId },
      {
        $inc: {
          // cartTotal: price * quantity,
          "products.$[elm].quantity": quantity,
        },
      },
      {
        arrayFilters: [{ "elm.code": code }],
      }
    );
    if (result.modifiedCount > 0) {
      await CartModel.updateOne(
        { userId: uId, cartId: cId },
        {
          $inc: {
            cartTotal: price * quantity,
          },
        },
        {
          arrayFilters: [{ "elm.code": code }],
        }
      );
    } else {
      await CartModel.updateOne(
        { userId: uId, cartId: cId },
        {
          $inc: {
            cartTotal: price * quantity,
          },
          $addToSet: {
            products: {
              prodId: prodId,
              code: code,
              quantity: quantity,
            },
          },
        },
        {
          arrayFilters: [{ "elm.code": code }],
        }
      );
    }
    return await CartModel.find({ userId: uId, cartId: cId }).lean();
  };
  delCart = async (params) => {
    const { cId } = params;
    await CartModel.deleteOne({ _id: cId });
    return await CartModel.find({ _id: cId }).lean();
  };
  getCarts = async (params) => {
    return await CartModel.find({}).lean();
  };
  getCartbyId = async (params) => {
    const { cId } = params;
    return await CartModel.find({ _id: cId }).lean();
  };
}
const CartManager = new CartMannager();
export default CartManager;
