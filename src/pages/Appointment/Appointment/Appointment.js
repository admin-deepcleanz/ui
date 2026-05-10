import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import ApointArea from './ApointArea/ApointArea';
import BookingFaq from './BookingFaq/BookingFaq';
import './appointment.css';

const Appointment = () => {
   const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "DeepCleanz",
      "image": "https://deepcleanz.com/assets/img/logo/logo-blue.png",
      "@id": "https://deepcleanz.com",
      "url": "https://deepcleanz.com",
      "telephone": "+91 93636 09470",
      "address": {
         "@type": "PostalAddress",
         "streetAddress": "41, South Lock St",
         "addressLocality": "Kotturpuram, Chennai",
         "addressRegion": "Tamilnadu",
         "postalCode": "600085",
         "addressCountry": "IN"
      },
      "openingHoursSpecification": [
         {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "06:00",
            "closes": "23:00"
         }
      ],
   };

   return (
      <>
         <Helmet>
            <title>Book a Cleaning | DeepCleanz – Home Cleaning in Chennai</title>
            <meta
               name="description"
               content="Book a professional home cleaning in Chennai. No upfront payment — you pay only after the job is done. Same-day callback guaranteed."
            />
            <meta name="keywords" content="book home cleaning Chennai, cleaning appointment, deep cleaning booking, DeepCleanz" />
            <meta property="og:title" content="Book a Cleaning | DeepCleanz – Home Cleaning in Chennai" />
            <meta
               property="og:description"
               content="Request a professional cleaning for your home. No upfront payment. Same-day callback. 4.7 rated on Google."
            />
            <meta property="og:url" content="https://deepcleanz.com/appointment" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://deepcleanz.com/assets/img/social-card.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Book a Cleaning | DeepCleanz – Home Cleaning in Chennai" />
            <meta
               name="twitter:description"
               content="Request a professional cleaning. No upfront payment. Same-day callback. 4.7 rated on Google."
            />
            <meta name="twitter:image" content="https://deepcleanz.com/assets/img/social-card.png" />
            <link rel="canonical" href="https://deepcleanz.com/appointment" />
            <script type="application/ld+json">
               {JSON.stringify(structuredData)}
            </script>
         </Helmet>

         <Navigation />
         <ApointArea />
         <BookingFaq />
         <Footer />
      </>
   );
};

export default Appointment;
