import { createAsyncThunk } from '@reduxjs/toolkit';
const products = [
    {
      id: 1,
      name: "Banarasi Silk Saree",
      description: "A luxurious red Banarasi silk saree with intricate gold zari work, perfect for weddings and special occasions.",
      price: 12999.00,
      category: "Silk",
      brand: "Banaras Weavers",
      material: "Silk",
      color: "Red",
      size: "6.3 meters (with blouse piece)",
      pattern: "Zari Work",
      border: "Gold Zari",
      images: [
        { url: "https://example.com/images/banarasi_silk_saree_1.jpg", alt: "Front view of Banarasi Silk Saree" },
        { url: "https://example.com/images/banarasi_silk_saree_2.jpg", alt: "Pallu of Banarasi Silk Saree" }
      ],
      stock: 15,
      reviews: [
        { customerName: "Anjali Mehta", rating: 5, comment: "Absolutely stunning saree! The quality is top-notch.", reviewDate: "2025-01-15" },
        { customerName: "Priya Singh", rating: 4, comment: "Beautiful saree, but slightly heavier than expected.", reviewDate: "2025-01-20" }
      ]
    },
    {
      id: 2,
      name: "Kanchipuram Silk Saree",
      description: "An elegant green Kanchipuram silk saree featuring traditional motifs and a rich pallu.",
      price: 15999.00,
      category: "Silk",
      brand: "Kanchi Silks",
      material: "Silk",
      color: "Green",
      size: "6.3 meters (with blouse piece)",
      weight: "800 grams",
      pattern: "Traditional Motifs",
      border: "Contrast Zari",
      images: [
        { url: "https://example.com/images/kanchipuram_silk_saree_1.jpg", alt: "Full view of Kanchipuram Silk Saree" },
        { url: "https://example.com/images/kanchipuram_silk_saree_2.jpg", alt: "Close-up of Kanchipuram Silk Saree border" }
      ],
      stock: 10,
      reviews: [
        { customerName: "Suman Rao", rating: 5, comment: "The saree is exquisite and worth every penny.", reviewDate: "2025-01-18" }
      ]
    },
    {
      id: 3,
      name: "Cotton Handloom Saree",
      description: "A comfortable and stylish blue handloom cotton saree, ideal for casual and office wear.",
      price: 2999.00,
      category: "Cotton",
      brand: "Handloom Heritage",
      material: "Cotton",
      color: "Blue",
      size: "6.5 meters (with blouse piece)",
      weight: "600 grams",
      pattern: "Plain with Temple Border",
      border: "Temple Design",
      images: [
        { url: "https://example.com/images/cotton_handloom_saree_1.jpg", alt: "Model wearing Cotton Handloom Saree" },
        { url: "https://example.com/images/cotton_handloom_saree_2.jpg", alt: "Border detail of Cotton Handloom Saree" }
      ],
      stock: 25,
      reviews: [
        { customerName: "Neha Sharma", rating: 4, comment: "Very comfortable saree, perfect for daily wear.", reviewDate: "2025-01-22" },
        { customerName: "Aarti Patel", rating: 5, comment: "Loved the fabric and the minimalist design.", reviewDate: "2025-01-25" }
      ]
    },
    {
        id: 4,
        name: "Cotton Handloom Saree",
        description: "A comfortable and stylish blue handloom cotton saree, ideal for casual and office wear.",
        price: 2999.00,
        category: "Cotton",
        brand: "Handloom Heritage",
        material: "Cotton",
        color: "Blue",
        size: "6.5 meters (with blouse piece)",
        weight: "600 grams",
        pattern: "Plain with Temple Border",
        border: "Temple Design",
        images: [
          { url: "https://example.com/images/cotton_handloom_saree_1.jpg", alt: "Model wearing Cotton Handloom Saree" },
          { url: "https://example.com/images/cotton_handloom_saree_2.jpg", alt: "Border detail of Cotton Handloom Saree" }
        ],
        stock: 25,
        reviews: [
          { customerName: "Neha Sharma", rating: 4, comment: "Very comfortable saree, perfect for daily wear.", reviewDate: "2025-01-22" },
          { customerName: "Aarti Patel", rating: 5, comment: "Loved the fabric and the minimalist design.", reviewDate: "2025-01-25" }
        ]
      }
  ];
  
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    // const response = await fetch('/api/products'); // Replace with your API endpoint
    // if (!response.ok) {
    //   throw new Error('Failed to fetch products');
    // }
    // const data = await response.json();
    return products;
  }
);
