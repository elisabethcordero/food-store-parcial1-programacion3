import type { IProducto } from "../../../types/IProducto";

export const categorias: string[] = ["Hamburguesas", "Pizzas", "Papas Fritas", "Bebidas"];

export const productos: IProducto[] = [
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
  }
];