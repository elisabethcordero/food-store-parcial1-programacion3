import "./home.css";
import { PRODUCTS, getCategories } from "../../../data/data";
import { logout } from "../../../utils/auth";
import { addToCart, decreaseQuantity, getCantidadEnCarrito, increaseQuantity } from "../../../utils/cart";

const buttonLogout = document.getElementById("logoutButton") as HTMLButtonElement;
buttonLogout.addEventListener("click", () => {
  logout();
});

const contenedorProductos = document.getElementById("contenedor-productos") as HTMLElement;
const inputBuscar = document.getElementById("buscarProducto") as HTMLInputElement;
const formBuscar = document.getElementById("form-buscar") as HTMLFormElement;
const tituloProductos = document.getElementById("titulo-productos") as HTMLHeadingElement;
let categoriaActiva = "Todas";

const dibujarProductos = (): void => {
  const hayFiltroActivo = categoriaActiva !== "Todas" || inputBuscar.value.trim() !== "";
  tituloProductos.textContent = hayFiltroActivo ? "Resultados de la búsqueda" : "Productos Destacados";

  contenedorProductos.innerHTML = "";

  // Se queda solo con los productos que coinciden con la categoría activa y con el texto buscado
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

    const cantidadEnCarrito = getCantidadEnCarrito(producto.id);

    // Si el producto no está en el carrito muestra "Agregar"; si ya está, muestra cantidad y +/-
    const controlesCarrito =
      cantidadEnCarrito === 0
        ? `<button class="btn-agregar" data-id="${producto.id}">Agregar al carrito</button>`
        : `
          <div class="control-cantidad">
            <button class="btn-restar" data-id="${producto.id}">-</button>
            <span class="cantidad-numero">${cantidadEnCarrito}</span>
            <button class="btn-sumar" data-id="${producto.id}">+</button>
          </div>
        `;

    article.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <p class="precio">Precio: $${producto.precio.toLocaleString()}</p>
        <button class="btn-detalles" data-id="${producto.id}">Detalles del producto</button>
        ${controlesCarrito}
    `;

    if (cantidadEnCarrito === 0) {
      const botonAgregar = article.querySelector(".btn-agregar") as HTMLButtonElement;
      botonAgregar.addEventListener("click", () => {
        addToCart(producto);
        dibujarProductos();
      });
    } else {
      const botonRestar = article.querySelector(".btn-restar") as HTMLButtonElement;
      const botonSumar = article.querySelector(".btn-sumar") as HTMLButtonElement;

      botonRestar.addEventListener("click", () => {
        decreaseQuantity(producto.id);
        dibujarProductos();
      });

      botonSumar.addEventListener("click", () => {
        increaseQuantity(producto.id);
        dibujarProductos();
      });
    }

    contenedorProductos.appendChild(article);
  });
};

const cargarCategorias = (): void => {
  const contenedorCategorias = document.getElementById("lista-categorias") as HTMLUListElement;

  // Le saca la clase "activa" a todos los links y se la pone solo al que se clickeó
  const marcarActiva = (linkClickeado: HTMLAnchorElement): void => {
    const todosLosLinks = contenedorCategorias.querySelectorAll("a");
    todosLosLinks.forEach((link) => link.classList.remove("categoria-activa"));
    linkClickeado.classList.add("categoria-activa");
  };

  const liTodas = document.createElement("li");
  liTodas.innerHTML = `<a href="#" class="categoria-activa">Todas</a>`;
  const linkTodas = liTodas.querySelector("a") as HTMLAnchorElement;
  linkTodas.addEventListener("click", (e) => {
    e.preventDefault();
    categoriaActiva = "Todas";
    inputBuscar.value = "";
    dibujarProductos();
    marcarActiva(linkTodas);
  });
  contenedorCategorias.appendChild(liTodas);

  const categorias = getCategories();
  categorias.forEach((categoria) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#">${categoria.nombre}</a>`;
    const link = li.querySelector("a") as HTMLAnchorElement;
    link.addEventListener("click", (e) => {
      e.preventDefault();
      categoriaActiva = categoria.nombre;
      inputBuscar.value = "";
      dibujarProductos();
      marcarActiva(link);
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
