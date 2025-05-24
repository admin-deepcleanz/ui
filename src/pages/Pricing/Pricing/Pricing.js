import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import PricingAffordablePackage from '../PricingAffordablePackage/PricingAffordablePackage';
// import SpecialPricingPackage from '../SpecialPricingPackage/SpecialPricingPackage';
import PricingBreadcrumb from './PricingBreadcrumb/PricingBreadcrumb';
import { Helmet } from 'react-helmet';

const Pricing = () => {
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
            <title>Pricing | Affordable Cleaning Services | Deepcleanz</title>
            <meta
               name="description"
               content="Check out the competitive pricing for Deepcleanz’s cleaning packages. Quality service that fits your budget."
            />
            <meta name="keywords" content="cleaning pricing, cleaning service cost, Deepcleanz rates, affordable cleaning" />
            <meta property="og:title" content="Pricing | Affordable Cleaning Services | Deepcleanz" />
            <meta
               property="og:description"
               content="Transparent pricing on residential and commercial cleaning services. Book with confidence."
            />
            <meta property="og:url" content="https://deepcleanz.com/pricing" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="/assets/img/logo/logo-blue.png" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Pricing | Affordable Cleaning Services | Deepcleanz" />
            <meta
               name="twitter:description"
               content="View our pricing plans for professional cleaning services designed to suit your needs."
            />
            <meta name="twitter:image" content="/assets/img/logo/logo-blue.png" />
            <link rel="canonical" href="https://deepcleanz.com/pricing" />
            <script type="application/ld+json">
               {JSON.stringify(structuredData)}
            </script>
         </Helmet>
         <Navigation />
         <PricingBreadcrumb />
         <PricingAffordablePackage />
         {/* <SpecialPricingPackage /> */}
         <Footer />
      </>
   );
};

export default Pricing;