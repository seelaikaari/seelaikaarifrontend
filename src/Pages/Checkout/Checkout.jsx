import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import RazorpayPayment from "../RazorpayPayment/RazorpayPayment";
import "../Checkout/Checkout.css";

function Checkout() {
  const location = useLocation();
  const { cartItems, totalAmount } = location.state || { cartItems: [], totalAmount: 0 };

  const [showPayment, setShowPayment] = useState(false);

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    address1: "",
    address2: "",
    state: "",
    city: "",
    pincode: "",
  });
  console.log(cartItems);
  

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let errors = {};
    Object.keys(userDetails).forEach((key) => {
      if (!userDetails[key]) {
        errors[key] = `${key} is required`;
      }
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowPayment(true);
      console.log(userDetails);
      
    }
  };

  return (
    <div className="container">
      <h2>Enter Shipping Details</h2>
      {!showPayment ? (
       <div className="row">
        <div className="col-md-6">
        <form onSubmit={handleSubmit} >
          <div className="row">
            {Object.keys(userDetails).map((field) => (
              <div key={field} className="form-group col-md-6">
                <label htmlFor={field}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={field}
                  name={field}
                  value={userDetails[field]}
                  onChange={handleInputChange}
                  placeholder={`Enter ${field}`}
                />
                {formErrors[field] && <p className="error">{formErrors[field]}</p>}
              </div>
            ))}
            <div className="col-12 text-center">
              <button type="submit" className="w-100 btn btn-primary">
                Continue
              </button>
            </div>
          </div>
        </form>
        </div>
        <div className="col-md-6">
            {cartItems.map((item,index)=>{
                
                return(
                    // <div key={item.id}>
                    //     <h3>{item.name}</h3>
                    //     <p>Price: {item.price}</p>
                    //     <p>Quantity: {item.quantity}</p>
                    // </div>
                    <div className="row razorpay-items" key={index}>
                        <div className="col-3 ">
                            <img src={item.image} alt={item.name} className="w-100"/>
                        </div>
                        <div className="col-9" >
                            <h3>{item.name}</h3>
                            <p>Price: {item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                       


                        </div>
                )
            })}
        </div>

       </div>
      ) : (
        <RazorpayPayment 
          totalAmount={totalAmount} 
          isTermsAccepted={true} 
          setCartItems={() => {}} 
          userDetails={userDetails} 
        />
      )}
    </div>
  );
}

export default Checkout;
