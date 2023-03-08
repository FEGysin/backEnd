import { connect } from "mongoose";
const startConnection = async () => {
  try {
    const url =
      "mongodb+srv://fegysin:Atlas2903db@cluster0.nx5ys0f.mongodb.net/ecommerce?retryWrites=true&w=majority";
    //"mongodb://localhost:27017/ecommerce";
    console.log("Conecting to " + url);
    return await connect(url);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

// module.exports = { startConnection };
export default startConnection;
