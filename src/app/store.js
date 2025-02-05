import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/ProductSlice';
 import cartReducer from '../features/products/AddtoCardSlice';
 import wishlistReducer from "../features/products/WishlistSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    carts:cartReducer,
    wishlist:wishlistReducer

  },
});
