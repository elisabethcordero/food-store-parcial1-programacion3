import type { ICartItem, IProduct } from "../types/product";

const CART_KEY = "cart";

export const getCart = (): ICartItem[] => {
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveCart = (cart: ICartItem[]): void => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

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

export const getCartTotal = (cart: ICartItem[]): number => {
  return cart.reduce((total, item) => total + item.producto.precio * item.cantidad, 0);
};

export const removeFromCart = (productoId: number): void => {
  const cart = getCart();
  const nuevoCart = cart.filter((item) => item.producto.id !== productoId);
  saveCart(nuevoCart);
};

export const increaseQuantity = (productoId: number): void => {
  const cart = getCart();
  const item = cart.find((item) => item.producto.id === productoId);

  if (item) {
    item.cantidad += 1;
    saveCart(cart);
  }
};

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

export const getCantidadEnCarrito = (productoId: number): number => {
  const cart = getCart();
  const item = cart.find((item) => item.producto.id === productoId);
  return item ? item.cantidad : 0;
};
