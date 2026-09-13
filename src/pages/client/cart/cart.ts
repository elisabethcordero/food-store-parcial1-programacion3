import { getCart, getCartTotal } from "../../../utils/cart";
import { logout } from "../../../utils/auth";

const buttonLogout = document.getElementById("logoutButton") as HTMLButtonElement;
buttonLogout.addEventListener("click", () => {
  logout();
});

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
      <p>${item.producto.nombre} - $${item.producto.precio.toLocaleString()} x ${item.cantidad}</p>
    `;
    contenedorCarrito.appendChild(div);
  });

  const total = getCartTotal(cart);
  totalCarrito.textContent = `$${total.toLocaleString()}`;
};
cargarCarrito();
