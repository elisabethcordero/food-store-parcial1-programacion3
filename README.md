# Food Store

Proyecto para la Evaluación 1 de Programación 3 (Tecnicatura Universitaria en Programación a Distancia - UTN). Evoluciona el Trabajo Práctico Integrador de TypeScript (autenticación de usuarios con roles) agregando un carrito de compras persistente y búsqueda/filtrado de productos.

## 🎥 Video explicativo

**Enlace pendiente — se agrega acá antes de la entrega final.**

## Descripción

Food Store es una tienda de comidas simulada, desarrollada en TypeScript puro (sin frameworks ni librerías externas) con Vite. Un usuario se registra e inicia sesión, y según su rol (cliente o administrador) accede a distintas pantallas. El cliente puede ver el catálogo de productos, buscar por nombre, filtrar por categoría, y agregar productos a un carrito de compras que persiste en el navegador aunque se recargue la página.

## Funcionalidades

- Registro e inicio de sesión de usuarios, con datos guardados en `localStorage`.
- Distinción de roles: cliente y administrador, cada uno con su propia pantalla de inicio.
- Catálogo de productos con búsqueda por nombre y filtro por categoría.
- Carrito de compras persistente en `localStorage`:
  - Agregar productos al carrito.
  - Sumar o restar la cantidad de cada producto, tanto desde el catálogo como desde el carrito.
  - Eliminar productos del carrito.
  - Cálculo automático del total.

## Tecnologías

- TypeScript
- Vite
- HTML5 y CSS3 (sin frameworks ni librerías externas)

## Cómo correr el proyecto

1. Clonar el repositorio:
   ```
   git clone https://github.com/elisabethcordero/food-store-parcial1-programacion3.git
   ```
2. Entrar a la carpeta del proyecto:
   ```
   cd food-store-auth
   ```
3. Instalar las dependencias:
   ```
   npm install
   ```
4. Levantar el servidor de desarrollo:
   ```
   npm run dev
   ```
5. Abrir en el navegador la dirección que muestra la terminal (por lo general `http://localhost:5173`).

## Autora

Elisabeth Cordero
