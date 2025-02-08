import { createAsyncThunk } from "@reduxjs/toolkit";

const apiurl="http://localhost:5000/";
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(`${apiurl}api/products`); // Replace with your API endpoint
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    } 
    const data = await response.json();
    return data;
  }
);
