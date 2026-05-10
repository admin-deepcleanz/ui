import React, { useEffect } from 'react';
import { FaArrowRight, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const categories = [
   {
      id: 'full-house',
      title: 'Full House Deep Cleaning',
      image: 'assets/img/service/full-house.jpg',
      doList: [
         'Complete cleaning of living rooms, bedrooms, kitchens, and bathrooms',
         'Dusting of furniture, fans, and light fixtures',
         'Window and grill cleaning (interior)',
         'Mopping and vacuuming of floors',
         'Cleaning exterior surfaces of appliances',
      ],
      dontList: [
         'Interior appliance cleaning (e.g., inside ovens, fridges)',
         'Painting or wall repair',
         'Plumbing or electrical repairs',
      ],
   },
   {
      id: 'kitchen',
      title: 'Kitchen Cleaning',
      image: 'assets/img/service/kitchen.jpg',
      amount: '₹1,299',
      doList: [
         'Wiping countertops and tile backsplash',
         'Cleaning stove tops and chimney exterior',
         'Sink scrubbing and disinfecting',
         'Cleaning exterior of cabinets',
         'Floor mopping and degreasing',
      ],
      dontList: [
         'Cleaning inside cabinets (unless pre-approved)',
         'Handling broken pipes or leakage',
         'Chimney dismantling or internal deep cleaning',
      ],
   },
   {
      id: 'bathroom',
      title: 'Bathroom Cleaning',
      image: 'assets/img/service/bathroom.png',
      amount: '₹599',
      doList: [
         'Cleaning WC, wash basins, and tiles',
         'Disinfecting taps, showers, and faucets',
         'Mirror and exhaust fan cleaning',
         'Removal of stains and floor scrubbing',
      ],
      dontList: [
         'Plumbing repair or unclogging drains',
         'Broken tile/grout restoration',
         'Replacement of fittings or hardware',
      ],
   },
   {
      id: 'bedroom',
      title: 'Bedroom Cleaning',
      image: 'assets/img/service/bedroom.jpg',
      amount: '₹1,299',
      doList: [
         'Dusting and wiping surfaces, furniture, and decor',
         'Window glass and sill cleaning (interior)',
         'Mirror polishing and cobweb removal',
         'Floor vacuuming and mopping',
      ],
      dontList: [
         'Interior wardrobe cleaning (unless pre-requested)',
         'Moving heavy or delicate furniture without assistance',
         'Electrical fixture repair',
      ],
   },
   {
      id: 'sofa',
      title: 'Sofa Cleaning',
      image: 'assets/img/service/sofa.jpg',
      amount: '₹250 per seat',
      doList: [
         'Dry vacuuming',
         'Shampooing (fabric sofas)',
         'Hand scrub cleaning',
      ],
      dontList: [
         'Repairing sofa structure or springs',
         'Deep leather treatment (unless pre-approved)',
         'Guarantee of 100% stain removal',
         'Machine cleaning (risk of fabric damage)',
      ],
   },
   {
      id: 'mattress',
      title: 'Mattress Cleaning',
      image: 'assets/img/service/mattress.jpg',
      amount: '₹799',
      doList: [
         'Dry vacuuming',
         'Shampooing',
         'Hand scrub cleaning',
      ],
      dontList: [
         'Washing or soaking the mattress',
         'Instant drying (drying time needed post-cleaning)',
         'Treating mold or deep stains that have penetrated layers',
      ],
   },
   {
      id: 'commercial',
      title: 'Commercial Cleaning',
      image: 'assets/img/service/commercial.jpg',
      doList: [
         'Cleaning of office desks, chairs, and common surfaces',
         'Sanitization of restrooms and break areas',
         'Mopping and vacuuming of floors',
         'Glass and window partition cleaning',
      ],
      dontList: [
         'Industrial machinery cleaning',
         'High-rise facade glass cleaning',
         'Repairs or hazardous waste removal',
      ],
   },
];

const ServicesDetailsFaq = () => {
   const scrollToSection = (id) => {
      const section = document.getElementById(id);
      if (section) {
         const y = section.getBoundingClientRect().top + window.pageYOffset - 90;
         window.scrollTo({ top: y, behavior: 'smooth' });
      }
   };

   useEffect(() => {
      if (window.location.hash) {
         const id = window.location.hash.replace('#', '');
         setTimeout(() => scrollToSection(id), 100);
      }
   }, []);

   return (
      <section className="svc-details pt-80 pb-80">
         <div className="container">
            <div className="row g-4">

               {/* Sidebar */}
               <div className="col-xl-3 col-lg-4">
                  <div className="svc-details__sidebar">
                     <h4 className="svc-details__sidebar-title">Our Services</h4>
                     <div className="svc-details__sidebar-list">
                        {categories.map((cat) => (
                           <button
                              key={cat.id}
                              onClick={() => scrollToSection(cat.id)}
                              className="svc-details__sidebar-btn"
                           >
                              <span>{cat.title}</span>
                              <FaArrowRight className="svc-details__sidebar-arrow" />
                           </button>
                        ))}
                     </div>
                     <Link to="/appointment" className="svc-details__sidebar-cta">
                        Book a Cleaning
                     </Link>
                  </div>
               </div>

               {/* Main content */}
               <div className="col-xl-9 col-lg-8">
                  <h2 className="svc-details__main-title">What's Included in Each Service</h2>
                  <p className="svc-details__main-sub">
                     Every service comes with trained staff and all required equipment. Prices shown are starting rates — final cost confirmed during our same-day callback.
                  </p>

                  {categories.map((cat) => (
                     <div id={cat.id} key={cat.id} className="svc-details__card">
                        <div className="svc-details__card-inner">
                           <div className="svc-details__card-img-wrap">
                              <img
                                 src={cat.image}
                                 alt={cat.title}
                                 className="svc-details__card-img"
                                 loading="lazy"
                                 width="240"
                                 height="300"
                              />
                           </div>
                           <div className="svc-details__card-body">
                              <h3 className="svc-details__card-title">{cat.title}</h3>
                              {cat.amount && (
                                 <p className="svc-details__card-price">Starts at <strong>{cat.amount}</strong></p>
                              )}
                              <div className="svc-details__lists">
                                 <div>
                                    <p className="svc-details__list-label svc-details__list-label--yes">
                                       <FaCheckCircle /> What's included
                                    </p>
                                    <ul className="svc-details__list">
                                       {cat.doList.map((item) => (
                                          <li key={item}>{item}</li>
                                       ))}
                                    </ul>
                                 </div>
                                 <div>
                                    <p className="svc-details__list-label svc-details__list-label--no">
                                       <FaTimesCircle /> Not included
                                    </p>
                                    <ul className="svc-details__list svc-details__list--no">
                                       {cat.dontList.map((item) => (
                                          <li key={item}>{item}</li>
                                       ))}
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}

                  {/* Bottom CTA */}
                  <div className="svc-details__cta">
                     <div>
                        <h3 className="svc-details__cta-title">Ready to book?</h3>
                        <p className="svc-details__cta-sub">No upfront payment. We call back the same day to confirm.</p>
                     </div>
                     <Link to="/appointment" className="svc-details__cta-btn">
                        Book a Cleaning
                     </Link>
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
};

export default ServicesDetailsFaq;
