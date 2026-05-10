import React from 'react';

const steps = [
   {
      number: '01',
      title: 'Share Your Requirement',
      copy: 'Tell us the service you need and your location in Chennai — through the form, a call, or WhatsApp.',
   },
   {
      number: '02',
      title: 'We Call Back and Confirm',
      copy: 'We reach out within the same day, understand the scope, and lock in the right service and time for you.',
   },
   {
      number: '03',
      title: 'We Arrive — You Pay After',
      copy: 'Our trained team arrives on time, completes the cleaning thoroughly, and you pay only after the work is done.',
   },
];

const AboutProcess = () => {
   return (
      <section className="about-process pt-80 pb-80">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-7 text-center">
                  <div className="wow fadeInUp" data-wow-delay=".1s">
                     <span className="premium-home__eyebrow">How It Works</span>
                     <h2 className="tp-section-title heading-color-black mt-3 mb-15">
                        Three Steps to a Cleaner Home
                     </h2>
                     <p className="about-process__intro mb-50">
                        No complicated booking. No upfront payment. Just tell us what you need and we handle the rest.
                     </p>
                  </div>
               </div>
            </div>
            <div className="row g-4">
               {steps.map((step, index) => (
                  <div className="col-lg-4" key={step.number}>
                     <div
                        className="about-process__card wow fadeInUp"
                        data-wow-delay={`${0.2 + index * 0.15}s`}
                     >
                        <div className="about-process__number">{step.number}</div>
                        <h4 className="about-process__title">{step.title}</h4>
                        <p className="about-process__copy">{step.copy}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default AboutProcess;
