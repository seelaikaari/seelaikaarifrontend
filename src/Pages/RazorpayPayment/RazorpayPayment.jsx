import React from "react";
import "../RazorpayPayment/RazorpayPayment.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY;

const RazorpayPayment = ({ totalAmount, userDetails, cartItems, setShowPayment }) => {
  const navigate = useNavigate();
  const { isLogin,loading,user} = useSelector((state) => state.auth);
  console.log(user.id);
  
  const handlePayment = async () => {
    console.log("User Details:", userDetails);

    try {
      // Create Razorpay Order
      const orderResponse = await fetch("http://localhost:5000/api/order/create-razorpay-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalAmount }),
      });

      const orderData = await orderResponse.json();
    
      if (!orderData.success) {
        alert("Failed to create Razorpay order");
        return;
      }

      console.log("Razorpay Order Created:", orderData.order.id);

      // Open Razorpay Payment Window
      const options = {
        key: razorpayKey,
        amount: totalAmount * 100, // Amount in paise
        currency: "INR",
        name: "Akilesh Store",
        order_id: orderData.order.id,
        handler: async function (response) {
          console.log("✅ Payment Success:", response);

          if (!response.razorpay_payment_id || !response.razorpay_signature) {
            console.error("Missing payment_id or signature from Razorpay!");
            alert("Payment verification failed! Try again.");
            return;
          }

          // Verify Payment with Backend
          const paymentResponse = await fetch("http://localhost:5000/api/order/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              order_id: orderData.order.id,
              payment_id: response.razorpay_payment_id,
              signature: response.razorpay_signature,
              userDetails,
              cartItems,
              totalAmount,
              user:user.id
            }),
          });

          const paymentData = await paymentResponse.json();
          console.log("Payment Verification Response:", paymentData);

          if (paymentData.success) {
            alert("Order stored successfully!");
            navigate(`/Account`, {
              state: {
                payment_id: response.razorpay_payment_id,
                orderId: orderData.order.id,
                totalAmount,
                email: userDetails.email,
              },
            });
          } else {
            alert("Payment verification failed!");
          }
        },
        prefill: {
          name: userDetails.name,
          email: userDetails.email,
          contact: userDetails.mobile || "",
        },
        // theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      setTimeout(() => rzp.open(), 2000); 
      rzp.on('payment.failed', function (response) {
        console.error("❌ Payment Failed:", response.error);
        alert("Payment Failed: " + response.error.description);
      });
      
      // Try logging the payment success event
      rzp.on('payment.success', function (response) {
        console.log("✅ Payment Success:", response);
      });
      
    } catch (error) {
      console.error("Error during payment:", error);
      alert("Payment failed. Try again!");
    }
  };

  return (
    <div className="payment-container text-center">
      <h2>Review & Pay</h2>
      <p><strong>Name:</strong> {userDetails.name}</p>
      <p><strong>Email:</strong> {userDetails.email}</p>
      <p><strong>Mobile:</strong> {userDetails.mobile}</p>
      <p><strong>Total Amount:</strong> <b>Rs. {totalAmount}</b></p>

      <button onClick={handlePayment} className="btn btn-success checkoutButton">
        Pay Now
      </button>
      <button className="btn btn-warning mt-3 mx-2" onClick={() => setShowPayment(false)}>
        Edit Details
      </button>
      <p className="help-text mt-2">
        Need help? <a href="mailto:support@example.com">Contact us</a>
      </p>
    </div>
  );
};

export default RazorpayPayment;
