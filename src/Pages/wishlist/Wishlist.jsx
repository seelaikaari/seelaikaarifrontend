import { Link } from "react-router-dom";
// Images
import "./Wishlist.css";
import { MdOutlineCurrencyRupee, MdOutlineDeleteOutline } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../features/products/WishlistSlice";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const dispatch = useDispatch();

  const handleRemoveClick = (id) => {
    console.log(id);
    
    dispatch(removeFromWishlist(id));
  };

  return (
    <>
      {wishlist && wishlist.length > 0 ? (
        <section className="wishlist-sec-1-wrapper">
          <div className="container">
            <h2 className="wlist-ht">Wishlist Products ({wishlist.length})</h2>
            <div className="row wishlist-inner-wrap">
              {wishlist.map((item, index) => (
                <div className="col-md-3" key={index}>
                  <div className="wishlist-wrap-cont">
                    <img src={item.images[0]?.url} alt={item.name} className="w-100" />
                    <p className="wishlist-text">{item.description}</p>
                    <div className="wlist-price-wrapper d-flex align-items-center">
                      <p className="price-wl-d">
                        <MdOutlineCurrencyRupee />
                        {item.price}
                      </p>
                      <p className="price-wl">
                        <MdOutlineCurrencyRupee />
                        {item.price}
                      </p>
                      <p className="price-wl-off">20% OFF</p>
                    </div>
                    <div className="d-flex align-items-center wlist-btn-wrapper">
                      <button
                        className="wishlist-dlt-btn"
                        onClick={() => handleRemoveClick(item.id)}
                      >
                        <MdOutlineDeleteOutline /> Remove
                      </button>
                      <button className="add-Cart-btn">
                        Add to Cart <AiOutlineShoppingCart />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="wishList-empty">
          <div className="container">
            <div className="inner-empt-wlist">
              <h5 className="wish-empty-title text-center">
                No wishes yet! Find something you love and add it here.
              </h5>
              <Link to="/Product" className="empty-wishlist-btn">
                Shop Now
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Wishlist;
