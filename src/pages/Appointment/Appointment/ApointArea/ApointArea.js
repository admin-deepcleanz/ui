import React, { useState } from 'react';
import { FaClock, FaPhoneAlt, FaShieldAlt, FaStar } from 'react-icons/fa';

const PROJECT_KEY = 'deep-cleanz';
const API_BASE = process.env.REACT_APP_API_BASE_URL;

const initialForm = {
   name: '',
   phone: '',
   service: '',
   location: '',
   message: '',
};

const trustPoints = [
   {
      icon: <FaShieldAlt />,
      title: 'Pay After Service',
      desc: 'No upfront payment. You pay only after the cleaning is done to your satisfaction.',
   },
   {
      icon: <FaClock />,
      title: 'Same-Day Callback',
      desc: 'Submit your request and we call back within the same day to confirm details.',
   },
   {
      icon: <FaStar />,
      title: '4.7 Rated on Google',
      desc: 'Over 200 homes served across Chennai with consistent 5-star results.',
   },
];

const ApointArea = () => {
   const [formData, setFormData] = useState(initialForm);
   const [errors, setErrors] = useState({});
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [status, setStatus] = useState({ type: '', message: '' });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: '' }));
      setStatus({ type: '', message: '' });
   };

   const validate = () => {
      const newErrors = {};
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.phone.trim()) {
         newErrors.phone = 'Phone number is required';
      } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
         newErrors.phone = 'Enter a valid 10-digit Indian mobile number';
      }
      if (!formData.service) newErrors.service = 'Please select a service';
      if (!formData.location.trim()) newErrors.location = 'Location is required';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validate()) return;

      setIsSubmitting(true);
      setStatus({ type: '', message: '' });

      try {
         const response = await fetch(`${API_BASE}/api/v1/appointments`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ projectKey: PROJECT_KEY, ...formData }),
         });
         if (!response.ok) throw new Error('Request failed');
         setStatus({
            type: 'success',
            message: 'Your booking request is received! We will call you shortly to confirm.',
         });
         setFormData(initialForm);
      } catch {
         setStatus({
            type: 'error',
            message: 'Could not submit right now. Please try again or call us directly.',
         });
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <section className="booking">
         <div className="container">
            <div className="booking__layout">

               {/* Left — trust panel */}
               <div className="booking__panel">
                  <div className="booking__panel-eyebrow">Book a Cleaning</div>
                  <h1 className="booking__panel-title">
                     Fast, Reliable Home Cleaning in Chennai
                  </h1>
                  <p className="booking__panel-copy">
                     Fill the form and we'll call back the same day to confirm the right service for your home. No upfront payment required.
                  </p>

                  <div className="booking__trust-list">
                     {trustPoints.map((point) => (
                        <div className="booking__trust-item" key={point.title}>
                           <div className="booking__trust-icon">{point.icon}</div>
                           <div>
                              <p className="booking__trust-title">{point.title}</p>
                              <p className="booking__trust-desc">{point.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>

                  <a href="tel:+919363609470" className="booking__panel-call">
                     <div className="booking__panel-call-icon"><FaPhoneAlt /></div>
                     <div>
                        <span className="booking__panel-call-label">Or call us directly</span>
                        <span className="booking__panel-call-number">+91 93636 09470</span>
                     </div>
                  </a>
               </div>

               {/* Right — form card */}
               <div className="booking__form-card">
                  <h2 className="booking__form-title">Request a Booking</h2>
                  <p className="booking__form-subtitle">
                     Fields marked <span style={{ color: '#e05252' }}>*</span> are required. We'll call to confirm the rest.
                  </p>

                  {status.message && (
                     <div className={`booking__status booking__status--${status.type}`}>
                        {status.message}
                     </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate>
                     <div className="row g-3">
                        <div className="col-sm-6">
                           <div className="booking__field">
                              <label className="booking__label">Your Name <span className="req">*</span></label>
                              <input
                                 type="text"
                                 name="name"
                                 placeholder="e.g. Ravi Kumar"
                                 value={formData.name}
                                 onChange={handleChange}
                              />
                              {errors.name && <span className="booking__field-error">{errors.name}</span>}
                           </div>
                        </div>
                        <div className="col-sm-6">
                           <div className="booking__field">
                              <label className="booking__label">Phone Number <span className="req">*</span></label>
                              <input
                                 type="tel"
                                 name="phone"
                                 placeholder="10-digit mobile number"
                                 value={formData.phone}
                                 onChange={handleChange}
                              />
                              {errors.phone && <span className="booking__field-error">{errors.phone}</span>}
                           </div>
                        </div>
                        <div className="col-12">
                           <div className="booking__field">
                              <label className="booking__label">Service Needed <span className="req">*</span></label>
                              <select name="service" value={formData.service} onChange={handleChange}>
                                 <option value="">Select a service</option>
                                 <option value="Full House Deep Cleaning">Full House Deep Cleaning</option>
                                 <option value="Kitchen Cleaning">Kitchen Cleaning</option>
                                 <option value="Bedroom Cleaning">Bedroom Cleaning</option>
                                 <option value="Bathroom Cleaning">Bathroom Cleaning</option>
                                 <option value="Sofa Cleaning">Sofa Cleaning</option>
                                 <option value="Carpet Cleaning">Carpet Cleaning</option>
                                 <option value="Move-In / Move-Out Cleaning">Move-In / Move-Out Cleaning</option>
                                 <option value="Post-Renovation Cleaning">Post-Renovation Cleaning</option>
                              </select>
                              {errors.service && <span className="booking__field-error">{errors.service}</span>}
                           </div>
                        </div>
                        <div className="col-12">
                           <div className="booking__field">
                              <label className="booking__label">Your Location in Chennai <span className="req">*</span></label>
                              <input
                                 type="text"
                                 name="location"
                                 placeholder="e.g. Velachery, Anna Nagar"
                                 value={formData.location}
                                 onChange={handleChange}
                              />
                              {errors.location && <span className="booking__field-error">{errors.location}</span>}
                           </div>
                        </div>
                        <div className="col-12">
                           <div className="booking__field">
                              <label className="booking__label">Additional Notes <span style={{ color: '#9aadab', fontWeight: 400 }}>(optional)</span></label>
                              <textarea
                                 name="message"
                                 placeholder="e.g. 2BHK flat, heavy kitchen grease, please bring eco-friendly products…"
                                 value={formData.message}
                                 onChange={handleChange}
                              />
                           </div>
                        </div>
                        <div className="col-12">
                           <button
                              type="submit"
                              className="theme-btn text-white booking__submit"
                              disabled={isSubmitting}
                           >
                              <i className="flaticon-enter"></i>
                              {isSubmitting ? 'Sending…' : 'Submit Booking Request'}
                           </button>
                        </div>
                     </div>
                  </form>
               </div>

            </div>
         </div>
      </section>
   );
};

export default ApointArea;
