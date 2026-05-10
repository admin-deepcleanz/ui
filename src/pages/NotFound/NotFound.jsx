import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
   const navigate = useNavigate();
   const [countdown, setCountdown] = useState(5);

   useEffect(() => {
      const timer = setInterval(() => {
         setCountdown((prev) => {
            if (prev === 1) {
               clearInterval(timer);
               navigate('/');
            }
            return prev - 1;
         });
      }, 1000);
      return () => clearInterval(timer);
   }, [navigate]);

   return (
      <div style={{
         minHeight: '100vh',
         background: '#f6f7f3',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         padding: '2rem',
         fontFamily: 'inherit',
      }}>
         <div style={{ textAlign: 'center', maxWidth: '480px' }}>
            <div style={{
               fontSize: '6rem',
               fontWeight: 800,
               color: '#1a6360',
               lineHeight: 1,
               letterSpacing: '-0.04em',
               marginBottom: '0.5rem',
            }}>
               404
            </div>
            <h1 style={{
               fontSize: '1.5rem',
               fontWeight: 800,
               color: '#132e2d',
               marginBottom: '0.75rem',
            }}>
               Page not found
            </h1>
            <p style={{
               color: '#657573',
               fontSize: '0.97rem',
               lineHeight: 1.7,
               marginBottom: '2rem',
            }}>
               The page you're looking for doesn't exist or has been moved.
               Redirecting to home in <strong style={{ color: '#1a6360' }}>{countdown}</strong>s…
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
               <Link to="/" style={{
                  background: '#1a6360',
                  color: '#fff',
                  padding: '12px 24px',
                  borderRadius: '14px',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  textDecoration: 'none',
               }}>
                  Go Home
               </Link>
               <Link to="/appointment" style={{
                  background: 'rgba(31,107,104,0.09)',
                  color: '#1a6360',
                  padding: '12px 24px',
                  borderRadius: '14px',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  border: '1.5px solid rgba(31,107,104,0.18)',
               }}>
                  Book a Cleaning
               </Link>
            </div>
         </div>
      </div>
   );
};

export default NotFound;
