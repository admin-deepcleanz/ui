import React from 'react';
import { Link } from 'react-router-dom';
import HomeServiceItem from '../../../../components/HomeServiceItem/HomeServiceItem';

const services = [
   {
      icon_name: 'house-cleaning',
      title: 'Full House Cleaning',
      content: 'Deep cleaning for living rooms, bedrooms, bathrooms, kitchen surfaces, and floors in one complete service.',
   },
   {
      icon_name: 'pot',
      title: 'Kitchen Cleaning',
      content: 'Degreasing and deep cleaning for counters, tiles, sink area, cabinets, and high-touch kitchen surfaces.',
   },
   {
      icon_name: 'desk',
      title: 'Bathroom Cleaning',
      content: 'Machine-assisted cleaning for tiles, toilet, fittings, sink, mirror, and floor to restore freshness.',
   },
   {
      icon_name: 'vacuum-cleaner',
      title: 'Bedroom Cleaning',
      content: 'Dust removal, vacuuming, furniture wipe-down, and floor cleaning for a more comfortable bedroom.',
   },
   {
      icon_name: 'cleaning',
      title: 'Sofa Cleaning',
      content: 'Fabric-safe sofa cleaning that lifts dust, stains, and odour buildup while improving appearance.',
   },
   {
      icon_name: 'vacuum-cleaner',
      title: 'Carpet Cleaning',
      content: 'Targeted carpet cleaning to remove trapped dirt, freshen fibres, and improve the overall feel of the room.',
   },
   {
      icon_name: 'mop',
      title: 'Move-In / Move-Out Cleaning',
      content: 'Detailed cleaning for empty homes before shifting in or handing over, with focus on corners and buildup.',
   },
   {
      icon_name: 'cleaning-1',
      title: 'Post-Renovation Cleaning',
      content: 'Dust, residue, and surface cleanup after painting or renovation work so the home is ready to use.',
   },
];

const ServiceArea = () => {
   return (
      <>
         <section className="tp-services-area premium-home__services">
            <div className="tp-custom-container">
               <div className="tp-services-bg pt-80 pb-50 z-index">
                  <div className="container">
                     <div className="row justify-content-center">
                        <div className="col-lg-9">
                           <div className="tp-section-title-wrapper text-center mb-45 wow fadeInUp" data-wow-delay=".1s">
                              <span className="premium-home__eyebrow">Our Most Requested Services</span>
                              <h2 className="tp-section-title">Deep Cleaning for the Spaces You Use Every Day</h2>
                              <p className="mb-0">
                                 From kitchens and bathrooms to full-home and move-in cleaning, we help Chennai homes
                                 feel fresh, hygienic, and ready to use.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="row g-4 premium-home__services-grid">
                        {services.map((service, index) => (
                           <HomeServiceItem
                              key={service.title}
                              className={index > 3 ? 'premium-home__service-card--extra' : ''}
                              icon_name={service.icon_name}
                              title={service.title}
                              content={service.content}
                           />
                        ))}
                     </div>
                     <div className="text-center mt-35">
                        <Link to="/services" className="theme-btn premium-home__services-cta">
                           <i className="flaticon-enter"></i> Explore All Services
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ServiceArea;
