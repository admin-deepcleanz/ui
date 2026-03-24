import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../shared/FadeIn/FadeIn';

const trustPoints = ['Punctual local team', 'Pay after service'];

const HomeHeroSingleSlide = () => {
   return (
      <>
         <div className="tp-single-slider tp-slider-height d-flex align-items-center swiper-slide" data-swiper-autoplay="5000">
            <div className="slide-bg" data-background="assets/img/slider/slider-bg-1.jpg"></div>
            <div className="slider-img">
               <img src="assets/img/slider/slider-img-1.jpg" className="img-fluid" alt="img not found" />
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="tp-slider-wrapper mt-60 position-relative premium-home__hero-content">
                        <div className="tp-slider z-index">
                           <FadeIn left block>
                              <h5 className="tp-slider-subtitle section__sm__title common-yellow-shape w-80 mb-25">
                                 Professional home cleaning in Chennai
                              </h5>
                           </FadeIn>

                           <h1 className="tp-slider-title premium-home__hero-title">
                              <FadeIn right block>Professional</FadeIn>
                              <FadeIn top block>Deep Cleaning</FadeIn>
                              <FadeIn top block>That Feels Reliable</FadeIn>
                           </h1>

                           <FadeIn top block>
                              <p className="premium-home__hero-copy">
                                 Deep cleaning for homes, kitchens, bathrooms, sofas, and carpets with punctual teams
                                 and dependable service across Chennai.
                              </p>
                           </FadeIn>

                           <FadeIn top block>
                              <div className="premium-home__hero-points">
                                 {trustPoints.map((point) => (
                                    <span key={point} className="premium-home__hero-point">
                                       {point}
                                    </span>
                                 ))}
                              </div>
                           </FadeIn>

                           <div className="tp-slider-btn premium-home__hero-actions">
                              <FadeIn bottom>
                                 <Link to="/appointment" className="theme-btn text-white">
                                    <i className="flaticon-enter"></i> Book Free Consultation
                                 </Link>
                              </FadeIn>
                              <FadeIn bottom>
                                 <a href="tel:+919363609470" className="yellow-btn premium-home__secondary-action">
                                    <i className="flaticon-enter"></i> Call Us
                                 </a>
                              </FadeIn>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeHeroSingleSlide;
