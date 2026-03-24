import React, { useState } from 'react';

const initialForm = {
   phone: '',
   service: '',
   location: '',
};

const CtaArea = () => {
   const [formData, setFormData] = useState(initialForm);
   const [errors, setErrors] = useState({});
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [statusMessage, setStatusMessage] = useState('');
   const [statusType, setStatusType] = useState('');

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((current) => ({ ...current, [name]: value }));
      setErrors((current) => ({ ...current, [name]: '' }));
      setStatusMessage('');
   };

   const validateForm = () => {
      const newErrors = {};

      if (!formData.phone.trim()) {
         newErrors.phone = 'Phone number is required';
      }

      if (!formData.service) {
         newErrors.service = 'Please select a service';
      }

      if (!formData.location.trim()) {
         newErrors.location = 'Location is required';
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validateForm()) return;

      setIsSubmitting(true);
      setStatusMessage('');
      setStatusType('');

      try {
         const response = await fetch('https://hook.eu2.make.com/fbwndbexchu5i2win4z6gpnj1tvw33ob', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
         });

         if (!response.ok) {
            throw new Error('Request failed');
         }

         setFormData(initialForm);
         setStatusType('success');
         setStatusMessage('Thanks. We will call you shortly to confirm the right cleaning service.');
      } catch (error) {
         setStatusType('error');
         setStatusMessage('We could not submit your request right now. Please try again or call us directly.');
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <section className="tp-appoint-cta-area pt-60 pb-60 premium-home__cta">
         <div className="container">
            <div className="premium-home__cta-card">
               <form onSubmit={handleSubmit}>
                  <div className="row align-items-center custom-mar-20">
                     <div className="col-xl-3 col-lg-12 custom-pad-20">
                        <div className="tp-appoint wow fadeInUp" data-wow-delay=".1s">
                           <h4 className="tp-appoint-title" style={{ color: '#23482b' }}>Request a <br /> Quick Call Back</h4>
                           <p className="mb-0 premium-home__cta-copy">
                              Tell us your service and area. We&apos;ll call you back shortly.
                           </p>
                        </div>
                     </div>
                     <div className="col-xl-7 col-lg-9 custom-pad-20">
                        <div className="row align-items-center custom-mar-20">
                           <div className="col-lg-4 custom-pad-20">
                              <div className="tp-appoint wow fadeInUp" data-wow-delay=".3s">
                                 <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                 />
                                 {errors.phone && <p className="text-danger mb-0 mt-2">{errors.phone}</p>}
                              </div>
                           </div>
                           <div className="col-lg-4 custom-pad-20">
                              <div className="tp-appoint select-field-arrow wow fadeInUp" data-wow-delay=".5s">
                                 <select name="service" value={formData.service} onChange={handleChange}>
                                    <option value="">Select Service</option>
                                    <option value="Full House Deep Cleaning">Full House Deep Cleaning</option>
                                    <option value="Kitchen Cleaning">Kitchen Cleaning</option>
                                    <option value="Bedroom Cleaning">Bedroom Cleaning</option>
                                    <option value="Bathroom Cleaning">Bathroom Cleaning</option>
                                    <option value="Sofa Cleaning">Sofa Cleaning</option>
                                    <option value="Carpet Cleaning">Carpet Cleaning</option>
                                 </select>
                                 {errors.service && <p className="text-danger mb-0 mt-2">{errors.service}</p>}
                              </div>
                           </div>
                           <div className="col-lg-4 custom-pad-20">
                              <div className="tp-appoint wow fadeInUp" data-wow-delay=".6s">
                                 <input
                                    type="text"
                                    name="location"
                                    placeholder="Location in Chennai"
                                    value={formData.location}
                                    onChange={handleChange}
                                 />
                                 {errors.location && <p className="text-danger mb-0 mt-2">{errors.location}</p>}
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-2 col-lg-3 custom-pad-20">
                        <div className="tp-appoint text-end wow fadeInUp" data-wow-delay=".7s">
                           <button type="submit" className="theme-btn text-white" disabled={isSubmitting}>
                              <i className="flaticon-enter"></i> {isSubmitting ? 'Sending...' : 'Request Call Back'}
                           </button>
                        </div>
                     </div>
                  </div>
                  {statusMessage && (
                     <div className="row mt-20">
                        <div className="col-12">
                           <p className={statusType === 'success' ? 'mb-0' : 'text-danger mb-0'} style={statusType === 'success' ? { color: '#23482b' } : undefined}>
                              {statusMessage}
                           </p>
                        </div>
                     </div>
                  )}
               </form>
            </div>
         </div>
      </section>
   );
};

export default CtaArea;
