# TechStore - E-Commerce React Application

Una aplicación moderna de comercio electrónico desarrollada con React, Firebase y Vite.

![React](https://img.shields.io/badge/React-19.1.1-blue)
![Firebase](https://img.shields.io/badge/Firebase-12.6.0-orange)
![License](https://img.shields.io/badge/License-MIT-green)

## Tabla de Contenidos
- [Características](#características)
- [Tech Stack](#tech-stack)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Configuración de Firebase](#configuración-de-firebase)
- [Uso](#uso)
- [Componentes](#componentes)
- [Gestión de Estado](#gestión-de-estado)
- [Estructura de Base de Datos](#estructura-de-base-de-datos)
- [Scripts Disponibles](#scripts-disponibles)
- [Dependencias](#dependencias)

---

## Características

### Funcionalidad Principal
- ✅ Navegación por categorías de productos (Laptops, Monitores, Accesorios, Audio)
- ✅ Vista detallada de productos individuales
- ✅ Agregar/quitar productos del carrito
- ✅ Gestión de carrito en tiempo real con persistencia en localStorage
- ✅ Control dinámico de stock con Firestore
- ✅ Proceso de checkout con validación de formulario
- ✅ Creación de órdenes con decremento atómico de stock
- ✅ Pantalla de confirmación de pedido

### Características Técnicas
- React 19 con hooks (useState, useEffect, useContext)
- React Router DOM para navegación SPA
- Context API para gestión de estado global
- Firebase Firestore como base de datos
- Transacciones Firestore para control de stock
- Validación de formularios en tiempo real
- Diseño responsive
- CSS custom properties para theming consistente

---

---

## Estructura del Proyecto

```
Proyect-react-js/
├── src/
│   ├── components/
│   │   ├── Cart/
│   │   │   ├── Cart.jsx                 # Vista carrito y orquestación checkout
│   │   │   └── Cart.css
│   │   ├── CartItem/
│   │   │   ├── CartItem.jsx             # Item individual en carrito
│   │   │   └── CartItem.css
│   │   ├── CartWidget/
│   │   │   ├── CartWidget.jsx           # Icono carrito con contador
│   │   │   └── CartWidget.css
│   │   ├── CheckoutForm/
│   │   │   ├── CheckoutForm.jsx         # Formulario datos comprador
│   │   │   └── CheckoutForm.css
│   │   ├── OrderConfirmation/
│   │   │   ├── OrderConfirmation.jsx    # Pantalla éxito pedido
│   │   │   └── OrderConfirmation.css
│   │   ├── Item/
│   │   │   ├── Item.jsx                 # Card producto
│   │   │   └── Item.css
│   │   ├── ItemCount/
│   │   │   ├── ItemCount.jsx            # Selector cantidad
│   │   │   └── ItemCount.css
│   │   ├── ItemDetail/
│   │   │   ├── ItemDetail.jsx           # Vista detalle producto
│   │   │   └── ItemDetail.css
│   │   ├── ItemDetailContainer/
│   │   │   ├── ItemDetailContainer.jsx  # Contenedor detalle
│   │   │   └── ItemDetailContainer.css
│   │   ├── ItemList/
│   │   │   ├── ItemList.jsx             # Grid productos
│   │   │   └── ItemList.css
│   │   ├── ItemListContainer/
│   │   │   ├── ItemListContainer.jsx    # Contenedor lista
│   │   │   └── ItemListContainer.css
│   │   ├── NavBar/
│   │   │   ├── NavBar.jsx               # Navegación principal
│   │   │   └── NavBar.css
│   │   └── NotFound/
│   │       ├── NotFound.jsx             # Página 404
│   │       └── NotFound.css
│   ├── context/
│   │   └── CartContext.jsx              # Estado global carrito
│   ├── firebase/
│   │   ├── firebase.js                  # Inicialización Firebase
│   │   └── database.js                  # Operaciones Firestore
│   ├── hooks/
│   │   └── useCart.jsx                  # Hook context carrito
│   ├── data/
│   │   └── products.js                  # Mock data (referencia)
│   ├── App.jsx                          # Componente principal
│   ├── App.css
│   ├── main.jsx                         # Punto de entrada
│   └── index.css                        # Estilos globales
├── public/
├── .env.local                           # Credenciales Firebase
├── package.json
├── vite.config.js
└── README.md
```

---

