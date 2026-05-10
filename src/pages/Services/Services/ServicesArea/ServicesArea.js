import React from 'react';
import { Link } from 'react-router-dom';
import { FaBath, FaUtensils, FaBed, FaHome, FaCouch, FaLayerGroup } from 'react-icons/fa';
import { MdOutlineMoveToInbox, MdConstruction } from 'react-icons/md';

const services = [
   {
      img: 'assets/img/service/full-house.jpg',
      icon: <FaHome />,
      title: 'Full House Deep Cleaning',
      detailId: 'full-house',
      desc: 'A top-to-bottom clean covering every room. Ideal for post-move, pre-event, or a thorough seasonal refresh.',
   },
   {
      img: 'assets/img/service/kitchen.jpg',
      icon: <FaUtensils />,
      title: 'Kitchen Cleaning',
      detailId: 'kitchen',
      desc: 'Heavy grease, exhaust fans, countertops, sink, and appliance exteriors — your kitchen left spotless.',
   },
   {
      img: 'assets/img/service/bathroom.png',
      icon: <FaBath />,
      title: 'Bathroom Cleaning',
      detailId: 'bathroom',
      desc: 'Machine deep-cleaning of tiles, toilet, sink, mirror, and floor. No stains, no odour.',
   },
   {
      img: 'assets/img/service/bedroom.jpg',
      icon: <FaBed />,
      title: 'Bedroom Cleaning',
      detailId: 'bedroom',
      desc: 'Vacuuming, dusting, window and curtain cleaning, and thorough floor mopping — all done right.',
   },
   {
      img: 'assets/img/service/sofa.jpg',
      icon: <FaCouch />,
      title: 'Sofa Cleaning',
      detailId: 'sofa',
      desc: 'Fabric and leather sofa deep cleaning that removes dust, allergens, and stains effectively.',
   },
   {
      img: 'assets/img/service/mattress.jpg',
      icon: <FaLayerGroup />,
      title: 'Carpet & Mattress Cleaning',
      detailId: 'mattress',
      desc: 'Steam and dry cleaning to eliminate embedded dust, allergens, and stubborn stains.',
   },
   {
      img: 'assets/img/service/commercial.jpg',
      icon: <MdOutlineMoveToInbox />,
      title: 'Move-In / Move-Out Cleaning',
      detailId: 'commercial',
      desc: 'Leave your old home spotless or start fresh in a new one. Full clean covering every corner.',
   },
   {
      img: 'assets/img/service/service-details-1.jpg',
      icon: <MdConstruction />,
      title: 'Post-Renovation Cleaning',
      detailId: 'full-house',
      desc: 'Construction dust, paint residue, and debris cleared out so your renovated space is ready to use.',
   },
];

const ServicesArea = () => {
   return (
      <section className="services-area pt-80 pb-60">
         <div className="container">
            <div className="text-center mb-55">
               <span className="premium-home__eyebrow wow fadeInUp" data-wow-delay=".1s">What We Do</span>
               <h2 className="tp-section-title heading-color-black mt-3 wow fadeInUp" data-wow-delay=".15s">
                  Cleaning Services in Chennai
               </h2>
               <p className="services-area__sub wow fadeInUp" data-wow-delay=".2s">
                  Every service comes with trained staff, full equipment, and our pay-after-service guarantee.
               </p>
            </div>

            <div className="row g-4">
               {services.map((svc, index) => (
                  <div className="col-lg-3 col-md-6" key={svc.title}>
                     <div
                        className="services-area__card wow fadeInUp"
                        data-wow-delay={`${0.1 + (index % 4) * 0.1}s`}
                     >
                        <div className="services-area__img-wrap">
                           <img
                              src={svc.img}
                              alt={svc.title}
                              className="services-area__img"
                              loading="lazy"
                              width="400"
                              height="190"
                           />
                           <div className="services-area__icon">{svc.icon}</div>
                        </div>
                        <div className="services-area__body">
                           <h4 className="services-area__title">{svc.title}</h4>
                           <p className="services-area__desc">{svc.desc}</p>
                           <div className="services-area__actions">
                              <Link to={`/servicesDetails#${svc.detailId}`} className="services-area__link services-area__link--details">
                                 Details <span>→</span>
                              </Link>
                              <Link to="/appointment" className="services-area__link services-area__link--book">
                                 Book Now
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default ServicesArea;
