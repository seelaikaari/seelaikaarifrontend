import { createSlice } from '@reduxjs/toolkit';

// Initial state for the cart
const initialState = {
  carts: [],  // Stores products in the cart
  loading: false,
  error: null,
};

const Cartslice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    // Action to add product to the cart
    addToCart: (state, action) => {
      const product = action.payload;  // The product data passed from the action

      // Check if the product is already in the cart
      const existingProduct = state.carts.find(item => item.id === product.id);
      if (!existingProduct) {
        // If the product is not already in the cart, add it as a new item
        state.carts.push({
          ...product,  // Include all product details
        });
      }
    },
    // Action to remove product from the cart
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.carts = state.carts.filter(item => item.id !== productId);  // Remove product by ID
    },
  },
  // Handling asynchronous operations (if needed for fetching cart data)
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCarts.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchCarts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.carts = action.payload;
//       })
//       .addCase(fetchCarts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
});

// Export actions to be used in components
export const { addToCart, removeFromCart } = Cartslice.actions;
export default Cartslice.reducer;
