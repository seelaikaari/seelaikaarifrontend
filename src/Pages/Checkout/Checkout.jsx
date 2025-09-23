import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import RazorpayPayment from "../RazorpayPayment/RazorpayPayment";
import "../Checkout/Checkout.css";
import { Country, State, City } from "country-state-city";

function Checkout() {
  const location = useLocation();
  let { cartItems = [], totalAmount = 0 } = location.state || {};

  const [showPayment, setShowPayment] = useState(false);

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Reset dependent fields
    if (name === "country") {
      setUserDetails((prev) => ({ ...prev, country: value, state: "", city: "" }));
    } else if (name === "state") {
      setUserDetails((prev) => ({ ...prev, state: value, city: "" }));
    } else {
      // Allow only numbers for phone and pincode
      if ((name === "phone" || name === "pincode") && !/^\d*$/.test(value)) return;
      setUserDetails((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    let errors = {};

    if (!userDetails.name.trim()) errors.name = "Name is required";
    if (!userDetails.email.trim()) errors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(userDetails.email)) errors.email = "Enter a valid email";
    if (!userDetails.phone.trim()) errors.phone = "Mobile is required";
    else if (!/^\d{10}$/.test(userDetails.phone)) errors.phone = "Enter 10-digit phone";
    if (!userDetails.address1.trim()) errors.address1 = "Address is required";
    if (!userDetails.country.trim()) errors.country = "Country is required";
    if (!userDetails.state.trim()) errors.state = "State is required";
    if (!userDetails.city.trim()) errors.city = "City is required";
    if (!userDetails.pincode.trim()) errors.pincode = "Pincode is required";
    else if (!/^\d{6}$/.test(userDetails.pincode)) errors.pincode = "Enter 6-digit pincode";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) setShowPayment(true);
  };

  // 👉 Fetch dynamic lists
  const countries = Country.getAllCountries();
// To find selected country object by name
const selectedCountry = countries.find(c => c.name === userDetails.country);
const states = selectedCountry ? State.getStatesOfCountry(selectedCountry.isoCode) : [];

// To find selected state object by name
const selectedState = states.find(s => s.name === userDetails.state);
const cities = selectedState
  ? City.getCitiesOfState(selectedCountry.isoCode, selectedState.isoCode)
  : [];

 if(userDetails?.country!="India"){
     totalAmount =parseInt(totalAmount)+2000 
    }

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
                  {/* Name */}
                  <div className="form-group col-md-6">
                    <label>Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={userDetails.name}
                      onChange={handleInputChange}
                    />
                    {formErrors.name && <p className="error">{formErrors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="form-group col-md-6">
                    <label>Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={userDetails.email}
                      onChange={handleInputChange}
                    />
                    {formErrors.email && <p className="error">{formErrors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div className="form-group col-md-6">
                    <label>Phone:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={userDetails.phone}
                      onChange={handleInputChange}
                    />
                    {formErrors.phone && <p className="error">{formErrors.phone}</p>}
                  </div>

                  {/* Address */}
                  <div className="form-group col-md-6">
                    <label>Address 1:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address1"
                      value={userDetails.address1}
                      onChange={handleInputChange}
                    />
                    {formErrors.address1 && <p className="error">{formErrors.address1}</p>}
                  </div>

                  {/* Country Dropdown */}
                  <div className="form-group col-md-6">
                    <label>Country:</label>
                    <select
                      className="form-control"
                      name="country"
                      value={userDetails.country}
                      onChange={handleInputChange}
                    >
                      <option value="">-- Select Country --</option>
                      {countries.map((c) => (
                        <option key={c.isoCode} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                    {formErrors.country && <p className="error">{formErrors.country}</p>}
                  </div>

                  {/* State Dropdown */}
                  <div className="form-group col-md-6">
                    <label>State:</label>
                    <select
                      className="form-control"
                      name="state"
                      value={userDetails.state}
                      onChange={handleInputChange}
                      disabled={!states.length}
                    >
                      <option value="">-- Select State --</option>
                      {states.map((s) => (
                        <option key={s.isoCode} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                    {formErrors.state && <p className="error">{formErrors.state}</p>}
                  </div>

                  {/* City Dropdown */}
                  <div className="form-group col-md-6">
                    <label>City:</label>
                    <select
                      className="form-control"
                      name="city"
                      value={userDetails.city}
                      onChange={handleInputChange}
                      disabled={!cities.length}
                    >
                      <option value="">-- Select City --</option>
                      {cities.map((c) => (
                        <option key={c.name} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                    {formErrors.city && <p className="error">{formErrors.city}</p>}
                  </div>

                  {/* Pincode */}
                  <div className="form-group col-md-6">
                    <label>Pincode:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="pincode"
                      value={userDetails.pincode}
                      onChange={handleInputChange}
                    />
                    {formErrors.pincode && <p className="error">{formErrors.pincode}</p>}
                  </div>

                  {/* Continue Button */}
                  <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary mt-2 mb-3">
                      Continue
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Cart Items */}
            <div className="col-md-4 chkout-summary">
              <div className="summary-content">
                <h3 className="chkout-head-summary text-center">Order Summary</h3>
                {cartItems.map((item, idx) => (
                  <div key={idx} className="d-flex align-items-center mb-3 des-details">
                    <div className="col-2">
                      <img src={item.image} alt={item.name} className="img-fluid" />
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
                  {userDetails.country!="India" && <p>International Shipping Charge : 2000 </p>}
                  <p>Total Rs: {totalAmount}</p>
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
