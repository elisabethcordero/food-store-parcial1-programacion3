import "./cart.css";
import { decreaseQuantity, getCart, getCartTotal, increaseQuantity, removeFromCart } from "../../../utils/cart";
import { logout } from "../../../utils/auth";

const buttonLogout = document.getElementById("logoutButton") as HTMLButtonElement;
buttonLogout.addEventListener("click", () => {
  logout();
});

// Dibuja cada producto del carrito como una fila, con sus botones de cantidad y eliminar
const cargarCarrito = (): void => {
  const contenedorCarrito = document.getElementById("contenedor-carrito") as HTMLElement;
  const totalCarrito = document.getElementById("total-carrito") as HTMLSpanElement;

  const cart = getCart();

  if (cart.length === 0) {
    contenedorCarrito.innerHTML = "<p>Tu carrito está vacío.</p>";
    totalCarrito.textContent = "$0";
    return;
  }

  contenedorCarrito.innerHTML = "";

  cart.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("carrito-item");
    div.innerHTML = `
      <img src="${item.producto.imagen}" alt="${item.producto.nombre}">
      <div class="carrito-item-info">
        <h3>${item.producto.nombre}</h3>
        <p class="precio-unitario">Precio unitario: $${item.producto.precio.toLocaleString()}</p>
      </div>
      <div class="control-cantidad">
        <button class="btn-restar" data-id="${item.producto.id}">-</button>
        <span class="cantidad-numero">${item.cantidad}</span>
        <button class="btn-sumar" data-id="${item.producto.id}">+</button>
      </div>
      <p class="subtotal">$${(item.producto.precio * item.cantidad).toLocaleString()}</p>
      <button class="btn-eliminar" data-id="${item.producto.id}">Eliminar</button>
    `;

    const botonRestar = div.querySelector(".btn-restar") as HTMLButtonElement;
    const botonSumar = div.querySelector(".btn-sumar") as HTMLButtonElement;
    const botonEliminar = div.querySelector(".btn-eliminar") as HTMLButtonElement;

    botonRestar.addEventListener("click", () => {
      decreaseQuantity(item.producto.id);
      cargarCarrito();
    });

    botonSumar.addEventListener("click", () => {
      increaseQuantity(item.producto.id);
      cargarCarrito();
    });

    botonEliminar.addEventListener("click", () => {
      removeFromCart(item.producto.id);
      cargarCarrito();
    });

    contenedorCarrito.appendChild(div);
  });

  // Se recalcula cada vez que se dibuja el carrito, para reflejar el cambio
  const total = getCartTotal(cart);
  totalCarrito.textContent = `$${total.toLocaleString()}`;
};

cargarCarrito();
