import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../api/fetchProduct";
import ProductSideBar from "../../Components/productsidebar/ProductSidebar.jsx";
import './Product.css'
import Items from "../../Components/items/items.jsx";
const Product = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="product-pages container">
      <div className="row">
        <div className="col-lg-3">
          <div>
            <h2 class="filter-heading">
              <span class="filter-icon">🔍</span> Filter
            </h2>
            <ProductSideBar />
            <ProductSideBar />
            <ProductSideBar />
            <ProductSideBar />
            <ProductSideBar />
          </div>
        </div>
        <div className="col-lg-9">
          <div className="row">
            <Items />
            <Items />
            <Items />
            <Items />
            <Items />
            <Items />
            <Items />
            <Items />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
