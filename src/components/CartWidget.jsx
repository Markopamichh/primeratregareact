const CartWidget = () => {
    const itemCount = 3;

    return (
        <div className="cart-widget">
            <ShoppingCart size={24} className="cart-icon" />
            <span className="cart-badge">
                {itemCount}
            </span>
        </div>
    );
};