import React from 'react';
import { FaBolt, FaCheckCircle, FaUserShield } from 'react-icons/fa';

const proofItems = [
   {
      icon: <FaCheckCircle />,
      title: 'Pay After Service',
      text: 'No advance payment. You pay only after the cleaning is done to your satisfaction.',
   },
   {
      icon: <FaBolt />,
      title: 'Same-Day Callback',
      text: 'Submit your request and we call back within hours to confirm and schedule.',
   },
   {
      icon: <FaUserShield />,
      title: 'Trained Cleaning Team',
      text: 'Experienced professionals for homes, kitchens, bathrooms, sofas and carpets.',
   },
];

const ProofArea = () => {
   return (
      <section className="premium-home__proof pt-50 pb-50">
         <div className="container">
            <div className="row g-4">
               {proofItems.map((item) => (
                  <div className="col-lg-4 col-md-4" key={item.title}>
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
