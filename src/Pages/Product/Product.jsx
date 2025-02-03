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
  const getUniqueValues = (key) => {
    if (key === "color" || key === "size") {
      return [...new Set(products.flatMap(p => p[key].map(c => c.name)))];
    }
    return [...new Set(products.map(p => p[key]))];
  };
  
  // Getting unique values
  const uniqueBrands = getUniqueValues("brand");
  const uniqueCategories = getUniqueValues("category");
  const uniqueMaterials = getUniqueValues("material");
  const uniqueColors = getUniqueValues("color");
  const uniqueSizes = getUniqueValues("size");
 console.log(uniqueCategories);
 
  return (
    <div className="product-pages container">
      <div className="row">
        <div className="col-lg-3">
          <div>
            <h2 className="filter-heading">
              <span className="filter-icon">🔍</span> Filter
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
           {products.map((itm,index)=>{
              return <Items prdts={itm} key={index}/>
           })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
