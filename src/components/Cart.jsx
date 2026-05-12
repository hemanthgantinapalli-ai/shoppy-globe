import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import "../styles/Cart.css";

/**
 * Cart Component - Displays all items in the shopping cart
 */
const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  // Calculate totals
  const subtotal = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  const tax = (subtotal * 0.1).toFixed(2);
  const total = (parseFloat(subtotal) + parseFloat(tax)).toFixed(2);

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        <div className="empty-cart">
          <p>🛒 Your cart is empty</p>
          <Link to="/" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      <div className="cart-wrapper">
        {/* Cart Items */}
        <div className="cart-items-section">
          <div className="items-header">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Action</p>
          </div>

          <div className="cart-items-list">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <Link to="/" className="continue-shopping-link">
            ← Continue Shopping
          </Link>
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <h2>Order Summary</h2>

          <div className="summary-item">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>

          <div className="summary-item">
            <span>Tax (10%):</span>
            <span>${tax}</span>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-total">
            <span>Total:</span>
            <span>${total}</span>
          </div>

          <div className="summary-info">
            <p>✓ Free shipping on orders over $50</p>
            <p>✓ Easy returns within 30 days</p>
          </div>

          <Link to="/checkout" className="checkout-btn">
            Proceed to Checkout
          </Link>

          <Link to="/" className="continue-shopping-mobile">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
