import React from 'react';
import "../RazorpayPayment/RazorpayPayment.css";

const RazorpayPayment = ({ totalAmount, userDetails, setCartItems, setShowPayment }) => {

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
    const res = await loadRazorpayScript();
    if (!res) {
      alert('Failed to load Razorpay. Check your internet connection.');
      return;
    }

    const options = {
      key: process.env.Rkey, // Replace with your Razorpay test key
      amount: totalAmount * 100, // Convert to paise
      currency: 'INR',
      name: 'Akilesh Store',
      description: 'Purchase from Akilesh Store',
      handler: function (response) {
        alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
        setCartItems([]); 
      },
      prefill: {
        name: userDetails.name,
        email: userDetails.email,
        contact: userDetails.mobile, // Use mobile number instead of contact
      },
      theme: {
        color: '#3399cc',
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="payment-container text-center">
      <h2>Review & Pay</h2>
      <p><strong>Name:</strong> {userDetails.name}</p>
      <p><strong>Email:</strong> {userDetails.email}</p>
      <p><strong>Mobile:</strong> {userDetails.mobile}</p>
      <p><strong>Total Amount:</strong> <b>Rs. {totalAmount}</b></p>

      {/* Payment Button */}
      <button onClick={handlePayment} className="btn btn-success checkoutButton">
        Pay Now
      </button>

      {/* Edit Details Button */}
      <button 
        className="btn btn-warning mt-3 mx-2"
        onClick={() => setShowPayment(false)}
      >
        Edit Details
      </button>

      {/* Help Text */}
      <p className="help-text mt-2">
        Need help? <a href="mailto:support@example.com">Contact us</a>
      </p>
    </div>
  );
};

export default RazorpayPayment;
