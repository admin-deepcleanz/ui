import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../shared/FadeIn/FadeIn';

const HomeHeroSingleSlide = ({ setOpen }) => {
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
                     <div className="tp-slider-wrapper mt-60 position-relative">
                        <div className="tp-slider z-index">
                           <FadeIn left block>
                              <h5 className="tp-slider-subtitle section__sm__title common-yellow-shape w-80 mb-35">
                                 Fast and efficient service
                              </h5>
                           </FadeIn>

                           <h1 className="tp-slider-title mb-45">
                              <FadeIn right>Professional</FadeIn>
                              <FadeIn top>Deep Cleaning in</FadeIn>
                              <FadeIn top>Chennai</FadeIn>
                              <FadeIn top>20% Off your First Booking</FadeIn>
                           </h1>

                           <div className="tp-slider-btn">
                              <FadeIn bottom>
                                 <Link to="/appointment" className="theme-btn text-white">
                                    <i className="flaticon-enter"></i> Book Today, Pay After Service
                                 </Link>
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
