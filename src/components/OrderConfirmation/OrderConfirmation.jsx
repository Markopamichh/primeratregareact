import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import './OrderConfirmation.css';

function OrderConfirmation({ orderData, buyerInfo }) {
  return (
    <div className="order-confirmation-container">
      <div className="confirmation-card">
        <div className="confirmation-icon">
          <CheckCircle size={64} />
        </div>

        <h1 className="confirmation-title">
          ¡Compra Realizada con Éxito!
        </h1>

        <p className="confirmation-message">
          Tu pedido ha sido procesado correctamente.
        </p>

        <div className="confirmation-section">
          <h2 className="section-title">Información de Contacto</h2>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Nombre:</span>
              <span className="info-value">{buyerInfo.name}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">{buyerInfo.email}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Teléfono:</span>
              <span className="info-value">{buyerInfo.phone}</span>
            </div>
          </div>
        </div>

        <div className="confirmation-section">
          <h2 className="section-title">Productos Comprados</h2>
          <div className="order-items">
            {orderData.items.map((item) => (
              <div key={item.id} className="order-item">
                <div className="item-info">
                  <span className="item-name">{item.name}</span>
                  <span className="item-quantity">Cantidad: {item.quantity}</span>
                </div>
                <span className="item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="confirmation-section">
          <div className="order-total">
            <span className="total-label">Total Pagado:</span>
            <span className="total-amount">${orderData.total.toFixed(2)}</span>
          </div>
        </div>

        <div className="confirmation-actions">
          <Link to="/" className="action-btn primary">
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
