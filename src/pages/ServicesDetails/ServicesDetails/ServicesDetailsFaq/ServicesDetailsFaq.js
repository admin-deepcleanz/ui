import React, { useState, useEffect } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import { FaArrowRight} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'full-house',
    title: 'Full House Deep Cleaning',
    image: 'assets/img/service/full-house.jpg',
    doList: [
      'Complete cleaning of living rooms, bedrooms, kitchens, and bathrooms',
      'Dusting of furniture, fans, and light fixtures',
      'Window and grill cleaning (interior)',
      'Mopping and vacuuming of floors',
      'Cleaning exterior surfaces of appliances',
    ],
    dontList: [
      'Interior appliance cleaning (e.g., inside ovens, fridges)',
      'Painting or wall repair',
      'Plumbing or electrical repairs',
    ],
  },
  {
    id: 'kitchen',
    title: 'Kitchen Cleaning',
    image: 'assets/img/service/kitchen.jpg',
    amount: '₹1299',
    doList: [
      'Wiping countertops and tile backsplash',
      'Cleaning stove tops and chimney exterior',
      'Sink scrubbing and disinfecting',
      'Cleaning exterior of cabinets',
      'Floor mopping and degreasing',
    ],
    dontList: [
      'Cleaning inside cabinets (unless pre-approved)',
      'Handling broken pipes or leakage',
      'Chimney dismantling or internal deep cleaning',
    ],
  },
  {
    id: 'bathroom',
    title: 'Bathroom Cleaning',
    image: 'assets/img/service/bathroom.png',
    amount: '₹599',
    doList: [
      'Cleaning WC, wash basins, and tiles',
      'Disinfecting taps, showers, and faucets',
      'Mirror and exhaust fan cleaning',
      'Removal of stains and floor scrubbing',
    ],
    dontList: [
      'Plumbing repair or unclogging drains',
      'Broken tile/grout restoration',
      'Replacement of fittings or hardware',
    ],
  },
  {
    id: 'bedroom',
    title: 'Bedroom Cleaning',
    image: 'assets/img/service/bedroom.jpg',
    amount: '₹1299',
    doList: [
      'Dusting and wiping surfaces, furniture, and decor',
      'Window glass and sill cleaning (interior)',
      'Mirror polishing and cobweb removal',
      'Floor vacuuming and mopping',
    ],
    dontList: [
      'Interior wardrobe cleaning (unless pre-requested)',
      'Moving heavy or delicate furniture without assistance',
      'Electrical fixture repair',
    ],
  },
  {
    id: 'sofa',
    title: 'Sofa Cleaning',
    image: 'assets/img/service/sofa.jpg',
    amount: '₹250 per Seat',
    doList: [
      'Dry vacuuming',
      'Shampooing (fabric only)',
      'Hand scrub cleaning'
    ],
    dontList: [
      'Repairing sofa structure or springs',
      'Deep leather treatment (unless pre-approved)',
      'Guarantee of 100% stain removal',
      'Machine cleaning (as it may pose a risk of damaging the fabric)'
    ],
  },
  {
    id: 'mattress',
    title: 'Mattress Cleaning',
    image: 'assets/img/service/mattress.jpg',
    amount: '₹799',
    doList: [
      'Dry vacuuming',
      'Shampooing (fabric only)',
      'Hand scrub cleaning',
      'Machine cleaning (as it may pose a risk of damaging the fabric)'
    ],
    dontList: [
      'Washing or soaking the mattress',
      'Instant drying (drying time needed post-cleaning)',
      'Treating mold or deep stains that have penetrated layers',
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Cleaning',
    image: 'assets/img/service/commercial.jpg',
    doList: [
      'Cleaning of office desks, chairs, and common surfaces',
      'Sanitization of restrooms and break areas',
      'Mopping and vacuuming of floors',
      'Glass and window partition cleaning',
    ],
    dontList: [
      'Industrial machinery cleaning',
      'High-rise facade glass cleaning',
      'Repairs or hazardous waste removal',
    ],
  },
];


