import { connect, connection } from "mongoose";
class MongoSingleton {
  static #instance;
  constructor(url) {
    connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  }
  static getInstance(url) {
    if (this.#instance) {
      return this.#instance;
    }
    this.#instance = new MongoSingleton(url);
    return this.#instance;
  }
}
const ocnnMongo = connection;
export { MongoSingleton, ocnnMongo };
