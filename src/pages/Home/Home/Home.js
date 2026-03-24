import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import ChoseArea from './ChoseArea/ChoseArea';
import CtaArea from './CtaArea/CtaArea';
import GoogleRatingStrip from './GoogleRatingStrip/GoogleRatingStrip';
import HeroSection from './HeroSection/HeroSection';
import ProofArea from './ProofArea/ProofArea';
import ServiceArea from './ServiceArea/ServiceArea';
import Testimonial from './Testimonial/Testimonial';
import VideosArea from './VideosArea/VideosArea';
import './premiumHome.css';

const Home = () => {
   const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://deepcleanz.com/#business',
      name: 'DeepCleanz',
      image: 'https://deepcleanz.com/assets/img/logo/logo-blue.png',
      url: 'https://deepcleanz.com',
      telephone: '+91 93636 09470',
      description:
         'DeepCleanz provides home deep cleaning, kitchen cleaning, bathroom cleaning, sofa cleaning, carpet cleaning, and move-in cleaning services in Chennai.',
      address: {
         '@type': 'PostalAddress',
         streetAddress: '41, South Lock St',
         addressLocality: 'Kotturpuram, Chennai',
         addressRegion: 'Tamilnadu',
         postalCode: '600085',
         addressCountry: 'IN',
      },
      priceRange: '$$',
      areaServed: {
         '@type': 'City',
         name: 'Chennai',
      },
      hasOfferCatalog: {
         '@type': 'OfferCatalog',
         name: 'Cleaning Services',
         itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Deep Cleaning' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kitchen Cleaning' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bathroom Cleaning' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sofa Cleaning' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Carpet Cleaning' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Move-In / Move-Out Cleaning' } },
         ],
      },
      openingHoursSpecification: {
         '@type': 'OpeningHoursSpecification',
         dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
         opens: '06:00',
         closes: '23:00',
      },
   };

   return (
      <div className="premium-home">
         <Helmet>
            <title>DeepCleanz | Home Deep Cleaning Services in Chennai</title>
            <meta
               name="description"
               content="Book trusted home deep cleaning services in Chennai with DeepCleanz. Kitchen, bathroom, sofa, carpet, and full-home cleaning with punctual teams and easy booking."
            />
            <meta
               name="keywords"
               content="home deep cleaning Chennai, cleaning services Chennai, kitchen cleaning Chennai, bathroom cleaning Chennai, sofa cleaning Chennai, carpet cleaning Chennai, DeepCleanz"
            />
            <meta name="author" content="Deepcleanz" />
            <meta name="robots" content="index, follow" />
            <meta property="og:locale" content="en_IN" />
            <meta property="og:site_name" content="DeepCleanz" />
            <meta property="og:title" content="DeepCleanz | Home Deep Cleaning Services in Chennai" />
            <meta
               property="og:description"
               content="Trusted home cleaning services in Chennai for kitchens, bathrooms, sofas, carpets, and full-home deep cleaning."
            />
            <meta property="og:url" content="https://deepcleanz.com/" />
            <meta property="og:image" content="https://deepcleanz.com/assets/img/logo/logo-blue.png" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="DeepCleanz | Home Deep Cleaning Services in Chennai" />
            <meta
               name="twitter:description"
               content="Book trusted home deep cleaning services in Chennai for kitchens, bathrooms, sofas, carpets, and full-home cleaning."
            />
            <meta name="twitter:image" content="https://deepcleanz.com/assets/img/logo/logo-blue.png" />
            <link rel="canonical" href="https://deepcleanz.com/" />
            <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
         </Helmet>
         <Navigation />
         <HeroSection />
         <GoogleRatingStrip />
         <CtaArea />
         <ProofArea />
         <ServiceArea />
         <VideosArea />
         <Testimonial />
         <ChoseArea />
         <Footer />
      </div>
   );
};

export default Home;
