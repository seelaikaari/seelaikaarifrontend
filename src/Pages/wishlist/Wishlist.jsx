
import { Link } from "react-router-dom";
//images
import image1 from "../../assets/images/homepage/1.jpg"

//icons
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
//Css
import "./Wishlist.css"

const Wishlist = () => {
    const EmptyCart=true
    return (
        <>
        {EmptyCart ?
            <section className="wishlist-sec-1-wrapper">
            <div className="container">
                <h2 className="wlist-ht">Wishlist Products (2)</h2>
                <div className="row wishlist-inner-wrap">
                    <div className="col-md-3">
                        <div className="wishlist-wrap-cont">
                            <img src={image1} alt="" className="w-100" />
                            <p className="wishlist-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className="wlist-price-wrapper d-flex align-items-center">
                                <p className="price-wl-d"><MdOutlineCurrencyRupee/>3000</p>
                                <p className="price-wl"><MdOutlineCurrencyRupee/>4000</p>
                                <p className="price-wl-off">20% OFF</p>
                            </div>
                            <div className="d-flex align-items-center wlist-btn-wrapper">
                                <button className="wishlist-dlt-btn"><MdOutlineDeleteOutline/> Remove </button>
                                <button className="add-Cart-btn">Add to Cart <AiOutlineShoppingCart /></button>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </section>
        :
        <section className="wishList-empty">
            <div className="container">
                <div className="inner-empt-wlist">
                    <h5 className="wish-empty-title text-center">No wishes yet! Find something you love and add it here.</h5>
                    <Link to="/Product" className="empty-wishlist-btn" >Shop Now</Link>
                </div>
            </div>
        </section>
        }
        </>
    )
}

export default Wishlist
