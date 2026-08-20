function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<span key={i} className="star star--full">★</span>);
    } else if (rating >= i - 0.5) {
      stars.push(<span key={i} className="star star--half">★</span>);
    } else {
      stars.push(<span key={i} className="star star--empty">★</span>);
    }
  }
  return <div className="star-row">{stars}</div>;
}

function ProductCard({
  image,
  price,
  originalPrice,
  name,
  brand,
  rating,
  reviewCount,
  isWishlisted,
  onToggleWishList,
  onAddToCart,
}) {
  const formattedPrice = "₹" + price.toLocaleString("en-IN");
  const formattedOriginal = "₹" + originalPrice.toLocaleString("en-IN");
  const discount = Math.round((1 - price / originalPrice) * 100);
  const formattedReviews =
    reviewCount >= 1000
      ? (reviewCount / 1000).toFixed(1) + "k"
      : reviewCount.toString();

  return (
    <div className="product-card">

      {/* ── Top bar: discount badge left, wishlist right ── */}
      <div className="card-top-bar">
        <span className="discount-badge">{discount}% OFF</span>
        <button
          className={`wishlisted ${isWishlisted ? "active" : ""}`}
          onClick={onToggleWishList}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          {isWishlisted ? "❤️" : "🤍"}
        </button>
      </div>

      {/* ── Image ── */}
      <div className="card-img-wrap">
        <img src={image} alt={name} />
      </div>

      {/* ── Brand ── */}
      <span className="brand-tag">{brand}</span>

      {/* ── Name ── */}
      <h2>{name}</h2>

      {/* ── Rating ── */}
      <div className="rating-row">
        <StarRating rating={rating} />
        <span className="rating-value">{rating.toFixed(1)}</span>
        <span className="review-count">({formattedReviews})</span>
      </div>

      {/* ── Price ── */}
      <div className="price-row">
        <span className="product-price">{formattedPrice}</span>
        <span className="original-price">{formattedOriginal}</span>
      </div>

      {/* ── Add to Cart ── */}
      <button className="add-to-cart-btn" onClick={onAddToCart}>
        🛒 Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
