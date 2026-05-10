import React from 'react';
import { FaClock, FaHome, FaShieldAlt, FaStar } from 'react-icons/fa';

const stats = [
   { icon: <FaHome />, value: '200+', label: 'Homes Cleaned' },
   { icon: <FaStar />, value: '4.7 / 5', label: 'Google Rating' },
   { icon: <FaShieldAlt />, value: 'Pay After', label: 'Service Completed' },
   { icon: <FaClock />, value: 'Same Day', label: 'Callback Guarantee' },
];

const AboutStats = () => {
   return (
      <section className="about-stats pb-70">
         <div className="container">
            <div className="about-stats__grid">
               {stats.map((stat, index) => (
                  <div
                     className="about-stats__card wow fadeInUp"
                     data-wow-delay={`${0.1 + index * 0.1}s`}
                     key={stat.label}
                  >
                     <div className="about-stats__icon">{stat.icon}</div>
                     <div className="about-stats__value">{stat.value}</div>
                     <div className="about-stats__label">{stat.label}</div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default AboutStats;
