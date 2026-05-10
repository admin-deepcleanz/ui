import React from 'react';
import { Link } from 'react-router-dom';

const AboutCta = () => {
   return (
      <section className="about-cta">
         <div className="container">
            <div className="about-cta__card wow fadeInUp" data-wow-delay=".2s">
               <div>
                  <h2 className="about-cta__title">Ready for a Cleaner Home?</h2>
                  <p className="about-cta__copy">
                     Book in under 2 minutes. We call back the same day. You pay only after the work is done.
                  </p>
               </div>
               <div className="about-cta__actions">
                  <Link to="/appointment" className="theme-btn text-white">
                     <i className="flaticon-enter"></i> Book Appointment
                  </Link>
                  <a href="tel:+919363609470" className="yellow-btn">
                     <i className="flaticon-enter"></i> Call Us Now
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutCta;
