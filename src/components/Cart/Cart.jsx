import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

function Cart() {
  const { cart, clear, getTotalQuantity, getTotalPrice } = useCart();

  const totalQuantity = getTotalQuantity();
  const totalPrice = getTotalPrice();

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <ShoppingBag size={64} className="cart-empty-icon" />
        <h2 className="cart-empty-title">Tu carrito está vacío</h2>
        <p className="cart-empty-message">
          Agrega productos para empezar a comprar
        </p>
        <Link to="/" className="cart-empty-link">
          Ver Productos
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1 className="cart-title">Carrito de Compras</h1>
        <button onClick={clear} className="cart-clear-btn">
          <Trash2 size={18} />
          Vaciar Carrito
        </button>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="cart-summary">
          <h2 className="summary-title">Resumen del Pedido</h2>

          <div className="summary-detail">
            <span className="summary-label">Productos ({totalQuantity}):</span>
            <span className="summary-value">${totalPrice.toFixed(2)}</span>
          </div>

          <div className="summary-detail">
            <span className="summary-label">Envío:</span>
            <span className="summary-value summary-free">Gratis</span>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-total">
            <span className="total-label">Total:</span>
            <span className="total-value">${totalPrice.toFixed(2)}</span>
          </div>

          <button className="checkout-btn">
            Finalizar Compra
          </button>

          <Link to="/" className="continue-shopping">
            Seguir Comprando
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
