import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaBath, FaUtensils, FaBed, FaHome } from 'react-icons/fa';

const plans = [
   {
      icon: <FaBath />,
      title: 'Bathroom Cleaning',
      price: '599',
      features: [
         'Machine deep cleaning',
         'Toilet bowl cleaning',
         'Sink and mirror cleaning',
         'Floor mopping',
      ],
   },
   {
      icon: <FaUtensils />,
      title: 'Kitchen Cleaning',
      price: '1,299',
      features: [
         'Full kitchen deep cleaning',
         'Sink and countertop cleaning',
         'Exhaust fan cleaning',
         'Floor mopping',
      ],
   },
   {
      icon: <FaBed />,
      title: 'Bedroom Cleaning',
      price: '1,299',
      features: [
         'Full bedroom deep cleaning',
         'Dry vacuuming',
         'Dusting of furniture',
         'Window and curtain cleaning',
         'Floor mopping',
      ],
   },
   {
      icon: <FaHome />,
      title: '1 BHK Full House',
      price: '2,499',
      features: [
         '1 bedroom deep cleaning',
         '1 bathroom machine cleaning',
         'Full kitchen deep cleaning',
         'Floor mopping throughout',
      ],
   },
   {
      icon: <FaHome />,
      title: '2 BHK Full House',
      price: '3,799',
      featured: true,
      badge: 'Most Popular',
      features: [
         '2 bedroom deep cleaning',
         '2 bathroom machine cleaning',
         'Full kitchen deep cleaning',
         'Floor mopping throughout',
      ],
   },
   {
      icon: <FaHome />,
      title: '3 BHK Full House',
      price: '4,799',
      features: [
         '3 bedroom deep cleaning',
         '3 bathroom machine cleaning',
         'Full kitchen deep cleaning',
         'Floor mopping throughout',
      ],
   },
];

const PricingAffordablePackage = () => {
   return (
      <section className="pricing">
         <div className="container">
            <div className="text-center">
               <span className="pricing__eyebrow wow fadeInUp" data-wow-delay=".1s">Transparent Pricing</span>
               <h2 className="pricing__heading wow fadeInUp" data-wow-delay=".15s">
                  Simple, Honest Rates
               </h2>
               <p className="pricing__subheading wow fadeInUp" data-wow-delay=".2s">
                  No hidden charges. Prices shown are starting rates — final cost confirmed during our callback based on your home's condition.
               </p>
            </div>

            <div className="pricing__grid">
               {plans.map((plan, index) => (
                  <div
                     className={`pricing__card wow fadeInUp${plan.featured ? ' pricing__card--featured' : ''}`}
                     data-wow-delay={`${0.1 + (index % 3) * 0.1}s`}
                     key={plan.title}
                  >
                     {plan.badge && <span className="pricing__badge">{plan.badge}</span>}

                     <div className="pricing__icon">{plan.icon}</div>
                     <h3 className="pricing__card-title">{plan.title}</h3>

                     <div className="pricing__price-row">
                        <span className="pricing__currency">₹</span>
                        <span className="pricing__amount">{plan.price}</span>
                        <span className="pricing__starting">onwards</span>
                     </div>

                     <div className="pricing__divider" />

                     <ul className="pricing__features">
                        {plan.features.map((f) => (
                           <li key={f}>
                              <FaCheck className="pricing__check" />
                              {f}
                           </li>
                        ))}
                     </ul>

                     <Link
                        to="/appointment"
                        className={`pricing__cta pricing__cta--${plan.featured ? 'featured' : 'default'}`}
                     >
                        Book This Service
                     </Link>
                  </div>
               ))}
            </div>

            <p className="pricing__note wow fadeInUp" data-wow-delay=".2s">
               <strong>Pay only after the service is done.</strong> No upfront payment required. Call us at{' '}
               <a href="tel:+919363609470" style={{ color: '#1a6360', fontWeight: 600 }}>+91 93636 09470</a>{' '}
               for custom requirements.
            </p>
         </div>
      </section>
   );
};

export default PricingAffordablePackage;