const ServicesDetailsFaq = () => {
  const [isOpen, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const offset = 80; // adjust based on your header height
    if (section) {
      const y = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen}
        videoId="o4GuSJYSzrY" onClose={() => setOpen(false)} />

      <section className="tp-service-details-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="tp-faqs-left">
                <div className="tp-faqs-left-sidebar tp-services-sidebar mb-30 p-3 bg-white rounded-4 shadow-sm">
                  <h4 className="tp-faqs-left-sidebar-title mb-4 fw-bold">Explore Our Services</h4>
                  <div className="d-grid gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => scrollToSection(cat.id)}
                        className="btn btn-outline-dark d-flex align-items-center justify-content-between px-3 py-2 rounded-pill text-start"
                        style={{ fontSize: '15px', transition: 'all 0.3s' }}
                      >
                        <span>{cat.title}</span>
                        <FaArrowRight />
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            <div className="col-xl-9 col-lg-8">
              <div className="tp-service-details">
                <h2 className="tp-section-title heading-color-black pt-10 mb-20">Making A Clean Difference</h2>
                <p className="mb-40">Our professional cleaning services are designed to refresh and revitalize your space. We use eco-friendly products and modern tools to ensure top-quality results for every corner of your home or office.</p>

                {categories.map((cat) => (
                  <div id={cat.id} key={cat.id} className="mb-60">
                    <div className="card border-0 shadow-sm overflow-hidden rounded-4 mb-4">
                      <div className="row g-0 align-items-center">
                        <div className="col-md-5">
                          <div className="overflow-hidden rounded-start-4">
                            <img
                              src={cat.image}
                              alt={cat.title}
                              className="img-fluid category-img-zoom"
                            />
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div className="card-body px-4 py-3">
                            <h3 className="text-dark fw-semibold mb-2">{cat.title}</h3>
                            {cat.amount && (
                            <p className="text-muted mb-3"><strong>Starts At:</strong> {cat.amount}</p>
                            )}
                            <div className="mb-2">
                              <strong className="text-success">What’s Included ✅</strong>
                              <ul className="text-muted ps-3 mt-2" style={{ listStyleType: 'disc' }}>
                                {cat.doList.map((item, idx) => (
                                  <li key={`do-${idx}`}>{item}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <strong className="text-danger">What’s Not Included ❌</strong>
                              <ul className="text-muted ps-3 mt-2" style={{ listStyleType: 'disc' }}>
                                {cat.dontList.map((item, idx) => (
                                  <li key={`dont-${idx}`}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}


                <h3 className="tp-service-details-subtitle mb-20">Why Choose Us</h3>
                <p className="mb-35">Trained staff, reliable service, transparent pricing, eco-friendly cleaning agents, and 100% satisfaction guarantee. We’re here to make your space shine – every time!</p>
                <div className="row">
                  <div className="col-xl-4 col-md-6">
                    <div className="tp-service-details-feature text-center bg-gray-light mb-40">
                      <div className="tp-feature-three-icon mb-25">
                        <img src="assets/img/icon/service-feature.png" className="img-fluid" alt="img not found" />
                        <i className="flaticon-booking"></i>
                      </div>
                      <h4 className="tp-service-details-feature-title">
                        <Link to="/servicesDetails">Information for Any <br />Services</Link></h4>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="tp-service-details-feature text-center bg-gray-light mb-40">
                      <div className="tp-feature-three-icon mb-25">
                        <img src="assets/img/icon/service-feature.png" className="img-fluid" alt="img not found" />
                        <i className="flaticon-delivery-box"></i>
                      </div>
                      <h4 className="tp-service-details-feature-title">
                        <Link to="/servicesDetails">Customer Support <br />WhatsApp Chat</Link></h4>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="tp-service-details-feature text-center bg-gray-light mb-40">
                      <div className="tp-feature-three-icon mb-25">
                        <img src="assets/img/icon/service-feature.png" className="img-fluid" alt="img not found" />
                        <i className="flaticon-boy"></i>
                      </div>
                      <h4 className="tp-service-details-feature-title">
                        <Link to="/servicesDetails">Book Appointment <br />in online</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesDetailsFaq;