// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { FaTrashAlt, FaPlusCircle, FaMinusCircle } from "react-icons/fa";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { removeFromCart } from "../../features/products/AddtoCardSlice";
// import { fetchProducts } from "../../api/fetchProduct";
// import { fetchaddtoCard } from "../../api/fetchAddtocard";
// import flow1 from "../../assets/images/images-floral/f-1.jpg";
// import flow2 from "../../assets/images/images-floral/f-2.jpg";
// import emptyCartImg from "../../assets/images/wishlist/empty-cart.png";
// import "./Cart.css";

// const api = "http://localhost:5000";

// // Disclaimer Modal Component
// const DisclaimerModal = ({ showModal, handleClose }) => {
//   if (!showModal) return null;
//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <h3 className="modal-header">Terms & Conditions</h3>
//         <p>* By proceeding, you agree to our return, exchange, and product policies.</p>
//         <p>* No damage</p>
//         <div className="modal-footer">
//           <button className="modal-btn cancel" onClick={() => handleClose(false)}>
//             Cancel
//           </button>
//           <button className="modal-btn accept" onClick={() => handleClose(true)}>
//             Agree
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Cart = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { isLogin, user } = useSelector((state) => state.auth);
//   const addedcart = useSelector((state) => state.carts.carts);
//   const { products } = useSelector((state) => state.products);
//   const [cartItems, setCartItems] = useState([]);
//   const [isTermsAccepted, setIsTermsAccepted] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   // Fetch user cart and product details
//   useEffect(() => {
//     if (user) {
//       dispatch(fetchaddtoCard(user.id));
//     }
//   }, [dispatch, user]);

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   // Filter and map cart items with product details
//   const addedtocardupdated = products.filter((product) =>
//     addedcart.some((item) => item.product_id === product.id)
//   );

//   useEffect(() => {
//     const updatedItems = products.filter((product) =>
//       addedcart.some((item) => item.product_id === product.id)
//     ).map((item) => ({
//       id: item.id,
//       name: item.name,
//       description: item.description,
//       size: item.size?.[0]?.name || "N/A",
//       price: item.price,
//       discountedPrice: item.price || 16000,
//       image: item.images?.[0]?.url || "",
//       quantity: 1,
//     }));
  
//     setCartItems(updatedItems);
//   }, [addedcart, products]);
  

//   // Update item quantity
//   const updateQuantity = (id, amount) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
//       )
//     );
//   };

//   // Calculate total price
//   const getTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + item.discountedPrice * item.quantity, 0).toFixed(2);
//   };

//   // Handle terms acceptance modal
//   const handleTermsCheckbox = () => {
//     isTermsAccepted ? setIsTermsAccepted(false) : setShowModal(true);
//   };

//   const handleTermsClose = (accepted) => {
//     setShowModal(false);
//     if (accepted) setIsTermsAccepted(true);
//   };

//   // Remove item from cart
//   const handleRemoveCart = async (itemId) => {
//     try {
//       if (isLogin) {
//         await axios.delete(`${api}/api/addtocart/remove`, {
//           data: { userId: user.id, productId: itemId },
//         });
//       }
//       dispatch(removeFromCart(itemId));
//       toast.success("Item removed from cart");
//     } catch (error) {
//       console.error("Error removing item: ", error);
//     }
//   };

//   return (
//     <div className="cart-container" style={{ position: "relative" }}>
//       {cartItems.length > 0 && (
//         <img src={flow1} alt="Floral Design" className="floral-decoration-top-left" />
//       )}

//       <h2>Shopping Cart</h2>

//       {cartItems.length > 0 ? (
//         <div className="cart-layout">
//           <div className="cart-items">
//             {cartItems.map((item) => (
//               <div key={item.id} className="cart-card">
//                 <img src={item.image} alt={item.name} className="cart-img" />
//                 <div className="cart-details">
//                   <h3>
//                     <img src={flow1} alt="Floral Icon" className="floral-icon" />
//                     {item.name}
//                   </h3>
//                   <p>{item.description}</p>
//                   <p><strong>Size:</strong> {item.size}</p>
//                   <div className="cart-actions">
//                     <span className="price">Rs. {item.discountedPrice * item.quantity}</span>
//                     <br />
//                     <div className="quantity-controls">
//                       <FaMinusCircle
//                         onClick={() => updateQuantity(item.id, -1)}
//                         className="cart-decrease-btn"
//                       />
//                       <span className="cart-quantity">{item.quantity}</span>
//                       <FaPlusCircle
//                         onClick={() => updateQuantity(item.id, 1)}
//                         className="cart-increase-btn"
//                       />
//                     </div>
//                     <button className="remove-btn" onClick={() => handleRemoveCart(item.id)}>
//                       <FaTrashAlt />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="cart-summary">
//             <h3 className="order-head">Order Summary</h3>
//             <img src={flow2} alt="Floral Design" className="floral-summary-decoration" />
//             <p className="price">
//               Subtotal: Rs. <strong>{getTotalPrice()}</strong>
//             </p>
//             <button
//               className="checkout-btn"
//               onClick={() => navigate("/checkout", { state: { cartItems, totalAmount: getTotalPrice() } })}
//             >
//               Proceed to Checkout
//             </button>
//             <button className="continue-shopping-btn" onClick={() => navigate("/Product")}>Continue Shopping</button>
//           </div>
//         </div>
//       ) : (
//         <section className="wishList-empty">
//           <div className="container">
//             <div className="inner-empt-wlist">
//               <img src={emptyCartImg} width="200px" alt="Empty Cart" />
//               <h5 className="wish-empty-title text-center">Oops! No items found. Browse and add some</h5>
//               <Link to="/Product" className="empty-wishlist-btn">Shop Now</Link>
//             </div>
//           </div>
//         </section>
//       )}

