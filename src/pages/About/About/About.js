import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import AboutArea from '../../Home/Home/AboutArea/AboutArea';
// import AboutBanner from './AboutBanner/AboutBanner';
// import AboutFaq from './AboutFaq/AboutFaq';
// import AboutServices from './AboutServices/AboutServices';
import AboutTestimonial from './AboutTestimonial/AboutTestimonial';
import AboutBreadcrumb from './Breadcrumb/AboutBreadcrumb';
import WorkingProcess from './WorkingProcess/WorkingProcess';
import { Helmet } from 'react-helmet';

const About = () => {
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
                <title>About Us | Deepcleanz Cleaning Services</title>
                <meta
                    name="description"
                    content="Learn more about Deepcleanz — your trusted partner for professional home and commercial cleaning services. Our commitment is to make your space shine."
                />
                <meta
                    name="keywords"
                    content="about Deepcleanz, cleaning company, professional cleaners, trusted cleaning service, home cleaning, commercial cleaning"
                />
                <meta property="og:title" content="About Us | Deepcleanz Cleaning Services" />
                <meta
                    property="og:description"
                    content="Discover the story behind Deepcleanz and why we are your reliable cleaning service provider."
                />
                <meta property="og:url" content="https://deepcleanz.com/about" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/assets/img/logo/logo-blue.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Us | Deepcleanz Cleaning Services" />
                <meta
                    name="twitter:description"
                    content="Deepcleanz is committed to providing trusted, professional cleaning services for your home and business."
                />
                <meta name="twitter:image" content="/assets/img/logo/logo-blue.png" />
                <link rel="canonical" href="https://deepcleanz.com/about" />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>


            <Navigation />
            <AboutBreadcrumb />
            <AboutArea />
            <WorkingProcess />
            {/* <AboutFaq />
      <AboutServices /> */}
            <AboutTestimonial />
            {/* <AboutBanner /> */}
            <Footer />
        </>
    );
};

export default About;
