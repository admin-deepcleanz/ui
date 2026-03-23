import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelopeOpen, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
   return (
      <>
         <footer className="theme-dark-bg">
            <div className="tp-footer-area-two pt-80 pb-50">
               <div className="container">
                  <div className="row justify-content-around">
                     <div className="col-lg-4 col-sm-6">
                        <div className="tp-footer-widget footer-col-1 mb-30 wow fadeInUp" data-wow-delay=".3s">
                           <div className="tp-footer-info">
                              <div className="tp-footer-info-logo mb-35">
                                 <Link to="/"><img src="assets/img/logo/logo-white.png" className="img-fluid" alt="img not found" /></Link>
                              </div>
                              <h4 className="mb-15"><a href="tel:+919363609470">+91 93636 09470</a></h4>
                              <h6 className="mb-15"><i><FaEnvelopeOpen /></i><a href="mailto:info@deepcleanz.com">info@deepcleanz.com</a></h6>
                              <h6 className="mb-20"><i><FaMapMarkerAlt /></i> 41, South Lock St, Kotturpuram, Chennai - 85</h6>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-sm-6">
                        <div className="tp-footer-widget footer-col-2 mb-30 wow fadeInUp" data-wow-delay=".6s">
                           <h4 className="tp-footer-widget-title mb-35">Our Services</h4>
                           <ul>
                              <li><a href="/servicesDetails">Full house Cleaning</a></li>
                              <li><a href="/servicesDetails">Kitchen Services</a></li>
                              <li><a href="/servicesDetails">Bedroom Cleaning</a></li>
                              <li><a href="/servicesDetails">Bathroom Services</a></li>
                              <li><a href="/servicesDetails">Sofa Cleaning</a></li>
                              <li><a href="/servicesDetails">Carpet Cleaning</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tp-copyright-area-two bg-green-light z-index pt-30 pb-30">
               <div className="container">
                  <div className="row">
                     <div className="col-12">
                        <div className="tp-copyright tp-copyright-two text-center">
                           <p className="m-0">Copyright (c) 2026 <span>DeepCleanz</span>. All Rights Reserved.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;