//       <DisclaimerModal showModal={showModal} handleClose={handleTermsClose} />
//     </div>
//   );
// };

// export default Cart;
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt, FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { removeFromCart } from "../../features/products/AddtoCardSlice";
import { fetchProducts } from "../../api/fetchProduct";
import { fetchaddtoCard } from "../../api/fetchAddtocard";
import flow1 from "../../assets/images/images-floral/f-1.jpg";
import flow2 from "../../assets/images/images-floral/f-2.jpg";
import emptyCartImg from "../../assets/images/wishlist/empty-cart.png";
import "./Cart.css";

const api = "http://localhost:5000";

// Disclaimer Modal Component
const DisclaimerModal = ({ showModal, handleClose }) => {
  if (!showModal) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3 className="modal-header">Terms & Conditions</h3>
        <p>* By proceeding, you agree to our return, exchange, and product policies.</p>
        <p>* No damage</p>
        <div className="modal-footer">
          <button className="modal-btn cancel" onClick={() => handleClose(false)}>
            Cancel
          </button>
          <button className="modal-btn accept" onClick={() => handleClose(true)}>
            Agree
          </button>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin, user } = useSelector((state) => state.auth);
  const addedcart = useSelector((state) => state.carts.carts);
  const { products } = useSelector((state) => state.products);
  const [cartItems, setCartItems] = useState([]);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Fetch user cart and product details
  useEffect(() => {
    if (user) {
      dispatch(fetchaddtoCard(user.id));
    }
  }, [dispatch, user]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filter and map cart items with product details
  useEffect(() => {
    const updatedItems = products
      .filter((product) => addedcart.some((item) => item.product_id === product.id))
      .map((item) => ({
        id: item.id,
        name: item.name,
        description: item.description,
        size: item.size?.[0]?.name || "N/A",
        price: item.price,
        discountedPrice: item.price || 16000,
        image: item.images?.[0]?.url || "",
        quantity: 1,
      }));

    setCartItems(updatedItems);
  }, [addedcart, products]);

  // Update item quantity
  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.discountedPrice * item.quantity, 0).toFixed(2);
  };

  // Handle terms acceptance modal
  const handleTermsCheckbox = () => {
    isTermsAccepted ? setIsTermsAccepted(false) : setShowModal(true);
  };

  const handleTermsClose = (accepted) => {
    setShowModal(false);
    if (accepted) setIsTermsAccepted(true);
  };

  // Remove item from cart
  const handleRemoveCart = async (itemId) => {
    try {
      if (isLogin) {
        await axios.delete(`${api}/api/addtocart/remove`, {
          data: { userId: user.id, productId: itemId },
        });
      }
      dispatch(removeFromCart(itemId));
      toast.success("Item removed from cart");
    } catch (error) {
      console.error("Error removing item: ", error);
    }
    };
 

  return (
    <div className="cart-container" style={{ position: "relative" }}>
      {cartItems.length > 0 && (
        <img src={flow1} alt="Floral Design" className="floral-decoration-top-left" />
      )}

      <h2>Shopping Cart</h2>

      {cartItems.length > 0 ? (
        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-card">
                <img src={item.image} alt={item.name} className="cart-img" />
                <div className="cart-details">
                  <h3>
                    <img src={flow1} alt="Floral Icon" className="floral-icon" />
                    {item.name}
                  </h3>
                  <p>{item.description}</p>
                  <p><strong>Size:</strong> {item.size}</p>
                  <div className="cart-actions">
                    <span className="price">Rs. {item.discountedPrice * item.quantity}</span>
                    <br />
                    <div className="quantity-controls">
                      <FaMinusCircle
                        onClick={() => updateQuantity(item.id, -1)}
                        className="cart-decrease-btn"
                      />
                      <span className="cart-quantity">{item.quantity}</span>
                      <FaPlusCircle
                        onClick={() => updateQuantity(item.id, 1)}
                        className="cart-increase-btn"
                      />
                    </div>
                    <button className="remove-btn" onClick={() => handleRemoveCart(item.id)}>
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3 className="order-head">Order Summary</h3>
            <img src={flow2} alt="Floral Design" className="floral-summary-decoration" />
            <p className="price">
              Subtotal: Rs. <strong>{getTotalPrice()}</strong>
            </p>
            <button
              className="checkout-btn"
              onClick={() => navigate("/checkout", { state: { cartItems, totalAmount: getTotalPrice() } })}
            >
              Proceed to Checkout
            </button>
            <button className="continue-shopping-btn" onClick={() => navigate("/Product")}>Continue Shopping</button>
          </div>
        </div>
      ) : (
        <section className="wishList-empty">
          <div className="container">
            <div className="inner-empt-wlist">
              <img src={emptyCartImg} width="200px" alt="Empty Cart" />
              <h5 className="wish-empty-title text-center">Oops! No items found. Browse and add some</h5>
              <Link to="/Product" className="empty-wishlist-btn">Shop Now</Link>
            </div>
          </div>
        </section>
      )}

      <DisclaimerModal showModal={showModal} handleClose={handleTermsClose} />
    </div>
  );
};

export default Cart;