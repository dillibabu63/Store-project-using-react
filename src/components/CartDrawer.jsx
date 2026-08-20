function formatPrice(price) {
  return "₹" + price.toLocaleString("en-IN");
}

function CartDrawer({ isOpen, onClose, cartItems, onUpdateQty, onRemoveItem }) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`cart-backdrop ${isOpen ? "cart-backdrop--visible" : ""}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside className={`cart-drawer ${isOpen ? "cart-drawer--open" : ""}`}>
        {/* Header */}
        <div className="cart-header">
          <div className="cart-header-title">
            <span className="cart-header-icon">🛒</span>
            <h2>Your Cart</h2>
            {totalItems > 0 && (
              <span className="cart-header-count">{totalItems}</span>
            )}
          </div>
          <button
            className="cart-close-btn"
            onClick={onClose}
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <span className="cart-empty-icon">🛍️</span>
              <p>Your cart is empty</p>
              <small>Add some products to get started!</small>
            </div>
          ) : (
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-img"
                  />
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    <span className="cart-item-brand">{item.brand}</span>
                    <p className="cart-item-price">
                      {formatPrice(item.price * item.quantity)}
                      {item.quantity > 1 && (
                        <span className="cart-item-unit">
                          {" "}({formatPrice(item.price)} each)
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="cart-item-controls">
                    <div className="qty-stepper">
                      <button
                        className="qty-btn"
                        onClick={() => onUpdateQty(item.id, -1)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="qty-value">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => onUpdateQty(item.id, 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="cart-delete-btn"
                      onClick={() => onRemoveItem(item.id)}
                      aria-label={`Remove ${item.name}`}
                    >
                      🗑️
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total-row">
              <span className="cart-total-label">
                Total ({totalItems} {totalItems === 1 ? "item" : "items"})
              </span>
              <span className="cart-total-amount">{formatPrice(total)}</span>
            </div>
            <button className="checkout-btn">
              Proceed to Checkout →
            </button>
            <button className="continue-btn" onClick={onClose}>
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

export default CartDrawer;
