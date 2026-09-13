import "./home.css";
import { PRODUCTS, getCategories } from "../../../data/data";
import { logout } from "../../../utils/auth";
import { addToCart } from "../../../utils/cart";

const buttonLogout = document.getElementById("logoutButton") as HTMLButtonElement;
buttonLogout.addEventListener("click", () => {
  logout();
});

const contenedorProductos = document.getElementById("contenedor-productos") as HTMLElement;
const inputBuscar = document.getElementById("buscarProducto") as HTMLInputElement;
const formBuscar = document.getElementById("form-buscar") as HTMLFormElement;
let categoriaActiva = "Todas";

const dibujarProductos = (): void => {
  contenedorProductos.innerHTML = "";

  const productosFiltrados = PRODUCTS.filter((producto) => {
    const coincideCategoria = categoriaActiva === "Todas" || producto.categoria === categoriaActiva;
    const coincideNombre = producto.nombre.toLowerCase().includes(inputBuscar.value.toLowerCase());
    return coincideCategoria && coincideNombre;
  });

  if (productosFiltrados.length === 0) {
    contenedorProductos.innerHTML = "<p>No se encontraron productos.</p>";
    return;
  }

  productosFiltrados.forEach((producto) => {
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
      addToCart(producto);
      alert(`"${producto.nombre}" ha sido agregado al carrito.`);
    });
    contenedorProductos.appendChild(article);
  });
};

const cargarCategorias = (): void => {
  const contenedorCategorias = document.getElementById("lista-categorias") as HTMLUListElement;

  const liTodas = document.createElement("li");
  liTodas.innerHTML = `<a href="#">Todas</a>`;
  liTodas.addEventListener("click", (e) => {
    e.preventDefault();
    categoriaActiva = "Todas";
    dibujarProductos();
  });
  contenedorCategorias.appendChild(liTodas);

  const categorias = getCategories();
  categorias.forEach((categoria) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#">${categoria.nombre}</a>`;
    li.addEventListener("click", (e) => {
      e.preventDefault();
      categoriaActiva = categoria.nombre;
      dibujarProductos();
    });
    contenedorCategorias.appendChild(li);
  });
};

formBuscar.addEventListener("submit", (e) => {
  e.preventDefault();
});

inputBuscar.addEventListener("input", () => {
  dibujarProductos();
});

cargarCategorias();
dibujarProductos();
