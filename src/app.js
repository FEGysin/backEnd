import CfgObject from "./config/config.js";

const PORT = CfgObject.PORT;
const httpServer = app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Servidor activo y escuchando por puerto: ${PORT}`);
});
