
// export default Product;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../api/fetchProduct";
import ProductSideBar from "../../Components/productsidebar/ProductSidebar.jsx";
import "./Product.css";
import Items from "../../Components/items/items.jsx";
import { FaSearchMinus, FaFilter } from "react-icons/fa";
import { MdClose } from "react-icons/md";
const Product = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    material: [],
    color: [],
    size: [],
  });

  const [priceRange, setPriceRange] = useState([0, 0]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false); // State for mobile filter menu

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const getUniqueValues = (key) => {
    if (key === "color" || key === "size") {
      return [
        ...new Set(products.flatMap((p) => p[key]?.map((c) => c.name) || [])),
      ];
    }
    return [...new Set(products.map((p) => p[key]))];
  };

  const handlePriceFilter = (range) => {
    if (range[0] !== priceRange[0] || range[1] !== priceRange[1]) {
      setPriceRange(range);
    }
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    setSelectedFilters((prevFilters) => {
      const updatedFilters = checked
        ? [...prevFilters[name], value]
        : prevFilters[name].filter((filterValue) => filterValue !== value);

      return { ...prevFilters, [name]: updatedFilters };
    });
  };

  useEffect(() => {
    let filtered = products;

    Object.entries(selectedFilters).forEach(([key, values]) => {
      if (values.length > 0) {
        filtered = filtered.filter((product) => {
          if (Array.isArray(product[key])) {
            return product[key].some((item) => values.includes(item.name));
          }
          return values.includes(product[key]);
        });
      }
    });

    filtered = filtered.filter(
      (product) =>
        Number(product.price) >= priceRange[0] &&
        Number(product.price) <= priceRange[1]
    );

    setFilteredProducts(filtered);
  }, [selectedFilters, products, priceRange]);

  const prices = products
    .map((prd) => Number(prd.price))
    .filter((price) => !isNaN(price) && price > 0);

  const maxPrice = prices.length > 0 ? Math.max(...prices) : 0;
  const minPrice = prices.length > 0 ? Math.min(...prices) : 0;

  return (
    <div className="product-pages container">
      {/* Mobile Filter Toggle Button */}
      <button
        className="mobile-filter-toggle"
        onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
      >
        <FaFilter /> Filters
      </button>

      <div className="row">
        {/* Filter Sidebar */}
        <div
          className={`col-lg-3 mobile-filter-menu ${
            isMobileFilterOpen ? "open" : ""
          }`}
        >
          <h2 className="filter-heading " style={{justifyContent:isMobileFilterOpen ? "space-between":"normal"}}>
            <span className="filter-icon">🔍</span> Filter
            <span style={{display:isMobileFilterOpen?"block":"none"}}   onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}><MdClose /></span>
          </h2>
          <ProductSideBar
            filopt={[maxPrice, minPrice]}
            title={"price"}
            handleChange={handlePriceFilter}
          />
          <ProductSideBar
            filopt={getUniqueValues("category")}
            title={"category"}
            handleChange={handleChange}
          />
          <ProductSideBar
            filopt={getUniqueValues("material")}
            title={"material"}
            handleChange={handleChange}
          />
          <ProductSideBar
            filopt={getUniqueValues("color")}
            title={"color"}
            handleChange={handleChange}
          />
          <ProductSideBar
            filopt={getUniqueValues("size")}
            title={"size"}
            handleChange={handleChange}
          />
        </div>

        {/* Product List */}
        <div className="col-lg-9">
          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item, index) => (
                <Items prdts={item} key={index} />
              ))
            ) : (
              <div className="search-not-found-container">
                <FaSearchMinus className="not-found-icon" />
                <h2>Oops! No Sarees Found</h2>
                <p>
                  We couldnt find any sarees based on your search. Please try
                  again with different keywords or filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;