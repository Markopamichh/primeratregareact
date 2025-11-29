import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../firebase/database";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';


function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const fetchProducts = categoryId
      ? getProductsByCategory(categoryId)
      : getProducts();

    fetchProducts
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return (
      <div className="item-list-container-loading">
        <p>Cargando productos...</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="item-list-container-empty">
        <h2>No se encontraron productos en esta categoría</h2>
        <p>Intenta con otra categoría</p>
      </div>
    );
  }

  return (
    <div className="item-list-container">
      {greeting && (
        <h1 className="item-list-greeting">
          {greeting}
        </h1>
      )}
      {categoryId && (
        <h2 className="item-list-category-title">
          Categoría: {categoryId}
        </h2>
      )}
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
