import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import ApointArea from './ApointArea/ApointArea';
import AppointmentFeatures from './ApointmentFeatures/AppointmentFeatures';
import AppointmentBreadcrumb from './AppointmentBreadcrumb/AppointmentBreadcrumb';
import AppointmentFeedback from './AppointmentFeadback/AppointmentFeadback';
import { Helmet } from 'react-helmet';


const Appointment = () => {
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
                <title>Book an Appointment | Deepcleanz Cleaning Services</title>
                <meta
                    name="description"
                    content="Schedule your cleaning appointment easily with Deepcleanz. Choose a date and time that works for you."
                />
                <meta name="keywords" content="cleaning appointment, book cleaning, schedule cleaning, Deepcleanz appointment" />
                <meta property="og:title" content="Book an Appointment | Deepcleanz Cleaning Services" />
                <meta
                    property="og:description"
                    content="Convenient and hassle-free appointment booking for home and commercial cleaning services."
                />
                <meta property="og:url" content="https://deepcleanz.com/appointment" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/assets/img/logo/logo-blue.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Book an Appointment | Deepcleanz Cleaning Services" />
                <meta
                    name="twitter:description"
                    content="Schedule your next cleaning service appointment with ease and confidence."
                />
                <meta name="twitter:image" content="/assets/img/logo/logo-blue.png" />
                <link rel="canonical" href="https://deepcleanz.com/appointment" />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <Navigation />
            <AppointmentBreadcrumb />
            <ApointArea />
            <AppointmentFeatures />
            <AppointmentFeedback />
            <Footer />
        </>
    );
};

export default Appointment;