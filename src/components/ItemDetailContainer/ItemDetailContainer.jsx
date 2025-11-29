import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../firebase/database";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css';

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    getProductById(itemId)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error al cargar el producto:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return (
      <div className="item-detail-container-loading">
        <p>Cargando producto...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="item-detail-container-error">
        <h2>Producto no encontrado</h2>
        <p>El producto que buscas no existe</p>
      </div>
    );
  }

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
