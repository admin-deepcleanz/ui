import React from 'react';
import ServicePageArea from '../../../../components/ServiceArea/ServicePageArea';

const HomeThreePopularServices = () => {
   return (
      <>
         <section className="tp-service-area-three pt-115 pb-200 bg-gray-light">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-delay=".3s">
                        <h5 className="tp-section-subtitle-three mb-20">_ _ Popular Services _ _</h5>
                        <h2 className="tp-section-title-two color-theme-blue">Quality Cleaning Making <br/>you Much Happy</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <ServicePageArea service_image_num="9" ser_icon_img="house-cleaning"
                     ser_title="House Cleaning" colorclassName="home_three_title"></ServicePageArea>

                  <ServicePageArea service_image_num="10" ser_icon_img="cleaning"
                     ser_title="Hospital Cleaning" colorclassName="home_three_title"></ServicePageArea>

                  <ServicePageArea service_image_num="11" ser_icon_img="pot"
                     ser_title="Kitchen Cleaning" colorclassName="home_three_title"></ServicePageArea>

                  <ServicePageArea service_image_num="12" ser_icon_img="window"
                     ser_title="Window Cleaning" colorclassName="home_three_title"> </ServicePageArea>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreePopularServices;