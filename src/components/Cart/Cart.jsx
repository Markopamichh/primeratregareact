import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { createOrder } from '../../firebase/database';
import CartItem from '../CartItem/CartItem';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import OrderConfirmation from '../OrderConfirmation/OrderConfirmation';
import './Cart.css';

function Cart() {
  const { cart, clear, getTotalQuantity, getTotalPrice } = useCart();
  const [checkoutStep, setCheckoutStep] = useState('cart');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [orderData, setOrderData] = useState(null);
  const [buyerInfo, setBuyerInfo] = useState(null);

  const totalQuantity = getTotalQuantity();
  const totalPrice = getTotalPrice();

  const handleCheckoutClick = () => {
    setCheckoutStep('form');
  };

  const handleFormSubmit = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const order = {
        buyer: {
          name: formData.name || '',
          phone: formData.phone || '',
          email: formData.email || ''
        },
        items: cart.map(item => ({
          id: item.id || '',
          name: item.name || 'Producto',
          price: Number(item.price) || 0,
          quantity: Number(item.quantity) || 1
        })),
        total: Number(totalPrice) || 0
      };

      const result = await createOrder(order);

      if (result.success) {
        setOrderData(order);
        setBuyerInfo(formData);
        clear();
        setCheckoutStep('confirmation');
      } else {
        setError(result.error || 'Error al procesar el pedido. Intenta nuevamente.');
      }
    } catch (err) {
      setError('Error al procesar el pedido. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0 && checkoutStep === 'cart') {
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

  if (checkoutStep === 'confirmation' && orderData) {
    return <OrderConfirmation orderData={orderData} buyerInfo={buyerInfo} />;
  }

  if (checkoutStep === 'form') {
    return (
      <div className="cart-container">
        {error && (
          <div className="error-message">
            <p>{error}</p>
            <button onClick={() => setError(null)}>Cerrar</button>
          </div>
        )}
        <CheckoutForm
          cart={cart}
          totalPrice={totalPrice}
          onSubmit={handleFormSubmit}
          loading={loading}
        />
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

          <button
            className="checkout-btn"
            onClick={handleCheckoutClick}
          >
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
