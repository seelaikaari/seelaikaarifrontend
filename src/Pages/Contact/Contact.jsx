import React, { useState } from 'react';
import './Contact.css'; // Importing CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    comment: '',
  });
  
  const [errors, setErrors] = useState({
    name: '',
    mobile: '',
    email: '',
    comment: '',
  });

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Enter a valid 10-digit mobile number';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
      isValid = false;
    }

    if (!formData.comment) {
      newErrors.comment = 'Comment is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Data:', formData);
     
    }
  };

  return (
    <div className="contact-container">
      {/* Map Section */}
      <div className="map-container">
        <iframe 
          title="Location Map"
          src="https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9539974,77.6309395,11z/data=!3m1!4b1!4m6!3m5!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627!16zL20vMDljMTc?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3Dhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.905795154984!2d80.2171425147017!3d13.08064029079656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267960fbbebf3%3A0x6a56a20d2063a350!2sAB-149%2C%202nd%20Floor%20%2C%203rd%20Main%20Road%2C%20Anna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1675368374261!5m2!1sen!2sus" 
          width="100%" 
          height="300" 
          style={{border: 0}} 
          allowFullScreen="" 
          loading="lazy">
        </iframe>
      </div>

  
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> customersupport@seelaikaari.com</p>
        <p><strong>Phone Number:</strong> 044-123654789</p>
        <p><strong>WhatsApp:</strong> +91 1234567895</p>
        <p><strong>Address:</strong> AB-149, 2nd Floor, 3rd Main Road</p>
        <p><strong>Working Hours:</strong> 10:30 AM to 6:30 PM Mon-Sun</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Get in Touch</h3>
        <p className="intro-text">We'd love to hear from you about our entire service. Your comments and suggestions will be highly appreciated. Please complete the form below.</p>

        <div className="form-fields">
          <div className="field-group">
            <label>Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Enter your name" />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="field-group">
            <label>Mobile Number</label>
            <input 
              type="tel" 
              name="mobile" 
              value={formData.mobile} 
              onChange={handleChange} 
              placeholder="Enter your mobile number" />
            {errors.mobile && <p className="error">{errors.mobile}</p>}
          </div>

          <div className="field-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Enter your email" />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className='field-group'>

          </div>

          <div className="field-group-comment">
            <label>Comment</label>
            <textarea 
              name="comment" 
              value={formData.comment} 
              onChange={handleChange} 
              placeholder="Write your message"></textarea>
            {errors.comment && <p className="error">{errors.comment}</p>}
          </div>
        </div>

        <div className="checkbox">
          <input type="checkbox" id="save-info" />
          <label htmlFor="save-info">Save my name, email, and website in this browser for the next time I comment.</label>
        </div>

       <div className='form-button'>
       <button type="submit">Submit</button>
       </div>
      </form>
    </div>
  );
};

export default Contact;
