import React from 'react';
import '../emptycart/Emptycart.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="empty-cart-container">
      <div className="empty-cart-content">
        <FaShoppingCart className="cart-icon" />
        <h2>Your Cart is Empty</h2>
        <p>Explore our beautiful collection of traditional sarees and add elegance to your wardrobe.</p>
        <button className="shop-button" onClick={() => navigate('/Product')}>
          Start Shopping
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
