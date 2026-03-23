import { Link } from 'react-router-dom';
import FadeIn from '../shared/FadeIn/FadeIn';

const HomeThreeHeroSlide = () => {
   return (
      <>
         <div className="tp-single-slider-three tp-slider-height-three d-flex align-items-center swiper-slide" data-swiper-autoplay="5000">
            <div className="slide-bg slide_bg_three"></div>
            <div className="slider-img-three">
               <img src="assets/img/slider/slider-img-3.png" className="img-fluid" alt="img not found" />
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="tp-slider-three z-index">
                        <FadeIn left block>
                           <h6 className="tp-slider-three-subtitle">
                              <img src="assets/img/icon/slider-icon-1.png" className="img-fluid" alt="img not found" /> Fast and efficient service
                           </h6>
                        </FadeIn>

                        <FadeIn right block>
                           <h1 className="tp-slider-three-title">
                              Chennai&apos;s
                              <br />
                              Trusted Cleaning
                              <br />
                              Guaranteed!
                           </h1>
                        </FadeIn>

                        <FadeIn bottom block>
                           <div className="tp-slider-three-btn">
                              <Link to="/about" className="yellow-btn">
                                 <i className="flaticon-enter"></i> Learn More
                              </Link>
                           </div>
                        </FadeIn>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeThreeHeroSlide;
