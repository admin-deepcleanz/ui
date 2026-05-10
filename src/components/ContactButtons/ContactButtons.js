import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import './ContactButtons.css';

const ContactButtons = () => {
   const phoneNumber = '919363609470';
   const message = "Hi, I'm interested in your cleaning service!";
   const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
   const telLink = `tel:+${phoneNumber}`;

   return (
      <div className="contact-buttons">
         <a href={telLink} className="contact-button contact-button--call" aria-label="Call Now">
            <FaPhone />
            <span>Call Now</span>
         </a>
         <a href={whatsappLink} className="contact-button contact-button--whatsapp" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
            <FaWhatsapp />
            <span>WhatsApp</span>
         </a>
      </div>
   );
};

export default ContactButtons;
