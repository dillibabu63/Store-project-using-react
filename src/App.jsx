import ProductCard from "./Components/ProductCard";
import Navbar from "./Components/Navbar";
import CartDrawer from "./Components/CartDrawer";
import WishlistDrawer from "./Components/WishlistDrawer";
import { useState, useMemo } from "react";

import "./App.css";




function App() {
  const products = [
    {
      id: 1,
      name: "Nike Air Max",
      brand: "Nike",
      price: 4999,
      originalPrice: 6999,
      rating: 4.5,
      reviewCount: 2341,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    },
    {
      id: 2,
      name: "Adidas Superstar",
      brand: "Adidas",
      price: 3499,
      originalPrice: 4999,
      rating: 4.3,
      reviewCount: 1876,
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80",
    },
    {
      id: 3,
      name: "Puma Runner",
      brand: "Puma",
      price: 2999,
      originalPrice: 3999,
      rating: 4.1,
      reviewCount: 943,
      image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&q=80",
    },
    {
      id: 4,
      name: "Nike Revolution",
      brand: "Nike",
      price: 3999,
      originalPrice: 5499,
      rating: 4.4,
      reviewCount: 1654,
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80",
    },
    {
      id: 5,
      name: "Adidas Ultraboost",
      brand: "Adidas",
      price: 5499,
      originalPrice: 7999,
      rating: 4.7,
      reviewCount: 3120,
      image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80",
    },
    {
      id: 6,
      name: "Puma Velocity",
      brand: "Puma",
      price: 4299,
      originalPrice: 5499,
      rating: 4.2,
      reviewCount: 712,
      image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&q=80",
    },
    {
      id: 7,
      name: "Nike Pegasus",
      brand: "Nike",
      price: 6999,
      originalPrice: 8999,
      rating: 4.8,
      reviewCount: 4210,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80",
    },
    {
      id: 8,
      name: "Adidas Runfalcon",
      brand: "Adidas",
      price: 2799,
      originalPrice: 3999,
      rating: 3.9,
      reviewCount: 589,
      image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&q=80",
    },
    {
      id: 9,
      name: "Puma Softride",
      brand: "Puma",
      price: 3899,
      originalPrice: 4999,
      rating: 4.0,
      reviewCount: 834,
      image: "https://images.unsplash.com/photo-1514989771522-458c9b6c035a?w=500&q=80",
    },
    {
      id: 10,
      name: "Nike Downshifter",
      brand: "Nike",
      price: 3299,
      originalPrice: 4499,
      rating: 4.2,
      reviewCount: 1290,
      image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=500&q=80",
    },
    {
      id: 11,
      name: "New Balance 574",
      brand: "New Balance",
      price: 4799,
      originalPrice: 5999,
      rating: 4.6,
      reviewCount: 2087,
      image: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?w=500&q=80",
    },
    {
      id: 12,
      name: "ASICS Gel-Kayano",
      brand: "ASICS",
      price: 6499,
      originalPrice: 8499,
      rating: 4.7,
      reviewCount: 1543,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqH8zDXn4ydxEZ1OHxQKe2DfnZEoWWMBP1RsppiRWXA&s=10",
    },
    {
      id: 13,
      name: "Reebok Classic",
      brand: "Reebok",
      price: 3999,
      originalPrice: 4999,
      rating: 4.3,
      reviewCount: 1102,
      image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=500&q=80",
    },
    {
      id: 14,
      name: "Skechers Go Run",
      brand: "Skechers",
      price: 4299,
      originalPrice: 5499,
      rating: 4.1,
      reviewCount: 765,
      image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&q=80",
    },
    {
      id: 15,
      name: "Converse Chuck Taylor",
      brand: "Converse",
      price: 3699,
      originalPrice: 4499,
      rating: 4.5,
      reviewCount: 3890,
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80",
    },
    {
      id: 16,
      name: "Vans Old Skool",
      brand: "Vans",
      price: 5499,
      originalPrice: 6499,
      rating: 4.6,
      reviewCount: 2654,
      image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=500&q=80",
    },
    {
      id: 17,
      name: "Under Armour Charged",
      brand: "Under Armour",
      price: 4999,
      originalPrice: 6999,
      rating: 4.4,
      reviewCount: 987,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4KagpeZNM78yNEA1OP1sLNGLMaOyFk7e-xLG21o0TTA&s",
    },
    {
      id: 18,
      name: "Fila Disruptor",
      brand: "Fila",
      price: 3599,
      originalPrice: 4999,
      rating: 4.0,
      reviewCount: 543,
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSPZczEO2EZMVXTusqZQoL9MNl2aL2bDAlVl5uClLuV-ZVt6PbQ0d1AJRvSXzCXSjbMQuKwN4FuFHJPWTE2U3FX4uk9oQuGIYmsiGnhj65bu12McrlZuHpslg&usqp=CAc",
    },
    {
      id: 19,
      name: "Reebok Nano",
      brand: "Reebok",
      price: 5299,
      originalPrice: 6999,
      rating: 4.5,
      reviewCount: 1234,
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=500&q=80",
    },
    {
      id: 20,
      name: "ASICS Gel-Contend",
      brand: "ASICS",
      price: 3899,
      originalPrice: 4999,
      rating: 4.2,
      reviewCount: 678,
      image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500&q=80",
    },
    {
      id: 21,
      name: "New Balance Fresh Foam",
      brand: "New Balance",
      price: 6999,
      originalPrice: 8999,
      rating: 4.7,
      reviewCount: 1876,
      image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&q=80",
    },
    {
      id: 22,
      name: "Skechers Arch Fit",
      brand: "Skechers",
      price: 5199,
      originalPrice: 6499,
      rating: 4.3,
      reviewCount: 923,
      image: "https://images.unsplash.com/photo-1560072810-1cffb09faf0f?w=500&q=80",
    },
    {
      id: 23,
      name: "Vans Ward",
      brand: "Vans",
      price: 3499,
      originalPrice: 4499,
      rating: 4.4,
      reviewCount: 1435,
      image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=500&q=80",
    },
    {
      id: 24,
      name: "Converse Run Star",
      brand: "Converse",
      price: 6299,
      originalPrice: 7999,
      rating: 4.6,
      reviewCount: 892,
      image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500&q=80",
    },
    {
      id: 25,
      name: "Under Armour HOVR",
      brand: "Under Armour",
      price: 7499,
      originalPrice: 9999,
      rating: 4.8,
      reviewCount: 1567,
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80",
    },
  ];


  // ── State ──────────────────────────────────────────────────────────────────
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  // ── Derived ────────────────────────────────────────────────────────────────
  const filteredProducts = useMemo(() => {
    let list = [...products];
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q)
      );
    }
    if (sortOrder === "low-to-high") list.sort((a, b) => a.price - b.price);
    else if (sortOrder === "high-to-low")
      list.sort((a, b) => b.price - a.price);
    return list;
  }, [searchQuery, sortOrder]);

  const wishlistProducts = useMemo(
    () => products.filter((p) => wishlist.includes(p.id)),
    [wishlist]
  );

  // ── Cart helpers ───────────────────────────────────────────────────────────
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  function addToCart(product) {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function updateQty(productId, delta) {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(productId) {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  }

  // ── Wishlist helpers ───────────────────────────────────────────────────────
  function toggleWishList(productId) {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <>
      <Navbar
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        onCartClick={() => setIsCartOpen(true)}
        onWishlistClick={() => setIsWishlistOpen(true)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={updateQty}
        onRemoveItem={removeFromCart}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={toggleWishList}
        onAddToCart={addToCart}
      />

      <main>
        <section className="hero">
          <h1>Find Your Style</h1>
          <p>Discover premium footwear at amazing prices.</p>
          <button
            onClick={() =>
              document
                .querySelector(".products-section")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Shop Now
          </button>
        </section>

        <section className="products-section">
          {/* Section heading + search + sort */}
          <div className="section-header">
            <h2>Featured Products</h2>
            <div className="section-controls">
              {/* Search */}
              <div className="search-wrapper">
                <span className="search-icon">🔍</span>
                <input
                  id="search-input"
                  type="text"
                  className="search-input"
                  placeholder="Search products or brands…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    className="search-clear"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Divider */}
              <span className="controls-divider" />

              {/* Sort */}
              <select
                id="sort-select"
                className="sort-select"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="low-to-high">Price: Low → High</option>
                <option value="high-to-low">Price: High → Low</option>
              </select>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="no-results">
              <span>😕</span>
              <p>No products match your search.</p>
            </div>
          ) : (
            <div className="product-container">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  brand={product.brand}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  image={product.image}
                  isWishlisted={wishlist.includes(product.id)}
                  onToggleWishList={() => toggleWishList(product.id)}
                  onAddToCart={() => addToCart(product)}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
