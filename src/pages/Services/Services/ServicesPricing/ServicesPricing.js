import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ServicesPricing = () => {
   return (
      <section className="services-pricing-cta">
         <div className="container">
            <div className="services-pricing-cta__inner">
               <div>
                  <h3 className="services-pricing-cta__title">Transparent, Honest Pricing</h3>
                  <p className="services-pricing-cta__sub">
                     Bathroom from ₹599 · Kitchen from ₹1,299 · Full house from ₹2,499. No hidden charges — pay only after the job is done.
                  </p>
               </div>
               <Link to="/pricing" className="services-pricing-cta__btn">
                  View Full Pricing <FaArrowRight />
               </Link>
            </div>
         </div>
      </section>
   );
};

export default ServicesPricing;
