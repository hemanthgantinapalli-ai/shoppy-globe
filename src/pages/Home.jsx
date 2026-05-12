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
          <h1>Welcome to ShoppyGlobe</h1>
          <p>Your one-stop shop for quality products at great prices!</p>
        </div>
      </section>

      <section className="products-section">
        <ProductList />
      </section>
    </div>
  );
};

export default Home;
