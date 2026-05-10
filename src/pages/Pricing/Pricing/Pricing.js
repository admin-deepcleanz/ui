import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import PricingAffordablePackage from '../PricingAffordablePackage/PricingAffordablePackage';
import '../pricing.css';

const Pricing = () => {
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
            <title>Cleaning Prices in Chennai | DeepCleanz</title>
            <meta
               name="description"
               content="Transparent home cleaning prices in Chennai. Bathroom from ₹599, Kitchen from ₹1,299, Full house from ₹2,499. Pay only after service."
            />
            <meta name="keywords" content="home cleaning price Chennai, deep cleaning cost Chennai, affordable cleaning service, DeepCleanz pricing" />
            <meta property="og:title" content="Cleaning Prices in Chennai | DeepCleanz" />
            <meta
               property="og:description"
               content="Simple, honest cleaning rates. No hidden charges. Pay after service is done."
            />
            <meta property="og:url" content="https://deepcleanz.com/pricing" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://deepcleanz.com/assets/img/social-card.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Cleaning Prices in Chennai | DeepCleanz" />
            <meta
               name="twitter:description"
               content="Transparent home cleaning prices. Pay only after the service is done."
            />
            <meta name="twitter:image" content="https://deepcleanz.com/assets/img/social-card.png" />
            <link rel="canonical" href="https://deepcleanz.com/pricing" />
            <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
         </Helmet>

         <Navigation />
         <PricingAffordablePackage />
         <Footer />
      </>
   );
};

export default Pricing;
