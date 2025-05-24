import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import ServicesArea from './ServicesArea/ServicesArea';
// import ServicesBrandLogos from './ServicesBrandLogo/ServicesBrandLogos';
import ServicesBreadcrumb from './ServicesBreadcrumb/ServicesBreadcrumb';
import ServicesPricing from './ServicesPricing/ServicesPricing';
import ServicesTestimonials from './ServicesTestimonial/ServicesTestimonials';
import { Helmet } from 'react-helmet';

const Services = () => {
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
            </Helmet>
            <Navigation />
            <ServicesBreadcrumb />
            <ServicesArea />
            <ServicesTestimonials />
            {/* <ServicesBrandLogos /> */}
            <ServicesPricing />
            <Footer />
        </>
    );
};

export default Services;