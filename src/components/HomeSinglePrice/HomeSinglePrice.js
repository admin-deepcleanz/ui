import React from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const HomeSinglePrice = ({ icon_name, title, price, points = [] }) => {
   return (
      <div className="home-price-card bg-light text-center p-4 m-2 rounded shadow-sm flex-shrink-0" style={{ width: '300px' }}>
         <div className="tp-pricing-icon mb-4">
            <div className="tp-pricing-icon-inner">
               <i className={`flaticon-${icon_name}`}></i>
            </div>
         </div>
         <div className="tp-pricing-rate">
            <h4 className="mb-3">{title}</h4>
            <h2 className="mb-4">
               <p className="mb-1">Starts at</p>
               <span>₹</span>{price}
            </h2>
         </div>

         {/* Conditionally render points */}
         {points.length > 0 && (
            <ul className="text-start mb-4 list-unstyled">
               {points.map((point, index) => (
                  <li key={index}>
                     <GiCheckMark className="text-success me-2" /> {point}
                  </li>
               ))}
            </ul>
         )}

         <Link to="/pricing" className="btn btn-primary">
            <i className="flaticon-enter me-2"></i> Get Service
         </Link>
      </div>
   );
};

export default HomeSinglePrice;
