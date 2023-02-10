import { Socket } from "socket.io";

const socket = new Socket();
socket.on("refreshData", (data) => {
  let prodList = document.getElementById("prodList");
  let list = "";
  data.forEach((prod) => {
    list += `<li>Producto : ${prod.title} Categoria : ${prod.category} Descripcion : ${prod.description} Precio : $ ${prod.price}  Disponible : ${prod.stock} unidades</li>`;
  });
  prodList.innerHTML = list;
});
