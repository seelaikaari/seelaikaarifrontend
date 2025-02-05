import ProductDetailSlide from "../../Components/productdetailslider/ProductDetailSlide";
import SimilarProduct from "../../Components/similarproduct/SimilarProduct";
import { IoCart } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import "./ProductDetail.css";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const productItem = location.state?.product;
  
  return (
    productItem && (
      <>
        <section className="prdt-sec-1-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <ProductDetailSlide img={productItem.images} />
              </div>
              <div className="col-md-7">
                <h3 className="pro-det-h-title">{productItem.name}</h3>
                <div className="price-wrapper-pd">
                  <p className="prd-p1">{productItem.price}</p>
                  <p className="prd-p2">{productItem.price}</p>
                  <p className="prd-off">20% OFF</p>
                </div>
                <p className="pro-detail-p">{productItem.description}</p>
                <div className="d-flex gap-5">
                  <div>
                    <h4 className="prd-dtc">size</h4>

                    <div className="pro-det-rat-wrapper-size d-flex">
                      {
                      productItem?.size?.map((sizes, index) => {
                        return (
                          <div className="pro-det-rat-wrap-in-size" key={index}>
                            <input
                              type="radio"
                              value="options1"
                              id="options1"
                              className="pro-detail-ratio-inp-siz"
                              name="size"
                            />
                            <label
                              htmlFor="options1"
                              className="pro-detail-ratio-label-siz"
                            >
                             {sizes.name}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <h4 className="prd-dtc">Color</h4>
                    <div className="pro-det-rat-wrapper d-flex">
                      {productItem.color.map((colrs,index)=>{
                        return(<div className="pro-det-rat-wrap-in" key={index}>
                            <input
                              type="radio"
                              value="option1"
                              id="option1"
                              className="pro-detail-ratio-inp"
                              name="Color"
                            />
                            <label
                              htmlFor="option1"
                              className="pro-detail-ratio-label"
                            >
                              <span style={{backgroundColor:colrs.name}}></span>
                               {colrs.name}
                            </label>
                          </div>);
                      })}
                    </div>
                  </div>
                </div>

                <div className="pro-d-btn-wrapper d-flex align-items-center">
                  <button className="btn-Shop-t">
                    <IoCart /> Add to Cart
                  </button>
                  <button className="btn-pr-dt-wishlist" >
                    <FaHeart /> Add to WishList
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <SimilarProduct productItem={productItem}/>
          </div>
        </section>
      </>
    )
  );
};

export default ProductDetail;
