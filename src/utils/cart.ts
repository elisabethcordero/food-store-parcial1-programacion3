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
