import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Sidebar from '../../../../components/Sidebar/Sidebar';

const HomeThreeNavBar = () => {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const [sticky, setSticky] = useState(false);
   const stickyNavbar = () => {
      if (window.scrollY > 80) {
         setSticky(true)
      }
      else {
         setSticky(false)
      }
   }
   window.addEventListener('scroll', stickyNavbar);
   return (
      <>
         <header>
            <div className={sticky ? "sticky-menu tp-header-area-three header-sticky" : "tp-header-area-three header-sticky"}>
               <div className="tp-custom-container">
                  <div className="row justify-content-xl-center align-items-center">
                     <div className="col-xxl-2 col-xl-3 col-8">
                        <div className="tp-header-logo-three">
                           <Link to="/">
                              <img src="assets/img/logo/logo-blue.png" className="img-fluid" alt="logo not found" />
                           </Link>
                        </div>
                     </div>
                     <div className="col-xxl-6 col-xl-6 col-4">
                        <div className="tp-main-menu tp-main-menu-three">
                           <nav id="tp-mobile-menu">
                              <ul>
                                 <li className="menu-item-has-children">
                                    <NavLink to="/">Home</NavLink>
                                    <ul className="sub-menu">
                                       <li><NavLink to="/">Home Style 1</NavLink></li>
                                       <li><NavLink to="/homeTwo">Home Style 2</NavLink></li>
                                       <li><NavLink to="/homeThree">Home Style 3</NavLink></li>
                                    </ul>
                                 </li>
                                 <li className="menu-item-has-children">
                                    <NavLink to="/about">Pages </NavLink>
                                    <ul className="sub-menu">
                                       <li><NavLink to="/about">About</NavLink></li>
                                       <li><NavLink to="/appointment">Appointment</NavLink></li>
                                       <li><NavLink to="/pricing">Pricing</NavLink></li>
                                       <li><NavLink to="/team">Team</NavLink></li>
                                       <li><NavLink to="/teamDetails">Team Details</NavLink></li>
                                       <li><NavLink to="/faq">Faq</NavLink></li>
                                    </ul>
                                 </li>
                                 <li className="menu-item-has-children">
                                    <NavLink to="/services">Services </NavLink>
                                    <ul className="sub-menu">
                                       <li><NavLink to="/services">Services</NavLink></li>
                                       <li><NavLink to="/servicesDetails">Services Details</NavLink></li>
                                    </ul>
                                 </li>
                                 <li className="menu-item-has-children">
                                    <NavLink to="/projects">Projects</NavLink>
                                    <ul className="sub-menu">
                                       <li><NavLink to="/projects">Projects</NavLink></li>
                                       <li><NavLink to="/projectsDetails">Projects Details
                                       </NavLink></li>
                                    </ul>
                                 </li>
                                 <li className="menu-item-has-children">
                                    <NavLink to="/blogSidebar">Blog</NavLink>
                                    <ul className="sub-menu">
                                       <li><NavLink to="/blogSidebar">Blog Sidebar</NavLink>
                                       </li>
                                       <li><NavLink to="/blogDetails">Blog Details</NavLink>
                                       </li>
                                    </ul>
                                 </li>
                                 <li><NavLink to="/contact">Contact</NavLink></li>
                              </ul>
                           </nav>
                        </div>
                        {/* <!-- mobile menu activation --> */}
                        <div className="side-menu-icon d-xl-none text-end">
                           <button onClick={handleShow} className="side-toggle border-0 bg-transparent">
                              <i> <FaBars className='bar_icon' /> </i></button>
                        </div>
                     </div>
                     <div className="col-xxl-4 col-xl-3 d-none d-xl-block">
                        <div className="tp-header-right-three">
                           <div className="tp-header-number-three">
                              <span>Call Us : <a href="tel:33888200-55">33 888 200 - 55</a></span>
                           </div>
                           <div className="tp-header-btn-three">
                              <Link to="/contact" className="yellow-btn">
                                 <i className="flaticon-enter"></i> Free Quote</Link>
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

export default HomeThreeNavBar;