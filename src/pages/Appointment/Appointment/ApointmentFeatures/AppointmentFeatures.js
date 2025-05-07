import React from 'react';
import SingleAppointmentFeature from '../../../../components/SingleAppointmentFeature/SingleAppointmentFeature';

const AppointmentFeatures = () => {
   return (
      <>
         <section className="tp-feature-area-three pt-120 pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-delay=".2s">
                        <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">Our Working Process</h5>
                        <h2 className="tp-section-title mb-25 heading-color-black">Excellent Techniques For <br/>Effective Cleaning</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                 
                  <SingleAppointmentFeature icon="booking" title="1. Share Video/Photo" content="Send us a quick snap or video of the area you need cleaned." />
                  <SingleAppointmentFeature icon="delivery-box" title="2. Get a Custom Quote" content="We’ll review the condition and send you a price based on the visuals—no fixed rates." />
                  <SingleAppointmentFeature icon="boy" title="3. Approve & Schedule" content="Once you're happy with the quote, pick a convenient time slot." />
                  <SingleAppointmentFeature icon="cleaning" title="4. Confirm Address" content="Share your exact location and any entry/access instructions." />

               </div>
            </div>
         </section>
      </>
   );
};

export default AppointmentFeatures;