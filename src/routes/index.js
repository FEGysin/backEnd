import viewsRouter from "./routes/views.router.js";
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";
app.use("/", viewsRouter);
app.use("/api/products", productsRouter);
app.use("/api/cart", cartsRouter);
