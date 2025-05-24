import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import ServicesDetailsBreadcrumb from './ServicesDetailsBreadcrumb/ServicesDetailsBreadcrumb';
import ServicesDetailsFaq from './ServicesDetailsFaq/ServicesDetailsFaq';
import ServicesTestimonials from '../../Services/Services/ServicesTestimonial/ServicesTestimonials';
import { Helmet } from 'react-helmet';

const ServicesDetails = () => {
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
                <title>Services | Deepcleanz Professional Cleaning</title>
                <meta
                    name="description"
                    content="Explore the wide range of professional cleaning services offered by Deepcleanz. Residential, commercial, deep cleaning, and more."
                />
                <meta name="keywords" content="cleaning services, residential cleaning, commercial cleaning, deep cleaning, Deepcleanz services" />
                <meta property="og:title" content="Services | Deepcleanz Professional Cleaning" />
                <meta
                    property="og:description"
                    content="Discover expert cleaning solutions tailored for homes and businesses. Quality guaranteed."
                />
                <meta property="og:url" content="https://deepcleanz.com/servicesDetails" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/assets/img/logo/logo-blue.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Services | Deepcleanz Professional Cleaning" />
                <meta
                    name="twitter:description"
                    content="From regular home cleaning to specialized commercial services, Deepcleanz has you covered."
                />
                <meta name="twitter:image" content="/assets/img/logo/logo-blue.png" />
                <link rel="canonical" href="https://deepcleanz.com/servicesDetails" />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>
            <Navigation />
            <ServicesDetailsBreadcrumb />
            <ServicesDetailsFaq />
            <ServicesTestimonials />
            <Footer />
        </>
    );
};

export default ServicesDetails;