import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import './CartWidget.css';

const CartWidget = () => {
    const { getTotalQuantity } = useCart();
    const totalQuantity = getTotalQuantity();

    return(
        <Link to="/cart" className="cart-widget">
            <ShoppingCart size={24} />
            {totalQuantity > 0 && (
                <span className="cart-badge">{totalQuantity}</span>
            )}
        </Link>
    )
}

export default CartWidget
