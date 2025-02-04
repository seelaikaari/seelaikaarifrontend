import { createSlice } from '@reduxjs/toolkit';

// Initial state for the cart
const initialState = {
  wishlist: [],  // Stores products in the cart
  loading: false,
  error: null,
};

const wishlistReducer = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    // Action to add product to the cart
    addToWishlist: (state, action) => {
      const product = action.payload;  // The product data passed from the action

      // Check if the product is already in the cart
      const existingProduct = state.wishlist.find(item => item.id === product.id);
      if (!existingProduct) {
        // If the product is not already in the cart, add it as a new item
        state.wishlist.push({
          ...product,  // Include all product details
        });
      }
    },
    // Action to remove product from the cart
    removeFromWishlist: (state, action) => {
      const productId = action.payload;
      state.wishlist = state.wishlist.filter(item => item.id !== productId);  // Remove product by ID
    },
  },
  // Handling asynchronous operations (if needed for fetching cart data)
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchwishlist.pending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(fetchwishlist.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.wishlist = action.payload;
  //     })
  //     .addCase(fetchwishlist.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.error.message;
  //     });
  // },
});

// Export actions to be used in components
export const { addToWishlist, removeFromWishlist } = wishlistReducer.actions;
export default wishlistReducer.reducer;
