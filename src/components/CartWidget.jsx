import { useState } from 'react';

const CartWidget = () => {
    const [cartCount, setCartCount] = useState(0);

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            🛒
            <span>{cartCount}</span>
        </div>
    );
};

export default CartWidget;