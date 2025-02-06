import React, { useEffect, useState } from 'react';
import './WishlistNotification.css';
import { FaHeart } from 'react-icons/fa';

const WishlistNotification = ({ message, show, duration = 3000, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  return (
    <div className={`notification-popup ${show ? 'show' : ''}`}>
      <FaHeart className="notification-icon" />
      <span>{message}</span>
    </div>
  );
};

export default WishlistNotification;
