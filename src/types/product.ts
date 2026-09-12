export interface IProduct {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categoria: string;
}

// Representa un producto dentro del carrito, junto con la cantidad elegida
export interface ICartItem {
  producto: IProduct;
  cantidad: number;
}
