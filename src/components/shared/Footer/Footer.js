import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelopeOpen, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
   return (
      <footer className="dc-footer">
         <div className="dc-footer__body">
            <div className="container">
               <div className="row g-4 g-lg-5">

                  {/* Brand + Contact */}
                  <div className="col-lg-4 col-md-6">
                     <Link to="/" className="dc-footer__brand-logo">
                        <img src="assets/img/logo/logo-white.png" alt="DeepCleanz logo" />
                     </Link>
                     <p className="dc-footer__tagline">
                        Professional home cleaning services in Chennai — trusted by hundreds of families for a spotless, healthy home.
                     </p>
                     <ul className="dc-footer__contact-list">
                        <li>
                           <a href="tel:+919363609470">
                              <FaPhoneAlt />
                              +91 93636 09470
                           </a>
                        </li>
                        <li>
                           <a href="mailto:info@deepcleanz.com">
                              <FaEnvelopeOpen />
                              info@deepcleanz.com
                           </a>
                        </li>
                        <li>
                           <span>
                              <FaMapMarkerAlt />
                              41, South Lock St, Kotturpuram,<br />Chennai – 600 085
                           </span>
                        </li>
                     </ul>
                  </div>

                  {/* Quick Links */}
                  <div className="col-lg-2 col-md-6 col-6">
                     <h5 className="dc-footer__col-title">Quick Links</h5>
                     <ul className="dc-footer__link-list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><Link to="/appointment">Appointment</Link></li>
                     </ul>
                  </div>

                  {/* Services */}
                  <div className="col-lg-3 col-md-6 col-6">
                     <h5 className="dc-footer__col-title">Our Services</h5>
                     <ul className="dc-footer__link-list">
                        <li><Link to="/servicesDetails#full-house">Full House Cleaning</Link></li>
                        <li><Link to="/servicesDetails#kitchen">Kitchen Cleaning</Link></li>
                        <li><Link to="/servicesDetails#bedroom">Bedroom Cleaning</Link></li>
                        <li><Link to="/servicesDetails#bathroom">Bathroom Cleaning</Link></li>
                        <li><Link to="/servicesDetails#sofa">Sofa Cleaning</Link></li>
                        <li><Link to="/servicesDetails#mattress">Carpet &amp; Mattress</Link></li>
                     </ul>
                  </div>

                  {/* Working Hours */}
                  <div className="col-lg-3 col-md-6">
                     <h5 className="dc-footer__col-title">Working Hours</h5>
                     <ul className="dc-footer__link-list">
                        <li><span style={{ color: 'rgba(255,252,245,0.65)', fontSize: '14.5px' }}>Monday – Saturday</span></li>
                        <li><span style={{ color: '#c8913a', fontWeight: 600, fontSize: '14.5px' }}>8:00 AM – 7:00 PM</span></li>
                        <li><span style={{ color: 'rgba(255,252,245,0.65)', fontSize: '14.5px', marginTop: '8px', display: 'block' }}>Sunday</span></li>
                        <li><span style={{ color: '#c8913a', fontWeight: 600, fontSize: '14.5px' }}>9:00 AM – 4:00 PM</span></li>
                     </ul>
                     <Link
                        to="/appointment"
                        style={{
                           display: 'inline-flex',
                           alignItems: 'center',
                           marginTop: '24px',
                           padding: '11px 24px',
                           borderRadius: '999px',
                           background: 'linear-gradient(135deg, #c8913a 0%, #a8722a 100%)',
                           color: '#fff',
                           fontSize: '13.5px',
                           fontWeight: 700,
                           letterSpacing: '0.02em',
                           textDecoration: 'none',
                           boxShadow: '0 4px 16px rgba(200,145,58,0.3)',
                           transition: 'opacity 0.2s ease, transform 0.2s ease',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                        onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
                     >
                        Book a Cleaning
                     </Link>
                  </div>

               </div>
            </div>
         </div>

         <hr className="dc-footer__divider" />

         <div className="dc-footer__bottom">
            <div className="container">
               <div className="dc-footer__bottom-inner">
                  <p className="dc-footer__copyright">
                     Copyright &copy; {new Date().getFullYear()} <span>DeepCleanz</span>. All Rights Reserved.
                  </p>
                  <ul className="dc-footer__bottom-links">
                     <li><Link to="/about">About</Link></li>
                     <li><Link to="/pricing">Pricing</Link></li>
                     <li><Link to="/appointment">Appointment</Link></li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
