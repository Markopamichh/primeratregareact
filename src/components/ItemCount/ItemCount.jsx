import { useState } from "react";
import './ItemCount.css';

function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (stock > 0) {
      onAdd(count);
    }
  };

  return (
    <div className="item-count-container">
      <div className="item-count-controls">
        <button
          onClick={handleDecrement}
          disabled={count <= 1}
          className="item-count-button"
        >
          -
        </button>
        <span className="item-count-display">
          {count}
        </span>
        <button
          onClick={handleIncrement}
          disabled={count >= stock}
          className="item-count-button"
        >
          +
        </button>
      </div>
      <button
        onClick={handleAdd}
        disabled={stock === 0}
        className="item-count-add-button"
      >
        {stock === 0 ? "Sin stock" : "Agregar al carrito"}
      </button>
      <p className="item-count-stock-info">
        Stock disponible: {stock}
      </p>
    </div>
  );
}

export default ItemCount;
