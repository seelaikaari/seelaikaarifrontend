import { FaHeart } from "react-icons/fa";  // Importing the heart icon
import './items.css';
import { useDispatch,useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist} from '../../features/products/WishlistSlice';
import { useNavigate } from "react-router-dom";

const Items = ({ prdts }) => {
   const dispatch = useDispatch();
   const wishlist = useSelector((state) => state.wishlist.wishlist); 
   const navigate = useNavigate();
   const handleClick = () => {
    navigate("/ProductDetail", { state: { product: prdts } }); // Passing prdts as state
  };
   // Check if the current product is in the wishlist
   const isWishlisted = wishlist.some((item) => item.id === prdts.id);
 
   const toggleWishlist = () => {
     if (isWishlisted) {
       dispatch(removeFromWishlist(prdts));
     } else {
       dispatch(addToWishlist(prdts));
     }
   };
  
 
  return (
     prdts?<>
      <div className="col-lg-3 col-md-4 col-6 pb-3">
      <div className="product-card">
        {/* Wishlist icon */}
        <div className="wishlist-icon" onClick={toggleWishlist}>
          <FaHeart  className={isWishlisted ? 'wishlist-heart' : ''}/>
        </div>
        <div className="product-img">
          <img
            src={prdts?.images[0]?.url}
            alt="Aila organza"
            loading="lazy"
            className="img-fluid"
          />
        </div>
        <div className="product-info">
          <h3 className="product-title popup_cart_title">{prdts.name}</h3>
          <div>
            <p className="truncate">{prdts.description}</p>
          </div>
          <div className="product-price">
            <span className="normal-price">{prdts.price}</span>
            <span className="offer-price">{prdts.price}</span>
            <span className="discount">50%</span>
          </div>
          <div className="product-size">
            {prdts?.size?.map((siz, index) => {
              return <span key={index}>{siz.name}</span>;
            })}
          </div>
          <div className="product-colors">
            {prdts?.color?.map((clr, index) => {
              return (
                <span
                  className="color-swatch"
                  key={index}
                  style={{ backgroundColor: clr.name }}
                ></span>
              );
            })}
          </div>
          <div>
            <button className="add-to-cart-btn" onClick={handleClick}>view more</button>
          </div>
        </div>
      </div>
    </div></>:<>loading</>
  );
};

export default Items;
