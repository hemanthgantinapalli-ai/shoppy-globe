import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../redux/searchSlice";
import { selectCartCount, selectSearchQuery } from "../redux/selectors";
import useDebounce from "../hooks/useDebounce";
import "../styles/Header.css";

/**
 * Header Component - Navigation and search bar
 */
const Header = () => {
  const cartCount = useSelector(selectCartCount);
  const search = useSelector(selectSearchQuery);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState(search);
  const debouncedSearchValue = useDebounce(searchValue, 300);

  useEffect(() => {
    dispatch(setSearch(debouncedSearchValue));
  }, [dispatch, debouncedSearchValue]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
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
            type="search"
            aria-label="Search products"
            placeholder="Search products..."
            value={searchValue}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>

        {/* Navigation Links */}
        <nav className="nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/cart" className="nav-link cart-link">
            🛒 Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
