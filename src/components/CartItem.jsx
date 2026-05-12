import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../redux/cartSlice";
import "../styles/CartItem.css";

/**
 * CartItem Component - Displays a single item in the cart
 */
const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleIncrease = () => {
    dispatch(increaseQty(item.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQty(item.id));
  };

  const itemTotal = (item.price * item.quantity).toFixed(2);

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.thumbnail} alt={item.title} loading="lazy" />
      </div>

      <div className="cart-item-details">
        <h3>{item.title}</h3>
        <p className="item-price">${item.price}</p>
      </div>

      <div className="cart-item-quantity">
        <button
          onClick={handleDecrease}
          className="qty-btn"
          disabled={item.quantity === 1}
          title="Decrease quantity"
        >
          −
        </button>
        <span className="qty-value">{item.quantity}</span>
        <button
          onClick={handleIncrease}
          className="qty-btn"
          title="Increase quantity"
        >
          +
        </button>
      </div>

      <div className="cart-item-total">
        <p className="total-price">${itemTotal}</p>
      </div>

      <button
        onClick={handleRemove}
        className="remove-btn"
        title="Remove from cart"
      >
        🗑️
      </button>
    </div>
  );
};

export default CartItem;
