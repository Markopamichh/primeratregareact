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

  const handleImageError = (e) => {
    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZW4gTm8gRGlzcG9uaWJsZTwvdGV4dD48L3N2Zz4=';
  };

  return (
    <div className="item-detail-container">
      <div className="item-detail-image-container">
        <img
          src={product.image || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZW4gTm8gRGlzcG9uaWJsZTwvdGV4dD48L3N2Zz4='}
          alt={product.name}
          className="item-detail-image"
          onError={handleImageError}
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
