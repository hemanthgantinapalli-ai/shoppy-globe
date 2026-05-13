export const selectCartItems = (state) => state.cart;

export const selectCartCount = (state) =>
  state.cart.reduce((total, item) => total + item.quantity, 0);

export const selectCartSummary = (state) => {
  const subtotal = state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  return {
    items: state.cart,
    itemCount: state.cart.reduce((count, item) => count + item.quantity, 0),
    subtotal,
    tax,
    total: subtotal + tax,
  };
};

export const selectSearchQuery = (state) => state.search;
