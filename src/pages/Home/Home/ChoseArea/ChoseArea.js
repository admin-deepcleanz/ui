import React from 'react';

const steps = [
   {
      title: 'Share Your Requirement',
      content: 'Tell us the cleaning service you need and your location in Chennai.',
   },
   {
      title: 'Get a Quick Confirmation',
      content: 'We call you back, understand the scope, and confirm the right service for your home.',
   },
   {
      title: 'We Arrive and Clean',
      content: 'Our team arrives on time, completes the cleaning properly, and you pay after the service.',
   },
];

const ChoseArea = () => {
   return (
      <>
         <section className="tp-choose-area position-relative pt-60 pb-60 premium-home__process">
            <div className="container">
               <div className="row justify-content-between align-items-center premium-home__process-layout">
                  <div className="col-xl-5 col-lg-6">
                     <div className="tp-choose-img mb-30 z-index wow fadeInUp premium-home__process-media" data-wow-delay=".3s">
                        <img src="assets/img/about/choose-img-1.jpg" loading="lazy" alt="img not found" />
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                     <div className="tp-choose z-index">
                        <div className="tp-section-title-wrapper mb-40 wow fadeInUp" data-wow-delay=".2s">
                           <span className="premium-home__eyebrow">How Booking Works</span>
                           <h2 className="tp-section-title">Simple Booking, Clear Service</h2>
                           <p className="mb-0 premium-home__process-copy">
                              A short 3-step process so you can book the right cleaning service without confusion.
                           </p>
                        </div>
                        <div className="row">
                           {steps.map((step, index) => (
                              <div className="col-12" key={step.title}>
                                 <div
                                    className="white-bg mb-20 wow fadeInUp premium-home__process-step"
                                    data-wow-delay={`${0.3 + index * 0.15}s`}
                                 >
                                    <div className="d-flex align-items-start premium-home__process-step-inner">
                                       <div className="premium-home__process-index">
                                          {index + 1}
                                       </div>
                                       <div className="premium-home__process-step-copy">
                                          <h4 className="mb-10">{step.title}</h4>
                                          <p className="mb-0">{step.content}</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ChoseArea;
