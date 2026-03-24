import React from 'react';
import { FaClock, FaShieldAlt, FaStar } from 'react-icons/fa';

const proofItems = [
   {
      icon: <FaClock />,
      title: 'Same-day callback',
      text: 'Fast response after you submit your service request.',
   },
   {
      icon: <FaShieldAlt />,
      title: 'Pay after service',
      text: 'Simple booking with confidence-first payment.',
   },
   {
      icon: <FaStar />,
      title: 'Trained home-cleaning crew',
      text: 'Experienced teams for homes, kitchens, bathrooms, and upholstery.',
   },
];

const ProofArea = () => {
   return (
      <section className="premium-home__proof pt-0 pb-40">
         <div className="container">
            <div className="row g-4">
               {proofItems.map((item) => (
                  <div className="col-lg-4 col-md-6" key={item.title}>
                     <div className="premium-home__proof-card">
                        <div className="premium-home__proof-icon">{item.icon}</div>
                        <div>
                           <h4 className="premium-home__proof-title">{item.title}</h4>
                           <p className="premium-home__proof-text">{item.text}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default ProofArea;
