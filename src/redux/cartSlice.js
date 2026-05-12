import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) =>
      state.filter(item => item.id !== action.payload),

    increaseQty: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      item.quantity++;
    },

    decreaseQty: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item.quantity > 1) item.quantity--;
    },

    clearCart: () => []
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