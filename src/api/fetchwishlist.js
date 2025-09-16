// src/redux/wishlist/wishlistThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const api=import.meta.env.VITE_BACKENDURL;
export const fetchWishlist = createAsyncThunk(
  'wishlist/fetchWishlist',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${api}/api/wishlist/${userId}`);
      console.log("trigger");
      
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
