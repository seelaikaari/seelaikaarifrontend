import React, { useState } from 'react';
import "./RazorpayPayment.css"

const RazorpayPayment = ({ totalAmount, isTermsAccepted ,setCartItems}) => {
  const [showForm, setShowForm] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    contact: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    contact: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {
      name: !userDetails.name,
      email: !userDetails.email,
      contact: !userDetails.contact,
    };
    setFormErrors(errors);
    return !Object.values(errors).includes(true);
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (!validateForm()) return;

    const res = await loadRazorpayScript();
    if (!res) {
      alert('Failed to load Razorpay. Check your internet connection.');
      return;
    }

    const options = {
      key: 'rzp_test_Qdjyecln6X4M7k', // Replace with your test key
      amount: totalAmount * 100, // Convert to paise
      currency: 'INR',
      name: 'Akilesh Store',
      description: 'Purchase from Akilesh Store',
      handler: function (response) {
        alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
        setShowForm(false);
        setCartItems([]);
        
      },
      prefill: {
        name: userDetails.name,
        email: userDetails.email,
        contact: userDetails.contact,
      },
      theme: {
        color: '#3399cc',
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <>
      {!showForm ? (
        <button
          className="checkout-btn"
          disabled={!isTermsAccepted}
          onClick={() => setShowForm(true)}
        >
          Proceed to Checkout
        </button>
      ) : (
        <div className="checkout-form-container">
          <h3 className='checkout-headig'>Enter your details</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handlePayment();
            }}
          >
            <input
              type="text"
              name="name"
              value={userDetails.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="checkout-input"
            />
            {formErrors.name && <p className="error">Name is required</p>}
            
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="checkout-input"
            />
            {formErrors.email && <p className="error">Email is required</p>}
            
            <input
              type="text"
              name="contact"
              value={userDetails.contact}
              onChange={handleInputChange}
              placeholder="Contact Number"
              className="checkout-input"
            />
            {formErrors.contact && <p className="error">Contact is required</p>}
            
            <button type="submit" className="checkout-submit-btn">
             Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default RazorpayPayment;
