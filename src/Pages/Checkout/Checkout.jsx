import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import RazorpayPayment from "../RazorpayPayment/RazorpayPayment";
import "../Checkout/Checkout.css";

function Checkout() {
  const location = useLocation();
  const { cartItems = [], totalAmount = 0 } = location.state || {}; // Ensuring default values

  const [showPayment, setShowPayment] = useState(false);

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    state: "",
    city: "",
    pincode: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Allow only numbers for phone and pincode fields
    if ((name === "phone" || name === "pincode") && !/^\d*$/.test(value)) return;

    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let errors = {};

    // Name validation (should not be empty)
    if (!userDetails.name.trim()) {
      errors.name = "Name is required";
    }

    // Email validation (must be a valid email format)
    if (!userDetails.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(userDetails.email)) {
      errors.email = "Enter a valid email address";
    }

    // Mobile validation (must be a 10-digit number)
    if (!userDetails.phone.trim()) {
      errors.phone = "Mobile number is required";
    } else if (!/^\d{10}$/.test(userDetails.phone)) {
      errors.phone = "Enter a valid 10-digit phone number";
    }

    // Address validation (should not be empty)
    if (!userDetails.address1.trim()) {
      errors.address1 = "Address is required";
    }

    // City validation (should not be empty)
    if (!userDetails.city.trim()) {
      errors.city = "City is required";
    }

    // State validation (should not be empty)
    if (!userDetails.state.trim()) {
      errors.state = "State is required";
    }

    // Pincode validation (must be a 6-digit number)
    if (!userDetails.pincode.trim()) {
      errors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(userDetails.pincode)) {
      errors.pincode = "Enter a valid 6-digit pincode";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowPayment(true);
    }
  };

  return (
    <div className="chkout-outer">
      <div className="container chk-out">
        <h2>Enter Shipping Details</h2>
        {!showPayment ? (
          <div className="row caart-holder">
            {/* Shipping Details Form */}
            <div className="col-md-8 form-contains">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  {Object.keys(userDetails).map((field) => (
                    <div key={field} className="form-group col-md-6">
                      <label htmlFor={field}>
                        {field.charAt(0).toUpperCase() + field.slice(1)}:
                      </label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        className="form-control"
                        id={field}
                        name={field}
                        value={userDetails[field]}
                        onChange={handleInputChange}
                        placeholder={`Enter ${field}`}
                      />
                      {formErrors[field] && (
                        <p className="error">{formErrors[field]}</p>
                      )}
                    </div>
                  ))}
                  <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary mt-2 mb-3">
                      Continue
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Cart Items Display */}
            <div className="col-md-4 chkout-summary">
              <div className="summary-content">
                <h3 className="chkout-head-summary text-center">
                  Order Summary
                </h3>
                <div className="row">
                  {cartItems.map((item, index) => (
                    <div
                      className="d-flex align-items-center mb-3 des-details"
                      key={index}>
                      <div className="col-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-10 crt-details">
                        <h3>{item.name}</h3>
                        <p>Price: {item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                  <hr />
                  <div className="col-12 text-center final-price">
                    <p>Total Rs: {totalAmount}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <RazorpayPayment
            totalAmount={totalAmount}
            userDetails={userDetails}
            cartItems={cartItems || []}
            setShowPayment={setShowPayment}
          />
        )}
      </div>
    </div>
  );
}

export default Checkout;
