import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../redux/searchSlice";
import "../styles/Header.css";

/**
 * Header Component - Navigation and search bar
 */
const Header = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const handleSearchChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <h1>🛍️ ShoppyGlobe</h1>
        </Link>

        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={handleSearchChange}
            className="search-input"
          />
          {search && (
            <button
              onClick={() => dispatch(setSearch(""))}
              className="clear-search-btn"
              title="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {/* Navigation Links */}
        <nav className="nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/cart" className="nav-link cart-link">
            🛒 Cart
            {cartCount > 0 && (
              <span className="cart-badge">
                {cartCount}
                <span className="cart-total">${cartTotal}</span>
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
