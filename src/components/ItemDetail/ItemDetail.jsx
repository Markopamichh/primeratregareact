import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';

function ItemDetail({ product }) {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useCart();

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    addItem(product, quantity);
  };

  return (
    <div className="item-detail-container">
      <div className="item-detail-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="item-detail-image"
        />
      </div>
      <div className="item-detail-info">
        <h1 className="item-detail-title">
          {product.name}
        </h1>
        <p className="item-detail-category">
          Categoría: {product.category}
        </p>
        <p className="item-detail-price">
          ${product.price.toFixed(2)}
        </p>
        <p className="item-detail-description">
          {product.description}
        </p>
        <div className="item-detail-stock-box">
          <p className={`item-detail-stock-text ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
            {product.stock > 0 ? `Stock disponible: ${product.stock} unidades` : "Sin stock"}
          </p>
        </div>
        <div className="item-detail-actions">
          {quantityAdded === 0 ? (
            <ItemCount
              stock={product.stock}
              initial={1}
              onAdd={handleOnAdd}
            />
          ) : (
            <div className="item-detail-links">
              <Link
                to="/cart"
                className="item-detail-link cart"
              >
                Ir al Carrito
              </Link>
              <Link
                to="/"
                className="item-detail-link continue"
              >
                Seguir Comprando
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
