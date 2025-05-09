import React from 'react';
import HomeServiceItem from '../../../../components/HomeServiceItem/HomeServiceItem';

const ServiceArea = () => {
   return (
      <>
         <section className="tp-services-area theme-dark-bg">
            <div className="tp-custom-container">
               <div className="tp-services-bg grey-bg pt-120 pb-90 z-index">
                  <div className="container">
                     <div className="row justify-content-center">
                        <div className="col-lg-8">
                           <div className="tp-section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-delay=".1s">
                              <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-25">Our Popular Services</h5>
                              <h2 className="tp-section-title">Our Success Cleaning <br />Up your Mess</h2>
                           </div>
                        </div>
                     </div>
                     <div className="row">

                        <HomeServiceItem icon_name="house-cleaning" title="Full House Cleaning" content="Thorough cleaning of every corner to give your home a fresh feel." />

                        <HomeServiceItem icon_name="pot" title="Kitchen Cleaning" content="Deep cleaning for a spotless and hygienic kitchen." />

                        <HomeServiceItem icon_name="vacuum-cleaner" title="Bedroom Cleaning" content="Refresh your bedroom with a detailed clean and tidy space." />

                        <HomeServiceItem icon_name="desk" title="Bathroom Cleaning" content="Get a sparkling clean and sanitized bathroom." />

                        <HomeServiceItem icon_name="cleaning" title="Sofa Cleaning" content="Keep your sofas looking brand new with expert cleaning." />

                        <HomeServiceItem icon_name="vacuum-cleaner" title="Carpet Cleaning" content="Revive your carpets with a professional clean." />

                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ServiceArea;