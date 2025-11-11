import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import './CartItem.css';

function CartItem({ item }) {
  const { removeItem, updateQuantity } = useCart();

  const handleIncrease = () => {
    if (item.quantity < item.stock) {
      updateQuantity(item.id, item.quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const subtotal = item.price * item.quantity;

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />

      <div className="cart-item-info">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
      </div>

      <div className="cart-item-quantity">
        <button
          onClick={handleDecrease}
          className="quantity-btn"
          disabled={item.quantity <= 1}
        >
          <Minus size={16} />
        </button>
        <span className="quantity-display">{item.quantity}</span>
        <button
          onClick={handleIncrease}
          className="quantity-btn"
          disabled={item.quantity >= item.stock}
        >
          <Plus size={16} />
        </button>
      </div>

      <div className="cart-item-subtotal">
        <p className="subtotal-label">Subtotal:</p>
        <p className="subtotal-price">${subtotal.toFixed(2)}</p>
      </div>

      <button
        onClick={() => removeItem(item.id)}
        className="remove-btn"
        aria-label="Eliminar producto"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
}

export default CartItem;
