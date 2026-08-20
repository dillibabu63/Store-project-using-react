function Navbar({
  cartCount = 0,
  wishlistCount = 0,
  onCartClick,
  onWishlistClick,
}) {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWNrs6shNUSH2v4gi5Fs382VZoxEqISsOB86UBVsyGmA&s=10"
          alt="ShopEase Logo"
        />
        <span>ShopEase</span>
      </div>

      {/* Nav Links */}
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Categories</a>
        <a href="#">Contact</a>
      </div>

      {/* Actions */}
      <div className="nav-actions">
        {/* Wishlist */}
        <button
          id="wishlist-btn"
          className="icon-btn wishlist-nav-btn"
          onClick={onWishlistClick}
          aria-label="Open wishlist"
          title="Wishlist"
        >
          🤍
          {wishlistCount > 0 && (
            <span className="nav-badge wishlist-nav-badge">
              {wishlistCount > 99 ? "99+" : wishlistCount}
            </span>
          )}
        </button>

        {/* Cart */}
        <button
          id="cart-btn"
          className="icon-btn"
          onClick={onCartClick}
          aria-label="Open cart"
          title="Cart"
        >
          🛒
          {cartCount > 0 && (
            <span className="nav-badge cart-nav-badge">
              {cartCount > 99 ? "99+" : cartCount}
            </span>
          )}
        </button>

        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
