import React from 'react';
import { Link } from 'react-router-dom';

const HomeServiceItem = ({ icon_name, title, content, className = '', wowDelay = '.2s' }) => {
   return (
      <div className={`col-xl-3 col-md-6 ${className}`.trim()}>
         <div className="tp-services white-bg wow fadeInUp premium-home__service-card" data-wow-delay={wowDelay}>
            <div className="premium-home__service-top">
               <div className="tp-services-icon yellow-circle-shape premium-home__service-icon">
                  <i className={`flaticon-${icon_name}`}></i>
               </div>
               <div className="premium-home__service-heading">
                  <h4 className="tp-services-text-title premium-home__service-title hover-theme-color">
                     <Link to="/services">{title}</Link>
                  </h4>
               </div>
            </div>
            <div className="tp-services-text fix premium-home__service-body">
               <p className="premium-home__service-copy">{content}</p>
               <div className="tp-services-text-link premium-home__service-link">
                  <Link to="/services"><i className="flaticon-enter"></i> View Service</Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomeServiceItem;
