import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { WOW } from 'wowjs';
import ScrollToTop from './components/ScrollToTop';
import ContactButtons from './components/ContactButtons/ContactButtons';
import VisitTracker from './components/visitTracker';

const Home = lazy(() => import('./pages/Home/Home/Home'));
const About = lazy(() => import('./pages/About/About/About'));
const Appointment = lazy(() => import('./pages/Appointment/Appointment/Appointment'));
const Pricing = lazy(() => import('./pages/Pricing/Pricing/Pricing'));
const Services = lazy(() => import('./pages/Services/Services/Services'));
const ServicesDetails = lazy(() => import('./pages/ServicesDetails/ServicesDetails/ServicesDetails'));
const Contact = lazy(() => import('./pages/Contact/Contact/Contact'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const AppLoader = () => <div style={{ minHeight: '100vh', background: '#f5f1e8' }} aria-hidden="true"></div>;

const App = () => {
  // wow animation active
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<AppLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/services" element={<Services />} />
            <Route path="/servicesDetails" element={<ServicesDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ContactButtons />
      <VisitTracker />
    </>
  );
};

export default App;
