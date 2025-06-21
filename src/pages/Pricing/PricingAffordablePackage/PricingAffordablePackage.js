import React from 'react';
import { useRef } from "react";
import AboutSinglePrice from '../../../components/AboutSinglePrice/AboutSinglePrice';


const PricingAffordablePackage = () => {
      const scrollRef = useRef(null);
   
      const scroll = (direction) => {
         const container = scrollRef.current;
         const scrollAmount = 320; // width of a card + margin
   
         if (container) {
            container.scrollTo({
               left: direction === 'left' ? container.scrollLeft - scrollAmount : container.scrollLeft + scrollAmount,
               behavior: 'smooth',
            });
         }
      };
   return (
      <>
         <section className="tp-pricing-area pt-120 pb-90">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-md-12">
                     <div className="section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-delay=".2s">
                        <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">Our Affordable Package</h5>
                        <h2 className="tp-section-title heading-color-black">Special Pricing Package</h2>
                     </div>
                  </div>
               </div>
               {/* <div className="row">

                  <AboutSinglePrice icon_name="mop" title="1 BHK Unfurnished House" count="1" price="2499" />

                  <AboutSinglePrice icon_name="cleaning-1" title="2 BHK Unfurnished House" count="2" price="3799" />

                  <AboutSinglePrice icon_name="vacuum-cleaner-1" title="3 BHK Unfurnished House" count="3" price="4799" />

               </div> */}
               <div className="position-relative my-5 px-3">
                  {/* Arrows */}
                  <button
                     onClick={() => scroll('left')}
                     className="position-absolute top-50 start-0 translate-middle-y bg-white border shadow p-2 rounded-circle z-3"
                     style={{ zIndex: 10 }}
                  >
                     &#8592;
                  </button>
                  <button
                     onClick={() => scroll('right')}
                     className="position-absolute top-50 end-0 translate-middle-y bg-white border shadow p-2 rounded-circle z-3"
                     style={{ zIndex: 10 }}
                  >
                     &#8594;
                  </button>

                  {/* Scrollable row */}
                  <div
                     ref={scrollRef}
                     className="d-flex overflow-auto px-5 py-3"
                     style={{ scrollBehavior: 'smooth', gap: '1rem' }}
                  >
                     <AboutSinglePrice
                        icon_name="mop"
                        title="Bathroom Cleaning"
                        price="599"
                        points={[
                           "Bathroom Machine Deep Cleaning",
                           "Toilet Bowl Cleaning",
                           "Sink and Mirror Cleaning",
                           "Floor Moping"
                        ]}
                     />
                     <AboutSinglePrice
                        icon_name="vacuum-cleaner-1"
                        title="Kitchen Cleaning"
                        price="1299"
                        points={[
                           "Kitchen Full Deep Cleaning",
                           "Sink and Countertop Cleaning",
                           "Exhaust Fan Cleaning",
                           "Floor Moping"
                        ]}
                     />
                     <AboutSinglePrice
                        icon_name="cleaning-1"
                        title="Bedroom Cleaning"
                        price="1299"
                        points={[
                           "Bedroom Full Deep Cleaning",
                           "Dry Vacuuming",
                           "Dusting of Furniture",
                           "Window and Curtain Cleaning",
                           "Floor Moping"
                        ]}
                     />
                     <AboutSinglePrice
                        icon_name="mop"
                        title="1 BHK Unfurnished House"
                        price="2499"
                        points={[
                           "1 Bedroom Cleaning",
                           "1 Bathroom Machine Deep Cleaning",
                           "Kitchen Full Deep Cleaning",
                           "Floor Moping"
                        ]}
                     />
                     <AboutSinglePrice
                        icon_name="cleaning-1"
                        title="2 BHK Unfurnished House"
                        price="3799"
                        points={[
                           "2 Bedroom Cleaning",
                           "2 Bathroom Machine Deep Cleaning",
                           "Kitchen Full Deep Cleaning",
                           "Floor Moping"
                        ]}
                     />
                     <AboutSinglePrice
                        icon_name="vacuum-cleaner-1"
                        title="3 BHK Unfurnished House"
                        price="4799"
                        points={[
                           "3 Bedroom Cleaning",
                           "3 Bathroom Machine Deep Cleaning",
                           "Kitchen Full Deep Cleaning",
                           "Floor Moping"
                        ]}
                     />
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default PricingAffordablePackage;