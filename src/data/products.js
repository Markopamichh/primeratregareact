export const products = [
  {
    id: 1,
    name: "Notebook Dell Inspiron 15",
    category: "laptops",
    price: 899.99,
    stock: 10,
    description: "Notebook Dell Inspiron 15 con procesador Intel Core i5, 8GB RAM, 256GB SSD. Ideal para trabajo y estudio.",
    image: "https://via.placeholder.com/300x200?text=Dell+Inspiron+15"
  },
  {
    id: 2,
    name: "Notebook HP Pavilion",
    category: "laptops",
    price: 799.99,
    stock: 8,
    description: "HP Pavilion con pantalla de 14 pulgadas, procesador AMD Ryzen 5, 16GB RAM, 512GB SSD.",
    image: "https://via.placeholder.com/300x200?text=HP+Pavilion"
  },
  {
    id: 3,
    name: "MacBook Air M2",
    category: "laptops",
    price: 1199.99,
    stock: 5,
    description: "MacBook Air con chip M2, 8GB RAM, 256GB SSD. Diseño ultraligero y batería de larga duración.",
    image: "https://via.placeholder.com/300x200?text=MacBook+Air"
  },
  {
    id: 4,
    name: "Mouse Logitech MX Master 3",
    category: "accesorios",
    price: 99.99,
    stock: 25,
    description: "Mouse inalámbrico ergonómico con sensor de alta precisión y batería recargable.",
    image: "https://via.placeholder.com/300x200?text=Logitech+MX+Master"
  },
  {
    id: 5,
    name: "Teclado Mecánico RGB",
    category: "accesorios",
    price: 129.99,
    stock: 15,
    description: "Teclado mecánico gaming con switches mecánicos, iluminación RGB personalizable.",
    image: "https://via.placeholder.com/300x200?text=Teclado+Mecanico"
  },
  {
    id: 6,
    name: "Webcam Logitech C920",
    category: "accesorios",
    price: 79.99,
    stock: 20,
    description: "Webcam Full HD 1080p con enfoque automático y micrófono dual estéreo.",
    image: "https://via.placeholder.com/300x200?text=Webcam+C920"
  },
  {
    id: 7,
    name: "Monitor Samsung 27 4K",
    category: "monitores",
    price: 449.99,
    stock: 12,
    description: "Monitor 4K UHD de 27 pulgadas con tecnología IPS y HDR10.",
    image: "https://via.placeholder.com/300x200?text=Samsung+27+4K"
  },
  {
    id: 8,
    name: "Monitor LG UltraWide 34",
    category: "monitores",
    price: 599.99,
    stock: 7,
    description: "Monitor ultrawide curvo de 34 pulgadas, resolución QHD, ideal para productividad.",
    image: "https://via.placeholder.com/300x200?text=LG+UltraWide"
  },
  {
    id: 9,
    name: "Auriculares Sony WH-1000XM5",
    category: "audio",
    price: 349.99,
    stock: 18,
    description: "Auriculares inalámbricos con cancelación de ruido líder en la industria.",
    image: "https://via.placeholder.com/300x200?text=Sony+WH1000XM5"
  },
  {
    id: 10,
    name: "Parlante JBL Flip 6",
    category: "audio",
    price: 129.99,
    stock: 30,
    description: "Parlante Bluetooth portátil resistente al agua con sonido potente.",
    image: "https://via.placeholder.com/300x200?text=JBL+Flip+6"
  }
];


export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1500); // Simula un delay de 1.5 segundos
  });
};


export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = products.filter(
        (product) => product.category === categoryId
      );
      resolve(filteredProducts);
    }, 1500);
  });
};


export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find((product) => product.id === parseInt(productId));
      resolve(product);
    }, 1500);
  });
};
