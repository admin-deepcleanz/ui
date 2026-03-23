import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import AboutArea from './AboutArea/AboutArea';
import ChoseArea from './ChoseArea/ChoseArea';
import CtaArea from './CtaArea/CtaArea';
import FactArea from './FactArea/FactArea';
import GoogleRatingStrip from './GoogleRatingStrip/GoogleRatingStrip';
import HeroSection from './HeroSection/HeroSection';
import PricingArea from './PricingArea/PricingArea';
import ServiceArea from './ServiceArea/ServiceArea';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
   const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Deepcleanz',
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
      openingHoursSpecification: {
         '@type': 'OpeningHoursSpecification',
         dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
         opens: '06:00',
         closes: '23:00',
      },
   };

   return (
      <>
         <Helmet>
            <title>Deepcleanz | Professional Cleaning Services</title>
            <meta
               name="description"
               content="Deepcleanz offers top-rated home and commercial cleaning services with flexible scheduling and eco-friendly solutions. Book your cleaning today!"
            />
            <meta
               name="keywords"
               content="cleaning services, home cleaning, office cleaning, deep cleaning, professional cleaners, Deepcleanz, professional cleaning services, bedroom cleaning, kitchen cleaning, bathroom cleaning, carpet cleaning, upholstery cleaning, move-in/move-out cleaning, post-construction cleaning, commercial cleaning, residential cleaning"
            />
            <meta name="author" content="Deepcleanz" />
            <meta property="og:title" content="Deepcleanz | Professional Cleaning Services" />
            <meta
               property="og:description"
               content="We're here to make your space shine, every time! Reliable and affordable cleaning services for homes and businesses."
            />
            <meta property="og:url" content="https://deepcleanz.com/" />
            <meta property="og:image" content="/assets/img/logo/logo-blue.png" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Deepcleanz | Professional Cleaning Services" />
            <meta
               name="twitter:description"
               content="Trusted and affordable cleaning services for your home or office. Satisfaction guaranteed."
            />
            <meta name="twitter:image" content="/assets/img/logo/logo-blue.png" />
            <link rel="canonical" href="https://deepcleanz.com/" />
            <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
         </Helmet>
         <Navigation />
         <HeroSection />
         <GoogleRatingStrip />
         <CtaArea />
         <PricingArea />
         <FactArea />
         <ServiceArea />
         <ChoseArea />
         <AboutArea />
         <Testimonial />
         <Footer />
      </>
   );
};

export default Home;
