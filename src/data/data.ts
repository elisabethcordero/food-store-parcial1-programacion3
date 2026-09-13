import type { IProduct } from "../types/product";
import type { ICategoria } from "../types/categoria";

export const PRODUCTS: IProduct[] = [
  {
    id: 1,
    nombre: "Hamburguesa de la Casa",
    descripcion: "Carne, queso cheddar, bacon, tomate y lechuga",
    precio: 18000,
    imagen: "/assets/hamburguesa.jpg",
    categoria: "Hamburguesas"
  },
  {
    id: 2,
    nombre: "Hamburguesa Triple Completa",
    descripcion: "Carne, queso cheddar y bacon + papas fritas y bebida.",
    precio: 25000,
    imagen: "/assets/hamburguesa_triple.png",
    categoria: "Hamburguesas"
  },
  {
    id: 3,
    nombre: "Pizza Muzarella",
    descripcion: "Masa fina, salsa de tomate y mozzarella",
    precio: 20000,
    imagen: "/assets/pizza_muzzarella.jpg",
    categoria: "Pizzas"
  },
  {
    id: 4,
    nombre: "Pizza de Jamon y Morrones",
    descripcion: "Pizza clásica con salsa de tomate, jamón y morrones asados.",
    precio: 20000,
    imagen: "/assets/pizza_jamonymorrones.avif",
    categoria: "Pizzas"
  },
  {
    id: 5,
    nombre: "Papas Fritas con Cheddar",
    descripcion: "Papas fritas crujientes y doradas con queso cheddar fundido y un toque de especias.",
    precio: 8000,
    imagen: "/assets/papas_cheddar.avif",
    categoria: "Papas Fritas"
  },
  {
    id: 6,
    nombre: "Coca-Cola",
    descripcion: "Bebida gaseosa de cola, refrescante y burbujeante.",
    precio: 5000,
    imagen: "/assets/coca-cola-1lt.png",
    categoria: "Bebidas"
  },
  {
    id: 7,
    nombre: "Agua Mineral",
    descripcion: "Agua mineral natural, sin gas, ideal para hidratarse.",
    precio: 3000,
    imagen: "/assets/agua_mineral.png",
    categoria: "Bebidas"
  },
  {
    id: 8,
    nombre: "Jugo Aquarius Naranja",
    descripcion: "Jugo sabor naranja.",
    precio: 4000,
    imagen: "/assets/jugo_naranja.png",
    categoria: "Bebidas"
  },
  {
    id: 9,
    nombre: "Hamburguesa Vegetariana",
    descripcion: "Medallón de vegetales y legumbres, con lechuga y tomate",
    precio: 16000,
    imagen: "/assets/hamburguesa_vegetariana.jpg",
    categoria: "Hamburguesas"
  },
  {
    id: 10,
    nombre: "Pizza Napolitana",
    descripcion: "Salsa de tomate, mozzarella, tomate fresco y albahaca",
    precio: 21000,
    imagen: "/assets/pizza_napolitana.jpg",
    categoria: "Pizzas"
  },
  {
    id: 11,
    nombre: "Papas Fritas Clásicas",
    descripcion: "Papas fritas doradas y crocantes, porción grande",
    precio: 6000,
    imagen: "/assets/papas_fritas_clasicas.avif",
    categoria: "Papas Fritas"
  },
  {
    id: 12,
    nombre: "Limonada",
    descripcion: "Limonada casera con menta, bien fría",
    precio: 4500,
    imagen: "/assets/limonada.webp",
    categoria: "Bebidas"
  },
  {
    id: 13,
    nombre: "Ensalada César",
    descripcion: "Lechuga, pollo grillado, crutones y aderezo césar",
    precio: 12000,
    imagen: "/assets/ensalada_cesar.jpg",
    categoria: "Ensaladas"
  },
  {
    id: 14,
    nombre: "Brownie con Helado",
    descripcion: "Brownie de chocolate tibio con una bocha de helado de vainilla",
    precio: 7500,
    imagen: "/assets/brownie_helado.webp",
    categoria: "Postres"
  },
  {
    id: 15,
    nombre: "Flan Casero",
    descripcion: "Flan casero con dulce de leche y crema",
    precio: 6500,
    imagen: "/assets/flan_casero.webp",
    categoria: "Postres"
  }
];

// Arma la lista de categorías automáticamente a partir de los productos,
// para no tener que escribirlas dos veces en lugares distintos
export const getCategories = (): ICategoria[] => {
  const nombresUnicos = [...new Set(PRODUCTS.map((producto) => producto.categoria))];
  return nombresUnicos.map((nombre, index) => ({
    id: index + 1,
    nombre,
  }));
};
