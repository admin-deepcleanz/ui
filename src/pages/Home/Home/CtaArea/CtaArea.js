import React, { useState } from 'react';

const CtaArea = () => {
   const [formData, setFormData] = useState({
      name: '',
      phone: '',
      service: '',
      location: ''
   });

   const [errors, setErrors] = useState({});

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const validateForm = () => {
      const newErrors = {};
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.phone) newErrors.phone = 'Phone number is required';
      if (!formData.service) newErrors.service = 'Please select a service';
      if (!formData.location) newErrors.location = 'Location is required';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validateForm()) return;

      await fetch('https://hook.eu2.make.com/fbwndbexchu5i2win4z6gpnj1tvw33ob', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(formData)
      }).then(
         (response) => {
            alert('Mail sent successfully!');
            setFormData({ name: '', phone: '', service: '', location: '' });
         },
         (error) => {
            alert('Failed to send mail. Try again.');
         }
      );
   };

   return (
      <section className="tp-appoint-cta-area yellow-dark-bg pt-80 pb-65">
         <div className="container">
            <form onSubmit={handleSubmit}>
               <div className="row align-items-center custom-mar-20">
                  <div className="col-xl-2 col-lg-12 custom-pad-20">
                     <div className="tp-appoint wow fadeInUp" data-wow-delay=".1s">
                        <h4 className="tp-appoint-title">Online <br /> Appointment</h4>
                     </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 custom-pad-20">
                     <div className="row align-items-center custom-mar-20">
                        <div className="col-lg-3 custom-pad-20">
                           <div className="tp-appoint wow fadeInUp" data-wow-delay=".3s">
                              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
                              {errors.name && <p className="text-danger">{errors.name}</p>}
                           </div>
                        </div>
                        <div className="col-lg-3 custom-pad-20">
                           <div className="tp-appoint wow fadeInUp" data-wow-delay=".5s">
                              <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                              {errors.phone && <p className="text-danger">{errors.phone}</p>}
                           </div>
                        </div>
                        <div className="col-lg-3 custom-pad-20">
                           <div className="tp-appoint select-field-arrow wow fadeInUp" data-wow-delay=".7s">
                              <select name="service" value={formData.service} onChange={handleChange}>
                                 <option value="">Service Name</option>
                                 <option value="Full House Deep Cleaning">Full House Deep Cleaning</option>
                                 <option value="Kitchen Cleaning">Kitchen Cleaning</option>
                                 <option value="Bedroom Cleaning">Bedroom Cleaning</option>
                                 <option value="Bathroom Cleaning">Bathroom Cleaning</option>
                                 <option value="Sofa Cleaning">Sofa Cleaning</option>
                                 <option value="Carpet Cleaning">Carpet Cleaning</option>
                              </select>
                              {errors.service && <p className="text-danger">{errors.service}</p>}
                           </div>
                        </div>
                        <div className="col-lg-3 custom-pad-20">
                           <div className="tp-appoint wow fadeInUp" data-wow-delay=".5s">
                              <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
                              {errors.location && <p className="text-danger">{errors.location}</p>}
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-1 col-lg-3 custom-pad-20">
                     <div className="tp-appoint text-end wow fadeInUp" data-wow-delay=".9s">
                        <button type="submit" className="theme-btn text-white">
                           <i className="flaticon-enter"></i> Submit Now
                        </button>
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </section>
   );
};

export default CtaArea;
