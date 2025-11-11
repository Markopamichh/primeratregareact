import { Link } from "react-router-dom";
import './Item.css';

function Item({ id, name, price, image, stock }) {
  return (
    <div className="item-card">
      <img
        src={image}
        alt={name}
        className="item-image"
      />
      <h3 className="item-name">{name}</h3>
      <p className="item-price">
        ${price.toFixed(2)}
      </p>
      <p className={`item-stock ${stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
        {stock > 0 ? `Stock: ${stock}` : "Sin stock"}
      </p>
      <Link
        to={`/item/${id}`}
        className="item-link"
      >
        Ver Detalle
      </Link>
    </div>
  );
}

export default Item;
