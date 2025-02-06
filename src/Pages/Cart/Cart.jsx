import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { FaTrashAlt, FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import RazorpayPayment from "../RazorpayPayment/RazorpayPayment";

const DisclaimerModal = ({ showModal, handleClose }) => {
  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3 className="modal-header">Terms & Conditions</h3>
        <p> * By proceeding, you agree to our return, exchange, and product policies.</p>
        <p> * No damage</p>
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
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Designer Draped Saree in Gold",
      description: "Elegant gold-draped saree with fine craftsmanship.",
      size: "L",
      price: 37500,
      discountedPrice: 18750,
      image: "https://www.studio149fashion.com/cdn/shop/files/DSC4568-Editcopyn.jpg?v=1714324495&width=600",
      quantity: 1,
    },
    {
      id: 2,
      name: "Designer White Silk Saree",
      description: "Luxurious silk saree in pure white.",
      size: "M",
      price: 32000,
      discountedPrice: 16000,
      image: "https://www.studio149fashion.com/cdn/shop/files/6449rt.jpg?v=1733915970&width=533",
      quantity: 1,
    },
  ]);

  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.discountedPrice * item.quantity, 0)
      .toFixed(2);
  };

  const handleTermsCheckbox = () => {
    if (isTermsAccepted) {
      setIsTermsAccepted(false);
    } else {
      setShowModal(true);
    }
  };

  const handleTermsClose = (accepted) => {
    setShowModal(false);
    if (accepted) {
      setIsTermsAccepted(true);
    }
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-card">
              <img src={item.image} alt={item.name} className="cart-img" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>
                  <strong>Size:</strong> {item.size}
                </p>
                <div className="cart-actions">
                  <span className="price">Rs. {item.discountedPrice * item.quantity}</span>
                  <br />
                  <div className="quantity-controls">
                    <div className="decrease-btn">
                      <FaMinusCircle
                        onClick={() => updateQuantity(item.id, -1)}
                        className="cart-decrease-btn"
                      />
                    </div>
                    <span className="cart-quantity">{item.quantity}</span>
                    <div className="increase-btn">
                      <FaPlusCircle
                        onClick={() => updateQuantity(item.id, 1)}
                        className="cart-increase-btn"
                      />
                    </div>
                  </div>
                  <button className="remove-btn" onClick={() => removeItem(item.id)}>
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3 className="order-head">Order Summary</h3>
          <p className="price">
            Subtotal: Rs. <strong>{getTotalPrice()}</strong>
          </p>
          <button 
            className="checkout-btn"
            onClick={() => navigate('/checkout', { state: { cartItems, totalAmount: getTotalPrice() } })}
          >
            Proceed to Checkout
          </button>
          <button className="continue-shopping-btn" onClick={() => navigate("/Product")}>
            Continue Shopping
          </button>
        </div>
      </div>

   

      <DisclaimerModal showModal={showModal} handleClose={handleTermsClose} />
    </div>
  );
};

export default Cart;
