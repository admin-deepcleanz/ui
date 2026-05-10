import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import ServicesDetailsFaq from './ServicesDetailsFaq/ServicesDetailsFaq';
import './servicesDetails.css';

const ServicesDetails = () => {
   const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'DeepCleanz',
      image: 'https://deepcleanz.com/assets/img/logo/logo-blue.png',
      '@id': 'https://deepcleanz.com',
      url: 'https://deepcleanz.com',
      telephone: '+91 93636 09470',
      address: {
         '@type': 'PostalAddress',
         streetAddress: '41, South Lock St',
         addressLocality: 'Kotturpuram, Chennai',
         addressRegion: 'Tamilnadu',
         postalCode: '600085',
         addressCountry: 'IN',
      },
      openingHoursSpecification: [
         {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '06:00',
            closes: '23:00',
         },
      ],
   };

   return (
      <>
         <Helmet>
            <title>Service Details | What's Included | DeepCleanz Chennai</title>
            <meta
               name="description"
               content="See exactly what's included in each DeepCleanz cleaning service — full house, kitchen, bathroom, sofa, mattress, and commercial cleaning in Chennai."
            />
            <meta name="keywords" content="cleaning service details Chennai, what is included deep cleaning, DeepCleanz service breakdown" />
            <meta property="og:title" content="Service Details | What's Included | DeepCleanz Chennai" />
            <meta
               property="og:description"
               content="Detailed breakdown of every cleaning service — what's included, what's not, and starting prices."
            />
            <meta property="og:url" content="https://deepcleanz.com/servicesDetails" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://deepcleanz.com/assets/img/social-card.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Service Details | What's Included | DeepCleanz Chennai" />
            <meta
               name="twitter:description"
               content="Detailed breakdown of every cleaning service — what's included, what's not, and starting prices."
            />
            <meta name="twitter:image" content="https://deepcleanz.com/assets/img/social-card.png" />
            <link rel="canonical" href="https://deepcleanz.com/servicesDetails" />
            <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
         </Helmet>

         <Navigation />
         <ServicesDetailsFaq />
         <Footer />
      </>
   );
};

export default ServicesDetails;
