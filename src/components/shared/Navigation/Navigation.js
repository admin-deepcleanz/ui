import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Sidebar from '../../Sidebar/Sidebar';
import { FaBars, FaPhoneAlt } from 'react-icons/fa';

const Navigation = () => {
   const [show, setShow] = useState(false);
   const { pathname } = useLocation();
   const isHome = pathname === '/' || pathname === '/home';

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   // sticky state
   const [sticky, setSticky] = useState(false);

   useEffect(() => {
      const stickyNavbar = () => {
         if (window.scrollY > 80) {
            setSticky(true);
         } else {
            setSticky(false);
         }
      };

      window.addEventListener('scroll', stickyNavbar);
      return () => window.removeEventListener('scroll', stickyNavbar);
   }, []);
   return (
      <>
         <header className="premium-home__header">
            <div className="tp-header-area">
               <div className={sticky ? 'sticky-menu tp-header-menu-area header-sticky premium-home__header-menu' : 'tp-header-menu-area header-sticky premium-home__header-menu'}>
                  <div className="container">
                     <div className="row align-items-center premium-home__header-row">
                        <div className="col-xl-2 col-8">
                           <div className="tp-sticky-logo premium-home__header-brand">
                              <Link to="/"><img src="assets/img/logo/logo-blue.png" className="img-fluid" alt="DeepCleanz logo" /></Link>
                           </div>
                        </div>
                        <div className="col-xl-8 d-none d-xl-block premium-home__header-nav">
                            <div className="tp-main-menu-bg premium-home__nav-shell">
                              <div className="tp-main-menu">
                                 <nav id="tp-mobile-menu">
                                    <ul className="text-center premium-home__nav-list">
                                       <li><NavLink to="/">Home</NavLink></li>
                                       <li><NavLink to="/about">About</NavLink></li>
                                       <li><NavLink to="/services">Services</NavLink></li>
                                       <li><NavLink to="/pricing">Pricing</NavLink></li>
                                       <li><NavLink to="/appointment">Appointment</NavLink></li>
                                    </ul>
                                 </nav>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-2 col-4">
                           <div className="premium-home__header-actions">
                              <a href="tel:+919363609470" className="premium-home__header-phone d-none d-xl-flex">
                                 <FaPhoneAlt />
                                 <span>93636 09470</span>
                              </a>
                              <Link to="/appointment" className="premium-home__header-cta d-none d-xl-inline-flex">
                                 Book Now
                              </Link>
                              <button onClick={handleShow} className="side-toggle border-0 bg-transparent premium-home__menu-toggle d-xl-none">
                                 <FaBars className='bar_icon' />
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>

         <Sidebar show={show} handleClose={handleClose}></Sidebar>
         {!isHome && <div className="premium-home__nav-spacer" aria-hidden="true" />}
      </>
   );
};

export default Navigation;
