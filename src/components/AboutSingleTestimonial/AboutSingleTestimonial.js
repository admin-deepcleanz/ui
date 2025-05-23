import React from 'react';

const AboutSingleTestimonial = ({ testi_img_num, name, title, review }) => {
   return (
      <>
         {name && review &&
            <div className="tp-testimonial-single swiper-slide z-index">
               <p className="mb-45">{review}</p>
               <div className="tp-testimonial-author">
                  {testi_img_num &&
                     <div className="tp-testimonial-author-img">
                        <img src={`assets/img/testimonial/testimonial-author-${testi_img_num}.jpg`} className="img-fluid" alt="img not found" />
                     </div>
                  }
                  <div className="tp-testimonial-author-text">
                     <h4 className="tp-testimonial-author-text-name">{name}</h4>
                     <span className="tp-testimonial-author-text-designation">{title}</span>
                  </div>
               </div>
               <div className="tp-testimonial-qoute">
                  <img src="assets/img/icon/test-qoute.png" alt="img not found" />
               </div>
            </div>
         }
         { testi_img_num &&
            // Image alone
            <div className="tp-testimonial-single swiper-slide z-index">
               <div className="tp-testimonial-author">
                  < div>
                     <img src={`assets/img/review/${testi_img_num}.png`} className="img-fluid" alt="img not found" />
                  </div>
               </div>
            </div>
         }
      </>
   );
};

export default AboutSingleTestimonial;