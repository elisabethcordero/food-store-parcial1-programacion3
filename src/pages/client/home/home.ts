import "./home.css";
import type { IProducto } from "../../../types/IProducto";
import { categorias, productos } from "./data";
import { logout } from "../../../utils/auth";

const buttonLogout = document.getElementById("logoutButton") as HTMLButtonElement;
buttonLogout.addEventListener("click", () => {
  logout();
});

const cargarCategorias = (): void => {
  const contenedorCategorias = document.getElementById("lista-categorias") as HTMLUListElement;
  categorias.forEach((categoria) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#">${categoria}</a>`;
    contenedorCategorias.appendChild(li);
  });
};
cargarCategorias();

const cargarProductos = (): void => {
  const contenedorProductos = document.getElementById("contenedor-productos") as HTMLElement;
  productos.forEach((producto: IProducto) => {
    const article = document.createElement("article");
    article.classList.add("producto-card");
    article.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <p class="precio">Precio: $${producto.precio.toLocaleString()}</p>
        <button class="btn-detalles" data-id="${producto.id}">Detalles del producto</button>
        <button class="btn-agregar" data-id="${producto.id}">Agregar al carrito</button>
    `;
    const botonAgregar = article.querySelector(".btn-agregar") as HTMLButtonElement;
    botonAgregar.addEventListener("click", () => {
      alert(`"${producto.nombre}" ha sido agregado al carrito.`);
    });
    contenedorProductos.appendChild(article);
  });
};
cargarProductos();