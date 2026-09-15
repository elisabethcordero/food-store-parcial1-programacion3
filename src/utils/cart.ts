import type { ICartItem, IProduct } from "../types/product";

const CART_KEY = "cart";

// Lee el carrito guardado en localStorage (es texto) y lo devuelve como array
export const getCart = (): ICartItem[] => {
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
};

// Guarda el carrito en localStorage, convertido a texto con JSON.stringify
export const saveCart = (cart: ICartItem[]): void => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

// Si el producto ya estaba en el carrito le suma 1, si no lo agrega con cantidad 1
export const addToCart = (producto: IProduct): void => {
  const cart = getCart();
  const itemExistente = cart.find((item) => item.producto.id === producto.id);

  if (itemExistente) {
    itemExistente.cantidad += 1;
  } else {
    cart.push({ producto, cantidad: 1 });
  }

  saveCart(cart);
};

// Suma precio x cantidad de cada producto para calcular el total del carrito
export const getCartTotal = (cart: ICartItem[]): number => {
  return cart.reduce((total, item) => total + item.producto.precio * item.cantidad, 0);
};

// Arma un carrito nuevo sin el producto indicado
export const removeFromCart = (productoId: number): void => {
  const cart = getCart();
  const nuevoCart = cart.filter((item) => item.producto.id !== productoId);
  saveCart(nuevoCart);
};

// Busca el producto en el carrito y le suma 1 a la cantidad
export const increaseQuantity = (productoId: number): void => {
  const cart = getCart();
  const item = cart.find((item) => item.producto.id === productoId);

  if (item) {
    item.cantidad += 1;
    saveCart(cart);
  }
};

// Resta 1 a la cantidad; si llega a 0, elimina el producto del carrito en vez de dejarlo en 0
export const decreaseQuantity = (productoId: number): void => {
  const cart = getCart();
  const item = cart.find((item) => item.producto.id === productoId);

  if (item) {
    item.cantidad -= 1;

    if (item.cantidad <= 0) {
      removeFromCart(productoId);
    } else {
      saveCart(cart);
    }
  }
};

// Dice cuántas unidades de un producto ya hay en el carrito (0 si no está)
export const getCantidadEnCarrito = (productoId: number): number => {
  const cart = getCart();
  const item = cart.find((item) => item.producto.id === productoId);
  return item ? item.cantidad : 0;
};
