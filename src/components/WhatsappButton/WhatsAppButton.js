import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '919363609470';
  const message = 'Hi, I\'m interested in your service!';

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappLink} className="whatsapp-float" target="_blank" rel="noopener noreferrer">
      <img
        src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
        alt="WhatsApp Chat"
      />
    </a>
  );
};

export default WhatsAppButton;