import React from 'react';
import { Link } from 'react-router-dom';
import HomeThreeSIngleAbout from '../../../../components/HomeThreeSIngleAbout/HomeThreeSIngleAbout';

const HomeThreeAbout = () => {
   return (
      <>
         <section className="tp-about-area-two position-relative pt-120 pb-85 bg-gray-light">
            <div className="container">
               <div className="row justify-content-xl-between justify-content-md-center">
                  <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-10">
                     <div className="tp-about-img-three pt-40 position-relative mb-30 wow fadeInUp" data-wow-delay=".3s">
                        <img src="assets/img/about/about-img-3.jpg" className="img-fluid" alt="img-not-found" />
                        <img src="assets/img/about/about-img-4.jpg" className="img-fluid tp-about-img-three-second" alt="img-not-found" />
                        <img src="assets/img/about/about-img-shape-3.png" className="img-fluid tp-about-img-three-third" alt="img-not-found" />
                     </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-md-10">
                     <div className="tp-about-text tp-about-text-three mb-30 wow fadeInUp" data-wow-delay=".6s">
                        <div className="section-title-wrapper mb-25">
                           <h5 className="tp-section-subtitle-three mb-20">About The Klenar_ _</h5>
                           <h2 className="tp-section-title-two color-theme-blue">Brightening The Home <br />From Every Side</h2>
                        </div>
                        <p className="mb-40">Fusce fusce ante dis varius iaculis quis penatibus do placerat et convallis ultricies egestas hacker pharetra veile litora nascetur diam dapibus euismod neque sapien siverra nunc nisler fortune litora neque.</p>
                        <div className="row mb-10">

                           <HomeThreeSIngleAbout icon="snowfall" title="Residential Cleaning Services" />

                           <HomeThreeSIngleAbout icon="business-and-trade"
                              title="Commercial Cleaning Services" />

                        </div>
                        <div className="row">
                           <div className="col-12">
                              <div className="tp-about-three-btn">
                                 <Link to="/servicesDetails" className="theme-btn text-white">
                                    <i className="flaticon-enter"></i> Learn More</Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreeAbout;