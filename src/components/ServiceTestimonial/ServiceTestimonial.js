import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ServiceTestimonial = ({ testi_img_num, title, name, review }) => {
   return (
      <>
         <div className="tp-testimonial-two position-relative swiper-slide mb-30">
            <div className="tp-testimonial-two-author mb-20">
               {testi_img_num &&
                  <div className="tp-testimonial-two-author-img">
                     <img src={`assets/img/testimonial/author-${testi_img_num}.png`} className="img-fluid" alt="img not found" />
                  </div>
               }
               <div className="tp-testimonial-two-author-text">
                  <span>{title}</span>
                  <h4 className="tp-testimonial-two-name">{name}</h4>
               </div>
            </div>
            <p>{review}</p>
            <div className="tp-testimonial-two-qoute">
               <i ><FaQuoteLeft /></i>
            </div>
         </div>
      </>
   );
};

export default ServiceTestimonial;