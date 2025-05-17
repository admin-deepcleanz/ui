import React from 'react';
import './ContactButtons.css';

const ContactButtons = () => {
  const phoneNumber = '919363609470';
  const message = "Hi, I'm interested in your service!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const telLink = `tel:+${phoneNumber}`;

  return (
    <div className="contact-buttons">
      <a href={telLink} className="contact-button call" aria-label="Call Now">
        <img src="https://img.icons8.com/fluency/48/000000/phone.png" alt="Call Icon" />
        <span>Call Now</span>
      </a>
      <a href={whatsappLink} className="contact-button whatsapp" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp Icon" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};

export default ContactButtons;
