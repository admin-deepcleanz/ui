import React from 'react';
import { useRef } from "react";
import HomeSinglePrice from '../../../../components/HomeSinglePrice/HomeSinglePrice';

const PricingArea = () => {
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
         <section className="tp-pricing-area pt-120 pb-20">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-md-8">
                     <div className="section-title-wrapper mb-55 wow fadeInUp" data-wow-delay=".2s">
                        <h5 className="tp-section-subtitle common-yellow-shape section__sm__title mb-20">Our Affordable Package</h5>
                        <h2 className="tp-section-title">Special Pricing Package</h2>
                     </div>
                  </div>
                  {/* <div className="col-md-4">
                     <nav className="text-start text-md-end wow fadeInUp" data-wow-delay=".4s">
                        <div className="nav tp-pricing-tabs" id="nav-tab" role="tablist">
                           <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Monthly</button>
                           <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Yearly</button>
                        </div>
                     </nav>
                  </div> */}
               </div>
               {/* <div className="row">
                  <div className="col-12">
                     <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                           <div className="row">

                              <HomeSinglePrice icon_name="mop" title="1 BHK Unfurnished House" count="1"  price="2499" />

                              <HomeSinglePrice icon_name="cleaning-1" title="2 BHK Unfurnished House" count="2" price="3799" />

                              <HomeSinglePrice icon_name="vacuum-cleaner-1" title="3 BHK Unfurnished House" count="3" price="4499" />

                              <HomeSinglePrice icon_name="vacuum-cleaner-1" title="3 BHK Unfurnished House" count="3" price="4499" />

                           </div>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                           <div className="row">

                              <HomeSinglePrice icon_name="mop" title="Residential" price="55.00" />

                              <HomeSinglePrice icon_name="cleaning-1" title="Buildings" price="75.00" />

                              <HomeSinglePrice icon_name="vacuum-cleaner-1" title="Commercial" price="95.00" />

                           </div>
                        </div>
                     </div>
                  </div>
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
                     <HomeSinglePrice
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
                     <HomeSinglePrice
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
                     <HomeSinglePrice
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
                     <HomeSinglePrice
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
                     <HomeSinglePrice
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
                     <HomeSinglePrice
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

export default PricingArea;