import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import ContactBreadcrumb from './ContactBreadcrumb/ContactBreadcrumb';
import ContactForm from './ContactForm/ContactForm';
import ContactMap from './ContactMap/ContactMap';
import { Helmet } from 'react-helmet';

const Contact = () => {
   const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Deepcleanz",
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
      "openingHoursSpecification": {
         "@type": "OpeningHoursSpecification",
         "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
         ],
         "opens": "06:00",
         "closes": "23:00"
      },
      // "sameAs": [
      //     "https://www.facebook.com/yourpage",
      //     "https://www.instagram.com/yourpage",
      //     "https://www.linkedin.com/company/yourpage"
      // ]
   };
   return (
      <>
         <Helmet>
            <title>Contact Us | Deepcleanz Cleaning Services</title>
            <meta
               name="description"
               content="Get in touch with Deepcleanz for all your cleaning service inquiries. We’re here to help!"
            />
            <meta name="keywords" content="contact cleaning service, Deepcleanz contact, cleaning inquiry, customer support" />
            <meta property="og:title" content="Contact Us | Deepcleanz Cleaning Services" />
            <meta
               property="og:description"
               content="Reach out to Deepcleanz for quotes, questions, and service support."
            />
            <meta property="og:url" content="https://deepcleanz.com/contact" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="/assets/img/logo/logo-blue.png" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Contact Us | Deepcleanz Cleaning Services" />
            <meta
               name="twitter:description"
               content="Contact Deepcleanz for professional cleaning services and customer support."
            />
            <meta name="twitter:image" content="/assets/img/logo/logo-blue.png" />
            <link rel="canonical" href="https://deepcleanz.com/contact" />
            <script type="application/ld+json">
               {JSON.stringify(structuredData)}
            </script>
         </Helmet>
         <Navigation />
         <ContactBreadcrumb />
         <ContactForm />
         <ContactMap />
         <Footer />

      </>
   );
};

export default Contact;