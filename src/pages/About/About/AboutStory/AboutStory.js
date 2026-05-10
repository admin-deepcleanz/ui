import React from 'react';

const AboutStory = () => {
   return (
      <section className="about-story pt-80 pb-60">
         <div className="container">
            <div className="row align-items-center g-5">
               <div className="col-lg-6">
                  <div className="about-story__media wow fadeInUp" data-wow-delay=".2s">
                     <img
                        src="assets/img/about/about-img-1.jpg"
                        className="about-story__img-main"
                        loading="lazy"
                        width="540"
                        height="420"
                        alt="DeepCleanz team deep cleaning a home in Chennai"
                     />
                     <img
                        src="assets/img/logo/logo-blue.png"
                        className="about-story__img-accent"
                        loading="lazy"
                        width="120"
                        height="120"
                        alt="DeepCleanz cleaning equipment and supplies"
                     />
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="about-story__content wow fadeInUp" data-wow-delay=".3s">
                     <span className="premium-home__eyebrow">Our Story</span>
                     <h2 className="tp-section-title heading-color-black mt-3 mb-20">
                        Started Small.<br />Built on Trust.
                     </h2>
                     <p className="about-story__copy mb-25">
                        DeepCleanz started in early 2025 with one simple belief — that a clean home shouldn't be hard to get. We began as a small offline service, taking bookings through word of mouth and delivering results that spoke for themselves.
                     </p>
                     <p className="about-story__copy mb-35">
                        Two years in, we've served 300+ homes across Chennai, earned a 4.7 Google rating, and built a team that shows up on time, brings its own equipment, and only asks for payment after the job is done.
                     </p>
                     <div className="row g-3">
                        <div className="col-sm-6">
                           <div className="about-story__service-card">
                              <div className="tp-about-service-icon yellow-circle-shape mb-15">
                                 <i className="flaticon-snowfall"></i>
                              </div>
                              <h4 className="about-story__service-title">Residential Cleaning</h4>
                              <p>Full home, kitchen, bathroom, sofa, carpet — every space handled with care.</p>
                           </div>
                        </div>
                        <div className="col-sm-6">
                           <div className="about-story__service-card">
                              <div className="tp-about-service-icon yellow-circle-shape mb-15">
                                 <i className="flaticon-business-and-trade"></i>
                              </div>
                              <h4 className="about-story__service-title">Commercial Cleaning</h4>
                              <p>Offices and storefronts cleaned to a standard that leaves the right impression.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutStory;
