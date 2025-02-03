import React, { useState } from 'react';
import "./Cart.css";
import { FaTrashAlt } from "react-icons/fa";

const DisclaimerModal = ({ showModal, handleClose, handleAccept }) => {
  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Terms of Service</h3>
        <div className="modal-body">
          <p><strong>Returns and Exchange</strong> of any Seelaikari product is only possible under the following conditions:</p>
          <ol>
            <li><strong>DAMAGED GOODS</strong> - We closely inspect every piece of merchandise...</li>
            <li><strong>WRONG ORDERS</strong> - If the item you received is not what you originally ordered...</li>
            <li><strong>Colors</strong> - We have made every effort to display the colors of our products...</li>
            <li><strong>SIZE AVAILABILITY OF OUTFITS ON THE WEBSITE</strong> - We follow a standard measurement chart...</li>
            <li><strong>Alterations</strong> - If you have a query regarding the size...</li>
            <li><strong>Dispatch</strong> - Domestic orders will be dispatched within 3 weeks...</li>
            <li><strong>LIST OF NON-RETURNABLE OR NON-EXCHANGEABLE PRODUCTS</strong> - Custom made and made-to-order products...</li>
            <li><strong>TERMS OF RETURN & EXCHANGE</strong> - All items to be returned or exchanged must be unused...</li>
          </ol>
        </div>
        <div className="modal-footer">
          <button onClick={() => handleClose(false)}>Cancel</button>
          <button onClick={() => handleAccept()}>Accept</button>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Designer Draped Saree in Gold',
      description: 'DESIGNER DRAPED SAREE IN GOLD',
      size: 'Large',
      price: 37500,
      discountedPrice: 18750,
      image: 'https://www.studio149fashion.com/cdn/shop/files/DSC4568-Editcopyn.jpg?v=1714324495&width=600',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Designer White Silk Saree',
      description: 'DESIGNER WHITE SILK SAREE',
      size: 'Medium',
      price: 32000,
      discountedPrice: 16000,
      image: 'https://www.studio149fashion.com/cdn/shop/files/6449rt.jpg?v=1733915970&width=533',
      quantity: 1,
    },
  ]);

  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
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

  const handleTermsChange = () => {
    setShowModal(true);
  };

  const handleModalClose = (accept) => {
    setShowModal(false);
    if (accept) {
      setIsTermsAccepted(true);
    }
  };

  return (
    <div className="cartPageContainer">
      {cartItems.length === 0 ? (
        <div>
          <p>No cart items</p>
          <button onClick={() => alert('Returning to shop')}>Return to Shop</button>
        </div>
      ) : (
        <div>
          <h2>Shopping Cart ({cartItems.length})</h2>
          <div className="cartItems">
            {cartItems.map((item) => (
              <div key={item.id} className="cartItem">
                <img src={item.image} alt={item.name} className="cartItemImage" />
                <div className="item-description">
                  <div>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    <p>{item.size}</p>
                  </div>
                  <div>
                    <p>Rs. {item.discountedPrice * item.quantity} </p>
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span className="item-quantity">{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <div className="remove-cart-item">
                    <button className="bg-danger" onClick={() => removeItem(item.id)}>
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cartSummary">
            <div className="subtotal">
              <p>Subtotal</p>
              <p>Rs. {getTotalPrice()}</p>
            </div>
            <div className="termsAndConditions">
              <label className='label'>
                <input
                  type="checkbox"
                  checked={isTermsAccepted}
                  onChange={handleTermsChange}
                /> &nbsp;
                I agree with Terms & Conditions
              </label>
            </div>
            <div className="cartButtons">
              <button
                disabled={!isTermsAccepted}
                onClick={() => alert('Proceeding to Checkout')}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
      <DisclaimerModal showModal={showModal} handleClose={handleModalClose} handleAccept={() => handleModalClose(true)} />
    </div>
  );
};

export default Cart;
