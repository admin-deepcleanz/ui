import React from 'react';
import HomeFactSingleItem from '../../../../components/HomeFactSingleItem/HomeFactSingleItem';

const FactArea = () => {
   return (
      <>
         <section className="tp-fact-area theme-dark-bg pt-75 pb-20">
            <div className="container">
               <div className="row">
                  <HomeFactSingleItem icon="shuttle" fact_num="250+" title="Project Completed" />
                  <HomeFactSingleItem icon="broom" fact_num="25+" title="Dedicated Cleaner" />
                  <HomeFactSingleItem icon="selection" fact_num="500+" title="Satisfied Customer" />
                  <HomeFactSingleItem icon="badge" fact_num="100%" title="Service Guarantee" />
               </div>
            </div>
         </section>
      </>
   );
};

export default FactArea;