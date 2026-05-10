import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import AboutCta from './AboutCta/AboutCta';
import AboutHero from './AboutHero/AboutHero';
import AboutProcess from './AboutProcess/AboutProcess';
import AboutStats from './AboutStats/AboutStats';
import AboutStory from './AboutStory/AboutStory';
import './about.css';

const About = () => {
   const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://deepcleanz.com/#business',
      name: 'DeepCleanz',
      image: 'https://deepcleanz.com/assets/img/logo/logo-blue.png',
      url: 'https://deepcleanz.com',
      telephone: '+91 93636 09470',
      description:
         'DeepCleanz provides professional home deep cleaning, kitchen cleaning, bathroom cleaning, sofa cleaning, and move-in cleaning services in Chennai.',
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
      <div>
         <Helmet>
            <title>About DeepCleanz | Home Cleaning Service in Chennai</title>
            <meta
               name="description"
               content="Learn about DeepCleanz — Chennai's trusted home cleaning service. Founded in 2025, 4.7 Google rating, 300+ homes cleaned, pay after service."
            />
            <meta
               name="keywords"
               content="about DeepCleanz, cleaning company Chennai, professional home cleaners Chennai, trusted cleaning service"
            />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content="About DeepCleanz | Home Cleaning Service in Chennai" />
            <meta
               property="og:description"
               content="Founded in 2025, DeepCleanz has earned a 4.7 Google rating across 300+ homes in Chennai. Trained crew, punctual service, pay after cleaning."
            />
            <meta property="og:url" content="https://deepcleanz.com/about" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://deepcleanz.com/assets/img/social-card.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="About DeepCleanz | Home Cleaning Service in Chennai" />
            <meta
               name="twitter:description"
               content="Founded in 2025, DeepCleanz has earned a 4.7 Google rating across 300+ homes in Chennai."
            />
            <meta name="twitter:image" content="https://deepcleanz.com/assets/img/social-card.png" />
            <link rel="canonical" href="https://deepcleanz.com/about" />
            <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
         </Helmet>

         <Navigation />
         <AboutHero />
         <AboutStory />
         <AboutStats />
         <AboutProcess />
         <AboutCta />
         <Footer />
      </div>
   );
};

export default About;
