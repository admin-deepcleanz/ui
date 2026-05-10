import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import ServicesArea from './ServicesArea/ServicesArea';
import ServicesPricing from './ServicesPricing/ServicesPricing';
import '../services.css';

const Services = () => {
   return (
      <>
         <Helmet>
            <title>Cleaning Services in Chennai | DeepCleanz</title>
            <meta
               name="description"
               content="Professional home cleaning services in Chennai — full house, kitchen, bathroom, sofa, carpet, move-in, and post-renovation cleaning. Pay after service."
            />
            <meta name="keywords" content="home cleaning services Chennai, deep cleaning Chennai, kitchen cleaning, bathroom cleaning, sofa cleaning, DeepCleanz" />
            <meta property="og:title" content="Cleaning Services in Chennai | DeepCleanz" />
            <meta
               property="og:description"
               content="Full house, kitchen, bathroom, sofa, carpet and more. Trained staff, full equipment, pay after service."
            />
            <meta property="og:url" content="https://deepcleanz.com/services" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://deepcleanz.com/assets/img/social-card.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Cleaning Services in Chennai | DeepCleanz" />
            <meta
               name="twitter:description"
               content="Professional home cleaning in Chennai. Pay only after the service is done."
            />
            <meta name="twitter:image" content="https://deepcleanz.com/assets/img/social-card.png" />
            <link rel="canonical" href="https://deepcleanz.com/services" />
         </Helmet>

         <Navigation />
         <ServicesArea />
         <ServicesPricing />
         <Footer />
      </>
   );
};

export default Services;
