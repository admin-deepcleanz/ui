import React from 'react';
import './FadeIn.css';

const getDirectionClass = ({ left, right, top, bottom }) => {
   if (left) return 'fade-in--left';
   if (right) return 'fade-in--right';
   if (top) return 'fade-in--top';
   if (bottom) return 'fade-in--bottom';
   return '';
};

const FadeIn = ({ children, className = '', block = false, style, ...directionProps }) => {
   const classes = ['fade-in', block ? 'fade-in--block' : '', getDirectionClass(directionProps), className]
      .filter(Boolean)
      .join(' ');

   return (
      <span className={classes} style={style}>
         {children}
      </span>
   );
};

export default FadeIn;
