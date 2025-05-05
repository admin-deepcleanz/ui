import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

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

                                <Fade left>
                                    <h6 className="tp-slider-three-subtitle" ><img src="assets/img/icon/slider-icon-1.png" className="img-fluid" alt="img not found" /> Fast and efficient service</h6>
                                </Fade>

                                <Fade right>
                                    <h1 className="tp-slider-three-title">Cleaning
                                        <br />Excellence <br />Guaranteed!</h1>
                                </Fade>

                                <Fade bottom>
                                    <div className="tp-slider-three-btn">
                                        <Link to="/about" className="yellow-btn">
                                            <i className="flaticon-enter"></i> Learn More</Link>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeThreeHeroSlide;