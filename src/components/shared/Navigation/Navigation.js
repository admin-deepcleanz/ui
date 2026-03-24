import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Sidebar from '../../Sidebar/Sidebar';
import { FaBars } from 'react-icons/fa';

const Navigation = () => {
   const [show, setShow] = useState(false);

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
                        <div className="col-xl-3 col-8">
                           <div className="tp-sticky-logo premium-home__header-brand">
                              <Link to="/"><img src="assets/img/logo/logo-blue.png" className="img-fluid" alt="logo not found" /></Link>
                           </div>
                        </div>
                        <div className="col-xl-6 d-none d-xl-block premium-home__header-nav">
                            <div className="tp-main-menu-bg premium-home__nav-shell">
                              <div className="tp-main-menu">
                                 <nav id="tp-mobile-menu">
                                    <ul className="text-center premium-home__nav-list">
                                       <li className="menu-item-has-children"><NavLink to="/">Home</NavLink>
                                       </li>
                                       <li><NavLink to="/about">About</NavLink></li>
                                       <li><NavLink to="/servicesDetails">Services</NavLink></li>
                                       <li><NavLink to="/pricing">Pricing</NavLink></li>
                                       <li><NavLink to="/appointment">Appointment</NavLink></li>
                                       <li><NavLink to="/contact">Contact</NavLink></li>
                                    </ul>
                                 </nav>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-4">
                           <div className="premium-home__header-actions">
                              <Link to="/contact" className="theme-btn text-white d-none d-xl-inline-flex premium-home__header-quote"><i className="flaticon-enter"></i> Free Quote</Link>
                              <div className="side-menu-icon d-xl-none text-end">
                                 <button onClick={handleShow} className="side-toggle border-0 bg-transparent premium-home__menu-toggle">
                                    <i><FaBars className='bar_icon' /></i>
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>

         <Sidebar show={show} handleClose={handleClose}></Sidebar>
      </>
   );
};

export default Navigation;
