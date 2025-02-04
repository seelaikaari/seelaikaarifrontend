
//import Components
import ProductDetailSlide from '../../Components/productdetailslider/ProductDetailSlide';
import SimilarProduct from '../../Components/similarproduct/SimilarProduct';
//import icons
import { IoCart } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
//import Css
import './ProductDetail.css';

const ProductDetail = () => {

    return (
        <>
            <section className="prdt-sec-1-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <ProductDetailSlide />
                        </div>
                        <div className="col-md-7">
                            <h3 className='pro-det-h-title'>Motorola Edge 50 Fusion (Forest Green, 256 GB) (12 GB RAM)</h3>
                            <div className='price-wrapper-pd'>
                                <p className='prd-p1'>4000</p>
                                <p className='prd-p2'>4000</p>
                                <p className='prd-off'>20% OFF</p>
                            </div>
                            <p className='pro-detail-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, adipisci eaque! Odit, similique maiores esse illo tempore quo magni id cumque debitis veritatis reprehenderit. Beatae doloremque fuga voluptas corrupti corporis.</p>
                            <div className="d-flex gap-5">
                                <div>
                                    <h4 className='prd-dtc'>Storage</h4>

                                    <div className='pro-det-rat-wrapper-size d-flex'>
                                        <div className='pro-det-rat-wrap-in-size'>
                                            <input type="radio" value="options1" id='options1' className='pro-detail-ratio-inp-siz' name="size" />
                                            <label htmlFor="options1" className='pro-detail-ratio-label-siz'>40</label>
                                        </div>
                                        <div className='pro-det-rat-wrap-in-size'>
                                            <input type="radio" value="options1" id='options2' className='pro-detail-ratio-inp-siz' name="size" />
                                            <label htmlFor="options2" className='pro-detail-ratio-label-siz'>20</label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className='prd-dtc'>Color</h4>
                                    <div className='pro-det-rat-wrapper d-flex'>
                                        <div className='pro-det-rat-wrap-in'>
                                            <input type="radio" value="option1" id='option1' className='pro-detail-ratio-inp' name="Color" />
                                            <label htmlFor="option1" className='pro-detail-ratio-label'><span></span> Black</label>
                                        </div>
                                        <div className='pro-det-rat-wrap-in'>
                                            <input type="radio" value="option1" id='option2' className='pro-detail-ratio-inp' name="Color" />
                                            <label htmlFor="option2" className='pro-detail-ratio-label'><span></span> Red</label>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div className='pro-d-btn-wrapper d-flex align-items-center'>
                                <button className='btn-Shop-t'>
                                    <IoCart /> Add to Cart
                                </button>
                                <button className='btn-pr-dt-wishlist'>
                                    <FaHeart /> Add to WishList
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section>
                <div className="container">
                    <SimilarProduct />
                </div>
            </section>
        </>
    )
}

export default ProductDetail
