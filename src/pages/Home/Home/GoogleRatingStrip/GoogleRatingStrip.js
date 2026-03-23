import React from 'react';
import { FaGoogle, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import '../Reviews/googleReviews.css';

const GoogleRatingStrip = () => {
   return (
      <section className="google-rating-strip pt-25 pb-25">
         <div className="container">
            <div className="google-rating-strip__card">
               <div className="google-rating-strip__summary">
                  <div className="google-rating-strip__badge">
                     <FaGoogle />
                  </div>
                  <div>
                     <p className="google-rating-strip__title">Rated 4.7/5 on Google</p>
                     <div className="google-rating-strip__meta">
                        <span className="google-stars">
                           <FaStar />
                           <FaStar />
                           <FaStar />
                           <FaStar />
                           <FaStarHalfAlt />
                        </span>
                        <span>Based on 70 customer reviews</span>
                     </div>
                  </div>
               </div>

               <a
                  href="https://maps.app.goo.gl/8eaRtPbwnZ74kt4L8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-btn text-white"
               >
                  <i className="flaticon-enter"></i> View Google Reviews
               </a>
            </div>
         </div>
      </section>
   );
};

export default GoogleRatingStrip;
