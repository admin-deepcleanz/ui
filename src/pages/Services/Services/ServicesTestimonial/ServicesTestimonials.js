import React, { useState } from 'react';
import ServiceTestimonial from '../../../../components/ServiceTestimonial/ServiceTestimonial';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css/pagination';
import emailjs from 'emailjs-com';

SwiperCore.use([Navigation, Pagination]);

const ServicesTestimonials = () => {
   const [formData, setFormData] = useState({
      name: '',
      phone: '',
      service: '',
      message: ''
   });

   const [errors, setErrors] = useState({});

   const validate = () => {
      const newErrors = {};
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Valid 10-digit phone required';
      if (!formData.service) newErrors.service = 'Service is required';
      if (!formData.message.trim()) newErrors.message = 'Message is required';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!validate()) return;
      emailjs.send('service_rhxf3t4', 'template_n15hlwv', formData, 'hiMSFqxH2h7sxvcAl')
         .then(() => {
            alert('Your estimate request has been sent!');
            setFormData({ name: '', phone: '', service: '', message: '' });
         })
         .catch(() => {
            alert('Something went wrong. Please try again.');
         });
   };

   return (
      <>
         <section className="tp-testimonial-area-two tp-testimonial-area-four position-relative">
            <div className="tp-testimonial-area-two-shape"></div>
            <div className="container position-relative">
               <div className="tp-testimonial-title-wrapper pt-120">
                  <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">Our Popular Services</h5>
                  <h2 className="tp-section-title heading-color-black">Customer Says About <br />Our Service</h2>
               </div>
            </div>
            <div className="tp-testimonial-divide">
               <div className="tp-testimonial-two-wrapper z-index mb-0">
                  <div className="tp-testimonial-two-active swiper-container common-dots pb-40">
                     <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        style={{ paddingBottom: '80px' }}
                        className='swiper-wrapper'
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 6000 }}
                        breakpoints={{
                           550: { slidesPerView: 1 },
                           768: { slidesPerView: 1 },
                           992: { slidesPerView: 2 },
                           1200: { slidesPerView: 3 },
                        }}
                        navigation={{ nextEl: '.service-button-next', prevEl: '.service-button-prev' }}
                     >
                        <SwiperSlide>
                           <ServiceTestimonial name="Madhan R" review="Super smooth process! I just sent a video, got a fair quote, and the cleaning team arrived right on time. Highly professional!" />
                        </SwiperSlide>
                        <SwiperSlide>
                           <ServiceTestimonial name="Rajeswari" review="They don’t overpromise – just honest service and great results. My home feels brand new after their deep clean." />
                        </SwiperSlide>
                        <SwiperSlide>
                           <ServiceTestimonial name="Alex" review="Love how easy it was. No phone calls, no confusion. Just sent a WhatsApp video and everything else was handled perfectly." />
                        </SwiperSlide>
                        <SwiperSlide>
                           <ServiceTestimonial name="Ram" review="The flexible pricing based on my home’s condition really stood out. Worth every rupee. Will book again!" />
                        </SwiperSlide>
                     </Swiper>
                     <div className="swiper-pagination-testimonial slide-dots"></div>
                  </div>
               </div>
               <div className="tp-testimonial-two-form tp-testimonial-two-form-four pt-120 ser_form_bg z-index">
                  <form onSubmit={handleSubmit} className="text-start tp-testimonial-two-form-wrapper">
                     <h3 className="tp-testimonial-form-title"><span>Free</span> Estimate</h3>
                     <p className="mb-30">Free know your project estimate and recent offer</p>
                     <div className="input-field mb-15">
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" />
                        {errors.name && <small style={{ color: 'red' }}>{errors.name}</small>}
                     </div>
                     <div className="input-field mb-15">
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
                        {errors.phone && <small style={{ color: 'red' }}>{errors.phone}</small>}
                     </div>
                     <div className="input-field select-field-arrow mb-15">
                        <select name="service" value={formData.service} onChange={handleChange}>
                           <option value="">Choose Service</option>
                           <option value="Full House Deep Cleaning">Full House Deep Cleaning</option>
                           <option value="Kitchen Cleaning">Kitchen Cleaning</option>
                           <option value="Bedroom Cleaning">Bedroom Cleaning</option>
                           <option value="Bathroom Cleaning">Bathroom Cleaning</option>
                           <option value="Sofa Cleaning">Sofa Cleaning</option>
                           <option value="Carpet Cleaning">Carpet Cleaning</option>
                        </select>
                        {errors.service && <small style={{ color: 'red' }}>{errors.service}</small>}
                     </div>
                     <div className="input-field mb-15">
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write Message"></textarea>
                        {errors.message && <small style={{ color: 'red' }}>{errors.message}</small>}
                     </div>
                     <div className="input-field">
                        <button type="submit" className="yellow-btn">Free Estimate +</button>
                     </div>
                  </form>
               </div>
            </div>
         </section>
      </>
   );
};

export default ServicesTestimonials;
