import { useState } from 'react';
import './CheckoutForm.css';

function CheckoutForm({ cart, totalPrice, onSubmit, loading }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    emailConfirm: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'El nombre es requerido';
        if (value.trim().length < 3) return 'El nombre debe tener al menos 3 caracteres';
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) return 'El nombre solo puede contener letras';
        return '';

      case 'phone':
        if (!value.trim()) return 'El teléfono es requerido';
        if (!/^\d{10}$/.test(value.replace(/\s/g, ''))) return 'El teléfono debe tener 10 dígitos';
        return '';

      case 'email':
        if (!value.trim()) return 'El email es requerido';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Email inválido';
        return '';

      case 'emailConfirm':
        if (!value.trim()) return 'Confirma tu email';
        if (value !== formData.email) return 'Los emails no coinciden';
        return '';

      default:
        return '';
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      onSubmit(formData);
    }
  };

  return (
    <div className="checkout-form-container">
      <h2 className="checkout-form-title">Datos de Contacto</h2>

      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Nombre Completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input ${errors.name && touched.name ? 'error' : ''}`}
            placeholder="Juan Pérez"
            disabled={loading}
          />
          {errors.name && touched.name && (
            <span className="form-error">{errors.name}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            Teléfono *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input ${errors.phone && touched.phone ? 'error' : ''}`}
            placeholder="1234567890"
            disabled={loading}
          />
          {errors.phone && touched.phone && (
            <span className="form-error">{errors.phone}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input ${errors.email && touched.email ? 'error' : ''}`}
            placeholder="juan@ejemplo.com"
            disabled={loading}
          />
          {errors.email && touched.email && (
            <span className="form-error">{errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="emailConfirm" className="form-label">
            Confirmar Email *
          </label>
          <input
            type="email"
            id="emailConfirm"
            name="emailConfirm"
            value={formData.emailConfirm}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input ${errors.emailConfirm && touched.emailConfirm ? 'error' : ''}`}
            placeholder="juan@ejemplo.com"
            disabled={loading}
          />
          {errors.emailConfirm && touched.emailConfirm && (
            <span className="form-error">{errors.emailConfirm}</span>
          )}
        </div>

        <div className="form-summary">
          <h3 className="summary-subtitle">Resumen de tu Pedido</h3>
          <div className="summary-items">
            {cart.map(item => (
              <div key={item.id} className="summary-item">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="summary-total-line">
            <span className="summary-total-label">Total:</span>
            <span className="summary-total-value">${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <button
          type="submit"
          className="form-submit-btn"
          disabled={loading}
        >
          {loading ? 'Procesando pedido...' : 'Confirmar Compra'}
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;
