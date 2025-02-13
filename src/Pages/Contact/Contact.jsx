import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Contact/Contact.css';
//icons
import { MdEmail, MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    comment: '',
    subject: ""
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
            src='

  https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62265.572914295124!2d77.79151043072625!3d12.739607733468766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae70c883f728a3%3A0xd71a6bc0275ac9be!2sHosur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1738671243525!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
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


         <div className='form-button'>
         <button type="submit" className='contact-btn'>Submit</button>
         </div>
        </form>
      </div>
    );
  // const Contactinfo = [
  //   {
  //     icon: <MdEmail />,
  //     detail: "example@gmail.com",
  //     name: "Email:",
  //   },
  //   {
  //     icon: <MdCall />,
  //     detail: "+91-000-000-0000",
  //     name: "Phone:",

  //   },
  //   {
  //     icon: <FaLocationDot />,
  //     detail: "lorem lorem lorem lorem lorem",
  //     name: "Location:",

  //   },
  // ]
  // return (
  //   <>
  //     <section className='contact-sec-1-wrapper'>
  //       <div className="container">
  //         <h3 className='cont-hts'>Contact Details</h3>

  //         <div className="row row-gap-5">
  //           <div className="col-md-6 contct-l0wrap">
  //             {Contactinfo.map((item, index) =>
  //               <div className='cont-w-sec' key={index}>
  //                 <h4 className='subd-h-cnt'>{item.name}</h4>
  //                 <div className='cont-inner-wrap'>
  //                   {item.icon}
  //                   <Link className='contLink'>{item.detail}</Link>
  //                 </div>
  //               </div>
  //             )}
  //           </div>
  //           <div className="col-md-6">
  //             <form action="" onSubmit={handleSubmit}>
  //               <div className="row ">
  //                 <div className="col-md-6 inp-cnt-wrap">
  //                   <label htmlFor="" className='contact-lab-f'>Name*</label>
  //                   <input type="text" className='contact-inp-f' name="name"
  //                     value={formData.name}
  //                     onChange={handleChange}
  //                     placeholder="Enter your name" />
  //                   {errors.name && <p className="error-msg">{errors.name}</p>}
  //                 </div>
  //                 <div className="col-md-6 inp-cnt-wrap">
  //                   <label htmlFor="" className='contact-lab-f'>Phone*</label>
  //                   <input type="tel" className='contact-inp-f' name="mobile"
  //                     value={formData.mobile}
  //                     onChange={handleChange}
  //                     placeholder="Enter your mobile number" />
  //                   {errors.mobile && <p className="error-msg">{errors.mobile}</p>}
  //                 </div>
  //                 <div className="col-md-6 inp-cnt-wrap">
  //                   <label htmlFor="" className='contact-lab-f'>Email*</label>
  //                   <input className='contact-inp-f' type="email"
  //                     name="email"
  //                     value={formData.email}
  //                     onChange={handleChange}
  //                     placeholder="Enter your email" />
  //                   {errors.email && <p className="error-msg">{errors.email}</p>}
  //                 </div>
  //                 <div className="col-md-6 inp-cnt-wrap">
  //                   <label htmlFor="" className='contact-lab-f'>Subject</label>
  //                   <input type="text" className='contact-inp-f' name='subject' value={formData.subject}
  //                     onChange={handleChange}
  //                     placeholder="Enter your subject" />
  //                 </div>
  //                 <div className="col-md-12 inp-cnt-wrap">
  //                   <label htmlFor="" className='contact-lab-f'>Comment*</label>
  //                   <textarea name="comment"
  //                     value={formData.comment}
  //                     onChange={handleChange}
  //                     placeholder="Write your message" id="" rows="4" className='contact-inp-f cont-text-area' />
  //                   {errors.comment && <p className="error-msg">{errors.comment}</p>}
  //                 </div>
  //                 <div className="col-md-12 inp-cnt-wrap">
  //                   <button className='form-sub-btn-contact'>Submit</button>
  //                 </div>
  //               </div>
  //             </form>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //     <section className='contact-sec-2-wrapper'>
  //       <div className="container-fluide">
  //         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.5665920656!2d77.46612495987436!3d12.954280237773864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1739425107013!5m2!1sen!2sin" height="450" width="100%" loading="lazy"></iframe>
  //       </div>
  //     </section>
  //   </>
  // )
};

export default Contact;
