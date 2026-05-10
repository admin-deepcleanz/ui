import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ show, handleClose }) => {
   return (
      <div className='side__bar'>
         <Offcanvas show={show} onHide={handleClose} placement='end'>
            <Offcanvas.Header closeButton />
            <Offcanvas.Body>
               <div className='home_nav text-white font-bold mb-3'>
                  <NavLink className="font-bold" to="/">Home</NavLink>
               </div>
               <div className='about_nav text-white font-bold mb-3'>
                  <NavLink className="font-bold" to="/about">About</NavLink>
               </div>
               <div className='services_nav text-white font-bold mb-3'>
                  <NavLink className="font-bold" to="/services">Services</NavLink>
               </div>
               <div className='pricing_nav text-white font-bold mb-3'>
                  <NavLink className="font-bold" to="/pricing">Pricing</NavLink>
               </div>
               <div className='appointment_nav text-white font-bold mb-3'>
                  <NavLink className="font-bold" to="/appointment">Appointment</NavLink>
               </div>

               <div className="fix">
                  <div className="side-info">
                     <div className="side-info-content">
                        <div className="contact-infos mb-30">
                           <div className="contact-list mb-30">
                              <h4>Contact Info</h4>
                              <ul>
                                 <li><i className="flaticon-pin"></i>41, South Lock St, Kotturpuram, Chennai-85</li>
                                 <li><i className="flaticon-email"></i><a href="mailto:info@deepcleanz.com">info@deepcleanz.com</a></li>
                                 <li><i className="flaticon-phone-call"></i><a href="tel:+919363609470">+91 93636 09470</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </Offcanvas.Body>
         </Offcanvas>
      </div>
   );
};

export default Sidebar;
