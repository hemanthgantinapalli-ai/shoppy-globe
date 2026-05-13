import ProductList from "../components/ProductList";
import "../styles/Home.css";

/**
 * Home Component - Main landing page
 */
const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-copy">
            <span className="hero-badge">#1 E-Commerce Experience</span>
            <h1>Shop the world with style.</h1>
            <p>
              Discover top products, add them to your cart, and checkout with a premium
              shopping experience built for speed, simplicity, and stunning visuals.
            </p>
            <div className="hero-actions">
              <a href="#products" className="cta-btn">
                Browse Products
              </a>
              <a href="/cart" className="secondary-btn">
                View Cart
              </a>
            </div>
          </div>

          <div className="hero-cards">
            <div className="hero-card">
              <h3>Fast Delivery</h3>
              <p>Get products quickly with a responsive checkout and instant cart updates.</p>
            </div>
            <div className="hero-card">
              <h3>Secure Checkout</h3>
              <p>Dummy form checkout with a modern summary and order confirmation flow.</p>
            </div>
            <div className="hero-card">
              <h3>Smart Search</h3>
              <p>Filter products instantly using search powered by Redux state.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="products-section section-surface">
        <ProductList />
      </section>
    </div>
  );
};

export default Home;
