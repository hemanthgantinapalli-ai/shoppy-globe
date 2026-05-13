import { createSlice } from "@reduxjs/toolkit";

const loadCartFromStorage = () => {
  try {
    const serializedCart = localStorage.getItem("shoppyglobe_cart");
    return serializedCart ? JSON.parse(serializedCart) : [];
  } catch (error) {
    console.warn("Unable to load cart from storage:", error);
    return [];
  }
};

const saveCartToStorage = cart => {
  try {
    localStorage.setItem("shoppyglobe_cart", JSON.stringify(cart));
  } catch (error) {
    console.warn("Unable to save cart to storage:", error);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromStorage(),
  reducers: {
    addToCart: (state, action) => {
      const item = state.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      saveCartToStorage(state);
    },
    removeFromCart: (state, action) => {
      const nextState = state.filter(item => item.id !== action.payload);
      saveCartToStorage(nextState);
      return nextState;
    },

    increaseQty: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item) {
        item.quantity++;
        saveCartToStorage(state);
      }
    },

    decreaseQty: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
        saveCartToStorage(state);
      }
    },

    clearCart: () => {
      saveCartToStorage([]);
      return [];
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;