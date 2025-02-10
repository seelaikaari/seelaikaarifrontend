

// src/redux/carts/cartsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchaddtoCard } from '../../api/fetchAddtocard';

const initialState = {
  carts: [],
  loading: false,
  error: null,
};

const Cartslice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.carts.find(item => item.product_id === product.product_id);
      if (!existingProduct) {
        state.carts.push(product);
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      console.log(productId);
      
      state.carts = state.carts.filter(item => item.product_id !== productId.product_id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchaddtoCard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchaddtoCard.fulfilled, (state, action) => {
        state.loading = false;
        state.carts = action.payload;
      })
      .addCase(fetchaddtoCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch carts';
      });
  },
});

export const { addToCart, removeFromCart } = Cartslice.actions;
export default Cartslice.reducer;







