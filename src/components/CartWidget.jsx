import { useState } from 'react';

const CartWidget = () => {
    const [cartCount, setCartCount] = useState(0);

    return (
        <div>
            🛒
            <span>carrito</span>
        </div>
    );
};

export default CartWidget;