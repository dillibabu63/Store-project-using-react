function WishlistDrawer({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveFromWishlist,
  onAddToCart,
}) {
  function handleAddToCart(product) {
    onAddToCart(product);
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`cart-backdrop ${isOpen ? "cart-backdrop--visible" : ""}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside className={`cart-drawer wishlist-drawer ${isOpen ? "cart-drawer--open" : ""}`}>
        {/* Header */}
        <div className="cart-header">
          <div className="cart-header-title">
            <span className="cart-header-icon">❤️</span>
            <h2>Wishlist</h2>
            {wishlistProducts.length > 0 && (
              <span className="cart-header-count wishlist-count">
                {wishlistProducts.length}
              </span>
            )}
          </div>
          <button className="cart-close-btn" onClick={onClose} aria-label="Close wishlist">
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="cart-body">
          {wishlistProducts.length === 0 ? (
            <div className="cart-empty">
              <span className="cart-empty-icon">🤍</span>
              <p>Your wishlist is empty</p>
              <small>Heart items you love to save them here!</small>
            </div>
          ) : (
            <ul className="cart-list">
              {wishlistProducts.map((product) => {
                const discount = Math.round(
                  (1 - product.price / product.originalPrice) * 100
                );
                return (
                  <li key={product.id} className="cart-item wishlist-item">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="cart-item-img"
                    />
                    <div className="cart-item-info">
                      <p className="cart-item-name">{product.name}</p>
                      <span className="cart-item-brand">{product.brand}</span>
                      <div className="wishlist-price-row">
                        <p className="cart-item-price">
                          {"₹" + product.price.toLocaleString("en-IN")}
                        </p>
                        <span className="wishlist-original-price">
                          {"₹" + product.originalPrice.toLocaleString("en-IN")}
                        </span>
                        <span className="wishlist-discount-badge">
                          {discount}% OFF
                        </span>
                      </div>
                      <div className="wishlist-rating">
                        <span className="wl-star">★</span>
                        <span className="wl-rating-val">{product.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    <div className="cart-item-controls wishlist-controls">
                      <button
                        className="wl-add-cart-btn"
                        onClick={() => handleAddToCart(product)}
                        title="Add to Cart"
                      >
                        🛒
                      </button>
                      <button
                        className="cart-delete-btn"
                        onClick={() => onRemoveFromWishlist(product.id)}
                        title="Remove from Wishlist"
                      >
                        🗑️
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer */}
        {wishlistProducts.length > 0 && (
          <div className="cart-footer">
            <button
              className="checkout-btn"
              onClick={() => {
                wishlistProducts.forEach((p) => onAddToCart(p));
                onClose();
              }}
            >
              Add All to Cart →
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

export default WishlistDrawer;
