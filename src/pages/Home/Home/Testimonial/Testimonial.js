import React from 'react';
import { FaGoogle, FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import '../Reviews/googleReviews.css';

const reviews = [
   {
      name: 'Dinesh Nagarajan',
      meta: '2 reviews',
      date: 'April 4, 2026',
      service: '3BHK Full House Cleaning',
      review:
         'Six months ago, I contacted their service for full house cleaning of my 3BHK home. The work was much neater and cleaner than I expected, and they completed it at a very reasonable budget. Recently, I contacted them again for cleaning the three bathrooms in my 3BHK house. Once again, they delivered excellent service and gave complete satisfaction with their work. They arrived exactly at the promised time and completed the work properly.',
   },
   {
      name: 'Kalaivani Parthasarathy',
      meta: '6 reviews',
      date: 'April 4, 2026',
      service: 'Full Home Deep Cleaning',
      review:
         'I recently booked a full home deep cleaning service for my home, and I am extremely satisfied with the results. The team arrived on time, brought all necessary equipment, and paid attention to every detail. They cleaned areas that are usually overlooked, and my home feels fresh and hygienic. The staff was polite, professional, and efficient.',
   },
   {
      name: 'Balaji Prabhakaran',
      meta: '6 reviews',
      date: 'March 28, 2026',
      service: 'New House Cleaning',
      review:
         'Had cleaning for our new house, excellent cleaning and highly recommended. Sheriff and Raja did a good job in cleaning and helped us well.',
   },
];

const renderStars = () => (
   <>
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStarHalfAlt />
   </>
);

const GoogleWordmark = () => (
   <span className="google-wordmark">
      <span className="google-wordmark__g1">G</span>
      <span className="google-wordmark__g2">o</span>
      <span className="google-wordmark__g3">o</span>
      <span className="google-wordmark__g4">g</span>
      <span className="google-wordmark__g5">l</span>
      <span className="google-wordmark__g6">e</span>
   </span>
);

const getInitials = (name) =>
   name
      .split(' ')
      .slice(0, 2)
      .map((part) => part[0])
      .join('')
      .toUpperCase();

const Testimonial = () => {
   return (
      <section className="google-reviews-section tp-testimonial-area position-relative pt-50 pb-70">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-8 col-lg-10">
                  <div className="section-title-wrapper text-center mb-45 wow fadeInUp" data-wow-delay=".1s">
                     <span className="premium-home__eyebrow mb-20" style={{display:'inline-flex', marginBottom:'16px'}}>Reviews</span>
                     <h2 className="tp-section-title mb-20">Trusted by Homeowners Across Chennai</h2>
                     <p>Real feedback from customers who booked DeepCleanz for home cleaning.</p>
                  </div>
               </div>
            </div>

            <div className="row justify-content-center mb-35">
               <div className="col-xl-7 col-lg-9">
                  <div className="google-reviews-section__hero wow fadeInUp" data-wow-delay=".2s">
                     <div className="d-flex flex-wrap justify-content-between align-items-center" style={{ gap: '1rem' }}>
                        <div>
                           <div className="google-reviews-section__brand-row">
                              <span className="google-reviews-section__icon">
                                 <FaGoogle />
                              </span>
                              <div>
                                 <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#202124' }}>
                                    <GoogleWordmark /> Reviews
                                 </div>
                                 <div className="google-reviews-section__brand-text">DeepCleanz</div>
                              </div>
                           </div>
                           <div className="google-reviews-section__rating-row">
                              <span className="google-reviews-section__score">4.7</span>
                              <div>
                                 <div className="google-stars">{renderStars()}</div>
                                 <div className="google-reviews-section__muted" style={{ fontSize: '0.95rem' }}>Based on 70 reviews</div>
                              </div>
                           </div>
                        </div>
                        <div className="google-reviews-section__actions">
                           <a
                              href="https://maps.app.goo.gl/8eaRtPbwnZ74kt4L8"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="theme-btn text-white"
                           >
                              <i className="flaticon-enter"></i> Read Reviews on Google
                           </a>
                           <a
                              href="https://g.page/r/CXp6yoLd2ls0EBM/review"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="yellow-btn premium-home__secondary-action"
                           >
                              <i className="flaticon-enter"></i> Leave a Review
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="row">
               {reviews.map((item, index) => (
                  <div className="col-lg-4 col-md-6" key={item.name}>
                     <div className="google-review-card wow fadeInUp mb-30" data-wow-delay={`${0.2 + index * 0.15}s`}>
                        <div className="google-review-card__header">
                           <div className="google-review-card__author">
                              <div className="google-review-card__avatar">
                                 {getInitials(item.name)}
                              </div>
                              <div>
                                 <h4 className="google-review-card__name">{item.name}</h4>
                                 <div className="google-review-card__meta">{item.meta}</div>
                              </div>
                           </div>
                           <span style={{ fontSize: '1.35rem' }}>
                              <GoogleWordmark />
                           </span>
                        </div>

                        <div className="d-flex align-items-center flex-wrap mb-15" style={{ gap: '0.55rem' }}>
                           <div className="google-stars">{renderStars()}</div>
                           <span className="google-review-card__date">{item.date}</span>
                        </div>

                        <div className="google-review-card__service">
                           <FaRegStar style={{ color: '#fbbc04' }} />
                           {item.service}
                        </div>

                        <p className="google-review-card__copy">{item.review}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Testimonial;
